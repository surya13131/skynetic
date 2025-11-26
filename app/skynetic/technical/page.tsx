"use client";

import React from "react";

export default function CommunicationRoundPage() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 flex flex-col items-center p-6 sm:p-12 space-y-6">
      {/* Main Container */}
      <div className="w-full max-w-2xl flex flex-col items-center space-y-6 border border-gray-400 rounded-xl p-6">
        {/* Header */}
        <p className="text-center font-semibold text-lg">
          Professional Communication Round with Audio
        </p>

        {/* Listening Test */}
        <div className="w-full border border-gray-400 rounded-lg p-4 text-center space-y-1">
          <p className="font-semibold">Listening Test <span className="text-sm">(3 mins)</span></p>
          <p className="text-sm">Listen to a short audio and answer 5 questions.</p>
        </div>

        {/* Reading & Comprehension */}
        <div className="w-full border border-gray-400 rounded-lg p-4 text-center space-y-1">
          <p className="font-semibold">Reading & Comprehension</p>
          <p className="text-sm">Read a paragraph and write a one-sentence summary.</p>
        </div>

        {/* Speaking Test */}
        <div className="w-full border border-gray-400 rounded-lg p-4 text-center space-y-1">
          <p className="font-semibold">Speaking Test</p>
          <p className="text-sm">Record a 30-second response to a prompt.</p>
        </div>

        {/* Grammar & Vocabulary */}
        <div className="w-full border border-gray-400 rounded-lg p-4 text-center space-y-1">
          <p className="font-semibold">Grammar & Vocabulary</p>
          <p className="text-sm">10 questions on grammar, vocabulary & structure.</p>
        </div>

        {/* Eligibility Text */}
        <p className="text-center font-medium text-sm mt-4">
          Congrats! You are Eligible For Technical Round
        </p>

        {/* Start Technical Button */}
        <button className="w-full py-3 rounded-xl bg-black text-white font-bold hover:bg-gray-800 transition text-lg">
          Start Technical
        </button>
      </div>
    </div>
  );
}
