"use client";
import Image from "next/image";
import React from "react";
import docdp from "../../../public/person1.jpg";
import DateInput from "./date/dates";
import TimeInput from "./time/time";

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
          </div>
          <div className="w-full text-dark-green break-words text-lg">
            <strong>Expertise: </strong>
          </div>
          <div className="w-full text-dark-green break-words text-lg">
            <strong>Experience: </strong>
          </div>
          <div className="w-full text-dark-green break-words">
            <strong className="text-lg">About: </strong> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Deserunt ea, iusto expedita
            nesciunt, ullam, quasi dolorum adipisci ratione sint veritatis
            aspernatur amet necessitatibus mollitia quod officiis vero? Numquam,
            pariatur vitae? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aspernatur repellat eveniet enim molestias corporis
            praesentium distinctio est libero earum voluptate, minima quae
            perspiciatis aliquid, natus expedita. Placeat nemo fuga aliquam!
          </div>
        </div>
        <div className="max-h-1/2 w-9/10  bg-white-green m-5 rounded-2xl drop-shadow-2xl flex flex-col place-content-center ">
          <div className="w-9/10 bg-sec-red text-white-green p-4 rounded-xl text-center text-3xl">
            AVAILABLE SCHEDULE
          </div>
          {/* <div><TimeInput/></div> */}
          <div>
            <div className="w-full  text-dark-green  grid-rows-4 ">
              <button className="w-fit bg-dark-green text-white-green p-2 m-4 rounded-lg hover:scale-105 hover:bg-sec-red ">
                26/10/2023 | 9:30 AM
              </button>
              <button className="w-fit bg-dark-green text-white-green p-2 m-4 rounded-lg hover:scale-105 hover:bg-sec-red ">
                26/10/2023 | 9:30 AM
              </button>
              <button className="w-fit bg-dark-green text-white-green p-2 m-4 rounded-lg hover:scale-105 hover:bg-sec-red ">
                26/10/2023 | 9:30 AM
              </button>
              <button className="w-fit bg-dark-green text-white-green p-2 m-4 rounded-lg hover:scale-105 hover:bg-sec-red ">
                26/10/2023 | 9:30 AM
              </button>
              <button className="w-fit bg-dark-green text-white-green p-2 m-4 rounded-lg hover:scale-105 hover:bg-sec-red ">
                26/10/2023 | 9:30 AM
              </button>
              <button className="w-fit bg-dark-green text-white-green p-2 m-4 rounded-lg hover:scale-105 hover:bg-sec-red ">
                26/10/2023 | 9:30 AM
              </button>
              <button className="w-fit bg-dark-green text-white-green p-2 m-4 rounded-lg hover:scale-105 hover:bg-sec-red ">
                26/10/2023 | 9:30 AM
              </button>
              <button className="w-fit bg-dark-green text-white-green p-2 m-4 rounded-lg hover:scale-105 hover:bg-sec-red ">
                26/10/2023 | 9:30 AM
              </button>
              <button className="w-fit bg-dark-green text-white-green p-2 m-4 rounded-lg hover:scale-105 hover:bg-sec-red ">
                26/10/2023 | 9:30 AM
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
