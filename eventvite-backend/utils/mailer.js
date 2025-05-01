

const nodemailer = require("nodemailer");

async function sendInvitationEmail(toEmail, pdfPath) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: toEmail,
    subject: "You're Invited!",
    text: "Please find your invitation attached.",
    attachments: [
      {
        filename: "invitation.pdf",
        path: pdfPath,
      },
    ],
  };

  await transporter.sendMail(mailOptions);
}

module.exports = sendInvitationEmail;
