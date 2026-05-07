"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-teal-100 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-teal-700">Al-Kitab Education System</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/education#schools"
            className="ml-2 rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
          >
            Our Schools
          </Link>
          <Link
            href="/contact"
            className="ml-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-teal-900 hover:bg-amber-400 transition-colors"
          >
            Support Education
          </Link>
        </nav>

        <button
          type="button"
          className="lg:hidden rounded-lg p-2 text-gray-600 hover:bg-teal-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-teal-100 bg-white"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/education#schools"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-teal-600 px-4 py-2 text-center text-sm font-semibold text-white"
              >
                Our Schools
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-amber-500 px-4 py-2 text-center text-sm font-semibold text-teal-900"
              >
                Support Education
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
