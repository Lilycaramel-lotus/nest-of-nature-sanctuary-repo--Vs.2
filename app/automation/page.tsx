import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Automation | Caramel Digital Studio",
  description: "AI-powered automation systems and intelligent workflows for your business.",
};

export default function Automation() {
  return (
    <>
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-14 px-6 py-16 lg:gap-16">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Automation</h1>
          <p className="max-w-2xl text-lg text-gray-600">
            Intelligent automation systems that scale your business without increasing workload.
          </p>
          <p className="text-sm text-gray-500">
            <Link href="/" className="underline">← Back</Link>
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-200 p-5">
          <h2 className="text-2xl font-semibold tracking-tight">Automated Workflows</h2>
          <p className="text-gray-700">
            AI agents, automated lead capture, workflow optimization, and intelligent system design.
          </p>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
