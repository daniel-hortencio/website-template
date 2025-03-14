import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/custom/icons";
import { cn } from "@/lib/utils";
import { maskCurrency } from "@/utils/masks/currency";

interface Props {
  name: string;
  price: number;
  recommended?: boolean;
  details: {
    name: string;
    included?: boolean;
  }[];
}

export const CardPrice = ({ name, price, recommended, details }: Props) => {
  return (
    <Card className={cn("w-full py-5 ", recommended && "bg-primary")}>
      <CardHeader>
        <CardTitle className={cn(recommended && "text-primary-foreground")}>
          {name}
        </CardTitle>
        <strong
          className={cn(
            "font-black text-2xl",
            recommended && "text-primary-foreground"
          )}
        >
          {maskCurrency(price)}
        </strong>
      </CardHeader>
      <CardContent className="space-y-4">
        {details.map((detail) => (
          <div key={detail.name} className="grid grid-cols-[2rem_1fr] gap-2">
            <div className="w-full flex justify-center pt-1">
              {detail.included ? (
                <Icon.Check className="size-5 min-w-5 text-emerald-600" />
              ) : (
                <Icon.X className="size-6 text-muted-foreground" />
              )}
            </div>
            <p
              className={cn(
                "min-h-5 flex justify-start flex-col",
                recommended && "text-primary-foreground/80"
              )}
            >
              {detail.name} {detail.name} {detail.name} {detail.name}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
