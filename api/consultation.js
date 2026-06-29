import { sql } from "./db.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(455).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const { form_type } = req.body;

    if (form_type === "hire_talent") {
      const { organisation, contact_person, work_email, phone, role_needed, skills_required, engagement_type, start_date, notes } = req.body;

      if (!organisation || !contact_person || !work_email || !phone || !role_needed || !skills_required || !engagement_type) {
        return res.status(400).json({ error: "Missing required fields for talent request." });
      }

      await sql`
        INSERT INTO hire_talent_requests (organisation, contact_person, work_email, phone, role_needed, skills_required, engagement_type, start_date, notes)
        VALUES (${organisation.trim()}, ${contact_person.trim()}, ${work_email.trim().toLowerCase()}, ${phone.trim()}, ${role_needed.trim()}, ${skills_required.trim()}, ${engagement_type.trim()}, ${start_date || null}, ${notes || null})
      `;
      return res.status(200).json({ success: true, message: "Talent request submitted successfully." });

    } else if (form_type === "join_talent_network") {
      const { full_name, email, phone, current_role, interest_area, skills, portfolio, availability, job_type } = req.body;

      if (!full_name || !email || !phone || !current_role || !interest_area || !skills || !availability || !job_type) {
        return res.status(400).json({ error: "Missing required fields for talent network profile." });
      }

      await sql`
        INSERT INTO talent_network_profiles (full_name, email, phone, current_role, interest_area, skills, portfolio, availability, job_type)
        VALUES (${full_name.trim()}, ${email.trim().toLowerCase()}, ${phone.trim()}, ${current_role.trim()}, ${interest_area.trim()}, ${skills.trim()}, ${portfolio || null}, ${availability.trim()}, ${job_type.trim()})
      `;
      return res.status(200).json({ success: true, message: "Profile registered in talent network successfully." });

    } else {
      // Default to corporate support / consultation
      const { full_name, work_email, phone, organisation, role, support_needed, team_size, timeline, challenge, preferred_contact } = req.body;

      if (!full_name || !work_email || !phone || !organisation || !support_needed || !challenge || !preferred_contact) {
        return res.status(400).json({ error: "Missing required fields for consultation request." });
      }

      await sql`
        INSERT INTO consultations (full_name, work_email, phone, organisation, role, support_needed, team_size, timeline, challenge, preferred_contact)
        VALUES (${full_name.trim()}, ${work_email.trim().toLowerCase()}, ${phone.trim()}, ${organisation.trim()}, ${role || null}, ${support_needed.trim()}, ${team_size || null}, ${timeline || null}, ${challenge.trim()}, ${preferred_contact.trim()})
      `;
      return res.status(200).json({ success: true, message: "Consultation request submitted successfully." });
    }
  } catch (error) {
    console.error("Consultation Form Error:", error);
    return res.status(500).json({ error: error.message || "Internal server error." });
  }
}
