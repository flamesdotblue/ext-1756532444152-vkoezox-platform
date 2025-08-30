import React from 'react';
import { Crown, Star } from 'lucide-react';

const NavLink = ({ href, children }) => (
  <a href={href} className="px-3 py-2 text-sm tracking-wide uppercase text-neutral-300 hover:text-amber-300 transition-colors">
    {children}
  </a>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg supports-[backdrop-filter]:bg-neutral-900/50 border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="group inline-flex items-center gap-2">
            <span className="relative grid place-items-center h-8 w-8 rounded-full bg-gradient-to-br from-amber-400/80 to-rose-400/60 text-neutral-900 shadow-inner">
              <Crown size={18} />
              <Star size={12} className="absolute -right-1 -top-1 text-amber-300 drop-shadow" />
            </span>
            <span className="font-semibold tracking-[0.25em] text-sm text-neutral-100 group-hover:text-amber-200 transition-colors">
              FOTTOKOGAE
            </span>
          </a>
          <nav className="hidden md:flex items-center">
            <NavLink href="#collection">Collection</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#newsletter">Newsletter</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#collection" className="inline-flex items-center rounded-full border border-amber-400/30 bg-neutral-800/60 px-4 py-2 text-xs font-medium tracking-wider uppercase text-amber-200 hover:bg-neutral-800 hover:border-amber-300 transition-colors">
              Enter Boutique
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
