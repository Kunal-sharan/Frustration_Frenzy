"use client";
import Link from "next/link";
import React from "react";
import VideoLeft from "../Components/VideoLeft";
import homeVideo from "../../public/home_video.mp4"

const ContinueAs = () => {
  return (
    <><div className="w-full h-full ">
      <VideoLeft url={homeVideo} />
    </div>
    
    <div className="flex flex-col absolute left-0 right-0 opacity-95 gap-10 items-center bg-white-green w-1/2 m-auto  p-20 mt-40 h-96 z-50 border-solid border-white border-8">

        <h1 className="font-bold text-4xl font-sans text-black">
          Continue As...
        </h1>
        <button className="btn btn-primary bg-[#618264] w-60 text-xl text-black hover:bg-white hover:drop-shadow-xl border-2 border-white hover:border-white">
          <Link href="/DoctorForm">Doctor</Link>
        </button>
        <Link href="/mainpage">
          <button className="btn btn-primary bg-[#618264] w-60 text-xl text-black hover:bg-white hover:drop-shadow-xl border-2 border-white hover:border-white">
            Client
          </button>
        </Link>
      </div></>
  );
};

export default ContinueAs;
