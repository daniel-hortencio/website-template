"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CardTestimonial } from "./card";
import { useWindow } from "@/hooks/useWindow";

const testimonials = [
  {
    name: "Fulano",
    description: "Product Manager at Apple",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Cicrano",
    description: "Tech Lead at Playstation",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Beltrano",
    description: "Marketing Director at Tesla",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Fulano 1",
    description: "Product Manager at Apple",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Cicrano 1",
    description: "Tech Lead at Playstation",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Beltrano 1",
    description: "Marketing Director at Tesla",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const HomeTestimonials = () => {
  const { width } = useWindow();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, width]);

  return (
    <div className="space-y-5 w-full overflow-visible">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent className="overflow-visible container ">
          {testimonials.map((author) => (
            <CarouselItem
              key={author.name}
              className="flex basis-full sm:basis-2/3 md:basis-3/5 lg:basis-3/7 xl:basis-1/2 2xl:basis-2/5 flex-grow w-full px-0 pr-5"
            >
              <CardTestimonial {...author} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="container w-full flex items-center gap-4">
        {Array.from({ length: count }).map((dot, index) => (
          <div
            key={`${dot}_${index}`}
            className={cn(
              "size-3 rounded-sm bg-slate-400/80 transition-all duration-300",
              current - 1 === index && "w-6 bg-indigo-800/80"
            )}
          />
        ))}
      </div>
    </div>
  );
};
