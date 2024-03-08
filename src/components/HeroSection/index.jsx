import React from "react";
import HeroBanner1 from "../../assets/heroBanner1.PNG";
import HeroBanner2 from "../../assets/heroBanner2.PNG";
import HeroBanner3 from "../../assets/heroBanner3.PNG";

const HeroBanner = () => {
  return (
    <div className="py-20 px-12 ">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-8 pt-3 ">
          <div className="pl-28">
            <div
              className="w-40 float-left "
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <img className="h-28 w-40 " src={HeroBanner1} alt="" />
            </div>
            <div
              className="text-9xl font-normal font-urbanist float-left"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Analytics
            </div>
          </div>
          <div
            className="text-9xl font-normal font-urbanist clear-both "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            that{" "}
            <span
              className="text-gray-300"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              helps
            </span>{" "}
            you
          </div>
        </div>
        <div class="col-span-4 " data-aos="zoom-in" data-aos-duration="3000">
          <img className="h-[240px] w-[400px] " src={HeroBanner2} alt="" />
        </div>
      </div>
      <div className="float-end pb-12">
        <div
          className="text-9xl font-normal font-urbanist float-left "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          shape
        </div>
        <img
          src={HeroBanner3}
          alt=""
          className="float-left pt-7 "
          data-aos="zoom-in"
          data-aos-duration="3000"
        />
        <div
          className="text-9xl font-normal font-urbanist float-left"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          the future
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
