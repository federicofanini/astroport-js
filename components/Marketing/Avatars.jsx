import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import Link from "next/link"

export default function Avatars() {
  return (
    <div className="flex items-center w-full md:ml-72 mb-6">
      <div className="flex items-center -space-x-1 [&>span]:ring-4 [&>span]:ring-background">
      <Link href={"https://x.com/marc_louvion"} target="_blank">
        <Avatar>
          <AvatarImage src="/avatars/marc.jpg" alt="@marc_lou" />
          <AvatarFallback>ML</AvatarFallback>
        </Avatar>
      </Link>
      <Link href={"https://x.com/tibo_maker"} target="_blank">
        <Avatar>
          <AvatarImage src="/avatars/tibo.jpg" alt="@tibo_maker" />
          <AvatarFallback>TM</AvatarFallback>
        </Avatar>
      </Link>
      <Link href={"https://x.com/nico_jeannen"} target="_blank">
        <Avatar>
          <AvatarImage src="/avatars/nico.jpg" alt="@nico_jeannen" />
          <AvatarFallback>NJ</AvatarFallback>
        </Avatar>
      </Link>
      <Link href={"https://x.com/FedericoFanini0"} target="_blank">
        <Avatar>
          <AvatarImage src="/avatars/ff.jpg" alt="@FedericoFanini0" />
          <AvatarFallback>FF</AvatarFallback>
        </Avatar>
      </Link>
      </div>
      <div className="grid ml-6 gap-2">
        <div className="flex gap-1">
          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500"/>
          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500"/>
          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500"/>
          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500"/>
          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500"/>
        </div>
        <span className="flex text-xs font-medium"><strong className="mr-1">tons</strong> of makers ship faster</span>
      </div>
    </div>
  )
}