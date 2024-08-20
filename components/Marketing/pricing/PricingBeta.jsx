import { Gift } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { GetAccess } from "../Buttons/GetAccess"

const notifications = [
  {
    title: "NextJS boilerplate",
    description: "Landing Page & Dashboard",
  },
  {
    title: "Components & animations",
    description: "Powered by Shadcn/ui & TailwindCSS",
  },
  {
    title: "Auth & Database",
    description: "Kinde Auth, Supabase, Prisma",
  },
  {
    title: "Github Repo Access",
    description: "git clone astroport",
  },  {
    title: "Discord Community",
    description: "Become an Astroport community member",
  },
]


export async function PricingBeta({ className, ...props }) {

  return (
    <Card className={cn("w-full border-none", className)} {...props}>
      <CardHeader>
        <CardTitle>What you get</CardTitle>
        {/* <CardDescription>
        <div className="flex">
          <Gift className="text-green-500 h-3.5 w-3.5 animate-pulse mr-1"/>
          <p className="text-xs">
            TODO: add remaining users 
          <span className="text-green-500 font-semibold">€170 OFF</span> for the first 10 customers (9 left) 
          </p>
        </div>
        </CardDescription> */}
      </CardHeader>
      <CardContent className="grid gap-4">
        
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <GetAccess />
      </CardFooter>
    </Card>
  )
}
