import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zadanie AdSitePro",
  description: "Strona wykonana na podstawie design'u z Figmy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      {children}</body>
    </html>
  );
}
