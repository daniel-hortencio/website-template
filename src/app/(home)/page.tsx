import { HomeClients } from "./clients";
import { HomeHero } from "./hero";
import { HomePrices } from "./prices";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeClients />
      <HomePrices />
    </>
  );
}
