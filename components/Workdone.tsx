import ScrollReveal from "@/components/ScrollReveal";

const experience = [
  {
    title: "Rural Summer Internship",
    organization: "Gram Panchayat",
    period: "May 2026 – July 2026",
    description:
      "Worked on studying pollution and waste-management issues in a rural community, including air pollution, water pollution, garbage disposal, and practical technical solutions.",
  },
  {
    title: "GirlScript Summer of Code",
    organization: "Open Source Development",
    period: "2026",
    description:
      "Explored open-source development and worked on software projects while improving programming, Git, GitHub, and collaborative development skills.",
  },
];

const education = [
  {
    degree: "B.Tech — Computer Science Engineering",
    institution: "D.Y. Patil International University",
    period: "2025 – Present",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen px-8 py-24 transition-colors duration-300"
    >
      <div className="mx-auto max-w-5xl">
        {/* Experience Header */}
        <ScrollReveal>
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            Experience
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight">
            What I've been working on
          </h2>
        </ScrollReveal>

        <div className="mt-12 space-y-8">
          {experience.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 100}>
              <article className="rounded-2xl border border-burgundy/15 bg-white/70 p-6 shadow-xs backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-burgundy/40 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-pink-light/30">
                <div className="flex flex-col justify-between gap-2 md:flex-row">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-1 font-sans text-sm md:text-base font-medium text-muted">
                      {item.organization}
                    </p>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-muted">
                    {item.period}
                  </p>
                </div>

                <p className="mt-5 font-sans text-sm md:text-base leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Education */}
        <div className="mt-24">
          <ScrollReveal>
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              Education
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight">
              My academic journey
            </h2>
          </ScrollReveal>

          <div className="mt-12 space-y-6">
            {education.map((item, index) => (
              <ScrollReveal key={item.degree} delay={index * 100}>
                <article className="rounded-2xl border border-burgundy/15 bg-white/70 p-6 shadow-xs backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-burgundy/40 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-pink-light/30">
                  <h3 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight">
                    {item.degree}
                  </h3>

                  <p className="mt-2 font-sans text-sm md:text-base text-muted font-medium">
                    {item.institution}
                  </p>

                  <p className="mt-2 font-sans text-xs sm:text-sm text-muted">
                    {item.period}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}