"use client";

import { motion } from "framer-motion";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const highlights = [
  { title: "Humanity", desc: "We put people first in every decision and action." },
  { title: "Transparency", desc: "Donors and communities can see how resources are used." },
  { title: "Community Service", desc: "Working with and for local communities." },
  { title: "Faith Driven Mission", desc: "Our work is rooted in compassion and Islamic values." },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-teal-800 py-16 px-4 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold"
          >
            Who We Are
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-teal-100 text-lg"
          >
            Our story, mission, and values
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl overflow-hidden mb-12">
            <ImagePlaceholder label="About: Team or community at work" aspectRatio="wide" className="w-full" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-600 leading-relaxed"
          >
            <p>
              Helpline Welfare Trust is a humanitarian organization committed to uplifting underprivileged communities across Pakistan. With the support of generous donors and volunteers, we work in areas where access to education, clean water, and basic necessities is extremely limited.
            </p>
            <p>
              Our goal is to restore hope in communities that have been forgotten and provide opportunities for a better future.
            </p>
            <p>
              Helpline Welfare Trust is working in some of the poorest and most neglected areas of Pakistan, helping communities regain hope through education, clean water, and welfare services.
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-2xl font-bold text-teal-800"
          >
            What We Stand For
          </motion.h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-teal-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-teal-800">{h.title}</h3>
                <p className="mt-2 text-gray-600">{h.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-xl bg-teal-50 p-8 border border-teal-100"
          >
            <h3 className="text-lg font-semibold text-teal-800">Main Branch</h3>
            <p className="mt-2 text-gray-700">Helpline Welfare Trust</p>
            <p className="text-gray-600">Rana Town, Shahdara, Lahore, Pakistan</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
