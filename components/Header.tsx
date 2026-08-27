"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
        <Link className="brand" href="/">
          Farid<span>.</span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Menú"
          onClick={() => setOpen((value) => !value)}
        >
          Menú
        </button>
        <nav className={`nav${open ? " open" : ""}`} id="mainNav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="btn btn-solid" href="/contacto">
          Contáctame
        </Link>
      </div>
    </header>
  );
}
