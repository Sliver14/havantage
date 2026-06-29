import { sql } from "./db.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(455).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const { registration_id, reference } = req.body;

    if (!registration_id && !reference) {
      return res.status(400).json({ error: "Missing registration_id or reference." });
    }

    // 1. Fetch registration details
    let registration;
    if (registration_id) {
      const rows = await sql`
        SELECT * FROM registrations WHERE id = ${registration_id}
      `;
      registration = rows[0];
    } else {
      const rows = await sql`
        SELECT * FROM registrations WHERE payment_reference = ${reference}
      `;
      registration = rows[0];
    }

    if (!registration) {
      return res.status(404).json({ error: "Registration not found." });
    }

    const amountNGN = 50000;
    const amountKobo = amountNGN * 100; // Paystack works with kobo

    // 2. Insert record into payments table
    await sql`
      INSERT INTO payments (reference, registration_id, amount, currency, status)
      VALUES (${registration.payment_reference}, ${registration.id}, ${amountNGN}, 'NGN', 'pending')
      ON CONFLICT (reference) DO NOTHING
    `;

    // 3. Call Paystack Initialize Transaction API
    const paystackSecret = process.env.PAYSTACK_SECRET_KEY;
    if (!paystackSecret) {
      return res.status(500).json({ error: "Paystack secret key is not configured." });
    }

    const host = req.headers.host || "localhost:3000";
    const protocol = host.includes("localhost") || host.includes("127.0.0.1") ? "http" : "https";
    const callbackUrl = `${protocol}://${host}/thank-you.html`;

    const paystackResponse = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${paystackSecret}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: registration.email,
        amount: amountKobo,
        reference: registration.payment_reference,
        callback_url: callbackUrl,
        metadata: {
          registration_id: registration.id,
          program: registration.program
        }
      })
    });

    const paystackData = await paystackResponse.json();

    if (!paystackResponse.ok || !paystackData.status) {
      console.error("Paystack Init Error:", paystackData);
      return res.status(400).json({ error: paystackData.message || "Failed to initialize payment with Paystack." });
    }

    return res.status(200).json({
      success: true,
      authorization_url: paystackData.data.authorization_url,
      reference: registration.payment_reference
    });

  } catch (error) {
    console.error("Initialize Payment Error:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
}
