"use client";

import { useEffect, useState } from "react";
import { navLinks } from "./navLinks";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;

      setIsScrolled(current > 20);

      if (current < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(current < lastScroll);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed
        left-1/2
        top-4
        z-50
        w-[92%]
        max-w-6xl
        -translate-x-1/2
        transition-all
        duration-500
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-32 opacity-0"}
      `}
    >
      <nav
        className={`
          flex
          items-center
          justify-between
          rounded-full
          px-6
          py-3.5
          transition-all
          duration-500
          border
          backdrop-blur-xl
          shadow-lg
          ${
            isScrolled
              ? "bg-[#f7f2e8]/90 border-[#d8c8a8]/50 shadow-black/10"
              : "bg-[#f7f2e8]/72 border-[#e4d7bf]/45 shadow-black/5"
          }
        `}
      >
        <div
          className="
            font-[var(--font-cormorant)]
            text-2xl
            md:text-3xl
            font-semibold
            tracking-wide
            text-[#3b2f2a]
          "
        >
          Lupinos
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                relative
                font-[var(--font-cormorant)]
                text-xl
                tracking-wide
                text-[#3b2f2a]
                transition-colors
                duration-300
                hover:text-[#7a263a]
                after:absolute
                after:left-1/2
                after:bottom-[-6px]
                after:h-px
                after:w-0
                after:-translate-x-1/2
                after:bg-[#d8c8a8]
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}