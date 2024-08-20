"use client";

import { useSearchParams } from "next/navigation";

import { Suspense } from "react";
import { PricingPlanRadio } from "./PricingPlanRadio";
import { PricingTable } from "./PricingTable";


export function PricingWrapper() {
  const searchParams = useSearchParams();
  return (
    <div>
      <div className="flex flex-col gap-4 sm:hidden">
        <PricingPlanRadio />
        <PricingTable
          plans={[(searchParams.get("plan")) || "pro"]}
        />
      </div>
      <div className="hidden sm:block">
        <PricingTable />
      </div>
    </div>
  );
}

// REMINDER: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
// REMINDER: https://nextjs.org/docs/app/api-reference/functions/use-search-params#static-rendering
// REMINDER: https://nextjs.org/docs/messages/deopted-into-client-rendering
// experiments.missingSuspenseWithCSRBailout: false, within next.config.js
export function PricingWrapperSuspense() {
  return (
    <Suspense>
      <PricingWrapper />
    </Suspense>
  );
}
