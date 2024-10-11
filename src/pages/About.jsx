import React from "react";
import Title from "../components/Title";
import NewsletterBox from "..//components/NewsletterBox";
import { assets } from "../assets/frontend_assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt="about_img"
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
            culpa architecto. Voluptas iste cupiditate repudiandae reprehenderit
            dolore voluptatem ab placeat ipsa ratione voluptates quae, totam
            aliquid maiores at fugit laudantium.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            harum amet ex perferendis dolores ea optio aut praesentium eos
            saepe!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, iste
            error nisi minus quo delectus dicta accusamus voluptatum fugit
            labore amet soluta ducimus possimus, repellendus officia dolore
            porro voluptatem aperiam?
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sed
            eligendi possimus animi quis! Iure nulla labore ex possimus fugit.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sed
            eligendi possimus animi quis! Iure nulla labore ex possimus fugit.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sed
            eligendi possimus animi quis! Iure nulla labore ex possimus fugit.
          </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;
