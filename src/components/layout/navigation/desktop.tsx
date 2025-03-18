import { cn } from "@/lib/utils";
import { routes } from "@/routes";
import Link from "next/link";

interface Props {
  className?: string;
}

export const NavigationDesktop = ({ className }: Props) => (
  <nav className={cn("flex items-center gap-8", className)}>
    {routes.map((route) => (
      <Link
        key={route.name}
        href={route.href}
        className="font-semibold hover:text-indigo-700 transition-all"
      >
        {route.name}
      </Link>
    ))}
  </nav>
);
