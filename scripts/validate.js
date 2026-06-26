const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const sitesRoot = path.join(root, "sites");
const manifest = JSON.parse(fs.readFileSync(path.join(root, "site-manifest.json"), "utf8"));

let failures = 0;

function fail(message) {
  failures += 1;
  console.error(`FAIL: ${message}`);
}

function exists(file) {
  if (!fs.existsSync(file)) fail(`Missing ${path.relative(root, file)}`);
}

for (const site of manifest) {
  const dir = path.join(sitesRoot, site.slug);
  exists(path.join(dir, "index.html"));
  exists(path.join(dir, "styles.css"));
  exists(path.join(dir, "robots.txt"));
  exists(path.join(dir, "sitemap.xml"));
  exists(path.join(dir, "vercel.json"));
  exists(path.join(dir, "affiliate-disclosure.html"));
  exists(path.join(dir, "editorial-policy.html"));
  exists(path.join(dir, "about.html"));
  exists(path.join(dir, "keyword-plan.html"));

  const articleDir = path.join(dir, "articles");
  const goDir = path.join(dir, "go");
  const articles = fs.existsSync(articleDir) ? fs.readdirSync(articleDir).filter((file) => file.endsWith(".html") && file !== "index.html") : [];
  const redirects = fs.existsSync(goDir) ? fs.readdirSync(goDir).filter((file) => file.endsWith(".html")) : [];

  if (articles.length !== 30) fail(`${site.slug} has ${articles.length} articles, expected 30`);
  if (redirects.length < 8) fail(`${site.slug} has ${redirects.length} redirects, expected at least 8`);

  const home = fs.readFileSync(path.join(dir, "index.html"), "utf8");
  if (!home.includes("/_vercel/insights/script.js")) fail(`${site.slug} is missing Vercel Analytics`);
  if (!home.includes("affiliate-disclosure.html")) fail(`${site.slug} is missing disclosure link`);
  if (!home.includes("/go/")) fail(`${site.slug} is missing tracked outbound links`);
  if (!home.includes("Featured partner placements")) fail(`${site.slug} is missing sponsor cards`);

  const sitemap = fs.readFileSync(path.join(dir, "sitemap.xml"), "utf8");
  if (!sitemap.includes(`${site.baseUrl}/articles/`)) fail(`${site.slug} sitemap does not use expected base URL`);
  if (!sitemap.includes(`${site.baseUrl}/keyword-plan.html`)) fail(`${site.slug} sitemap is missing keyword plan`);
}

exists(path.join(root, "keyword-publishing-plan.md"));

if (failures > 0) {
  process.exitCode = 1;
} else {
  console.log(`Validated ${manifest.length} sites successfully.`);
}
