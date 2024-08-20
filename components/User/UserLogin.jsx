import { getKindeServerSession, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server"
import { UserNav } from "./UserNav";
import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";

export async function UserLogin() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return(
    <div>
    { user ? (
      <Button className="rounded-full h-8 text-xs font-semibold" size="sm">
        <LoginLink className="flex gap-2">
          <Sparkles className="h-3.5 w-3.5"/>
          Get started
        </LoginLink>
      </Button>
      ) : (
        <UserNav email={user.email} name={user.given_name} userImage={user.picture}/>
        )}
    </div>

  )
  
}