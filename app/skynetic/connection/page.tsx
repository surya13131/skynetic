"use client";

import { useState } from "react";
import { Search, User, MapPin, Users, CheckCircle2, Clock, Star } from "lucide-react";
import { Inter, Urbanist, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["300","400","500","600","700"], variable:"--font-inter" });
const urbanist = Urbanist({ subsets:["latin"], weight:["500","600","700","800"], variable:"--font-urbanist" });
const grotesk = Space_Grotesk({ subsets:["latin"], weight:["400","500","600","700"], variable:"--font-grotesk" });

// ----------------------
// FIX TYPE ERROR
// ----------------------

type TabType = "All Connections" | "Connected" | "Pending" | "Suggested";

export default function NetworkPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<TabType>("All Connections");

  const connections = [
    { name: "Arun Kumar", title: "Software Engineer", company: "TCS", location: "Chennai, TN", status: "connected", connections: 420 },
    { name: "Priya Shankar", title: "UI/UX Designer", company: "Zoho Corp", location: "Salem, TN", status: "pending", connections: 310 },
    { name: "Suresh Raju", title: "Backend Developer", company: "Infosys", location: "Bangalore, KA", status: "suggested", connections: 290 },
    { name: "Deepa Lakshmi", title: "Product Manager", company: "Wipro", location: "Hyderabad, TS", status: "connected", connections: 510 },
    { name: "Vignesh M", title: "Data Analyst", company: "HCL Tech", location: "Coimbatore, TN", status: "suggested", connections: 250 },
    { name: "Harini Raj", title: "Frontend Developer", company: "Freshworks", location: "Chennai, TN", status: "connected", connections: 380 },
  ];

  const statusStyles = {
    connected: "bg-[#ebe4ff] text-[#5b4baf]",
    pending: "bg-yellow-100 text-yellow-800",
    suggested: "bg-green-100 text-green-800",
  };

  const filteredConnections = connections.filter((conn) => {
    const matchesFilter = filter === "All Connections" ? true : conn.status === filter.toLowerCase();
    const matchesQuery =
      conn.name.toLowerCase().includes(query.toLowerCase()) ||
      conn.company.toLowerCase().includes(query.toLowerCase()) ||
      conn.title.toLowerCase().includes(query.toLowerCase());

    return matchesFilter && matchesQuery;
  });

  // ----------------------
  // FIXED ICON OBJECT WITH TYPE
  // ----------------------

  const filterIcons: Record<TabType, JSX.Element> = {
    "All Connections": <Users className="w-5 h-5" />,
    Connected: <CheckCircle2 className="w-5 h-5" />,
    Pending: <Clock className="w-5 h-5" />,
    Suggested: <Star className="w-5 h-5" />,
  };

  return (
    <div className={`${inter.variable} ${urbanist.variable} ${grotesk.variable} min-h-screen w-full 
      bg-gradient-to-br from-[#f5f3ff] via-[#ece8ff] to-white text-gray-900 px-4 sm:px-6 lg:px-12`}>

      {/* HEADER */}
      <header className="w-full flex justify-between items-center py-4">
        <div className="flex items-center gap-2 animate-bounce">
          <Users className="w-8 h-8 text-[#26215f]" />
          <span className="text-2xl sm:text-3xl font-bold text-[#26215f] tracking-tight font-[var(--font-grotesk)]">
            My Network
          </span>
        </div>
        <User className="w-8 h-8 p-1.5 rounded-2xl border border-white/30
          backdrop-blur-xl hover:scale-110 transition cursor-pointer" />
      </header>

      {/* STATS */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[{ value: 245, label: "Total Connections" }, { value: 12, label: "Pending Requests" }, 
          { value: 8, label: "Messages" }, { value: 156, label: "Profile Views" }]
          .map((stat, i) => (
          <div key={i} className="bg-white/40 backdrop-blur-xl shadow-md rounded-2xl 
            p-4 text-center hover:scale-105 transition-all">
            <div className="text-xl sm:text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* SEARCH */}
      <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
        <div className="w-full flex items-center bg-white/60 backdrop-blur-xl border border-white/40 
          shadow-md rounded-2xl px-4 py-2 hover:bg-white/80 transition">
          <Search className="w-5 h-5 text-gray-600" />
          <input
            type="text"
            placeholder="Search connections..."
            className="ml-2 w-full bg-transparent outline-none text-gray-800 
              text-sm sm:text-base font-[var(--font-inter)]"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* FILTER BUTTONS */}
      <div className="mt-4 flex flex-wrap gap-3 justify-center">
        {Object.keys(filterIcons).map((tab, i) => (
          <button
            key={i}
            onClick={() => setFilter(tab as TabType)}
            className={`flex flex-col items-center justify-center px-4 py-3 sm:px-6 sm:py-4
              rounded-2xl font-[var(--font-urbanist)] transition-all transform shadow-md
              backdrop-blur-xl border border-white/20
              hover:scale-110 hover:bg-white/50
              ${filter === tab ? "bg-[#5b4baf] text-white shadow-lg" : "bg-white/40 text-gray-800"}`}
          >
            <div className="mb-1">{filterIcons[tab as TabType]}</div>
            <span className="text-xs sm:text-sm font-semibold">{tab}</span>
          </button>
        ))}
      </div>

      {/* CONNECTION CARDS */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
        {filteredConnections.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No connections found.</p>
        ) : (
          filteredConnections.map((conn, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-2xl border border-white/40 rounded-2xl 
                shadow-md p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center 
                hover:bg-white hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition"
            >
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="w-12 h-12 bg-[#5b4baf] text-white flex items-center justify-center 
                  rounded-full font-bold text-lg flex-shrink-0">
                  {conn.name.split(" ").map(n => n[0]).join("")}
                </div>

                <div className="truncate max-w-[200px] sm:max-w-[250px]">
                  <h2 className="font-bold text-gray-900 truncate">{conn.name}</h2>
                  <p className="text-sm text-gray-600 truncate">{conn.title} @ {conn.company}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1 truncate">
                    <MapPin className="w-3 h-3 shrink-0" /> {conn.location} • {conn.connections} connections
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-2 mt-4 sm:mt-0 w-full sm:w-auto">

                {conn.status === "connected" && (
                  <button className="w-full sm:w-auto px-4 py-2 min-w-[120px] rounded-xl 
                    bg-[#5b4baf] text-white font-[var(--font-urbanist)] shadow-md
                    hover:bg-[#6c57d1] hover:shadow-lg hover:scale-105 transition truncate">
                    Message
                  </button>
                )}

                {conn.status === "pending" && (
                  <button className="w-full sm:w-auto px-4 py-2 min-w-[120px] rounded-xl 
                    bg-gray-200 text-gray-700 font-[var(--font-urbanist)] cursor-not-allowed truncate">
                    Request Sent
                  </button>
                )}

                {conn.status === "suggested" && (
                  <button className="w-full sm:w-auto px-4 py-2 min-w-[120px] rounded-xl 
                    bg-white/30 backdrop-blur-lg border border-white/30 shadow-md text-[#5b4baf] 
                    font-[var(--font-urbanist)] hover:bg-white/50 hover:shadow-lg hover:scale-105 transition truncate">
                    Connect
                  </button>
                )}

                <span className={`px-3 py-1 text-xs rounded-full font-semibold 
                  ${statusStyles[conn.status]} truncate`}>
                  {conn.status}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
