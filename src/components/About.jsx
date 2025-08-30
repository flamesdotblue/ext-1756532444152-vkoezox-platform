import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-8 md:p-12 backdrop-blur"
        >
          <div className="mx-auto max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-200">An Homage</p>
            <h3 className="mt-3 text-3xl font-medium">Fruit of the Tree of Knowledge of Good and Evil</h3>
            <p className="mt-6 text-neutral-300">
              FOTTOKOGAE is a meditation on duality: innocence and wisdom, austerity and splendor. Our insignias echo gothic tracery and Coptic crosses—translated into textiles and metalwork with reverence, not replication. We honor the sacred without presumption, inviting contemplation in every seam.
            </p>
            <p className="mt-4 text-neutral-300">
              Each piece is constructed in limited quantities using time-forward methods: hand-binding, edge gilding, and archival finishing. The result is apparel with the gravity of ritual and the ease of the present.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
