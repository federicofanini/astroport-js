import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { Sparkles } from "lucide-react";

export function GetStarted() {
  return(
    <Button className="rounded-full h-8 text-xs font-semibold" size="sm">
      <LoginLink className="flex gap-2">
        <Sparkles className="h-3.5 w-3.5"/>
        Get started
      </LoginLink>
    </Button>
  )
  
}