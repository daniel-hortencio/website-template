import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CardPrice } from "./card";

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

export const HomePrices = () => (
  <>
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

    <Carousel
      className="w-full overflow-visible xl:hidden"
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
  </>
);
