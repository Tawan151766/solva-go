import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomNav from "./components/layout/BottomNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SolvaGo - Professional Web Solutions",
  description: "Expert web development, maintenance, and digital solutions for your business. Transform your online presence with SolvaGo.",
  keywords: "web development, website maintenance, digital solutions, business websites",
  authors: [{ name: "SolvaGo Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fcfbf8" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fcfbf8] text-[#1d180c]`}
      >
        <div id="root" className="min-h-screen flex flex-col">
          <main className="flex-1 pb-20">
            {children}
          </main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
