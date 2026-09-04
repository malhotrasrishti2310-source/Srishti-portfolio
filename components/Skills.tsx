"use client";

import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const skillsRow1 = [
  "C",
  "C++",
  "Python",
  "Java",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "React",
  "HTML5",
  "CSS3",
];

const skillsRow2 = [
  "Git",
  "GitHub",
  "SQL",
  "PostgreSQL",
  "Tailwind CSS",
  "REST APIs",
  "Data Structures",
  "Algorithms",
  "Linux",
  "Responsive Design",
];

export default function Skills() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24 transition-colors duration-300 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                Skills
              </p>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight">
                Technologies I work with
              </h2>
            </div>

            {/* Manual scroll buttons for mobile / manual interaction */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                aria-label="Scroll technologies left"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-burgundy/30 bg-white text-burgundy shadow-xs transition-all hover:bg-burgundy hover:text-cream dark:border-white/20 dark:bg-white/10 dark:text-cream dark:hover:bg-burgundy"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                aria-label="Scroll technologies right"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-burgundy/30 bg-white text-burgundy shadow-xs transition-all hover:bg-burgundy hover:text-cream dark:border-white/20 dark:bg-white/10 dark:text-cream dark:hover:bg-burgundy"
              >
                →
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Scrollable Marquee Showcase */}
        <div className="relative mt-12">
          {/* Edge gradient fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--cream-dark)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--cream-dark)] to-transparent" />

          {/* Row 1 - Smooth Auto-Scrolling Left */}
          <div className="overflow-hidden py-3">
            <div className="animate-marquee-left flex gap-4">
              {[...skillsRow1, ...skillsRow1].map((skill, idx) => (
                <div
                  key={`${skill}-r1-${idx}`}
                  className="flex-shrink-0 rounded-2xl border-2 border-burgundy/20 bg-white px-7 py-4 shadow-sm backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-burgundy hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-pink-light/40 dark:hover:bg-white/10"
                >
                  <p className="font-sans text-base font-medium tracking-wide text-text dark:text-[#f5ebe6]">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Smooth Auto-Scrolling Right */}
          <div className="mt-3 overflow-hidden py-3">
            <div className="animate-marquee-right flex gap-4">
              {[...skillsRow2, ...skillsRow2].map((skill, idx) => (
                <div
                  key={`${skill}-r2-${idx}`}
                  className="flex-shrink-0 rounded-2xl border-2 border-burgundy/20 bg-white px-7 py-4 shadow-sm backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-burgundy hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-pink-light/40 dark:hover:bg-white/10"
                >
                  <p className="font-sans text-base font-medium tracking-wide text-text dark:text-[#f5ebe6]">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}