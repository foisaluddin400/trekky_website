import React from "react";
import Logo from "../assets/Home/hero.png";
import face from "../assets/Home/face.png";
import mes from "../assets/Home/mes.png";
import ins from "../assets/Home/ins.png";
import inc from "../assets/Home/in.png";
export const Footer = () => {
  return (
    <footer className=" bg-[#F9B038] text-black mt-20">
      <div className=" max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Left side: Logo & Description */}
          <div>
            <img src={Logo} alt="Logo" className="w-[120px] mb-4" />
            <h1 className="text-2xl font-semibold mb-3">
              RV Maintenance & Management
            </h1>
            <p className="text-sm leading-relaxed max-w-xs">
              Welcome to your all-in-one RV management hub! From tracking your
              maintenance schedules and repairs to reviewing campgrounds and
              adding your RV details, we've made it easy for you to stay
              organized.
            </p>
          </div>

          {/* Middle left: Information links */}
          <div className="lg:pt-20">
            <h2 className="text-lg font-semibold mb-4">Information</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between cursor-pointer hover:text-gray-300">
                <span>About us</span>
                <span>&gt;</span>
              </li>
              <li className="flex justify-between cursor-pointer hover:text-gray-300">
                <span>Privacy policy</span>
                <span>&gt;</span>
              </li>
              <li className="flex justify-between cursor-pointer hover:text-gray-300">
                <span>Terms of conditions</span>
                <span>&gt;</span>
              </li>
            </ul>
          </div>

          {/* Middle right: Empty (can be used for other links or left blank) */}
          <div></div>

          {/* Right side: Social Media */}
          <div>
            <div className="">
              <input
                className="bg-[#484848] rounded text-white p-2"
                placeholder="Your E-mail"
              />
              <button className="bg-[#27E2F5] rounded ml-2 p-2">Submit</button>
            </div>
            {/* <h2 className="text-lg text-center mt-11 font-semibold mb-4">Social Media</h2>
            <div className="flex space-x-5 items-center">
              <div className="text-center">
                <div className="flex justify-center">
                  <img className="w-[50px]" src={face} alt="" />
                </div>
                <p>Facebook</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <img className="w-[50px]" src={mes} alt="" />
                </div>
                <p>Messenger</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <img className="w-[50px]" src={ins} alt="" />
                </div>
                <p>Instagram</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <img className="w-[50px]" src={inc} alt="" />
                </div>
                <p>Linkedin</p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Newsletter subscription at the top right (optional) */}
        
      </div>
    </footer>
  );
};

// secondery band flute bythwaita actor  

