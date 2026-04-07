import { buildSEOContent, SEOContent } from "./engine";

export interface PageData extends SEOContent {
  keywords: string[];
  year: number;
}

const ideas = [
  "Black Friday",
  "Cyber Monday",
  "New Year",
  "Valentine's Day",
];

const expandedIdeas = [
  "Spring Sale",
  "Summer Promotion",
  "Back to School",
  "Holiday Season",
];

const events = [
  "Tax Season",
  "End of Quarter",
  "Product Launch",
  "Industry Conference",
];

const discounts = [
  "Flash Sale",
  "Clearance Event",
  "Member Discount",
  "Referral Campaign",
];

const categoryAngles: Record<string, string> = {
  ideas: "seasonal demand planning",
  expanded: "campaign momentum building",
  events: "time-bound lead capture",
  discounts: "offer conversion optimization",
};

const audienceHooks = [
  "local service teams",
  "small ecommerce brands",
  "consultants and coaches",
  "growing startup operators",
  "community-based businesses",
  "independent professionals",
  "regional online sellers",
  "niche B2B service firms",
];

const executionHooks = [
  "fast page load",
  "clear mobile forms",
  "strong message hierarchy",
  "single-goal call to action",
  "intent-based section flow",
  "trust cues above the fold",
  "offer framing with urgency",
  "lightweight conversion tracking",
];

function trimToLength(value: string, maxLength: number): string {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength - 1).trimEnd()}.`;
}

function buildKeywords(name: string, year: number): string[] {
  const base = name.toLowerCase();

  return [
    `${base} website strategy`,
    `${base} landing page setup`,
    `${base} lead automation`,
    `${base} conversion campaign ${year}`,
  ];
}

function buildContent(
  name: string,
  year: number,
  country: string,
  category: "ideas" | "expanded" | "events" | "discounts",
  keywords: string[],
  index: number
): string {
  const hook = audienceHooks[index % audienceHooks.length];
  const execution = executionHooks[index % executionHooks.length];
  const angle = categoryAngles[category];
  const [primary, secondaryA, secondaryB, secondaryC] = keywords;

  return [
    `${name} ${year} creates a narrow window for high-intent traffic in ${country}.`,
    `Most buyers decide quickly during this period and ignore slow pages.`,
    `A clear offer, direct headline, and focused layout will outperform broad messaging.`,
    `Your plan should prioritize ${primary} before paid traffic spend increases.`,
    `This topic works best for ${hook} that need fast wins and reliable lead quality.`,
    `Start by aligning campaign language with buyer problems, not internal service names.`,
    `Then match each section to one user question and one next action.`,
    `Use ${secondaryA} as the core entry point for search and ad alignment.`,
    `Support it with ${secondaryB} to capture users ready to talk today.`,
    `Add ${secondaryC} for users comparing providers and pricing options.`,
    `Your page must stay simple, but every block must move the visitor forward.`,
    `Keep sentences short and remove any claim that does not help a decision.`,
    `Use proof early, including delivery timelines, outcomes, and clear scope.`,
    `For ${angle}, focus on urgency with realistic timelines and low-friction actions.`,
    `The best pages during ${name.toLowerCase()} cycles include ${execution} from day one.`,
    `This reduces drop-off and improves completion rates on smaller screens.`,
    `Segment traffic by intent, then route each visitor to one relevant CTA path.`,
    `Avoid generic forms and ask only for details needed for a fast follow-up.`,
    `Track clicks, form starts, and qualified submissions to guide weekly improvements.`,
    `Caramel Digital Studio can implement this framework with minimal operational overhead.`,
    `Review performance every seven days and refine copy based on real buyer language.`,
    `Consistency matters more than complexity when demand spikes and teams are stretched.`,
    `Link suggestions: /automation, /templates, /pricing`,
  ].join(" ");
}

function buildTitle(name: string, year: number, country: string): string {
  return `${name} ${year} Website Strategy for ${country} Businesses`;
}

function buildDescription(name: string, year: number, keywords: string[]): string {
  return trimToLength(
    `${name} ${year} playbook for fast growth using ${keywords[0]}, ${keywords[1]}, and ${keywords[2]} with clear conversion steps.`,
    160
  );
}

function buildPageData(
  name: string,
  country: string,
  year: number,
  category: "ideas" | "expanded" | "events" | "discounts",
  index: number
): PageData {
  const baseSEO = buildSEOContent(name, year);
  const keywords = buildKeywords(name, year);
  const content = buildContent(name, year, country, category, keywords, index);

  return {
    ...baseSEO,
    title: buildTitle(name, year, country),
    description: buildDescription(name, year, keywords),
    content,
    keywords,
    year,
  };
}

export async function generatePages(
  country: string,
  year: number
): Promise<PageData[]> {
  const pages: PageData[] = [];

  for (let i = 0; i < ideas.length; i += 1) {
    pages.push(buildPageData(ideas[i], country, year, "ideas", i));
  }

  for (let i = 0; i < expandedIdeas.length; i += 1) {
    pages.push(buildPageData(expandedIdeas[i], country, year, "expanded", i + ideas.length));
  }

  for (let i = 0; i < events.length; i += 1) {
    pages.push(buildPageData(events[i], country, year, "events", i + ideas.length + expandedIdeas.length));
  }

  for (let i = 0; i < discounts.length; i += 1) {
    pages.push(
      buildPageData(
        discounts[i],
        country,
        year,
        "discounts",
        i + ideas.length + expandedIdeas.length + events.length
      )
    );
  }

  return pages;
}
