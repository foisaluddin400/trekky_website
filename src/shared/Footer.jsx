import React from "react";
import Logo from "../assets/Home/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        
        <div>
          <img src={Logo} alt="Logo" className="w-16 mb-4" />
          <h2 className="text-lg font-bold mb-2">Contact Information</h2>
          <p className="mb-1">Phone Number: +99 125 125894</p>
          <p className="mb-1">Email: DamieMail@Gmail.Com</p>
          <p className="mb-4">
            Address: 2118 Thornridge Cir.
            <br />
            Syracuse, Connecticut 35624
          </p>
          <p className="font-semibold">
            Have Questions? Reach Out Today For A Customized Solution!
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-bold mb-2">Services</h2>
          <ul className="space-y-1">
            <li>Structured Cabling (Copper And Fiber)</li>
            <li>Rack And Device Installation</li>
            <li>Break/Fix Services</li>
            <li>Network Migrations And Cutovers</li>
            <li>Site Surveys</li>
            <li>Deployment Of New Network Devices</li>
            <li>Consultations On Cutting-Edge Technologies</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-2">Quick Link</h2>
          <ul className="space-y-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Feedback</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p>Social Media</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
