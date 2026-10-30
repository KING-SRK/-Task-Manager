import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Flame,
  Lock,
  FolderPlus,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-white text-slate-800 font-sans min-h-screen flex flex-col">
      {/* 🚀 Hero Section */}
      <section className="py-20 px-6 text-center max-w-3xl mx-auto space-y-6">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5 text-orange-500" /> Designed for
          Clean Focus & Pure Offline Privacy
        </span>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Master Your Day with <span className="text-orange-600">Tasks</span>,{" "}
          <span className="text-amber-500">Goals</span> &{" "}
          <span className="text-rose-500">Notes</span>.
        </h1>

        <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          The offline-first personal productivity app. Schedule daily routines,
          build streaks with smart habit tracking, and lock your secret thoughts
          in a private vault.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.indusappstore.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all inline-flex items-center gap-2 active:scale-95"
          >
            <Smartphone className="w-4 h-4" />
            <span>Get it on Indus Appstore</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ⚡ Features Grid */}
      <section id="features" className="py-16 px-6 max-w-5xl mx-auto w-full">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Built to Keep Life Organised
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            All tools you need, packaged into an ultra-clean user interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/5 transition-all space-y-3">
            <div className="w-11 h-11 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Smart Tasks</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Organize into Today & Upcoming. Pick custom reminder times so you
              never miss a deadline.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-rose-300 hover:shadow-lg hover:shadow-rose-500/5 transition-all space-y-3">
            <div className="w-11 h-11 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              Goals & Streaks
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Track consistency with interactive calendar views, streak
              counters, and habit completion stats.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-500/5 transition-all space-y-3">
            <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
              <FolderPlus className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              Notes & Lists
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Jot quick thoughts and create structured checklist items
              categorized by custom color tags.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/5 transition-all space-y-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              Private Vault
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Protect confidential checklists and sensitive personal notes with
              fingerprint and password lock.
            </p>
          </div>
        </div>
      </section>

      {/* 🔒 Offline Privacy Promise */}
      <section className="py-12 px-6 max-w-4xl mx-auto w-full text-center bg-slate-50 rounded-3xl border border-slate-200 space-y-4 my-8">
        <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">
          100% Offline-First Architecture
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          No sign-in required. Your tasks, personal notes, and streak data stay
          strictly inside your phone&apos;s local memory.
        </p>
      </section>

      {/* 🦶 Footer */}
      <footer className="mt-auto border-t border-slate-100 bg-slate-50 py-10 px-6 text-center text-xs text-slate-500 space-y-3">
        <div className="flex flex-wrap items-center justify-center gap-6 font-medium text-slate-600">
          <Link href="/privacy-policy" className="hover:text-orange-600">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-orange-600">
            Terms & Conditions
          </Link>
          <Link href="/support" className="hover:text-orange-600">
            Customer Support
          </Link>
        </div>
        <p>© 2026 Task Manager • Developed by Grow Tech</p>
      </footer>
    </div>
  );
}
