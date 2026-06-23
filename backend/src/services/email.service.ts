import nodemailer from "nodemailer";

const getTransporter = () => {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
};

export async function sendLeadNotification(leadData: {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  serviceInterest: string;
  preferredContactMethod: string;
  message: string;
}) {
  const transporter = getTransporter();
  const adminEmail = process.env.ADMIN_EMAIL || "contact@suasiongroup.in";

  const emailSubject = `[New Lead] Suasion Group: ${leadData.serviceInterest} Inquiry from ${leadData.fullName}`;
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; border: 1px solid #D4AF37; padding: 20px; border-radius: 8px;">
      <h2 style="color: #082A6B; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">New Consultation Request</h2>
      <p style="font-size: 14px; color: #1F2937;">A new lead has been submitted on the Suasion Group website. Below are the details:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px;">
        <tr style="background-color: #F8F5EF;">
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd; width: 35%;">Full Name</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${leadData.fullName}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Phone</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="tel:${leadData.phone}">${leadData.phone}</a></td>
        </tr>
        <tr style="background-color: #F8F5EF;">
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Email</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="mailto:${leadData.email}">${leadData.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">City</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${leadData.city}</td>
        </tr>
        <tr style="background-color: #F8F5EF;">
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Service Interest</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; color: #0F766E; font-weight: bold;">${leadData.serviceInterest}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Contact Method</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${leadData.preferredContactMethod}</td>
        </tr>
      </table>
      
      <div style="margin-top: 20px; background-color: #F8F5EF; padding: 15px; border-radius: 4px; font-size: 14px; border-left: 4px solid #D4AF37;">
        <strong>Client Message:</strong><br/>
        <p style="margin-top: 5px; font-style: italic; white-space: pre-wrap;">${leadData.message}</p>
      </div>
      
      <p style="font-size: 12px; color: #777; margin-top: 25px; border-top: 1px solid #eee; padding-top: 10px; text-align: center;">
        This is an automated notification from the Suasion Group website backend.
      </p>
    </div>
  `;

  if (!transporter) {
    console.log("----------------------------------------");
    console.warn("SMTP settings are not configured in .env. Logging lead to console:");
    console.log(emailSubject);
    console.log(`Lead details:`, leadData);
    console.log("----------------------------------------");
    return;
  }

  try {
    await transporter.sendMail({
      from: `"Suasion Group Website" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      subject: emailSubject,
      html: emailHtml,
    });
    console.log(`Lead email notification sent successfully to ${adminEmail}`);
  } catch (error) {
    console.error("Failed to send lead email notification:", error);
  }
}
