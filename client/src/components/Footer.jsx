import React from "react";
import { assets } from "../assets/assets";
import {Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="logo" />
          <p className="w-full md:w-2/3 text-gray-400">
            Altocumulus Technologies Private Limited is a technology-driven
            company focused on building scalable, secure, and high-performance
            digital solutions. We specialize in modern web applications,
            cloud-native systems, and custom software development, helping
            businesses transform ideas into reliable, production-ready products.{" "}
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 text-white">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-400">
            <Link to='/' className="hover:text-white transition-colors">Home</Link>
            <Link to='/about' className="hover:text-white transition-colors">About us</Link>
            <Link to='/contact' className="hover:text-white transition-colors">Contact Us</Link>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 text-white">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-400">
            <li>+91-903-053-7606</li>
            <li>altocumulustechnologies@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="border-gray-800" />
        <p className="py-5 text-sm text-center text-gray-400">
          Copyright 2026@ altocumulustechnologies.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;