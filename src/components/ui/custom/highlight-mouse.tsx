"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { cn } from "@/lib/utils";

export const HighlightMouse = ({ className = "" }) => {
  const { mousePosition } = useMousePosition();

  return (
    <div
      className={cn(
        "fixed size-40 bg-sky-500/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2",
        className
      )}
      style={{
        left: mousePosition.x + "px",
        top: mousePosition.y + "px",
      }}
    />
  );
};
