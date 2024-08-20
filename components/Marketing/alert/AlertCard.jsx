import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cardConfig } from "@/config/features";
import { CardFeature, CardFeatureContainer, CardIcon } from "../lib/CardUtils";
import { Timeline } from "./Timeline";


export function AlertCard() {
  const { icon, title, features } = cardConfig.alerts;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          <CardIcon icon={icon} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="md:flex gap-4">
        <Timeline />
        <CardFeatureContainer>
          {features?.map((feature, i) => (
            <CardFeature key={i} {...feature} />
          ))}
        </CardFeatureContainer>
        </div>
        
      </CardContent>
    </Card>
  );
}
