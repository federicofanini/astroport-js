"use client"

import { marketingPagesConfig } from "@/config/pages";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";
import { Icons } from "../ui/icons";
import { usePathname } from "next/navigation";

export function NavMenu() {
  const pathname = usePathname();

  return(
    <NavigationMenu>
      <NavigationMenuList>
        {marketingPagesConfig.map((page) => {
          const { href, title, children } = page;
          if (!children) {
            return (
              <NavigationMenuItem key={title}>
                <Link href={href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "h-9 rounded-full bg-transparent text-muted-foreground hover:bg-accent/50",
                      { "text-foreground": href === pathname },
                    )}
                  >
                    {title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={href}>
              <NavigationMenuTrigger className="h-9 rounded-full bg-transparent text-muted-foreground hover:bg-transparent data-[state=open]:text-accent-foreground">
                {title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {children?.map((item) => {
                    const isExternal = item.href.startsWith("http");
                    const _externalProps = isExternal
                      ? { target: "_blank" }
                      : {};
                    const _isActive = pathname.startsWith(item.href);
                    return (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                      >
                        {item.description}
                      </ListItem>
                    );
                  })}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
  
}

const ListItem = React.forwardRef(({ className, title, children, icon, ...props }, ref) => {
  // TODO: if external, add Arrow-Right-Up Icon
  const Icon = Icons[icon];
  return (
    <li className="group">
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "flex select-none gap-3 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="self-start rounded-md border p-2 group-hover:bg-background">
            <Icon className="h-4 w-4" />
          </div>
          <div className="grid gap-1">
            <div className="font-medium text-sm leading-none">{title}</div>
            <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
