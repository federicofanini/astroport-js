import Link from "next/link";
import { Button } from "../ui/button";


export function InBetweenCTA({ description, actions }) {
  const { primary, secondary } = actions;
  return (
    <div className="my-8 flex flex-col items-center justify-between gap-6">
      <p className="max-w-lg text-center text-lg text-muted-foreground">
        {description}
      </p>
      <div className="flex gap-2">
        <Button className="rounded-full text-white" size="sm" asChild>
          <Link href={primary.href} target={primary.target}>
            {primary.label}
          </Link>
        </Button>
        <Button className="rounded-full" variant="outline" size="sm" asChild>
          <Link href={secondary.href} target={secondary.target}>
            {secondary.label}
          </Link>
        </Button>
      </div>
    </div>
  );
}

export function MiddleCTA() {
  return (
    <InBetweenCTA
      description="Start coding in minutes. SEO, performance optimizations, and accessibility baked right in. You focus on building features — we’ll take care of the rest."
      actions={{
        primary: { label: "Access to Astroport", href: "/api/auth/login" },
        secondary: { label: "Speed Checker", href: "/play/checker" },
      }}
    />
  );
}

export function BottomCTA() {
  return (
    <InBetweenCTA
      description="Start coding in minutes. SEO, performance optimizations, and accessibility baked right in. You focus on building features — we’ll take care of the rest."
      actions={{
        primary: { label: "Start today", href: "/api/auth/login" },
        secondary: { label: "Wall of Fame", href: "/wall" },
      }}
    />
  );
}
