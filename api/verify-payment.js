import { sql } from "./db.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(455).json({ error: "Method not allowed. Use GET." });
  }

  try {
    const { reference } = req.query;

    if (!reference) {
      return res.status(400).json({ error: "Missing reference query parameter." });
    }

    const paystackSecret = process.env.PAYSTACK_SECRET_KEY;
    if (!paystackSecret) {
      return res.status(500).json({ error: "Paystack secret key is not configured." });
    }

    // 1. Call Paystack Verify API
    const paystackResponse = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${paystackSecret}`
      }
    });

    const paystackData = await paystackResponse.json();

    if (!paystackResponse.ok || !paystackData.status) {
      console.error("Paystack Verification Request Failed:", paystackData);
      return res.status(400).json({ error: paystackData.message || "Failed to verify payment with Paystack." });
    }

    const transaction = paystackData.data;
    const isSuccess = transaction.status === "success";
    const statusText = isSuccess ? "success" : "failed";
    const registrationStatus = isSuccess ? "completed" : "failed";

    // 2. Update Payments table
    await sql`
      UPDATE payments
      SET status = ${statusText},
          updated_at = NOW(),
          gateway_response = ${JSON.stringify(transaction)}
      WHERE reference = ${reference}
    `;

    // 3. Update Registrations table
    await sql`
      UPDATE registrations
      SET payment_status = ${registrationStatus}
      WHERE payment_reference = ${reference}
    `;

    // 4. Fetch the full registration and payment details to return
    const regRows = await sql`
      SELECT * FROM registrations WHERE payment_reference = ${reference}
    `;
    const registration = regRows[0];

    if (!registration) {
      return res.status(404).json({ error: "Associated registration not found." });
    }

    return res.status(200).json({
      success: isSuccess,
      data: {
        customer_name: registration.full_name,
        program: registration.program,
        payment_status: registrationStatus,
        reference: reference,
        date: registration.created_at,
        amount: transaction.amount / 100 // in NGN
      }
    });

  } catch (error) {
    console.error("Verify Payment Error:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
}
