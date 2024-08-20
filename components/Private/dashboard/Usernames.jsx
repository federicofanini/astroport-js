"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { updateUsernames } from "@/app/actions";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { SubmitButton } from "../Buttons";
import { Github } from "lucide-react";
import Image from "next/image";

const initialState = {
  message: "",
  status: "",
};

export function Usernames({ github_username, discord_username, }) {
  const [state, formAction] = useFormState(updateUsernames, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.status === "green") {
      toast({
        title: "Usernames shipped!",
        description: state.message,
      });
    } else if (state?.status === "error") {
      toast({
        title: "Something went wrong...",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (

        <div className="grid gap-6">
          <form action={formAction} suppressHydrationWarning>
            <p className="text-sm font-semibold text-primary mb-1">Insert your usernames</p>
            <p className="text-xs text-muted-foreground mb-1">
            Enter your GitHub username to get access to the repo. 
            You&apos;ll receive an email from GitHub to confirm your access.
            </p>

            
            <Separator className="mb-2 mt-2" />
            
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
              <div>
              <Label className="text-sm flex gap-2 items-center">
                <Github className="h-3.5 w-3.5"/>
                GitHub Username
              </Label>
              <Input
                defaultValue={github_username ?? undefined}
                name="github_username"
                required
                className="mt-2"
                min={2}
                maxLength={21}
              />
              </div>
              <div>
              <Label className="text-sm flex gap-2 items-center">
                <Image 
                  src={"/discord.svg"}
                  width={15}
                  height={15}
                  alt="ds"
                />
                Discord Username
              </Label>
              <Input
                defaultValue={discord_username ?? undefined}
                name="discord_username"
                required
                className="mt-2"
                min={2}
                maxLength={21}
              />
              </div>
            </div>

            {state?.status === "error" && (
              <p className="text-destructive mt-1">{state.message}</p>
            )}

            <div className="w-full flex mt-5 gap-x-5 justify-center">
              <SubmitButton text="Ship" />
            </div>
          </form>
          
            


        </div>

  );
}

