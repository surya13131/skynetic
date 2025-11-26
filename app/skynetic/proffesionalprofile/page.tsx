"use client";

import React from "react";

export default function ProfessionalProfile() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex justify-center">

      {/* FULL WIDTH CONTENT CONTAINER */}
      <div className="w-full max-w-[1500px] px-6 py-10">

        {/* Page Title */}
        <h1 className="text-2xl font-bold">Your Professional Profile</h1>
        <p className="text-sm text-gray-300 mb-6">
          Complete your career intelligence profile
        </p>

        <hr className="border-gray-700 mb-6" />

        {/* ---------------- BASIC INFORMATION ---------------- */}
        <h2 className="text-lg font-semibold mb-3">Basic Information</h2>

        <div className="space-y-4 w-full">

          {/* Input Boxes */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-[#1c1c1c] text-white rounded-lg px-4 py-4 placeholder-gray-400 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#1c1c1c] text-white rounded-lg px-4 py-4 placeholder-gray-400 outline-none"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-[#1c1c1c] text-white rounded-lg px-4 py-4 placeholder-gray-400 outline-none"
          />

          <input
            type="text"
            placeholder="Location"
            className="w-full bg-[#1c1c1c] text-white rounded-lg px-4 py-4 placeholder-gray-400 outline-none"
          />
        </div>

        {/* ---------------- SKILLS SECTION ---------------- */}
        <h2 className="text-lg font-semibold mt-10 mb-3">Skills</h2>

        <button className="w-full max-w-sm border border-white rounded-full py-3 font-semibold hover:bg-white hover:text-black transition">
          Choose your skills
        </button>

        {/* ---------------- PORTFOLIO ---------------- */}
        <h2 className="text-lg font-semibold mt-10 mb-3">Portfolio</h2>

        <div className="w-full border border-gray-400 rounded-xl h-28"></div>

        {/* ---------------- CONTRIBUTION GRAPH ---------------- */}
        <h2 className="text-lg font-semibold mt-10 mb-3">
          Contribution Graph
        </h2>

        <div className="w-full border border-gray-400 rounded-xl h-40"></div>

        {/* ---------------- VALUES & PURPOSE MAP ---------------- */}
        <h2 className="text-lg font-semibold mt-10 mb-3">
          Values & Purpose Map
        </h2>

        <div className="w-full border border-gray-400 rounded-xl h-40"></div>

        {/* ---------------- ADAPTIVE ENGINE ---------------- */}
        <h2 className="text-lg font-semibold mt-10 mb-3">
          Adaptive Skillset Engine
        </h2>

        <div className="w-full border border-gray-400 rounded-xl h-40"></div>

      </div>
    </div>
  );
}
