import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navigation/navbar";
import BottomNav from "./components/newsLine";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
        <Navbar />
        <BottomNav />

        {/* <HeaderTop/> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
