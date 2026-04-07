"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-neutral-900 mt-32">
      <div className="max-w-[1400px] mx-auto px-8 py-[128px] md:py-[96px] sm:py-[64px]">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

          {/* Column 1 — Brand */}
          <div className="space-y-6">
            <div className="text-2xl font-bold text-neutral-100 tracking-tight">
              Caramel Digital Studio
            </div>
            <h3 className="text-neutral-100 font-semibold text-lg tracking-tight">
              Caramel Digital Studio
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-[280px]">
              Next.js websites engineered for performance and authority.
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div className="space-y-4">
            <h4 className="text-neutral-300 uppercase text-sm tracking-widest">
              Navigation
            </h4>
            <div className="flex flex-col gap-3 text-neutral-400 text-sm">
              <Link href="/" className="hover:text-neutral-100 transition">
                Home
              </Link>
              <Link href="/about" className="hover:text-neutral-100 transition">
                About
              </Link>
              <Link href="/pricing" className="hover:text-neutral-100 transition">
                Pricing
              </Link>
              <Link href="/gallery" className="hover:text-neutral-100 transition">
                Gallery
              </Link>
              <Link href="/blog" className="hover:text-neutral-100 transition">
                Blog
              </Link>
            </div>
          </div>

          {/* Column 3 — Contact */}
          <div className="space-y-4">
            <h4 className="text-neutral-300 uppercase text-sm tracking-widest">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-neutral-400 text-sm">
              <p>lily@carameldigitalcontent.com</p>
              <p>+27642205618</p>
              <div className="space-y-1">
                <p>17 Sixth Avenue</p>
                <p>Fish Hoek</p>
                <p>Cape Town</p>
                <p>7974</p>
                <p>South Africa</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-900 mt-16 pt-8 flex flex-col items-center gap-6 text-neutral-500 text-sm text-center">

          <div className="text-lg font-bold text-neutral-400 opacity-80">
            Caramel Digital Studio
          </div>

          <div className="space-y-1">
            <p>© {year} Caramel Digital Studio</p>
            <p>Built by Caramel Digital Studio</p>
            <Link
              href="/privacy"
              className="hover:text-neutral-300 transition"
            >
              Privacy Policy
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
