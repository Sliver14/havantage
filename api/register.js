import { sql } from "./db.js";

// Helper function to generate a unique reference
function generateReference() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let ref = "HAV-";
  for (let i = 0; i < 8; i++) {
    ref += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return ref;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(455).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const {
      full_name,
      email,
      phone,
      location,
      program,
      career_stage,
      interest_reason,
      reason,
      preferred_format,
      learning_mode,
      source,
      referral_source,
      consent
    } = req.body;

    const actualReason = interest_reason || reason;
    const actualFormat = preferred_format || learning_mode;
    const actualSource = source || referral_source;

    // Validation
    if (!full_name || !email || !phone || !location || !program || !career_stage || !actualReason || !actualFormat) {
      return res.status(400).json({ error: "Missing required fields for program registration." });
    }

    const emailTrimmed = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailTrimmed)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    const reference = generateReference();
    const isConsent = consent === true || consent === "true" || consent === "on";

    const rows = await sql`
      INSERT INTO registrations (
        full_name, email, phone, location, program, career_stage,
        interest_reason, preferred_format, source, consent,
        payment_status, payment_reference
      )
      VALUES (
        ${full_name.trim()}, ${emailTrimmed}, ${phone.trim()}, ${location.trim()}, ${program.trim()}, ${career_stage.trim()},
        ${actualReason.trim()}, ${actualFormat.trim()}, ${actualSource ? actualSource.trim() : null}, ${isConsent},
        'pending', ${reference}
      )
      RETURNING id, payment_reference
    `;

    const registration = rows[0];

    return res.status(200).json({
      success: true,
      message: "Registration saved successfully.",
      registration_id: registration.id,
      reference: registration.payment_reference
    });
  } catch (error) {
    console.error("Registration Form Error:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
}
