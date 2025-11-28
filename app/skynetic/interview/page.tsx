"use client";

import React, { useState } from "react";
import { Camera, Mic, Clock, Briefcase, TrendingUp, Video } from "lucide-react";
import { useRouter } from "next/navigation";

/* Google fonts — 100% error free */
import { Inter, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-grotesk",
});

export default function InterviewSetup() {
  const router = useRouter();

  const [duration, setDuration] = useState("");
  const [type, setType] = useState("");
  const [experience, setExperience] = useState("");

  // ⭐ ALWAYS ENABLE BUTTON
  const isReady = true;

  const startInterview = () => {
    router.push("/skynetic/aboutinterview");
  };

  return (
    <div
      className={`
        ${inter.variable} ${jakarta.variable} ${grotesk.variable}
        min-h-screen w-full 
        bg-gradient-to-br from-[#eef0ff] via-[#f9f7ff] to-white
        flex flex-col items-center py-12 px-4
      `}
      style={{ maxWidth: "100%" }}
    >
      {/* Top Back Button */}
      <div className="w-full mb-6 px-4 md:px-10">
        <button className="text-[#4a3fb3] text-lg font-medium flex items-center gap-2 hover:opacity-80 transition">
          ← Live Interview Panel
        </button>
      </div>

      {/* Title */}
      <div className="flex flex-col items-center w-full">
        <Video className="w-14 h-14 text-[#5b4baf]" />
        <h1
          className="
            text-3xl sm:text-4xl font-bold text-[#1e1d43] mt-5
            font-[var(--font-grotesk)]
          "
        >
          Setup Your Interview
        </h1>
        <p className="text-gray-600 mt-2 text-center font-[var(--font-jakarta)]">
          Configure your interview settings for a seamless AI-powered experience
        </p>
      </div>

      {/* Main Box */}
      <div
        className="
          w-full 
          bg-white/50 backdrop-blur-2xl 
          border border-white/40 
          shadow-xl rounded-3xl mt-10 p-8 sm:p-10
          flex flex-col gap-6
        "
        style={{ maxWidth: "850px" }}
      >
        {/* 1. Interview Duration */}
        <div>
          <label className="font-semibold text-[#2d2b60] flex items-center gap-2 text-lg">
            <Clock className="w-5 h-5" /> Interview Duration
          </label>

          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="
              w-full mt-3 px-4 py-3 rounded-xl 
              bg-white/70 border border-gray-200 
              outline-none text-gray-700
              focus:ring-2 focus:ring-[#5b4baf]
            "
          >
            <option value="">Select duration</option>
            <option value="10">10 Minutes</option>
            <option value="20">20 Minutes</option>
            <option value="30">30 Minutes</option>
          </select>
        </div>

        {/* 2. Interview Type */}
        <div>
          <label className="font-semibold text-[#2d2b60] flex items-center gap-2 text-lg">
            <Briefcase className="w-5 h-5" /> Interview Type
          </label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="
              w-full mt-3 px-4 py-3 rounded-xl 
              bg-white/70 border border-gray-200 
              outline-none text-gray-700
              focus:ring-2 focus:ring-[#5b4baf]
            "
          >
            <option value="">Select interview type</option>
            <option value="technical">Technical</option>
            <option value="behavioral">Behavioral</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>

        {/* 3. Experience Level */}
        <div>
          <label className="font-semibold text-[#2d2b60] flex items-center gap-2 text-lg">
            <TrendingUp className="w-5 h-5" /> Experience Level
          </label>

          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="
              w-full mt-3 px-4 py-3 rounded-xl 
              bg-white/70 border border-gray-200 
              outline-none text-gray-700
              focus:ring-2 focus:ring-[#5b4baf]
            "
          >
            <option value="">Select experience level</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid</option>
            <option value="senior">Senior</option>
          </select>
        </div>

        {/* Access Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div
            className="
              bg-white border border-gray-200 p-5 rounded-2xl 
              flex items-center gap-4 shadow-sm
            "
          >
            <Camera className="w-6 h-6 text-[#5b4baf]" />
            <div>
              <p className="font-semibold text-[#2d2b60]">Camera Access</p>
              <p className="text-gray-500 text-sm">We will test your camera</p>
            </div>
          </div>

          <div
            className="
              bg-white border border-gray-200 p-5 rounded-2xl 
              flex items-center gap-4 shadow-sm
            "
          >
            <Mic className="w-6 h-6 text-[#5b4baf]" />
            <div>
              <p className="font-semibold text-[#2d2b60]">Microphone Access</p>
              <p className="text-gray-500 text-sm">We will test your mic</p>
            </div>
          </div>
        </div>

        {/* Start Button — ALWAYS ENABLED */}
        <button
          onClick={startInterview}
          className="
            w-full py-4 mt-2 rounded-xl text-white font-semibold 
            transition-all shadow-md
            bg-[#5b4baf] hover:bg-[#4a3fb3] hover:-translate-y-1
          "
        >
          Start Interview
        </button>
      </div>

      {/* Footer Feature Boxes */}
      <div
        className="
          w-full grid grid-cols-1 sm:grid-cols-3 gap-4
          mt-12 px-2
        "
        style={{ maxWidth: "850px" }}
      >
        <div className="bg-white/70 backdrop-blur-xl border p-6 rounded-2xl text-center shadow-md">
          <h3 className="font-semibold text-[#2d2b60]">AI-Powered</h3>
          <p className="text-gray-500 text-sm mt-2">
            Smart questioning based on your responses
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-xl border p-6 rounded-2xl text-center shadow-md">
          <h3 className="font-semibold text-[#2d2b60]">Real-time Feedback</h3>
          <p className="text-gray-500 text-sm mt-2">
            Instant evaluation & suggestions
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-xl border p-6 rounded-2xl text-center shadow-md">
          <h3 className="font-semibold text-[#2d2b60]">Detailed Report</h3>
          <p className="text-gray-500 text-sm mt-2">
            Comprehensive analysis after completion
          </p>
        </div>
      </div>
    </div>
  );
}
