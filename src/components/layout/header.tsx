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
          "transition-all border-b border-transparent",
          scrolled && "bg-background/90 backdrop-blur-sm shadow-md border-white"
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
            <Button
              className={cn(
                "bg-gradient-to-r from-yellow-300 to-amber-300 text-foreground hover:brightness-110",
                !scrolled && "shadow-sm hover:shadow-lg shadow-amber-500"
              )}
            >
              Call to Action
            </Button>
            <SocialMedia
              className={
                scrolled
                  ? "[&_svg]:hover:text-indigo-600"
                  : "[&_svg]:hover:text-yellow-200"
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
};
