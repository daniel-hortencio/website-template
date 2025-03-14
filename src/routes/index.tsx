export const routes = [
  {
    name: "Home",
    href: "/",
    active: (pathname: string) => pathname === "/",
  },
  {
    name: "About",
    href: "/about",
    active: (pathname: string) => pathname.startsWith("/about"),
  },
];
