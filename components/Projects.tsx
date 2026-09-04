import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    title: "Rural Internship — Pollution & Waste Management",
    description:
      "A field-based project studying air pollution, water pollution, garbage disposal, and practical waste-management solutions in a rural community.",
    technologies: ["HTML", "Research", "Data Analysis"],
    github: "#",
  },
  {
    title: "Developer Portfolio",
    description:
      "A personal portfolio website built to showcase my projects, skills, experience, and journey as a Computer Science student.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/malhotrasrishti2310-source",
  },
  {
    title: "Sample Portfolio Website",
    description:
      "A simple yet elegant portfolio website to display my work and skills.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://malhotrasrishti2310-source.github.io/portfolio_srishti/",
  },
  {
    title: "Upcoming Projects",
    description:
      "I am currently working on several exciting projects that I will be sharing soon. Stay tuned for updates!",
    technologies: ["Coming Soon"],
    github: "https://github.com/malhotrasrishti2310-source",
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-8 py-24 transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            Projects
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight">
            Things I've built
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 100}>
              <article className="group flex h-full flex-col justify-between rounded-2xl border border-burgundy/15 bg-white/70 p-6 shadow-xs backdrop-blur-xs transition-all duration-300 hover:-translate-y-2 hover:border-burgundy/40 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-pink-light/40 dark:hover:bg-white/8">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-4 font-sans text-sm md:text-base leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6">
                  <div className="flex flex-wrap gap-2 font-sans">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-burgundy/15 px-3 py-1 text-xs font-medium tracking-wide dark:border-white/10 dark:text-[#f5ebe6]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block font-sans text-sm font-medium underline decoration-pink underline-offset-4 transition-colors hover:text-burgundy-deep dark:hover:text-pink-light"
                  >
                    View on GitHub →
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}