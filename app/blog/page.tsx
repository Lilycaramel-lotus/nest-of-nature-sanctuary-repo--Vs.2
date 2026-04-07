import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Blog | Caramel Digital Studio",
  description: "Insights, articles, and thought leadership on digital design, automation, and business growth.",
};

export default function Blog() {
  return (
    <>
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-14 px-6 py-16 lg:gap-16">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="max-w-2xl text-lg text-gray-600">
            Insights and thought leadership on digital design, automation, and business growth.
          </p>
          <p className="text-sm text-gray-500">
            <Link href="/" className="underline">← Back</Link>
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-200 p-5">
          <h2 className="text-2xl font-semibold tracking-tight">Latest Articles</h2>
          <p className="text-gray-700">
            Thought-provoking articles on website strategy, automation, and digital transformation for modern businesses.
          </p>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
