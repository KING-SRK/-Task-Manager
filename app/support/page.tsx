import React from "react";
import {
  Mail,
  MessageSquare,
  HelpCircle,
  Bell,
  Lock,
  HardDrive,
  Trash2,
  Moon,
  FolderSync,
  ShieldCheck,
} from "lucide-react";

export default function SupportPage() {
  const faqs = [
    {
      q: "How can I create and schedule upcoming tasks?",
      a: "Tap the floating '+' button from the Tasks screen. Enter your task title, pick a scheduled time, and choose whether it belongs to Today or Upcoming. Tap 'Save Task' to register it immediately.",
      icon: Bell,
    },
    {
      q: "Why am I not receiving scheduled reminder alarms on time?",
      a: "Aggressive battery optimization in Android skins (such as MIUI, ColorOS, FunTouch, OxygenOS) can freeze background services. Go to your phone's Settings ➔ App Info ➔ Task Manager ➔ Battery Saver and select 'No Restrictions', then toggle on 'Autostart'.",
      icon: Bell,
    },
    {
      q: "Can I use Task Manager without an active internet connection?",
      a: "Yes, 100%. Task Manager is architected as an offline-first mobile companion. All features—including tasks, habits, streaks, notes, and checklists—operate completely without Wi-Fi or mobile data.",
      icon: HardDrive,
    },
    {
      q: "Where is my data stored? Does GrowTech Software Development Services have access to it?",
      a: "Your data never leaves your physical phone. Everything is stored locally in your device's sandboxed storage. GrowTech Software Development Services does not maintain remote servers or collect copies of your entries.",
      icon: ShieldCheck,
    },
    {
      q: "What happens to my tasks and notes if I uninstall the app?",
      a: "Because all data resides strictly inside your phone's application sandbox, uninstalling the app or tapping 'Clear App Storage' in Android system settings will permanently delete your stored notes and tasks.",
      icon: Trash2,
    },
    {
      q: "How does the Private Vault / 'Set as private' folder work?",
      a: "You can move confidential checklists or notes into a private folder. Opening it prompts your device's biometric fingerprint sensor or your device security PIN. We cannot recover or bypass forgotten passwords remotely.",
      icon: Lock,
    },
    {
      q: "How can I move notes between folders?",
      a: "Open any note, tap the folder icon at the top right, and choose your preferred destination category (e.g., Urgent, Study, Assets, or Default) to reclassify it instantly.",
      icon: FolderSync,
    },
    {
      q: "How do I permanently delete an item?",
      a: "Deleted items first move into the 'Recently Deleted' folder to prevent accidental loss. From there, you can either restore them back or tap 'Delete Permanently' to purge them from device storage.",
      icon: Trash2,
    },
    {
      q: "Does Task Manager support Dark Mode?",
      a: "Task Manager features a default high-contrast dark theme optimized for OLED screens, reducing eye strain and saving phone battery life during nighttime scheduling.",
      icon: Moon,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-slate-800 font-sans flex flex-col">
      {/* 🧭 Top Breadcrumb & Hero (max-w-7xl) */}
      <section className="w-full py-12 lg:py-16 px-6 sm:px-12 lg:px-20 bg-slate-50/70 border-b border-slate-100">
        <div className="w-full max-w-7xl mx-auto space-y-4">

          <div className="flex items-center gap-2 text-orange-600 text-xs font-mono font-bold tracking-wider uppercase">
            <HelpCircle className="w-4 h-4" />
            <span>GrowTech Software Development Services Help Desk</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Customer Support & Help Center
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
            Have questions about offline local storage, notification reminders,
            or Private Vault features in <strong>Task Manager</strong>? Find
            quick answers or reach out directly to our team.
          </p>
        </div>
      </section>

      {/* 📬 Direct Support Contact Channels (max-w-7xl) */}
      <section className="w-full py-12 px-6 sm:px-12 lg:px-20 border-b border-slate-100">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Card */}
            <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">
                Official Support Email
              </h3>
              <p className="text-xs text-slate-500">
                Send bug logs, feature suggestions, or Indus Appstore feedback.
                We respond within 24–48 business hours.
              </p>
              <a
                href="mailto:growtechofficials.support@gmail.com"
                className="text-sm font-bold text-orange-600 hover:underline block pt-1 break-all"
              >
                growtechofficials.support@gmail.com
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">
                Developer WhatsApp Desk
              </h3>
              <p className="text-xs text-slate-500">
                Direct community line for quick troubleshooting and instant
                inquiries with the GrowTech Software Development Services team.
              </p>
              <a
                href="https://wa.me/+918902709631?text=Hi%20GrowTech%20Software%20Development%20Services,%20I%20need%20assistance%20regarding%20Task%20Manager%20app."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-emerald-600 hover:underline block pt-1"
              >
                +91 8902709631 (Chat on WhatsApp) →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ❓ Comprehensive FAQ Grid (max-w-7xl) */}
      <section id="faq" className="w-full py-16 px-6 sm:px-12 lg:px-20">
        <div className="w-full max-w-7xl mx-auto space-y-10">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-600 font-bold">
              Troubleshooting & Guides
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Clear guidance on how to get the most out of your offline setup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-slate-50/50 border border-slate-200 space-y-2.5 hover:border-orange-300 hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2.5 text-orange-600">
                    <Icon className="w-4 h-4 shrink-0" />
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {faq.q}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
