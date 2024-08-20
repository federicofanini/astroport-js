"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export function TabsContainer({
  className,
  direction = "horizontal",
  position = "end",
  children,
}) {
  return (
    <TabsContext.Provider value={{ direction, position }}>
      <nav
        className={cn(
          "flex",
          {
            "items-center overflow-x-auto": direction === "horizontal",
          },
          className,
        )}
      >
        <ul
          className={cn("flex", {
            "flex-row": direction === "horizontal",
            "flex-col": direction === "vertical",
          })}
        >
          {children}
        </ul>
      </nav>
    </TabsContext.Provider>
  );
}

export function TabsLink({
  children,
  active,
  className,
  disabled,
  ...props
}) {
  const { direction, position } = useTabs();
  return (
    <li
      className={cn("flex shrink-0 list-none border-transparent", {
        "border-white": active,
        "pointer-events-none opacity-70": disabled,
        "border-b-2": position === "end" && direction === "horizontal",
        "border-l-2": position === "start" && direction === "vertical",
        // ... missing t, r
      })}
    >
      <Link
        className={cn(
          "rounded-md font-medium text-muted-foreground text-sm hover:text-primary",
          {
            "text-white": active,
            "px-4 pt-2 pb-3": direction === "horizontal",
            "px-4 py-2.5": direction === "vertical",
          },
          className,
        )}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
}

// --------------

const TabsContext = React.createContext(null);

const useTabs = () => {
  const tabsContext = React.useContext(TabsContext);

  if (!tabsContext) {
    throw new Error("useTabs has to be used within <TabsContext.Provider>");
  }

  return tabsContext;
};
