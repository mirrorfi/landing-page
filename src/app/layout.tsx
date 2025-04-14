import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Bold.otf",
  variable: "--font-satoshi",
  style: "bold",
  display: "swap",
});

const univaNova = localFont({
  src: "../../public/fonts/UnivaNova-Regular.otf",
  variable: "--font-univa",
});

export const metadata: Metadata = {
  title: "MirrorFi",
  description:
    "MirrorFi combines Social Alpha Calls and Yield Earning to provide an intuitive platform to share sophisticated Yield Farming Strategies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${satoshi.variable} ${univaNova.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
