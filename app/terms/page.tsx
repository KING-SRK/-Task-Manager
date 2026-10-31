import React from "react";
import { FileText, AlertTriangle } from "lucide-react";

export default function TermsPage() {
  const effectiveDate = "October 30, 2026";

  return (
    <div className="w-full min-h-screen bg-white text-slate-800 font-sans flex flex-col">
      {/* 🧭 Top Breadcrumb & Header (max-w-7xl) */}
      <section className="w-full py-12 lg:py-16 px-6 sm:px-12 lg:px-20 bg-slate-50/70 border-b border-slate-100">
        <div className="w-full max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-orange-600 text-xs font-mono font-bold tracking-wider uppercase">
            <FileText className="w-4 h-4" />
            <span>Legal Documentation</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Terms & Conditions
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 font-mono">
            <strong>Task Manager</strong> – Crafted by{" "}
            <strong>GrowTech Software Development Services</strong> • Effective
            Date: {effectiveDate}
          </p>
        </div>
      </section>

      {/* 📄 Terms Content (max-w-7xl) */}
      <main className="w-full py-12 px-6 sm:px-12 lg:px-20">
        <div className="w-full max-w-7xl mx-auto space-y-10 text-xs sm:text-sm leading-relaxed text-slate-600">
          {/* Welcome Message */}
          <div className="p-6 rounded-2xl bg-orange-50/50 border border-orange-100 text-slate-700 leading-relaxed">
            Welcome to <strong>Task Manager</strong>, a personal productivity
            application Crafted by{" "}
            <strong>GrowTech Software Development Services</strong>. By
            downloading, installing, or using this application, you agree to
            these Terms & Conditions. Please read them carefully before using
            the application.
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-mono">01.</span> Acceptance
              of Terms
            </h2>
            <p>
              By accessing or using Task Manager, you acknowledge that you have
              read and agreed to these Terms & Conditions. If you do not agree
              with these terms, please discontinue using the application.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-mono">02.</span> Application
              Purpose
            </h2>
            <p>
              Task Manager is designed to help users organize their everyday
              activities through features such as:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Daily and upcoming task scheduling.</li>
              <li>Life goals and streak tracking.</li>
              <li>Personal notes and folder management.</li>
              <li>Private Folder protection.</li>
              <li>Digital checklist creation and management.</li>
              <li>Light and Dark theme customization.</li>
            </ul>
            <p className="text-slate-500 pt-1">
              The application is intended as a personal productivity and
              organizational tool.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-mono">03.</span> Offline
              Operation and Local Storage
            </h2>
            <p>
              Task Manager operates using local <strong>Hive storage</strong> on
              the user&apos;s device. The application does not currently provide
              cloud synchronization or an integrated cloud backup service.
            </p>
            <p className="font-medium text-slate-800">
              Users acknowledge that:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Application information is stored locally.</li>
              <li>
                Internet access is not required for regular productivity
                features.
              </li>
              <li>
                Data may be permanently lost if the application is uninstalled,
                application data is cleared, or the device is reset.
              </li>
              <li>
                Grow Tech does not maintain remote copies of users&apos;
                personal entries for recovery.
              </li>
            </ul>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3 mt-2">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <p className="text-xs leading-relaxed">
                Users are solely responsible for managing and protecting their
                locally stored information.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-mono">04.</span> User
              Responsibilities
            </h2>
            <p>Users agree to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Use the application for lawful and appropriate purposes.</li>
              <li>Maintain the security of their devices.</li>
              <li>Keep their Private Folder password confidential.</li>
              <li>Use the application&apos;s features responsibly.</li>
              <li>
                Avoid attempting to modify, disrupt, or misuse the
                application&apos;s functionality.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-mono">05.</span> Private
              Folder and Authentication
            </h2>
            <p>
              Task Manager provides password and biometric authentication
              options to restrict access to the Private Folder. Users are
              responsible for maintaining the confidentiality of their passwords
              and ensuring their device authentication settings remain secure.
            </p>
            <p className="text-slate-500 text-xs">
              Grow Tech cannot guarantee protection against unauthorized access
              resulting from compromised devices, exposed passwords, or other
              external security issues.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-mono">06.</span>{" "}
              Notifications and Reminders
            </h2>
            <p>
              Task Manager may generate notifications for task creation and
              scheduled reminders. Notification delivery can depend on:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Device notification permissions.</li>
              <li>Android system settings.</li>
              <li>Battery optimization restrictions.</li>
              <li>Device background activity management.</li>
              <li>Other operating system limitations.</li>
            </ul>
            <p className="text-slate-500 text-xs">
              Grow Tech does not guarantee that every notification or reminder
              will be delivered at an exact time under all device conditions.
              Users should not rely exclusively on application notifications for
              critical deadlines or emergencies.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-mono">07.</span> Data
              Management and Deletion
            </h2>
            <p>
              Users can create, modify, organize, and delete their tasks, goals,
              notes, folders, and checklists through the application&apos;s
              available features.
            </p>
            <p>
              Deleted notes may be moved to the Deleted folder before permanent
              removal. Users understand that permanently deleted information or
              locally lost application data may not be recoverable.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-mono">08.</span>{" "}
              Intellectual Property
            </h2>
            <p>
              The application&apos;s original branding, interface design,
              graphics, and software components developed by Grow Tech are
              protected by applicable intellectual property laws.
            </p>
            <p className="text-slate-500 text-xs">
              Users may not reproduce, redistribute, modify, or commercially
              exploit protected application materials without appropriate
              authorization.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-mono">09.</span> Application
              Updates and Modifications
            </h2>
            <p>
              Grow Tech reserves the right to improve, modify, add, or
              discontinue application features when necessary. Updates may
              introduce new functionality, design changes, performance
              improvements, or security modifications.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-mono">10.</span>{" "}
              Availability and Disclaimer
            </h2>
            <p>
              Task Manager is provided on an &quot;AS IS&quot; and &quot;AS
              AVAILABLE&quot; basis. Although we aim to provide a reliable
              experience, we cannot guarantee uninterrupted operation,
              error-free performance, or compatibility with every Android
              device. Users should maintain independent records of information
              that is especially important to them.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-mono">11.</span> Limitation
              of Liability
            </h2>
            <p>
              To the extent permitted by applicable law, Grow Tech shall not be
              responsible for losses arising from:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Device failure or damage.</li>
              <li>Uninstalling the application or clearing its data.</li>
              <li>Loss of locally stored information.</li>
              <li>Device permission restrictions.</li>
              <li>Operating system limitations.</li>
              <li>
                Unauthorized access resulting from compromised devices or user
                credentials.
              </li>
            </ul>
            <p className="text-slate-500 text-xs">
              Nothing in these Terms excludes liability that cannot legally be
              excluded under applicable law.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-mono">12.</span> Changes to
              These Terms
            </h2>
            <p>
              Grow Tech may revise these Terms & Conditions when required by
              application updates, operational changes, or applicable legal
              requirements. Updated terms will be published on the official
              website.
            </p>
            <p className="text-slate-500 text-xs">
              Continued use of the application after applicable changes take
              effect constitutes acceptance of the revised terms, to the extent
              permitted by law.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4 pt-6 border-t border-slate-200">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-mono">13.</span> Contact
              Information
            </h2>
            <p>
              For questions, feedback, or assistance regarding these Terms &
              Conditions, contact:
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
