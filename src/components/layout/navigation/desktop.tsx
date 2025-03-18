import { cn } from "@/lib/utils";
import { routes } from "@/routes";
import Link from "next/link";

interface Props {
  className?: string;
}

export const NavigationDesktop = ({ className }: Props) => (
  <nav className={cn("flex items-center gap-5", className)}>
    {routes.map((route) => (
      <Link key={route.name} href={route.href} className="font-medium">
        {route.name}
      </Link>
    ))}
  </nav>
);
