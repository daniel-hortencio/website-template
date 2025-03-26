"use client";

import { ReactNode, useState } from "react";
import { useWindow, WebsiteHeader, WebsiteHeaderContent } from "react-valley";
import { WebsiteLayoutFooter } from "./footer";
import { Logo } from "../ui/custom/logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
/* import { Sidebar, SidebarCloseButton, SidebarContent } from "./sidebar"; */
import { Icon } from "../ui/custom/icons";

interface Props {
  children: ReactNode;
}

export const WebsiteLayout = ({ children }: Props) => {
  /*   const [openSidebar, setOpenSidebar] = useState(false); */

  /*   const { scrolled } = useWindow({ scrollThreshold: 80 }); */

  return (
    <>
      <WebsiteHeader
        className="bg-transparent border-b border-transparent transition-colors "
        scrolledClassName="bg-background/[.85] backdrop-blur-sm shadow-md border-b border-white"
        scrollThreshold={80}
      >
        <WebsiteHeaderContent>
          <h1>AQUI</h1>
          {/*  <div className={cn("text-white", scrolled && "text-primary")}>
            <Logo />
          </div>
          <nav className="space-x-8 hidden xl:block">
            <Link
              href="/"
              className={cn(
                "font-semibold text-white hover:text-yellow-500 transition-all",
                scrolled && "hover:text-indigo-800"
              )}
            >
              Home
            </Link>
            <Link
              href="/"
              className={cn(
                "font-semibold text-white hover:text-yellow-500 transition-all",
                scrolled && "hover:text-indigo-800"
              )}
            >
              Contact
            </Link>
          </nav> */}

          {/*    <button
            onClick={() => setOpenSidebar(true)}
            className={cn(
              "transition-all hover:bg-white/10 rounded-full p-1 translate-x-2 text-white cursor-pointer",
              scrolled && "text-primary hover:bg-primary/5"
            )}
          >
            <Icon.Menu className="size-8" />
          </button> */}
        </WebsiteHeaderContent>
      </WebsiteHeader>

      {/*   <Sidebar open={openSidebar} onClose={() => setOpenSidebar(false)}>
        <SidebarContent>
          <SidebarCloseButton className="rounded-full p-1 hover:bg-primary/5 transition-all -translate-y-2 -translate-x-2">
            <Icon.X className="size-8 text-white" />
          </SidebarCloseButton>
          <h1>Testando</h1>
        </SidebarContent>
      </Sidebar> */}

      <main className="flex-auto relative">{children}</main>
      <WebsiteLayoutFooter />
    </>
  );
};
