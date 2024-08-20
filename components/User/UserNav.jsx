import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { FileCode, LogOut, ScanFace } from "lucide-react";

export function UserNav({ email, name, userImage }) {

  return (
      <DropdownMenu>
          <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                      <AvatarImage src={userImage} alt="userImage" />
                      <AvatarFallback className="text-primary">{name.slice(0, 3)}</AvatarFallback>
                  </Avatar>
              </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start" forceMount>
              <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{name}</p>
                      <p className="text-xs leading-none text-muted-foreground">{email}</p>
                  </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                      <Link href={routes.private.getAccess}>
                          <ScanFace className="h-4 w-4 mr-2" />
                          Get Access
                      </Link>
                  </DropdownMenuItem>
                  {/* <DropdownMenuItem asChild>
                      <Link href={routes.private.getAccess}>
                          <FileCode className="h-4 w-4 mr-2" />
                          Docs
                      </Link>
                  </DropdownMenuItem> */}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                  <LogoutLink className="text-red-600 font-medium">
                      <LogOut className="h-4 w-4 mr-2" />
                      Log Out
                  </LogoutLink>
              </DropdownMenuItem>

          </DropdownMenuContent>
      </DropdownMenu>
  )
}