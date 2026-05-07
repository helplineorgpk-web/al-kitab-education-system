"use client";

import { motion } from "framer-motion";

export default function AdminPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-teal-200 bg-teal-50/50 p-8 text-center max-w-md"
      >
        <h1 className="text-xl font-semibold text-teal-800">Admin Panel</h1>
        <p className="mt-2 text-sm text-gray-600">
          Admin panel ready structure. Add authentication and dashboard (campaigns, donations, content) here.
        </p>
      </motion.div>
    </div>
  );
}
