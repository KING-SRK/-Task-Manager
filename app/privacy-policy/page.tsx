import React from "react";
import { ShieldCheck, Lock, Bell, AlertTriangle } from "lucide-react";

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 30, 2026";

  return (
    <div className="w-full min-h-screen bg-white text-slate-800 font-sans flex flex-col">
      {/* 🧭 Top Breadcrumb & Header (max-w-7xl) */}
      <section className="w-full py-12 lg:py-16 px-6 sm:px-12 lg:px-20 bg-slate-50/70 border-b border-slate-100">
        <div className="w-full max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-orange-600 text-xs font-mono font-bold tracking-wider uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Policy Document</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 font-mono">
            <strong>Task Manager</strong> – Crafted by{" "}
            <strong>GrowTech Software Development Services</strong> • Last
            Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* 📄 Policy Content (max-w-7xl) */}
      <main className="w-full py-12 px-6 sm:px-12 lg:px-20">
        <div className="w-full max-w-7xl mx-auto space-y-10 text-xs sm:text-sm leading-relaxed text-slate-600">
          {/* Intro */}
          <div className="p-6 rounded-2xl bg-orange-50/50 border border-orange-100 text-slate-700 leading-relaxed">
            At <strong>GrowTech Software Development Services</strong>, we
            respect your privacy. Task Manager is designed as an offline-first
            personal productivity application that allows you to manage your
            daily activities and personal information directly on your device.
            This Privacy Policy explains how the application handles
            information, uses device permissions, and protects your privacy.
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-mono">01.</span> Information
              We Store
            </h2>
            <p>
              Task Manager allows users to create and manage different types of
              personal information, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Daily and upcoming tasks.</li>
              <li>Life goals and daily completion streaks.</li>
              <li>Personal notes and folders.</li>
              <li>Private notes stored in the Private Folder.</li>
              <li>Checklist files and individual checklist items.</li>
              <li>Application preferences, including theme settings.</li>
            </ul>
            <p className="text-slate-800 font-medium pt-1">
              This information is stored locally on your device using{" "}
              <strong>Hive local storage</strong>.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-mono">02.</span> Local Data
              Storage
            </h2>
            <p>
              Task Manager operates without requiring a user account or cloud
              synchronization.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                Your tasks, goals, notes, and checklists are stored locally on
                your device.
              </li>
              <li>
                The application does not use Firebase or any remote database
                service.
              </li>
              <li>
                Your personal entries are not automatically uploaded to GrowTech
                Software Development Services servers.
              </li>
              <li>
                You can access and manage your stored information without an
                internet connection.
              </li>
            </ul>
            <p className="text-slate-500">
              Task Manager does not currently provide an integrated cloud backup
              or synchronization feature.
            </p>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3 mt-2">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <p className="text-xs leading-relaxed">
                <strong>Important:</strong> Uninstalling the application,
                clearing its application data, or resetting your device may
                result in permanent loss of locally stored information. Users
                are responsible for maintaining any backups they require.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-mono">03.</span> Data
              Collection and Sharing
            </h2>
            <p>
              Task Manager does not include advertisements or analytics
              services. We do not operate a cloud account system for collecting
              or synchronizing your personal tasks, goals, notes, or checklists.
            </p>
            <p>
              We do not sell your personal entries or share them with third
              parties through an application-operated cloud service.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-mono">04.</span> Device
              Permissions
            </h2>
            <p>
              The application may request certain device permissions to provide
              its functionality:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-2">
                <p className="font-bold text-slate-900 flex items-center gap-2 text-sm">
                  <Bell className="w-4 h-4 text-orange-600" /> Notifications
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Used to deliver task creation notifications and scheduled task
                  reminders. Notification delivery may depend on your device
                  settings and Android permission configuration.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-2">
                <p className="font-bold text-slate-900 flex items-center gap-2 text-sm">
                  <Lock className="w-4 h-4 text-emerald-600" /> Biometric
                  Authentication
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Used to allow supported devices to authenticate users before
                  accessing the Private Folder. Biometric verification is
                  handled through the device&apos;s authentication system. Task
                  Manager does not receive your fingerprint or facial biometric
                  data.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-mono">05.</span> Private
              Folder Security
            </h2>
            <p>
              Task Manager provides a Private Folder to help users protect
              personal notes and sensitive information.
            </p>
            <p>
              Depending on the available settings and device capabilities, users
              can protect access using an application password, biometric
              authentication, or both.
            </p>
            <p className="text-slate-500 text-xs">
              Users should keep their passwords confidential and secure their
              devices appropriately. Private Folder access protection should not
              be considered a guarantee of complete protection against every
              possible device-level security threat.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-mono">06.</span> Data
              Retention and Deletion
            </h2>
            <p>
              Users can manage their information directly within the
              application:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                Tasks, goals, notes, and checklist items can be deleted through
                their respective features.
              </li>
              <li>
                Notes moved to the Deleted folder can be permanently deleted by
                the user.
              </li>
              <li>
                Clearing application data or uninstalling the application may
                remove locally stored information.
              </li>
            </ul>
            <p className="text-slate-500">
              GrowTech Software Development Services does not maintain a remote
              copy of users&apos; personal entries that can be restored through
              a cloud account.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-mono">07.</span>{" "}
              Children&apos;s Privacy
            </h2>
            <p>
              Task Manager is a general-purpose productivity application. It is
              not specifically designed to collect personal information from
              children.
            </p>
            <p className="text-slate-500">
              Because the application does not require account registration or
              operate a cloud-based personal data collection system, users
              should still follow applicable age requirements and parental
              guidance when using the application.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-mono">08.</span> Third-Party
              Services
            </h2>
            <p>
              Task Manager does not currently use Firebase, cloud databases,
              advertising networks, or analytics services. The application
              relies entirely on local device functionality for its core
              productivity features.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-mono">09.</span> Changes to
              This Privacy Policy
            </h2>
            <p>
              GrowTech Software Development Services may update this Privacy
              Policy when application features, functionality, or applicable
              requirements change. Updated versions will be published on this
              official website with a revised update date.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4 pt-6 border-t border-slate-200">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-mono">10.</span> Contact Us
            </h2>
            <p>
              If you have questions, feedback, or concerns regarding this
              Privacy Policy, contact us:
            </p>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400">
                    Developer
                  </span>
                  <p className="font-bold text-slate-900">
                    GrowTech Software Development Services
                  </p>
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400">
                    Application
                  </span>
                  <p className="font-bold text-slate-900">Task Manager</p>
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400">
                    Official Support Email
                  </span>
                  <p>
                    <a
                      href="mailto:growtechofficials.support@gmail.com"
                      className="font-bold text-orange-600 hover:underline break-all"
                    >
                      growtechofficials.support@gmail.com
                    </a>
                  </p>
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400">
                    Official Website
                  </span>
                  <p>
                    <a
                      href="https://task-manager-official.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-orange-600 hover:underline inline-flex items-center gap-1"
                    >
                      task-manager-official.vercel.app
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
