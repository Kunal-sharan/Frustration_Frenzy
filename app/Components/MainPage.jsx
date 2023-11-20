import Image from "next/image";
import React from "react";
import bg from "./bg01.png";
import bgc1 from "./bg-c1.png";
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
      <div className="card w-96 bg-base-100 shadow-xl mt-5">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black">Shoes!</h2>
          <p className=" text-black">
            If a dog chews shoes whose shoes does he choose?
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
