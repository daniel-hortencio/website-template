import { Button } from "@/components/ui/button";
import { GradientBlur } from "@/components/ui/custom/gradient-blur";
import { HomeHeroVideo } from "./video";

export const HomeHero = () => {
  return (
    <section className="bg-slate-950 pt-52 sm:pt-64 pb-12 sm:pb-20 lg:pt-52 lg:pb-28 relative overflow-hidden">
      <GradientBlur className="absolute bottom-0 left-1/2 size-[32rem] blur-[8rem] lg:blur-[12rem] translate-y-3/4 -translate-x-1/2 lg:top-0 lg:left-0 lg:-translate-y-1/2 lg:-translate-x-1/2 z-[2]" />
      <div className="absolute top-0 lg:right-0 w-full h-96 sm:h-2/3 lg:h-full lg:w-auto lg:aspect-video lg:max-w-2/3">
        <HomeHeroVideo />
        <div className="absolute bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 to-slate-950/0 to-50% w-full h-full" />
      </div>

      <div className="container relative z-10 text-primary-foreground flex justify-center lg:justify-start">
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start space-y-8 max-w-xl">
          <div className="space-y-4 flex flex-col items-center lg:items-start">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Economize uma semana de trabalho e aumente seu lucro desenvolvendo
              websites com esse template
            </h1>
            <p className="max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>

          <div className="flex items-center flex-wrap justify-center gap-5">
            <Button className="border border-indigo-400/60 bg-transparent hover:bg-indigo-900/80 hover:border-indigo-500 shadow-xs hover:shadow-lg shadow-indigo-700">
              Quero ver detalhes do template
            </Button>
            <Button className="bg-gradient-to-r from-yellow-300 to-amber-300 text-foreground hover:brightness-110 shadow-sm hover:shadow-lg shadow-amber-600">
              Quero comprar agora!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
