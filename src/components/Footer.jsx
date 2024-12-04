import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <Link to="/">
            <img className="3-32 mb-5" src={assets.logo} alt="" />
          </Link>
          <p className="w-full md:w-2/3 text-gray-600">
            An E-commerce is an online platform that facilitate the buying and
            selling of goods to customers easily. It serves as a virtual market
            place where businesses and individuals can showcase their products,
            intereact with customers and conduct transactions without the need
            for physical presence. E-commerce website have gained popularity due
            to their convience, accessiblity and global reach they offer.
          </p>
        </div>
        <div>
          <p className="mb-5 font-medium text-xl">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+256785806892</li>
            <li>gwolojulius2@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="w-full">
        <hr />
        <p className="py-5 text-sm text-center">
          Copy right 2024 smile.com - All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
