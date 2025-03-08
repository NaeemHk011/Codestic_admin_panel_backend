'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import SidebarComponent from "./components/Sidebar";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"], 
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 const path = usePathname();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > {
        path === '/login' || path === '/registration' ? null : <Navbar />
      }
      {
        path === '/login' || path === '/registration' ? null : <SidebarComponent
        />  
      }
        {children}
      </body>
    </html>
  );
}
