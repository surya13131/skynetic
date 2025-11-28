"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, FileText, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

// Font
const fontClass = "font-sans";

// Skill bar component
const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="font-semibold text-gray-800">{skill}</span>
        <span className="text-sm font-medium text-gray-600">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="h-2.5 rounded-full bg-[#5b4baf] transition-all duration-700 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default function ResumeAnalysisPage() {
  const router = useRouter();

  // Mock data
  const analysisData = {
    matchPercentage: 94,
    skills: [
      { skill: "Java", percentage: 70 },
      { skill: "Python", percentage: 70 },
      { skill: "React.js", percentage: 70 },
    ],
  };

  const [resumeUploaded, setResumeUploaded] = useState(true); // Mock uploaded state

  return (
    <div
      className={`${fontClass} min-h-screen w-full bg-gradient-to-br from-[#ebe7ff] via-[#f5f3ff] to-white text-gray-900 flex justify-center py-10 px-4 sm:px-6`}
    >
      <div className="w-full max-w-[1600px]"> {/* Full width for desktop */}

        {/* HEADER / BACK BUTTON */}
        <div className="mb-12">
          {/* Back Button at top */}
          <button
            onClick={() => router.push("/skynetic/resume")}
            className="flex items-center text-lg sm:text-xl font-semibold text-gray-600 hover:text-[#5b4baf] transition duration-150 p-4 sm:p-5 rounded-md"
          >
            <ChevronLeft className="w-6 h-6 mr-2" />
            Back
          </button>

          {/* Heading and description below */}
          <div className="mt-6 sm:mt-10 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#26215f]">
              Resume Analysis
            </h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Upload your resume to get started
            </p>
          </div>
        </div>
{/* RESUME UPLOAD STATUS CARD */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
  className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-xl p-6 sm:p-10 text-center"
>
  {resumeUploaded ? (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <CheckCircle className="w-14 h-14 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4" />
      <h2 className="text-lg sm:text-xl font-bold text-gray-800">
        Resume Uploaded Successfully
      </h2>
      <p className="text-gray-500 mt-1 text-sm sm:text-base">Analyzing your skills...</p>
    </motion.div>
  ) : (
    <div>
      <FileText className="w-14 h-14 sm:w-16 sm:h-16 text-[#5b4baf] mx-auto mb-4" />
      <h2 className="text-lg sm:text-xl font-bold text-gray-800">Upload Your Resume</h2>
      <button className="mt-4 px-6 py-2 bg-[#5b4baf] text-white rounded-xl shadow-md hover:bg-[#422f9b] transition">
        Click to Upload
      </button>
    </div>
  )}
</motion.div>

{/* SKILLS MATCH ANALYSIS CARD */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.5 }}
  className="w-full max-w-md mx-auto bg-[#ede9ff] rounded-3xl shadow-xl mt-6 p-6 sm:p-8 border border-[#e0d6ff]"
>
  <div className="text-center mb-6">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#26215f]">
      {analysisData.matchPercentage}% Match for this role
    </h2>
  </div>

  <div className="space-y-4">
    {analysisData.skills.map((skill, index) => (
      <SkillBar key={index} skill={skill.skill} percentage={skill.percentage} />
    ))}
  </div>
</motion.div>

        {/* ACTION BUTTON */}
        <div className="mt-8 max-w-lg mx-auto">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            type="button"
            onClick={() => router.push("/skynetic/communication")}
            className="w-full px-6 py-4 bg-[#5b4baf] text-white font-bold text-lg rounded-xl shadow-lg hover:bg-[#422f9b] transition duration-300"
          >
            Continue to Communication Round
          </motion.button>
        </div>

      </div>
    </div>
  );
}
