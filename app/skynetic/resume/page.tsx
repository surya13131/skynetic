"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

/* Google Fonts */
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

export default function ResumeAnalysis() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);

  const handleFile = (e: any) => {
    const f = e.target.files?.[0];
    if (f && f.type === "application/pdf") {
      setFile(f);

      // Wait briefly before redirecting to referral page
      setTimeout(() => {
        router.push("/skynetic/referral");
      }, 800); // 0.8s delay for smooth UX
    } else {
      alert("Please upload a PDF file only.");
    }
  };

  return (
    <div
      className={`${inter.variable} ${urbanist.variable} ${grotesk.variable} w-full min-h-screen bg-gradient-to-br from-[#f5f0ff] to-[#e8e0ff] px-6 py-10`}
    >
      {/* Top Row */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.push("/skynetic/profile")}
          className="p-2 rounded-full hover:bg-white hover:shadow-xl transition-all duration-300 backdrop-blur-md border border-[#c9c3f5]/50"
        >
          <ArrowLeft className="w-6 h-6 text-[#26215f]" />
        </button>

        <h1
          className="text-3xl font-bold text-[#26215f] tracking-tight"
          style={{ fontFamily: "var(--font-urbanist)" }}
        >
          Resume Analysis
        </h1>
      </div>

      {/* Subtitle */}
      <p
        className="text-center mt-10 text-gray-700 text-lg"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Upload your resume to get started
      </p>

      {/* Upload Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full flex justify-center mt-10"
      >
        <div
          className="w-full max-w-3xl p-10 rounded-3xl 
          backdrop-blur-xl bg-white/30 border border-white/40 shadow-2xl
          hover:shadow-[0_10px_50px_rgba(80,70,160,0.2)]
          transition-all duration-500"
        >
          <label
            htmlFor="resume"
            className="cursor-pointer flex flex-col justify-center items-center 
            border-2 border-dashed border-[#26215f]/40 bg-white/50 backdrop-blur-md 
            rounded-2xl py-20 transition-all duration-300 
            hover:border-[#26215f] hover:bg-white/70 hover:scale-[1.02]"
          >
            <Upload className="w-12 h-12 text-[#26215f] opacity-90" />

            {!file ? (
              <>
                <p
                  className="text-xl font-semibold mt-3 text-[#26215f]"
                  style={{ fontFamily: "var(--font-urbanist)" }}
                >
                  Upload Your Resume
                </p>
                <p
                  className="text-gray-600 text-sm mt-1"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  PDF format only
                </p>
              </>
            ) : (
              <>
                <p
                  className="text-xl font-semibold mt-3 text-[#26215f]"
                  style={{ fontFamily: "var(--font-urbanist)" }}
                >
                  {file.name}
                </p>
                <p
                  className="text-gray-600 text-sm mt-1"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  File uploaded successfully
                </p>
              </>
            )}
          </label>

          <input
            id="resume"
            type="file"
            accept="application/pdf"
            onChange={handleFile}
            className="hidden"
          />
        </div>
      </motion.div>
    </div>
  );
}
