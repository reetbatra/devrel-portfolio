"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1600, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return count;
}

export default function Stats() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const devs = useCountUp(4800, 1600, started);
  const grants = useCountUp(21, 1600, started);
  const onboarding = useCountUp(40, 1600, started);
  const events = useCountUp(20, 1600, started);

  const numStyle: React.CSSProperties = {
    fontFamily: "var(--font-dm-serif), serif",
    fontSize: "clamp(52px, 5vw, 76px)",
    lineHeight: 1,
    color: "#c87358",
    letterSpacing: "-0.03em",
    marginBottom: 10,
  };
  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-jakarta), sans-serif",
    fontSize: 12,
    fontWeight: 600,
    color: "#9c8c80",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  };

  return (
    <div
      id="stats-row"
      ref={ref}
      style={{
        background: "#fdfaf5",
        borderTop: "1px solid #ece0d4",
        borderBottom: "1px solid #ece0d4",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 48px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        <div
          style={{
            padding: "52px 40px 52px 0",
            borderRight: "1px solid #ece0d4",
          }}
        >
          <div style={numStyle}>{devs.toLocaleString()}+</div>
          <div style={labelStyle}>Developers Reached</div>
        </div>
        <div
          style={{ padding: "52px 40px", borderRight: "1px solid #ece0d4" }}
        >
          <div style={numStyle}>${grants}K</div>
          <div style={labelStyle}>Grants Managed</div>
        </div>
        <div
          style={{ padding: "52px 40px", borderRight: "1px solid #ece0d4" }}
        >
          <div style={numStyle}>{onboarding}%</div>
          <div style={labelStyle}>Onboarding Lift</div>
        </div>
        <div style={{ padding: "52px 0 52px 40px" }}>
          <div style={numStyle}>{events}+</div>
          <div style={labelStyle}>Events Organized</div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #stats-row > div {
            grid-template-columns: repeat(2, 1fr) !important;
            padding: 0 20px !important;
          }
          #stats-row > div > div {
            border-right: none !important;
            padding: 24px 16px !important;
            border-bottom: 1px solid #ece0d4 !important;
          }
          #stats-row > div > div:nth-child(3),
          #stats-row > div > div:nth-child(4) {
            border-bottom: none !important;
          }
        }
      `}</style>
    </div>
  );
}
