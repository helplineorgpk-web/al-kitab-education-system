"use client";

import { motion } from "framer-motion";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const provinces = ["Balochistan", "Sindh", "Punjab", "Khyber Pakhtunkhwa"];
const impactPoints = [
  "Children no longer miss school to fetch water",
  "Diseases caused by unsafe water are reduced",
  "Families save hours of walking daily",
];
const solutions = ["Solar Tube Wells", "Hand Pumps", "Water Filtration Plants"];

export default function CleanWaterPage() {
  return (
    <div>
      <section className="bg-teal-800 py-16 px-4 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold">
            Clean Water Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-teal-100 text-lg"
          >
            Over 2000 water pumps across Pakistan
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden mb-12"
          >
            <ImagePlaceholder label="Water pump / community water access" aspectRatio="wide" className="w-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-600 leading-relaxed"
          >
            <p>
              Helpline Welfare Trust has successfully installed over <strong>2000 water pumps</strong> across Pakistan in remote and underdeveloped areas.
            </p>
            <p>
              Communities in <strong>{provinces.join(", ")}</strong> previously relied on unsafe and contaminated water sources. Now families have access to clean and safe drinking water.
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-xl font-bold text-teal-800"
          >
            Impact
          </motion.h2>
          <ul className="mt-4 space-y-2">
            {impactPoints.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 text-gray-700"
              >
                <span className="text-teal-500">✓</span> {point}
              </motion.li>
            ))}
          </ul>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-xl font-bold text-teal-800"
          >
            What We Install
          </motion.h2>
          <div className="mt-4 flex flex-wrap gap-4">
            {solutions.map((s) => (
              <span
                key={s}
                className="rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-800"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="mt-6 text-gray-600">
            All installed <strong>free of cost</strong> for poor communities.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2"
          >
            {[1, 2].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-teal-100">
                <ImagePlaceholder label={`Water project photo ${i}`} aspectRatio="video" className="w-full" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
