import type { Metadata } from "next";
import { auth } from "../../lib/auth";
import { Providers } from "./providers";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/theme/Navbar/page";
import Footer from "@/components/theme/Footer/page";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = auth();
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Providers session={await session}>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
