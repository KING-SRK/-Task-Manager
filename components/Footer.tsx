import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-auto border-t border-slate-200 bg-white py-8 px-6 sm:px-12 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans">
      <p>
        © 2026 Task Manager • Crafted with ❤️ in Kolkata by{" "}
        <a
          href="https://grow-tech.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-slate-800 hover:text-orange-600 transition-colors underline underline-offset-4"
        >
          GrowTech Software Development Services
        </a>
      </p>
      <div className="flex items-center gap-6 font-medium text-slate-600">
        <Link href="/" className="hover:text-orange-600 transition-colors">
          Home
        </Link>
        <Link
          href="/privacy-policy"
          className="hover:text-orange-600 transition-colors"
        >
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-orange-600 transition-colors">
          Terms
        </Link>
        <Link
          href="/support"
          className="hover:text-orange-600 transition-colors"
        >
          Support
        </Link>
      </div>
    </footer>
  );
}
