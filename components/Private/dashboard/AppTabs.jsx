"use client"

import { usePathname } from "next/navigation";

import { TabsContainer, TabsLink } from "./utils/TabsUtils";
import { pagesConfig } from "@/config/pages";

export function AppTabs() {

  const pathname = usePathname()


  return (
    <div className="-mb-3">
      <TabsContainer>
        {pagesConfig.map(({ title, href }) => {
          return (
            <TabsLink
              key={title}
              active={pathname === href ? true : false}
              href={href}
              prefetch={false}
            >
              {title}
            </TabsLink>
          );
        })}
      </TabsContainer>
    </div>
  );
}

