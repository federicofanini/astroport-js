
import { GetAccess } from "@/components/Private/dashboard/GetAccess";
import { Header } from "@/components/Private/layout/Header";
import { Separator } from "@/components/ui/separator";

export default async function Access() {
  
  
  return(
    <>
    <Header title={"Get Access"} className="font-semibold"/>
    <Separator />
    <GetAccess />
    
    
    </>
    
  )
}