const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outRoot = path.join(root, "sites");

const domainOverrides = {
  "ai-writing-tools-hub": "https://ai-writing-tools-hub-eosin.vercel.app",
  "ai-video-tools-hub": "https://ai-video-tools-hub-orpin.vercel.app",
  "ai-meeting-tools-hub": "https://ai-meeting-tools-hub-ashen.vercel.app",
  "ai-marketing-tools-hub": "https://ai-marketing-tools-hub-theta.vercel.app"
};

const sites = [
  {
    slug: "ai-writing-tools-hub",
    name: "AI Writing Tools Hub",
    niche: "AI writing tools",
    audience: "marketers, bloggers, founders, students, and teams comparing AI writing, editing, paraphrasing, and copywriting software",
    color: "#22d3ee",
    categories: ["Writing", "Editing", "Paraphrasing", "Copywriting", "Grammar"],
    tools: [
      ["Jasper", "AI marketing writing platform for campaigns, landing pages, and brand voice workflows.", "https://www.jasper.ai/"],
      ["QuillBot", "Paraphrasing, grammar checking, summarizing, citation, and writing assistance.", "https://quillbot.com/"],
      ["Grammarly", "Writing assistant for grammar, clarity, tone, and workplace communication.", "https://www.grammarly.com/"],
      ["Copy.ai", "AI go-to-market and copywriting platform for sales and marketing content.", "https://www.copy.ai/"],
      ["Writesonic", "AI writing and marketing content platform with article and ad copy workflows.", "https://writesonic.com/"],
      ["Notion AI", "AI writing, summarization, and knowledge assistance inside Notion workspaces.", "https://www.notion.com/product/ai"],
      ["Wordtune", "AI rewriting and editing assistant for clearer written communication.", "https://www.wordtune.com/"],
      ["Rytr", "AI writing assistant for short-form copy, emails, and blog drafts.", "https://rytr.me/"]
    ],
    sources: [
      ["QuillBot Affiliates", "https://quillbot.com/affiliates"],
      ["Jasper Affiliate Agreement", "https://www.jasper.ai/legal/affiliates"],
      ["Notion AI", "https://www.notion.com/product/ai"],
      ["Grammarly Business", "https://www.grammarly.com/business"]
    ]
  },
  {
    slug: "ai-video-tools-hub",
    name: "AI Video Tools Hub",
    niche: "AI video tools",
    audience: "creators, course sellers, marketers, agencies, and founders comparing AI video generators, editors, avatars, subtitle tools, and repurposing workflows",
    color: "#a78bfa",
    categories: ["Video Generation", "Editing", "Avatars", "Subtitles", "Repurposing"],
    tools: [
      ["InVideo AI", "AI video creation and editing platform for social videos, ads, and explainers.", "https://invideo.io/"],
      ["Runway", "AI video generation, editing, image-to-video, and creative production tools.", "https://runwayml.com/"],
      ["Synthesia", "AI avatar video platform for training, onboarding, and business communication.", "https://www.synthesia.io/"],
      ["Descript", "AI video and audio editor with transcription-based editing and clips.", "https://www.descript.com/"],
      ["Pictory", "AI video tool for turning scripts, posts, and long videos into short clips.", "https://pictory.ai/"],
      ["OpusClip", "AI clipping tool for repurposing long videos into social shorts.", "https://www.opus.pro/"],
      ["VEED", "Online video editor with AI subtitles, cleanup, translation, and recording tools.", "https://www.veed.io/"],
      ["Kling AI", "AI image and video generation platform for creative video workflows.", "https://kling.ai/"]
    ],
    sources: [
      ["InVideo Affiliate Program", "https://invideo.io/make/affiliate-program/"],
      ["Synthesia", "https://www.synthesia.io/"],
      ["Runway", "https://runwayml.com/"],
      ["Descript", "https://www.descript.com/"]
    ]
  },
  {
    slug: "ai-image-tools-hub",
    name: "AI Image Tools Hub",
    niche: "AI image tools",
    audience: "designers, ecommerce operators, social teams, creators, and marketers comparing AI image generators, upscalers, background tools, and product image workflows",
    color: "#f472b6",
    categories: ["Image Generation", "Product Images", "Upscaling", "Backgrounds", "Editing"],
    tools: [
      ["Midjourney", "AI image generation system used for creative concepting and visual exploration.", "https://www.midjourney.com/"],
      ["Adobe Firefly", "Generative AI tools for images, text effects, and Adobe creative workflows.", "https://www.adobe.com/products/firefly.html"],
      ["Leonardo AI", "AI image generation and production platform for creative assets.", "https://leonardo.ai/"],
      ["Ideogram", "AI image generation tool with strong typography and poster-style output.", "https://ideogram.ai/"],
      ["Photoroom", "AI product image editing, background removal, and ecommerce image tools.", "https://www.photoroom.com/"],
      ["Remove.bg", "Automated background removal for images and product assets.", "https://www.remove.bg/"],
      ["Topaz Gigapixel", "AI image upscaling and enhancement software.", "https://www.topazlabs.com/gigapixel"],
      ["Canva AI Image Generator", "AI image and design tools inside Canva's creative suite.", "https://www.canva.com/ai-image-generator/"]
    ],
    sources: [
      ["Adobe Firefly", "https://www.adobe.com/products/firefly.html"],
      ["Canva AI Image Generator", "https://www.canva.com/ai-image-generator/"],
      ["Photoroom", "https://www.photoroom.com/"],
      ["Remove.bg", "https://www.remove.bg/"]
    ]
  },
  {
    slug: "ai-design-tools-hub",
    name: "AI Design Tools Hub",
    niche: "AI design tools",
    audience: "founders, creators, designers, agencies, and small businesses comparing AI tools for logos, presentations, brand assets, mockups, and visual content",
    color: "#38bdf8",
    categories: ["Design", "Presentations", "Branding", "Mockups", "Social Graphics"],
    tools: [
      ["Canva", "Design platform with AI features for presentations, graphics, brand assets, and visual content.", "https://www.canva.com/"],
      ["Microsoft Designer", "AI design tool for images, social graphics, and creative assets.", "https://designer.microsoft.com/"],
      ["Beautiful.ai", "AI presentation builder for business slides and pitch decks.", "https://www.beautiful.ai/"],
      ["Gamma", "AI presentation and document creation tool for decks, pages, and briefs.", "https://gamma.app/"],
      ["Figma AI", "AI features inside Figma for design workflows and product teams.", "https://www.figma.com/ai/"],
      ["Looka", "AI logo maker and brand kit generator for small businesses.", "https://looka.com/"],
      ["Designs.ai", "AI-assisted design suite for logos, videos, and marketing assets.", "https://designs.ai/"],
      ["Uizard", "AI UI design tool for wireframes, mockups, and product concepts.", "https://uizard.io/"]
    ],
    sources: [
      ["Canva Canvassador Program", "https://www.canva.com/help/canva-affiliate-marketing-program/"],
      ["Figma AI", "https://www.figma.com/ai/"],
      ["Gamma", "https://gamma.app/"],
      ["Beautiful.ai", "https://www.beautiful.ai/"]
    ]
  },
  {
    slug: "ai-coding-tools-hub",
    name: "AI Coding Tools Hub",
    niche: "AI coding tools",
    audience: "developers, founders, technical marketers, and builders comparing AI coding assistants, app builders, code review tools, and developer agents",
    color: "#34d399",
    categories: ["Coding Assistants", "App Builders", "Code Review", "Agents", "Developer Search"],
    tools: [
      ["GitHub Copilot", "AI coding assistant for code completion, chat, and developer workflows.", "https://github.com/features/copilot"],
      ["Cursor", "AI code editor designed for assisted software development.", "https://cursor.com/"],
      ["Replit", "Cloud development platform with AI agent and app-building workflows.", "https://replit.com/"],
      ["Codeium Windsurf", "AI coding environment and assistant for developers.", "https://windsurf.com/"],
      ["Tabnine", "AI code completion assistant for development teams.", "https://www.tabnine.com/"],
      ["Sourcegraph Cody", "AI coding assistant with codebase-aware chat and search.", "https://sourcegraph.com/cody"],
      ["v0", "AI UI generation tool for React and web app prototypes.", "https://v0.dev/"],
      ["Bolt", "AI app builder for creating full-stack web applications in the browser.", "https://bolt.new/"]
    ],
    sources: [
      ["GitHub Copilot", "https://github.com/features/copilot"],
      ["Replit Referral Program", "https://replit.com/refer"],
      ["Replit Partners", "https://replit.com/partners"],
      ["Sourcegraph Cody", "https://sourcegraph.com/cody"]
    ]
  },
  {
    slug: "ai-meeting-tools-hub",
    name: "AI Meeting Tools Hub",
    niche: "AI meeting tools",
    audience: "sales teams, managers, recruiters, consultants, and remote teams comparing AI meeting notes, transcription, summaries, and action item tools",
    color: "#60a5fa",
    categories: ["Transcription", "Meeting Notes", "Sales Calls", "Summaries", "Action Items"],
    tools: [
      ["Otter.ai", "AI meeting assistant for transcription, summaries, and meeting insights.", "https://otter.ai/"],
      ["Fireflies.ai", "AI meeting notes, transcription, search, and conversation intelligence.", "https://fireflies.ai/"],
      ["Fathom", "AI meeting recorder and note taker for Zoom, Google Meet, and Teams.", "https://fathom.video/"],
      ["tl;dv", "AI meeting recorder for summaries, clips, and sales or research workflows.", "https://tldv.io/"],
      ["Avoma", "AI meeting assistant and conversation intelligence for customer-facing teams.", "https://www.avoma.com/"],
      ["Sembly AI", "AI meeting notes, tasks, and summaries for business meetings.", "https://www.sembly.ai/"],
      ["Krisp", "AI noise cancellation and meeting assistant features.", "https://krisp.ai/"],
      ["Read AI", "AI meeting summaries, analytics, and productivity insights.", "https://www.read.ai/"]
    ],
    sources: [
      ["Otter AI Meeting Agent", "https://otter.ai/"],
      ["Otter Referral Terms", "https://otter.ai/referral-terms"],
      ["Fireflies.ai", "https://fireflies.ai/"],
      ["Fathom", "https://fathom.video/"]
    ]
  },
  {
    slug: "ai-automation-tools-hub",
    name: "AI Automation Tools Hub",
    niche: "AI automation tools",
    audience: "operators, founders, agencies, no-code builders, and small teams comparing AI workflow automation, agents, integrations, and business process automation",
    color: "#facc15",
    categories: ["Workflow Automation", "Agents", "No-Code", "Integrations", "Operations"],
    tools: [
      ["Zapier AI", "AI automation and integration platform for connecting apps and workflows.", "https://zapier.com/ai"],
      ["Make", "Visual automation platform for workflows, apps, and business operations.", "https://www.make.com/"],
      ["n8n", "Workflow automation platform with self-hosting and AI workflow support.", "https://n8n.io/"],
      ["Bardeen", "AI browser automation tool for repetitive web workflows.", "https://www.bardeen.ai/"],
      ["Lindy", "AI assistant platform for automated business workflows.", "https://www.lindy.ai/"],
      ["Relay.app", "Automation platform for human-in-the-loop workflows.", "https://www.relay.app/"],
      ["Gumloop", "AI automation platform for building workflows with apps and data.", "https://www.gumloop.com/"],
      ["Pipedream", "Developer automation platform for APIs, workflows, and integrations.", "https://pipedream.com/"]
    ],
    sources: [
      ["Zapier AI", "https://zapier.com/ai"],
      ["Make", "https://www.make.com/"],
      ["n8n", "https://n8n.io/"],
      ["Pipedream", "https://pipedream.com/"]
    ]
  },
  {
    slug: "ai-customer-support-tools",
    name: "AI Customer Support Tools",
    niche: "AI customer support tools",
    audience: "support leaders, ecommerce teams, SaaS founders, and CX operators comparing AI chatbots, helpdesk automation, ticket routing, and support agents",
    color: "#fb7185",
    categories: ["Chatbots", "Helpdesk", "Ticket Automation", "Ecommerce Support", "Knowledge Base"],
    tools: [
      ["Intercom Fin", "AI customer service agent for support automation and helpdesk workflows.", "https://www.intercom.com/fin"],
      ["Zendesk AI", "AI features for customer service, ticketing, and support operations.", "https://www.zendesk.com/ai/"],
      ["Gorgias AI", "Ecommerce helpdesk with AI automation for Shopify and retail support.", "https://www.gorgias.com/"],
      ["Freshdesk AI", "AI-powered customer support and ticket management features.", "https://www.freshworks.com/freshdesk/"],
      ["Tidio", "Customer service chatbot and live chat platform for ecommerce and SMBs.", "https://www.tidio.com/"],
      ["Ada", "AI customer service automation platform for enterprises.", "https://www.ada.cx/"],
      ["Crisp", "Customer messaging platform with AI chatbot and shared inbox workflows.", "https://crisp.chat/"],
      ["Help Scout AI", "Customer support platform with AI assistance for support teams.", "https://www.helpscout.com/ai/"]
    ],
    sources: [
      ["Intercom Fin", "https://www.intercom.com/fin"],
      ["Zendesk AI", "https://www.zendesk.com/ai/"],
      ["Gorgias", "https://www.gorgias.com/"],
      ["Help Scout AI", "https://www.helpscout.com/ai/"]
    ]
  },
  {
    slug: "ai-resume-job-tools",
    name: "AI Resume & Job Tools",
    niche: "AI resume and job search tools",
    audience: "job seekers, career coaches, students, and professionals comparing AI resume builders, cover letter tools, interview prep, and job search assistants",
    color: "#c084fc",
    categories: ["Resume Builders", "Cover Letters", "Interview Prep", "Job Search", "Career Coaching"],
    tools: [
      ["Teal", "AI resume builder, job tracker, and career workflow platform.", "https://www.tealhq.com/"],
      ["Kickresume", "AI resume and cover letter builder with templates.", "https://www.kickresume.com/"],
      ["Rezi", "AI resume builder focused on ATS-friendly resumes.", "https://www.rezi.ai/"],
      ["Enhancv", "Resume builder with AI assistance and templates.", "https://enhancv.com/"],
      ["Jobscan", "Resume optimization tool for matching resumes to job descriptions.", "https://www.jobscan.co/"],
      ["Huntr", "Job search tracker with resume and application tools.", "https://huntr.co/"],
      ["Interview Warmup", "Google interview practice tool for job seekers.", "https://grow.google/certificates/interview-warmup/"],
      ["Yoodli", "AI speech coach for interviews, presentations, and communication practice.", "https://www.yoodli.ai/"]
    ],
    sources: [
      ["Teal", "https://www.tealhq.com/"],
      ["Jobscan", "https://www.jobscan.co/"],
      ["Google Interview Warmup", "https://grow.google/certificates/interview-warmup/"],
      ["Yoodli", "https://www.yoodli.ai/"]
    ]
  },
  {
    slug: "ai-learning-tools-hub",
    name: "AI Learning Tools Hub",
    niche: "AI learning tools",
    audience: "students, teachers, parents, language learners, and lifelong learners comparing AI tutors, study tools, flashcards, and learning assistants",
    color: "#2dd4bf",
    categories: ["Tutors", "Study Notes", "Flashcards", "Language Learning", "Homework Help"],
    tools: [
      ["Khanmigo", "AI tutor and teaching assistant from Khan Academy.", "https://www.khanacademy.org/khan-labs"],
      ["Quizlet Q-Chat", "AI study assistant and flashcard learning workflows inside Quizlet.", "https://quizlet.com/"],
      ["Duolingo Max", "AI-powered language learning features from Duolingo.", "https://www.duolingo.com/max"],
      ["Socratic", "Google learning app for homework explanations and study help.", "https://socratic.org/"],
      ["NotebookLM", "AI research and learning assistant grounded in user-provided sources.", "https://notebooklm.google/"],
      ["Coursera Coach", "AI learning features and course assistance from Coursera.", "https://www.coursera.org/"],
      ["Studyable", "AI study assistant for explanations, flashcards, and quizzes.", "https://studyable.app/"],
      ["Explainpaper", "AI tool for understanding academic papers and complex text.", "https://www.explainpaper.com/"]
    ],
    sources: [
      ["Khan Academy Khanmigo", "https://www.khanacademy.org/khan-labs"],
      ["Duolingo Max", "https://www.duolingo.com/max"],
      ["NotebookLM", "https://notebooklm.google/"],
      ["Quizlet", "https://quizlet.com/"]
    ]
  },
  {
    slug: "ai-research-tools-hub",
    name: "AI Research Tools Hub",
    niche: "AI research tools",
    audience: "researchers, students, analysts, writers, and knowledge workers comparing AI literature review, paper summarization, citation, and source-grounded research tools",
    color: "#818cf8",
    categories: ["Literature Review", "Paper Summaries", "Citations", "Source Search", "Academic Writing"],
    tools: [
      ["Perplexity", "AI answer engine for research, source discovery, and web-grounded answers.", "https://www.perplexity.ai/"],
      ["Elicit", "AI research assistant for literature review and paper analysis.", "https://elicit.com/"],
      ["Consensus", "AI search engine for scientific research and evidence summaries.", "https://consensus.app/"],
      ["Semantic Scholar", "AI-powered scientific literature search and discovery.", "https://www.semanticscholar.org/"],
      ["Paperpal", "AI academic writing assistant for researchers and students.", "https://paperpal.com/"],
      ["Scite", "Research tool for citation context and evidence evaluation.", "https://scite.ai/"],
      ["Research Rabbit", "Research discovery tool for papers, authors, and literature mapping.", "https://www.researchrabbit.ai/"],
      ["NotebookLM", "Source-grounded AI notebook for research and synthesis.", "https://notebooklm.google/"]
    ],
    sources: [
      ["Paperpal Affiliate Program", "https://paperpal.com/affiliate-program"],
      ["Semantic Scholar", "https://www.semanticscholar.org/"],
      ["Elicit", "https://elicit.com/"],
      ["Consensus", "https://consensus.app/"]
    ]
  },
  {
    slug: "ai-marketing-tools-hub",
    name: "AI Marketing Tools Hub",
    niche: "AI marketing tools",
    audience: "growth marketers, founders, agencies, ecommerce teams, and creators comparing AI tools for ad creatives, email, social, landing pages, and campaign operations",
    color: "#fb923c",
    categories: ["Ad Creative", "Email", "Social", "Landing Pages", "Campaign Ops"],
    tools: [
      ["Jasper", "AI marketing platform for campaign content and brand voice workflows.", "https://www.jasper.ai/"],
      ["AdCreative.ai", "AI ad creative generation and scoring platform.", "https://www.adcreative.ai/"],
      ["Copy.ai", "AI go-to-market workflows for sales and marketing teams.", "https://www.copy.ai/"],
      ["Klaviyo AI", "AI marketing automation features for ecommerce email and SMS.", "https://www.klaviyo.com/ai"],
      ["HubSpot AI", "AI marketing, sales, and service features inside HubSpot.", "https://www.hubspot.com/artificial-intelligence"],
      ["Mailchimp AI", "AI-assisted email marketing and campaign tools.", "https://mailchimp.com/features/ai-marketing-tools/"],
      ["Predis.ai", "AI social media content generation and scheduling workflows.", "https://predis.ai/"],
      ["Unbounce Smart Copy", "AI copywriting for landing pages, ads, and marketing campaigns.", "https://unbounce.com/product/smart-copy/"]
    ],
    sources: [
      ["Jasper Affiliate Agreement", "https://www.jasper.ai/legal/affiliates"],
      ["Klaviyo AI", "https://www.klaviyo.com/ai"],
      ["HubSpot AI", "https://www.hubspot.com/artificial-intelligence"],
      ["Mailchimp AI Marketing Tools", "https://mailchimp.com/features/ai-marketing-tools/"]
    ]
  }
];

const articleAngles = [
  "best tools for beginners",
  "best tools for small businesses",
  "free vs paid tools",
  "tool comparison checklist",
  "workflow for creators",
  "workflow for agencies",
  "workflow for ecommerce teams",
  "workflow for students",
  "automation use cases",
  "pricing questions to ask",
  "features that matter",
  "mistakes to avoid",
  "buyer guide",
  "alternatives to compare",
  "templates and prompts",
  "team adoption plan",
  "privacy and data checklist",
  "output quality checklist",
  "case study workflow",
  "ROI measurement",
  "beginner setup guide",
  "advanced workflow",
  "content operations workflow",
  "solo creator workflow",
  "enterprise evaluation",
  "integration checklist",
  "trial evaluation plan",
  "monthly tool stack",
  "comparison matrix",
  "launch checklist"
];

const highIntentModifiers = [
  "best",
  "pricing",
  "reviews",
  "comparison",
  "alternatives",
  "for small business",
  "for agencies",
  "for ecommerce",
  "for creators",
  "for teams",
  "free trial",
  "discount",
  "affiliate program",
  "vs",
  "software",
  "platform",
  "use cases",
  "templates",
  "workflow",
  "ROI"
];

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function write(file, content) {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, content, "utf8");
}

function cleanDir(dir) {
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

function baseUrl(site) {
  return domainOverrides[site.slug] || `https://${site.slug}.vercel.app`;
}

function articleSlug(site, index) {
  return `${String(index + 1).padStart(2, "0")}-${slugify(site.niche)}-${slugify(articleAngles[index])}`;
}

function articleIntent(angle) {
  if (/best|comparison|alternatives|free vs paid/.test(angle)) return "purchase comparison";
  if (/pricing|free trial|discount|ROI/.test(angle)) return "commercial evaluation";
  if (/workflow|use cases|templates|setup|integration|launch|monthly/.test(angle)) return "implementation workflow";
  if (/privacy|enterprise|team|quality|mistakes/.test(angle)) return "risk and adoption";
  return "buyer education";
}

function articleFormat(angle) {
  if (/best|comparison|alternatives|free vs paid/.test(angle)) return "Comparison guide";
  if (/pricing|free trial|discount|ROI/.test(angle)) return "Pricing and upgrade guide";
  if (/workflow|use cases|templates|setup|integration|launch|monthly/.test(angle)) return "Workflow playbook";
  if (/privacy|enterprise|team|quality|mistakes/.test(angle)) return "Evaluation checklist";
  return "Buyer guide";
}

function naturalArticleTitle(site, angle) {
  const niche = escapeTitle(site.niche);
  if (angle === "best tools for beginners") return `Best ${niche} for Beginners: Evidence-Based Comparison Guide`;
  if (angle === "best tools for small businesses") return `Best ${niche} for Small Businesses: Pricing, Use Cases, and Tradeoffs`;
  if (angle === "free vs paid tools") return `Free vs Paid ${niche}: When to Upgrade and What to Check`;
  if (angle === "tool comparison checklist") return `${niche} Comparison Checklist: Features, Risks, and Buying Signals`;
  if (angle === "alternatives to compare") return `Best ${niche} Alternatives to Compare Before You Buy`;
  if (angle === "pricing questions to ask") return `${niche} Pricing Questions to Ask Before Starting a Trial`;
  if (angle === "ROI measurement") return `${niche} ROI Measurement: A Practical Evaluation Framework`;
  if (angle === "privacy and data checklist") return `${niche} Privacy and Data Checklist for Teams`;
  return `${niche} ${escapeTitle(angle)}: Practical Buyer Guide`;
}

function siteArticles(site) {
  return articleAngles.map((angle, index) => {
    const keyword = `${site.niche} ${angle}`;
    const primary = site.tools[index % site.tools.length];
    const secondary = site.tools[(index + 3) % site.tools.length];
    const tertiary = site.tools[(index + 5) % site.tools.length];
    return {
      index,
      angle,
      slug: articleSlug(site, index),
      keyword,
      title: naturalArticleTitle(site, angle),
      intent: articleIntent(angle),
      format: articleFormat(angle),
      primary,
      secondary,
      tertiary
    };
  });
}

function toolRecord(site, tool, index = 0) {
  const [name, desc, officialUrl] = tool;
  const matchingSource = site.sources.find(([sourceName]) => sourceName.toLowerCase().includes(name.toLowerCase().split(" ")[0]));
  const partnerSource = site.sources.find(([sourceName]) => /affiliate|partner|referral|canvassador/i.test(sourceName));
  return {
    name,
    desc,
    officialUrl,
    pricingUrl: officialUrl,
    affiliateUrl: matchingSource ? matchingSource[1] : partnerSource ? partnerSource[1] : officialUrl,
    referenceUrl: site.sources[index % site.sources.length][1],
    referenceName: site.sources[index % site.sources.length][0]
  };
}

function evidenceItems(site, article) {
  const tools = [article.primary, article.secondary, article.tertiary].map((tool, index) => toolRecord(site, tool, index));
  const sourceRecords = site.sources.map(([name, url]) => ({ name, url, note: "Public source used to verify product positioning, partner terms, or feature claims." }));
  const toolRecords = tools.map((tool) => ({
    name: `${tool.name} official product page`,
    url: tool.officialUrl,
    note: `${tool.name} source for feature positioning and current product scope.`
  }));
  const combined = [...toolRecords, ...sourceRecords];
  const seen = new Set();
  return combined.filter((item) => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  }).slice(0, 6);
}

function scenarioForArticle(site, article) {
  const scenarios = [
    `A small team compares three ${site.niche} before committing budget for a monthly workflow.`,
    `An agency needs a repeatable process for 12 client deliverables per month and wants fewer manual review cycles.`,
    `A solo creator tests one real project before paying for a subscription and tracks setup time, revision time, and final quality.`,
    `An ecommerce operator checks whether the tool can support campaign assets, product pages, or support workflows without adding privacy risk.`,
    `A student, founder, or operator wants a low-risk trial path before moving work into a paid tool.`
  ];
  return scenarios[article.index % scenarios.length];
}

function searchIntentMap(site, article) {
  const primaryName = toolRecord(site, article.primary).name;
  const secondaryName = toolRecord(site, article.secondary).name;
  return {
    problem: `The reader needs to choose ${site.niche} for a real workflow without wasting time on generic feature lists.`,
    buyerQuery: article.keyword,
    comparisonQuery: `${primaryName} vs ${secondaryName}`,
    moneyPage: `/go/${slugify(primaryName)}.html`,
    supportingArticle: `/articles/${article.slug}.html`
  };
}

function buyingAdvice(angle) {
  if (/pricing|free trial|discount|free vs paid/.test(angle)) {
    return ["Upgrade when the paid plan removes a repeated bottleneck or unlocks exports, team controls, or volume limits you actually need.", "Stay free when you are still testing prompts, formats, or one-off projects.", "Before paying, confirm limits, renewal terms, usage rights, and whether the plan covers your real monthly volume."];
  }
  if (/privacy|enterprise|team/.test(angle)) {
    return ["Buy only after checking permission controls, data handling terms, admin features, and whether the tool fits your approval workflow.", "Do not buy if the tool cannot explain data usage or if your team cannot review outputs before publication.", "Run one pilot project with realistic inputs before inviting a wider team."];
  }
  if (/workflow|use cases|templates|setup|integration|launch/.test(angle)) {
    return ["Buy when the tool fits your existing inputs, review steps, and export destinations.", "Do not buy just because the demo looks polished; test the messy edge cases your team actually handles.", "Measure setup time, review time, rework, and final output quality during the trial."];
  }
  return ["Buy when one tool clearly wins on workflow fit, output quality, and total monthly cost.", "Avoid buying when two tools produce similar results but one creates extra review or export work.", "Shortlist three tools first, then test the same prompt, file, or project in each tool."];
}

function highIntentKeywords(site) {
  return highIntentModifiers.map((modifier, index) => {
    const tool = site.tools[index % site.tools.length][0];
    if (modifier === "vs") return `${tool} vs ${site.tools[(index + 1) % site.tools.length][0]}`;
    return `${modifier} ${site.niche}`;
  });
}

function keywordPlan(site) {
  return highIntentKeywords(site).map((keyword, index) => ({
    keyword,
    intent: index < 6 ? "Purchase comparison" : index < 14 ? "Evaluation" : "Implementation",
    format: index % 4 === 0 ? "Tool comparison page" : index % 4 === 1 ? "Buyer guide" : index % 4 === 2 ? "Alternatives page" : "Workflow article",
    priority: index < 8 ? "High" : index < 15 ? "Medium" : "Build later",
    article: siteArticles(site)[index % articleAngles.length],
    problem: index < 6 ? `Choose ${site.niche} with buying confidence.` : index < 14 ? `Compare tools, plans, and workflow fit before starting a trial.` : `Turn ${site.niche} into a repeatable workflow.`,
    buyerQuery: keyword,
    comparisonQuery: `${site.tools[index % site.tools.length][0]} vs ${site.tools[(index + 1) % site.tools.length][0]}`,
    moneyPage: `/go/${slugify(site.tools[index % site.tools.length][0])}.html`
  }));
}

function escapeTitle(value) {
  return value.replace(/\b\w/g, (char) => char.toUpperCase());
}

function layout(site, title, description, body, extraHead = "", pagePath = "") {
  const url = `${baseUrl(site)}/${pagePath}`.replace(/\/+$/, "/");
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(description)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta name="twitter:card" content="summary" />
    <link rel="canonical" href="${url}" />
    <title>${escapeHtml(title)}</title>
    <link rel="stylesheet" href="/styles.css" />
    ${extraHead}
  </head>
  <body style="--accent: ${site.color}">
    <header class="site-header">
      <nav class="nav">
        <a class="brand" href="/"><span class="brand-mark">AI</span><span>${escapeHtml(site.name)}<small>${escapeHtml(site.niche)}</small></span></a>
        <div class="nav-links"><a href="/articles/">Articles</a><a href="/#tools">Tools</a><a href="/keyword-plan.html">Keyword Plan</a><a href="/affiliate-disclosure.html">Disclosure</a></div>
      </nav>
    </header>
    ${body}
    <footer class="site-footer">
      <p>${escapeHtml(site.name)} publishes independent ${escapeHtml(site.niche)} comparisons, guides, and commercial research.</p>
      <div><a href="/about.html">About</a><a href="/editorial-policy.html">Editorial Policy</a><a href="/affiliate-disclosure.html">Affiliate Disclosure</a></div>
    </footer>
    <script>
      window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
    </script>
    <script defer src="/_vercel/insights/script.js"></script>
  </body>
</html>`;
}

function homePage(site) {
  const articles = siteArticles(site);
  const description = `${site.name} compares ${site.niche} for ${site.audience}.`;
  const categories = site.categories.map((category) => `<span>${escapeHtml(category)}</span>`).join("");
  const segmentCards = ["creators", "small businesses", "agencies", "ecommerce teams", "students"].map((segment, index) => {
    const article = articles[(index + 4) % articles.length];
    return `<a class="segment-card" href="/articles/${article.slug}.html"><span>Best for</span><strong>${escapeHtml(segment)}</strong><small>${escapeHtml(article.keyword)}</small></a>`;
  }).join("\n");
  const tools = site.tools.map(([name, desc], index) => {
    const slug = slugify(name);
    return `<article class="tool-card">
      <p class="eyebrow">${escapeHtml(site.categories[index % site.categories.length])}</p>
      <h3>${escapeHtml(name)}</h3>
      <p>${escapeHtml(desc)}</p>
      <a class="button" href="/go/${slug}.html" rel="sponsored">Visit ${escapeHtml(name)}</a>
    </article>`;
  }).join("\n");
  const articleCards = articles.slice(0, 8).map((article) => `<a class="article-card" href="/articles/${article.slug}.html"><span>${String(article.index + 1).padStart(2, "0")}</span><strong>${escapeHtml(article.title)}</strong><small>${escapeHtml(article.keyword)}</small></a>`).join("\n");
  const sourceLinks = site.sources.map(([name, url]) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(name)}</a>`).join("");
  const sponsorCards = site.tools.slice(0, 3).map(([name, desc], index) => `<article class="sponsor-card">
      <div class="ad-visual"><span>${escapeHtml(name.split(/\s+/).map((word) => word[0]).join("").slice(0, 3))}</span></div>
      <p class="eyebrow">Sponsored slot ${index + 1}</p>
      <h3>${escapeHtml(name)} partner placement</h3>
      <p>${escapeHtml(desc)}</p>
      <a class="button primary" href="/go/${slugify(name)}.html" rel="sponsored">Try ${escapeHtml(name)}</a>
    </article>`).join("\n");
  const body = `<main>
    <section class="hero">
      <div>
        <p class="eyebrow">Focused AI niche site</p>
        <h1>${escapeHtml(site.name)} for practical software buyers.</h1>
        <p>${escapeHtml(description)} The site focuses on buying-intent comparisons, real workflows, source-backed notes, and affiliate-ready tool tracking.</p>
        <div class="actions"><a class="button primary" href="#tools">Browse tools</a><a class="button secondary" href="/articles/">Read 30 guides</a><a class="button secondary" href="/keyword-plan.html">See SEO plan</a></div>
      </div>
      <aside class="hero-panel">
        <strong>Launch scope</strong>
        <p>8 tools, 30 articles, tracked redirects, disclosure pages, sitemap, and analytics.</p>
        <div class="chips">${categories}</div>
      </aside>
    </section>
    <section class="ad-slot">
      <span>Affiliate-ready placement</span>
      <strong>Partner slot for ${escapeHtml(site.niche)} vendors</strong>
      <small>Use this area for approved affiliate offers, newsletter sponsorships, or direct vendor ads. Tool clicks route through /go/ pages so Vercel Analytics can show click interest by page.</small>
    </section>
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">Use-case paths</p><h2>Choose by buyer scenario</h2></div><p>Searchers often look by role, budget, and workflow. These entry points route them to supporting articles.</p></div>
      <div class="segment-grid">${segmentCards}</div>
    </section>
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">Ad inventory</p><h2>Featured partner placements</h2></div><p>Three above-the-fold sponsor cards ready for affiliate links or direct ad sales.</p></div>
      <div class="sponsor-grid">${sponsorCards}</div>
    </section>
    <section class="section" id="tools">
      <div class="section-head"><div><p class="eyebrow">Tool directory</p><h2>Compare ${escapeHtml(site.niche)}</h2></div><p>${site.tools.length} tools selected for the first version.</p></div>
      <div class="tool-grid">${tools}</div>
    </section>
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">Commercial articles</p><h2>Buying-intent guide library</h2></div><a href="/articles/">View all</a></div>
      <div class="article-grid">${articleCards}</div>
    </section>
    <section class="section proof">
      <p class="eyebrow">Source base</p>
      <h2>Initial source links used for verification</h2>
      <div class="source-links">${sourceLinks}</div>
    </section>
  </main>`;
  return layout(site, `${site.name} | ${escapeTitle(site.niche)} Directory`, description, body);
}

function articleIndex(site) {
  const articles = siteArticles(site);
  const cards = articles.map((article) => `<a class="article-card" href="/articles/${article.slug}.html"><span>${String(article.index + 1).padStart(2, "0")}</span><strong>${escapeHtml(article.title)}</strong><small>${escapeHtml(article.keyword)}</small></a>`).join("\n");
  const body = `<main class="section"><p class="eyebrow">Article library</p><h1>30 ${escapeHtml(site.niche)} guides</h1><p class="lead">Each article targets a practical buyer question and links back to relevant tools.</p><div class="article-grid">${cards}</div></main>`;
  return layout(site, `Articles | ${site.name}`, `30 English ${site.niche} articles for commercial search and affiliate research.`, body, "", "articles/");
}

function keywordPlanPage(site) {
  const rows = keywordPlan(site).map((item, index) => `<tr>
      <td>${index + 1}</td>
      <td>${escapeHtml(item.problem)}</td>
      <td><strong>${escapeHtml(item.buyerQuery)}</strong></td>
      <td>${escapeHtml(item.comparisonQuery)}</td>
      <td><a href="${escapeHtml(item.moneyPage)}" rel="sponsored">${escapeHtml(item.moneyPage)}</a></td>
      <td>${escapeHtml(item.intent)}</td>
      <td><a href="/articles/${item.article.slug}.html">${escapeHtml(item.article.title)}</a><small>${escapeHtml(item.priority)} / ${escapeHtml(item.format)}</small></td>
    </tr>`).join("\n");
  const monthlyPlan = siteArticles(site).slice(0, 12).map((article, index) => `<li><strong>Week ${Math.floor(index / 3) + 1}:</strong> publish <a href="/articles/${article.slug}.html">${escapeHtml(article.keyword)}</a>, then add one internal link from the homepage or a related guide.</li>`).join("\n");
  const body = `<main class="article">
    <p class="eyebrow">SEO roadmap</p>
    <h1>20 high-intent ${escapeHtml(site.niche)} keywords</h1>
    <p class="lead">This plan prioritizes keywords with buying signals such as pricing, reviews, alternatives, comparisons, trials, and workflow fit. Use it to decide which pages to improve first after the site starts getting impressions in Google Search Console.</p>
    <section>
      <h2>Keyword priority table</h2>
      <table class="plan-table"><thead><tr><th>#</th><th>Problem</th><th>Buyer query</th><th>Comparison query</th><th>Money page</th><th>Intent</th><th>Supporting article</th></tr></thead><tbody>${rows}</tbody></table>
    </section>
    <section>
      <h2>30-day publishing rhythm</h2>
      <ol>${monthlyPlan}</ol>
    </section>
    <section>
      <h2>Monetization notes</h2>
      <p>Keep editorial articles useful first, then place affiliate calls-to-action only where the reader is already comparing tools. The best first placements are the homepage sponsor cards, the tool directory buttons, and article sections that mention a specific tool by name.</p>
      <p>Check Vercel Analytics for visits to <code>/go/tool-name.html</code>. Those pageviews are your lightweight click-tracking signal on the free plan.</p>
    </section>
  </main>`;
  return layout(site, `Keyword Plan | ${site.name}`, `20 high-intent ${site.niche} keywords and publishing priorities.`, body, "", "keyword-plan.html");
}

function articlePage(site, article) {
  const primary = toolRecord(site, article.primary, 0);
  const secondary = toolRecord(site, article.secondary, 1);
  const tertiary = toolRecord(site, article.tertiary, 2);
  const tools = [primary, secondary, tertiary];
  const evidence = evidenceItems(site, article);
  const intentMap = searchIntentMap(site, article);
  const advice = buyingAdvice(article.angle);
  const prevArticle = siteArticles(site)[article.index - 1];
  const nextArticle = siteArticles(site)[article.index + 1];
  const sourceList = evidence.map((item) => `<li><a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.name)}</a><span>${escapeHtml(item.note)}</span></li>`).join("");
  const comparisonRows = tools.map((tool, index) => `<tr>
        <td><strong>${escapeHtml(tool.name)}</strong></td>
        <td>${escapeHtml(tool.desc)}</td>
        <td>${index === 0 ? "Primary option to test first" : index === 1 ? "Comparison benchmark" : "Backup alternative"}</td>
        <td><a href="/go/${slugify(tool.name)}.html" rel="sponsored">Track visit</a></td>
      </tr>`).join("\n");
  const relatedLinks = [
    prevArticle ? `<a href="/articles/${prevArticle.slug}.html">Previous: ${escapeHtml(prevArticle.keyword)}</a>` : "",
    nextArticle ? `<a href="/articles/${nextArticle.slug}.html">Next: ${escapeHtml(nextArticle.keyword)}</a>` : "",
    `<a href="/keyword-plan.html">Keyword intent map</a>`,
    `<a href="/#tools">Tool directory</a>`
  ].filter(Boolean).join("");
  const body = `<main class="article">
    <p class="eyebrow">${escapeHtml(article.keyword)}</p>
    <h1>${escapeHtml(article.title)}</h1>
    <p class="lead">This ${escapeHtml(article.format.toLowerCase())} is written for ${escapeHtml(site.audience)}. It starts from the searcher's real decision, then works backward into tools, evidence, risks, and purchase criteria.</p>
    <section class="intent-box">
      <h2>Search intent this page targets</h2>
      <dl>
        <div><dt>Problem</dt><dd>${escapeHtml(intentMap.problem)}</dd></div>
        <div><dt>Buyer query</dt><dd>${escapeHtml(intentMap.buyerQuery)}</dd></div>
        <div><dt>Comparison query</dt><dd>${escapeHtml(intentMap.comparisonQuery)}</dd></div>
        <div><dt>Money page</dt><dd><a href="${escapeHtml(intentMap.moneyPage)}" rel="sponsored">${escapeHtml(primary.name)} tracked click page</a></dd></div>
      </dl>
    </section>
    <section>
      <h2>Short answer</h2>
      <p>Start with ${escapeHtml(primary.name)} if its official product page matches your workflow, then compare it with ${escapeHtml(secondary.name)} and ${escapeHtml(tertiary.name)} using the same input. The goal is not to find the most famous tool; it is to find the one that handles your real task, review process, export needs, and budget limits with the least rework.</p>
      <p>For this topic, the safest buying path is: check official product information, run one small trial project, compare output quality, and only upgrade after the tool removes a repeated bottleneck.</p>
    </section>
    <section>
      <h2>Tools to compare before buying</h2>
      <p>Use three tools in the same test so the decision is evidence-based instead of brand-based.</p>
      <table><thead><tr><th>Tool</th><th>Public positioning</th><th>Role in test</th><th>Tracked page</th></tr></thead><tbody>${comparisonRows}</tbody></table>
    </section>
    <section>
      <h2>Concrete scenario</h2>
      <p>${escapeHtml(scenarioForArticle(site, article))} The test should use a real deliverable, not a sample prompt from a vendor demo. Record what went in, what came out, what required editing, and whether the final result would be acceptable for actual work.</p>
    </section>
    <section>
      <h2>Evaluation workflow</h2>
      <ol>
        <li>Pick one real project that you already understand.</li>
        <li>Run the same input through ${escapeHtml(primary.name)}, ${escapeHtml(secondary.name)}, and ${escapeHtml(tertiary.name)}.</li>
        <li>Record setup time, editing time, export quality, missing features, and whether the result needs human rewriting.</li>
        <li>Compare the final output against your normal manual workflow.</li>
        <li>Check official pages and linked sources before relying on any pricing, feature, or partner-program claim.</li>
        <li>Only upgrade if the tool removes a repeated task or improves quality enough to justify the subscription.</li>
      </ol>
    </section>
    <section>
      <h2>Buying decision table</h2>
      <table><thead><tr><th>Decision</th><th>Rule</th></tr></thead><tbody>
        <tr><td>Buy or start a paid trial</td><td>${escapeHtml(advice[0])}</td></tr>
        <tr><td>Stay free or wait</td><td>${escapeHtml(advice[1])}</td></tr>
        <tr><td>Verify first</td><td>${escapeHtml(advice[2])}</td></tr>
      </tbody></table>
    </section>
    <section>
      <h2>Evidence used</h2>
      <p>These public sources are included so readers can verify product positioning, partner terms, and feature claims before making a purchase decision. Pricing and plan limits can change, so confirm them on the official site before buying.</p>
      <ul class="evidence-list">${sourceList}</ul>
    </section>
    <section>
      <h2>Recommended next step</h2>
      <p>Use the official trial or free entry point first. Then visit the tracked tool page so this site can measure buyer interest without indexing outbound redirect pages: <a href="/go/${slugify(primary.name)}.html" rel="sponsored">continue to ${escapeHtml(primary.name)}</a>.</p>
    </section>
    <section>
      <h2>Related internal links</h2>
      <div class="related-links">${relatedLinks}</div>
    </section>
    <section>
      <h2>FAQ</h2>
      <h3>Is this article sponsored?</h3>
      <p>No vendor paid for this article. Some outbound links may become affiliate links if the site is approved by a partner program.</p>
      <h3>Should beginners buy immediately?</h3>
      <p>No. Beginners should test one real workflow first and upgrade only when the paid plan solves a repeated problem.</p>
      <h3>How are tools selected?</h3>
      <p>Tools are selected based on category fit, recognizable adoption, clear use cases, and availability of public product information.</p>
    </section>
  </main>`;
  return layout(site, `${article.title} | ${site.name}`, `${article.title} for ${site.audience}. Includes evidence links, comparison criteria, and buying decision rules.`, body, "", `articles/${article.slug}.html`);
}

function simplePage(site, kind) {
  const pages = {
    about: ["About", "about.html", `${site.name} is a focused directory for ${site.niche}. It helps ${site.audience} compare software with practical workflows, source links, and commercial disclosure.`],
    editorial: ["Editorial Policy", "editorial-policy.html", "We write independent tool summaries, disclose affiliate relationships, cite public sources where useful, and update recommendations when product positioning or partner programs change."],
    disclosure: ["Affiliate Disclosure", "affiliate-disclosure.html", "Some links may be affiliate or referral links. If a reader buys through those links, this site may earn a commission at no extra cost to the reader. Sponsored placements are labeled separately from editorial recommendations."]
  };
  const [title, pagePath, text] = pages[kind];
  return layout(site, `${title} | ${site.name}`, text, `<main class="article"><h1>${title}</h1><p class="lead">${escapeHtml(text)}</p></main>`, "", pagePath);
}

function redirectPage(site, tool) {
  const [name, desc, url] = tool;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, nofollow" />
    <meta http-equiv="refresh" content="1; url=${escapeHtml(url)}" />
    <title>Redirecting to ${escapeHtml(name)} | ${escapeHtml(site.name)}</title>
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body style="--accent: ${site.color}">
    <main class="article"><p class="eyebrow">Tool click tracking</p><h1>Redirecting to ${escapeHtml(name)}</h1><p>${escapeHtml(desc)}</p><p><a class="button primary" href="${escapeHtml(url)}" rel="sponsored noopener noreferrer">Continue to ${escapeHtml(name)}</a></p></main>
    <script>window.setTimeout(function(){ window.location.href = ${JSON.stringify(url)}; }, 900);</script>
    <script defer src="/_vercel/insights/script.js"></script>
  </body>
</html>`;
}

function css() {
  return `:root{color-scheme:dark;--bg:#070b14;--panel:#0e1626;--panel2:#121d30;--text:#edf5ff;--muted:#9fb0c3;--line:rgba(255,255,255,.11);--accent:#22d3ee;--radius:10px}*{box-sizing:border-box}body{margin:0;background:radial-gradient(circle at top left,color-mix(in srgb,var(--accent) 18%,transparent),transparent 32rem),var(--bg);color:var(--text);font-family:Inter,Segoe UI,Arial,sans-serif;line-height:1.6}a{color:inherit}.site-header{position:sticky;top:0;z-index:10;border-bottom:1px solid var(--line);background:rgba(7,11,20,.82);backdrop-filter:blur(14px)}.nav,.hero,.section,.site-footer,.article{width:min(1120px,calc(100% - 32px));margin:auto}.nav{display:flex;justify-content:space-between;align-items:center;padding:16px 0}.brand{display:flex;gap:12px;align-items:center;text-decoration:none;font-weight:800}.brand small{display:block;color:var(--muted);font-weight:500}.brand-mark{display:grid;place-items:center;width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,var(--accent),#fff);color:#06111f}.nav-links{display:flex;gap:18px;color:var(--muted)}.nav-links a{text-decoration:none}.hero{display:grid;grid-template-columns:1.4fr .8fr;gap:28px;align-items:center;padding:72px 0 34px}.hero h1,.article h1{font-size:clamp(2.2rem,5vw,4.8rem);line-height:1.02;margin:8px 0 18px}.hero p,.lead{font-size:1.08rem;color:var(--muted)}.eyebrow{text-transform:uppercase;letter-spacing:.14em;color:var(--accent);font-size:.78rem;font-weight:800}.actions{display:flex;gap:12px;margin-top:24px;flex-wrap:wrap}.button{display:inline-flex;align-items:center;justify-content:center;border:1px solid var(--line);border-radius:999px;padding:10px 16px;text-decoration:none;font-weight:800;background:rgba(255,255,255,.04)}.button.primary{background:var(--accent);color:#06111f;border-color:transparent}.button.secondary{color:var(--text)}.hero-panel,.tool-card,.article-card,.ad-slot,.proof,.sponsor-card,.segment-card,.intent-box{border:1px solid var(--line);border-radius:var(--radius);background:linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.025));box-shadow:0 24px 70px rgba(0,0,0,.26)}.hero-panel{padding:24px}.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}.chips span{border:1px solid var(--line);border-radius:999px;padding:6px 10px;color:var(--muted)}.ad-slot{width:min(1120px,calc(100% - 32px));margin:22px auto;padding:26px;text-decoration:none}.ad-slot strong{display:block;font-size:1.3rem}.ad-slot small{color:var(--muted)}.section{padding:44px 0}.section-head{display:flex;justify-content:space-between;gap:20px;align-items:end;margin-bottom:18px}.section h2,.article h2{font-size:2rem;margin:.2rem 0}.tool-grid,.article-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.sponsor-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.segment-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px}.tool-card,.article-card,.sponsor-card,.segment-card{padding:18px;text-decoration:none}.segment-card span{color:var(--accent);font-size:.78rem;text-transform:uppercase;letter-spacing:.12em;font-weight:900}.segment-card strong{display:block;margin:8px 0;font-size:1.1rem}.segment-card small{color:var(--muted)}.tool-card h3,.sponsor-card h3{margin:.2rem 0}.tool-card p,.sponsor-card p,.article-card small{color:var(--muted)}.ad-visual{height:138px;border-radius:8px;margin-bottom:18px;display:grid;place-items:center;background:radial-gradient(circle at 24% 22%,rgba(255,255,255,.42),transparent 28%),linear-gradient(135deg,var(--accent),#172033 64%);overflow:hidden}.ad-visual span{width:74px;height:74px;border-radius:18px;display:grid;place-items:center;background:rgba(7,11,20,.72);border:1px solid rgba(255,255,255,.24);font-size:1.5rem;font-weight:900;letter-spacing:.04em}.article-card{display:flex;flex-direction:column;gap:8px}.article-card span{color:var(--accent);font-weight:900}.source-links,.related-links{display:flex;flex-wrap:wrap;gap:10px}.source-links a,.related-links a{border:1px solid var(--line);border-radius:999px;padding:8px 12px;text-decoration:none;color:var(--muted)}.article{padding:56px 0;max-width:960px}.article section{border-top:1px solid var(--line);padding:24px 0}.article table{width:100%;border-collapse:collapse}.article th,.article td{border:1px solid var(--line);padding:12px;text-align:left;vertical-align:top}.article code{background:rgba(255,255,255,.08);border:1px solid var(--line);border-radius:6px;padding:2px 6px}.intent-box{padding:20px}.intent-box dl{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin:0}.intent-box div{border:1px solid var(--line);border-radius:8px;padding:12px}.intent-box dt{color:var(--accent);font-weight:900}.intent-box dd{margin:4px 0 0;color:var(--muted)}.evidence-list li{margin-bottom:12px}.evidence-list span{display:block;color:var(--muted)}.plan-table th:first-child,.plan-table td:first-child{width:48px;text-align:center;color:var(--accent);font-weight:900}.plan-table small{display:block;color:var(--muted);margin-top:4px}.site-footer{display:flex;justify-content:space-between;gap:20px;border-top:1px solid var(--line);padding:28px 0 48px;color:var(--muted)}.site-footer div{display:flex;gap:14px;flex-wrap:wrap}@media(max-width:900px){.hero{grid-template-columns:1fr}.tool-grid,.article-grid,.sponsor-grid,.segment-grid{grid-template-columns:repeat(2,1fr)}.section-head,.site-footer{display:block}.nav{align-items:flex-start}.nav-links{flex-wrap:wrap;justify-content:flex-end}.article{max-width:min(960px,calc(100% - 32px));overflow-x:auto}.intent-box dl{grid-template-columns:1fr}}@media(max-width:620px){.tool-grid,.article-grid,.sponsor-grid,.segment-grid{grid-template-columns:1fr}.actions{flex-direction:column}.nav{gap:16px;flex-direction:column}.hero{padding-top:36px}.hero h1,.article h1{font-size:2.3rem}}`;
}

function robots(site) {
  return `User-agent: *
Allow: /
Disallow: /go/

Sitemap: ${baseUrl(site)}/sitemap.xml
`;
}

function sitemap(site) {
  const urls = [
    "",
    "articles/",
    "keyword-plan.html",
    "about.html",
    "editorial-policy.html",
    "affiliate-disclosure.html",
    ...siteArticles(site).map((article) => `articles/${article.slug}.html`)
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${baseUrl(site)}/${url}</loc></url>`).join("\n")}
</urlset>
`;
}

function vercelJson() {
  return JSON.stringify({
    cleanUrls: false,
    trailingSlash: false,
    headers: [
      {
        source: "/go/(.*)",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]
      }
    ]
  }, null, 2);
}

function googleVerification() {
  return "google-site-verification: googled161434a101d9810.html\n";
}

function networkKeywordPlanMarkdown() {
  const sections = sites.map((site) => {
    const rows = keywordPlan(site)
      .map((item, index) => `| ${index + 1} | ${item.problem} | ${item.buyerQuery} | ${item.comparisonQuery} | ${baseUrl(site)}${item.moneyPage} | ${baseUrl(site)}/articles/${item.article.slug}.html |`)
      .join("\n");
    return `## ${site.name}\n\nSite: ${baseUrl(site)}\n\n| # | Problem | Buyer query | Comparison query | Money page | Supporting article |\n|---|---|---|---|---|---|\n${rows}`;
  }).join("\n\n");
  return `# AI Niche Sites Keyword Publishing Plan\n\nThis plan maps each site from buyer problem to search query, comparison query, money page, and supporting article. Start by improving the highest-intent supporting articles, then use Google Search Console impressions to decide which pages deserve deeper examples, comparison tables, and affiliate calls-to-action.\n\n${sections}\n`;
}

function generateSite(site) {
  const dir = path.join(outRoot, site.slug);
  cleanDir(dir);
  write(path.join(dir, "index.html"), homePage(site));
  write(path.join(dir, "googled161434a101d9810.html"), googleVerification());
  write(path.join(dir, "styles.css"), css());
  write(path.join(dir, "about.html"), simplePage(site, "about"));
  write(path.join(dir, "editorial-policy.html"), simplePage(site, "editorial"));
  write(path.join(dir, "affiliate-disclosure.html"), simplePage(site, "disclosure"));
  write(path.join(dir, "keyword-plan.html"), keywordPlanPage(site));
  write(path.join(dir, "robots.txt"), robots(site));
  write(path.join(dir, "sitemap.xml"), sitemap(site));
  write(path.join(dir, "vercel.json"), vercelJson());
  write(path.join(dir, "articles", "index.html"), articleIndex(site));
  for (const article of siteArticles(site)) write(path.join(dir, "articles", `${article.slug}.html`), articlePage(site, article));
  for (const tool of site.tools) write(path.join(dir, "go", `${slugify(tool[0])}.html`), redirectPage(site, tool));
}

function run() {
  cleanDir(outRoot);
  for (const site of sites) generateSite(site);
  write(path.join(root, "site-manifest.json"), JSON.stringify(sites.map((site) => ({
    slug: site.slug,
    name: site.name,
    baseUrl: baseUrl(site),
    articles: 30,
    tools: site.tools.length
  })), null, 2));
  write(path.join(root, "keyword-publishing-plan.md"), networkKeywordPlanMarkdown());
  console.log(`Generated ${sites.length} sites, ${sites.length * 30} articles.`);
}

run();
