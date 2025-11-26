"use client";

import React from "react";
import Link from "next/link"; // Correct Link import

export default function InterviewTypes() {
  const interviews = [
    {
      title: "Behavioral Interview",
      desc: "Practice behavioral questions about past experiences and problem-solving approaches",
    },
    {
      title: "Technical Interview",
      desc: "Coding challenges with real-time feedback and solution explanations",
    },
    {
      title: "Case Study Interview",
      desc: "Business problem-solving scenarios with analytical thinking evaluation",
    },
    {
      title: "HR Round Interview",
      desc: "Screening questions focusing on cultural fit and communication skills",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white flex justify-center p-4 sm:p-10">
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-full lg:max-w-[1400px] space-y-6 lg:space-y-8 px-2 sm:px-6">

        {interviews.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition bg-white"
          >
            <h2 className="font-bold text-lg sm:text-xl md:text-2xl">{item.title}</h2>
            <p className="text-gray-700 mt-2 sm:mt-3 leading-relaxed text-sm sm:text-base">{item.desc}</p>

            <div className="w-full flex justify-center mt-4 sm:mt-6">
              <Link href="/skynetic/aboutinterview">
                <button className="px-8 sm:px-10 py-2 sm:py-3 border rounded-full text-sm sm:text-base font-semibold hover:bg-gray-100 transition">
                  Start
                </button>
              </Link>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
