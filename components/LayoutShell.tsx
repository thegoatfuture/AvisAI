"use client";

import React from "react";
import { usePathname } from "next/navigation";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import PageWrapper from "@/components/PageWrapper";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen">
        {isDashboard && <Sidebar />}
        <PageWrapper>{children}</PageWrapper>
      </div>
    </>
  );
}
