"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
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
  MessageCircle,
  UsersRound,
} from "lucide-react";
import { motion } from "framer-motion";
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

type TabName = "Jobs" | "Interview" | "Network" | "Learn";

interface TabItem {
  name: TabName;
  icon: any;
}

interface Job {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  days: string;
  match: number;
  recruiter: string;
}

export default function JobsPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<TabName>("Jobs");

  const tabs: TabItem[] = [
    { name: "Jobs", icon: Briefcase },
    { name: "Interview", icon: MessageCircle },
    { name: "Network", icon: UsersRound },
    { name: "Learn", icon: BookOpen },
  ];

  const tabRoutes: Record<TabName, string | null> = {
    Jobs: "/skynetic/jobs",
    Interview: "/skynetic/interview",
    Network: "/skynetic/connection",
    Learn: null,
  };

  const jobs: Job[] = [
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

  useEffect(() => {
    const found = tabs.find((tab) => {
      const route = tabRoutes[tab.name];
      return route && pathname.includes(route.split("/")[2]);
    });
    if (found) setActiveTab(found.name);
  }, [pathname]);

  const handleTabClick = (tab: TabName) => {
    if (tab === "Learn") {
      setActiveTab("Learn");
      return;
    }
    const route = tabRoutes[tab];
    if (route) router.push(route);
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.company.toLowerCase().includes(query.toLowerCase()) ||
      job.location.toLowerCase().includes(query.toLowerCase()) ||
      job.recruiter.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className={`${inter.variable} ${urbanist.variable} ${grotesk.variable} min-h-screen w-full bg-gradient-to-br from-[#ebe7ff] via-[#f5f3ff] to-white text-gray-900`}
    >
      {/* NAVBAR */}
      <header className="w-full backdrop-blur-2xl bg-white/60 border-b border-white/40 px-4 sm:px-6 py-3 flex justify-between items-center sticky top-0 z-50 shadow-lg shadow-black/5">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-4xl font-bold text-[#26215f] uppercase font-[var(--font-grotesk)] truncate"
        >
          Skynetic
        </motion.h1>
        <div className="flex items-center gap-2 sm:gap-4">
          {[Sun, Bell, User, Settings].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2 }}
              className="p-2 rounded-2xl bg-white/50 border border-white/40 shadow-sm hover:bg-white cursor-pointer"
            >
              <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-[#26215f]" />
            </motion.div>
          ))}
        </div>
      </header>

      {/* TABS */}
      <nav className="w-full flex justify-around border-b border-white/40 bg-white/40 backdrop-blur-xl px-2 sm:px-6 text-lg font-semibold font-[var(--font-urbanist)]">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => handleTabClick(tab.name)}
            className={`flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 transition-all ${
              activeTab === tab.name
                ? "border-b-4 border-[#5b4baf] text-[#5b4baf]"
                : "text-gray-600 hover:text-[#32288a]"
            }`}
          >
            <tab.icon className="w-5 h-5 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-base">{tab.name}</span>
          </button>
        ))}
      </nav>

      {/* SEARCH BAR */}
      {activeTab === "Jobs" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full px-4 sm:px-6 mt-6 sm:mt-10 flex justify-center"
        >
          <div className="w-full sm:w-1/2 bg-white/40 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl px-4 py-3 flex items-center gap-2 sm:gap-3 hover:bg-white/70 transition">
            <Search className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600" />
            <input
              type="text"
              placeholder="Search jobs, companies, locations, recruiter..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-700 text-sm sm:text-base"
            />
          </div>
        </motion.div>
      )}

      {/* JOB LIST */}
      <div className="px-4 sm:px-6 mt-6 sm:mt-10 flex flex-col gap-6 sm:gap-8 pb-32">
        {activeTab === "Jobs" &&
          filteredJobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="w-full bg-white/30 backdrop-blur-xl border border-white/20 shadow-lg rounded-3xl p-5 sm:p-8 hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col sm:flex-row justify-between gap-4 sm:items-center"
            >
              <div className="flex-1 min-w-0">
                <h2 className="text-xl sm:text-2xl font-bold text-[#26215f] font-[var(--font-grotesk)] truncate">
                  {job.title}
                </h2>
                <p className="text-gray-700 mt-1 sm:mt-2 text-sm sm:text-base truncate">
                  {job.company}
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-5 mt-3 text-gray-600 text-xs sm:text-sm">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <MapPin className="w-3 sm:w-4 h-3 sm:h-4" /> {job.location}
                  </div>
                  <div className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border">
                    {job.type}
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Clock className="w-3 sm:w-4 h-3 sm:h-4" /> {job.days}
                  </div>
                </div>

                  <div className="mt-2 sm:mt-4 text-gray-700 text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center gap-2">
            <span>
              Recruiter: <b>{job.recruiter}</b>
            </span>
            <div className="w-full sm:w-auto flex justify-center sm:justify-start mt-2 sm:mt-0">
              <span className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-[#d6c1ff] to-[#5b4baf] text-white text-xs sm:text-sm rounded-full font-bold shadow-md">
                {job.salary}
              </span>
            </div>
          </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-3 sm:mt-6">
                 <button
      onClick={() => router.push("/skynetic/profile")}
      className="px-4 sm:px-6 py-2 bg-[#5b4baf] text-white rounded-xl shadow hover:bg-[#422f9b] text-sm sm:text-base w-full sm:w-auto"
    >
      Apply Now
    </button>
                  <button className="px-4 sm:px-6 py-2 bg-white/40 text-[#26215f] border border-white/40 rounded-xl hover:bg-white text-sm sm:text-base w-full sm:w-auto backdrop-blur-sm">
                    Save Job
                  </button>
                </div>
              </div>

              {/* MATCH BADGE */}
              <div className="mt-3 sm:mt-0 px-4 py-1 sm:px-6 sm:py-2 bg-[#ebe4ff] text-[#5b4baf] rounded-full text-sm sm:text-base font-semibold shadow text-center whitespace-nowrap">
                {job.match}% Match
              </div>
            </motion.div>
          ))}

        {/* LEARN SECTION */}
        {activeTab === "Learn" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full flex flex-col items-center justify-center mt-10 sm:mt-20 px-4 text-center"
          >
            <BookOpen className="w-16 sm:w-20 h-16 sm:h-20 text-[#5b4baf] mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#26215f] mb-2">
              Learning Resources
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Improve your skills with curated courses
            </p>
            <button className="px-6 py-2 sm:px-6 sm:py-3 bg-[#5b4baf] text-white rounded-xl shadow hover:bg-[#422f9b] text-sm sm:text-base">
              Explore Courses
            </button>
          </motion.div>
        )}

        {/* Coming Soon */}
        {activeTab !== "Jobs" && activeTab !== "Learn" && (
          <div className="text-center mt-20 text-gray-600 text-sm sm:text-lg">
            {activeTab} section is coming soon!
          </div>
        )}
      </div>
    </div>
  );
}
