"use client";

import { motion } from "framer-motion";

const placeholderCount = 8;

export default function SponsorsPage() {
  return (
    <div>
      <section className="bg-teal-800 py-16 px-4 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold">
            Sponsors & Supporters
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-teal-100 text-lg"
          >
            We are grateful to our partners and donors
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mb-12"
          >
            Logo carousel for supporters — add partner logos here.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          >
            {Array.from({ length: placeholderCount }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border-2 border-dashed border-teal-200 bg-white aspect-square flex items-center justify-center text-teal-600 text-sm font-medium"
              >
                Logo {i + 1}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
