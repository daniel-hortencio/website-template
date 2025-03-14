import { Logo } from "../ui/custom/logo";
import { NavigationDesktop } from "./navigation/desktop";
import { NavigationMobile } from "./navigation/mobile";

export const WebsiteLayoutHeader = () => (
  <header className="w-screen fixed top-0 left-0">
    <div className="container h-12 lg:h-14 flex items-center justify-between">
      <Logo />
      <NavigationDesktop className="hidden lg:flex" />
      <NavigationMobile className="lg:hidden" />
    </div>
  </header>
);
