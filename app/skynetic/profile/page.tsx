"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function JobDetailsPage() {
  const [open, setOpen] = useState<string | null>("About");
  const router = useRouter();

  const sections = [
    {
      key: "About",
      title: "About the Role",
      content:
        "We are looking for a talented Senior Full Stack Developer to join our growing team. You will be responsible for developing and maintaining enterprise-grade web applications using modern technologies.",
    },
    {
      key: "WhatYouDo",
      title: "What You'll Do",
      content:
        "• Build scalable web applications.\n• Work with React, Node.js, MongoDB.\n• Manage cloud deployments.\n• Collaborate with cross-functional teams.\n• Improve code quality & architecture.",
    },
    {
      key: "LookingFor",
      title: "What We Are Looking For",
      content:
        "• Strong JavaScript & TypeScript knowledge.\n• Experience in React + Node.js.\n• REST API & cloud knowledge.\n• Problem-solving & communication skills.",
    },
    {
      key: "Eligibility",
      title: "Eligibility",
      content:
        "• Bachelor’s degree preferred.\n• 3+ years experience in full-stack development.\n• Strong debugging skills.",
    },
    {
      key: "Apply",
      title: "How to Apply",
      content:
        "Submit your updated resume and portfolio. Selected candidates will be contacted within 7 working days.",
    },
    {
      key: "Selection",
      title: "How to Get Selected",
      content:
        "• Perform well in coding assessments.\n• Show mastery of system design.\n• Demonstrate strong communication skills.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f0ebff] via-[#faf8ff] to-white text-gray-900 py-10 px-6">

      {/* FULL-WIDTH CONTAINER */}
      <div className="w-full">

        {/* Back Link */}
        <div className="mb-6 flex justify-start relative">
  <button
  onClick={() => router.push("/skynetic/home")} // go directly to Resume page
  className="flex items-center text-sm font-semibold text-[#5b4baf] hover:text-[#422f9b] transition-colors"
>
  <ChevronLeft className="w-4 h-4 mr-1" />
  View All Opportunities
</button>

</div>


        {/* HEADER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full bg-white/90 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-lg p-8"
        >
          <div className="flex justify-between items-start gap-4 flex-wrap">

            <div>
              <h1 className="text-3xl font-extrabold text-[#26215f]">
                Senior Full Stack Developer
              </h1>

              <p className="text-gray-700 mt-1 text-base font-medium">
                TechCorp Solutions
              </p>

              <div className="flex flex-wrap gap-4 mt-4 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Bengaluru, Karnataka
                </div>

                <div className="px-4 py-1 rounded-full bg-[#ebe4ff] text-[#26215f] font-semibold">
                  ₹15 LPA – ₹28 LPA
                </div>

                <div>Full-time</div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> 2 days ago
                </div>
              </div>
            </div>

            <div className="px-5 py-2 bg-[#ebe4ff] text-[#5b4baf] rounded-full font-bold text-sm shadow">
              95% Match
            </div>
          </div>
        </motion.div>

        {/* Accordion */}
        <div className="mt-8 flex flex-col gap-4">
          {sections.map((item) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#f1eeff] rounded-2xl border border-gray-200 shadow"
            >
              <button
                onClick={() => setOpen(open === item.key ? null : item.key)}
                className="w-full py-4 px-5 flex justify-between items-center text-left font-semibold text-[#26215f] text-lg"
              >
                {item.title}

                {open === item.key ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>

              {open === item.key && (
                <div className="px-5 pb-5 text-gray-700 whitespace-pre-line leading-relaxed text-base">
                  {item.content}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button
            onClick={() => router.push("/skynetic/resume")}
            className="w-full sm:w-auto px-7 py-3 bg-[#5b4baf] text-white rounded-xl text-base font-semibold shadow hover:bg-[#422f9b] transition"
          >
            Start Screening
          </button>

          <button className="w-full sm:w-auto px-7 py-3 bg-white border border-gray-300 rounded-xl text-[#26215f] text-base font-semibold shadow hover:bg-gray-100">
            Save Job
          </button>
        </div>
      </div>
    </div>
  );
}
