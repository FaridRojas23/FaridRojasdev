"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { technologies, technologyIconUrl } from "@/lib/technologies";

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
        y: 32,
        scale: 0.92,
        duration: 0.65,
        stagger: 0.045,
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
      {technologies.map((tech) => (
        <article className="tech" key={tech.name}>
          <img
            className="tech-icon"
            src={technologyIconUrl(tech.slug, tech.color)}
            alt=""
            width={42}
            height={42}
            loading="lazy"
            decoding="async"
          />
          <strong>{tech.name}</strong>
        </article>
      ))}
    </div>
  );
}
