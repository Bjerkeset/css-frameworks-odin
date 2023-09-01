import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "./globals.css";
// import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {ThemeProvider} from "@/components/providers/theme-provider";
// import {Hydrate, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import React from "react";
import TanstackProvider from "@/components/providers/tanstack-provider";
const inter = Inter({subsets: ["latin"]});
import {Toaster} from "@/components/ui/toaster";

export default function RootLayout({children}: {children: React.ReactNode}) {
  // const [queryClient] = React.useState(() => new QueryClient());
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <TanstackProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
