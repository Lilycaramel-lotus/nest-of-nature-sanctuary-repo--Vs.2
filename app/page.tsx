"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const dynamic = "force-dynamic";

const reviews = [
  {
    quote:
      "The structure was clear from day one. We launched fast and our enquiries improved within the first month.",
    name: "Amara Dlamini",
    role: "Founder, Coastline Advisory",
  },
  {
    quote:
      "Every page had a purpose. The automated website flow made follow-up simple for our team.",
    name: "Luca Bennett",
    role: "Director, Bennett Legal",
  },
  {
    quote:
      "Premium design, calm process, and smart systems that scale with our growth plan.",
    name: "Nina Jacobs",
    role: "Operations Lead, Blue Arc Studio",
  },
];

function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };
  console.log("Form submitted:", data);
  form.reset();
}

export default function Home() {
  return (
    <>
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-14 px-6 py-16 lg:gap-16">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Build something powerful</h1>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Designed to scale. Built to perform.
          </h2>
          <p className="max-w-2xl text-lg text-gray-600">Where your business gets seen.</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/about"
              className="rounded-md bg-black px-5 py-3 text-sm font-semibold text-white"
            >
              Learn more
            </Link>
            <Link
              href="/automation"
              className="rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900"
            >
              Automation
            </Link>
          </div>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-200 p-5">
          <h2 className="text-xl font-semibold tracking-tight">Trust snapshot</h2>
          <ul className="grid grid-cols-1 gap-2 text-sm text-gray-700 sm:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap lg:gap-3">
            <li className="rounded-full border border-gray-200 px-3 py-1">Intelligent websites</li>
            <li className="rounded-full border border-gray-200 px-3 py-1">Lead capture systems</li>
            <li className="rounded-full border border-gray-200 px-3 py-1">Automation-ready</li>
            <li className="rounded-full border border-gray-200 px-3 py-1">Security-ready</li>
            <li className="rounded-full border border-gray-200 px-3 py-1">Built to scale</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Your digital shopfront</h2>
          <div className="space-y-1 text-lg text-gray-700">
            <p>Where your business gets seen.</p>
            <p>Where people understand what you do.</p>
            <p>Where decisions start to happen.</p>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Why this matters</h2>
          <div className="space-y-1 text-lg text-gray-700">
            <p>People are already searching.</p>
            <p>They are already comparing.</p>
            <p>They are already deciding.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
          <div className="space-y-4 text-base text-gray-700">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-black">Presence that lands</h3>
              <p>A bold, modern website that feels right instantly.</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-black">Flow that converts</h3>
              <p>Visitors are guided clearly so they know what to do next.</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-black">Intelligence that scales</h3>
              <p>Your site evolves with automation and intelligent systems.</p>
            </div>
          </div>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-200 p-5">
          <h2 className="text-2xl font-semibold tracking-tight">Built with purpose</h2>
          <p className="text-gray-700">
            I design intelligent websites and systems that support structured growth, combining
            clear thinking with modern design.
          </p>
          <Link href="/about" className="text-sm font-semibold underline">
            Learn more
          </Link>
          <p className="text-sm text-gray-500">
            Path: <Link href="/about" className="underline">/about</Link>
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-200 p-5">
          <h2 className="text-2xl font-semibold tracking-tight">Marine and sustainability</h2>
          <p className="text-gray-700">A strong part of my work is shaped by the ocean.</p>
          <p className="text-gray-700">
            With a background in marine environments and scuba instruction, I bring a clear
            understanding of ocean systems, biodiversity, and long-term thinking.
          </p>
          <ul className="list-disc space-y-1 pl-6 text-gray-700">
            <li>SDG 14 (Life Below Water)</li>
            <li>SDG 15 (Life on Land)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
          <p className="text-gray-700">
            Systems designed to support your business at every stage.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/automation"
              className="rounded-xl border border-gray-200 p-4 transition hover:-translate-y-0.5 hover:border-gray-400 hover:shadow-sm"
            >
              <h3 className="text-lg font-semibold">Smart Website</h3>
              <p className="mt-1 text-sm text-gray-700">A clean, high-impact digital presence.</p>
            </Link>
            <Link
              href="/automation"
              className="rounded-xl border border-gray-200 p-4 transition hover:-translate-y-0.5 hover:border-gray-400 hover:shadow-sm"
            >
              <h3 className="text-lg font-semibold">Automated Website</h3>
              <p className="mt-1 text-sm text-gray-700">
                A structured system that improves conversions.
              </p>
            </Link>
            <Link
              href="/automation"
              className="rounded-xl border border-gray-200 p-4 transition hover:-translate-y-0.5 hover:border-gray-400 hover:shadow-sm"
            >
              <h3 className="text-lg font-semibold">Intelligent System</h3>
              <p className="mt-1 text-sm text-gray-700">
                Automation and AI supporting your business.
              </p>
            </Link>
            <Link
              href="/templates"
              className="rounded-xl border border-gray-200 p-4 transition hover:-translate-y-0.5 hover:border-gray-400 hover:shadow-sm"
            >
              <h3 className="text-lg font-semibold">Thought Leadership System</h3>
              <p className="mt-1 text-sm text-gray-700">
                Pitch decks, reports, and white papers that build authority.
              </p>
            </Link>
            <Link
              href="/automation"
              className="rounded-xl border border-gray-200 p-4 transition hover:-translate-y-0.5 hover:border-gray-400 hover:shadow-sm sm:col-span-2"
            >
              <h3 className="text-lg font-semibold">Security Systems (Caramel Security)</h3>
              <p className="mt-1 text-sm text-gray-700">
                Modern protection for your website and systems.
              </p>
            </Link>
          </div>
        </section>
        <section className="space-y-3 rounded-xl border border-gray-200 p-5">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="text-gray-700">Selected work and systems designed to scale.</p>
          <p className="text-gray-700">Designed to scale. Built to perform.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/gallery"
              className="rounded-xl border border-gray-200 p-4 text-sm text-gray-700 transition hover:-translate-y-0.5 hover:border-gray-400 hover:shadow-sm"
            >
              Conversion-focused websites
            </Link>
            <Link
              href="/gallery"
              className="rounded-xl border border-gray-200 p-4 text-sm text-gray-700 transition hover:-translate-y-0.5 hover:border-gray-400 hover:shadow-sm"
            >
              Automation-led systems
            </Link>
          </div>
          <Link href="/gallery" className="text-sm font-semibold underline">
            View project gallery
          </Link>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-200 p-5">
          <h2 className="text-2xl font-semibold tracking-tight">Resources</h2>
          <p className="text-gray-700">Explore our templates, automation systems, pricing, and brand guidelines.</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/pricing" className="text-sm font-semibold underline">
              Pricing
            </Link>
            <span className="text-sm text-gray-500">•</span>
            <Link href="/templates" className="text-sm font-semibold underline">
              Templates
            </Link>
            <span className="text-sm text-gray-500">•</span>
            <Link href="/automation" className="text-sm font-semibold underline">
              Automation
            </Link>
            <span className="text-sm text-gray-500">•</span>
            <Link href="/brand-kit" className="text-sm font-semibold underline">
              Brand Kit
            </Link>
          </div>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-200 p-5">
          <h2 className="text-2xl font-semibold tracking-tight">Insights</h2>
          <p className="text-gray-700">Strategies, systems, and ideas to support your growth.</p>
          <Link href="/blog" className="text-sm font-semibold underline">
            Read more
          </Link>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">What clients say</h2>
          <div className="flex snap-x gap-4 overflow-x-auto pb-2" aria-label="Reviews carousel">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="min-w-[280px] snap-start rounded-xl border border-gray-200 p-5 sm:min-w-[340px]"
              >
                <p className="text-sm text-gray-700">"{review.quote}"</p>
                <p className="mt-4 text-sm font-semibold text-gray-900">{review.name}</p>
                <p className="text-xs text-gray-500">{review.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-200 p-5">
          <h2 className="text-2xl font-semibold tracking-tight">Work with me</h2>
          <p className="text-gray-700">Get in touch to discuss your project.</p>
          <ul className="list-disc space-y-1 pl-6 text-gray-700">
            <li>Strategy consultations</li>
            <li>Website design & development</li>
            <li>Automation systems</li>
          </ul>
          <p className="text-gray-700 text-sm mt-4">
            <strong>Email:</strong> lily@carameldigitalcontent.com
          </p>
          <p className="text-gray-700 text-sm">
            <strong>WhatsApp:</strong> +27 64 220 5618
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Simple systems</h2>
          <div className="space-y-1 text-gray-700">
            <p>Start with a strong foundation.</p>
            <p>Expand into more advanced systems over time.</p>
            <p>Everything stays clear and manageable.</p>
          </div>
          <p className="text-sm text-gray-500">
            Path: <Link href="/services" className="underline">/services</Link>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Grow over time</h2>
          <div className="space-y-1 text-gray-700">
            <p>Your system evolves with you.</p>
            <p>Add features, automation, and upgrades as your business grows.</p>
          </div>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-200 p-5">
          <h2 className="text-2xl font-bold tracking-tight">Build your digital presence properly</h2>
          <p className="text-gray-700">Start strong. Scale with confidence.</p>
          <Link
            href="/about"
            className="w-fit rounded-md bg-black px-5 py-3 text-sm font-semibold text-white"
          >
            Learn more
          </Link>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-200 p-5">
          <h2 className="text-2xl font-semibold tracking-tight">Get started</h2>
          <div className="space-y-1 text-sm text-gray-700">
            <p>
              Email: <a href="mailto:lily@carameldigitalcontent.com" className="underline">lily@carameldigitalcontent.com</a>
            </p>
            <p>
              WhatsApp: <a href="https://wa.me/27642205618" className="underline">+27 64 220 5618</a>
            </p>
          </div>
          <form className="grid gap-3 sm:grid-cols-2" onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
              required
            />
            <textarea
              name="message"
              placeholder="Tell me about your project"
              className="min-h-28 rounded-md border border-gray-300 px-3 py-2 text-sm sm:col-span-2"
              required
            />
            <button
              type="submit"
              className="w-fit rounded-md bg-black px-5 py-3 text-sm font-semibold text-white"
            >
              Send
            </button>
          </form>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
