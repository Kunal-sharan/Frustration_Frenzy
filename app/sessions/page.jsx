import Link from "next/link";
import React from "react";

const SessionBooking = () => {
  const arr = [
    "/person1.jpg",
    "/person2.jpg",
    "/person3.jpg",
    "/person4.jpg",
    "/person1.jpg",
    "/person2.jpg",
    "/person3.jpg",
    "/person4.jpg",
  ];

  return (
    <>
      <div className="grid place-content-center w-full h-full bg-white-green">
        <div className="text-dark-green text-4xl my-4">DOCTORS AVAILABLE</div>
        <div className="w-[90vw] h-[90vh] border-solid border-2 border-dark-green rounded-2xl grid grid-rows-3 grid-flow-col gap-4 p-4">
          {arr.map((src, i) => (
            <div
              key={i}
              className="w-full h-full border-solid border-1 border-dark-green rounded-2xl group drop-shadow-2xl hover:scale-105 ease-in duration-300 "
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="opacity-0 flex flex-col justify-between group-hover:opacity-100 group-hover:text-white-green w-full h-full rounded-2xl bg-black/40 ease-in duration-500 backdrop:blur-lg relative">
                <Link href="/Components/doctor_details">
                <button className="btn btn-primary bg-sec-red text-white-green absolute top-4 right-4">
                  Book Now
                </button>
                </Link>
                <div className="p-4 w-full">
                  <div className="">
                    <strong>Name:</strong>
                  </div>
                  <div className="">
                    <strong>Expertise: </strong>
                  </div>
                  <div className="">
                    <strong>Experience: </strong>
                  </div>
                  <div className="max-w-md">
                    <strong>About: </strong>
                    <p className="break-words text-sm">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Rem saepe beatae eaque fugiat labore perspiciatis
                      excepturi nulla quam ducimus nemo. Veniam enim harum,
                      voluptatem accusamus laudantium vel obcaecati consequatur
                      id?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SessionBooking;
