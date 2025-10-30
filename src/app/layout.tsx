import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { url } from "inspector";
import { URL } from "url";
import { Suspense } from "react";
import Loading from "./loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeNest",
  description: "Your Ultimate Coding Companion",

  openGraph: {
    title: "CodeNest",
    description:"CodeNest offers comprehensive coding tutorials, hands-on projects, and a supportive community to help you become a skilled developer.",
    images:[
     {
       url:"https://play-lh.googleusercontent.com/_n82cuurP33mS14_UGZljLrg44nFyx5T22YY54g5WVK7q3HrwQmKarPEdZbkafWEBY2k=w240-h480-rw",
      width: 1200,
      height: 630,
      alt: "CodeNest - Learn and Code",
     }
    ]
  }
 
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Suspense fallback ={<Loading/>} >
        {children}
       </Suspense>
      </body>
    </html>
  );
}