
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Usernames } from "./Usernames";
import { unstable_noStore as noStore } from "next/cache";
import { prisma } from "@/app/lib/db";
import { user } from "@/app/actions";
import { routes } from "@/lib/routes";

async function getData(userId) {
  noStore();
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      github_username: true,
      discord_username: true,
    },
  });

  return data;
}

export async function GetAccess() {
  const userId = await user();
  const data = await getData(userId.id);

  return(
    <div className="grid md:grid-cols-5 gap-4">
      <div className="grid col-span-3 auto-rows-max items-start gap-4">
        <CardContent>
          <div className="grid gap-6">
            
            <Usernames
              github_username={data?.github_username || undefined}
              discord_username={data?.discord_username || undefined} 
            />

            <div className="grid gap-3">
              <Label htmlFor="steps">3 easy steps</Label>
              <ul className="text-muted-foreground text-sm">
                <li>1. Request Github access</li>
                <li>2. Accept invitation in emails</li>
                <li>3. Start with the <Link href={"#"} className="font-semibold underline underline-offset-2">documentation</Link></li>
              </ul>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="steps">Build with makers</Label>
              <Button className="bg-white font-semibold text-indigo-500 hover:bg-slate-100">
                <Link href={"#"} className="flex gap-2 items-center">
                <Image 
                  src={"/discord.svg"}
                  width={25}
                  height={25}
                  alt="discord"
                />
                Join Discord
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </div>
      <div className="grid col-span-2 auto-rows-max items-start gap-4">
          <CardHeader>
            <CardTitle className="grid gap-2 items-center mb-8">
              <div className="flex gap-2 items-center">
              <Avatar>
                <AvatarImage src="/avatars/ff.jpg" alt="federicofan" />
                <AvatarFallback>FF</AvatarFallback>
              </Avatar>
              <div>
                Hello, buddy 👋🏼
                <p className="grid text-muted-foreground text-xs mt-1">Excited to see what you build!</p>
              </div>
              </div>
            </CardTitle>
            <CardDescription>
              I&apos;m a tech startup founder and, actually, I code bugs for a living.
              <br />
              <br />
              The concept of prioritizing speed, learning, and iteration over perfection resonated deeply with me. 
              <br />
              <br />
              I fully embraced this mindset, diving into it and exploring everything I could about.
              <br />
              <br />
              Thanks for your trust, let&apos;s do amazing things together!
              <br />
              <br />
              <span className="italic">- Federico</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            
            <Button size="sm" variant="secondary">
              <Link href={routes.social.ff} target="_blank" className="flex gap-2 items-center">
              <Twitter className="h-4 w-4"/>
              Connect with me
              </Link>
            </Button>
          </CardContent>
      </div>
    </div>
  )
}