"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "Role Description",
    content: [
      "Huma is partnering with a top AI research lab on an exciting project pushing the limits of multimodal machine learning — technology that helps AI understand both visuals and sound.",
      "We're looking for detail-oriented freelance contributors to review and compare short video and audio clips. Your feedback will directly improve the next generation of AI systems that interpret images, audio, and video.",
      "This is a remote, short-term opportunity that offers flexible hours.",
    ],
  },
  {
    title: "Eligibility",
    content: [
      "You can apply if you’re based in:",
      "• United States (except residents of California, New York, Connecticut, Washington, or the District of Columbia)",
      "• United Kingdom",
      "• Canada",
      "• Australia",
    ],
  },
  {
    title: "What You'll Do",
    content: [
      "• Review and evaluate different types of multimedia content — including audio, images, and video.",
      "• Compare AI-generated results and choose which ones look or sound best.",
      "• Tag or annotate videos and sounds to help train AI systems.",
      "• Follow clear project guidelines to keep results consistent.",
      "• Play a key role in improving the accuracy and reliability of cutting-edge multimodal AI.",
    ],
  },
  {
    title: "What We're Looking For",
    content: [
      "• Fluent in English (native or near-native; other languages are a plus!).",
      "• Great attention to detail and strong communication skills.",
      "• Able to carefully follow instructions and meet quality standards.",
      "• Comfortable working independently and staying focused on repetitive tasks.",
    ],
  },
  {
    title: "Why You'll Like This Opportunity",
    content: [
      "• Fully remote and asynchronous — work when it suits you.",
      "• Short-term, contract-based engagement.",
      "• Workload depends on available tasks, giving you flexibility.",
    ],
  },
  {
    title: "How to Apply",
    content: [
      "1. Fill out a short application form and availability survey.",
      "2. Complete a quick 15-minute AI interview.",
      "3. Most applicants hear back within 2 weeks of applying.",
    ],
  },
];

const OpportunityPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleStartClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/skynetic/resume"); // ✅ Navigate to Resume page
    }, 300); // optional small delay for loading effect
  };

  return (
    <div className="min-h-screen w-full bg-white text-gray-900 flex flex-col items-center p-4 sm:p-12">
      {/* Back Link at Top */}
      <div className="w-full max-w-full flex justify-start mb-6">
        <a
          href="#"
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-base sm:text-lg">View all Opportunities</span>
        </a>
      </div>

      {/* Job Sections - FULL WIDTH CARD */}
      <div className="w-full bg-white p-8 sm:p-12 rounded-2xl shadow-lg border border-gray-200 flex flex-col space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Freelance Multimodal Content Reviewer (AI Research)
        </h1>
        <p className="text-gray-500 mb-6 sm:text-lg">Huma Labs | Remote | Contract</p>

        {sections.map((section) => (
          <div key={section.title} className="space-y-2">
            <h2 className="font-semibold text-lg sm:text-xl">{section.title}</h2>
            {section.content.map((line, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed sm:text-base">
                {line}
              </p>
            ))}
          </div>
        ))}

        {/* Start Screening Button */}
        <div className="pt-6 flex justify-center">
          <button
            onClick={handleStartClick}
            disabled={isLoading}
            className={`w-full sm:w-64 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300 bg-black hover:bg-gray-800 ${
              isLoading ? "bg-gray-600 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Loading..." : "Start Screening"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpportunityPage;
