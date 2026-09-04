import ScrollReveal from "@/components/ScrollReveal";
import { MailIcon, GithubIcon, LinkedinIcon } from "@/components/Icons";

const contactLinks = [
  {
    name: "Email Me (Gmail)",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=malhotrasrishti2310@gmail.com",
    icon: MailIcon,
    isExternal: true,
  },
  {
    name: "GitHub",
    href: "https://github.com/malhotrasrishti2310-source",
    icon: GithubIcon,
    isExternal: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/srishti-malhotra-1a45993a4/",
    icon: LinkedinIcon,
    isExternal: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-8 py-24 transition-colors duration-300"
    >
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            Contact
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight">
            Let's get in touch
          </h2>

          <p className="mt-6 max-w-2xl font-sans text-base sm:text-lg leading-relaxed text-muted">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me through any of the platforms below, and I'll get back to you as soon as possible.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  {...(item.isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label={item.name}
                  title={item.name}
                  className="group relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-burgundy bg-[#fff8f0] text-burgundy shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-burgundy-deep hover:bg-burgundy-deep hover:text-[#fff8f0] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-burgundy/40 dark:border-white/20 dark:bg-white/10 dark:text-cream dark:hover:border-pink-light dark:hover:bg-burgundy dark:hover:text-white"
                >
                  <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                  <span className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 rounded-md bg-burgundy-deep px-2.5 py-1 text-xs font-sans font-medium text-cream opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap z-10 dark:bg-pink-pale dark:text-burgundy-deep">
                    {item.name}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2 font-sans text-sm text-pink">
            <span>Direct Email:</span>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=malhotrasrishti2310@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-burgundy underline decoration-pink underline-offset-4 transition-colors hover:text-pink dark:text-[#f7cac9] dark:hover:text-white"
            >
              malhotrasrishti2310@gmail.com
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}