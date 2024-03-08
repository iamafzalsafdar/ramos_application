import React from "react";
import logo from "../../assets/RamosLogo.png";
import Tabs from "./Tabs";

const NavBar = () => {
  return (
    <div className="bg-[#0d0d0d] border rounded-xl ">
      <div>
        <div
          className=" mx-auto flex max-w-[83rem] items-center justify-center  "
          aria-label="Global"
        >
          <div className="flex-1 flex">
            <a
              href="#"
              data-aos="fade-up"
              data-aos-duration="1500"
              className="m-1.5"
            >
              <img className="h-12" src={logo} alt="" />
            </a>
          </div>
          <Tabs />
          <div className="flex flex-1 justify-end">
            <div
              className="border rounded-lg bg-white h-11 w-20 flex justify-center items-center font-urbanist m-2"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
