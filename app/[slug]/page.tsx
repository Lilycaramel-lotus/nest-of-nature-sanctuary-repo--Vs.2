import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Tier } from "@/lib/seo/engine";
import { generatePages, type PageData } from "@/lib/seo/page-generator";

type Props = {
  params: { slug: string };
  searchParams: { tier?: string | string[] };
};

function resolveTier(value: string | string[] | undefined): Tier {
  const normalized = Array.isArray(value) ? value[0] : value;
  if (normalized === "intermediate" || normalized === "advanced") {
    return normalized;
  }
  return "beginner";
}

function getTierContent(base: string, tier: Tier): string {
  if (tier === "intermediate") {
    return `${base} This section focuses on improving conversion systems and optimizing performance.`;
  }

  if (tier === "advanced") {
    return `${base} This section explores automation, AI agents, and scalable system design.`;
  }

  return base;
}

function getCTA(tier: Tier) {
  if (tier === "intermediate") {
    return {
      title: "Automate your business",
      description: "Set up systems that capture leads and run workflows for you.",
      button: "Upgrade your website",
    };
  }

  if (tier === "advanced") {
    return {
      title: "Build your intelligent system",
      description: "Deploy AI agents and automation to scale your operations.",
      button: "Start your system",
    };
  }

  return {
    title: "Get a smart website",
    description: "Launch a simple website that works for you 24/7.",
    button: "Get started",
  };
}

function getLeadLink(cta: { title: string }) {
  const subject = encodeURIComponent(cta.title);
  const body = encodeURIComponent(
    "Hi, I'm interested in getting started. Please send me more details."
  );

  return `mailto:info@carameldigitalcontent.com?subject=${subject}&body=${body}`;
}

async function getPage(slug: string): Promise<PageData | null> {
  const year = new Date().getFullYear();
  const pages = await generatePages("US", year);
  return pages.find((p) => p.slug === slug) ?? null;
}

export async function generateStaticParams() {
  const year = new Date().getFullYear();
  const pages = await generatePages("US", year);

  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getPage(params.slug);

  if (!page) {
    return {
      title: "Page Not Found | Caramel Digital Studio",
      description: "The page you are looking for does not exist.",
    };
  }

  return {
    title: `${page.title} | Caramel Digital Studio`,
    description: page.description,
  };
}

export default async function Page({ params, searchParams }: Props) {
  const tier = resolveTier(searchParams.tier);
  const page = await getPage(params.slug);

  if (!page) {
    notFound();
  }

  const content = getTierContent(page.content, tier);
  const cta = getCTA(tier);
  const leadLink = getLeadLink(cta);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    url: `https://carameldigitalcontent.com/${page.slug}`,
    author: {
      "@type": "Organization",
      name: "Caramel Digital Studio",
    },
    publisher: {
      "@type": "Organization",
      name: "Caramel Digital Studio",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://carameldigitalcontent.com/${page.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-14 px-6 py-16 lg:gap-16">
        <article className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">{page.title}</h1>
          <p className="text-lg text-gray-600">{content}</p>
        </article>

        <section className="mt-12 rounded-xl border border-gray-200 p-6">
          <h2 className="mb-2 text-2xl font-semibold">{cta.title}</h2>
          <p className="mb-4 text-gray-600">{cta.description}</p>
          <a
            href={leadLink}
            className="inline-block rounded-lg bg-black px-6 py-3 text-white"
          >
            {cta.button}
          </a>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
