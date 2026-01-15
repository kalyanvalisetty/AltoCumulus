import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            ALTOCUMULUS TECHNOLOGIES
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            Altocumulus is a advanced AI-driven technologies to deliver data-driven commercial intelligence and seamless supply chain processes at every tier, enhancing efficiency, collaboration, and resilience to drive superior business performance.
          </p>

          <p className="text-gray-400">
            To empower enterprises with data-driven commercial intelligence and seamless supply chain operations, fully optimized for efficiency, collaboration, and resilience.
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
              className="px-6 py-3 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-900 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        {/* <div className="flex justify-center">
          <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">
              What You'll Learn
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>✓ Microsoft Azure Fundamentals & Architecture</li>
              <li>✓ Azure DevOps & CI/CD Pipelines</li>
              <li>✓ Cloud Security & Best Practices</li>
              <li>✓ Hands-on Projects & Real Scenarios</li>
              <li>✓ Interview Preparation & Placement Support</li>
            </ul>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default Content;