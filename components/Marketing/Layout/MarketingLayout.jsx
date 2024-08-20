import PlausibleProvider from "next-plausible";
import { MarketingHeader } from "../MarketingHeader";
import { MarketingFooter } from "../MarketingFooter";


export function MarketingLayout({ children }) {
  return (
    <PlausibleProvider domain="openstatus.dev">
        <main className="flex min-h-screen w-full flex-col items-center justify-center gap-8 p-4 md:p-8">
          <MarketingHeader className="mx-auto w-full max-w-4xl" />
          <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-start justify-center">
            {children}
          </div>
          <MarketingFooter className="mx-auto w-full max-w-4xl" />
        </main>
    </PlausibleProvider>
  );
}
