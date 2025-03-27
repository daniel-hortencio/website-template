"use client";

import { Card } from "@/components/ui/card";
import { LinkExternal } from "@/components/ui/custom/link-external";
import Image from "next/image";

export const HomePortfolio = () => {
  return (
    <div className="container sm:columns-2 lg:columns-3 gap-4 space-y-4">
      <Card className="w-full aspect-video lg:aspect-[4/3] rounded-2xl relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl shadow-slate-300 ">
        <LinkExternal href="https://www.behance.net/">
          <Image
            src="https://i.pinimg.com/736x/f7/35/d9/f735d9c0b3da38d8f2fcb5bb5afad55b.jpg"
            fill
            alt=""
            className="object-cover object-top"
          />
        </LinkExternal>
      </Card>

      <Card className="w-full aspect-video rounded-2xl relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl shadow-slate-400 ">
        <LinkExternal href="https://www.behance.net/">
          <Image
            src="https://i.pinimg.com/736x/48/05/2d/48052d22c3df5f8a643a85627fb148d7.jpg"
            fill
            alt=""
            className="object-cover object-top"
          />
        </LinkExternal>
      </Card>

      <Card className="w-full aspect-video rounded-2xl relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl shadow-slate-400 ">
        <LinkExternal href="https://www.behance.net/">
          <Image
            src="https://i.pinimg.com/736x/4f/7a/5a/4f7a5ab07ca73f801a77739736414ebc.jpg"
            fill
            alt=""
            className="object-cover object-top"
          />
        </LinkExternal>
      </Card>
      <Card className="w-full aspect-video lg:aspect-[4/3] rounded-2xl relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl shadow-slate-400 ">
        <LinkExternal href="https://www.behance.net/">
          <Image
            src="https://i.pinimg.com/736x/6a/ec/54/6aec54dcb14c166c4c9ade98f158c52a.jpg"
            fill
            alt=""
            className="object-cover object-top"
          />
        </LinkExternal>
      </Card>

      <Card className="w-full aspect-video lg:aspect-[4/3] rounded-2xl relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl shadow-slate-300 ">
        <LinkExternal href="https://www.behance.net/">
          <Image
            src="https://i.pinimg.com/736x/ff/a7/c0/ffa7c00a341b27b9197d112b73e2bd6b.jpg"
            fill
            alt=""
            className="object-cover object-top"
          />
        </LinkExternal>
      </Card>
      <Card className="w-full aspect-video rounded-2xl relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl shadow-slate-300 ">
        <LinkExternal href="https://www.behance.net/">
          <Image
            src="https://i.pinimg.com/736x/77/ca/0e/77ca0ebaa8759f4c00d4c571b948d843.jpg"
            fill
            alt=""
            className="object-cover object-top"
          />
        </LinkExternal>
      </Card>
    </div>
  );
};
