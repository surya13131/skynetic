"use client";

import React from "react";
import { Search, User } from "lucide-react";
import Link from "next/link";

export default function ConnectionsPage() {
  const users = [
    { name: "Dinesh Selvaraj", role: "Full Stack Engineer", company: "Zeka", rating: 4.8 },
    { name: "Krishnamoorthy", role: "Software Developer", company: "TechNova", rating: 4.6 },
    { name: "Murali Kumar", role: "UI/UX Designer", company: "Creatix", rating: 4.7 },
    { name: "Saravanan", role: "React Developer", company: "PixelSoft", rating: 4.5 },
    { name: "Gautham Raj", role: "Backend Engineer", company: "CloudEra", rating: 4.9 },
    { name: "Mohan Vijay", role: "Data Analyst", company: "Datamatics", rating: 4.4 },
    { name: "Arun Prasad", role: "AI Engineer", company: "NeuroLab", rating: 4.8 },
  ];

  return (
    <div className="min-h-screen w-full bg-white text-gray-900 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col items-center">
      {/* Main Container Full Width */}
      <div className="w-full max-w-full lg:max-w-7xl flex flex-col space-y-6">
        {/* Profile Icon */}
        <div className="flex justify-end w-full">
          <Link href="/skynetic/proffesionalprofile">
            <User className="w-8 h-8 cursor-pointer hover:text-gray-700 transition" />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="w-full flex items-center border border-gray-800 rounded-full px-4 py-3 gap-2">
          <Search className="w-5 h-5 text-gray-700" />
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none text-sm sm:text-base"
          />
        </div>

        {/* Tabs */}
        <div className="w-full flex justify-between text-base font-medium px-1">
          <span className="text-gray-900">Connections</span>
          <Link href="/skynetic/referral">
            <span className="text-gray-900 cursor-pointer hover:text-gray-700 transition">
              Referrals
            </span>
          </Link>
        </div>

        <hr className="w-full border-gray-300" />

        {/* Users List */}
        <div className="w-full flex flex-col space-y-4">
          {users.map((u, i) => (
            <div
              key={i}
              className="w-full border border-gray-800 rounded-xl p-4 flex flex-col sm:flex-row items-center sm:items-start gap-4 hover:bg-gray-50 transition"
            >
              {/* Avatar with Initial */}
              <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
                {u.name.charAt(0)}
              </div>

              {/* Details */}
              <div className="flex flex-col sm:flex-row justify-between w-full items-center sm:items-start gap-4">
                <div className="text-sm leading-tight">
                  <p className="font-semibold text-lg">{u.name}</p>
                  <p>{u.role}</p>
                  <p className="text-gray-600">{u.company}</p>
                </div>

                <div className="flex flex-col items-center sm:items-end gap-2 mt-2 sm:mt-0">
                  <button className="border border-gray-800 rounded-full px-4 py-1 text-sm hover:bg-gray-200 transition">
                    Connect
                  </button>
                  <p className="text-xs text-gray-700">⭐ {u.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
