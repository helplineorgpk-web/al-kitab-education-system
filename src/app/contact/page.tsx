"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <section className="bg-teal-800 py-16 px-4 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold">
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-teal-100 text-lg"
          >
            Get in touch with Helpline Welfare Trust
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl border border-teal-100 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-teal-800">Send a message</h2>
            {submitted ? (
              <p className="mt-4 text-teal-600">Thank you! We will get back to you soon.</p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-teal-600 py-3 font-semibold text-white hover:bg-teal-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-teal-100 bg-teal-50/50 p-6">
              <h3 className="font-semibold text-teal-800">Organization Address</h3>
              <p className="mt-2 text-gray-700 font-medium">Helpline Welfare Trust</p>
              <p className="text-gray-600">Rana Town, Shahdara</p>
              <p className="text-gray-600">Lahore, Pakistan</p>
            </div>
            <div className="rounded-2xl border border-teal-100 bg-white p-6">
              <h3 className="font-semibold text-teal-800">Phone</h3>
              <p className="mt-2 text-gray-600">Add phone number here</p>
            </div>
            <div className="rounded-2xl border border-teal-100 bg-white p-6">
              <h3 className="font-semibold text-teal-800">Email</h3>
              <p className="mt-2 text-gray-600">Add email address here</p>
            </div>
            <div className="rounded-2xl border-2 border-dashed border-teal-200 bg-teal-50/30 aspect-video flex items-center justify-center text-teal-600 text-sm font-medium">
              Google Map embed (Rana Town, Shahdara, Lahore)
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
