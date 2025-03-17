import { Section } from "@/components/layout/section";
import { HomeClients } from "./clients";
import { HomeHero } from "./hero";
import { HomePrices } from "./prices";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeClients />
      <Section
        title={<h1 className="text-3xl font-bold">Prices</h1>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        className="py-8"
      >
        <HomePrices />
      </Section>
    </>
  );
}
