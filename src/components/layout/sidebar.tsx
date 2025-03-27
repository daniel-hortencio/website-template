"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef } from "react";
import { Icon } from "../ui/custom/icons";
import { ContainerClickOutside } from "../ui/custom/container-click-outside";
import { useSwipe } from "@/hooks/useSwipe";

export type Props = {
  open: boolean;
  onClose: () => void;
  direction?: "right" | "left";
  children: ReactNode;
  className?: string;
  disableClickOutside?: boolean;
};

export const SidebarCloseButton = ({
  children,
  className,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <button
      id="sidebar-close-button"
      className={cn(
        "w-fit [&_svg]:text-primary [&_svg]:size-8 cursor-pointer",
        className
      )}
    >
      {children || <Icon.X className="size-8" />}
    </button>
  );
};

export const Sidebar = ({
  open,
  onClose,
  className,
  children,
  direction = "right",
  disableClickOutside,
}: Props) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useSwipe({
    element: sidebarRef.current,
    onSwipeToEnd: onClose,
    direction,
  });

  useEffect(() => {
    const closeButton = document.getElementById("sidebar-close-button");

    if (closeButton) {
      closeButton.addEventListener("click", onClose);
    }

    return () => {
      if (closeButton) {
        closeButton.removeEventListener("click", onClose);
      }
    };
  }, [onClose]);

  return (
    <ContainerClickOutside
      onClickOutsite={() => {
        if (!disableClickOutside) {
          console.log("entrou aquiiiiiiiii");
          onClose();
        }
      }}
      className={cn(
        "fixed bg-white top-0 transition-all bottom h-screen z-50 w-4/5 max-w-72 p-4 shadow-[0_0_0_200vw_rgba(0,0,0,0.4)] flex flex-col",
        direction === "left" ? "left-0" : "right-0",
        open
          ? "translate-x-0"
          : `${
              direction === "left" ? "-translate-x-full" : "translate-x-full"
            } shadow-transparent`,
        className
      )}
      ref={sidebarRef} // Aplica a referência aqui
    >
      {children}
    </ContainerClickOutside>
  );
};
