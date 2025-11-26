"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Share2, Settings, Bell, User, LayoutGrid, Mic, Volume2, BookOpen } from 'lucide-react';

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const jobListings = [
    { title: "Full Stack Engineer", days: 300, exp: "12-13 yrs", match: 99, salary: "$10m / India", details: "Engineering & Development" },
    { title: "Senior Data Scientist", days: 15, exp: "8-10 yrs", match: 92, salary: "$12m / India", details: "Data Analysis & AI" },
    { title: "Cloud Architect (AWS)", days: 50, exp: "12-15 yrs", match: 88, salary: "$15m / UK", details: "Cloud & Infrastructure" },
    { title: "Mobile Dev (Flutter)", days: 120, exp: "5-7 yrs", match: 85, salary: "$8m / Remote", details: "Mobile Applications" },
    { title: "DevOps Specialist", days: 2, exp: "7-9 yrs", match: 97, salary: "$11m / USA", details: "CI/CD & Automation" },
  ];

  const customStyles = (
    <style jsx>{`
      .jakarta-like { font-family: 'Inter', sans-serif; }

      /* Glass Cards */
      .glass-card {
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(16px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 2rem;
        transition: all 0.4s ease;
      }
      .glass-card:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 20px 30px rgba(0,0,0,0.15);
      }

      /* Glass Buttons */
      .glass-button {
        background: rgba(255,255,255,0.25);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255,255,255,0.2);
        transition: all 0.3s ease-in-out;
      }
      .glass-button:hover {
        background: rgba(255,255,255,0.6);
        transform: translateY(-2px);
      }

      /* Glass Icons */
      .glass-icon {
        background: rgba(255,255,255,0.25);
        backdrop-filter: blur(12px);
        padding: 0.6rem;
        border-radius: 50%;
        transition: all 0.3s ease-in-out;
      }
      .glass-icon:hover {
        transform: scale(1.2);
        background: rgba(255,255,255,0.6);
      }

      /* Background Gradient */
      .bg-gradient {
        background: linear-gradient(135deg, #e0f0ff, #cce0ff);
      }

      @media (max-width: 1024px) {
        .glass-icon { padding: 0.5rem; }
      }
    `}</style>
  );

  const JobCard = ({ job }: any) => (
    <div className="p-6 rounded-2xl glass-card cursor-pointer w-full max-w-full mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h3 className="font-bold text-xl md:text-2xl text-gray-900 jakarta-like">{job.title}</h3>
        <span className="text-md font-semibold text-gray-900 mt-2 md:mt-0">{job.salary}</span>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="space-y-2 text-sm">
          <p className="text-sm font-semibold text-gray-900">{job.details}</p>
          <p className="text-sm text-gray-600">Exp {job.exp}</p>
          <p className="text-sm font-semibold text-gray-900">{job.match}% Match</p>
        </div>
        <div className="flex flex-col md:items-end mt-4 md:mt-0 space-y-2">
          <button className="glass-button py-2 px-6 rounded-xl text-sm font-semibold text-gray-900"> Apply </button>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="underline cursor-pointer">React</span>
            <span className="underline cursor-pointer">AI</span>
            <span className="underline cursor-pointer">Save</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm mt-4 pt-3 border-t border-gray-200">
        <p className="text-gray-600">Remote</p>
        <p className="text-gray-600">({job.days} days ago)</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient text-gray-900 relative">
      {customStyles}

      {/* Main Content */}
      <section className="w-full flex flex-col items-center p-6 md:p-12 space-y-10">
        {/* Header */}
        <div className="flex items-center justify-between w-full max-w-full mb-8 px-2 md:px-10">
          <Share2 size={24} className="text-gray-900 cursor-pointer transition" />
          <div className="flex items-center gap-5 text-gray-900">
            <Settings size={24} className="cursor-pointer transition" />
            <Bell size={24} className="cursor-pointer transition" />
            <User size={24} className="cursor-pointer border-2 border-gray-900 p-1 rounded-full" />
          </div>
        </div>

        {/* Welcome Section */}
        <div className="flex justify-between items-center w-full px-2 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 jakarta-like">Welcome, Humanex</h2>
          <div className="bg-white text-sm md:text-base font-semibold px-4 py-2 rounded-full border border-gray-900"> Next Level </div>
        </div>

        {/* Search Bar */}
        <div className="w-full px-2 md:px-10">
          <div className="flex items-center gap-3 border border-gray-900 p-3 rounded-2xl bg-white shadow-md">
            <LayoutGrid size={28} className="text-gray-900 cursor-pointer transition" />
            <input
              type="text"
              placeholder="Type to Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 rounded-xl focus:outline-none transition text-gray-900 jakarta-like"
            />
          </div>
        </div>

        {/* Job Cards */}
        <div className="flex flex-col w-full space-y-8 px-2 md:px-10">
          {jobListings.map((job, idx) => (
            <JobCard key={idx} job={job} />
          ))}
        </div>

        {/* Fixed Bottom Icon Bar */}
        <div className="fixed bottom-0 left-0 w-full bg-white flex justify-around items-center py-4 shadow-xl glass-card z-50">
          <Link href="/skynetic/profile"><User size={28} className="glass-icon cursor-pointer" /></Link>
          <Link href="/skynetic/oppotunity"><BookOpen size={28} className="glass-icon cursor-pointer" /></Link>
          <Link href="/skynetic/interview"><Mic size={28} className="glass-icon cursor-pointer" /></Link>
          <Volume2 size={28} className="glass-icon cursor-pointer" />
        </div>
      </section>
    </div>
  );
};

export default App;
