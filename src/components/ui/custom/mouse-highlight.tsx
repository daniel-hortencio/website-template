"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";

export const MouseHighlight = ({
  children,
  className = "",
  highlightClassName = "",
}: {
  children: React.ReactNode;
  className?: string;
  highlightClassName?: string;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (containerRef.current) {
      const { left, top } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left; // Posição do mouse dentro do contêiner
      const y = e.clientY - top; // Posição do mouse dentro do contêiner
      setPosition({ x, y });
    }
  };

  const handleMouseEnter = () => {
    setIsMouseInside(true);
  };

  const handleMouseLeave = () => {
    setIsMouseInside(false);
  };

  useEffect(() => {
    const element = containerRef.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`} // O contêiner agora envolve os filhos
    >
      {children}

      <div
        className={cn(
          "absolute bg-indigo-100 size-64 -translate-y-1/2 -translate-x-1/2 rounded-full blur-3xl transition-opacity",
          isMouseInside ? "opacity-100" : "opacity-0",
          highlightClassName
        )}
        style={{
          left: position.x + "px", // Ajusta o posicionamento do ponto luminoso
          top: position.y + "px", // Ajusta o posicionamento do ponto luminoso
          pointerEvents: "none", // Impede que o ponto luminoso interfira no clique
        }}
      />
    </div>
  );
};
