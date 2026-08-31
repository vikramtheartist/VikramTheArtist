export function FooterCTA() {
  return (
    <footer
      id="contact"
      className="relative text-center"
      style={{ padding: "120px 0 60px" }}
    >
      {/* Subtle radial glow */}
      <div
        className="footer-glow hide-in-light fade-with-theme"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 80% at 42% 50%, rgba(8, 20, 60, 0.85) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(1rem, 2.4vw, 2.5rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "var(--text-1)",
            margin: "0 0 28px",
          }}
        >
          Lets design the future, together ✨
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(16px, 1.4vw, 22px)",
            lineHeight: 1.5,
            color: "var(--text-2)",
            margin: 0,
          }}
        >
          Here&apos;s my{" "}
          <a
            href="https://drive.google.com/file/d/1EYrHJ66MsqNI-ezlXRDx3x-l3R1hI11h/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#C5DC4B",
              textDecoration: "none",
            }}
          >
            resume
          </a>
          . Get in touch on{" "}
          <a
            href="https://www.linkedin.com/in/vikramtheartist"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#C5DC4B",
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>
          !
        </p>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          marginTop: "80px",
          borderTop: "1px solid var(--border-soft)",
          paddingTop: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ color: "var(--text-4)", fontSize: "10px" }}>
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
