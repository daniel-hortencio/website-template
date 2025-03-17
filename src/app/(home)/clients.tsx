"use client";

import { KeenSlider } from "@/components/ui/custom/keen-slider";
import { useWindow } from "@/hooks/useWindow";
import { cn } from "@/lib/utils";
import Image from "next/image";

const clients_logos = [
  "apple.svg",
  "samsung.svg",
  "tesla.svg",
  "john-deere.svg",
  "amazon.svg",
  "playstation.svg",
  "adobe.svg",
  "fiat.svg",
];

export const HomeClients = () => {
  const { width } = useWindow({});

  return (
    <section className="py-2">
      <div className="container hidden xl:flex items-center justify-evenly">
        {clients_logos.map((logo, index) => (
          <div key={logo} className={cn("flex  h-16 aspect-video p-2")}>
            <div key={logo} className="relative w-full h-full ">
              <Image
                src={`/logos/${logo}`}
                fill
                alt={`Logo ${logo.split(".")[0].replaceAll("-", "")}`}
              />
            </div>{" "}
          </div>
        ))}
      </div>

      <div className="xl:hidden">
        <KeenSlider.Root
          key={width}
          enableAnimation
          slides={{
            perView: width / 120,
            spacing: 20,
          }}
        >
          {[...clients_logos, ...clients_logos].map((logo, index) => (
            <KeenSlider.Slide
              key={`${logo}_${index}`}
              className={cn("flex basis-auto flex-grow h-16 aspect-square p-2")}
            >
              <div className="relative w-full h-full">
                <Image
                  src={`/logos/${logo}`}
                  fill
                  alt={`Logo ${logo.split(".")[0].replaceAll("-", "")}`}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </KeenSlider.Slide>
          ))}
        </KeenSlider.Root>
      </div>
    </section>
  );
};
