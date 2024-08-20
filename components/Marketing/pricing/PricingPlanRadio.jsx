"use client";

import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import useUpdateSearchParams from "@/hooks/use-update-search-params";
import { workspacePlans } from "@/lib/schema/costants";
import { allPlans } from "@/lib/schema/plan";

export function PricingPlanRadio() {
  const updateSearchParams = useUpdateSearchParams();
  const router = useRouter();
  return (
    <RadioGroup
      defaultValue="pro"
      className="grid grid-cols-4 gap-4"
      onValueChange={(value) => {
        const searchParams = updateSearchParams({ plan: value });
        router.replace(`?${searchParams}`, { scroll: false });
      }}
    >
      {workspacePlans.map((key) => (
        <div key={key}>
          <RadioGroupItem value={key} id={key} className="peer sr-only" />
          <Label
            htmlFor={key}
            className={cn(
              "flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary",
              key === "pro" && "bg-muted/50",
            )}
          >
            <span className="text-sm capitalize">{key}</span>
            <span className="mt-1 font-semibold text-green-500 text-xs">
              {allPlans[key].price}$
            </span>
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
