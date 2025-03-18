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
import { routes } from "@/routes";
import Link from "next/link";

interface Props {
  className?: string;
}

export const NavigationMobile = ({ className }: Props) => (
  <nav {...{ className }}>
    <Drawer direction="right">
      <DrawerTrigger className="cursor-pointer">
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
          <Link key={route.name} href={route.href} className="font-medium">
            {route.name}
          </Link>
        ))}

        <Button>Call to Action</Button>

        <SocialMedia />
      </DrawerContent>
    </Drawer>
  </nav>
);
