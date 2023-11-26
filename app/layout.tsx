import { ThemeProvider } from "@/components/providers/theme-provider";
import { ToastProvider } from "@/components/providers/toaster-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

import { Radio_Canada } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const font = Radio_Canada({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AutoKey",
  description:
    "Our team of experts can help you find the perfect car key for your vehicle, no matter what your needs are.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hy" suppressHydrationWarning>
      <Head>
        <title>AutoKey</title>
      </Head>
      <body className={cn(font.className, "bg-[white] dark:bg-[#111132]")}>
        <ToastProvider />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="discord-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
