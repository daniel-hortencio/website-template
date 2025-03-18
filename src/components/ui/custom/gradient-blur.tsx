import { cn } from "@/lib/utils";

export const GradientBlur = ({ className = "" }) => (
  <div
    className={cn("bg-indigo-900/80 blur-3xl size-96 rounded-full", className)}
  />
);
