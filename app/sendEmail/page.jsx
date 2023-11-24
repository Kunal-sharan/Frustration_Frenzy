"use client"
import { useState } from "react";
import axios from "axios";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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
    <form onSubmit={handleSubmit} className="flex flex-col gap-1 p-8">
      <label className="text-black">email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-white-green text-black"
      />
      <label className="text-black">subject</label>
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
        className="bg-white-green text-black"
      />
      <label className="text-black">message</label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="bg-white-green text-black"
      />
      <button type="submit" className="btn-primary">
        Send Email
      </button>
    </form>
  );
}
