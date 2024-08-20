


// import { EnterpricePlan } from "@/components/marketing/pricing/enterprice-plan";


import {
  defaultMetadata,
  ogMetadata,
  twitterMetadata,
} from "../shared-metadata";
import { Shell } from "@/components/ui/shell";
import { MarketingLayout } from "@/components/Marketing/Layout/MarketingLayout";
import { FAQs } from "@/components/Marketing/FAQs";
import { Separator } from "@/components/ui/separator";
import { PricingWrapperSuspense } from "@/components/Marketing/pricing/PricingWrapperSuspense";
import { PricingBeta } from "@/components/Marketing/pricing/PricingBeta";
import { Gift } from "lucide-react";

export const metadata = {
  ...defaultMetadata,
  title: "Pricing",
  openGraph: {
    ...ogMetadata,
    title: "Pricing",
    url: "https://astroport.it/pricing",
  },
  twitter: {
    ...twitterMetadata,
    title: "Pricing",
  },
};

export default function PricingPage() {
  return (
    <MarketingLayout>
      <div className="grid w-full gap-6">
        <Shell className="grid w-full gap-12">
          <div className="grid gap-3 text-center">
            <h1 className="font-cal text-4xl text-foreground font-semibold">Early Access at <span className="text-green-500">€29</span></h1>
            <div className="flex justify-center">
              <Gift className="text-green-500 h-3.5 w-3.5 animate-pulse mr-1"/>
              <p className="text-xs">
                {/* TODO: add remaining users */}
              <span className="text-green-500 font-semibold">€170 OFF</span> for the first 10 customers (9 left) 
              </p>
            </div>
          </div>
          {/* 
          This is the pro component - use it if have customers
          <PricingWrapperSuspense /> 
          */}
          
          <PricingBeta />

          <Separator />
        </Shell>
        {/* <Shell>
          <EnterpricePlan />
        </Shell> */}
        <FAQs />
      </div>
    </MarketingLayout>
  );
}
