"use client";

import { useState } from "react";

export default function ProfileImage() {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="group relative mx-auto w-64 sm:w-72 md:w-80 lg:w-92">
      {/* Decorative ambient glow */}
      <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-pink/30 to-burgundy/20 opacity-60 blur-xl transition-all duration-500 group-hover:opacity-90 dark:from-pink-pale/20 dark:to-burgundy/40" />

      {/* Main portrait frame */}
      <div className="relative aspect-4/5 w-full overflow-hidden rounded-[2rem] border-2 border-burgundy/20 bg-white/70 p-2.5 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-burgundy/40 dark:border-white/15 dark:bg-[#181016]/80 dark:hover:border-pink-light/30">
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-[#fff8f0] to-[#fdf0e4] dark:from-[#221720] dark:to-[#140c12]">
          {!hasError ? (
            <img
              src="images/profile.jpg"
              alt="Srishti Malhotra"
              onError={() => setHasError(true)}
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
              {/* Elegant monogram */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-burgundy/20 bg-white/80 font-serif text-3xl font-normal text-burgundy shadow-xs dark:border-white/15 dark:bg-white/10 dark:text-[#f7cac9]">
                SM
              </div>

              <p className="mt-4 font-serif text-xl font-normal text-burgundy dark:text-[#f7cac9]">
                Srishti Malhotra
              </p>

              <p className="mt-1 font-sans text-xs text-muted">
                Portrait Photo Area
              </p>

              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-burgundy/15 bg-white/80 px-3 py-1.5 text-[11px] font-sans font-medium tracking-wide text-muted shadow-xs dark:border-white/10 dark:bg-white/5">
                <span>Add your photo to</span>
                <code className="rounded bg-burgundy/5 px-1 py-0.5 text-burgundy dark:bg-white/10 dark:text-pink-light">
                  public/profile.jpg
                </code>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
