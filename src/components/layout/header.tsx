"use client";

import { useWindow } from "@/hooks/useWindow";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  className?: string;
  scrolledClassName?: string;
  scrollThreshold?: number;
  children: ReactNode;
};

export const WebsiteHeaderContent = ({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <div
    className={cn(
      "container flex h-full items-center justify-between",
      className
    )}
  >
    {children}
  </div>
);

export const WebsiteHeader = ({
  className,
  scrollThreshold,
  scrolledClassName,
  children,
}: Props) => {
  const { scrolled } = useWindow({ scrollThreshold });
  return (
    <header
      className={cn(
        "w-screen h-12 z-40 fixed top-0 bg-white left-0 container-left container-right",
        className,
        scrolled && scrolledClassName
      )}
    >
      {children}
    </header>
  );
};
