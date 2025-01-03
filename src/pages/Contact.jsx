import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="border-t text-center text-2xl pt-10">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-10 mb-28 my-10">
        <img className="w-full max-w-[480px]" src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center  gap-5">
          <p className="font-semibold text-gray-600 text-xl">Our Store</p>
          <p className="text-gray-500">
            546780 Williams Station, <br />
            Suite 357, Washington, USA
          </p>
          <p className="text-gray-500 ml-0 pl-0">
            Tel: (457) 555-0245 <br /> Email: admin@smile.com
          </p>
          <p className="text-xl font-semibold text-gray-600">
            Careers at Smile
          </p>
          <p className="text-gray-500">Learn more about our terms and jobs</p>
          <button className="border border-orange-500 py-2 px-8 cursor-pointer text-orange-500  hover:text-white hover:bg-orange-500 transition-all duration-300">Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default Contact;
