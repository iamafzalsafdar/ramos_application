import React from "react";
import EfficiencyImg from "../../assets/efficiency.PNG";

const Efficiency = () => {
  return (
    <div className="py-20 px-12 ">
      <div>
        <div>
          <div className="">
            <div
              className="text-9xl font-normal font-urbanist text-left"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Maximize <span className="text-gray-300">Efficency</span>
            </div>
          </div>
          <div
            className="text-9xl font-normal font-urbanist text-left"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            with our intuitive
          </div>
          <img
            src={EfficiencyImg}
            className="w-full"
            data-aos="zoom-in"
            data-aos-duration="2000"
          />
        </div>
      </div>
      <hr className="h-3 text-gray-500 " />
      <div className="pt-5 flex justify-between ">
        <div
          className="text-lg font-normal font-urbanist text-left w-[58%]"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          Explore traffic sources, page behaviour, conversions and more to gain
          deep insight into your audience. With us, you business doesn't just
          adapt - it evolves
        </div>
        <div className="flex gap-3" data-aos="zoom-in" data-aos-duration="3000">
          <div className="bg-[#f0f0f0] p-2 flex items-center justify-center text-black font-urbanist rounded-lg w-40 shadow-md">
            Request a demo
          </div>
          <div className="bg-[#fe4a23] p-2 flex items-center justify-center text-white font-urbanist rounded-lg w-40 shadow-md">
            Start for free
          </div>
        </div>
      </div>
    </div>
  );
};

export default Efficiency;
