import ScrollReveal from "@/components/ScrollReveal";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-8 py-24 transition-colors duration-300"
    >
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            About Me
          </p>

          <TextReveal>
  <h2 className="text-4xl font-bold md:text-5xl">
    A little bit about me
  </h2>
</TextReveal>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <Reveal delay={0.2}>
  <p className="mt-8 text-lg leading-8">
    I'm Srishti Malhotra, a Computer Science student who enjoys
    building projects, learning new technologies, and exploring
    different areas of software development.
  </p>
</Reveal>
          <p className="mt-5 font-sans text-base sm:text-lg leading-relaxed text-muted">
            I'm currently developing my skills in programming, web
            development, and software engineering while working on
            projects that allow me to learn by actually building things.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}