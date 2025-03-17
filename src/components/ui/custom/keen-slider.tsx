"use client";

import { useKeenSlider, KeenSliderOptions } from "keen-slider/react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

import "keen-slider/keen-slider.min.css";

const animation = { duration: 5000, easing: (t: number) => t };

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

  return (
    <div ref={sliderRef} className={cn("keen-slider", className)}>
      {children}
    </div>
  );
};

export const KeenSlider = {
  Root: Slider,
  Slide,
};
