"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const amounts = [500, 1000, 2500, 5000, 10000, "Other"];

export default function DonatePage() {
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<string | number>(2500);

  return (
    <div>
      <section className="bg-teal-800 py-16 px-4 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold">
            Donate Now
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-teal-100 text-lg"
          >
            Your donation can change lives
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-amber-50 border border-amber-100 p-6 mb-10"
          >
            <p className="text-gray-700 leading-relaxed">
              Your donation can change lives. Even a small contribution can bring education, water, and hope to a family in need.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-teal-100 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-teal-800">Donation type</h2>
            <div className="mt-4 flex gap-4">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  checked={donationType === "one-time"}
                  onChange={() => setDonationType("one-time")}
                  className="h-4 w-4 text-teal-600"
                />
                <span>One-time donation</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  checked={donationType === "monthly"}
                  onChange={() => setDonationType("monthly")}
                  className="h-4 w-4 text-teal-600"
                />
                <span>Monthly donation</span>
              </label>
            </div>

            <h2 className="mt-8 text-lg font-semibold text-teal-800">Amount (PKR)</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {amounts.map((amt) => (
                <button
                  key={String(amt)}
                  type="button"
                  onClick={() => setSelectedAmount(amt)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selectedAmount === amt
                      ? "bg-teal-600 text-white"
                      : "bg-teal-50 text-teal-700 hover:bg-teal-100"
                  }`}
                >
                  {amt === "Other" ? "Other" : `PKR ${amt.toLocaleString()}`}
                </button>
              ))}
            </div>

            <h2 className="mt-8 text-lg font-semibold text-teal-800">Payment method</h2>
            <div className="mt-4 space-y-3">
              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-teal-100 p-4">
                <input type="radio" name="payment" value="bank" className="h-4 w-4 text-teal-600" />
                <span>Bank Transfer</span>
              </label>
              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-teal-100 p-4">
                <input type="radio" name="payment" value="online" className="h-4 w-4 text-teal-600" defaultChecked />
                <span>Online Payment</span>
              </label>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Bank details and payment gateway can be added here. For now this is a placeholder form.
            </p>

            <button
              type="button"
              className="mt-8 w-full rounded-full bg-teal-600 py-3 font-semibold text-white hover:bg-teal-700 transition-colors"
            >
              Proceed to Donate
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
