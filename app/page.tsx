import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  Flame,
  Lock,
  FolderPlus,
  ListTodo,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const features = [
    {
      title: "Daily & Upcoming Tasks",
      desc: "Organize into Today & Upcoming with custom alerts and time pickers.",
      icon: CheckCircle2,
      color: "text-orange-600 bg-orange-50 border-orange-200",
    },
    {
      title: "Goals & Streaks",
      desc: "Build habits with visual calendar views and consistency streak stats.",
      icon: Flame,
      color: "text-rose-600 bg-rose-50 border-rose-200",
    },
    {
      title: "Notes & Folders",
      desc: "Quick ideas arranged in custom color-coded category folders.",
      icon: FolderPlus,
      color: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      title: "Smart Checklists",
      desc: "Interactive check-off lists for daily routines, groceries, and sub-tasks.",
      icon: ListTodo,
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      title: "Private Vault",
      desc: "Confidential folders protected by local biometric and passcode security.",
      icon: Lock,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
  ];

  // 📸 আসল স্ক্রিনশটের তালিকা
  const screenshots = [
    {
      name: "Daily Tasks",
      desc: "Today & Upcoming Schedule",
      src: "/screenshots/tasks.jpeg",
    },
    {
      name: "Goal Habit",
      desc: "Target & Active Trackers",
      src: "/screenshots/goals.jpeg",
    },
    {
      name: "Calendar Streak",
      desc: "Consistency & Monthly Stats",
      src: "/screenshots/streaks.jpeg",
    },
    {
      name: "Notes & Checklists",
      desc: "Keep Notes & Action Items",
      src: "/screenshots/notes.jpeg",
    },
    {
      name: "Folder Vault",
      desc: "Categories & Private Lock",
      src: "/screenshots/folders.jpeg",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-slate-900 font-sans flex flex-col">
      {/* 🚀 Hero Section (Expanded Width) */}
      <section className="w-full py-16 lg:py-24 px-6 sm:px-12 lg:px-20 text-center space-y-6 bg-linear-to-b from-orange-50/40 via-orange-50/10 to-white">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/70 border border-orange-200 text-orange-800 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-orange-600" /> Your Daily
          Productivity Companion – Works Offline
        </span>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Master Your Day with <br /> <span className="text-orange-600">Tasks</span>,{" "}
          <span className="text-amber-500">Goals</span> &{" "}
          <span className="text-rose-500">Notes</span>.
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
          Task Manager by{" "}
          <strong className="text-slate-900">
            GrowTech Software Development Services
          </strong>{" "}
          is a 100% offline-first workspace to manage daily routines, track
          streak habits, and secure notes locally on your device.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.indusappstore.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
          >
            <Smartphone className="w-4 h-4" />
            <span>Get on Indus Appstore</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 📱 Real App Screenshots Section (Full Width Responsive Grid) */}
      <section className="w-full py-12 px-6 sm:px-12 lg:px-20 bg-slate-50/50 border-y border-slate-100">
        <div className="mb-10 text-center space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-600 font-bold">
            Live Preview
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
            Simple, Minimal & Powerful
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            A sneak peek inside the Task Manager Android interface.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {screenshots.map((screen, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center text-center space-y-3"
            >
              {/* Smartphone Frame Container */}
              <div className="relative w-full aspect-9/19 rounded-2xl sm:rounded-3xl p-1 bg-slate-900 shadow-xl shadow-slate-900/10 ring-1 ring-slate-800/80 overflow-hidden group-hover:-translate-y-1.5 group-hover:shadow-2xl transition-all duration-300">
                <div className="relative w-full h-full rounded-[14px] sm:rounded-[22px] overflow-hidden bg-[#0c0d11]">
                  <Image
                    src={screen.src}
                    alt={screen.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    priority={idx < 2}
                  />
                </div>
              </div>

              {/* Title & Caption */}
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                  {screen.name}
                </p>
                <p className="text-[10px] sm:text-[11px] text-slate-500 font-mono mt-0.5">
                  {screen.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ⚡ Core Features (Wide Responsive Grid) */}
      <section
        id="features"
        className="w-full py-16 px-6 sm:px-12 lg:px-20 bg-white"
      >
        <div className="mb-12 text-center space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-600 font-bold">
            Features
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
            Everything in One Place
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Zero cloud sync, lightning-fast local performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/60 border border-slate-200 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/5 transition-all space-y-3"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center border ${f.color}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">{f.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 🔒 Offline Privacy Banner */}
      <section className="w-full py-12 px-6 sm:px-12 lg:px-20 bg-slate-50/50 border-t border-slate-100">
        <div className="w-full p-8 rounded-3xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Your Data Stays on Your Device
              </h3>
              <p className="text-xs text-slate-600">
                No mandatory account, zero external tracking, 100% offline
                storage.
              </p>
            </div>
          </div>
          <Link
            href="/privacy-policy"
            className="text-xs font-bold text-orange-600 hover:underline shrink-0"
          >
            Read Privacy Policy →
          </Link>
        </div>
      </section>
    </div>
  );
}
