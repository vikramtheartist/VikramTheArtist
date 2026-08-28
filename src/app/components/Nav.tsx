interface NavProps {
  mode?: "dark" | "light";
  onToggleTheme?: () => void;
}

export function Nav({ mode = "dark", onToggleTheme }: NavProps) {
  const isLight = mode === "light";
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end gap-8"
      style={{ padding: '30px 32px' }}>
      <a
        href="#work"
        className="text-white/70 hover:text-white text-sm tracking-wide transition-colors duration-200"
      >
        My Work
      </a>
      <a
        href="#experience"
        className="text-white/70 hover:text-white text-sm tracking-wide transition-colors duration-200"
      >
        Experience
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
    </nav>
  );
}
