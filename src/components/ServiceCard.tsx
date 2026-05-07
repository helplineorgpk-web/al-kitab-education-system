"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  index?: number;
}

export default function ServiceCard({ icon, title, description, href, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group rounded-2xl border border-teal-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700"
      >
        Learn more
        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  );
}
