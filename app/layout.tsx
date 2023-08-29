"use client";
import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {ThemeProvider} from "@/components/providers/theme-provider";
import {Hydrate, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import React from "react";
import {metadata} from "@/constants/metadata";
const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}: {children: React.ReactNode}) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
