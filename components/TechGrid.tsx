"use client";

import { useEffect, useRef } from "react";
import { technologies, technologyIconUrl } from "@/lib/technologies";

export default function TechGrid() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let ctx: { revert: () => void } | null = null;

    async function animate() {
      if (!root) return;
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(root.querySelectorAll(".tech"), {
          opacity: 0,
          y: 24,
          scale: 0.96,
          duration: 0.5,
          stagger: 0.04,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        });
      }, root);
    }

    animate();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <div className="tech-grid" ref={rootRef}>
      {technologies.map((tech) => (
        <article className="tech" key={tech.name}>
          <img
            className="tech-icon"
            src={technologyIconUrl(tech.slug)}
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
