import { UserNav } from "@/components/User/UserNav";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function User() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  
  return (
    <>
    { user ? (
      <div className="">
        
        <UserNav name={user.given_name} email={user.email} userImage={user.picture} />
      </div>
    ) : (
      <div />
    )}
    </>
  )
}
