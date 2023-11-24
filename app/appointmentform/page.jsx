// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
export default function ContactForm() {
  const [state, handleSubmit] = useForm("mgejjepk");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  const message ="Appointment booked at 9 AM"
  return (
    <div className='w-full h-full flex place-content-center'>
      <form
        className="flex flex-col gap-1 w-1/2 h-1/2 border-2 rounded-xl border-black p-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email" className="text-dark-green">
          Email Address
        </label>
        <input
          placeholder='Enter your email address'
          id="email"
          type="email"
          name="email"
          className="text-black bg-white-green p-2"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message" className="text-dark-green">
          Message
        </label>
        <textarea className="bg-white-green p-2 text-black" id="message" name="message" contentEditable="false" value={message} />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="btn btn-primary bg-sec-red text-white-green"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
}