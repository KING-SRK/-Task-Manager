"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms", href: "/terms" },
    { name: "Support", href: "/support" },
  ];

  return (
    <header className="border-b border-slate-100 bg-white/95 backdrop-blur-md sticky top-0 z-50 px-6 sm:px-12 lg:px-20 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-3 group"
        >
          {/* 🖼️ Logo Image Container */}
          <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-md shadow-orange-500/10 group-hover:scale-105 transition-transform bg-slate-100 shrink-0">
            <Image
              src="/logo.png"
              alt="Task Manager Logo"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
              Task Manager
            </span>
            <span className="text-[10px] font-mono text-slate-400 -mt-1">
              by Grow Tech
            </span>
          </div>
        </Link>

        {/* Desktop Navigation (max-w-7xl এর সাথে প্রশস্ত ও ক্লিন) */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-600">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? "text-orange-600 font-bold border-b-2 border-orange-500"
                    : "hover:text-orange-600 text-slate-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <a
            href="https://www.indusappstore.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm shadow-orange-500/20 active:scale-95"
          >
            <span>Appstore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-3 border-t border-slate-100 mt-3 space-y-2 max-w-7xl mx-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-orange-50 text-orange-600 font-bold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-orange-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-2">
            <a
              href="https://www.indusappstore.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-orange-500 text-white font-bold text-xs uppercase tracking-wider shadow-sm"
            >
              <span>Download on Indus Appstore</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
