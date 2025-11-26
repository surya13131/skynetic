"use client";

import { FcGoogle } from "react-icons/fc";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRouter } from "next/navigation";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Skynetic() {
  const router = useRouter();

  const handleGoogleClick = () => {
    router.push("/skynetic/home"); // 👉 Redirect to Home page
  };

  return (
    <main
      className={`
        ${jakarta.className}
        min-h-screen
        bg-[#000000]     /* Pure black */
        flex
        items-center
        justify-center
        p-4 md:p-10
      `}
    >
      <div className="flex flex-col items-center text-center w-full max-w-[520px]">

        {/* TITLE */}
        <h1
          className="
            text-4xl md:text-6xl
            font-extrabold
            text-white
            tracking-[0.28em]
            mb-6
            drop-shadow-[0_4px_15px_rgba(255,255,255,0.25)]
          "
        >
          SKYNETIC
        </h1>

        {/* LOGO */}
        <img
          src="/images/skynetic.jpg"
          alt="Skynetic Logo"
          className="
            w-[150px] md:w-[210px]
            h-auto
            opacity-100
            mb-8
            transition-all
          "
        />

        {/* SUBTITLE */}
        <p
          className="
            text-gray-300
            text-base md:text-lg
            tracking-wide
            mb-12
            leading-relaxed
          "
        >
          Evolve Beyond Boundaries
        </p>

        {/* GOOGLE BUTTON */}
        <button
          onClick={handleGoogleClick}
          className="
            flex items-center gap-3
            bg-white text-black
            py-3 md:py-4
            px-6 md:px-10
            rounded-2xl
            font-semibold
            text-lg md:text-xl
            shadow-[0_0_25px_rgba(255,255,255,0.25)]
            hover:shadow-[0_0_45px_rgba(255,255,255,0.45)]
            transition-all duration-300
            active:scale-95
            backdrop-blur-xl
            border border-white/10
          "
        >
          <FcGoogle size={30} />
          Sign up with Google
        </button>

      </div>
    </main>
  );
}
