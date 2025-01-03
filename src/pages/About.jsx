import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="pt-8 text-center text-2xl border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex flex-col md:flex-row my-10 gap-16">
        <img className="w-full md:max-w-[480px]" src={assets.about_img} alt="about image" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Smile was born out of a passion for innovation and a desire to resolution the way people shop online. Our journey began with a simple idea to provide a platform where customers can easily discover, explore and purchase a wide range of products from the confort of their homes.</p>
          <p>Since our inception, we've worked tirelessly curate a diverse selection of high quality products that cater to every taste and preference. From fashion and beauty to electronics and home essential, we offer an extensive collection sourced from trusted brands and suppliers.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
