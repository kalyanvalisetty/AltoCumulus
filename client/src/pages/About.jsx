import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="mx-3 sm:mx-[5%]">
      <div className="text-center text-2xl pt-10 text-white">
        <p>
          ABOUT <span className="text-white font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col lg:flex-row gap-12">
        <img
          className="w-full lg:max-w-[460px] h-auto"
          src={assets.about_img}
          alt=""
        />

        <div className="flex flex-col justify-center gap-6 lg:w-[50%] text-sm text-white">
          <p>
            Altocumulus Technologies Private Limited is a cloud solutions
            startup specializing in Microsoft Azure and modern cloud
            infrastructure. We help budding startups build scalable cloud
            foundations and assist legacy enterprises in their digital
            transformation journey to the cloud.
          </p>

          <p>
            Our services span cloud architecture design, migration strategies,
            DevOps automation, infrastructure optimization, and cloud security
            implementation. We work as an extended engineering team, bringing
            enterprise-grade cloud expertise to businesses at every stage of
            their growth.
          </p>

          <b className="text-white">Our Vision</b>

          <p>
            Our vision is to democratize cloud technology by making
            enterprise-level cloud infrastructure accessible and affordable for
            startups, while helping established businesses modernize their
            legacy systems with minimal disruption and maximum efficiency.
          </p>

          <p>
            At Altocumulus Technologies, we believe every business deserves
            world-class cloud infrastructure. We're committed to delivering
            reliable, scalable, and cost-effective cloud solutions that drive
            business growth and innovation.
          </p>
        </div>
      </div>

      <div className="text-xl my-4 text-white">
        <p>
          WHY <span className="text-white font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-white hover:text-black transition-all duration-300 text-gray-300 cursor-pointer">
          <b>STARTUP-FRIENDLY:</b>
          <p>
            Flexible engagement models and cost-effective solutions tailored for
            early-stage companies and growing businesses.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-white hover:text-black transition-all duration-300 text-gray-300 cursor-pointer">
          <b>ENTERPRISE EXPERIENCE:</b>
          <p>
            Proven expertise in modernizing legacy systems with zero-downtime
            migrations and seamless cloud transformation.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-white hover:text-black transition-all duration-300 text-gray-300 cursor-pointer">
          <b>END-TO-END SUPPORT:</b>
          <p>
            From architecture design to deployment and ongoing optimization, we
            stay with you throughout your entire cloud journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;