interface Props {
  mode: "dark" | "light";
  onToggle: () => void;
}

export function ThemeToggle({ mode, onToggle }: Props) {
  const isLight = mode === "light";
  return (
    <button
      type="button"
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      onClick={onToggle}
      className="shine-wrap"
      style={{
        position: "fixed",
        right: "28px",
        bottom: "28px",
        zIndex: 100,
        border: "none",
        padding: 0,
        cursor: "pointer",
        background: "transparent",
      }}
    >
      <span
        className="shine-inner"
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "9999px",
          padding: 0,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: isLight ? "#1a2030" : "rgba(255,255,255,0.85)",
        }}
      >
        {/* Sun icon when in light mode (showing current state); Moon when in dark */}
        {isLight ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2v2.2M12 19.8V22M4.93 4.93l1.56 1.56M17.51 17.51l1.56 1.56M2 12h2.2M19.8 12H22M4.93 19.07l1.56-1.56M17.51 6.49l1.56-1.56" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
        )}
      </span>
    </button>
  );
}
