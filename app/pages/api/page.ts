import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../../Components/components/email-template";
import { Resend } from "resend";
import { senduserdata } from "../../sendEmail/page";
const resend = new Resend("re_6V6zMi3g_XtqjFhrUVpgBUdM11oioeRSr");


export default async (req: NextApiRequest, res: NextApiResponse) => {
  let email=senduserdata.email;
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "mashburndead07@gmail.com",
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }),
    });

    // res.status(200).json(data);
  } catch (error) {
    console.log(error)
  }
};
