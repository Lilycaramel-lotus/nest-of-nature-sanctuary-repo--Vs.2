import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Pricing | Caramel Digital Studio",
  description: "Transparent pricing for web design, development, and automation services.",
};

export default function Pricing() {
  return (
    <>
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-14 px-6 py-16 lg:gap-16">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Pricing</h1>
          <p className="max-w-2xl text-lg text-gray-600">
            Transparent, flexible pricing for all service levels and project scopes.
          </p>
          <p className="text-sm text-gray-500">
            <Link href="/" className="underline">← Back</Link>
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-200 p-5">
          <h2 className="text-2xl font-semibold tracking-tight">Service Tiers</h2>
          <p className="text-gray-700">
            Beginner, Intermediate, and Advanced packages tailored to your business needs.
          </p>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
