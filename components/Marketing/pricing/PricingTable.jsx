"use client";

import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { Fragment } from "react";





import { workspacePlans } from "@/lib/schema/costants";
import { allPlans } from "@/lib/schema/plan";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LoadingAnimation } from "../lib/LoadingAnimation";
import { Badge } from "@/components/ui/badge";
import { pricingTableConfig } from "@/config/pricing";

export function PricingTable({
  plans = workspacePlans,
  currentPlan,
  events,
  isLoading,
  }) {
  const router = useRouter();
  const selectedPlans = Object.entries(allPlans)
    .filter(([key, _]) => plans.includes(key))
    .map(([key, value]) => ({ key, ...value }));
  return (
    <Table className="relative">
      <TableCaption>
        A list to compare the different features by plan.
      </TableCaption>
      <TableHeader>
        <TableRow className="hover:bg-background">
          <TableHead className="bg-background px-3 py-3 align-bottom">
            Features comparison
          </TableHead>
          {selectedPlans.map(({ key, ...plan }) => {
            const isCurrentPlan = key === currentPlan;
            return (
              <TableHead
                key={key}
                className={cn(
                  "h-auto px-3 py-3 align-bottom text-foreground rounded-t-md",
                  key === "pro" ? "bg-muted/30" : "bg-background",
                )}
              >
                <p className="sticky top-0 mb-2 font-cal text-2xl">
                  {plan.title}
                </p>
                <p className="mb-2 font-normal text-muted-foreground text-sm">
                  {plan.description}
                </p>
                <p className="mb-2 text-right">
                  <span className="font-cal text-lg text-muted-foreground line-through">{plan.anchor}$</span>{" "}
                  <span className="font-cal text-xl">{plan.price}$</span>{" "}
                  <span className="font-light text-green-500 text-sm">
                    lifetime
                  </span>
                </p>
                <Button
                  className="w-full"
                  size="sm"
                  variant={key === "pro" ? "default" : "outline"}
                  onClick={() => {
                    if (events?.[key]) {
                      return events[key]?.();
                    }
                    // FIXME: how to properly handle `?redirectTo` with unknown workspaceSlug
                    // to redirect user to `/app/[workspaceSlug]/settings/billing?plan=${key}`?
                    return router.push(`/app/login?plan=${key}`);
                  }}
                  disabled={isCurrentPlan || isLoading}
                >
                  {isLoading ? (
                    <LoadingAnimation
                      variant={key === "pro" ? "default" : "inverse"}
                    />
                  ) : isCurrentPlan ? (
                    "Current plan"
                  ) : (
                    "Choose"
                  )}
                </Button>
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.entries(pricingTableConfig).map(
          ([key, { label, features }], _i) => {
            return (
              <Fragment key={key}>
                <TableRow className="bg-muted/50">
                  <TableCell
                    colSpan={selectedPlans.length + 1}
                    className="p-3 font-medium"
                  >
                    {label}
                  </TableCell>
                </TableRow>
                {features.map(({ label, value, badge }, _i) => {
                  return (
                    <TableRow key={key + label}>
                      <TableCell className="gap-1">
                        {label}{" "}
                        {badge ? (
                          <Badge variant="secondary">{badge}</Badge>
                        ) : null}
                      </TableCell>
                      {selectedPlans.map((plan, _i) => {
                        const limitValue = plan.limits[value];
                        function renderContent() {
                          if (typeof limitValue === "boolean") {
                            if (limitValue) {
                              return (
                                <Check className="h-4 w-4 text-foreground" />
                              );
                            }
                            return (
                              <span className="text-muted-foreground/50">
                                &#8208;
                              </span>
                            );
                          }
                          if (typeof limitValue === "number") {
                            return (
                              <span className="font-mono">
                                {new Intl.NumberFormat("us")
                                  .format(limitValue)
                                  .toString()}
                              </span>
                            );
                          }
                          if (
                            Array.isArray(limitValue) &&
                            limitValue.length > 0
                          ) {
                            return limitValue[0];
                          }
                          return limitValue;
                        }

                        return (
                          <TableCell
                            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                            key={key + value + _i}
                            className={cn(
                              "p-3",
                              plan.key === "pro" && "bg-muted/30",
                            )}
                          >
                            {renderContent()}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </Fragment>
            );
          },
        )}
      </TableBody>
    </Table>
  );
}
