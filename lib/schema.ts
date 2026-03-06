export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceSchema({
  name,
  description,
  areaServed,
}: {
  name: string;
  description: string;
  areaServed: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    areaServed: areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    provider: {
      "@type": "Organization",
      name: "Caramel Digital Studio",
    },
  };
}

export function reviewAggregateSchema({
  ratingValue,
  reviewCount,
}: {
  ratingValue: number;
  reviewCount: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Caramel Digital Studio",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
    },
  };
}
