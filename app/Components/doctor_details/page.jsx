"use client";
import Image from "next/image";
import React from "react";
import docdp from "../../../public/person1.jpg";
import DateInput from "./date/dates";
import TimeInput from "./time/time";
import Link from "next/link";
import axios from "axios";
import { aglePageKaData } from "../Form";
import { docSchedule } from "../Form";
export default function DoctorDetails() {
  return (
    <div className="w-full h-full flex flex-row bg-dark-green over">
      <div className="w-1/3 h-full">
        <Image src={docdp} width={500} height={500} />
      </div>
      <div className="w-2/3 h-full flex flex-col ">
        <div className="max-h-2/5 w-9/10 bg-white-green m-5 p-4 rounded-2xl drop-shadow-2xl ">
          <div className="w-full text-dark-green break-words text-lg">
            <strong>Name: </strong>
            {aglePageKaData.name || "martin luthar king"}
          </div>
          <div className="w-full text-dark-green break-words text-lg">
            <strong>Expertise: </strong>
            {aglePageKaData.expertise || "kjvjbknknjkhvh"}
          </div>
          <div className="w-full text-dark-green break-words text-lg">
            <strong>Experience: </strong>
            {aglePageKaData.experience || "jihjgchvjkhlj;hkvhj"}
          </div>
          <div className="w-full text-dark-green break-words">
            <strong className="text-lg">About: </strong>{" "}
            {aglePageKaData.about ||
              "lorem ipsum jhjvghbkjvhghbkjhgvkhjbkjhvgjbkjkugjkvbigciGCqjevcWHUEVQJB H GQULCGUCV  VEFGQJCGUVWD HJVVHJSVAJ GJGYQJV VVHQVW DCAHVCAQHVCJD VJ"}
          </div>
        </div>
        <div className="max-h-1/2 w-9/10  bg-white-green m-5 rounded-2xl drop-shadow-2xl flex flex-col place-content-center ">
          <div className="w-9/10 bg-sec-red text-white-green p-4 rounded-xl text-center text-3xl">
            AVAILABLE SCHEDULE
          </div>
          {/* <div><TimeInput/></div> */}
          <div>
            <div className="w-full  text-dark-green  grid-rows-4 ">
              {/* <input type="email" className="p-2" value={(txt)=>{
                setUserMail(txt)
              }} ></input>
              <button className="btn-primary" onClick={() => {
                  resend.emails.send({
                    from: "onboarding@resend.dev",
                    to: "sonusharan14@gmail.com",
                    subject: "Appointment booked",
                    html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
                  });
                }}
            >Submit</button> */}
              <Link href="/sendEmail" >
                <div>
                  {docSchedule.map((item, i) => (
                    <div key={i}>
                      <button
                        className="w-fit bg-dark-green text-white-green p-2 m-4 rounded-lg hover:scale-105 hover:bg-sec-red"
                        onClick={() => {
                          console.log(docSchedule);
                        }}
                      >
                        {item.date.toLocaleDateString()} |{" "}
                        {item.time.toString()}
                      </button>
                    </div>
                  ))}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
