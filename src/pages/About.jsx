import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="pt-8 text-center text-2xl border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex flex-col md:flex-row my-10 gap-16">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.about_img}
          alt="about image"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Smile was born out of a passion for innovation and a desire to
            resolution the way people shop online. Our journey began with a
            simple idea to provide a platform where customers can easily
            discover, explore and purchase a wide range of products from the
            confort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly curate a diverse
            selection of high quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essential, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <b>Our Mission</b>
          <p>
            Our mission at Smile is to empower customers with choice,
            convienience and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <div className="py-4 text-xl text-center">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col py-4 gap-5 text-center bg-gray-50">
          <b>Quality Assuarence:</b>
          <p className="text-gray-500">
            We meticulously select and vet each product to ensure it meets our
            Stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col py-4 gap-5 text-center bg-gray-50">
          <b>Convenience:</b>
          <p className="text-gray-500">
            With our user-friendly interface, and hussale free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col py-4 gap-5 text-center bg-gray-50">
          <b>Exceptional customer service:</b>
          <p className="text-gray-500">
            Our team of dedicated professionals is here to assist you along the
            way, ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
