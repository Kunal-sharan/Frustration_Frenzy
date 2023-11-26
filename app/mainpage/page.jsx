"use client";
import Image from "next/image";
import React from "react";
import bg from "./bg01.png";
import bgc1 from "./bg-c1.png";
import rageroom from "./rageroom.jpg";
import session from "./session.jpg";
import info from "./info.jpg";
import Link from "next/link";
import VideoPage from "./VideoPage"
const MainPage = () => {
  return (
    <div className="w-full flex-col">
      <div className="w-full flex place-content-center ">
        <div className=" w-full h-[79vh] flex place-content-start relative">
          <div
            className="w-full h-[95vh] bg-contain bg-no-repeat"
            style={{ backgroundImage: "url('./bg01.jpg')" }}
          >
            <Image src={bg} className="w-full h-5/6" />
          </div>
          <div className="w-2/5 h-full absolute bg-white/20 backdrop-blur-lg grid place-content-start  ">
            <div className="rounded-3xl grid place-content-center">
              <Image
                src={bgc1}
                className="w-3/4 h-full  drop-shadow-xl  rounded-3xl"
              />
            </div>
            <div className="m-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ad
              sed aliquam maxime provident eum, debitis sunt corporis molestiae
              consequatur alias aliquid distinctio ullam asperiores nostrum
              dolor adipisci voluptates reiciendis.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full m-8 px-8 font-bold text-3xl text-dark-green">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aliquam
        numquam exercitationem quas.{" "}
      </div>
      <div className="flex gap-x-2 p-4 flex-row place-content-evenly">
        <div className="card w-96 bg-base-100 shadow-xl mt-5">
          <figure>
            <Image src={rageroom} />
          </figure>
          <div className="card-body card-compact drop-shadow-xl">
            <h2 className="card-title text-dark-green">Rage Room</h2>
            <p className=" text-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary bg-sec-red text-white-green">
                <Link href=""> Book Now</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-5">
          <figure>
            <Image src={session} />
          </figure>
          <div className="card-body card-compact">
            <h2 className="card-title text-dark-green">Personal Sessions</h2>
            <p className=" text-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <div className="card-actions justify-end">
              <Link href="/sessions">
                <button className="btn btn-primary  bg-sec-red text-white-green">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-5">
          <figure>
            <Image src={info} />
          </figure>
          <div className="card-body card-compact">
            <h2 className="card-title text-dark-green">Inspiraton Area</h2>
            <p className=" text-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary  bg-sec-red text-white-green">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <VideoPage />
      </div>
    </div>
  );
};

export default MainPage;
