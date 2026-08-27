"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const techs = [
  { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
  { name: "Node.js", icon: "nodedotjs", color: "5FA04E" },
  { name: "Python", icon: "python", color: "3776AB" },
  { name: "Playwright", icon: "playwright", color: "2EAD33" },
  { name: "Excel", icon: "microsoftexcel", color: "217346" },
  { name: "Power BI", icon: "powerbi", color: "F2C811" },
  { name: "FastAPI", icon: "fastapi", color: "009688" },
  { name: "GitHub", icon: "github", color: "ffffff" },
  { name: "HTML", icon: "html5", color: "E34F26" },
  { name: "CSS", icon: "css3", color: "1572B6" },
  { name: "SQL", icon: "mysql", color: "4479A1" },
  { name: "Next.js", icon: "nextdotjs", color: "ffffff" },
];

export default function TechGrid() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.from(root.querySelectorAll(".tech"), {
        opacity: 0,
        y: 48,
        scale: 0.86,
        filter: "blur(10px)",
        duration: 0.75,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className="tech-grid" ref={rootRef}>
      {techs.map((tech) => (
        <article className="tech" key={tech.name}>
          <img
            className="tech-icon"
            src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color}`}
            alt=""
            width={42}
            height={42}
          />
          <strong>{tech.name}</strong>
        </article>
      ))}
    </div>
  );
}
