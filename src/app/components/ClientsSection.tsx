import { useRef, useEffect, useState } from "react";

/* ── Client logo data ───────────────────────────────────────────── */

const clients = [
  {
    name: "Google",
    render: () => (
      <span style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.5px" }}>
        <span style={{ color: "#4285F4" }}>G</span>
        <span style={{ color: "#EA4335" }}>o</span>
        <span style={{ color: "#FBBC05" }}>o</span>
        <span style={{ color: "#4285F4" }}>g</span>
        <span style={{ color: "#34A853" }}>l</span>
        <span style={{ color: "#EA4335" }}>e</span>
      </span>
    ),
  },
  {
    name: "Apple",
    render: () => (
      <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
        <svg width="18" height="22" viewBox="0 0 18 22" fill="#e5e5e5">
          <path d="M14.94 11.53c-.02-2.56 2.1-3.8 2.19-3.86-1.2-1.75-3.06-1.99-3.72-2.01-1.57-.16-3.08.93-3.88.93-.8 0-2.02-.91-3.33-.88C4.48 5.74 2.8 6.64 1.88 8.1c-1.88 3.25-.48 8.04 1.33 10.68.9 1.29 1.96 2.74 3.36 2.69 1.35-.06 1.86-.87 3.49-.87 1.64 0 2.1.87 3.52.84 1.46-.02 2.37-1.31 3.25-2.61.03-.02.06-.05.07-.07-3.17-1.22-3.96-5.23-3.96-5.23z"/>
          <path d="M12.3 3.6C13.03 2.7 13.52 1.46 13.37 0c-1.15.05-2.55.77-3.38 1.65-.74.79-1.4 2.07-1.22 3.28 1.27.1 2.57-.65 3.53-1.33z"/>
        </svg>
        <span style={{ color: "#e5e5e5", fontSize: "20px", fontWeight: 600 }}>Apple</span>
      </span>
    ),
  },
  {
    name: "GSK",
    render: () => (
      <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <span style={{
          background: "linear-gradient(135deg, #f97316 0%, #fb923c 100%)",
          borderRadius: "50%", width: "28px", height: "28px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "11px", fontWeight: 800, color: "white", flexShrink: 0,
        }}>GSK</span>
        <span style={{ color: "#d1d1d1", fontSize: "18px", fontWeight: 500 }}>GSK</span>
      </span>
    ),
  },
  {
    name: "Celcom",
    render: () => (
      <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
        <span style={{
          background: "#0066cc", borderRadius: "6px", width: "26px", height: "26px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "10px", fontWeight: 800, color: "white", flexShrink: 0,
        }}>C</span>
        <span style={{ color: "#0099ff", fontSize: "18px", fontWeight: 600 }}>celcom</span>
      </span>
    ),
  },
  {
    name: "Hilton",
    render: () => (
      <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
        <span style={{
          border: "2px solid #1e3a5f", borderRadius: "50%", width: "26px", height: "26px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "13px", fontWeight: 800, color: "#1e3a5f", background: "white", flexShrink: 0,
        }}>H</span>
        <span style={{ color: "#d1d1d1", fontSize: "19px", fontWeight: 600, letterSpacing: "0.05em" }}>HILTON</span>
      </span>
    ),
  },
  {
    name: "Citibank",
    render: () => (
      <span style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-0.3px" }}>
        <span style={{ color: "#0066b3" }}>citi</span>
        <span style={{
          display: "inline-block", width: "10px", height: "10px", borderRadius: "50%",
          background: "#e60026", marginLeft: "2px", verticalAlign: "middle", flexShrink: 0,
        }} />
      </span>
    ),
  },
  {
    name: "Siemens",
    render: () => (
      <span style={{ color: "#00a09a", fontSize: "20px", fontWeight: 700, letterSpacing: "0.08em" }}>
        SIEMENS
      </span>
    ),
  },
  {
    name: "Lilly",
    render: () => (
      <span style={{ color: "#e30613", fontSize: "24px", fontWeight: 400, fontFamily: "Georgia, serif", fontStyle: "italic" }}>
        Lilly
      </span>
    ),
  },
  {
    name: "State Farm",
    render: () => (
      <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
        <span style={{
          background: "#cc0000", borderRadius: "4px", padding: "3px 6px",
          fontSize: "10px", fontWeight: 800, color: "white", flexShrink: 0, letterSpacing: "0.02em",
        }}>State Farm</span>
      </span>
    ),
  },
  {
    name: "Comcast",
    render: () => (
      <span style={{ color: "#d1d1d1", fontSize: "20px", fontWeight: 700, letterSpacing: "-0.3px" }}>
        comcast
      </span>
    ),
  },
  {
    name: "JCPenney",
    render: () => (
      <span style={{ color: "#d1d1d1", fontSize: "20px", fontWeight: 700, letterSpacing: "-0.3px" }}>
        JCPenney
      </span>
    ),
  },
  {
    name: "Cummins",
    render: () => (
      <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
        <span style={{
          background: "#cc0000", borderRadius: "50%", width: "26px", height: "26px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "11px", fontWeight: 800, color: "white", flexShrink: 0,
        }}>C</span>
        <span style={{ color: "#d1d1d1", fontSize: "18px", fontWeight: 600 }}>CUMMINS</span>
      </span>
    ),
  },
  {
    name: "Novartis",
    render: () => (
      <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="#0460a9"/>
        </svg>
        <span style={{ color: "#0460a9", fontSize: "18px", fontWeight: 600 }}>Novartis</span>
      </span>
    ),
  },
  {
    name: "Cognizant",
    render: () => (
      <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <svg width="20" height="20" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="#1a77c9"/>
          <circle cx="12" cy="12" r="5" fill="white" opacity="0.9"/>
          <circle cx="12" cy="12" r="2" fill="#1a77c9"/>
        </svg>
        <span style={{ color: "#1a77c9", fontSize: "18px", fontWeight: 600 }}>Cognizant</span>
      </span>
    ),
  },
  {
    name: "American Express",
    render: () => (
      <span style={{
        background: "#007bc1", borderRadius: "6px", padding: "4px 10px",
        fontSize: "11px", fontWeight: 800, color: "white", letterSpacing: "0.04em",
      }}>
        AMERICAN<br/>EXPRESS
      </span>
    ),
  },
  {
    name: "Sanofi",
    render: () => (
      <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="url(#sf)"/>
          <defs>
            <linearGradient id="sf" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7c3aed"/>
              <stop offset="100%" stopColor="#2563eb"/>
            </linearGradient>
          </defs>
        </svg>
        <span style={{ color: "#a78bfa", fontSize: "19px", fontWeight: 600 }}>sanofi</span>
      </span>
    ),
  },
  {
    name: "TCS",
    render: () => (
      <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
        <span style={{
          background: "#1e3a5f", borderRadius: "4px", padding: "3px 6px",
          fontSize: "11px", fontWeight: 800, color: "white", flexShrink: 0,
        }}>TATA</span>
        <span style={{ color: "#d1d1d1", fontSize: "13px", fontWeight: 600 }}>CONSULTANCY<br/>SERVICES</span>
      </span>
    ),
  },
  {
    name: "Netgear",
    render: () => (
      <span style={{ color: "#0066cc", fontSize: "20px", fontWeight: 800, letterSpacing: "-0.3px" }}>
        NETGEAR<span style={{ color: "#ff6600", fontSize: "12px" }}>®</span>
      </span>
    ),
  },
];

/* ── Section ────────────────────────────────────────────────────── */

export function ClientsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-14">
      <h2 className="text-center mb-12" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "2.5rem", lineHeight: 1 }}>
        <span style={{
          fontWeight: 300,
          background: "linear-gradient(180deg, #a8a8b8 0%, #727282 50%, #3a3a48 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>Top customers I </span>
        <span style={{
          fontWeight: 300,
          background: "linear-gradient(180deg, #c8c8d8 0%, #8888a0 45%, #484858 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>worked for</span>
      </h2>

      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-track {
          animation: marquee-scroll 38s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none !important;
          }
        }
        .marquee-fade {
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
        }
      `}</style>

      <div className="marquee-fade relative overflow-hidden">
        <div
          className="marquee-track flex"
          style={{
            width: "max-content",
            animationPlayState: isInView ? "running" : "paused",
          }}
        >
          {[0, 1, 2].map(i => (
            <picture key={i}>
              <source
                type="image/avif"
                srcSet={`${import.meta.env.BASE_URL}IMG/Top%20customers-768.avif 768w, ${import.meta.env.BASE_URL}IMG/Top%20customers-1440.avif 1440w, ${import.meta.env.BASE_URL}IMG/Top%20customers-2048.avif 2048w, ${import.meta.env.BASE_URL}IMG/Top%20customers-4096.avif 4096w`}
                sizes="(max-width: 768px) 768px, 1440px"
              />
              <source
                type="image/webp"
                srcSet={`${import.meta.env.BASE_URL}IMG/Top%20customers-768.webp 768w, ${import.meta.env.BASE_URL}IMG/Top%20customers-1440.webp 1440w, ${import.meta.env.BASE_URL}IMG/Top%20customers-2048.webp 2048w, ${import.meta.env.BASE_URL}IMG/Top%20customers-4096.webp 4096w`}
                sizes="(max-width: 768px) 768px, 1440px"
              />
              <img
                src={`${import.meta.env.BASE_URL}IMG/Top%20customers.png`}
                alt="Top customers"
                aria-hidden={i > 0}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                width={4096}
                height={229}
                style={{ height: "80px", width: "auto", display: "block", flexShrink: 0 }}
              />
            </picture>
          ))}
        </div>
      </div>
    </section>
  );
}
