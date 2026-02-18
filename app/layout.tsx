import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Open API Hub - API Directory",
  description: "A collective list of free APIs for use in software and web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} antialiased bg-background-dark text-white font-display flex h-screen overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
