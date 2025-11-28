"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

/* -------- Lucide Icons (Only Valid Icons) -------- */
import {
  Bell,
  User,
  Settings,
  Sun,
  Search,
  MapPin,
  Clock,
  BookOpen,
  Briefcase,
  MessageCircle,  // FIXED ICON
  UsersRound,
} from "lucide-react";

import { motion } from "framer-motion";

/* ---------------- GOOGLE FONTS ---------------- */
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
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
});
/* ------------------------------------------------ */

export default function JobsPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Jobs");

  /* ----------- FIXED TABS (VALID ICONS ONLY) ------------ */
  const tabs = [
    { name: "Jobs", icon: Briefcase },
    { name: "Interview", icon: MessageCircle }, // FIXED
    { name: "Network", icon: UsersRound },
    { name: "Learn", icon: BookOpen },
  ];

  /* ---------------------- INDIAN JOB DATA -------------------- */
  const jobs = [
    {
      title: "Senior Full Stack Developer",
      company: "Infosys Technologies",
      location: "Bangalore, Karnataka",
      salary: "₹15 LPA – ₹28 LPA",
      type: "Full-time",
      days: "2 days ago",
      match: 97,
      recruiter: "Arun Kumar",
    },
    {
      title: "React Frontend Developer",
      company: "Tata Consultancy Services (TCS)",
      location: "Chennai, Tamil Nadu",
      salary: "₹6 LPA – ₹12 LPA",
      type: "Remote",
      days: "1 week ago",
      match: 92,
      recruiter: "Gokila Devi",
    },
    {
      title: "UI/UX Designer",
      company: "Zoho Corporation",
      location: "Chennai, Tamil Nadu",
      salary: "₹5 LPA – ₹9 LPA",
      type: "Full-time",
      days: "3 days ago",
      match: 88,
      recruiter: "Sathish Raj",
    },
    {
      title: "Backend Engineer (Node.js)",
      company: "Wipro Digital",
      location: "Hyderabad, Telangana",
      salary: "₹10 LPA – ₹18 LPA",
      type: "Full-time",
      days: "4 days ago",
      match: 93,
      recruiter: "Mohana Priya",
    },
  ];

  /* -------- Tab Navigation Routes -------- */
  const tabRoutes = {
    Jobs: "/skynetic/jobs",
    Interview: "/skynetic/interview",
    Network: "/skynetic/connection",
    Learn: null,
  };

  /* -------- Detect active tab on load -------- */
  useEffect(() => {
    const foundTab = tabs.find(
      (tab) =>
        tabRoutes[tab.name] &&
        pathname.includes(tabRoutes[tab.name].split("/")[2])
    );
    if (foundTab) setActiveTab(foundTab.name);
  }, [pathname]);

  const handleTabClick = (tab) => {
    if (tab === "Learn") {
      setActiveTab("Learn");
    } else {
      router.push(tabRoutes[tab]);
    }
  };

  return (
    <div
      className={`
        ${inter.variable} ${urbanist.variable} ${grotesk.variable}
        min-h-screen w-full
        bg-gradient-to-br from-[#ebe7ff] via-[#f5f3ff] to-white
        text-gray-900
      `}
    >
      {/* ---------------- NAVBAR ---------------- */}
      <header className="w-full backdrop-blur-2xl bg-white/60 border-b border-white/40 px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg shadow-black/5">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-[#26215f] uppercase font-[var(--font-grotesk)]"
        >
          Skynetic
        </motion.h1>

        <div className="flex items-center gap-4">
          {[Sun, Bell, User, Settings].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2 }}
              className="p-2 rounded-2xl bg-white/50 border border-white/40 shadow-sm hover:bg-white cursor-pointer"
            >
              <Icon className="w-6 h-6 text-[#26215f]" />
            </motion.div>
          ))}
        </div>
      </header>

      {/* ---------------- TABS ---------------- */}
      <nav className="w-full flex items-center gap-10 border-b border-white/40 bg-white/40 backdrop-blur-xl px-6 text-lg font-semibold font-[var(--font-urbanist)]">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => handleTabClick(tab.name)}
            className={`py-4 flex items-center gap-2 transition-all ${
              activeTab === tab.name
                ? "border-b-4 border-[#5b4baf] text-[#5b4baf]"
                : "text-gray-600 hover:text-[#32288a]"
            }`}
          >
            <tab.icon className="w-5 h-5" />
            {tab.name}
          </button>
        ))}
      </nav>

      {/* ---------------- SEARCH BAR (Jobs Only) ---------------- */}
      {activeTab === "Jobs" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full px-6 mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <div className="w-full bg-white/40 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl px-4 py-3 flex items-center gap-3 hover:bg-white/70 transition">
            <Search className="w-5 h-5 text-gray-600" />
            <input
              type="text"
              placeholder="Search jobs, companies, or skills..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-700"
            />
          </div>

          <button className="px-6 py-3 rounded-2xl bg-[#26215f] text-white shadow-md hover:bg-[#1e1a4c] transition">
            Search
          </button>
        </motion.div>
      )}

      {/* ---------------- JOB LIST ---------------- */}
      <div className="px-6 mt-10 flex flex-col gap-8 pb-40">
        {activeTab === "Jobs" &&
          jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="w-full bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl p-8 hover:bg-white transition"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-[#24224f] font-[var(--font-grotesk)]">
                    {job.title}
                  </h2>

                  <p className="text-gray-700 mt-2 text-base">{job.company}</p>

                  <div className="flex flex-wrap gap-5 mt-4 text-gray-600 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </div>
                    <div>{job.salary}</div>
                    <div className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border">
                      {job.type}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" /> {job.days}
                    </div>
                  </div>

                  <p className="mt-4 text-gray-700 text-sm">
                    Recruiter: <b>{job.recruiter}</b>
                  </p>

                  <div className="flex gap-4 mt-6">
                    <button className="px-6 py-2 bg-[#26215f] text-white rounded-xl shadow hover:bg-[#1e1a4c] transition">
                      Apply Now
                    </button>
                    <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition">
                      Save Job
                    </button>
                  </div>
                </div>

                <div className="px-6 py-3 bg-[#ebe4ff] text-[#5b4baf] rounded-full text-sm font-semibold shadow">
                  {job.match}% Match
                </div>
              </div>
            </motion.div>
          ))}

        {/* ---------------- LEARN TAB ---------------- */}
        {activeTab === "Learn" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full flex flex-col items-center justify-center mt-20"
          >
            <BookOpen className="w-20 h-20 text-[#5b4baf] mb-4" />
            <h2 className="text-3xl font-bold text-[#26215f] mb-2">
              Learning Resources
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Improve your skills with curated courses
            </p>
            <button className="px-6 py-3 bg-[#26215f] text-white rounded-xl shadow hover:bg-[#1e1a4c]">
              Explore Courses
            </button>
          </motion.div>
        )}

        {/* COMING SOON FOR OTHER TABS */}
        {activeTab !== "Jobs" && activeTab !== "Learn" && (
          <div className="text-center mt-20 text-gray-600 text-lg">
            {activeTab} section is coming soon!
          </div>
        )}
      </div>
    </div>
  );
}
