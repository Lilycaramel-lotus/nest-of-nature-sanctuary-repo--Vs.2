export type Tier = "beginner" | "intermediate" | "advanced";

export function generateContent(
  eventName: string,
  tier: Tier = "beginner"
): string {
  if (tier === "beginner") {
    return [
      `${eventName} is an important opportunity to grow your business.`,
      `This is a good time to improve your online presence and attract more customers.`,
      `A well-structured website helps people find and trust your business.`,
      `Simple systems can help you capture leads and respond faster.`,
      `Starting early gives you a clear advantage.`,
    ].join(" ");
  }

  if (tier === "intermediate") {
    return [
      `${eventName} is a key moment to improve conversion and lead flow.`,
      `Focus on structured funnels, landing pages, and targeted campaigns.`,
      `Automation can handle follow-ups and improve response speed.`,
      `Optimizing your system increases performance without increasing workload.`,
      `Track results and refine your approach continuously.`,
    ].join(" ");
  }

  return [
    `${eventName} is a high-leverage window for scaling operations.`,
    `AI agents can manage lead capture, responses, and workflow execution.`,
    `Your system runs continuously with minimal manual input.`,
    `You oversee performance, optimize systems, and control outcomes.`,
    `This is how modern businesses scale efficiently.`,
  ].join(" ");
}

export interface SEOContent {
  title: string;
  description: string;
  content: string;
  slug: string;
}

export function buildSEOContent(
  name: string,
  year: number,
  tier: Tier = "beginner"
): SEOContent {
  const content = generateContent(name, tier);
  const slug = name.toLowerCase().replace(/[\s']+/g, "-");
  return {
    title: `${name} ${year}`,
    description: content.slice(0, 160),
    content,
    slug,
  };
}
