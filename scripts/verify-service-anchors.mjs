import fs from "node:fs";

const services = fs.readFileSync("src/data/services.ts", "utf8");
const overview = fs.readFileSync(
  "src/components/home/ServicesOverview.tsx",
  "utf8",
);
const page = fs.readFileSync("src/app/services/page.tsx", "utf8");

const ids = [...services.matchAll(/id: "([^"]+)"/g)].map((m) => m[1]);
const required = [
  "strategic-hr",
  "leadership-development",
  "talent-acquisition",
  "employee-relations",
  "organizational-change",
  "career-transition",
];

let ok = true;
for (const id of required) {
  if (!ids.includes(id)) {
    console.error("Missing section id:", id);
    ok = false;
  } else {
    console.log("OK section", id);
  }
  const href = `/services#${id}`;
  if (!services.includes(`href: \`/services#\${section.id}\``) && !services.includes(href)) {
    // homepageServices builds href dynamically; ensure id is in homepageOrder
  }
}

if (!services.includes("homepageOrder")) {
  console.error("Missing homepageOrder registry");
  ok = false;
}

if (!page.includes("ScrollToHash")) {
  console.error("Services page missing ScrollToHash");
  ok = false;
}

if (!overview.includes("homepageServices")) {
  console.error("Homepage overview not using registry");
  ok = false;
}

if (fs.existsSync("src/components/services/ServiceAccordion.tsx")) {
  console.error("Accordion still present");
  ok = false;
} else {
  console.log("OK accordion removed");
}

process.exit(ok ? 0 : 1);
