"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SocialIconButton } from "@/components/ui/social-icons-button";
import { marketingPagesConfig } from "@/config/pages";
import { socialsConfig } from "@/config/social";
import { useWindowScroll } from "@/hooks/use-window-scroll";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, useEffect, useMemo, useState } from "react";


export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [{ y }] = useWindowScroll();
  const _isScroll = useMemo(() => y && y > 0, [y]);

  useEffect(() => {
    setOpen(false);
  }, []); // remove searchParams if not needed

  return (
    <Sheet open={open} onOpenChange={(value) => setOpen(value)}>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="rounded-full"
          aria-label="menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className={cn("flex flex-col")}>
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-1 flex-col justify-between gap-8">
          <ul className="grid gap-1">
            {marketingPagesConfig.map(({ href, title, icon, children }) => {
              if (!children) {
                const isExternal = href.startsWith("http");
                const _externalProps = isExternal ? { target: "_blank" } : {};
                const _isActive = pathname.startsWith(href);
                return (
                  <li key={href} className="w-full">
                    <ListItemSingle
                      title={title}
                      href={href}
                      icon={icon}
                      onClick={() => setOpen(false)}
                    />
                  </li>
                );
              }

              return (
                <li key={href}>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={title}>
                      <AccordionTrigger>{title}</AccordionTrigger>
                      <AccordionContent>
                        <ul>
                          {children.map((page) => {
                            const { href, title, icon } = page;
                            const isExternal = href.startsWith("http");
                            const _externalProps = isExternal
                              ? { target: "_blank" }
                              : {};
                            const _isActive = pathname.startsWith(href);
                            return (
                              <li key={href} className="w-full">
                                <ListItem
                                  title={title}
                                  href={href}
                                  icon={icon}
                                  onClick={() => setOpen(false)}
                                />
                              </li>
                            );
                          })}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-between gap-2">
            <ul className="flex flex-wrap gap-2">
              {socialsConfig.map((props, _i) => (
                <li key={props.title}>
                  <SocialIconButton {...props} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

const ListItem = forwardRef(({ className, title, children, icon, ...props }, ref) => {
  // TODO: if external, add Arrow-Right-Up Icon
  const Icon = Icons[icon];
  return (
    <li className="group">
      <Link
        ref={ref}
        className={cn(
          "flex select-none items-center gap-2 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className,
        )}
        {...props}
      >
        <Icon className="h-4 w-4" />
        <div className="font-medium text-sm leading-none">{title}</div>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

const ListItemSingle = forwardRef(({ className, title, children, icon, ...props }, ref) => {
  // TODO: if external, add Arrow-Right-Up Icon
  const _Icon = Icons[icon];
  return (
    <li className="group">
      <Link
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between border-b py-4 font-medium transition-all hover:underline",
          className,
        )}
        {...props}
      >
        {title}
      </Link>
    </li>
  );
});
ListItemSingle.displayName = "ListItemSingle";
