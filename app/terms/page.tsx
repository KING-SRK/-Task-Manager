import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle } from "lucide-react";

export default function TermsPage() {
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
            <FileText className="w-4 h-4" />
            <span>LEGAL AGREEMENT</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900">
            Terms & Conditions
          </h1>
          <p className="text-xs text-slate-500">Effective Date: October 2026</p>
        </div>

        <section className="space-y-6 text-xs sm:text-sm leading-relaxed text-slate-600">
          <div>
            <h2 className="text-base font-bold text-slate-900 mb-1.5">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, or using the{" "}
              <strong>Task Manager</strong> mobile application, you agree to be
              bound by these Terms and Conditions. If you do not agree, please
              discontinue using the app immediately.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-slate-900 mb-1.5">
              2. Nature of Service & Offline Operation
            </h2>
            <p>
              Task Manager operates as an offline productivity and organization
              tool. The application is provided on an &quot;AS IS&quot; and
              &quot;AS AVAILABLE&quot; basis without warranties of uninterrupted
              performance.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-slate-900 mb-1.5">
              3. Local Data Responsibility & Backups
            </h2>
            <p>
              Since Task Manager stores all your tasks, streaks, and private
              notes locally on your physical device, Grow Tech cannot recover
              your data if you uninstall the application, clear storage cache,
              or perform a factory reset on your device. Users are responsible
              for their device management.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-slate-900 mb-1.5">
              4. Intellectual Property
            </h2>
            <p>
              All application assets, layouts, graphics, branding, and source
              code are the exclusive intellectual property of Grow Tech. Reverse
              engineering, decompiling, or redistributing modified versions
              without written authorization is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-slate-900 mb-1.5">
              5. Modifications to Terms
            </h2>
            <p>
              We reserve the right to revise these terms as necessary to comply
              with app store guidelines or regulatory changes. Continued usage
              of the app constitutes agreement to updated terms.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-800 flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
            <p>
              Questions about these terms? Contact us at{" "}
              <strong>contact.growtech@gmail.com</strong>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
