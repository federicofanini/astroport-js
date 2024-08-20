import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";



export function CardIcon({ icon }) {
  const Icon = Icons[icon];
  return (
    <div className="rounded-full p-2 w-10 justify-center">
      <Icon className="h-5 w-5" />
    </div>
  );
}


export function CardFeatureContainer({
  children,
  dir = "rows",
}) {
  return (
    <ul
      className={cn("gap-4 md:gap-6", {
        "grid md:grid-cols-3": dir === "cols",
        "flex flex-col": dir === "rows",
      })}
    >
      {children}
    </ul>
  );
}

// TODO: rename type a bit appropriately
export function CardFeature(props) {
  const FeatureIcon = Icons[props.icon];
  return (
    <li>
      <p className="flex flex-col">
        <span>
          <FeatureIcon className="mr-1.5 mb-1 inline-flex h-4 w-4 text-foreground/80" />
          <span className="font-medium text-foreground">
            {props.catchline.replace(".", "")}
          </span>{" "}
        </span>
        <span className="text-muted-foreground">{props.description}</span>
      </p>
      {props.badge ? (
        <Badge variant="secondary" className="-ml-2 mt-1 text-white">
          <Circle className="animate-pulse h-3.5 w-3.5 mr-2 fill-green-500"/>
          {props.badge}
        </Badge>
      ) : null}
    </li>
  );
}
