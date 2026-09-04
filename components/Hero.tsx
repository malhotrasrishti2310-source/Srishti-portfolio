import ProfileImage from "@/components/ProfileImage";

export default function Hero() {
  return (
    <section className="flex min-h-[88vh] items-center justify-center px-6 py-16 md:py-24 transition-colors duration-300">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">

          {/* Left Column: Shifted to side with name, title, bio, and actions */}
          <div className="text-left lg:col-span-7">
            <p className="mb-3 font-sans text-sm md:text-base font-medium uppercase tracking-[0.25em] text-muted">
              Hi, I'm
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-burgundy dark:text-[#f7cac9] leading-[1.05]">
              Srishti Malhotra
            </h1>

            <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-serif italic font-normal text-burgundy-light dark:text-pink-light">
              Computer Science Student & Developer
            </h2>

            <p className="mt-6 max-w-xl font-sans text-base sm:text-lg leading-relaxed text-muted">
              I love building things with code, exploring new technologies,
              and turning ideas into real projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 font-sans text-sm font-medium">
              <a
                href="#projects"
                className="rounded-full border-2 border-[#5a172d] bg-[#5a172d] px-7 py-3.5 font-medium text-[#fff8f0] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#421021] hover:shadow-lg dark:border-[#f3b1b0] dark:bg-[#5a172d] dark:text-[#fff8f0] dark:hover:bg-[#7a3047]"
              >
                View My Projects
              </a>

          <a
  href="#contact"
  className="rounded-full border-2 border-[#5a172d] bg-transparent px-7 py-3.5 font-medium !text-[#5a172d] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#5a172d] hover:!text-[#fff8f0] hover:shadow-lg dark:border-[#f3b1b0] dark:bg-transparent dark:!text-[#f3b1b0] dark:hover:bg-[#5a172d] dark:hover:!text-[#fff8f0]"
>
  Contact Me
</a>
            </div>
          </div>

          {/* Right Column: Space created beside the name for the profile image */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <ProfileImage />
          </div>

        </div>
      </div>
    </section>
  );
}