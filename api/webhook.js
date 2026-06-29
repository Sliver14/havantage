import crypto from "crypto";
import { sql } from "./db.js";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(455).json({ error: "Method not allowed. Use POST." });
    }

    try {
        const signature = req.headers["x-paystack-signature"];
        if (!signature) {
            return res.status(401).json({ error: "Unauthorized. Missing signature." });
        }

        const secret = process.env.PAYSTACK_WEBHOOK_SECRET || process.env.PAYSTACK_SECRET_KEY;
        if (!secret) {
            return res.status(500).json({ error: "Paystack webhook secret key is not configured." });
        }

        // Since Vercel automatically parses req.body, we stringify it to compute the HMAC.
        const payload = JSON.stringify(req.body);
        const hash = crypto.createHmac("sha512", secret).update(payload).digest("hex");

        if (hash !== signature) {
            // In some environments, JSON.stringify can reorder properties or change spacing.
            // We will log a warning, but for security, we'll validate it.
            // If verification fails, we return a 400 error.
            console.error("Paystack Webhook Signature Verification Failed");
            return res.status(400).json({ error: "Signature verification failed." });
        }

        const { event, data } = req.body;

        if (event === "charge.success") {
            const reference = data.reference;
            const statusText = data.status === "success" ? "success" : "failed";
            const registrationStatus = data.status === "success" ? "completed" : "failed";

            // 1. Update payments record
            await sql`
        UPDATE payments
        SET status = ${statusText},
            updated_at = NOW(),
            gateway_response = ${JSON.stringify(data)}
        WHERE reference = ${reference}
      `;

            // 2. Update registrations record
            await sql`
        UPDATE registrations
        SET payment_status = ${registrationStatus}
        WHERE payment_reference = ${reference}
      `;

            console.log(`Successfully verified and processed webhook for ref: ${reference}`);
        }

        return res.status(200).json({ status: "success", message: "Webhook processed." });

    } catch (error) {
        console.error("Paystack Webhook Error:", error);
        return res.status(500).json({ error: "Internal server error." });
    }
}
