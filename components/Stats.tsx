"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, started: boolean, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - t, 3)) * target));
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

  const devs = useCountUp(4800, started);
  const grants = useCountUp(21, started);
  const growth = useCountUp(30, started);
  const events = useCountUp(20, started);

  const cells = [
    { v: `${devs.toLocaleString("en-IN")}+`, l: "Developers reached" },
    { v: `${grants}K`, l: "Grants managed" },
    { v: `${growth}%`, l: "Ecosystem growth" },
    { v: `${events}+`, l: "Events organized" },
  ];

  return (
    <section
      ref={ref}
      className="mx-auto max-w-[1240px] border-b border-ink px-6 sm:px-8"
    >
      <dl className="grid sm:grid-cols-2 lg:grid-cols-4">
        {cells.map((c, i) => (
          <div
            key={c.l}
            className={`border-b border-rule py-9 lg:border-b-0 ${
              i > 0 ? "lg:border-l lg:border-rule lg:pl-7" : ""
            } ${i < 3 ? "lg:pr-7" : ""}`}
          >
            <dd className="text-[clamp(38px,4.2vw,58px)] font-bold leading-none tracking-[-0.045em] [font-stretch:112%]">
              {c.v}
            </dd>
            <dt className="t-label mt-3 text-muted">{c.l}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
