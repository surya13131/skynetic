"use client";

import React from "react";
import Link from "next/link";

export default function InterviewReport() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-10">

      {/* FULL WIDTH CONTAINER */}
      <div className="w-full bg-white rounded-2xl shadow-xl p-10 border">

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-10">Interview Report</h2>

        {/* FOUR SCORE BOXES */}
        <div className="grid grid-cols-4 gap-10 text-center mb-12">
          <div>
            <p className="font-bold text-2xl">92%</p>
            <p className="text-gray-600 text-sm">communication</p>
          </div>

          <div>
            <p className="font-bold text-2xl">85%</p>
            <p className="text-gray-600 text-sm">technical</p>
          </div>

          <div>
            <p className="font-bold text-2xl">88%</p>
            <p className="text-gray-600 text-sm">problemSolving</p>
          </div>

          <div>
            <p className="font-bold text-2xl">82%</p>
            <p className="text-gray-600 text-sm">leadership</p>
          </div>
        </div>

        {/* OVERALL SCORE */}
        <div className="flex justify-center mb-14">
          <div className="px-14 py-3 rounded-full border font-semibold shadow-sm bg-gray-50 text-lg">
            87% Overall Score
          </div>
        </div>

        {/* 2-COLUMN DETAILS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Strengths */}
          <div>
            <p className="font-semibold text-lg mb-3">Strengths</p>
            <ul className="text-gray-700 text-sm list-disc ml-5 space-y-2">
              <li>Excellent communication skills and clear articulation</li>
              <li>Strong technical knowledge and problem-solving approach</li>
              <li>Good use of STAR method in behavioral questions</li>
            </ul>
          </div>

          {/* Areas for Improvement */}
          <div>
            <p className="font-semibold text-lg mb-3">Areas for Improvement</p>
            <ul className="text-gray-700 text-sm list-disc ml-5 space-y-2">
              <li>Consider providing more specific metrics in your examples</li>
              <li>Practice pausing before answering to organize thoughts</li>
              <li>Add more details about your leadership experiences</li>
            </ul>
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-16">
          <Link href="/skynetic/home">
    <button className="px-10 py-3 border rounded-lg hover:bg-black hover:text-white transition font-medium text-base">
      Close Feedback
    </button>
  </Link>

        </div>

      </div>
    </div>
  );
}
