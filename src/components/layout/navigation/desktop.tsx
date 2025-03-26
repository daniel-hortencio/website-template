"use client";

import { useWindow } from "react-valley";
import { cn } from "@/lib/utils";
import { routes } from "@/routes";
import Link from "next/link";

interface Props {
  className?: string;
}

export const NavigationDesktop = ({ className }: Props) => {
  const { scrolled } = useWindow({});

  return (
    <nav className={cn("flex items-center gap-8", className)}>
      {routes.map((route) => (
        <Link
          key={route.name}
          href={route.href}
          className={cn(
            "font-semibold  transition-all",
            scrolled ? "hover:text-indigo-700" : "hover:text-yellow-200"
          )}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  );
};
