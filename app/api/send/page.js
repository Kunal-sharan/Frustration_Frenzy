import { Resend } from "resend";

export default async function handler(req, res) {
  const { email, subject, message } = req.body;

  const resend = new Resend("re_Q1tVK3fW_Ns9F3ygX6i2T3JAtgifa1UmN");

  try {
    await resend.emails.send({
      from: "sonusharan14@gmail.com",
      to: email,
      subject: subject,
      html: message,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while sending the email" });
  }
}
