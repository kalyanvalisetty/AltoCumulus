import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Build Your Career in <span className="text-blue-600">Cloud & Azure</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            Altocumulus Technologies Private Limited is a cloud-focused training
            and placement platform helping students and professionals gain
            real-world expertise in Microsoft Azure, DevOps, and modern cloud
            technologies.
          </p>

          <p className="text-gray-500">
            Learn from industry experts, work on hands-on projects, and prepare
            for real cloud roles with structured training and placement
            assistance designed for today’s job market.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </Link>

            <Link
              to="/about"
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-gray-50 rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              What You’ll Learn
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>✔ Microsoft Azure Fundamentals & Architecture</li>
              <li>✔ Azure DevOps & CI/CD Pipelines</li>
              <li>✔ Cloud Security & Best Practices</li>
              <li>✔ Hands-on Projects & Real Scenarios</li>
              <li>✔ Interview Preparation & Placement Support</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Content;
