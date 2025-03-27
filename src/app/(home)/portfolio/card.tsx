import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/custom/icons";
import { MouseHighlight } from "@/components/ui/custom/mouse-highlight";
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
  className?: string;
}

export const CardPrice = ({
  name,
  price,
  recommended,
  details,
  className,
}: Props) => {
  return (
    <MouseHighlight
      className={cn("rounded-xl", className)}
      highlightClassName={recommended ? "bg-indigo-900" : "bg-transparent"}
    >
      <Card
        className={cn(
          "w-full py-5",
          recommended
            ? "bg-gradient-to-tr from-indigo-900 to-slate-950"
            : "bg-white"
        )}
      >
        {" "}
        {recommended && (
          <span className="absolute top-0 right-0 bg-gradient-to-r from-yellow-300 to-amber-300 text-sm px-3 py-1 rounded-bl-lg font-semibold z-20">
            Recommended
          </span>
        )}
        <CardHeader className="relative z-10">
          <CardTitle
            className={cn("text-lg", recommended && "text-primary-foreground ")}
          >
            {name}
          </CardTitle>
          <div className="flex items-start gap-1">
            <strong
              className={cn(
                "font-black text-3xl",
                recommended && "text-primary-foreground"
              )}
            >
              {maskCurrency(price)}
            </strong>
            <small
              className={cn(
                "font-medium translate-y-1",
                recommended && "text-primary-foreground"
              )}
            >
              /Month
            </small>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 relative z-10">
          <div className="space-y-3">
            {details.map((detail) => (
              <div
                key={detail.name}
                className="grid grid-cols-[2rem_1fr] gap-2"
              >
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
                    recommended && "text-primary-foreground/80",
                    !detail.included ? "opacity-40" : "font-medium"
                  )}
                >
                  {detail.name}
                </p>
              </div>
            ))}
          </div>
          <Button
            className={cn(
              "bg-gradient-to-r from-yellow-300 to-amber-300 text-foreground hover:brightness-110",
              recommended && "shadow-sm hover:shadow-lg shadow-amber-500"
            )}
          >
            Contratar
          </Button>
        </CardContent>
      </Card>
    </MouseHighlight>
  );
};
