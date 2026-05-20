"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SchoolCoverImage from "@/components/SchoolCoverImage";
import { adoptedSchools, ownSchools, schoolStats } from "@/data/schools";

export default function EducationPage() {
  return (
    <div>
      {/* Page header */}
      <section className="bg-teal-800 py-16 px-4 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold">
            Al-Kitab Education System
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-teal-100 text-lg"
          >
            Under Helpline Welfare Trust - 9 own schools and 13 adopted schools
          </motion.p>
        </div>
      </section>

      {/* Our Education — overview */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-teal-800 mb-6"
          >
            Education Mission
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-gray-600 leading-relaxed"
          >
            <p>
              Al-Kitab Education System is a project under <strong>Helpline Welfare Trust</strong>. We are committed to reviving education in underserved communities across Pakistan by running our own campuses and adopting government schools.
            </p>
            <p>
              Today, we operate <strong>{schoolStats.own} own schools</strong> and support <strong>{schoolStats.adopted} adopted schools</strong>. Together, these {schoolStats.total} institutions are helping children access quality education in safe, dignified learning spaces.
            </p>
            <p>
              Every school profile below has its own dedicated page, with space for image galleries and future updates.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 rounded-2xl bg-teal-50 border border-teal-100 p-6"
          >
            <h3 className="font-semibold text-teal-800 mb-3">What we do</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="text-teal-500 mt-0.5">•</span> Own Schools: {schoolStats.own}</li>
              <li className="flex items-start gap-2"><span className="text-teal-500 mt-0.5">•</span> Adopted Schools: {schoolStats.adopted}</li>
              <li className="flex items-start gap-2"><span className="text-teal-500 mt-0.5">•</span> Total Schools in Network: {schoolStats.total}</li>
              <li className="flex items-start gap-2"><span className="text-teal-500 mt-0.5">•</span> Managed under Helpline Welfare Trust</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Own Schools — Al-Kitab Education System */}
      <section id="al-kitab" className="py-16 px-4 bg-amber-50 border-y border-amber-100">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-teal-800 mb-2"
          >
            Our Own Schools ({schoolStats.own})
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-10 max-w-3xl"
          >
            These campuses are operated directly by Al-Kitab Education System under Helpline Welfare Trust.
          </motion.p>
          <div className="grid gap-8 md:grid-cols-2">
            {ownSchools.map((school, i) => (
              <motion.div
                key={school.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden border border-amber-200 bg-white shadow-sm"
              >
                <SchoolCoverImage school={school} placeholderLabel={`${school.name} image placeholder`} />
                <div className="p-6">
                  <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-700">
                    Own School
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-teal-800">{school.name}</h3>
                  <p className="mt-1 text-sm text-teal-600">{school.location}</p>
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">{school.shortDescription}</p>
                  <Link
                    href={`/education/${school.slug}`}
                    className="mt-4 inline-block text-teal-600 font-semibold hover:text-teal-700 text-sm"
                  >
                    View School Page →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Adopted Schools */}
      <section id="schools" className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-teal-800 mb-2"
          >
            Adopted Schools ({schoolStats.adopted})
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-10 max-w-3xl"
          >
            These schools are adopted and supported by Helpline Welfare Trust to restore quality education where it was previously neglected.
          </motion.p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
            {adoptedSchools.map((school, i) => (
              <motion.div
                key={school.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.03, 0.25) }}
                className="rounded-xl border border-teal-100 bg-gray-50/50 p-4"
              >
                <h4 className="font-semibold text-teal-800 text-sm">{school.name}</h4>
                <p className="mt-1 text-xs text-gray-600">{school.location}</p>
                <p className="mt-2 text-xs text-gray-700">{school.shortDescription}</p>
                <Link href={`/education/${school.slug}`} className="mt-2 inline-block text-xs text-teal-600 hover:text-teal-700 font-medium">
                  View School Page →
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-teal-600 px-8 py-3 font-semibold text-white hover:bg-teal-700 transition-colors"
            >
              Support Education
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-teal-600 px-8 py-3 font-semibold text-teal-700 hover:bg-teal-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
