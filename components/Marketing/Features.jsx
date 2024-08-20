import Link from "next/link";


import { cardConfig } from "@/config/features";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Globe } from "./lib/Globe";
import { Button } from "../ui/button";
import { CardFeature, CardFeatureContainer, CardIcon } from "./lib/CardUtils";

export function Features() {
  const { icon, title, features } = cardConfig.monitors;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          <CardIcon icon={icon} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="md:grid md:grid-cols-2">
        <Globe />
        <CardFeatureContainer>
          {features?.map((feature, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <CardFeature key={i} {...feature} />
          ))}
          {/* <div className="order-first flex items-center justify-center gap-2 text-center md:order-none">
            <Button variant="outline" className="rounded-full" asChild>
              <Link href="/play/checker">Playground</Link>
            </Button>
            <Button className="rounded-full" asChild>
              <Link href="/features/monitoring">Learn more</Link>
            </Button>
          </div> */}
        </CardFeatureContainer>
      </CardContent>
    </Card>
  );
}
