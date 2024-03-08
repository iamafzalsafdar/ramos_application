import React from "react";
import Widget1 from "../../assets/widget1.PNG";
import Analytics from "../../assets/analytics.PNG";

const AnalyticsSection = () => {
  return (
    <div className="clear-both py-20 bg-[#f0f0f0] rounded-3xl">
      <div className="px-24">
        <div
          className="flex flex-row justify-between"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div>
            <div className="text-5xl font-normal font-urbanist text-left">
              Your Key to strategic
            </div>
            <div className="text-5xl font-normal font-urbanist">
              success through analytics
            </div>
          </div>
          <div className=" ">
            <div className="text-2xl font-normal font-urbanist">
              Ready for exciting, instantaneous,
            </div>
            <div className="text-2xl font-normal font-urbanist">
              all-accessible insights in real time?
            </div>
          </div>
        </div>
        <div
          className="pt-6 flex justify-between"
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <div className="border rounded-3xl bg-white">
            <div className="p-5">
              <div className="flex flex-row justify-between ">
                <div className=" flex flex-col justify-between w-[400px] ">
                  <div className="bg-[#ffd027] p-3 text-black font-urbanist rounded-md w-40 shadow-md">
                    Setting up reports
                  </div>
                  <div>
                    <div className=" text-xl font-medium text-black font-urbanist pr-5 ">
                      Fast and easy access to analytics
                    </div>
                    <div className="text-lg text-gray-700 font-urbanist pr-5">
                      One platform is a comprehensive system of solutions that
                      will be the first step towards digitalization of your
                      business
                    </div>
                  </div>
                </div>
                <div>
                  <img src={Analytics} />
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-3xl bg-[#0d0d0d] w-[380px]">
            <div className="py-7 px-9 ">
              <div>
                <img src={Widget1} className="w-[300px]" />
              </div>
              <div className="text-lg font-normal font-urbanist text-center text-white ">
                Widget Control
              </div>
              <div className="text-sm font-normal font-urbanist text-center text-white">
                Reports provide a comprehensive overview of important aspects of
                web analytics
              </div>
            </div>
          </div>
        </div>
        <div className="w-full" data-aos="fade-up" data-aos-duration="3000">
          <div className="flex flex-row justify-center pt-8 ">
            <div className="text-lg font-normal font-urbanist text-center flex items-end ">
              Upto
            </div>
            <div className="text-9xl font-normal font-urbanist text-center ">
              45%
            </div>
            <div className="text-sm items-center flex font-normal font-urbanist text-left w-[382px] pl-5">
              Increase your analytics efficncy by upto 45%. Unique algorithms
              provide insights from data, reduce time for analysis and save time
              for making important, informed decisions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
