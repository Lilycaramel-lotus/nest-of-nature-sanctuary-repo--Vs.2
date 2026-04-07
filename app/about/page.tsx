import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "About | Caramel Digital Studio",
  description: "Learn about Caramel Digital Studio, our mission, and our approach to digital design and development.",
};

export default function About() {
  return (
    <>
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-14 px-6 py-16 lg:gap-16">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">About</h1>
          <p className="max-w-2xl text-lg text-gray-600">
            Building intelligent digital systems that support structured growth and performance.
          </p>
          <p className="text-sm text-gray-500">
            <Link href="/" className="underline">← Back</Link>
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-200 p-5">
          <h2 className="text-2xl font-semibold tracking-tight">Our Story</h2>
          <p className="text-gray-700">
            We combine clear thinking, modern design, and intelligent systems to create digital experiences that drive real business results.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-200 p-5">
          <h2 className="text-2xl font-semibold tracking-tight">Marine & Sustainability</h2>
          <p className="text-gray-700">
            With a background in marine environments and scuba instruction, we bring deep understanding of ocean systems and long-term thinking to everything we build.
          </p>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
