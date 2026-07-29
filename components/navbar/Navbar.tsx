"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "./navLinks";
import Logo from "./Logo";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
        w-[94%]
        max-w-6xl
        -translate-x-1/2
        transition-all
        duration-500
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-32 opacity-0"
        }
      `}
    >
      <nav
        className={`
          rounded-3xl
          border
          backdrop-blur-xl
          transition-all
          duration-500
          ${
            isScrolled
              ? "bg-[#f7f2e8]/90 border-[#d8c8a8]/50 shadow-lg shadow-black/10"
              : "bg-[#f7f2e8]/72 border-[#e4d7bf]/45 shadow-lg shadow-black/5"
          }
        `}
      >
       {/* Barra principal */}

<div className="flex items-center justify-between px-5 py-4">

  <div>
    <Logo />
  </div>

  {/* Desktop */}

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
        "
      >
        {link.label}
      </a>
    ))}
  </div>

  {/* Mobile */}

  <button
    onClick={() => setIsOpen(!isOpen)}
    className="
      md:hidden
      rounded-full
      p-2
      text-[#3b2f2a]
      transition
      hover:bg-[#efe5d3]
    "
    aria-label="Abrir menú"
  >
    {isOpen ? <X size={24} /> : <Menu size={24} />}
  </button>

</div>

        {/* Menú móvil */}

        <div
          className={`
            overflow-hidden
            transition-all
            duration-500
            ${
              isOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="border-t border-[#d8c8a8]/40 px-6 py-5">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    text-center
                    font-[var(--font-cormorant)]
                    text-2xl
                    text-[#3b2f2a]
                    transition-colors
                    hover:text-[#7a263a]
                  "
                >
                  {link.label}
                </a>
              ))}

              <a
                href="https://wa.me/5492323530407"
                target="_blank"
                className="
                  mt-2
                  rounded-full
                  bg-[#3f5035]
                  px-6
                  py-3
                  text-center
                  font-medium
                  text-white
                  transition
                  hover:bg-[#34412c]
                "
              >
                🍝 Hacer pedido
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}