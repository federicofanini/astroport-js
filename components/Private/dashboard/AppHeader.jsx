import { ArrowUpRight, Circle, CircleAlert, Crown, Dot } from "lucide-react";
import Link from "next/link";
import { Shell } from "@/components/ui/shell";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { UserNav } from "@/components/User/UserNav";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { AppTabs } from "./AppTabs";
import { BrandName } from "@/components/Marketing/BrandName";
import { Separator } from "@/components/ui/separator";

export async function AppHeader() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  return (
    // TODO: discuss amount of top-3 and top-6
    <header className="sticky top-2 z-50 w-full border-border">
      <Shell className="bg-background/70 px-3 py-3 backdrop-blur-lg md:px-6 md:py-3">
        <div className="flex w-full items-center justify-between mb-4">
          {/*  */}
          <BrandName />
          <div className="flex items-center gap-1">
            <ul className="hidden gap-1 sm:flex">
              <li className="w-full">
                <Button variant="link" asChild>
                  <Link
                    href="/dashboard/wall-of-fame"
                    className="relative text-white"
                  >
                    <Crown className="h-4 w-4 mr-2 text-yellow-500"/>
                    Wall of Fame
                    <Dot className="h-8 w-8 animate-pulse text-green-500"/>
                  </Link>
                </Button>
              </li>
              <li className="w-full">
                <Button variant="link" asChild>
                  <Link href="/docs" target="_blank" className="text-white">
                    Docs
                    <ArrowUpRight className="ml-1 h-4 w-4 flex-shrink-0" />
                  </Link>
                </Button>
              </li>
            </ul>
            <div className="relative">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="absolute inset-0">
                <UserNav name={user.given_name} email={user.email} userImage={user.picture} />
              </div>
            </div>
          </div>
        </div>
        <AppTabs />
      </Shell>
    </header>
  );
}
