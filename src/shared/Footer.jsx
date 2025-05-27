import React from "react";
import Logo from "../assets/Home/hero.png";

export const Footer = () => {
  return (
    <footer className="relative bg-black text-white mt-20">
      {/* Background Image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${Logo})` }}
        aria-hidden="true"
      ></div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Left side: Logo & Description */}
          <div>
            <img src={Logo} alt="Logo" className="w-[120px] mb-4" />
            <h1 className="text-2xl font-semibold mb-3">RV Maintenance & Management</h1>
            <p className="text-sm leading-relaxed max-w-xs">
              Welcome to your all-in-one RV management hub! From tracking your maintenance schedules
              and repairs to reviewing campgrounds and adding your RV details, we've made it easy
              for you to stay organized.
            </p>
          </div>

          {/* Middle left: Information links */}
          <div>
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
            <h2 className="text-lg font-semibold mb-4">Social Media</h2>
            <div className="flex space-x-5 items-center text-2xl">
              <a href="#" aria-label="Facebook" className="hover:text-gray-300">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#" aria-label="Messenger" className="hover:text-gray-300">
                <i className="fab fa-facebook-messenger"></i>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter subscription at the top right (optional) */}
        <div className="absolute top-5 right-5 flex space-x-2">
          <input
            type="email"
            placeholder="Your E-mail"
            className="px-3 py-2 rounded-md text-black focus:outline-none"
          />
          <button className="bg-cyan-400 text-black px-4 rounded-md font-semibold hover:bg-cyan-500 transition">
            Submit
          </button>
        </div>
      </div>
    </footer>
  );
};
