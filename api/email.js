import nodemailer from "nodemailer";

export async function sendNotificationEmail(subject, htmlContent) {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT || 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    console.warn("Email notification skipped: SMTP environment variables (SMTP_HOST, SMTP_USER, SMTP_PASS) are not configured.");
    return false;
  }

  const transporter = nodemailer.createTransport({
    host,
    port: parseInt(port),
    secure: parseInt(port) === 465,
    auth: {
      user,
      pass
    }
  });

  const mailOptions = {
    from: `"Havantage Notifications" <${user}>`,
    to: "info.havantage@gmail.com",
    subject: `[Havantage Form] ${subject}`,
    html: htmlContent
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Notification email sent for: ${subject}`);
    return true;
  } catch (error) {
    console.error("Failed to send notification email:", error);
    return false;
  }
}
