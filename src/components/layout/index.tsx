"use client";

import { ReactNode, useState } from "react";
import { WebsiteLayoutFooter } from "./footer";
import { Logo } from "../ui/custom/logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Sidebar, SidebarCloseButton } from "./sidebar";
import { Icon } from "../ui/custom/icons";
import { useWindow } from "@/hooks/useWindow";
import { WebsiteHeader, WebsiteHeaderContent } from "./header";
import { routes } from "@/routes";

interface Props {
  children: ReactNode;
}

export const WebsiteLayout = ({ children }: Props) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const { scrolled } = useWindow({ scrollThreshold: 80 });

  return (
    <>
      <WebsiteHeader
        className="bg-transparent transition-colors"
        scrolledClassName="bg-background/[.85] backdrop-blur-sm shadow-md shadow-slate-200"
        scrollThreshold={80}
      >
        <WebsiteHeaderContent>
          <div className={cn("text-white", scrolled && "text-primary")}>
            <Logo />
          </div>
          <nav className="space-x-6 hidden xl:block">
            {routes.map(({ href, name, active }) => (
              <Link
                key={name}
                href={href}
                className={cn(
                  "font-semibold text-white transition-all hover:bg-white/15 px-3 py-1.5 rounded-3xl",
                  scrolled && "text-primary hover:bg-primary/[0.07]"
                )}
              >
                {name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setOpenSidebar(true)}
            className={cn(
              "transition-all hover:bg-white/15 rounded-full p-1 translate-x-2 text-white cursor-pointer xl:hidden",
              scrolled && "text-primary hover:bg-primary/[0.07]"
            )}
          >
            <Icon.Menu className="size-8" />
          </button>
        </WebsiteHeaderContent>
      </WebsiteHeader>

      <Sidebar open={openSidebar} onClose={() => setOpenSidebar(false)}>
        <SidebarCloseButton className="rounded-full p-1 hover:bg-primary/[0.07] transition-all -translate-y-2 translate-x-2 ml-auto">
          <Icon.X className="size-8 text-white" />
        </SidebarCloseButton>
        <nav className="flex flex-col items-center gap-4">
          {routes.map(({ href, name }) => (
            <Link
              key={name}
              href={href}
              className={cn(
                "font-semibold transition-all hover:bg-primary/5 px-4 py-1.5 rounded-3xl"
              )}
            >
              {name}
            </Link>
          ))}
        </nav>
      </Sidebar>

      <main className="flex-auto relative">{children}</main>

      <WebsiteLayoutFooter />
    </>
  );
};
