import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Templates | Caramel Digital Studio",
  description: "Ready-to-use website templates and system frameworks for rapid deployment.",
};

export default function Templates() {
  return (
    <>
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-14 px-6 py-16 lg:gap-16">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Templates</h1>
          <p className="max-w-2xl text-lg text-gray-600">
            Professionally designed templates and frameworks to accelerate your project.
          </p>
          <p className="text-sm text-gray-500">
            <Link href="/" className="underline">← Back</Link>
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-200 p-5">
          <h2 className="text-2xl font-semibold tracking-tight">Pre-Built Systems</h2>
          <p className="text-gray-700">
            Customizable templates for websites, landing pages, and automated systems.
          </p>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
