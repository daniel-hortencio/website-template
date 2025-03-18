"use client";

import { useWindow } from "@/hooks/useWindow";
import { Logo } from "../ui/custom/logo";
import { NavigationDesktop } from "./navigation/desktop";
import { NavigationMobile } from "./navigation/mobile";
import { cn } from "@/lib/utils";
import { SocialMedia } from "../ui/custom/social-medias";
import { Button } from "../ui/button";

export const WebsiteLayoutHeader = () => {
  const { scrolled } = useWindow({});

  return (
    <header className="w-screen z-40 fixed top-0 left-0 ">
      <div
        className={cn(
          "transition-all",
          scrolled && "bg-background/90 backdrop-blur-sm shadow-md"
        )}
      >
        <div
          className={cn(
            "container h-12 lg:h-14 flex items-center justify-between",
            scrolled ? "text-primary" : "text-primary-foreground"
          )}
        >
          <Logo />
          <NavigationDesktop className="hidden lg:flex" />
          <NavigationMobile className="lg:hidden" />

          <div className="hidden lg:flex items-center gap-6">
            <Button>Call to Action</Button>
            <SocialMedia />
          </div>
        </div>
      </div>
    </header>
  );
};
