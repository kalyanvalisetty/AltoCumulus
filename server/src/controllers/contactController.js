import transporter from "../config/mailer.js";

export const sendContactMail = async (req, res) => {
  const { name, email, phone, graduation, percentage } = req.body;

  if (!name || !email || !phone || !graduation || !percentage) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    await transporter.sendMail({
      from: `"Altocumulus Technologies" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Cloud Training Enquiry",
      html: `
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Graduation:</b> ${graduation}</p>
    <p><b>Percentage:</b> ${percentage}</p>
  `,
    });
    res.status(200).json({ message: "Email sent" });
  } catch (error) {
    console.error("MAIL ERROR:", error);
    res.status(500).json({ message: "Mail failed" });
  }
};
