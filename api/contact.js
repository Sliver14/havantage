import { sql } from "./db.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(455).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const { full_name, email, phone, reason, message } = req.body;

    // Simple validation
    if (!full_name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields (full_name, email, message)." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    await sql`
      INSERT INTO contacts (full_name, email, phone, reason, message)
      VALUES (${full_name.trim()}, ${email.trim().toLowerCase()}, ${phone ? phone.trim() : null}, ${reason || null}, ${message.trim()})
    `;

    return res.status(200).json({ success: true, message: "Contact message stored successfully." });
  } catch (error) {
    console.error("Contact Form Error:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
}