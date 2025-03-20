import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icon } from "@/components/ui/custom/icons";

interface Props {
  name: string;
  description: string;
  quote: string;
}

export const CardTestimonial = ({ description, name, quote }: Props) => (
  <Card className="w-full">
    <CardHeader className="">
      <div className="flex items-center gap-5">
        <Avatar className="size-14 xl:size-16">
          <AvatarImage src="" alt={`Foto de ${name}`} />
          <AvatarFallback className="">
            <Icon.User className="size-8 opacity-40" />
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg">{name}</CardTitle>
          <CardDescription className="font-semibold opacity-70">
            {description}
          </CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="italic">{quote}</CardContent>
  </Card>
);
