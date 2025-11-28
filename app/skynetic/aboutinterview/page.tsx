"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  ChevronLeft,
  ChevronsRight,
  Clock,
  ThumbsUp,
} from "lucide-react";
import { useRouter } from "next/navigation";

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

/* ---------------- CONSTANTS ---------------- */
const ultraGlass =
  "bg-white/50 backdrop-blur-3xl border border-white/40 shadow-lg rounded-3xl transition-all";

const primaryButton =
  "px-8 py-3 rounded-3xl bg-gradient-to-r from-[#6a4cff] to-[#8360ff] text-white font-semibold shadow-xl transition-all duration-300 hover:scale-[1.05] hover:shadow-purple-300/50";

export default function LiveInterviewPage() {
  const router = useRouter();

  const [isInterviewStarted, setIsInterviewStarted] = useState(false);
  const [time, setTime] = useState(0);
  const [micEnabled, setMicEnabled] = useState(false);
  const [camEnabled, setCamEnabled] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentQuestion = "Tell me about yourself and your background.";
  const questionProgress = 1;
  const totalQuestions = 5;

  const interviewTips = [
    "Speak clearly and maintain eye contact.",
    "Take your time to think before answering.",
    "Provide specific examples.",
    "Stay calm and confident.",
  ];

  /* ---------------- START INTERVIEW ---------------- */
  const startInterview = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.muted = true;
        videoRef.current.playsInline = true;

        await videoRef.current.play().catch((err) => console.error(err));
      }

      setIsInterviewStarted(true);
      setMicEnabled(true);
      setCamEnabled(true);

      timerRef.current = setInterval(() => setTime((t) => t + 1), 1000);
    } catch (err) {
      console.error(err);
      alert("Camera & microphone permissions are required!");
    }
  };

  /* ---------------- STOP INTERVIEW ---------------- */
  const stopInterview = () => {
    setIsInterviewStarted(false);
    setMicEnabled(false);
    setCamEnabled(false);

    if (timerRef.current) clearInterval(timerRef.current);
    setTime(0);

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    router.push("/skynetic/final");
  };

  /* ---------------- TOGGLE MIC ---------------- */
  const toggleMic = () => {
    if (!streamRef.current) return;
    const audioTracks = streamRef.current.getAudioTracks();
    if (!audioTracks.length) return;

    const enabled = !audioTracks[0].enabled;
    audioTracks.forEach((track) => (track.enabled = enabled));
    setMicEnabled(enabled);
  };

  /* ---------------- TOGGLE CAMERA ---------------- */
  const toggleCam = () => {
    if (!streamRef.current) return;
    const videoTracks = streamRef.current.getVideoTracks();
    if (!videoTracks.length) return;

    const enabled = !videoTracks[0].enabled;
    videoTracks.forEach((track) => (track.enabled = enabled));
    setCamEnabled(enabled);
  };

  /* ---------------- CLEANUP ---------------- */
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, []);

  /* ---------------- FORMAT TIME ---------------- */
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  /* ---------------- UI ---------------- */
  return (
    <div
      className={`
        ${inter.variable} ${urbanist.variable} ${grotesk.variable}
        min-h-screen w-full font-[var(--font-urbanist)]
        bg-gradient-to-br from-[#f7f6ff] via-[#ffffff] to-[#fefefe]
        text-gray-900 p-4 sm:p-8 lg:p-12 relative
      `}
    >
      {/* HEADER */}
      <header className="flex justify-between items-center mb-10">
        <button
          onClick={() => router.push("/skynetic/home")}
          className="flex items-center text-gray-700/80 hover:text-gray-900 transition-all rounded-full px-3 py-2 hover:bg-white/40 font-semibold"
        >
          <ChevronLeft className="w-5 h-5 mr-2" /> Live Interview
        </button>
        <div className={`${ultraGlass} px-4 py-2 flex items-center gap-2 font-bold`}>
          <Clock className="w-4 h-4 text-purple-600" /> {formatTime(time)}
        </div>
      </header>

      {/* BODY */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        {/* VIDEO SECTION */}
        <div className="xl:col-span-2 flex flex-col items-center">
          <div
            className={`relative ${ultraGlass} w-full aspect-video rounded-3xl mb-8 border-2 border-white/40 overflow-hidden bg-black flex items-center justify-center`}
          >
            {/* 🔥 ALWAYS RENDER VIDEO TAG */}
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: camEnabled && isInterviewStarted ? "block" : "none",
              }}
            />

            {!isInterviewStarted && (
              <span className="absolute text-gray-500 text-xl sm:text-2xl">
                Click "Start Interview" to begin
              </span>
            )}

            {isInterviewStarted && !camEnabled && (
              <span className="absolute text-gray-500 text-xl sm:text-2xl">
                Camera is off
              </span>
            )}
          </div>

          {/* CONTROLS */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {/* MIC BUTTON */}
            <button
              disabled={!isInterviewStarted}
              onClick={toggleMic}
              className={`w-14 h-14 p-3 rounded-2xl ${ultraGlass} ${
                micEnabled ? "bg-[#6a4cff]/50 text-[#5b4cff]" : "bg-white/30 text-gray-900"
              }`}
            >
              {micEnabled ? <Mic /> : <MicOff className="text-red-500" />}
            </button>

            {/* CAMERA BUTTON */}
            <button
              disabled={!isInterviewStarted}
              onClick={toggleCam}
              className={`w-14 h-14 p-3 rounded-2xl ${ultraGlass} ${
                camEnabled ? "bg-[#6a4cff]/50 text-[#5b4cff]" : "bg-white/30 text-gray-900"
              }`}
            >
              {camEnabled ? <Video /> : <VideoOff className="text-red-500" />}
            </button>

            {/* START / STOP BUTTON */}
            {!isInterviewStarted ? (
              <button onClick={startInterview} className={primaryButton}>
                <ChevronsRight className="w-5 h-5 mr-2 inline-block" />
                Start Interview
              </button>
            ) : (
              <button
                onClick={stopInterview}
                className="px-8 py-3 rounded-3xl bg-red-400 text-white shadow-xl hover:bg-red-500 transition-all"
              >
                Stop Interview
              </button>
            )}
          </div>
        </div>

        {/* QUESTIONS + TIPS */}
        <div className="space-y-10">
          <div className={`${ultraGlass} p-6 sm:p-8`}>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              Current Question
              <span className="ml-auto text-gray-500 text-lg">
                {questionProgress}/{totalQuestions}
              </span>
            </h3>
            <p className="text-2xl sm:text-3xl font-extrabold text-purple-600 leading-snug font-[var(--font-grotesk)]">
              {currentQuestion}
            </p>
          </div>

          <div className={`${ultraGlass} p-6 sm:p-8`}>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <ThumbsUp className="w-5 h-5 mr-2 text-purple-600" />
              Interview Tips
            </h3>
            <ul className="space-y-3 text-gray-700">
              {interviewTips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
