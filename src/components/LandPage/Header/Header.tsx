"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRight, CalendarHeart, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Planes",    href: "/about/pricing" },
  // { label: "Nosotros",   href: "/about/this-is-us" },
  { label: "Contacto", href: "/about/contact-us" },
];

// El CTA principal del navbar: la puerta de entrada gratis. "Iniciar sesión"
// queda como un link más.
const STD_HREF = "/about/save-the-date";
const STD_LABEL = "Save the date gratis";
const LOGIN_HREF = `${process.env.NEXT_PUBLIC_APP_URL}/login`;

// Mobile overlay includes Home
const OVERLAY_LINKS = [
  { label: "Home",       href: "/about" },
  ...NAV_LINKS,
];

export const Header = () => {
  const pathname    = usePathname();
  const isMain      = pathname === "/about" || pathname === "/";
  // Pages with scroll-based hero transparency (threshold matches their hero height)
  const heroPages: Record<string, number> = {
    "/about/this-is-us": 0.55,
  };
  const isHeroPage  = pathname in heroPages;
  // Pages with a permanently dark background — header always stays light/transparent
  const alwaysLight = pathname === "/about/pricing" || pathname === STD_HREF;
  // Solo pricing esconde el header al hacer scroll.
  const hideOnScroll = pathname === "/about/pricing";

  const [pastHero,     setPastHero]     = useState(!isMain && !isHeroPage && !alwaysLight);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);

  /* ── scroll detection ── */
  useEffect(() => {
    // Always light (dark bg pages like pricing)
    if (alwaysLight) { setPastHero(false); return; }
    // Sub-pages with no hero: always solid/dark
    if (!isMain && !isHeroPage) { setPastHero(true); return; }
    // Hero pages (main + this-is-us etc.): scroll-based
    const threshold = isHeroPage ? heroPages[pathname] : 0.85;
    const update = () => {
      const container = document.getElementById("land-scroll-container");
      const scrolled  = Math.max(window.scrollY, container?.scrollTop ?? 0);
      setPastHero(scrolled > window.innerHeight * threshold);
    };
    const container = document.getElementById("land-scroll-container");
    window.addEventListener("scroll", update, { passive: true });
    container?.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", update);
      container?.removeEventListener("scroll", update);
    };
  }, [isMain, isHeroPage, alwaysLight, pathname]);

  /* ── hide header when not at top (pricing only) ── */
  useEffect(() => {
    if (!hideOnScroll) return;
    const onScroll = () => setHeaderHidden(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideOnScroll]);

  /* ── lock background scroll when menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const colorClass = pastHero ? styles.dark : styles.light;

  return (
    <>
      <header className={`${styles.header} ${pastHero ? styles.header_solid : ""} ${(pastHero && !alwaysLight) ? styles.header_subpage : ""} ${headerHidden && hideOnScroll ? styles.header_hidden : ""}`}>
      <div className={styles.header_inner}>

        {/* Logo */}
        <Link href="/about" className={styles.logo_wrap}>
          <img
            src={alwaysLight ? "/landing/logo_cover.png" : "/landing/logo_blue.png"}
            alt="I attend"
            className={`${styles.logo_full} ${(pastHero || alwaysLight) ? styles.logo_full_visible : ""}`}
          />
          <img
            src="/landing/a_logo.png"
            alt=""
            aria-hidden="true"
            className={`${styles.logo_icon} ${(pastHero || alwaysLight) ? styles.logo_icon_hidden : ""}`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav}>
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.link} ${colorClass} ${pathname === href ? styles.link_active : ""}`}
            >
              {label}
            </Link>
          ))}
          <a href={LOGIN_HREF} className={`${styles.link} ${colorClass}`}>
            Iniciar sesión
          </a>
          <Button className={styles.cta_btn} href={STD_HREF}>
            <CalendarHeart strokeWidth={2.4} size={16} /> {STD_LABEL}
          </Button>
        </nav>

        {/* Mobile row */}
        <div className={styles.mobile_row}>
          <Button className={styles.cta_btn} href={STD_HREF}>
            {STD_LABEL}
          </Button>
          <button
            className={`${styles.menu_btn} ${colorClass}`}
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={24} strokeWidth={2} />
          </button>
        </div>

      </div>
      </header>

      {/* ── Mobile overlay menu ── */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlay_open : ""}`}
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        {/* Close */}
        <button
          className={styles.overlay_close}
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú"
        >
          <X size={28} strokeWidth={3} />
        </button>

        {/* Links */}
        <nav className={styles.overlay_nav}>
          {OVERLAY_LINKS.map(({ label, href }, i) => {
            const active = href === "/about"
              ? pathname === "/about" || pathname === "/"
              : pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`${styles.overlay_link} ${menuOpen ? styles.overlay_link_visible : ""} ${active ? styles.overlay_link_active : styles.overlay_link_inactive}`}
                style={{ transitionDelay: menuOpen ? `${80 + i * 70}ms` : "0ms" }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            );
          })}
          <a
            href={LOGIN_HREF}
            className={`${styles.overlay_link} ${menuOpen ? styles.overlay_link_visible : ""} ${styles.overlay_link_inactive}`}
            style={{ transitionDelay: menuOpen ? `${80 + OVERLAY_LINKS.length * 70}ms` : "0ms" }}
            onClick={() => setMenuOpen(false)}
          >
            Iniciar sesión
          </a>
        </nav>

        {/* CTA at bottom */}
        <div
          className={`${styles.overlay_bottom} ${menuOpen ? styles.overlay_link_visible : ""}`}
          style={{ transitionDelay: menuOpen ? `${80 + (OVERLAY_LINKS.length + 1) * 70}ms` : "0ms" }}
        >
          <Button className={styles.overlay_cta} href={STD_HREF} onClick={() => setMenuOpen(false)}>
            {STD_LABEL} <ArrowRight strokeWidth={3} size={18} />
          </Button>
        </div>
      </div>
    </>
  );
};
