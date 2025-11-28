"use client";

import React from "react";
import Link from "next/link";
import {
  Download,
  Share2,
  Trophy,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  MessageCircle,
  Code,
  Users,
  Briefcase,
  Globe,
  Star,
  ChevronLeft,
  Home,
} from "lucide-react";

/* ---------------- GOOGLE FONTS ---------------- */
// IMPORTANT: Ensure these fonts are imported and configured in your project's layout/config files.
import { Inter, Urbanist, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-urbanist",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-grotesk",
});
/* ------------------------------------------------ */

// **Helper Classes**
const lightGlass =
  "bg-white/70 backdrop-blur-2xl border border-white/80 shadow-xl shadow-gray-200/50 transition-all duration-300";

const hoverEffect = "hover:shadow-2xl hover:shadow-purple-200/50 hover:-translate-y-0.5";

// --- Mock Data ---
const performanceData = {
  overallScore: 87,
  categories: [
    { name: "Communication", score: 92, icon: MessageCircle },
    { name: "Technical Skills", score: 85, icon: Code },
    { name: "Problem Solving", score: 88, icon: Lightbulb },
    { name: "Leadership", score: 82, icon: Users },
  ],
  strengths: [
    "Excellent communication skills and clear articulation.",
    "Strong technical knowledge and problem-solving approach.",
    "Good use of STAR method in behavioral questions.",
    "Confident delivery and professional demeanor.",
  ],
  areasForImprovement: [
    "Consider providing more specific metrics in your examples.",
    "Practice pausing before answering to organize thoughts.",
    "Add more details about your leadership experience.",
    "Work on maintaining consistent eye contact.",
  ],
};

// --- Sub-Components ---

const SkillRating = ({ name, score, icon: Icon }) => {
  return (
    <div className={`p-4 ${lightGlass} rounded-2xl ${hoverEffect} flex flex-col items-center`}>
      <Icon className="w-8 h-8 mb-2 text-purple-600" />
      <span className="text-base font-semibold text-gray-700">{name}</span>
      <div className="w-full h-3 bg-gray-200 rounded-full mt-2">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-purple-400 to-purple-600"
          style={{ width: `${score}%` }}
        ></div>
      </div>
      <span className="mt-2 text-xl font-bold text-gray-800 font-[var(--font-grotesk)]">{score}%</span>
    </div>
  );
};

const ItemListCard = ({ title, items, Icon, color }) => {
  return (
    <div className={`p-6 md:p-8 ${lightGlass} rounded-[30px] w-full ${hoverEffect}`}>
      <h2 className="text-2xl font-bold mb-5 flex items-center text-gray-800 font-[var(--font-grotesk)]">
        <Icon className={`w-6 h-6 mr-3 ${color}`} />
        {title}
      </h2>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex items-start text-base p-4 rounded-xl bg-white/70 border border-gray-100/50 shadow-sm transition-all duration-300 hover:bg-white`}
          >
            <CheckCircle className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${color}`} />
            <span className="text-gray-700 font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- Main Component ---
export default function InterviewReportPage() {
  const primaryColorHex = "#5b4baf";

  return (
    <div
      className={`
        ${inter.variable}
        ${urbanist.variable}
        ${grotesk.variable}
        min-h-screen w-full font-[var(--font-inter)]
        bg-gradient-to-br from-[#f0f4ff] via-[#e6e9ff] to-white text-gray-900
        py-6 sm:py-10 md:py-12 px-4 sm:px-8 lg:px-16 xl:px-24 
        relative
      `}
    >
      {/* Decorative Background Blur */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0"></div>

      {/* Content Container (Full Width) */}
      <div className="relative z-10 w-full">
        
        {/* Header (Enhanced Home Link) */}
        <header className="flex justify-between items-center mb-10 md:mb-12">
          <div className="flex items-center text-gray-600 hover:text-gray-800 transition">
            <ChevronLeft className="w-6 h-6 mr-2" />
            <span className="text-2xl font-semibold font-[var(--font-grotesk)]">
              Interview Report
            </span>
          </div>
          
          {/* Enhanced Home Button (Functional Link) */}
          <Link 
            href="/skynetic/home" 
            className="flex items-center text-md font-semibold text-gray-600 hover:text-purple-600 transition p-2 rounded-lg hover:bg-gray-100"
          >
            <Home className="w-5 h-5 mr-1" />
            Home
          </Link>
        </header>

        {/* ------------------------------------------------ */}
        
        {/* MAIN GRID: items-start fixes the vertical alignment issue for the side column */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10 items-start">

          {/* Left/Main Column (Performance, Strengths, Improvement, Actions) - Spans 3/4 */}
          <div className="lg:col-span-3 space-y-8 md:space-y-10">
            
            {/* ## 🏆 Overall Performance */}
            <div
              className={`
                p-6 sm:p-10 ${lightGlass}
                rounded-[30px] text-center
                border-t-4 border-[${primaryColorHex}]/70
                ${hoverEffect}
              `}
            >
              {/* Circular Score */}
              <div className="flex flex-col items-center justify-center mb-6">
                <div
                  className={`
                    w-36 h-36 rounded-full flex items-center justify-center
                    bg-white/80 border-4 border-purple-500 shadow-inner
                    relative
                  `}
                >
                  <Star className="w-8 h-8 text-yellow-500 absolute -top-2 -right-2 transform rotate-12" />
                  <span className="text-5xl font-extrabold text-purple-600 font-[var(--font-grotesk)]">
                    {performanceData.overallScore}%
                  </span>
                </div>
                <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900 font-[var(--font-grotesk)]">
                  Excellent Performance!
                </h1>
                <p className="text-lg text-gray-600 font-medium mt-1">
                  You've demonstrated strong skills across all interview categories.
                </p>
              </div>

              {/* Skill Ratings Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8">
                {performanceData.categories.map((category) => (
                  <SkillRating key={category.name} {...category} />
                ))}
              </div>
            </div>
            {/* End Overall Performance */}
            
            {/* Strengths & Improvement in a two-column layout on large screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {/* ## ✅ Strengths */}
                <ItemListCard
                  title="Strengths"
                  items={performanceData.strengths}
                  Icon={Trophy}
                  color="text-green-600"
                />
                {/* ## ⚠️ Areas for Improvement */}
                <ItemListCard
                  title="Areas for Improvement"
                  items={performanceData.areasForImprovement}
                  Icon={AlertTriangle}
                  color="text-yellow-600"
                />
            </div>
            
            {/* ## ⬇️ Actions (Download/Share) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <button
                className={`
                  flex items-center justify-center px-8 py-3 rounded-full
                  bg-[#26215f] text-white font-semibold text-lg
                  shadow-lg shadow-[#26215f]/40 transition-all duration-300
                  hover:bg-[#1e1a4c] hover:shadow-xl hover:-translate-y-1
                  font-[var(--font-urbanist)]
                `}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Report
              </button>
              <button
                className={`
                  flex items-center justify-center px-8 py-3 rounded-full
                  bg-white text-gray-700 font-semibold text-lg border border-gray-300
                  shadow-md transition-all duration-300
                  hover:bg-gray-100 hover:shadow-lg hover:border-gray-400
                  font-[var(--font-urbanist)]
                `}
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share with Recruiter
              </button>
            </div>
            {/* End Actions */}
          </div>

          {/* Right Column ("What's Next?") - Spans 1/4, now aligned correctly */}
        <div className="lg:col-span-1 ">
  <div
    className={`
      p-6 sm:p-8 ${lightGlass} rounded-[30px] h-full
      text-center border-t-4 border-blue-400/70
      ${hoverEffect}
      flex flex-col justify-between
    `}
  >

              {/* Top Content (Title, Paragraph) */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-[var(--font-grotesk)] mb-2">
                  🚀 What's Next?
                </h2>
                <p className="text-md text-gray-600 font-medium mb-6">
                  Level up on completing your interview! Continue building your network and exploring opportunities.
                </p>
              </div>

              {/* Bottom Content (Buttons) - Automatically pushed to the bottom by justify-between */}
              <div className="flex flex-col gap-4"> 
                <button
                  className={`
                    flex items-center justify-center w-full px-6 py-3 rounded-full
                    bg-blue-500 text-white font-semibold shadow-lg shadow-blue-500/30
                    transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:-translate-y-0.5
                    text-lg
                  `}
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  Browse New Jobs
                </button>
                <button
                  className={`
                    flex items-center justify-center w-full px-6 py-3 rounded-full
                    bg-purple-500 text-white font-semibold shadow-lg shadow-purple-500/30
                    transition-all duration-300 hover:bg-purple-600 hover:shadow-xl hover:-translate-y-0.5
                    text-lg
                  `}
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Grow Your Network
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------ */}
      </div>
    </div>
  );
}