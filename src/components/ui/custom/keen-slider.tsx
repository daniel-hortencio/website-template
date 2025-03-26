"use client";

import { useKeenSlider, KeenSliderOptions } from "keen-slider/react";
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";

import "keen-slider/keen-slider.min.css";

const animation = { duration: 7000, easing: (t: number) => t };

interface Props {
  children: ReactNode;
  className?: string;
}

const Slide = ({ children, className }: Props) => (
  <div className={cn("keen-slider__slide", className)}>{children}</div>
);

interface SliderProps extends Props, KeenSliderOptions {
  enableAnimation?: boolean;
}

const Slider = ({
  className,
  children,
  enableAnimation,
  ...options
}: SliderProps) => {
  const [mounted, setMounted] = useState(false);
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    ...(enableAnimation && {
      created(s) {
        s.moveToIdx(5, true, animation);
      },

      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      drag: false,
      loop: true,
      renderMode: "performance",
    }),

    ...options,
  });

  useEffect(() => setMounted(true), []);

  return (
    <div
      ref={sliderRef}
      className={cn(
        "keen-slider transition-opacity",
        mounted ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export const KeenSlider = {
  Root: Slider,
  Slide,
};
