import { AppHeader } from "@/components/Private/dashboard/AppHeader";
import AppPageLayout from "@/components/Private/layout/AppPageLayout";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster"

export default async function AppLayout({ children }) {
  
  // Private route
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();

  if (!isAuthenticated || user==null) {
    return redirect(
      "api/auth/login"
    );
  }

  return (
    <div className="container relative mx-auto flex min-h-screen w-full flex-col items-center justify-center gap-6 p-4">
      <AppHeader />
      <main className="z-10 flex w-full flex-1 flex-col items-start justify-center">
        <AppPageLayout>
          {children}
        </AppPageLayout>
      </main>
      <Toaster />
    </div>
  );
}
