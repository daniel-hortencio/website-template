import { cn } from "@/lib/utils";
import Image from "next/image";

const process_steps = [
  {
    title: "Briefing client Needs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "step-1.png",
    className:
      "bg-gradient-to-tr from-amber-200 to-amber-100 [&_strong]:text-white [&_strong]:opacity-60",
  },
  {
    title: "Develop the best solution",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "step-2.png",
    className:
      "bg-gradient-to-tr from-white to-slate-50 [&_strong]:text-foreground [&_strong]:opacity-[0.04]",
  },
  {
    title: "Deliver and test solution",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "step-3.png",
    className:
      "bg-gradient-to-tr from-slate-100 to-slate-300 [&_strong]:text-foreground [&_strong]:opacity-5",
  },
  {
    title: "Support and Improvements",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "step-4.png",
    className:
      "bg-gradient-to-tr from-slate-900 to-slate-950 text-white [&_strong]:text-white [&_strong]:opacity-[0.12]",
  },
];

export const HomeWorkProcess = () => (
  <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
    {process_steps.map(({ title, description, image, className }, index) => (
      <div
        key={title}
        className={cn(
          "rounded-xl relative overflow-hidden bg-slate-600 flex flex-col justify-between shadow-xs ",
          className
        )}
      >
        <div className="pt-4 px-5 relative">
          <div className="space-y-2 relative z-10 ">
            <h2 className="font-bold text-lg ">{title}</h2>
            <p>{description}</p>
          </div>
          <strong className="font-black text-[10rem] absolute -right-6 -top-12">
            {index + 1}
          </strong>
        </div>
        <div className="relative w-full aspect-square">
          <Image
            src={`/pictures/${image}`}
            fill
            className="object-cover w-full"
            alt=""
          />
        </div>
      </div>
    ))}
  </div>
);
