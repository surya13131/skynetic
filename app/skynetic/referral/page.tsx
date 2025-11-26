"use client";

import React from "react";

export default function ReferralDashboard() {
  const jobs = [
    {
      title: "Senior Frontend Developer",
      company: "Google Inc.",
      salary: "$120k–$180k",
      applicants: "234 applicants",
      referrer: "Sarah Johnson",
      initial: "S",
    },
    {
      title: "Full Stack Engineer",
      company: "Microsoft",
      salary: "$110k–$150k",
      applicants: "190 applicants",
      referrer: "Daniel Roberts",
      initial: "D",
    },
    {
      title: "Backend Developer",
      company: "Amazon",
      salary: "$115k–$160k",
      applicants: "310 applicants",
      referrer: "Priya Sharma",
      initial: "P",
    },
    {
      title: "UI/UX Designer",
      company: "Adobe",
      salary: "$90k–$140k",
      applicants: "142 applicants",
      referrer: "Keerthana Devi",
      initial: "K",
    },
    {
      title: "AI Research Engineer",
      company: "OpenAI",
      salary: "$150k–$220k",
      applicants: "89 applicants",
      referrer: "Michael Lee",
      initial: "M",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white p-6 flex flex-col items-center">

      {/* ---------------- HEADER BOX ---------------- */}
      <div className="w-full bg-black text-white rounded-xl p-12 text-center">
        <h1 className="text-2xl font-bold mb-2">Get Referral Today!</h1>
        <p className="text-sm opacity-80 mb-2">
          Referrals increase your hiring chances by 10x
        </p>
        <p className="text-sm opacity-80 mb-8">
          Ask your network for a referral to your dream job
        </p>

        <button className="px-12 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
          Request Referral
        </button>
      </div>

      {/* ---------------- JOB LIST ---------------- */}
      <div className="w-full mt-12 space-y-8">

        {jobs.map((job, index) => (
          <div
            key={index}
            className="w-full border rounded-xl p-8 shadow-sm flex justify-between items-center"
          >
            {/* Job Details */}
            <div className="text-left">
              <h2 className="font-semibold text-xl">{job.title}</h2>
              <p className="text-gray-800">{job.company}</p>
              <p className="font-medium mt-1">{job.salary}</p>
              <p className="text-sm text-gray-600 mt-1">{job.applicants}</p>
            </div>

            {/* Referrer */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center text-2xl font-bold">
                {job.initial}
              </div>

              <p className="mt-3 text-sm font-semibold">{job.referrer}</p>

              <div className="flex gap-4 mt-4">
                <button className="px-5 py-2 border rounded-full text-sm hover:bg-gray-100">
                  View Details
                </button>
                <button className="px-5 py-2 border rounded-full text-sm hover:bg-gray-100">
                  Send Thanks
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Empty placeholders */}
        <div className="w-full border rounded-xl h-48"></div>
        <div className="w-full border rounded-xl h-48"></div>
      </div>

      {/* ---------------- FOOTER TIPS ---------------- */}
      <div className="w-full mt-12 pb-12 text-sm">
        <div className="flex justify-between font-semibold mb-4">
          <p>Pro Tips for Referrals</p>
          <p>Refer & Earn up to $49</p>
        </div>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Personalize each referral request with specific reasons.</li>
          <li>Keep your profile updated with achievements.</li>
          <li>Always follow up with a thank-you message.</li>
          <li>Return the favour by referring others.</li>
        </ol>
      </div>
    </div>
  );
}
