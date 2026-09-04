"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { MenuIcon, XIcon } from "@/components/Icons";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-burgundy/10 bg-[#fff8f0]/85 backdrop-blur-md transition-colors duration-300 dark:border-white/10 dark:bg-[#0e0a0d]/85">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Brand */}
        <a href="#" className="group flex flex-col">
          <span className="font-serif text-2xl font-normal tracking-tight text-burgundy transition-colors duration-300 dark:text-[#f7cac9] md:text-3xl">
            ✦ Srishti
          </span>
          <span className="font-sans text-[10px] font-semibold tracking-[0.25em] text-muted uppercase">
            DEVELOPER
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex gap-8 font-sans text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text transition-colors duration-200 hover:text-burgundy dark:text-[#f5ebe6] dark:hover:text-[#f7cac9]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <ThemeToggle />
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-burgundy/20 bg-white/70 text-burgundy shadow-xs backdrop-blur-xs transition-colors hover:bg-burgundy hover:text-cream dark:border-white/20 dark:bg-white/10 dark:text-cream dark:hover:bg-burgundy"
          >
            {isOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer / Dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[73px] z-40 flex flex-col bg-[#fff8f0]/95 px-8 py-10 backdrop-blur-xl transition-all duration-300 dark:bg-[#0e0a0d]/95 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex flex-col gap-6 font-serif text-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-burgundy/10 pb-4 text-burgundy transition-colors hover:pl-2 hover:text-burgundy-deep dark:border-white/10 dark:text-[#f7cac9] dark:hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t border-burgundy/10 dark:border-white/10">
            <p className="font-sans text-xs uppercase tracking-widest text-muted">
              Srishti Malhotra — Portfolio
            </p>
          </div>
        </div>
      )}
    </header>
  );
}