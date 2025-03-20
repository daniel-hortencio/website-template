"use client";

import { useEffect, useState } from "react";

interface Props {
  scrollTop?: number;
}

export const useWindow = (options?: Props) => {
  const scrollTop = options?.scrollTop ?? 80;

  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWidth(window.innerWidth);
      const handleScroll = () => setScrolled(window.scrollY > scrollTop);

      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);

      setLoading(false);

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scrollTop]); // Removi `window` da dependência, pois não é necessário

  return {
    loading,
    width,
    scrolled,
  };
};
