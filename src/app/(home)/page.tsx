import { Section, SectionHeader } from "@/components/layout/section";
import { HomeClients } from "./clients";
import { HomeHero } from "./hero";
import { HomePrices } from "./prices";
import { HomeTestimonials } from "./testimonials";
import { HomeStatistics } from "./statistics";
import Image from "next/image";
import { HomeWorkProcess } from "./work-process";

export default function Home() {
  return (
    <div>
      <HomeHero />

      <HomeClients />

      <Section
        title={<h1 className="text-3xl font-bold">Work Process</h1>}
        // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        className="py-16"
      >
        <HomeWorkProcess />
      </Section>

      <Section
        title={<h1 className="text-3xl font-bold">Prices</h1>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        className="py-16"
      >
        <HomePrices />
      </Section>

      <Section
        title={<h1 className="text-3xl font-bold">Statistics</h1>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        className="py-16 text-primary-foreground relative overflow-hidden bg-slate-800"
        alignCenter
      >
        <Image
          src="/pictures/laptop.jpg"
          fill
          className="object-cover object-right w-full h-full opacity-80 brightness-70"
          alt="Foto de um laptop com código React"
        />
        <div className="bg-gradient-to-r from-slate-950 to-indigo-950/0 absolute w-full h-full top-0 left-0" />
        <div className="relative z-10">
          <HomeStatistics />
        </div>
      </Section>

      <Section className="py-16 flex flex-col items-start xl:grid grid-cols-[24rem_2fr] w-full gap-12 container-left">
        <SectionHeader
          title={<h1 className="text-3xl font-bold">Testimonials</h1>}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          className="container h-full relative z-10"
        />

        <HomeTestimonials />
      </Section>
    </div>
  );
}
