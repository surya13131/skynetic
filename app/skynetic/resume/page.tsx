"use client";

import React, { useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { useRouter } from "next/navigation";

const skills = [
  { name: "Java", rating: 4, percent: 70 },
  { name: "Python", rating: 5, percent: 90 },
  { name: "React Js", rating: 3, percent: 60 },
];

const ResumePage: React.FC = () => {
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const router = useRouter();

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setResumeUploaded(true);
    }
  };

  const handleStartCVTest = () => {
    router.push("/skynetic/technical");
  };

  return (
    <div className="min-h-screen w-full bg-white text-gray-900 flex flex-col items-center p-6 sm:p-12 space-y-6">
      {/* Main Container */}
      <div className="w-full max-w-4xl flex flex-col items-center space-y-6">
        {/* Upload Resume */}
        <div className="w-full flex flex-col items-center space-y-4">
          <label className="flex items-center justify-center gap-2 border border-gray-700 rounded-xl py-3 px-6 cursor-pointer hover:bg-gray-100 transition w-full sm:w-auto">
            <AiOutlineUpload className="w-5 h-5" />
            <span>Upload Your Resume</span>
            <input
              type="file"
              className="hidden"
              onChange={handleUpload}
              accept=".pdf,.doc,.docx"
            />
          </label>

          {resumeUploaded && (
            <p className="text-center text-gray-700 font-medium">
              Your Resume is 76% fit for the role
            </p>
          )}
        </div>

        {/* Skill Proficiency */}
        <div className="w-full bg-gray-50 p-4 rounded-xl shadow-sm">
          <p className="font-semibold mb-2">Skill Proficiency</p>
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex justify-between items-center mb-1 text-gray-700"
            >
              <span>{skill.name}</span>
              <span>
                {"★".repeat(skill.rating) + "☆".repeat(5 - skill.rating)} (
                {skill.percent}%)
              </span>
            </div>
          ))}
          {resumeUploaded && (
            <p className="text-center text-gray-700 font-medium mt-2">
              Your Skills are 76% fit for the role
            </p>
          )}
        </div>

        {/* Start CV Test Button */}
        <button
         
          className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition"
        >
          Start CV Test
        </button>

        {/* Animated Video / Case Studies Box */}
        <div className="w-full h-64 border border-gray-400 rounded-xl flex items-center justify-center text-center p-4">
          <p>
            Animated Video <br />
            Pop Questions Case Studies <br />
            on Skynetic
          </p>
        </div>

        {/* Eligibility */}
        <p className="text-center font-medium">
          Congrats! You are Eligible For Communication Round
        </p>

        {/* Start Communication Button */}
        <button  onClick={handleStartCVTest} className="w-full py-4 rounded-xl bg-black text-white font-bold hover:bg-gray-800 transition">
          Start Communication
        </button>
      </div>
    </div>
  );
};

export default ResumePage;
