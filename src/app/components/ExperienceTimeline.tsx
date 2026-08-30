import { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";

/* ── Icons ─────────────────────────────────────────────────────── */

function BriefcaseIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

function GradCapIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zm-5 9.18v4L12 21l5-2.82v-4L12 17l-5-2.82z" />
    </svg>
  );
}

/* ── Company Logos ─────────────────────────────────────────────── */

function MicrosoftLogo() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" style={{ display: "block" }}>
      <rect x="0"    y="0"    width="13.5" height="13.5" fill="#f25022" />
      <rect x="16.5" y="0"    width="13.5" height="13.5" fill="#7fba00" />
      <rect x="0"    y="16.5" width="13.5" height="13.5" fill="#00a4ef" />
      <rect x="16.5" y="16.5" width="13.5" height="13.5" fill="#ffb900" />
    </svg>
  );
}

function OracleLogo() {
  return <img src={`${import.meta.env.BASE_URL}IMG/Oracle.png`} alt="Oracle" style={{ height: "11px", objectFit: "contain" }} />;
}

function GoogleLogo() {
  return <img src={`${import.meta.env.BASE_URL}IMG/Google.png`} alt="Google" style={{ height: "28px", objectFit: "contain" }} />;
}

function McKinseyLogo() {
  return <img src={`${import.meta.env.BASE_URL}IMG/McKinsey.png`} alt="McKinsey & Company" style={{ height: "28px", objectFit: "contain" }} />;
}

function CognizantLogo() {
  return <img src={`${import.meta.env.BASE_URL}IMG/Cognizant.png`} alt="Cognizant" style={{ height: "28px", objectFit: "contain" }} />;
}

function TCSLogo() {
  return <img src={`${import.meta.env.BASE_URL}IMG/TCS.png`} alt="TCS" style={{ height: "18px", objectFit: "contain" }} />;
}

function AllscriptsLogo() {
  return <img src={`${import.meta.env.BASE_URL}IMG/Allscripts.png`} alt="Allscripts" style={{ height: "19px", objectFit: "contain" }} />;
}

function LionbridgeLogo() {
  return (
    <span style={{ color: "var(--text-2)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em" }}>LIONBRIDGE</span>
  );
}

function NTTTRLogo() {
  return (
    <span style={{ color: "var(--text-2)", fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em" }}>NTTTR</span>
  );
}

function HFILogo() {
  return <img src={`${import.meta.env.BASE_URL}IMG/Hfi.png`} alt="HFI" style={{ height: "22px", objectFit: "contain" }} />;
}

function CSELogo() {
  return null;
}

/* ── Data ─────────────────────────────────────────────────────── */

type EntryType = "work" | "education";

interface Entry {
  type: EntryType;
  company: string;
  role?: string;
  period: string;
  location?: string;
  isCurrent?: boolean;
  accentColor: string;
  logo: ReactNode;
  descriptions?: string[];
}

const entries: Entry[] = [
  {
    type: "work", company: "Microsoft", role: "Product Design Lead",
    period: "May 2025 – Present", location: "India", isCurrent: true,
    accentColor: "#0078d4", logo: <MicrosoftLogo />,
    descriptions: [
      "Leading Copilot adoption design in Viva Engage, shaping Communities experiences to scale usage.",
      "Integrated Viva Engage Communities into Teams, simplifying AI workflows into trusted, accessible daily collaboration.",
    ],
  },
  {
    type: "work", company: "Oracle", role: "Sr. Principal Product Designer",
    period: "Mar – May 2025", location: "Remote",
    accentColor: "#c74634", logo: <OracleLogo />,
    descriptions: [
      "Managed a design team for AI-powered finance products to deliver cloud-based experiences for automating and analysing enterprise financial operations.",
    ],
  },
  {
    type: "work", company: "Google", role: "Lead UX Designer",
    period: "Oct 2021 – Jan 2024", location: "New York City",
    accentColor: "#4285F4", logo: <GoogleLogo />,
    descriptions: [
      "Designed the user experience of cloud security tools by creating intuitive and efficient solutions that simplify complex tasks.",
      "Leveraged AI to automate tasks, provide insights, and enhance user experience.",
      "Partnered with stakeholders, user researchers, and product managers to set the product vision and roadmap.",
      "Managed and mentored a team of designers to deliver exceptional user experiences.",
    ],
  },
  {
    type: "work", company: "McKinsey & Company", role: "Lead Product Designer",
    period: "Sep 2017 – Oct 2021", location: "Prague",
    accentColor: "#8b7bb8", logo: <McKinseyLogo />,
    descriptions: [
      "Led UX strategy for high-impact projects, aligning design goals with business objectives.",
      "Mentored design teams and fostered a culture of innovation.",
      "Designed products with innovative chatbot and AI-driven solutions.",
    ],
  },
  {
    type: "work", company: "Cognizant Technology Solutions", role: "Sr. User Experience Designer",
    period: "Mar 2014 – Sep 2017", location: "Chennai",
    accentColor: "#1a77c9", logo: <CognizantLogo />,
    descriptions: [
      "Led, managed, and mentored UX teams providing design direction, project management, and stakeholder management to ensure successful project delivery and client satisfaction.",
    ],
  },
  {
    type: "education", company: "Human Factors International",
    period: "2012", accentColor: "#34A853", logo: <HFILogo />,
    descriptions: [
      "Certified Usability Analyst",
      "UX for Mobility",
    ],
  },
  {
    type: "work", company: "Tata Consultancy Services", role: "Sr. User Experience Designer",
    period: "Aug 2010 – Mar 2014", location: "Mumbai",
    accentColor: "#e0335a", logo: <TCSLogo />,
    descriptions: [
      "Executed all facets of user-centered design — from user research and information architecture to prototyping and usability testing — to deliver impactful solutions for clients.",
    ],
  },
  {
    type: "work", company: "Allscripts", role: "UI Designer",
    period: "May 2009 – Aug 2010", location: "Pune",
    accentColor: "#7c3aed", logo: <AllscriptsLogo />,
  },
  {
    type: "work", company: "Lionbridge", role: "Graphic Designer",
    period: "Nov 2007 – May 2009", location: "Chennai",
    accentColor: "#f97316", logo: <LionbridgeLogo />,
  },
  {
    type: "work", company: "NTTTR", role: "Intern UI Designer",
    period: "2007", accentColor: "#6b7280", logo: <NTTTRLogo />,
  },
  {
    type: "education", company: "Computer Science Engineering",
    period: "2003 – 2007", accentColor: "#34A853", logo: <CSELogo />,
  },
];

/* ── Timeline Entry ─────────────────────────────────────────────── */

/*
 * Layout math (wrapper maxWidth=720, padding 0 24px → content 672px):
 * Entry padding 14px 20px → entry content 632px.
 * Left col: calc(50% - 23px) = 316 - 23 = 293px of entry content.
 * Dot: 46px. Dot center from wrapper left = 24 + 20 + 293 + 23 = 360px = 50% of 720. ✓
 * Desc spacer = calc(50% - 23px + 46px) = calc(50% + 23px) of entry content.
 */

function TimelineEntry({ entry, index }: { entry: Entry; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);
  const entryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = entryRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isWork = entry.type === "work";
  const hasDesc = (entry.descriptions?.length ?? 0) > 0;
  const isOpened = hovered || expanded;

  /* Match .shine-inner button material from theme.css */
  const dotShadow = isOpened
    ? [
        "inset 0 1px 0 rgba(255,255,255,0.52)",
        "inset 0 4px 10px -4px rgba(255,255,255,0.24)",
        "inset 0 -6px 14px -8px rgba(190,210,235,0.28)",
        "inset 0 -2px 10px rgba(0,0,0,0.36)",
        "0 5px 14px rgba(0,0,0,0.35)",
        "0 2px 4px rgba(0,0,0,0.30)",
      ].join(", ")
    : [
        "inset 0 1px 0 rgba(255,255,255,0.42)",
        "inset 0 4px 10px -4px rgba(255,255,255,0.18)",
        "inset 0 -6px 14px -8px rgba(180,200,230,0.22)",
        "inset 0 -2px 10px rgba(0,0,0,0.32)",
        "0 3px 10px rgba(0,0,0,0.30)",
        "0 1px 3px rgba(0,0,0,0.25)",
      ].join(", ");

  const dotBg = isOpened
    ? [
        "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.14) 30%, transparent 62%)",
        "radial-gradient(ellipse 78% 42% at 50% 112%, rgba(180,200,230,0.20) 0%, transparent 58%)",
        "linear-gradient(180deg, rgba(68,78,96,0.96) 0%, rgba(34,40,54,0.98) 38%, rgba(16,20,30,1) 72%, rgba(26,32,46,1) 100%)",
      ].join(", ")
    : [
        "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.10) 30%, transparent 62%)",
        "radial-gradient(ellipse 78% 42% at 50% 112%, rgba(170,195,225,0.14) 0%, transparent 58%)",
        "linear-gradient(180deg, rgba(56,64,80,0.94) 0%, rgba(28,34,46,0.97) 38%, rgba(12,16,24,1) 72%, rgba(20,26,38,1) 100%)",
      ].join(", ");

  return (
    <div
      ref={entryRef}
      className={`tl-entry tl-s${index}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        if (hasDesc) setExpanded((v) => !v);
      }}
      style={{
        padding: "14px 20px",
        cursor: hasDesc ? "pointer" : "default",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transition: "opacity 0.65s ease, transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      {/* ── Main row ── */}
      <div style={{ display: "flex", alignItems: "center" }}>

        {/* Left: logo + period */}
        <div className="tl-left-col" style={{
          flex: "0 0 calc(50% - 23px)",
          display: "flex", flexDirection: "column",
          alignItems: "flex-end", paddingRight: "18px", gap: "5px",
        }}>
          <div style={{
            transition: "transform 0.35s ease, opacity 0.35s ease",
            transform: isOpened ? "scale(1.07) translateX(-2px)" : "scale(1)",
            opacity: isOpened ? 1 : 0.72,
            display: "flex", justifyContent: "flex-end",
          }}>
            {entry.logo}
          </div>

          <span style={{
            fontSize: entry.company === "Microsoft" ? "14px" : "12px", letterSpacing: "0.03em", whiteSpace: "nowrap",
            color: entry.company === "Microsoft" ? "var(--text-2)" : isOpened ? "var(--text-2)" : "var(--text-4)",
            transition: "color 0.35s",
          }}>
            {entry.period}
          </span>

          {entry.isCurrent && (
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "4px",
              fontSize: "8.5px", letterSpacing: "0.12em", textTransform: "uppercase",
              color: entry.accentColor, fontWeight: 600,
            }}>
              <span className="tl-blink-dot" style={{
                display: "inline-block", width: "5px", height: "5px",
                borderRadius: "50%", background: entry.accentColor,
              }} />
              May 2025 • Current
            </span>
          )}
        </div>

        {/* Center: dot — liquid glass sphere */}
        <div className="tl-dot-col" style={{ flexShrink: 0, width: "46px", zIndex: 2 }}>
          <div style={{
            width: "46px", height: "46px", borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", overflow: "hidden",
            background: dotBg,
            backdropFilter: "blur(20px) saturate(1.5)",
            WebkitBackdropFilter: "blur(20px) saturate(1.5)",
            border: "1px solid rgba(255,255,255,0.05)",
            color: "white",
            boxShadow: dotShadow,
            transition: "box-shadow 0.4s ease, transform 0.35s ease, background 0.4s ease",
            transform: isOpened ? "scale(1.15)" : "scale(1)",
          }}>
            {/* Icon */}
            <div style={{ position: "relative", zIndex: 1 }}>
              {isWork ? <BriefcaseIcon /> : <GradCapIcon />}
            </div>
          </div>
        </div>

        {/* Right: role + company + location */}
        <div className="tl-right-col" style={{ flex: 1, paddingLeft: "18px" }}>
          {isWork ? (
            <>
              <div style={{
                fontSize: "18px", fontWeight: 400, lineHeight: 1.3,
                fontFamily: "'Satoshi', sans-serif", letterSpacing: "0.005em",
                color: entry.isCurrent ? "var(--text-1)" : "var(--text-3)",
                transition: "color 0.35s",
              }}>
                {entry.role}
              </div>
              <div style={{
                display: "flex", alignItems: "center", gap: "5px",
                fontSize: "13.5px", marginTop: "4px",
                color: entry.company === "Microsoft" ? "var(--text-2)" : "var(--text-3)",
                fontFamily: "'Satoshi', sans-serif",
              }}>
                <span>{entry.company}</span>
                {entry.location && <><span>·</span><span>{entry.location}</span></>}
              </div>
              <div className="tl-mobile-date" style={{ display: "none" }}>
                {entry.period} {entry.isCurrent ? "• Current" : ""}
              </div>
            </>
          ) : (
            <>
              <div style={{
                fontSize: "15px", fontWeight: 500,
                fontFamily: "'Satoshi', sans-serif",
                color: isOpened ? "var(--text-1)" : "var(--text-3)",
                transition: "color 0.35s",
              }}>
                {entry.company}
              </div>
              <div className="tl-mobile-date" style={{ display: "none" }}>
                {entry.period}
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── Expandable description ── */}
      {hasDesc && (
        <div style={{
          display: "flex",
          maxHeight: isOpened ? "400px" : "0",
          opacity: isOpened ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease",
        }}>
          {/* Spacer aligns content under right column on desktop */}
          <div className="tl-desc-spacer" style={{ flex: "0 0 calc(50% + 2px)", flexShrink: 0 }} />
          <div className="tl-desc-content" style={{ flex: 1, paddingLeft: "18px" }}>
            <ul style={{ margin: 0, padding: "10px 0 6px", listStyle: "none" }}>
              {entry.descriptions!.map((d, i) => (
                <li key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: "9px",
                  marginBottom: "8px",
                  color: "var(--text-2)", fontSize: "15.5px",
                  lineHeight: 1.7, fontFamily: "'Satoshi', sans-serif",
                }}>
                  <span style={{
                    flexShrink: 0, marginTop: "9px",
                    width: "4px", height: "4px", borderRadius: "50%",
                    background: entry.accentColor, display: "block",
                  }} />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Section ─────────────────────────────────────────────────────── */

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      <style>{`
        @keyframes tl-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.2; }
        }
        .tl-blink-dot { animation: tl-blink 1.8s ease-in-out infinite; }

      `}</style>

      {/* Decorative concentric rings */}
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none", zIndex: 0 }}>
        {[380, 280, 195, 115].map((r) => (
          <div key={r} style={{
            position: "absolute", left: "50%", top: "50%",
            transform: "translate(-50%,-50%)",
            width: `${r * 2}px`, height: `${r * 2}px`,
            borderRadius: "50%", border: "1px solid var(--border-soft)",
          }} />
        ))}
      </div>

      {/* Heading */}
      <h2 className="text-center mb-16 h-grad-muted" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "2.5rem", lineHeight: 1, position: "relative", zIndex: 1, fontWeight: 300 }}>
        <span>My </span><span>experience</span>
      </h2>

      {/* Timeline wrapper */}
      <div style={{ maxWidth: "920px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

        {/* Vertical spine */}
        <div className="tl-spine" style={{
          position: "absolute",
          left: "50%", top: "24px", bottom: "24px",
          width: "1px",
          transform: "translateX(-50%)",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.14) 12%, rgba(255,255,255,0.14) 88%, rgba(255,255,255,0.03) 100%)",
          zIndex: 0,
        }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {entries.map((entry, i) => (
            <TimelineEntry key={i} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
