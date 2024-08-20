import "./globals.css";

import { Inter } from "next/font/google";
import LocalFont from "next/font/local";

import { Toaster } from "@/components/ui/sonner";

import {
  defaultMetadata,
  ogMetadata,
  twitterMetadata,
} from "@/app/shared-metadata";
import { TailwindIndicator } from "@/components/ui/tailwind-indicator";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Background from "@/components/Marketing/Background";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export const metadata = {
  ...defaultMetadata,
  twitter: {
    ...twitterMetadata,
  },
  openGraph: {
    ...ogMetadata,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script defer data-domain="astroport.it" src="https://plausible.io/js/script.js"></script>
      </head>
      <body
        className={`${
          inter.className
        } ${calSans.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Background>{children}</Background>
          <Toaster richColors />
          <TailwindIndicator />
          <Analytics/>
          <SpeedInsights/>
        </ThemeProvider>
      </body>
    </html>
  );
}
