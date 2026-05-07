"use client";

import { motion } from "framer-motion";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const stats = [
  { value: "2000+", label: "Water Pumps Installed" },
  { value: "15+", label: "Schools Supported" },
  { value: "10,000+", label: "Families Benefited" },
  { value: "Multiple", label: "Cities Covered" },
];

export default function ImpactPage() {
  return (
    <div>
      <section className="bg-teal-800 py-16 px-4 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold">
            Our Impact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-teal-100 text-lg"
          >
            Real numbers, real lives changed
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-teal-100 bg-white p-6 text-center shadow-sm"
              >
                <div className="text-3xl font-bold text-teal-600">{stat.value}</div>
                <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-2xl font-bold text-teal-800"
          >
            Impact in Action
          </motion.h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border border-teal-100 bg-white shadow-sm"
              >
                <ImagePlaceholder label={`Impact story / photo ${i}`} aspectRatio="video" className="w-full" />
                <div className="p-6">
                  <h3 className="font-semibold text-teal-800">Impact story placeholder</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Add real impact photos and stories from the field here.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
