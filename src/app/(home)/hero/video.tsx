"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const HomeHeroVideo = () => {
  const [mounted, setMounted] = useState(false);

  const video = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!video) return;

    video?.current?.play();
    setMounted(true);
  }, [video]);

  return (
    <video
      ref={video}
      className={cn(
        "absolute h-full w-full object-cover object-[60%] md:object-right transform scale-x-[-1] transition-opacity duration-1000",
        mounted ? "opacity-100" : "opacity-0"
      )}
      muted
      loop
    >
      <source
        src="/videos/hero-video-360.mp4"
        type="video/mp4"
        media="(max-width: 480px)"
      />
      <source
        src="/videos/hero-video-480.mp4"
        type="video/mp4"
        media="(max-width: 768px)"
      />
      <source
        src="/videos/hero-video-720.mp4"
        type="video/mp4"
        media="(max-width: 1024px)"
      />
      <source src="/videos/hero-video-1080.mp4" type="video/mp4" />
    </video>
  );
};
