"use client";

import { useEffect, useState } from "react";

interface Props {
  scrollTop?: number;
}

export const useWindow = ({ scrollTop = 80 }: Props) => {
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      const handleScroll = () => {
        setScrolled(window.scrollY > scrollTop);
      };

      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);

      setLoading(false);

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return {
    loading,
    width,
    scrolled,
  };
};
