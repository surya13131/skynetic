"use client";

import React from "react";
import { Upload, Video, MicOff } from "lucide-react";
import Link from "next/link";

export default function InterviewRoom() {
  return (
    <div className="w-full min-h-screen p-4 sm:p-10 bg-gradient-to-br from-gray-50 to-gray-200 flex justify-center">
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

        {/* LEFT SIDE – CONTROLS */}
        <div className="space-y-8 md:space-y-12 backdrop-blur-lg bg-white/40 p-6 md:p-8 rounded-2xl shadow-xl border border-white/30">

          {/* Upload Resume */}
          <div>
            <h2 className="font-semibold text-xl md:text-2xl">Ace your Interview with Skynetic</h2>
            <div className="mt-4 flex items-center gap-3 hover:scale-[1.03] transition cursor-pointer">
              <Upload className="w-5 h-5 md:w-6 md:h-6 text-black" />
              <p className="text-sm md:text-base">Upload your Resume</p>
            </div>
            <button className="mt-4 px-6 py-2 border rounded-lg hover:bg-black hover:text-white transition font-medium">
              Generate Questions
            </button>
          </div>

          {/* Duration */}
          <div>
            <h3 className="font-semibold mb-3 text-lg md:text-xl">Choose your duration</h3>
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
              {["15 mins", "30 mins", "45 mins", "1 hr"].map((d) => (
                <button
                  key={d}
                  className="px-4 py-3 rounded-xl backdrop-blur-md bg-white/40 border border-white/50 hover:bg-black hover:text-white transition"
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Level */}
          <div>
            <h3 className="font-semibold mb-3 text-lg md:text-xl">Choose your Level</h3>
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
              {["Easy", "Medium", "Intermediate", "Hard"].map((lvl) => (
                <button
                  key={lvl}
                  className="px-4 py-3 rounded-xl backdrop-blur-md bg-white/40 border border-white/50 hover:bg-black hover:text-white transition"
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Model */}
          <div>
            <h3 className="font-semibold mb-3 text-lg md:text-xl">Choose your Model</h3>
            <div className="flex gap-4">
              {["Audio", "Video"].map((m) => (
                <button
                  key={m}
                  className="px-6 py-2 rounded-full border backdrop-blur-md bg-white/40 hover:bg-black hover:text-white transition"
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="font-semibold mb-3 text-lg md:text-xl">Select your Experience</h3>
            <select className="w-full max-w-xs px-4 py-3 rounded-full border backdrop-blur-md bg-white/40 hover:bg-white transition">
              <option>Choose</option>
              <option>Fresher</option>
              <option>1 - 3 Years</option>
              <option>3 - 5 Years</option>
              <option>5+ Years</option>
            </select>
          </div>

        </div>

        {/* RIGHT SIDE – VIDEO BOXES */}
        <div className="flex flex-col gap-8 lg:gap-10">
{/* AI INTERVIEWER */}
<Link
  href="/skynetic/final"
  className="block rounded-xl h-[350px] flex flex-col items-center justify-center backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl hover:scale-[1.01] transition"
>
  <p className="text-sm mb-6 font-medium">AI Interviewer</p>
  <div className="flex gap-12">
    <Video className="w-12 h-12 md:w-16 md:h-16" />
    <MicOff className="w-12 h-12 md:w-16 md:h-16 text-red-500" />
  </div>
</Link>

{/* USER SCREEN */}
<Link
  href="/skynetic/final"
  className="block rounded-xl h-[350px] flex flex-col items-center justify-center backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl hover:scale-[1.01] transition"
>
  <p className="text-sm mb-6 font-medium">Your Screen</p>
  <div className="flex gap-12">
    <Video className="w-12 h-12 md:w-16 md:h-16" />
    <MicOff className="w-12 h-12 md:w-16 md:h-16 text-red-500" />
  </div>
</Link>


        </div>

      </div>
    </div>
  );
}
