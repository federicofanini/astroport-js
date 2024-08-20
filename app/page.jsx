import { AlertCard } from "@/components/Marketing/alert/AlertCard";
import { BottomCTA, MiddleCTA } from "@/components/Marketing/CTA";
import { Featured } from "@/components/Marketing/Featured";
import { Features } from "@/components/Marketing/Features";
import { Hero } from "@/components/Marketing/Hero";
import { MarketingLayout } from "@/components/Marketing/Layout/MarketingLayout";
import { Ship } from "@/components/Marketing/Ship";
import { Stats } from "@/components/Marketing/Stats";
import { StatusPageCard } from "@/components/Marketing/status/StatusPageCard";
import { User } from "@/components/Marketing/User/User";

export default function Home() {
  return (
    <MarketingLayout>
      <div className="grid gap-8">
        <User />
        <Hero />
        <Featured />
        <Features />
        <Stats />
        {/* <MiddleCTA /> */}
        <AlertCard />
        <StatusPageCard />
        <BottomCTA />
        {/* <Ship /> */}
      </div>
    </MarketingLayout>
  );
}
