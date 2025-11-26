"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Share2,
  Settings,
  Bell,
  User,
  LayoutGrid,
  Mic,
  Volume2,
  BookOpen,
} from "lucide-react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const jobListings = [
    {
      title: "Full Stack Engineer",
      days: 300,
      exp: "12-13 yrs",
      match: 99,
      salary: "$10m / India",
      details: "Engineering & Development",
      tags: ["React", "NodeJS", "AI"],
    },
    {
      title: "Senior Data Scientist",
      days: 15,
      exp: "8-10 yrs",
      match: 92,
      salary: "$12m / India",
      details: "Data Analysis & AI",
      tags: ["Python", "ML", "AI"],
    },
    {
      title: "Cloud Architect (AWS)",
      days: 50,
      exp: "12-15 yrs",
      match: 88,
      salary: "$15m / UK",
      details: "Cloud & Infrastructure",
      tags: ["AWS", "Cloud", "DevOps"],
    },
    {
      title: "Mobile Dev (Flutter)",
      days: 120,
      exp: "5-7 yrs",
      match: 85,
      salary: "$8m / Remote",
      details: "Mobile Applications",
      tags: ["Flutter", "Dart", "UI/UX"],
    },
    {
      title: "DevOps Specialist",
      days: 2,
      exp: "7-9 yrs",
      match: 97,
      salary: "$11m / USA",
      details: "CI/CD & Automation",
      tags: ["CI/CD", "Kubernetes", "AWS"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col items-center pb-32">

      {/* --- MAIN CONTAINER (Centers content & sets max width) --- */}
      <div className="w-full max-w-[1600px] px-6 md:px-12">

        {/* ---- TOP BAR ---- */}
        <div className="flex items-center justify-between w-full mt-10 mb-8">
          <Share2 className="w-8 h-8 p-2 rounded-full bg-white shadow-md cursor-pointer hover:shadow-lg transition" />
          <div className="flex items-center gap-5">
            <Settings className="w-8 h-8 p-2 rounded-full bg-white shadow-md hover:shadow-lg cursor-pointer transition" />
            <Bell className="w-8 h-8 p-2 rounded-full bg-white shadow-md hover:shadow-lg cursor-pointer transition" />
            <User className="w-8 h-8 p-2 rounded-full bg-white shadow-md hover:shadow-lg cursor-pointer transition" />
          </div>
        </div>

        {/* ---- WELCOME TEXT ---- */}
        <div className="flex justify-between items-center w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome Back,<br />Humanex
          </h2>

          <div className="px-6 py-3 rounded-2xl bg-white shadow-md text-lg font-semibold hover:shadow-xl cursor-pointer transition">
            Next Level 🚀
          </div>
        </div>

        {/* ---- SEARCH BAR ---- */}
        <div className="mt-10">
          <div className="w-full bg-white/60 backdrop-blur-xl border border-white/70 shadow-lg rounded-3xl flex items-center gap-4 px-6 py-4 hover:shadow-xl transition">
            <LayoutGrid className="w-7 h-7 text-gray-700" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search jobs, skills, companies..."
              className="w-full bg-transparent text-lg focus:outline-none"
            />
          </div>
        </div>

        {/* ---- JOB LISTINGS ---- */}
        <div className="mt-14 flex flex-col gap-10">
          {jobListings.map((job, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-xl border border-white shadow-xl rounded-3xl p-8 hover:shadow-2xl transition"
            >
              {/* TOP SECTION */}
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold">{job.title}</h3>
                <div className="px-4 py-2 rounded-xl bg-white shadow text-sm font-semibold">
                  {job.salary}
                </div>
              </div>

              <p className="text-gray-700 font-semibold mt-3">{job.details}</p>
              <p className="text-gray-500 text-sm">Experience: {job.exp}</p>

              <div className="mt-4 flex items-center gap-3">
                <div className="px-4 py-2 rounded-full bg-black text-white font-semibold">
                  {job.match}% Match Score
                </div>
              </div>

              {/* TAGS */}
              <div className="flex gap-3 flex-wrap mt-4">
                {job.tags.map((tag, i) => (
                  <div
                    key={i}
                    className="px-3 py-1 rounded-lg bg-black text-white text-xs font-semibold"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              {/* APPLY BUTTON */}
              <div className="flex justify-end mt-6">
                <button className="px-6 py-3 bg-black text-white rounded-xl font-semibold text-lg hover:opacity-80 transition">
                  Apply Now
                </button>
              </div>

              {/* FOOTER */}
              <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-4 mt-4">
                <p>Remote</p>
                <p>({job.days} days ago)</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---- BOTTOM NAV ---- */}
      <div className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-xl border-t shadow-lg flex justify-around items-center py-4 z-50">
        <Link href="/skynetic/profile">
          <User className="w-8 h-8 p-2 rounded-xl bg-white shadow hover:shadow-xl transition cursor-pointer" />
        </Link>

        <Link href="/skynetic/oppotunity">
          <BookOpen className="w-8 h-8 p-2 rounded-xl bg-white shadow hover:shadow-xl transition cursor-pointer" />
        </Link>

        <Link href="/skynetic/interview">
          <Mic className="w-8 h-8 p-2 rounded-xl bg-white shadow hover:shadow-xl transition cursor-pointer" />
        </Link>

        <Volume2 className="w-8 h-8 p-2 rounded-xl bg-white shadow hover:shadow-xl transition cursor-pointer" />
      </div>
    </div>
  );
}
