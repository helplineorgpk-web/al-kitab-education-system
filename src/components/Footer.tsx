import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
  { href: "/contact", label: "Support Education" },
];

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-teal-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-amber-200">Al-Kitab Education System</h3>
            <p className="mt-2 text-sm text-teal-200/90">
              Dedicated to education for underprivileged communities. Under Helpline Welfare Trust — adopted schools across Pakistan.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-200/90">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-teal-200 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-teal-700 pt-8">
          <p className="text-center text-sm text-teal-300">
            Al-Kitab Education System — Rana Town, Shahdara, Lahore, Pakistan
          </p>
          <p className="mt-1 text-center text-xs text-teal-400">
            © {new Date().getFullYear()} Al-Kitab Education System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
