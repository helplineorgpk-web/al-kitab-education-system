"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const campaigns = [
  {
    title: "Water Pump Installation",
    description: "Help us install more water pumps in remote areas so families have access to clean, safe drinking water.",
    href: "/donate",
  },
  {
    title: "School Support Program",
    description: "Support adopted government schools and Al-Kitab Education System to keep children in classrooms.",
    href: "/donate",
  },
  {
    title: "Ramadan Ration Program",
    description: "Provide food and ration packs to underprivileged families during the holy month of Ramadan.",
    href: "/donate",
  },
  {
    title: "Disaster Relief Fund",
    description: "Rapid response fund for natural disasters and emergencies across Pakistan.",
    href: "/donate",
  },
];

export default function CampaignsPage() {
  return (
    <div>
      <section className="bg-teal-800 py-16 px-4 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold">
            Our Campaigns
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-teal-100 text-lg"
          >
            Active campaigns you can support today
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {campaigns.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl overflow-hidden border border-teal-100 bg-white shadow-sm"
              >
                <ImagePlaceholder label={c.title} aspectRatio="video" className="w-full" />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-teal-800">{c.title}</h2>
                  <p className="mt-2 text-gray-600">{c.description}</p>
                  <Link
                    href={c.href}
                    className="mt-4 inline-block rounded-full bg-teal-600 px-6 py-2 text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
                  >
                    Donate
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
