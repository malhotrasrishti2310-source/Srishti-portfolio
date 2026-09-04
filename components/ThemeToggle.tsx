"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@/components/Icons";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasDark = document.documentElement.classList.contains("dark");
    setIsDark(hasDark);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return (
      <div className={`h-10 w-10 rounded-full border border-burgundy/20 dark:border-white/20 ${className}`} />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative flex h-10 w-10 items-center justify-center rounded-full border border-burgundy/25 bg-white/70 text-burgundy shadow-xs backdrop-blur-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-burgundy-deep hover:bg-burgundy-deep hover:text-cream dark:border-white/20 dark:bg-white/10 dark:text-cream dark:hover:border-pink-light dark:hover:bg-burgundy dark:hover:text-white ${className}`}
    >
      {isDark ? (
        <SunIcon className="h-5 w-5 transition-transform duration-300 rotate-0 hover:rotate-90" />
      ) : (
        <MoonIcon className="h-5 w-5 transition-transform duration-300 -rotate-12 hover:rotate-0" />
      )}
    </button>
  );
}
