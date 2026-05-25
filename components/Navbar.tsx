"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/",                     label: "Inicio" },
  { href: "/leer",                 label: "Quiero leer" },
  { href: "/aprender-a-escribir",  label: "Aprendo a escribir" },
  { href: "/sobre",                label: "Conocé a Silvina" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "var(--cream)",
        borderBottom: "2px solid var(--ink)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: "var(--yellow)",
              border: "2px solid var(--ink)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
              fontWeight: 900,
              fontSize: 18,
              color: "var(--ink)",
              flexShrink: 0,
            }}
          >
            S!
          </div>
          <span
            style={{
              fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
              fontWeight: 900,
              fontSize: 12,
              color: "var(--ink)",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              lineHeight: 1.2,
            }}
          >
            SILVINA<br />SCHEINER
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: 4 }}
          className="hidden lg:flex"
        >
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                  fontSize: 11,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                  color: "var(--ink)",
                  textDecoration: "none",
                  padding: "8px 12px",
                  borderRadius: 9999,
                  background: active ? "var(--yellow)" : "transparent",
                  transition: "background 0.15s",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* CTA + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link href="/empezar" className="btn-primary hidden lg:inline-flex">
            EMPEZÁ HOY
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
            style={{
              background: "none",
              border: "2px solid var(--ink)",
              borderRadius: 8,
              width: 38,
              height: 38,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              cursor: "pointer",
              padding: 0,
            }}
            aria-label="Menú"
          >
            <span
              style={{
                display: "block",
                width: 20,
                height: 2,
                background: "var(--ink)",
                borderRadius: 2,
                transition: "transform 0.2s",
                transform: open ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 20,
                height: 2,
                background: "var(--ink)",
                borderRadius: 2,
                opacity: open ? 0 : 1,
                transition: "opacity 0.2s",
              }}
            />
            <span
              style={{
                display: "block",
                width: 20,
                height: 2,
                background: "var(--ink)",
                borderRadius: 2,
                transition: "transform 0.2s",
                transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="lg:hidden"
          style={{
            borderTop: "2px solid var(--ink)",
            background: "var(--cream)",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                  fontSize: 14,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                  color: "var(--ink)",
                  textDecoration: "none",
                  padding: "10px 14px",
                  borderRadius: 8,
                  background: active ? "var(--yellow)" : "transparent",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/empezar"
            onClick={() => setOpen(false)}
            className="btn-primary"
            style={{ marginTop: 12, textAlign: "center" }}
          >
            EMPEZÁ HOY
          </Link>
        </div>
      )}
    </header>
  );
}
