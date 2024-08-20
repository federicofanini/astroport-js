import { Button } from "@/components/ui/button"
import { routes } from "@/lib/routes"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { Check, Zap } from "lucide-react"
import Link from "next/link"

export async function GetAccess() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  return(
    <>
    { user ? (
      <Button className="w-full text-white font-semibold bg-green-600 hover:bg-green-600">
        <Link href={routes.private.getAccess} className="flex items-center gap-2">
        <Check className="mr-2 h-4 w-4" /> Get Access for € 29
        </Link>
      </Button>
    ) : (
      <Button className="w-full text-white font-semibold">
        <Link href={routes.api.login} className="flex items-center gap-2">
        <Zap className="mr-2 h-4 w-4" /> Get Early Access
        </Link>
      </Button>
    )}
    </>
  )
  
}