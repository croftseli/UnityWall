"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NavShell({ children }) {
  const pathname = usePathname();

  // hide only on /techSupport
  const hideNav = pathname?.startsWith("/techSupport");

  return (
    <>
      {!hideNav && <Navbar />}
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
