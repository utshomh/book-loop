import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BookLoop",
  description:
    "BookLoop is a web application for browsing and listing second-hand books. Users can publicly explore available books and view detailed information, while authenticated users can register, log in, and add new book listings.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen items-center justify-between gap-2 px-2`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="w-full">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
