"use client"
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
let senduserdata={}
export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
 const [userformData, setuserFormData] = useState({
   email: "",
   subject:""
 });
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("/api/send", { email, subject, message });
      alert("Email sent successfully");
    } catch (error) {
      alert("An error occurred while sending the email");
    }
  };

  return (
    <form className="flex flex-col gap-1 p-8 bg-dark-green w-1/2 m-auto rounded-3xl my-10">
      <div className="flex flex-col gap-1 p-8 place-content-center">
        <label className="text-white-green font-semibold text-xl">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className=" text-black rounded-md p-1"
        />
        <label className="text-white-green font-semibold text-xl">
          subject
        </label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className=" text-black rounded-md p-1"
        />
        <label className="text-white-green font-semibold text-xl">
          message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className=" text-black rounded-md p-1"
        />
        <div className="my-4">
          <Link href="/pages/api">
            <button
              type="submit"
              className="btn btn-primary  bg-sec-red text-white-green w-60 hover:bg-primary-green"
              onClick={() => {
                userformData.email = email;
                userformData.subject = subject;
                senduserdata = userformData;
              }}
            >
              Send Email
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}
export {senduserdata};