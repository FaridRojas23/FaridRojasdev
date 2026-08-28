"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import TransitionLink from "@/components/TransitionLink";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/curriculum", label: "Currículum" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="top">
      <div className="wrap top-inner">
        <TransitionLink className="brand" href="/">
          Farid<span>.</span>
        </TransitionLink>
        <nav className={`nav${open ? " open" : ""}`} id="mainNav">
          {links.map((link) => (
            <TransitionLink
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </TransitionLink>
          ))}
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Menú"
          onClick={() => setOpen((value) => !value)}
        >
          Menú
        </button>
      </div>
    </header>
  );
}
