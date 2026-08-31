import { useState } from "react";

interface NavProps {
  mode?: "dark" | "light";
  onToggleTheme?: () => void;
  onNavigateVibeCoding?: () => void;
}

export function Nav({ mode = "dark", onToggleTheme, onNavigateVibeCoding }: NavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLight = mode === "light";

  return (
    <>
      <nav
        className="portfolio-nav fixed top-0 left-0 right-0 z-50 flex items-center justify-between md:justify-end gap-6 sm:gap-8 transition-all duration-300"
        style={{ padding: "18px 24px" }}
      >
        {/* Mobile Brand / Spacer on the left */}
        <div className="md:hidden flex items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-white/90 text-sm font-semibold tracking-wide font-mono"
          >
            VIKRAM
          </a>
        </div>

        {/* ── Desktop Navigation Links (hidden md:flex) ── */}
        <div className="hidden md:flex items-center gap-6 sm:gap-8">
          <a
            href="#work"
            className="text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
          >
            My Work
          </a>
          <a
            href="#experience"
            className="text-white/70 hover:text-white text-sm tracking-wide transition-colors duration-200"
          >
            My Experience
          </a>
          <a
            href="/vibe-coding"
            onClick={(e) => {
              if (onNavigateVibeCoding) {
                e.preventDefault();
                onNavigateVibeCoding();
              }
            }}
            className="text-white/70 hover:text-white text-sm tracking-wide transition-colors duration-200"
          >
            Vibe Coding
          </a>

          {/* Theme toggle */}
          {onToggleTheme && (
            <button
              type="button"
              aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
              onClick={onToggleTheme}
              className="text-white/70 hover:text-white transition-colors duration-200"
              style={{
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "32px",
                height: "32px",
              }}
            >
              {isLight ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4.2" />
                  <path d="M12 2v2.2M12 19.8V22M4.93 4.93l1.56 1.56M17.51 17.51l1.56 1.56M2 12h2.2M19.8 12H22M4.93 19.07l1.56-1.56M17.51 6.49l1.56-1.56" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
                </svg>
              )}
            </button>
          )}

          <a
            href="#contact"
            className="adopt-hero-btn-primary group"
            style={{
              textDecoration: "none",
              padding: "6px 6px 6px 18px",
              fontSize: "14px",
              gap: "10px",
            }}
          >
            <span>Get In Touch</span>
            <span
              className="adopt-btn-circle-arrow"
              style={{ width: "28px", height: "28px" }}
            >
              <svg
                className="w-3.5 h-3.5 text-[#3e38f5] stroke-[2.5]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* ── Mobile Hamburger Toggle Button (md:hidden) ── */}
        <div className="flex md:hidden items-center gap-3">
          {onToggleTheme && (
            <button
              type="button"
              aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
              onClick={onToggleTheme}
              className="text-white/70 hover:text-white p-1.5 rounded-full bg-white/5 border border-white/10"
            >
              {isLight ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4.2" />
                  <path d="M12 2v2.2M12 19.8V22M4.93 4.93l1.56 1.56M17.51 17.51l1.56 1.56M2 12h2.2M19.8 12H22M4.93 19.07l1.56-1.56M17.51 6.49l1.56-1.56" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
                </svg>
              )}
            </button>
          )}

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full border border-white/18 bg-[#090d1c]/80 backdrop-blur-md flex items-center justify-center text-white active:scale-95 transition-all shadow-md"
          >
            {mobileMenuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Dropdown Drawer Overlay ── */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden flex flex-col justify-start pt-20 px-5 pb-8 backdrop-blur-2xl bg-[#060913]/95 transition-all animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="flex flex-col gap-3 mt-4"
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white text-base font-medium tracking-wide hover:bg-white/[0.08] transition-all"
            >
              <span>My Work</span>
              <span className="text-white/40">→</span>
            </a>

            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white text-base font-medium tracking-wide hover:bg-white/[0.08] transition-all"
            >
              <span>My Experience</span>
              <span className="text-white/40">→</span>
            </a>

            <a
              href="/vibe-coding"
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (onNavigateVibeCoding) {
                  e.preventDefault();
                  onNavigateVibeCoding();
                }
              }}
              className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white text-base font-medium tracking-wide hover:bg-white/[0.08] transition-all"
            >
              <span>Vibe Coding</span>
              <span className="text-white/40">→</span>
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#3e38f5] to-[#7c3aed] text-white text-base font-semibold tracking-wide shadow-lg shadow-indigo-500/25"
            >
              <span>Get In Touch</span>
              <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#3e38f5]">
                <svg className="w-3.5 h-3.5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
