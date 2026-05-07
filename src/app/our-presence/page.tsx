"use client";

import { motion } from "framer-motion";

const cities = [
  { name: "Lahore", region: "Punjab" },
  { name: "Karachi", region: "Sindh" },
  { name: "Hyderabad", region: "Sindh" },
  { name: "Gojra", region: "Punjab" },
  { name: "Bahawalpur", region: "Punjab" },
  { name: "Abbottabad", region: "Khyber Pakhtunkhwa" },
];

export default function OurPresencePage() {
  return (
    <div>
      <section className="bg-teal-800 py-16 px-4 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold">
            Our Presence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-teal-100 text-lg"
          >
            Cities where we work across Pakistan
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl">
          {/* Pakistan map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border-2 border-dashed border-teal-300 bg-teal-50/50 aspect-[4/3] flex items-center justify-center text-teal-600 font-medium"
          >
            Pakistan map with highlighted locations (Lahore, Karachi, Hyderabad, Gojra, Bahawalpur, Abbottabad)
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-2xl font-bold text-teal-800"
          >
            Cities We Serve
          </motion.h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city, i) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-teal-100 bg-white p-4 shadow-sm"
              >
                <h3 className="font-semibold text-teal-800">{city.name}</h3>
                <p className="text-sm text-gray-600">{city.region}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
