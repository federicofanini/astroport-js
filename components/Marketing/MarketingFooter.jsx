import { ArrowUpRight, Zap } from "lucide-react";
import Link from "next/link";


import { cn } from "@/lib/utils";

import { Shell } from "../ui/shell";
import { Button } from "../ui/button";
import { SocialIconButton } from "../ui/social-icons-button";
import { socialsConfig } from "@/config/social";
import { ThemeToggle } from "../ui/ThemeToggle";
import { BrandName } from "./BrandName";
import Image from "next/image";
import { GetAccess } from "./Buttons/GetAccess";

export function MarketingFooter({ className }) {
  return (
    <footer className={cn("w-full", className)}>
      <Shell className="grid gap-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-3">
            <div>
              <BrandName />
              <p className="mt-2 max-w-md font-light text-muted-foreground text-sm">
              The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app. 
                <br />
                <span className="underline decoration-dotted underline-offset-2 mt-2 text-yellow-500">
                Speed Matters ⚡
                </span>
              </p>
            </div>
            {/* <StatusWidgetContainer slug="status" /> */} 
            <GetAccess />
          </div>
          <div className="order-2 flex flex-col gap-3 text-sm">
            <p className="font-semibold text-foreground">Resources</p>
            <FooterLink href="/blog" label="Blog" />
            <FooterLink href="/pricing" label="Pricing" />
            <FooterLink href="https://docs.astroport.it" label="Docs" />
          </div>
          <div className="order-3 flex flex-col gap-3 text-sm">
            <p className="font-semibold text-foreground">Boring</p>
            <FooterLink href="/tos" label="Terms" />
            <FooterLink href="/privacy-policy" label="Privacy Policy" />
          </div>
          <div className="order-3 flex flex-col gap-3 text-sm">
            <p className="font-semibold text-foreground">Startups & Tools</p>
            <FooterLink href="https://blockshub.eu" label="🦚 Blockshub" />
            <FooterLink href="https://defibrilla.com" label="🫀 Defibrilla.com" />
            <FooterLink href="https://pwrusr.me" label="🍏 Power User" />
            <FooterLink href="https://shipfa.st/?via=federico" label="⚡️ ShipFast" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {socialsConfig.map(({ title, href, icon }) => (
              <SocialIconButton key={title} {...{ href, icon, title }} />
            ))}
          </div>
          <div className="text-right md:text-left">
            {/* <ThemeToggle /> */}
            <Button size="sm" variant="outline" asChild>
              <Link href={"https://fanini.eu"} target="_blank" className="flex items-center gap-2">
              <Image 
                src={"/avatars/ff.jpg"}
                width={20}
                height={20}
                alt="ff"
                className="rounded-full"
              />
              whoami
              </Link>
            </Button>
          </div>
        </div>
      </Shell>
    </footer>
  );
}



function FooterLink({ href, label, external = false }) {
  const isExternal = external || href.startsWith("http");

  const externalProps = isExternal
    ? {
        target: "_blank",
        rel: "noreferrer",
      }
    : {};

  return (
    <Link
      className="inline-flex w-fit items-center text-muted-foreground hover:underline hover:underline-offset-4 hover:text-foreground"
      href={href}
      {...externalProps}
    >
      {label}
      {isExternal ? (
        <ArrowUpRight className="ml-1 h-4 w-4 flex-shrink-0" />
      ) : null}
    </Link>
  );
}
