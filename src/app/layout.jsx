import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import "./styles/typography.css";
import NavShell from "./nav-shell";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UnityWall - Web Development",
  description:
    "UnityWall is a web development agency that specializes in building websites and web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="!bg-gray-700"
        style={{ backgroundColor: "rgb(55, 65, 81)" }}
      >
        <NavShell>{children}</NavShell>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
