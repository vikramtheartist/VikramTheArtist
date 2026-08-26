/*
 * Prologue — a single, compact section that tells the "why a framework"
 * story through an interactive image slider built on the actual scene
 * visuals. Sits between the Hero (intro + Opportunity + Problem) and
 * "My Approach". Three slides:
 *   1. Value over features  (prologue_value.png)
 *   2. Why aren't users showing up?  (prologue_showup.png)
 *   3. Common questions  (prologue_questions.png)
 *
 * Drop the three attachments into  public/IMG/  with the filenames in
 * SLIDES below. Until then each slide shows an in-system placeholder.
 */

import { useCallback, useEffect, useState } from "react";

interface Slide {
  src: string;
  kicker: string;
  title: string;
  narration: string;
  alt: string;
}

const SLIDES: Slide[] = [
  {
    src: "IMG/prologue_value.png",
    kicker: "01 · The belief",
    title: "People don’t want features — they want value",
    narration:
      "They’re not looking for another tool. What they really want is a better way to work, connect, and grow.",
    alt: "“Our users want features” struck through, replaced with “they want value”; “They want another tool” replaced with “they want a better way to work, connect, and grow.”",
  },
  {
    src: "IMG/prologue_showup.png",
    kicker: "02 · The moment",
    title: "Why aren’t users showing up?",
    narration:
      "Anyone who’s launched something hoping it would take off knows this feeling. Great ideas stall — not for lack of value, but because users don’t see that value clearly.",
    alt: "A lone figure on a busy street as everyone walks past, captioned “why users aren’t showing up?”",
  },
  {
    src: "IMG/prologue_questions.png",
    kicker: "03 · The questions",
    title: "The questions we all ask",
    narration:
      "Why aren’t users visiting? Why aren’t they engaging? Why don’t they see the potential? If you’ve felt that frustration, you need a structured, behavior-led way to help users discover, engage, and transform.",
    alt: "The same street scene, captioned “Common questions: Why aren’t users visiting? Why aren’t they engaging? Why don’t they see the potential?”",
  },
];

export function Prologue() {
  const [i, setI] = useState(0);
  const [broken, setBroken] = useState<Record<number, boolean>>({});

  const go = useCallback(
    (next: number) => setI((prev) => (next + SLIDES.length) % SLIDES.length),
    []
  );

  // Keyboard arrows when the section has focus within.
  const onKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") go(i + 1);
      if (e.key === "ArrowLeft") go(i - 1);
    },
    [go, i]
  );

  // Gentle auto-advance; pauses on hover/focus via the `paused` flag.
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(i + 1), 7000);
    return () => clearTimeout(t);
  }, [i, paused, go]);

  const active = SLIDES[i];

  return (
    <section id="prologue" className="pb-section relative px-6 md:px-12 lg:px-20 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 30% 30%, rgba(124,58,237,0.10) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1180px]">
        <div className="pb-eyebrow">Prologue</div>
        <h2 className="pb-h2 mt-3 max-w-[820px]">
          Before we dive in, a <span className="pb-accent">few thoughts</span>
        </h2>
        <p className="pb-body mt-6 max-w-[680px]">
          Adoption isn’t just about promotion — it’s more than that. Here’s the
          way I see the problem before we get to the framework.
        </p>

        {/* ── Slider ───────────────────────────────────────────── */}
        <div
          className="pb-slider mt-12"
          tabIndex={0}
          role="group"
          aria-roledescription="carousel"
          aria-label="Prologue story"
          onKeyDown={onKey}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="pb-slider-stage">
            <div
              className="pb-slider-track"
              style={{ transform: `translateX(-${i * 100}%)` }}
            >
              {SLIDES.map((s, idx) => (
                <div className="pb-slide" key={s.src} aria-hidden={idx !== i}>
                  {broken[idx] ? (
                    <div className="pb-slide-fallback">
                      <div className="pb-slide-fallback-kicker">{s.kicker}</div>
                      <div className="pb-slide-fallback-title">{s.title}</div>
                      <div className="pb-slide-fallback-note">
                        Save the attachment to{" "}
                        <code>public/{s.src}</code>
                      </div>
                    </div>
                  ) : (
                    <img
                      className="pb-slide-img"
                      src={`${import.meta.env.BASE_URL}${s.src}`}
                      alt={s.alt}
                      loading="lazy"
                      onError={() => setBroken((b) => ({ ...b, [idx]: true }))}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              className="pb-slider-arrow pb-slider-arrow--prev"
              aria-label="Previous"
              onClick={() => go(i - 1)}
            >
              ‹
            </button>
            <button
              className="pb-slider-arrow pb-slider-arrow--next"
              aria-label="Next"
              onClick={() => go(i + 1)}
            >
              ›
            </button>

            <div className="pb-slider-counter">
              {String(i + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </div>
          </div>

          {/* Caption — narration that changes per slide */}
          <div className="pb-slider-caption" key={i}>
            <div className="pb-slider-kicker">{active.kicker}</div>
            <h3 className="pb-h3 mt-2">{active.title}</h3>
            <p className="pb-body mt-3 max-w-[760px]">{active.narration}</p>
          </div>

          {/* Thumbnail rail — jump straight to any scene */}
          <div className="pb-thumbs" role="tablist" aria-label="Choose scene">
            {SLIDES.map((s, idx) => (
              <button
                key={s.src}
                role="tab"
                aria-selected={idx === i}
                aria-label={`Scene ${idx + 1}`}
                className={`pb-thumb ${idx === i ? "pb-thumb--active" : ""}`}
                onClick={() => go(idx)}
              >
                {broken[idx] ? (
                  <span className="pb-thumb-num">{idx + 1}</span>
                ) : (
                  <img
                    src={`${import.meta.env.BASE_URL}${s.src}`}
                    alt=""
                    onError={() => setBroken((b) => ({ ...b, [idx]: true }))}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <p className="pb-prologue-kicker mt-12 max-w-[780px]">
          Because adoption isn’t just about promotion — it needs a framework.
        </p>
      </div>
    </section>
  );
}
