import { Button } from "@/components/ui/button";
import { GradientBlur } from "@/components/ui/custom/gradient-blur";

export const HomeHero = () => (
  <section className="bg-slate-950 pt-64 pb-20 lg:pt-52 lg:pb-28 relative overflow-hidden">
    <GradientBlur className="absolute bottom-0 left-0 size-[40rem] blur-[8rem] translate-y-1/2 -translate-x-1/2" />
    <div className="absolute top-0 lg:right-0 w-full h-2/3 lg:h-full lg:w-auto lg:aspect-video lg:max-w-2/3">
      <video
        autoPlay
        className="absolute h-full w-full object-cover object-right transform scale-x-[-1]"
        muted
        loop
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 to-slate-950/0 to-50% w-full h-full" />
    </div>

    <div className="container relative z-10 text-primary-foreground flex justify-center lg:justify-start">
      <div className="flex flex-col items-center text-center lg:text-left lg:items-start space-y-8 max-w-xl">
        <div className="space-y-4 flex flex-col items-center lg:items-start">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Economize uma semana de trabalho e aumente seu lucro desenvolvendo
            websites com esse template
          </h1>
          <p className="max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
        </div>

        <div className="flex items-center gap-5">
          <Button className="border border-indigo-400/60 bg-transparent hover:bg-indigo-900 hover:border-indigo-500 shadow-sm hover:shadow-lg shadow-indigo-700">
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
