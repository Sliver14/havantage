import { sql } from "./db.js";
import { sendNotificationEmail } from "./email.js";

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

      try {
        await sendNotificationEmail(
          `New Talent Request from ${organisation}`,
          `<p>A new talent request has been received.</p>
           <p><strong>Organisation:</strong> ${organisation}</p>
           <p><strong>Contact Person:</strong> ${contact_person}</p>
           <p><strong>Work Email:</strong> ${work_email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Role Needed:</strong> ${role_needed}</p>
           <p><strong>Skills Required:</strong> ${skills_required}</p>
           <p><strong>Engagement Type:</strong> ${engagement_type}</p>
           <p><strong>Start Date:</strong> ${start_date || "N/A"}</p>
           <p><strong>Notes:</strong> ${notes || "N/A"}</p>`
        );
      } catch (e) {
        console.error("Notification Email Error:", e);
      }

      return res.status(200).json({ success: true, message: "Talent request submitted successfully." });

    } else if (form_type === "join_talent_network") {
      const { full_name, email, phone, current_role, interest_area, skills, portfolio, availability, job_type } = req.body;

      if (!full_name || !email || !phone || !current_role || !interest_area || !skills || !availability || !job_type) {
        return res.status(400).json({ error: "Missing required fields for talent network profile." });
      }

      await sql`
        INSERT INTO talent_network_profiles (full_name, email, phone, job_title, interest_area, skills, portfolio, availability, job_type)
        VALUES (${full_name.trim()}, ${email.trim().toLowerCase()}, ${phone.trim()}, ${current_role.trim()}, ${interest_area.trim()}, ${skills.trim()}, ${portfolio || null}, ${availability.trim()}, ${job_type.trim()})
      `;

      try {
        await sendNotificationEmail(
          `New Talent Network Registration - ${full_name}`,
          `<p>A new professional has joined the talent network.</p>
           <p><strong>Name:</strong> ${full_name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Current Role:</strong> ${current_role}</p>
           <p><strong>Area of Interest:</strong> ${interest_area}</p>
           <p><strong>Skills:</strong> ${skills}</p>
           <p><strong>Portfolio / CV:</strong> ${portfolio || "N/A"}</p>
           <p><strong>Availability:</strong> ${availability}</p>
           <p><strong>Job Type:</strong> ${job_type}</p>`
        );
      } catch (e) {
        console.error("Notification Email Error:", e);
      }

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

      try {
        await sendNotificationEmail(
          `New Corporate Support Request from ${organisation}`,
          `<p>A new corporate support request has been received.</p>
           <p><strong>Name:</strong> ${full_name}</p>
           <p><strong>Work Email:</strong> ${work_email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Organisation:</strong> ${organisation}</p>
           <p><strong>Role:</strong> ${role || "N/A"}</p>
           <p><strong>Support Needed:</strong> ${support_needed}</p>
           <p><strong>Team Size:</strong> ${team_size || "N/A"}</p>
           <p><strong>Preferred Timeline:</strong> ${timeline || "N/A"}</p>
           <p><strong>Challenge to Solve:</strong> ${challenge}</p>
           <p><strong>Preferred Contact Method:</strong> ${preferred_contact}</p>`
        );
      } catch (e) {
        console.error("Notification Email Error:", e);
      }

      return res.status(200).json({ success: true, message: "Consultation request submitted successfully." });
    }
  } catch (error) {
    console.error("Consultation Form Error:", error);
    return res.status(500).json({ error: error.message || "Internal server error." });
  }
}
