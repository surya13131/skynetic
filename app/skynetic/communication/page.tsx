"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  Headphones,
  Video,
  CheckCircle,
  Mic,
  BookOpen,
  Volume2,
  ListChecks,
} from "lucide-react";
import { useRouter } from "next/navigation";

const initialTests = [
  { id: "audio", icon: Headphones, title: "Audio System Check", description: "Test your microphone", status: "available" },
  { id: "video", icon: Video, title: "Video System Check", description: "Test your camera", status: "pending" },
  { id: "listening", icon: Volume2, title: "Listening Test", description: "Listen to audio and answer 5 questions.", status: "pending" },
  { id: "reading", icon: BookOpen, title: "Reading & Comprehension", description: "Read a paragraph & summarize.", status: "pending" },
  { id: "speaking", icon: Mic, title: "Speaking Test", description: "Record a 30-second response.", status: "pending" },
  { id: "grammar", icon: ListChecks, title: "Grammar & Vocabulary", description: "10 grammar & vocabulary questions.", status: "pending" },
];

const TestCard = ({ icon: Icon, title, description, status, onStartTest }) => {
  const cardStyles = {
    completed: "bg-[#e5ffe5] border-green-200 text-green-700",
    available: "bg-white border-gray-200 text-[#26215f] hover:shadow-md cursor-pointer transition",
    pending: "bg-[#f1eeff] border-gray-200 text-gray-600 opacity-60",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-full p-5 rounded-2xl border shadow-sm flex gap-4 ${cardStyles[status]}`}
    >
      <Icon className={`w-6 h-6 flex-shrink-0 ${status === "completed" ? "text-green-500" : "text-[#5b4baf]"}`} />

      <div className="flex-grow">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm mt-1 text-gray-600">{description}</p>

        {status === "completed" && (
          <div className="flex items-center mt-2 text-green-600">
            <CheckCircle className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">Completed</span>
          </div>
        )}

        {status === "available" && (
          <button
            onClick={onStartTest}
            className="mt-3 px-5 py-2 bg-[#5b4baf] text-white rounded-xl text-sm font-medium hover:bg-[#422f9b] transition"
          >
            Start Test
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default function CommunicationRoundPage() {
  const router = useRouter();
  const [tests, setTests] = useState(initialTests);
  const [showFinish, setShowFinish] = useState(false);

  const handleTestCompletion = (id) => {
    let idx = -1;

    const updated = tests.map((test, i) => {
      if (test.id === id) {
        idx = i;
        return { ...test, status: "completed" };
      }
      return test;
    });

    const next = updated.findIndex((t, i) => i > idx && t.status === "pending");
    if (next !== -1) updated[next].status = "available";

    if (updated.every((t) => t.status === "completed")) {
      setShowFinish(true);
    }

    setTests(updated);
  };

  return (
    <div className="min-h-screen w-full px-5 py-10 bg-gradient-to-br from-[#f0ebff] via-[#faf8ff] to-white">

      {/* HEADER / BACK BUTTON */}
      <div className="mb-12">
        {/* Back Button at top */}
     {/* Back Button at top */}
<button
  onClick={() => router.push("/skynetic/referral")}
  className="flex items-center text-lg sm:text-xl font-semibold text-gray-600 hover:text-[#5b4baf] transition duration-150 p-3 rounded-md"
>
  <ChevronLeft className="w-6 h-6 mr-1" />Back
</button>



        {/* Heading and description below */}
        <div className="mt-6 sm:mt-10 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#26215f]">
            Communication Round
          </h1>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Complete the following system and skill checks
          </p>
        </div>
      </div>

      {/* TEST CARDS LIST */}
      <div className="flex flex-col gap-4">
        {tests.map((t) => (
          <TestCard key={t.id} {...t} onStartTest={() => handleTestCompletion(t.id)} />
        ))}
      </div>

      {/* FINISH CARD */}
      {showFinish && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 p-6 bg-[#f1eeff] border border-gray-200 rounded-2xl shadow-md text-center"
        >
          <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-3" />

          <h2 className="text-xl font-bold text-gray-800">Communication Round Complete!</h2>

          <p className="text-sm text-[#5b4baf] font-semibold mt-2">
            You're eligible for the Technical Round
          </p>

          <button
            onClick={() => router.push("/skynetic/technical")}
            className="w-full mt-4 px-6 py-3 bg-[#5b4baf] text-white rounded-xl font-semibold hover:bg-[#422f9b] transition"
          >
            Continue to Technical Assessment
          </button>
        </motion.div>
      )}
    </div>
  );
}
