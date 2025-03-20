import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  title?: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
  alignCenter?: boolean;
}

export const SectionHeader = ({
  title,
  description,
  alignCenter,
  className,
}: Omit<Props, "children">) => (
  <header
    className={cn(
      `space-y-2 flex flex-col relative z-10`,
      alignCenter && "items-center text-center",
      className
    )}
  >
    {title}

    {description && <p className="max-w-3xl">{description}</p>}
  </header>
);

export const Section = ({
  children,
  title,
  className,
  description,
  alignCenter,
}: Props) => (
  <section className={cn("flex flex-col gap-8 xl:gap-10", className)}>
    {title && (
      <SectionHeader
        {...{ title, description, alignCenter }}
        className="container"
      />
    )}

    {children}
  </section>
);
