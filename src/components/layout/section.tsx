import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  title: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ children, title, className, description }: Props) => (
  <section className={cn("flex flex-col gap-10 xl:gap-12", className)}>
    <header className="container space-y-2">
      {title}

      {description && <p className="max-w-3xl">{description}</p>}
    </header>

    <div>{children}</div>
  </section>
);
