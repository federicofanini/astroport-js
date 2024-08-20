import { cardConfig } from "@/config/features";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardFeature, CardFeatureContainer, CardIcon } from "../lib/CardUtils";

export function StatusPageCard() {
  const { icon, title, features } = cardConfig.pages;
  return (
    <Card>
      <CardHeader>
        {/* <CardTitle className="flex gap-2 items-center">
          <CardIcon icon={icon} />
          {title}
        </CardTitle> */}
      </CardHeader>
      <CardContent dir="rows">
        {/* <TrackerExample /> */}
        <CardFeatureContainer dir="cols">
          {features?.map((feature, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <CardFeature key={i} {...feature} />
          ))}
        </CardFeatureContainer>
      </CardContent>
    </Card>
  );
}
