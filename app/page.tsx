import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)]">

      {/* EMERGENCY STRIP */}
      <section className="bg-[var(--green)] text-white py-3 px-6 text-center text-sm">
        Need help now?
        <a href="#" className="underline ml-2 text-white">WhatsApp</a>
      </section>

      {/* HERO */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">

        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center" />

        <div className="absolute inset-0 bg-gradient-to-br from-[var(--teal-deep)]/90 via-[var(--teal)]/80 to-[var(--aqua)]/60" />

        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-xl text-white">

            <h1 className="mb-6 text-white">
              Support for Women in Cape Town
            </h1>

            <p className="text-lg mb-8 text-white/90">
              Direct help for women facing crisis. Food, electricity, safety, and real support when it matters most.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link href="/support" className="px-6 py-3 rounded-lg bg-white text-[var(--teal-deep)]">
                Get Support
              </Link>

              <Link href="/contact" className="px-6 py-3 rounded-lg border border-white text-white">
                Donate
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="py-10 px-6 text-center bg-[var(--bg-main)]">
        <p className="text-sm max-w-2xl mx-auto">
          Your situation is handled with care and privacy. You are not judged. You can reach out safely and confidentially.
        </p>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6 bg-[var(--bg-soft)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Real support. Real situations.</h2>
          <p className="leading-relaxed">
            This work focuses on women supporting children on their own. Many face unsafe environments, financial pressure, and isolation. Support is practical and immediate.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 bg-[var(--bg-main)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">

          {[
            { title: "Reach out", desc: "Message directly." },
            { title: "We listen", desc: "We understand your situation." },
            { title: "We act", desc: "Support is delivered quickly." }
          ].map((item, i) => (
            <div key={i}>
              <h3 className="mb-3 text-[var(--teal)]">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-[var(--bg-soft)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-16">Support provided</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Food and groceries",
              "Electricity support",
              "Baby essentials",
              "Transport to clinics",
              "Safe spaces",
              "Emotional support"
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--mint-light)]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DONATION */}
      <section className="py-24 px-6 bg-[var(--teal-deep)] text-white">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="mb-6 text-white">How donations are used</h2>

          <p className="opacity-90 max-w-2xl mx-auto mb-10">
            Donations go directly to essentials like food, electricity, and basic care.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <strong>Food</strong>
              <p className="text-sm opacity-80 mt-2">Daily support</p>
            </div>
            <div>
              <strong>Electricity</strong>
              <p className="text-sm opacity-80 mt-2">Power for homes</p>
            </div>
            <div>
              <strong>Care</strong>
              <p className="text-sm opacity-80 mt-2">Support where needed</p>
            </div>
          </div>

        </div>
      </section>

      {/* LOCATION */}
      <section className="py-24 px-6 bg-[var(--aqua-soft)] text-center">
        <h2 className="mb-6">Where support happens</h2>
        <p className="max-w-2xl mx-auto">
          Masiphumelele, Ocean View, Red Hill, Capricorn, Kommetjie, Scarborough, Simon’s Town, and surrounding areas.
        </p>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-[var(--bg-main)]">
        <h2 className="mb-6">Get help or support someone</h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link href="/support" className="px-6 py-3 rounded-lg bg-[var(--teal)] text-white">
            Get Support
          </Link>

          <Link href="/contact" className="px-6 py-3 rounded-lg bg-[var(--green)] text-white">
            Donate
          </Link>
        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href="#"
        className="fixed bottom-6 right-6 px-5 py-3 rounded-full bg-[var(--green)] text-white shadow-lg"
      >
        WhatsApp
      </a>

    </main>
  );
            }
