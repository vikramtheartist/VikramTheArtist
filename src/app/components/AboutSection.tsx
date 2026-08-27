import { useEffect, useRef, useState } from "react";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="about-badge"
      style={{
        display: "inline-block",
        padding: "2px 16px 3px",
        borderRadius: "9999px",
        whiteSpace: "nowrap",
        fontFamily: "'DM Serif Display', serif",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "inherit",
        letterSpacing: "0.01em",
        verticalAlign: "middle",
        lineHeight: 1.6,
      }}
    >
      {children}
    </span>
  );
}

const proseStyle: React.CSSProperties = {
  fontFamily: "'Satoshi', sans-serif",
  fontWeight: 400,
  fontSize: "clamp(1.05rem, 1.27vw, 1.32rem)",
  letterSpacing: "-0.5px",
  lineHeight: 2.4,
  color: "var(--text-2)",
  textAlign: "center",
  margin: 0,
};

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else if (entry.boundingClientRect.top > window.innerHeight) {
          setIsInView(false);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "100px 24px",
        position: "relative",
        overflow: "visible",
      }}
    >
      {/* Floating Astronaut positioned on the right */}
      <div
        className="hide-in-light"
        style={{
          position: "absolute",
          top: "clamp(-20px, 4vw, 40px)",
          right: "clamp(-160px, -9vw, -30px)",
          zIndex: 6,
          pointerEvents: "none",
          userSelect: "none",
          transform: isInView
            ? "translate3d(0, 0, 0) rotate(0deg)"
            : "translate3d(180px, 40px, 0) rotate(12deg)",
          opacity: isInView ? 1 : 0,
          transition: "transform 1.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.1s ease",
          willChange: "transform, opacity",
        }}
      >
        <div
          style={{
            animation: isInView ? "astronautFloat 7s ease-in-out infinite" : "none",
            willChange: "transform",
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}IMG/Astronaut.png`}
            alt="Floating Astronaut"
            decoding="async"
            style={{
              width: "clamp(160px, 17vw, 260px)",
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.75)) drop-shadow(0 0 25px rgba(100, 160, 255, 0.20))",
            }}
          />
        </div>
      </div>

      <p style={proseStyle}>
        <Badge>User Experience designer</Badge>{" "}
        at Microsoft, driven to empower tomorrow{" "}
        through innovative designs solutions with over{" "}
        <Badge>18 years</Badge>{" "}
        of industry experience.{" "}
        Committed to creating{" "}
        <Badge>intuitive and user-friendly</Badge>{" "}
        digital experiences that solve real-world problems and make a{" "}
        <Badge>positive difference</Badge>{" "}
        in people&apos;s lives. I am currently based out of{" "}
        <span
          style={{
            textDecoration: "line-through",
            color: "var(--text-3)",
          }}
        >
          Chennai, Amsterdam, Copenhagen, Prague, Warsaw, New York City
        </span>
        , back in India
      </p>
    </section>
  );
}
