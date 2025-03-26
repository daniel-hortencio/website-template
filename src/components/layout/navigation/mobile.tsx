import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/custom/icons";
import { SocialMedia } from "@/components/ui/custom/social-medias";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useWindow } from "react-valley";
import { cn } from "@/lib/utils";
import { routes } from "@/routes";
import Link from "next/link";

interface Props {
  className?: string;
}

export const NavigationMobile = ({ className }: Props) => {
  const { scrolled } = useWindow();

  return (
    <nav {...{ className }}>
      <Drawer direction="right">
        <DrawerTrigger
          className={cn(
            "cursor-pointer",
            scrolled ? " hover:text-indigo-700" : " hover:text-yellow-200"
          )}
        >
          <Icon.Menu className="size-8" />
        </DrawerTrigger>
        <DrawerTitle></DrawerTitle>

        <DrawerContent
          className="p-5 space-y-5 lg:hidden"
          overlayClassName="backdrop-blur-xs lg:hidden"
        >
          <DrawerClose className="cursor-pointer">
            <Icon.X className="size-8" />
          </DrawerClose>

          {routes.map((route) => (
            <Link
              key={route.name}
              href={route.href}
              className="font-medium hover:text-indigo-700"
            >
              {route.name}
            </Link>
          ))}

          <Button className="bg-gradient-to-r from-yellow-300 to-amber-300 text-foreground hover:brightness-110">
            Call to Action
          </Button>

          <SocialMedia className="[&_svg]:hover:text-indigo-600" />
        </DrawerContent>
      </Drawer>
    </nav>
  );
};
