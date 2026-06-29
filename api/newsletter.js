import { sql } from "./db.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(455).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const { newsletter_email, email } = req.body;
    const targetEmail = newsletter_email || email;

    if (!targetEmail) {
      return res.status(400).json({ error: "Email is required." });
    }

    const emailTrimmed = targetEmail.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailTrimmed)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    // Insert or ignore if duplicate
    await sql`
      INSERT INTO newsletter_subscribers (email)
      VALUES (${emailTrimmed})
      ON CONFLICT (email) DO NOTHING
    `;

    return res.status(200).json({ success: true, message: "Subscribed to newsletter successfully." });
  } catch (error) {
    console.error("Newsletter Form Error:", error);
    return res.status(500).json({ error: error.message || "Internal server error." });
  }
}
