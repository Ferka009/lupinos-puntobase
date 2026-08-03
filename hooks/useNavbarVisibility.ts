"use client";

import { useEffect, useState } from "react";

export default function useNavbarVisibility() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setIsScrolled(currentScroll > 20);
      setIsVisible(currentScroll < 100 || currentScroll < lastScroll);

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isScrolled, isVisible };
}
