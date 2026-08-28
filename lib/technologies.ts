export type Technology = {
  name: string;
  slug: string;
  color: string;
};

export const technologies: Technology[] = [
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "Playwright", slug: "playwright", color: "2EAD33" },
  { name: "Excel", slug: "microsoftexcel", color: "217346" },
  { name: "Power BI", slug: "powerbi", color: "F2C811" },
  { name: "FastAPI", slug: "fastapi", color: "009688" },
  { name: "GitHub", slug: "github", color: "E6EDF3" },
  { name: "HTML", slug: "html5", color: "E34F26" },
  { name: "CSS", slug: "css3", color: "1572B6" },
  { name: "SQL", slug: "mysql", color: "4479A1" },
  { name: "Next.js", slug: "nextdotjs", color: "E6EDF3" },
  { name: "Cloudflare", slug: "cloudflare", color: "F38020" },
  { name: "AWS", slug: "amazonaws", color: "FF9900" },
  { name: "Azure", slug: "microsoftazure", color: "0078D4" },
  { name: "SQL Server", slug: "microsoftsqlserver", color: "CC2927" },
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
];

export function technologyIconUrl(slug: string, color: string) {
  return `https://api.iconify.design/simple-icons/${slug}.svg?color=%23${color}`;
}
