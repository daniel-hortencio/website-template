import { cn } from "@/lib/utils";
import { Icon } from "./icons";
import { LinkExternal } from "./link-external";

const medias = [
  {
    icon: <Icon.Linkedin className="size-6" />,
    href: "https://www.linkedin.com/in/daniel-hortencio/",
  },
  {
    icon: <Icon.Github className="size-6" />,
    href: "https://github.com/daniel-hortencio",
  },
];

export const SocialMedia = ({ className = "" }) => (
  <div className={cn("flex items-center gap-4", className)}>
    {medias.map(({ icon, href }) => (
      <LinkExternal key={href} {...{ href }} className="transition-all">
        {icon}
      </LinkExternal>
    ))}
  </div>
);
