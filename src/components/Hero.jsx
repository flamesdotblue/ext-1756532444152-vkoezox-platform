import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center py-20 md:py-28">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-neutral-800/40 px-3 py-1 text-[11px] uppercase tracking-widest text-amber-200">
              Fruit of the Tree of Knowledge of Good and Evil
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight [font-feature-settings:'ss01','ss02']">
              FOTTOKOGAE
            </h1>
            <p className="mt-6 max-w-2xl text-neutral-300">
              A high luxury maison weaving scripture and silhouette. Inspired by gothic arches, Coptic tapestries, and the gravity of ritual—crafted for the modern catechumen of style.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#collection" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 text-neutral-900 px-5 py-3 text-sm font-semibold shadow-lg shadow-amber-500/20 hover:brightness-110 transition">
                Explore Collection
                <ArrowRight size={18} />
              </a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900 px-5 py-3 text-sm text-neutral-200 hover:border-neutral-500 transition">
                The Homage
              </a>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,204,21,0.25),transparent_60%)]" />
              <div className="absolute inset-0" style={{backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 600\"><defs><linearGradient id=\"g\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#1a1a1a\"/><stop offset=\"1\" stop-color=\"#0a0a0a\"/></linearGradient><pattern id=\"arch\" width=\"100\" height=\"120\" patternUnits=\"userSpaceOnUse\"><path d=\"M10,120 Q50,-10 90,120\" fill=\"none\" stroke=\"#c6a15b\" stroke-opacity=\"0.25\" stroke-width=\"1\"/></pattern></defs><rect width=\"100%\" height=\"100%\" fill=\"url(#g)\"/><rect width=\"100%\" height=\"100%\" fill=\"url(#arch)\"/></svg>`)}')`, backgroundSize: 'cover'}}/>
              <div className="absolute inset-0 flex items-end p-6">
                <div className="w-full rounded-xl bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4">
                  <p className="text-xs tracking-widest uppercase text-neutral-300">Edition I</p>
                  <p className="mt-1 text-sm text-amber-200">Serpentine Collar • Gilded Hem • Hand-bound Panels</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
