import { useEffect, useMemo, useRef } from "react";
import referenceHtml from "../../../../reference/communication-plans-ux-case-study.html?raw";

type AggregateAnalyticsPageProps = {
  onBack: () => void;
};

function extractReferenceSource() {
  const styleMatch = referenceHtml.match(/<style>([\s\S]*?)<\/style>/);
  const bodyMatch = referenceHtml.match(/<body>([\s\S]*?)<script>/);

  if (!styleMatch || !bodyMatch) {
    throw new Error("The Communication Plans reference must contain a style block, body, and script.");
  }

  return {
    styles: styleMatch[1],
    body: bodyMatch[1],
  };
}

export function AggregateAnalyticsPage({ onBack }: AggregateAnalyticsPageProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const reference = useMemo(extractReferenceSource, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const previousTitle = document.title;
    document.title = "Communication Plans — UX Case Study";

    const cascade = root.querySelector<HTMLElement>("#cascadeStage");
    const replay = root.querySelector<HTMLButtonElement>("#replay");
    const brand = root.querySelector<HTMLAnchorElement>(".nav-brand");
    const timers: number[] = [];
    let cascadeObserver: IntersectionObserver | null = null;
    let revealObserver: IntersectionObserver | null = null;
    let walkthroughObserver: IntersectionObserver | null = null;
    const walkthrough = root.querySelector<HTMLElement>("[data-design-walkthrough]");
    const walkthroughSteps = Array.from(
      root.querySelectorAll<HTMLElement>("[data-walkthrough-step]"),
    );
    const walkthroughCleanups: Array<() => void> = [];

    const clearTimers = () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      timers.length = 0;
    };

    const setScene = (scene: number) => {
      if (!cascade) return;
      cascade.dataset.scene = String(scene);
      cascade.querySelectorAll(".progress-dot").forEach((dot, index) => {
        dot.classList.toggle("active", index === scene - 1);
      });
    };

    const playCascade = () => {
      clearTimers();
      setScene(1);
      timers.push(window.setTimeout(() => setScene(2), 5200));
      timers.push(window.setTimeout(() => setScene(3), 10800));
    };

    const handleBack = (event: Event) => {
      event.preventDefault();
      onBack();
    };

    brand?.addEventListener("click", handleBack);
    replay?.addEventListener("click", playCascade);

    if (cascade) {
      cascadeObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              playCascade();
              cascadeObserver?.disconnect();
            }
          });
        },
        { threshold: 0.18 },
      );
      cascadeObserver.observe(cascade);
    }

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    root.querySelectorAll(".reveal").forEach((element) => revealObserver?.observe(element));

    const selectWalkthroughStage = (stage: string) => {
      if (!walkthrough) return;
      walkthrough.dataset.activeStage = stage;
      walkthroughSteps.forEach((step) => {
        const selected = step.dataset.walkthroughStep === stage;
        step.classList.toggle("active", selected);
        if (selected) {
          step.setAttribute("aria-current", "step");
        } else {
          step.removeAttribute("aria-current");
        }
      });
    };

    if (walkthrough && walkthroughSteps.length > 0) {
      const syncWalkthroughToScroll = () => {
        const walkthroughBounds = walkthrough.getBoundingClientRect();
        if (walkthroughBounds.bottom < 0 || walkthroughBounds.top > window.innerHeight) return;
        const focusLine = window.innerHeight * 0.48;
        const closestStep = walkthroughSteps.reduce<HTMLElement | null>((closest, step) => {
          const stepBounds = step.getBoundingClientRect();
          const stepDistance = Math.abs(stepBounds.top + stepBounds.height / 2 - focusLine);
          if (!closest) return step;
          const closestBounds = closest.getBoundingClientRect();
          const closestDistance = Math.abs(
            closestBounds.top + closestBounds.height / 2 - focusLine,
          );
          return stepDistance < closestDistance ? step : closest;
        }, null);
        const stage = closestStep?.dataset.walkthroughStep;
        if (stage) selectWalkthroughStage(stage);
      };

      const handleWalkthroughScroll = () => syncWalkthroughToScroll();

      walkthroughObserver = new IntersectionObserver(
        (entries) => {
          const activeEntry = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          const stage = (activeEntry?.target as HTMLElement | undefined)?.dataset.walkthroughStep;
          if (stage) selectWalkthroughStage(stage);
        },
        {
          rootMargin: "-34% 0px -42% 0px",
          threshold: [0, 0.15, 0.4, 0.7],
        },
      );

      walkthroughSteps.forEach((step) => {
        const stage = step.dataset.walkthroughStep;
        const handleActivate = () => {
          if (stage) selectWalkthroughStage(stage);
        };
        const handleClick = () => {
          handleActivate();
          step.scrollIntoView({ behavior: "smooth", block: "center" });
        };
        step.addEventListener("focus", handleActivate);
        step.addEventListener("click", handleClick);
        walkthroughObserver?.observe(step);
        walkthroughCleanups.push(() => {
          step.removeEventListener("focus", handleActivate);
          step.removeEventListener("click", handleClick);
        });
      });
      window.addEventListener("scroll", handleWalkthroughScroll, { passive: true });
      window.addEventListener("resize", handleWalkthroughScroll);
      walkthroughCleanups.push(() => {
        window.removeEventListener("scroll", handleWalkthroughScroll);
        window.removeEventListener("resize", handleWalkthroughScroll);
      });
      selectWalkthroughStage("ai");
      syncWalkthroughToScroll();
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      clearTimers();
      setScene(3);
      root.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
      cascadeObserver?.disconnect();
      revealObserver?.disconnect();
      walkthroughObserver?.disconnect();
    }

    return () => {
      clearTimers();
      cascadeObserver?.disconnect();
      revealObserver?.disconnect();
      walkthroughObserver?.disconnect();
      brand?.removeEventListener("click", handleBack);
      replay?.removeEventListener("click", playCascade);
      walkthroughCleanups.forEach((cleanup) => cleanup());
      document.title = previousTitle;
    };
  }, [onBack]);

  return (
    <>
      <style>{`${reference.styles}
        .communication-reference > main {
          width: 100%;
          max-width: none;
          margin: 0;
          padding: 0;
        }
        .communication-reference .nav-brand {
          border: 0;
          color: inherit;
          background: transparent;
          cursor: pointer;
        }
        @media (prefers-reduced-motion: reduce) {
          .communication-reference *,
          .communication-reference *::before,
          .communication-reference *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      <div
        className="communication-reference"
        ref={rootRef}
        dangerouslySetInnerHTML={{ __html: reference.body }}
      />
    </>
  );
}
