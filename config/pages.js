export const settingsPagesConfig = [
  {
    title: "General",
    description: "General settings for the workspace.",
    href: "/settings/general",
    icon: "cog",
    segment: "general",
  },
  {
    title: "Team",
    description: "Team settings for the workspace.",
    href: "/settings/team",
    icon: "users",
    segment: "team",
  },
  {
    title: "API Token",
    description: "API token settings for the workspace.",
    href: "/settings/api-token",
    icon: "key",
    segment: "api-token",
  },
  {
    title: "Billing",
    description: "Billing settings for the workspace.",
    href: "/settings/billing",
    icon: "credit-card",
    segment: "billing",
  },
  {
    title: "Appearance",
    description: "Appearance settings for the workspace.",
    href: "/settings/appearance",
    icon: "sun",
    segment: "appearance",
  },
  {
    title: "User",
    description: "Profile settings for the user.",
    href: "/settings/user",
    icon: "user",
    segment: "user",
  },
];

export const monitorPagesConfig = [
  {
    title: "Overview",
    description: "Dashboard with all the metrics and charts.",
    href: "/monitors/[id]/overview",
    icon: "line-chart",
    segment: "overview",
  },
  {
    title: "Response logs",
    description: "Data table with all response details.",
    href: "/monitors/[id]/data",
    icon: "table",
    segment: "data",
  },
  {
    title: "Settings",
    description: "Edit section for the monitor.",
    href: "/monitors/[id]/edit",
    icon: "cog",
    segment: "edit",
  },
];

export const statusPagesPagesConfig = [
  {
    title: "Settings",
    description: "Edit section for the status page.",
    href: "/status-pages/[id]/edit",
    icon: "cog",
    segment: "edit",
  },
  {
    title: "Status Reports",
    description: "Inform your users about recent reports",
    href: "/status-pages/[id]/reports",
    icon: "megaphone",
    segment: "reports",
  },
  {
    title: "Domain",
    description: "Where you can see the domain settings.",
    href: "/status-pages/[id]/domain",
    icon: "globe",
    segment: "domain",
  },
  {
    title: "Subscribers",
    description: "Where you can see all the subscribers.",
    href: "/status-pages/[id]/subscribers",
    icon: "users",
    segment: "subscribers",
  },
  {
    title: "Maintenance",
    description: "Where you can see all the maintenance.",
    href: "/status-pages/[id]/maintenances",
    icon: "hammer",
    segment: "maintenances",
  },
];

const incidentPagesConfig = [
  {
    title: "Overview",
    description: "Timeline with all the actions.",
    href: "/incidents/[id]/overview",
    icon: "file-clock",
    segment: "overview",
  },
];

export const statusReportsPagesConfig = [
  {
    title: "Overview",
    description: "Overview of the status report.",
    href: "/status-reports/[id]/overview",
    icon: "megaphone",
    segment: "overview",
  },
  {
    title: "Settings",
    description: "Edit section for the status report.",
    href: "/status-reports/[id]/edit",
    icon: "cog",
    segment: "edit",
  },
];

export const notificationsPagesConfig = [
  {
    title: "Settings",
    description: "Edit section for the notifications.",
    href: "/notifications/[id]/edit",
    icon: "cog",
    segment: "edit",
  },
];


export const pagesConfig = [
  {
    title: "Get Access",
    description: "Get Access to the Astroport Boilerplate.",
    href: "/dashboard",
    icon: "activity",
    segment: "Get Access",
    children: monitorPagesConfig,
  },
  {
    title: "Profile",
    description: "Your public profile.",
    href: "/dashboard/profile",
    icon: "user",
    segment: "Profile",
    children: incidentPagesConfig,
  },
];

export const marketingProductPagesConfig = [
  {
    href: "/",
    title: "Landing page",
    subtitle:
      "Ship your app in days.",
    description: "Ship your app in days.",
    segment: "astroport",
    icon: "astroport",
  },
  {
    href: "/dashboard",
    title: "Dashboard",
    subtitle: "Beautifully designed components built with Shadcn/ui.",
    description: "All components you need.",
    segment: "dashboard",
    icon: "astroport",
  },
];

export const marketingResourcePagesConfig = [
  {
    href: "https://supabase.com/",
    title: "Supabase",
    description: "Build in a weekend, scale to millions.",
    segment: "supabase",
    icon: "supabase",
  },
  {
    href: "https://www.prisma.io/",
    title: "Prisma",
    description: "Simplify database queries so you don't have to figure it out.",
    segment: "prisma",
    icon: "prisma",
  },
  {
    href: "https://stripe.com/",
    title: "Stripe",
    description: "Financial infrastructure to grow your revenue.",
    segment: "stripe",
    icon: "stripe",
  },
  {
    href: "https://kinde.com/",
    title: "Kinde Auth",
    description: "Powerful user authentication that integrates in minutes.",
    segment: "kinde",
    icon: "fingerprint",
  },
  {
    href: "https://ui.shadcn.com/",
    title: "Shadcn/ui",
    description: "Beautifully designed components that you can copy and paste into your apps.",
    segment: "shadcn",
    icon: "shadcn",
  },
  {
    href: "https://tailwindcss.com/",
    title: "Tailwind",
    description: "Rapidly build modern websites without ever leaving your HTML.",
    segment: "tailwind",
    icon: "tailwind",
  },
  {
    href: "https://tailwindcss.com/",
    title: "NextJS",
    description: "Rapidly build modern websites without ever leaving your HTML.",
    segment: "next",
    icon: "next",
  },
  {
    href: "https://vercel.com/",
    title: "Vercel",
    description: "Your complete platform for the web.",
    segment: "vercel",
    icon: "vercel",
  },
  {
    href: "https://plausible.io/",
    title: "Plausible",
    description: "Easy to use and privacy-friendly Google Analytics alternative.",
    segment: "plausible",
    icon: "plausible",
  },
];

export const marketingPagesConfig = [
  {
    href: "/product",
    title: "Product",
    description: "All product features for OpenStatus",
    segment: "",
    icon: "package",
    children: marketingProductPagesConfig,
  },
  {
    href: "/tech-stack",
    description: "The Astroport Tech Stack",
    title: "Tech Stack",
    segment: "",
    icon: "library",
    children: marketingResourcePagesConfig,
  },
  {
    href: "/pricing",
    title: "Pricing",
    description: "The pricing for OpenStatus.",
    segment: "pricing",
    icon: "credit-card",
  },
  {
    href: "https://docs.astroport.it",
    description: "The documentation for Astroport.",
    title: "Docs (soon)",
    segment: "docs",
    icon: "book",
  },
];

export function getPageBySegment(
  segment,
  currentPage = pagesConfig,
) {
  if (typeof segment === "string") {
    const page = currentPage.find((page) => page.segment === segment);
    return page;
  }
  if (Array.isArray(segment) && segment.length > 0) {
    const [firstSegment, ...restSegments] = segment;
    const childPage = currentPage.find((page) => page.segment === firstSegment);
    if (childPage?.children) {
      return getPageBySegment(restSegments, childPage.children);
    }
    return childPage;
  }
  return undefined;
}
