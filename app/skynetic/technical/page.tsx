"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, Code, Layers, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

// --- TYPES ---
type Difficulty = "Easy" | "Medium" | "Hard";
type AssessmentStatus = "pending" | "completed";

type Assessment = {
  id: string;
  title: string;
  description: string;
  questions: number;
  time: number;
  difficulty: Difficulty;
  status: AssessmentStatus;
};

// --- ASSESSMENT CARD COMPONENT ---
type AssessmentCardProps = Assessment & {
  onStartAssessment: () => void;
};

const AssessmentCard: React.FC<AssessmentCardProps> = ({
  title,
  description,
  questions,
  time,
  difficulty,
  status,
  onStartAssessment,
}) => {
  const difficultyColors: Record<Difficulty, string> = {
    Easy: "bg-green-100 text-green-700 border-green-300",
    Medium: "bg-yellow-100 text-yellow-700 border-yellow-300",
    Hard: "bg-red-100 text-red-700 border-red-300",
  };

  const cardBaseClasses =
    "w-full h-full rounded-2xl border shadow-lg p-6 flex flex-col justify-between transition-shadow";
  const cardStatusClasses =
    status === "completed"
      ? "bg-[#e5ffe5] border-green-300 opacity-100"
      : "bg-[#f1eeff] border-gray-200 hover:shadow-xl cursor-pointer";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`${cardBaseClasses} ${cardStatusClasses}`}
    >
      <div>
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-bold text-[#26215f]">{title}</h2>
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full border ${difficultyColors[difficulty]}`}
          >
            {difficulty}
          </span>
        </div>

        <p className="text-sm text-gray-600 mb-4">{description}</p>

        <div className="text-sm text-gray-700 mb-6">
          <p className="mb-1">
            <Layers className="w-4 h-4 inline mr-2 text-[#5b4baf]" />
            {questions} Questions
          </p>
          <p>
            <Code className="w-4 h-4 inline mr-2 text-[#5b4baf]" />
            {time} mins
          </p>
        </div>
      </div>

      {status === "completed" ? (
        <div className="flex items-center justify-center py-2 bg-green-50 text-green-700 rounded-xl font-semibold text-sm">
          <CheckCircle className="w-4 h-4 mr-2" />
          Completed
        </div>
      ) : (
        <button
          onClick={onStartAssessment}
          className="w-full px-5 py-3 bg-[#5b4baf] text-white rounded-xl font-semibold shadow-md hover:bg-[#422f9b] transition mt-4"
        >
          Start Assessment
        </button>
      )}
    </motion.div>
  );
};

// --- INITIAL ASSESSMENTS ---
const initialAssessments: Assessment[] = [
  {
    id: "mcq",
    title: "MCQ",
    description: "Multiple choice questions on core concepts",
    questions: 20,
    time: 40,
    difficulty: "Easy",
    status: "pending",
  },
  {
    id: "pseudocode",
    title: "Pseudocode",
    description: "Solve coding pseudocode problems",
    questions: 15,
    time: 35,
    difficulty: "Easy",
    status: "pending",
  },
  {
    id: "pattern",
    title: "Pattern Recognition",
    description: "Identify the correct patterns",
    questions: 20,
    time: 40,
    difficulty: "Medium",
    status: "pending",
  },
  {
    id: "dsa",
    title: "DSA",
    description: "Data Structures & Algorithms",
    questions: 25,
    time: 50,
    difficulty: "Hard",
    status: "pending",
  },
];

// --- MAIN PAGE ---
export default function TechnicalAssessmentPage() {
  const router = useRouter();
  const [assessments, setAssessments] = useState<Assessment[]>(initialAssessments);

  const allCompleted = assessments.every((a) => a.status === "completed");

  const handleStart = (id: string) => {
    setAssessments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: "completed" } : a))
    );
  };

  const strategicRoundTopics = [
    "Interview from the company side or from Agent of Skynetic",
    "Scenario-Based Problem Solving",
    "Decision-Making Evaluation",
    "Leadership & Ownership Assessment",
    "Behavioural Interview (STAR)",
    "Product & Business Thinking",
    "Future Vision Alignment",
    "Optional Mini Case Study",
  ];

  return (
    <div className="min-h-screen w-full font-sans bg-gradient-to-br from-[#f0ebff] via-[#faf8ff] to-white text-gray-900 flex justify-center py-10 px-4 sm:px-6">
      <div className="w-full max-w-[1600px]">
        {/* HEADER / BACK BUTTON */}
        <div className="mb-12">
          <button
            onClick={() => router.push("/skynetic/communication")}
            className="flex items-center text-base sm:text-sm font-medium text-gray-600 hover:text-[#5b4baf] transition duration-150 p-3 sm:p-4 rounded-md"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back
          </button>

          <div className="mt-6 sm:mt-10 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#26215f]">
              Technical Assessment
            </h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Evaluate your coding skills (50mins)
            </p>
          </div>
        </div>

        {/* ASSESSMENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {assessments.map((a) => (
            <AssessmentCard
              key={a.id}
              {...a}
              onStartAssessment={() => handleStart(a.id)}
            />
          ))}
        </div>

        {/* COMPLETION CARD */}
        {allCompleted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full mt-10 p-8 rounded-3xl bg-[#f1eeff] border border-gray-200 shadow-xl text-center"
          >
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#26215f]">Technical Round Complete!</h2>
            <p className="text-gray-600 mb-6">Congratulations! You've completed all technical assessments.</p>

            {/* Strategic Round Details */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-left mb-6">
              <h3 className="text-lg font-bold text-[#5b4baf] mb-3 border-b pb-2">Next: Strategic Round</h3>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                {strategicRoundTopics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => router.push("/schedule/strategic")}
              className="mt-4 w-full px-6 py-3 bg-[#5b4baf] text-white rounded-xl font-semibold shadow-md hover:bg-[#422f9b] transition"
            >
              Schedule Strategic Round
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
