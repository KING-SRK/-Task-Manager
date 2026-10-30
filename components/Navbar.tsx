"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms", href: "/terms" },
    { name: "Support", href: "/support" },
  ];

  return (
    <header className="border-b border-slate-100 bg-white/90 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-orange-500 to-amber-500 flex items-center justify-center font-bold text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
            TM
          </div>
          <span className="font-bold text-base tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
            Task Manager
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-xs font-semibold text-slate-600">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors ${
                  isActive
                    ? "text-orange-600 font-bold"
                    : "hover:text-orange-600 text-slate-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
