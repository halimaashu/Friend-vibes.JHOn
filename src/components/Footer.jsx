import React from "react";
import {
  FaFacebook,
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareInstagram, FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] py-20 space-y-4 mx-auto">
      <h1 className="text-5xl font-bold text-white text-center ">KeenKeeper</h1>
      <p className="text-gray-300 text-center">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <p className="text-2xl font-semibold text-gray-300 text-center">
        Social Links
      </p>
      <div className="flex gap-5 text-2xl text-gray-600  justify-center items-center">
        <a href="#" className="hover:text-blue-600">
          <FaFacebook />
        </a>

        <a href="#" className="hover:text-black">
          <FaGithub />
        </a>

        <a href="#" className="hover:text-blue-500">
          <FaLinkedin />
        </a>
      </div>
      <div className="text-xl text-gray-300 md:flex justify-between p-3 md:px-20  mt-20">
        <div className="text-center md:flex">
          <h1>© 2026 KeenKeeper. All rights reserved.</h1>
        </div>
        <div className="text-center md:flex gap-6 mt-5">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
