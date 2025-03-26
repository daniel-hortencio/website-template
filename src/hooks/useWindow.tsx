"use client";

import { isClientSide } from "@/utils";
import { useEffect, useState } from "react";

interface Props {
  scrollThreshold?: number;
}

export const useWindow = (options?: Props) => {
  const scrollThreshold = options?.scrollThreshold ?? 80;

  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState<number>(
    isClientSide ? window?.innerWidth : 0
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isClientSide) return;

    const handleResize = () => setWidth(window?.innerWidth);
    const handleScroll = () => setScrolled(window?.scrollY > scrollThreshold);

    window?.addEventListener("resize", handleResize);
    window?.addEventListener("scroll", handleScroll);

    setLoading(false);

    return () => {
      window?.removeEventListener("resize", handleResize);
      window?.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  return {
    loading,
    width,
    scrolled,
  };
};
