import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="mx-3 sm:mx-[5%]">
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col lg:flex-row gap-12">
        <img
          className="w-full lg:max-w-[460px] h-auto"
          src={assets.about_img}
          alt=""
        />

        <div className="flex flex-col justify-center gap-6 lg:w-[50%] text-sm text-gray-600">
          <p>
            Altocumulus Technologies Private Limited is a cloud-focused training
            and placement organization specializing in Microsoft Azure and
            modern cloud technologies. We help students and working
            professionals build strong, industry-relevant cloud skills aligned
            with real-world job requirements.
          </p>

          <p>
            Our programs are designed to take learners from fundamentals to
            advanced cloud concepts, including Azure infrastructure, DevOps
            practices, cloud security, and deployment strategies. Training is
            delivered by experienced cloud professionals with hands-on,
            project-based learning at its core.
          </p>

          <b className="text-gray-800">Our Vision</b>

          <p>
            Our vision is to bridge the gap between learning and employment by
            providing practical cloud education and career-focused guidance. We
            focus on building strong foundations, real project experience, and
            interview readiness to help candidates confidently transition into
            cloud and DevOps roles.
          </p>

          <p>
            At Altocumulus Technologies, we are committed to empowering learners
            with the right skills, mentorship, and placement support to succeed
            in the evolving cloud computing ecosystem.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US: </span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-black hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-black hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVENIENCE: </b>
          <p>Access to a network of trusted IT professionals in your area.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-black hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your Career.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
