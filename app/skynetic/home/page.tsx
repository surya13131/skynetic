"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Share2, Settings, Bell, User, LayoutGrid, Mic, Volume2, BookOpen } from 'lucide-react';

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const jobListings = [
    { title: "Full Stack Engineer", days: 300, exp: "12-13 yrs", match: 99, salary: "$10m / India", details: "Engin" },
    { title: "Senior Data Scientist", days: 15, exp: "8-10 yrs", match: 92, salary: "$12m / India", details: "Data" },
    { title: "Cloud Architect (AWS)", days: 50, exp: "12-15 yrs", match: 88, salary: "$15m / UK", details: "Cloud" },
    { title: "Mobile Dev (Flutter)", days: 120, exp: "5-7 yrs", match: 85, salary: "$8m / Remote", details: "Mobile" },
    { title: "DevOps Specialist", days: 2, exp: "7-9 yrs", match: 97, salary: "$11m / USA", details: "DevOps" },
  ];

  const customStyles = (
    <style jsx>{`
      .oswald-like {
        font-family: Oswald, 'Arial Narrow', sans-serif;
        letter-spacing: 2px;
      }
      .jakarta-like {
        font-family: 'Inter', sans-serif;
      }
      .glass-card {
        background: rgba(255, 255, 255, 0.6);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(0,0,0,0.08);
        transition: all 0.3s ease-in-out;
      }
      .glass-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 25px rgba(0,0,0,0.15);
      }
      .glass-button {
        background: rgba(255,255,255,0.5);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(0,0,0,0.1);
        transition: all 0.3s ease-in-out;
      }
      .glass-button:hover {
        background: rgba(255,255,255,0.8);
        transform: translateY(-2px);
      }
      .glass-icon {
        background: rgba(255,255,255,0.4);
        backdrop-filter: blur(8px);
        padding: 0.6rem;
        border-radius: 50%;
        transition: all 0.3s ease-in-out;
      }
      .glass-icon:hover {
        transform: scale(1.2);
        background: rgba(255,255,255,0.7);
      }
      @media (max-width: 1024px) {
        .glass-icon {
          padding: 0.5rem;
        }
      }
    `}</style>
  );

  const JobCard = ({ job }: any) => (
    <div className="p-4 rounded-xl glass-card cursor-pointer">
      <div className='flex justify-between items-start mb-2'>
        <h3 className="font-bold text-lg text-gray-900 jakarta-like">{job.title}</h3>
        <span className="text-sm font-semibold text-gray-900">{job.salary}</span>
      </div>
      <div className='flex justify-between items-end'>
        <div className='space-y-1 text-sm'>
          <p className="text-xs font-semibold text-gray-900">{job.details}</p>
          <p className="text-xs text-gray-600">Exp {job.exp}</p>
          <p className="text-xs font-semibold text-gray-900">{job.match}% Match</p>
        </div>
        <div className='flex flex-col items-end space-y-2'>
          <button className="glass-button py-1 px-4 rounded-lg text-sm font-semibold text-gray-900">
            Apply
          </button>
          <div className='flex items-center space-x-2 text-xs text-gray-600'>
            <span className='underline cursor-pointer'>React</span>
            <span className='underline cursor-pointer'>AI</span>
            <span className='underline cursor-pointer'>Save</span>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center text-xs mt-2 pt-2 border-t border-gray-100'>
        <p className='text-gray-600'>Remote</p>
        <p className='text-gray-600'>({job.days} days ago)</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white text-gray-900 relative">
      {customStyles}

      {/* Sidebar */}
      <aside className="lg:w-1/5 flex flex-col shadow-xl lg:shadow-none z-10">
        <div className="bg-gray-900 text-white p-6 h-64 flex flex-col justify-between">
          <h1 className="oswald-like text-3xl font-bold tracking-wider">S K Y N E T I C</h1>
          <p className="text-xs text-gray-400">Beyond Boundaries.</p>
        </div>

        <div className="bg-white p-6 flex flex-col flex-grow space-y-4 border-r border-gray-900">
          <h2 className="text-lg font-semibold mb-3">Skynetic Preboarding Assessment</h2>
          {["Document Intelligence", "Voice Signature", "Cognitive Fingerprint", "Skills Hologram"].map((item) => (
            <button
              key={item}
              className="w-full glass-button py-3 rounded-lg transition-all text-sm font-medium flex justify-between items-center px-4 shadow-sm"
            >
              {item} <span className="text-gray-900 font-bold text-xl">→</span>
            </button>
          ))}
          <div className="pt-8 text-center mt-auto">
            <button className="text-sm text-gray-600 hover:text-gray-900 transition-all border border-gray-600 px-4 py-1 rounded-full">Skip</button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <section className="lg:w-4/5 p-6 md:p-10 flex flex-col bg-white relative">

        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6">
          <Share2 size={20} className="text-gray-900 cursor-pointer transition" />
          <div className="flex items-center gap-4 text-gray-900">
            <Settings size={20} className="cursor-pointer transition" />
            <Bell size={20} className="cursor-pointer transition" />
            <User size={20} className="cursor-pointer border-2 border-gray-900 p-0.5 rounded-full" />
          </div>
        </div>

        {/* Welcome */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 jakarta-like">Welcome, Humanex</h2>
          <div className="bg-white text-sm font-semibold px-3 py-1 rounded-full border border-gray-900">
            Next Level
          </div>
        </div>

        {/* Search */}
        <div className="mb-8 flex items-center gap-3 border border-gray-900 p-2 rounded-xl">
          <LayoutGrid size={24} className="text-gray-900 cursor-pointer transition" />
          <input
            type="text"
            placeholder="Type to Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 rounded-lg focus:outline-none transition jakarta-like text-gray-900"
          />
        </div>

        {/* Job Cards */}
        <div className="space-y-4 mb-32">
          {jobListings.map((job, idx) => (
            <JobCard key={idx} job={job} />
          ))}
        </div>

        {/* Fixed Bottom Icon Bar */}
        <div className="fixed bottom-0 left-0 w-full bg-white flex justify-around items-center py-4 shadow-xl glass-card z-50">
        <Link href="/skynetic/profile"><User size={28} className="glass-icon cursor-pointer" /></Link>

          <Link href="/skynetic/oppotunity"> {/* Navigate to Opportunities page */}
            <BookOpen size={28} className="glass-icon cursor-pointer" />
          </Link>
         <Link href="/skynetic/interview"><Mic size={28} className="glass-icon cursor-pointer" /></Link>  
          <Volume2 size={28} className="glass-icon cursor-pointer" />
        </div>

      </section>
    </div>
  );
};

export default App;
