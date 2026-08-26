/*
 * CaseStudyAdoptV2 — scroll narrative for the ADOPT case study.
 * Features: sticky mini-header, scroll-reveal, right-side progress rail.
 */

import { useEffect, useState, useRef } from "react";
import "./playbook.css";

import { Hero } from "./Hero";
import { Role } from "./Role";
import { Vision } from "./Vision";
import { Empathize } from "./Empathize";
import { Findings } from "./Findings";
import { Framework } from "./Framework";
import { Impact } from "./Impact";
import { ClosingFooter } from "./ClosingFooter";

interface Props {
  onBack: () => void;
}

const SECTIONS = [
  { id: "hero",      label: "Hero" },
  { id: "role",      label: "Role" },
  { id: "vision",    label: "Approach" },
  { id: "empathize", label: "Empathize" },
  { id: "findings",  label: "Findings" },
  { id: "framework", label: "Framework" },
  { id: "impact",    label: "Impact" },
  { id: "footer",    label: "Close" },
];

export function CaseStudyAdoptV2({ onBack }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive]         = useState("hero");
  const [navVisible, setNavVisible] = useState(false);
  const [scrollPct, setScrollPct]   = useState(0);

  /* ── Scroll-reveal ──────────────────────────────────────────── */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pb-reveal--visible");
            revealObs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 }
    );

    const raf = requestAnimationFrame(() => {
      root.querySelectorAll<Element>(".pb-reveal").forEach((el) => revealObs.observe(el));
    });
    return () => { revealObs.disconnect(); cancelAnimationFrame(raf); };
  }, []);

  /* ── Section progress dots ──────────────────────────────────── */
  useEffect(() => {
    const sectionObs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) sectionObs.observe(el);
    });
    return () => sectionObs.disconnect();
  }, []);

  /* ── Sticky header + scroll progress ───────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      const heroEl = document.getElementById("hero");
      setNavVisible(window.scrollY > (heroEl?.offsetHeight ?? 500) * 0.72);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeLabel = SECTIONS.find((s) => s.id === active)?.label ?? "";

  return (
    <div ref={rootRef} className="playbook-root">

      {/* ── Sticky mini-header ──────────────────────────────── */}
      <header
        className={`pb-sticky-nav${navVisible ? " pb-sticky-nav--visible" : ""}`}
        aria-hidden={!navVisible}
      >
        <button className="pb-sticky-nav__back" onClick={onBack} tabIndex={navVisible ? 0 : -1}>
          ← Back
        </button>
        <div className="pb-sticky-nav__center">
          <span className="pb-sticky-nav__title">Scaling Copilot Adoption</span>
          <span className="pb-sticky-nav__section" aria-live="polite">{activeLabel}</span>
        </div>
        <div className="pb-sticky-nav__progress" aria-hidden>
          <div className="pb-sticky-nav__bar" style={{ width: `${scrollPct}%` }} />
        </div>
      </header>

      {/* ── Floating back (shown until sticky nav appears) ──── */}
      <button
        className={`pb-back${navVisible ? " pb-back--hidden" : ""}`}
        onClick={onBack}
        aria-label="Back to home"
        tabIndex={navVisible ? -1 : 0}
      >
        ← Back
      </button>

      <Hero />
      <Role />
      <Vision />
      <Empathize />
      <Findings />
      <Framework />
      <Impact />
      <ClosingFooter />
    </div>
  );
}
