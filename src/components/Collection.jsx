import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Genesis Cloak',
    detail: 'Wool-silk, hand-gilded icon piping',
  },
  {
    title: 'Cherubim Boots',
    detail: 'Vegetable-tanned leather, brass eyelets',
  },
  {
    title: 'Eden Sash',
    detail: 'Hand-loomed tapestry weave',
  },
  {
    title: 'Apocrypha Ring',
    detail: 'Cast silver, onyx inlay',
  },
];

function Card({ title, detail, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900"
    >
      <div className="absolute inset-0 opacity-70" aria-hidden style={{backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 200\"><defs><radialGradient id=\"rg\" cx=\"50%\" cy=\"40%\" r=\"70%\"><stop offset=\"0\" stop-color=\"#f59e0b\" stop-opacity=\"0.25\"/><stop offset=\"1\" stop-color=\"#0a0a0a\" stop-opacity=\"0\"/></radialGradient><pattern id=\"coptic\" width=\"24\" height=\"24\" patternUnits=\"userSpaceOnUse\"><path d=\"M12 1 L23 12 L12 23 L1 12 Z\" fill=\"none\" stroke=\"#d4a373\" stroke-opacity=\"0.18\" stroke-width=\"1\"/></pattern></defs><rect width=\"100%\" height=\"100%\" fill=\"#0b0b0b\"/><rect width=\"100%\" height=\"100%\" fill=\"url(#coptic)\"/><rect width=\"100%\" height=\"100%\" fill=\"url(#rg)\"/></svg>`)}')`, backgroundSize: 'cover'}} />
      <div className="relative p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-medium text-neutral-100">{title}</h3>
          <span className="rounded-full border border-amber-400/30 bg-neutral-800/60 px-3 py-1 text-[10px] uppercase tracking-wider text-amber-200">Limited</span>
        </div>
        <p className="mt-2 text-sm text-neutral-300">{detail}</p>
        <div className="mt-6 h-36 w-full overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950">
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.12),transparent_70%)]" />
        </div>
        <div className="mt-5 flex items-center justify-between">
          <button className="text-sm text-amber-200 hover:text-amber-300">View piece</button>
          <div className="text-xs text-neutral-400">Pre-order opens soon</div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-amber-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}

export default function Collection() {
  return (
    <section id="collection" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-medium">The First Collection</h2>
            <p className="mt-2 text-neutral-400 max-w-2xl">A capsule of ceremonial essentials—severe lines, sanctified materials, and a quiet blaze of gold.</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Card key={it.title} title={it.title} detail={it.detail} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
