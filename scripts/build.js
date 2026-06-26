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

function siteArticles(site) {
  return articleAngles.map((angle, index) => {
    const keyword = `${site.niche} ${angle}`;
    const primary = site.tools[index % site.tools.length];
    const secondary = site.tools[(index + 3) % site.tools.length];
    return {
      index,
      slug: articleSlug(site, index),
      keyword,
      title: `${escapeTitle(site.niche)} ${escapeTitle(angle)}: Practical Buyer Guide`,
      primary,
      secondary
    };
  });
}

function escapeTitle(value) {
  return value.replace(/\b\w/g, (char) => char.toUpperCase());
}

function layout(site, title, description, body, extraHead = "") {
  const url = baseUrl(site);
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(description)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}/" />
    <meta name="twitter:card" content="summary" />
    <link rel="canonical" href="${url}/" />
    <title>${escapeHtml(title)}</title>
    <link rel="stylesheet" href="/styles.css" />
    ${extraHead}
  </head>
  <body style="--accent: ${site.color}">
    <header class="site-header">
      <nav class="nav">
        <a class="brand" href="/"><span class="brand-mark">AI</span><span>${escapeHtml(site.name)}<small>${escapeHtml(site.niche)}</small></span></a>
        <div class="nav-links"><a href="/articles/">Articles</a><a href="/#tools">Tools</a><a href="/affiliate-disclosure.html">Disclosure</a></div>
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
  const body = `<main>
    <section class="hero">
      <div>
        <p class="eyebrow">Focused AI niche site</p>
        <h1>${escapeHtml(site.name)} for practical software buyers.</h1>
        <p>${escapeHtml(description)} The site focuses on buying-intent comparisons, real workflows, source-backed notes, and affiliate-ready tool tracking.</p>
        <div class="actions"><a class="button primary" href="#tools">Browse tools</a><a class="button secondary" href="/articles/">Read 30 guides</a></div>
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
      <small>Replace this block with an approved affiliate offer after the program accepts the site.</small>
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
  return layout(site, `Articles | ${site.name}`, `30 English ${site.niche} articles for commercial search and affiliate research.`, body);
}

function articlePage(site, article) {
  const [primaryName, primaryDesc, primaryUrl] = article.primary;
  const [secondaryName, secondaryDesc] = article.secondary;
  const sourceList = site.sources.map(([name, url]) => `<li><a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(name)}</a></li>`).join("");
  const body = `<main class="article">
    <p class="eyebrow">${escapeHtml(article.keyword)}</p>
    <h1>${escapeHtml(article.title)}</h1>
    <p class="lead">This guide is written for ${escapeHtml(site.audience)}. It focuses on practical evaluation steps rather than generic AI hype.</p>
    <section>
      <h2>Short answer</h2>
      <p>Start with a clear workflow: define the job, test output quality, check pricing limits, verify export or integration options, and measure whether the tool saves time without lowering quality. For this topic, ${escapeHtml(primaryName)} is a useful first example because ${escapeHtml(primaryDesc.toLowerCase())}</p>
    </section>
    <section>
      <h2>Tools to compare</h2>
      <p>Compare ${escapeHtml(primaryName)} with ${escapeHtml(secondaryName)} before buying. ${escapeHtml(secondaryName)} matters because ${escapeHtml(secondaryDesc.toLowerCase())}</p>
      <table><thead><tr><th>Question</th><th>What to check</th></tr></thead><tbody>
        <tr><td>Workflow fit</td><td>Can the tool handle your real input, review process, and export format?</td></tr>
        <tr><td>Output quality</td><td>Does it reduce manual work while keeping accuracy and brand fit?</td></tr>
        <tr><td>Commercial value</td><td>Does the paid plan unlock features that directly support revenue or productivity?</td></tr>
        <tr><td>Risk</td><td>Check privacy terms, copyright or usage limits, and team permission controls.</td></tr>
      </tbody></table>
    </section>
    <section>
      <h2>Concrete evaluation workflow</h2>
      <ol>
        <li>Pick one real project that you already understand.</li>
        <li>Run it through ${escapeHtml(primaryName)} and one alternative.</li>
        <li>Record setup time, editing time, export quality, and missing features.</li>
        <li>Compare the final output against your normal manual workflow.</li>
        <li>Only upgrade if the tool removes a repeated task or improves quality enough to justify the subscription.</li>
      </ol>
    </section>
    <section>
      <h2>Source-backed notes</h2>
      <p>The source links below are included so readers can verify product positioning, partner terms, and feature claims before making a purchase decision.</p>
      <ul>${sourceList}</ul>
    </section>
    <section>
      <h2>Recommended next step</h2>
      <p>Use the trial or free entry point first. Then visit the tracked tool page so this site can measure buyer interest: <a href="/go/${slugify(primaryName)}.html" rel="sponsored">continue to ${escapeHtml(primaryName)}</a>.</p>
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
  return layout(site, `${article.title} | ${site.name}`, `${article.title} for ${site.audience}.`, body);
}

function simplePage(site, kind) {
  const pages = {
    about: ["About", `${site.name} is a focused directory for ${site.niche}. It helps ${site.audience} compare software with practical workflows, source links, and commercial disclosure.`],
    editorial: ["Editorial Policy", "We write independent tool summaries, disclose affiliate relationships, cite public sources where useful, and update recommendations when product positioning or partner programs change."],
    disclosure: ["Affiliate Disclosure", "Some links may be affiliate or referral links. If a reader buys through those links, this site may earn a commission at no extra cost to the reader. Sponsored placements are labeled separately from editorial recommendations."]
  };
  const [title, text] = pages[kind];
  return layout(site, `${title} | ${site.name}`, text, `<main class="article"><h1>${title}</h1><p class="lead">${escapeHtml(text)}</p></main>`);
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
  return `:root{color-scheme:dark;--bg:#070b14;--panel:#0e1626;--panel2:#121d30;--text:#edf5ff;--muted:#9fb0c3;--line:rgba(255,255,255,.11);--accent:#22d3ee;--radius:10px}*{box-sizing:border-box}body{margin:0;background:radial-gradient(circle at top left,color-mix(in srgb,var(--accent) 18%,transparent),transparent 32rem),var(--bg);color:var(--text);font-family:Inter,Segoe UI,Arial,sans-serif;line-height:1.6}a{color:inherit}.site-header{position:sticky;top:0;z-index:10;border-bottom:1px solid var(--line);background:rgba(7,11,20,.82);backdrop-filter:blur(14px)}.nav,.hero,.section,.site-footer,.article{width:min(1120px,calc(100% - 32px));margin:auto}.nav{display:flex;justify-content:space-between;align-items:center;padding:16px 0}.brand{display:flex;gap:12px;align-items:center;text-decoration:none;font-weight:800}.brand small{display:block;color:var(--muted);font-weight:500}.brand-mark{display:grid;place-items:center;width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,var(--accent),#fff);color:#06111f}.nav-links{display:flex;gap:18px;color:var(--muted)}.nav-links a{text-decoration:none}.hero{display:grid;grid-template-columns:1.4fr .8fr;gap:28px;align-items:center;padding:72px 0 34px}.hero h1,.article h1{font-size:clamp(2.2rem,5vw,4.8rem);line-height:1.02;margin:8px 0 18px}.hero p,.lead{font-size:1.08rem;color:var(--muted)}.eyebrow{text-transform:uppercase;letter-spacing:.14em;color:var(--accent);font-size:.78rem;font-weight:800}.actions{display:flex;gap:12px;margin-top:24px}.button{display:inline-flex;align-items:center;justify-content:center;border:1px solid var(--line);border-radius:999px;padding:10px 16px;text-decoration:none;font-weight:800;background:rgba(255,255,255,.04)}.button.primary{background:var(--accent);color:#06111f;border-color:transparent}.button.secondary{color:var(--text)}.hero-panel,.tool-card,.article-card,.ad-slot,.proof{border:1px solid var(--line);border-radius:var(--radius);background:linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.025));box-shadow:0 24px 70px rgba(0,0,0,.26)}.hero-panel{padding:24px}.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}.chips span{border:1px solid var(--line);border-radius:999px;padding:6px 10px;color:var(--muted)}.ad-slot{width:min(1120px,calc(100% - 32px));margin:22px auto;padding:26px;text-decoration:none}.ad-slot strong{display:block;font-size:1.3rem}.ad-slot small{color:var(--muted)}.section{padding:44px 0}.section-head{display:flex;justify-content:space-between;gap:20px;align-items:end;margin-bottom:18px}.section h2,.article h2{font-size:2rem;margin:.2rem 0}.tool-grid,.article-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.tool-card,.article-card{padding:18px;text-decoration:none}.tool-card h3{margin:.2rem 0}.tool-card p,.article-card small{color:var(--muted)}.article-card{display:flex;flex-direction:column;gap:8px}.article-card span{color:var(--accent);font-weight:900}.source-links{display:flex;flex-wrap:wrap;gap:10px}.source-links a{border:1px solid var(--line);border-radius:999px;padding:8px 12px;text-decoration:none;color:var(--muted)}.article{padding:56px 0;max-width:860px}.article section{border-top:1px solid var(--line);padding:24px 0}.article table{width:100%;border-collapse:collapse}.article th,.article td{border:1px solid var(--line);padding:12px;text-align:left}.site-footer{display:flex;justify-content:space-between;gap:20px;border-top:1px solid var(--line);padding:28px 0 48px;color:var(--muted)}.site-footer div{display:flex;gap:14px}@media(max-width:900px){.hero{grid-template-columns:1fr}.tool-grid,.article-grid{grid-template-columns:repeat(2,1fr)}.section-head,.site-footer{display:block}.nav{align-items:flex-start}.nav-links{flex-wrap:wrap;justify-content:flex-end}}@media(max-width:620px){.tool-grid,.article-grid{grid-template-columns:1fr}.actions{flex-direction:column}.nav{gap:16px;flex-direction:column}.hero{padding-top:36px}.hero h1,.article h1{font-size:2.3rem}}`;
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
    cleanUrls: true,
    trailingSlash: false,
    headers: [
      {
        source: "/go/(.*)",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]
      }
    ]
  }, null, 2);
}

function generateSite(site) {
  const dir = path.join(outRoot, site.slug);
  cleanDir(dir);
  write(path.join(dir, "index.html"), homePage(site));
  write(path.join(dir, "styles.css"), css());
  write(path.join(dir, "about.html"), simplePage(site, "about"));
  write(path.join(dir, "editorial-policy.html"), simplePage(site, "editorial"));
  write(path.join(dir, "affiliate-disclosure.html"), simplePage(site, "disclosure"));
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
  console.log(`Generated ${sites.length} sites, ${sites.length * 30} articles.`);
}

run();
