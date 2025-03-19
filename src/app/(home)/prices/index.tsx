"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CardPrice } from "./card";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const prices = [
  {
    name: "Plan 1",
    price: 59.9,
    details: [
      {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1",
        included: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2",
        included: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 3",
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 4",
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 5",
      },
    ],
  },
  {
    name: "Plan 2",
    price: 59.9,
    details: [
      {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1",
        included: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2",
        included: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 3",
        included: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 4",
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 5",
      },
    ],
  },
  {
    name: "Plan 3",
    price: 59.9,
    details: [
      {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1",
        included: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2",
        included: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 3",
        included: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 4",
        included: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 5",
      },
    ],
  },
  {
    name: "Plan 4",
    price: 59.9,
    details: [
      {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1",
        included: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2",
        included: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 3",
        included: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 4",
        included: true,
      },
      {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 5",
        included: true,
      },
    ],
  },
];

export const HomePrices = () => {
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
  }, [api]);

  return (
    <div>
      <div className="container">
        <div className="hidden xl:flex items-center gap-5">
          {prices.map((plan, index) => (
            <CardPrice
              key={plan.name}
              {...plan}
              recommended={index === 1}
              className="rounded-xl hover:-translate-y-2 transition-all duration-400 hover:shadow-xl"
            />
          ))}
        </div>
      </div>

      <div className="space-y-5 overflow-visible xl:hidden">
        <Carousel
          setApi={setApi}
          className="w-full "
          opts={{
            dragFree: true,
          }}
        >
          <CarouselContent className="overflow-visible container">
            {prices.map((plan, index) => (
              <CarouselItem
                key={plan.name}
                className="flex basis-auto flex-grow w-96 px-0 pr-5"
              >
                <CardPrice {...plan} recommended={index === 1} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="w-full flex items-center justify-center gap-4">
          {Array.from({ length: count }).map((dot, index) => (
            <div
              key={index}
              className={cn(
                "size-3 rounded-sm bg-slate-300 transition-all duration-300",
                current - 1 === index && "w-6 bg-indigo-800/80"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
