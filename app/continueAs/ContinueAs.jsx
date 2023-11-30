"use client";
import Link from "next/link";
import React from "react";
import VideoLeft from "../Components/VideoLeft";
import homeVideo from "../../public/home_video.mp4";

const ContinueAs = () => {
  return (
    <>
      <div className="w-full h-full ">
        <VideoLeft url={homeVideo} />
      </div>

      <div className="flex flex-col  absolute left-0 right-0  gap-10 items-center bg-white/40 w-2/5 m-auto  p-20 mt-40 h-96 z-50 border-solid rounded-3xl drop-shadow-5xl backdrop:blur-lg  ">
        <h1 className="font-bold text-5xl  text-black font-serif">
          CONTINUE AS..
        </h1>
        <button className="btn btn-primary bg-[#618264]/10 w-60 text-2xl text-black hover:bg-white hover:drop-shadow-xl border-2 border-white hover:border-white">
          <Link href="/DoctorForm">DOCTOR</Link>
        </button>
        <Link href="/mainpage">
          <button className="btn btn-primary bg-[#618264]/10 w-60 text-2xl text-black hover:bg-white hover:drop-shadow-xl border-2 border-white hover:border-white">
            CLIENT
          </button>
        </Link>
      </div>
    </>
  );
};

export default ContinueAs;
