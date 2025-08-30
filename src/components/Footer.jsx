import React from 'react';
import { Instagram, Twitter, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h4 className="text-xl font-medium">FOTTOKOGAE</h4>
            <p className="mt-3 max-w-md text-neutral-400">
              A house of solemn luxury—where scripture meets silhouette. Join the list for invitations to private viewings and early capsules.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a aria-label="Instagram" href="#" className="p-2 rounded-full border border-neutral-700 hover:border-amber-400/40 hover:text-amber-200 transition-colors"><Instagram size={18} /></a>
              <a aria-label="Twitter" href="#" className="p-2 rounded-full border border-neutral-700 hover:border-amber-400/40 hover:text-amber-200 transition-colors"><Twitter size={18} /></a>
              <a aria-label="Email" href="#" className="p-2 rounded-full border border-neutral-700 hover:border-amber-400/40 hover:text-amber-200 transition-colors"><Mail size={18} /></a>
            </div>
          </div>
          <form id="newsletter" onSubmit={(e)=>e.preventDefault()} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4 sm:p-6">
            <label htmlFor="email" className="block text-sm text-neutral-300">Request an invitation</label>
            <div className="mt-3 flex gap-2">
              <input id="email" type="email" required placeholder="your@email"
                className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-400/30" />
              <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-amber-300 to-amber-500 text-neutral-900 px-4 py-3 text-sm font-semibold hover:brightness-110">
                Request
                <ArrowRight size={16} />
              </button>
            </div>
            <p className="mt-3 text-xs text-neutral-500">We send infrequently. Unsubscribe anytime.</p>
          </form>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} FOTTOKOGAE. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-neutral-300">Terms</a>
            <a href="#" className="hover:text-neutral-300">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
