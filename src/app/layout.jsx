import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
//import { CartProvider } from '@/context/CartContext';
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UnityWall - Web Development",
  description:
    "UnityWall is a web development agency that specializes in building websites and web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
