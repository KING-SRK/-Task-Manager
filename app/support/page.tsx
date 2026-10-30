import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  MessageSquare,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 py-16 px-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-orange-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="space-y-2 border-b border-slate-200 pb-6">
          <h1 className="text-3xl font-extrabold text-slate-900">
            Customer Support & Help Desk
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Have questions, feedback, or need help with Task Manager? Reach out
            to our core team.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">
              Official Support Email
            </h3>
            <p className="text-xs text-slate-500">
              Direct assistance within 24–48 hours:
            </p>
            <a
              href="mailto:contact.growtech@gmail.com"
              className="text-xs font-bold text-orange-600 hover:underline block pt-1"
            >
              contact.growtech@gmail.com
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">
              WhatsApp Support
            </h3>
            <p className="text-xs text-slate-500">
              Quick feedback & bug reporting:
            </p>
            <a
              href="https://wa.me/+918902709631?text=Hi%20Grow%20Tech,%20I%20have%20an%20inquiry%20regarding%20Task%20Manager%20app."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-600 hover:underline block pt-1"
            >
              +91 8902709631 (Chat Now)
            </a>
          </div>
        </div>

        {/* Common Troubleshooting FAQ */}
        <div className="space-y-4 pt-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-orange-600" />
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                Why am I not receiving task reminder notifications on time?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Many Android manufacturers (Xiaomi/MIUI, Realme, OnePlus, Vivo)
                automatically kill background apps to save battery. To fix this,
                go to your phone&apos;s{" "}
                <strong>
                  App Info ➔ Battery Saver ➔ Select &quot;No Restrictions&quot;
                </strong>{" "}
                and turn on <strong>Autostart</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                What happens if I forget my Private Folder password?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                If you enabled fingerprint unlock, you can verify your biometric
                sensor to access your vault. For security reasons, Grow Tech
                cannot reset passwords as no credentials ever leave your phone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
