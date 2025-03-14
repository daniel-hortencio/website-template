import { ReactNode } from "react";
import { WebsiteLayoutHeader } from "./header";
import { WebsiteLayoutFooter } from "./footer";

interface Props {
  children: ReactNode;
}

export const WebsiteLayout = ({ children }: Props) => (
  <>
    <WebsiteLayoutHeader />
    <main className="flex-auto">{children}</main>
    <WebsiteLayoutFooter />
  </>
);
