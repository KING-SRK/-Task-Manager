import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPolicy() {
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
          <div className="flex items-center gap-2 text-orange-600 text-xs font-mono font-semibold">
            <Shield className="w-4 h-4" />
            <span>OFFICIAL PRIVACY NOTICE</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900">
            Privacy Policy for Task Manager
          </h1>
          <p className="text-xs text-slate-500">Last Updated: October 2026</p>
        </div>

        <section className="space-y-6 text-xs sm:text-sm leading-relaxed text-slate-600">
          <div>
            <h2 className="text-base font-bold text-slate-900 mb-1.5">
              1. Offline-First Data Storage
            </h2>
            <p>
              Task Manager is built from the ground up as an offline-first
              mobile utility. All your scheduled tasks, habit streak logs,
              notes, and checklist items are stored entirely inside your
              physical device&apos;s local memory (SQLite/Preferences).
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-slate-900 mb-1.5">
              2. Zero Data Collection & Cloud Uploads
            </h2>
            <p>
              We do not track, collect, sell, or sync your private entries to
              remote cloud servers. No personal user identification or sign-up
              is required to enjoy the full features of the app.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-slate-900 mb-1.5">
              3. Permissions Used
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong>POST_NOTIFICATIONS:</strong> Triggering alarms and
                alerts when your scheduled tasks or goals are due.
              </li>
              <li>
                <strong>USE_BIOMETRIC:</strong> Prompting your device&apos;s
                fingerprint/face sensor locally to unlock your Private Folder.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-bold text-slate-900 mb-1.5">
              4. Inquiries
            </h2>
            <p>
              If you have any questions regarding our offline security
              practices, email us at <strong>contact.growtech@gmail.com</strong>
              .
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
