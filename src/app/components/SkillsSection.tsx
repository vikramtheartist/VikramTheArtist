const skills = [
  "AI First Design",
  "Design Thinking",
  "Design Leadership",
  "Stakeholder Management",
  "Interaction Design",
  "User Research",
  "Coaching & Mentorship",
  "Product Vision",
  "Agile methodologies",
  "Figma",
  "Claude",
  "Story Telling",
  "Product Adoption",
  "Design Workshops",
  "Vibe-coding",
];

export function SkillsSection() {
  return (
    <section className="relative py-12 w-full">
      <h2 className="text-center mb-12" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "2.5rem", lineHeight: 1 }}>
        <span style={{
          fontWeight: 300,
          background: "linear-gradient(180deg, #c8c8d8 0%, #8888a0 45%, #484858 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>Skills</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <a
            key={skill}
            href={`https://www.google.com/search?q=${encodeURIComponent(skill)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="skill-tag"
            style={{
              padding: "8px 20px",
              fontSize: "clamp(0.71rem, 0.86vw, 0.9rem)",
              fontFamily: "'Satoshi', sans-serif",
              letterSpacing: "-0.3px",
              textDecoration: "none",
            }}
          >
            {skill}
          </a>
        ))}
        <span
          className="skill-tag cursor-pointer"
          style={{
            padding: "8px 20px",
            fontSize: "clamp(0.71rem, 0.86vw, 0.9rem)",
            fontFamily: "'Satoshi', sans-serif",
            color: "#c9a96e",
          }}
        >
          ++
        </span>
      </div>
    </section>
  );
}
