import { ChevronRight, Crown, Gift, Sparkles } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";


import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Avatars from "./Avatars";

export function Hero() {
  return (
    <div className="my-10 flex w-full flex-col justify-center gap-1 px-3 py-4 text-center md:my-20 md:p-6">
      <div>
        <Badge variant="outline" className="backdrop-blur-[2px]">
          <Link
            href="/pricing"
            className="flex items-center"
          >
            <Gift className="text-green-500 h-3.5 w-3.5 animate-pulse mr-1"/>
            <p className="text-xs">
              {/* TODO: add remaining users */}
            <span className="text-green-500 font-semibold">€170 OFF</span> for the first 10 customers (9 left) 
            </p>
            <ChevronRight className="ml-1 h-3 w-3" />
          </Link>
        </Badge>
      </div>
      <div className="flex flex-col gap-6 align-center">
        <h1
          className={cn(
            "font-cal text-4xl text-foreground md:text-6xl",
            "bg-gradient-to-tl from-0% from-[hsl(var(--muted))] to-40% to-[hsl(var(--foreground))] bg-clip-text text-transparent",
          )}
        >
          A better way to ship your apps.
        </h1>
        <p className="mx-auto max-w-md text-lg text-muted-foreground md:max-w-xl md:text-xl mb-8">
        NextJS production-ready apps at lightning speed. 
        </p>
        <Avatars />
      </div>
      <div className="my-4 grid gap-2 sm:grid-cols-2">
        <div className="text-center sm:block sm:text-right">
          <Button className="w-48 rounded-full sm:w-auto text-white" asChild>
            <Link href="/api/auth/login">
              <Sparkles className="h-4 w-4 mr-2"/>
              Get Started
            </Link>
          </Button>
        </div>
        <div className="text-center sm:block sm:text-left">
          <Button
            variant="outline"
            className="w-48 rounded-full sm:w-auto"
            asChild
          >
            <Link href="/github" target="_blank">
              <Crown className="h-4 w-4 mr-2 text-yellow-500" />
              Wall of Fame{" "}
              <Suspense fallback={<StarsBadgeFallback />}>
                <StarsBadge />
              </Suspense>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function StarsBadgeFallback() {
  return (
    <Badge variant="secondary" className="ml-1">
      ~
    </Badge>
  );
}

async function StarsBadge() {
  const stars = 50
  return (
    <>
      <Badge variant="secondary" className="ml-1 hidden sm:block">
        50
      </Badge>
      <Badge variant="secondary" className="ml-1 block sm:hidden">
        {stars}
      </Badge>
    </>
  );
}
