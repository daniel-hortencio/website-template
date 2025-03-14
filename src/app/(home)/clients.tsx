"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export const HomeClients = () => {
  const plugin = useRef(Autoplay({ delay: 500, stopOnInteraction: true }));

  return (
    <section className="bg-slate-100">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          loop: true,
          dragFree: true,
          dragThreshold: 0,
          duration: 1500,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 20 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex basis-auto flex-grow w-32"
            >
              <div className="p-1">Test {index}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
