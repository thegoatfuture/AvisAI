'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AnimatedLogo from "./AnimatedLogo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex justify-between items-center p-4 sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-marque/90 backdrop-blur border-b border-white/10"
          : "bg-marque"
      } text-white`}
    >
      <AnimatedLogo />
      <nav className="flex gap-4 items-center">
        <Link href="/features">Fonctionnalités</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">À propos</Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
