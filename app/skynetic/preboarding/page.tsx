"use client";

import React from "react";
import Link from "next/link";

const preboardingItems = [
  { title: "Document Intelligence", href: "/skynetic/preboarding/document" },
  { title: "Voice Signature", href: "/skynetic/preboarding/voice" },
  { title: "Cognitive Fingerprint", href: "/skynetic/preboarding/cognitive" },
  { title: "Skills Hologram", href: "/skynetic/preboarding/skills" },
];

const PreboardingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 sm:p-10">
      
      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-12 text-gray-900 oswald-like">
        Skynetic Preboarding Assessment
      </h1>

      {/* Preboarding Buttons */}
      <div className="flex flex-col w-full max-w-md space-y-6">
        {preboardingItems.map((item) => (
          <Link key={item.title} href={item.href}>
            <button className="w-full py-4 px-6 rounded-xl text-gray-900 font-semibold bg-white/40 backdrop-blur-md border border-gray-300 hover:bg-white/70 hover:shadow-lg hover:scale-105 transition-all flex justify-between items-center">
              <span>{item.title}</span>
              <span className="text-xl font-bold">→</span>
            </button>
          </Link>
        ))}
      </div>

      {/* Skip Button */}
      <div className="mt-12">
        <Link href="/skynetic/home">
          <button className="px-6 py-2 text-sm border border-gray-400 rounded-full hover:bg-gray-200 transition">
            Skip
          </button>
        </Link>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .oswald-like {
          font-family: Oswald, 'Arial Narrow', sans-serif;
          letter-spacing: 1px;
        }
        @media (min-width: 768px) {
          button {
            font-size: 1rem;
          }
        }
        @media (max-width: 480px) {
          h1 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PreboardingPage;
