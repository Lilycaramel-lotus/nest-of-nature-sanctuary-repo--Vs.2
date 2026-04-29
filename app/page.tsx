import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)]">

      {/* EMERGENCY STRIP */}
      <section className="bg-[var(--green)] text-white py-3 px-6 text-center text-sm">
        Need help now?
        <a href="#" className="underline ml-2">WhatsApp</a>
      </section>

      {/* HERO */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center" />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-main)]/90 via-[var(--bg-main)]/60 to-transparent" />

        {/* CONTENT */}
        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-xl">

            <h1 className="text-4xl md:text-5xl leading-tight mb-6">
              Support for Women in Cape Town
            </h1>

            <p className="text-lg text-[var(--text-muted)] mb-8">
              Direct help for women facing crisis. Food, electricity, safety, and real support when it matters most.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="/support"
                className="px-6 py-3 rounded-lg bg-[var(--teal)] text-white"
              >
                Get Support
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg border border-[var(--teal)] text-[var(--teal)]"
              >
                Donate
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* SAFETY + CONFIDENTIALITY */}
      <section className="py-10 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[var(--text-muted)]">
            Your situation is handled with care and privacy. You are not judged. You can reach out safely and confidentially.
          </p>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="py-24 px-6 bg-[var(--bg-soft)]">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl mb-6">
            Real support. Real situations.
          </h2>

          <p className="text-[var(--text-muted)] leading-relaxed">
            This work focuses on women supporting children on their own. Many are dealing with financial pressure, unsafe environments, or isolation. Support is practical, immediate, and based on real needs.
          </p>

        </div>
      </section>

      {/* HOW SUPPORT WORKS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">

          {[
            { title: "Reach out", desc: "Message directly. No forms needed." },
            { title: "We understand", desc: "Each situation is listened to properly." },
            { title: "We act", desc: "Support is given as quickly as possible." }
          ].map((item, i) => (
            <div key={i}>
              <h3 className="mb-3 text-[var(--teal)]">{item.title}</h3>
              <p className="text-[var(--text-muted)]">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* SUPPORT TYPES */}
      <section className="py-24 px-6 bg-[var(--bg-soft)]">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl text-center mb-16">
            What support can include
          </h2>

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

      {/* DONATION CLARITY */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-2xl mb-6">
            How donations are used
          </h2>

          <p className="text-[var(--text-muted)] max-w-2xl mx-auto mb-10">
            Donations are used directly for essential support. Each situation is different, but funds typically go toward immediate needs like food, electricity, and basic care.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-xl bg-[var(--bg-soft)]">
              <strong>Small support</strong>
              <p className="text-sm mt-2 text-[var(--text-muted)]">
                Food for a few days or transport to a clinic.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--bg-soft)]">
              <strong>Medium support</strong>
              <p className="text-sm mt-2 text-[var(--text-muted)]">
                Electricity vouchers or baby essentials.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--bg-soft)]">
              <strong>Ongoing support</strong>
              <p className="text-sm mt-2 text-[var(--text-muted)]">
                Continued help based on changing needs.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* TRUST BLOCK */}
      <section className="py-24 px-6 bg-[var(--aqua-soft)]">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl mb-6">
            Built on trust and direct action
          </h2>

          <p className="text-[var(--text-muted)] leading-relaxed">
            Support is coordinated directly within the community. The focus is simple. Understand the need. Respond quickly. Help in a real, practical way.
          </p>

        </div>
      </section>

      {/* LOCATION */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl mb-6">
            Where support happens
          </h2>

          <p className="text-[var(--text-muted)]">
            Support reaches women across Masiphumelele, Ocean View, Red Hill, Capricorn, Kommetjie, Scarborough, Simon’s Town, and surrounding areas.
          </p>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 text-center">

        <h2 className="text-2xl mb-6">
          Get help or support someone today
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">

          <Link
            href="/support"
            className="px-6 py-3 rounded-lg bg-[var(--teal)] text-white"
          >
            Get Support
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg bg-[var(--green)] text-white"
          >
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
