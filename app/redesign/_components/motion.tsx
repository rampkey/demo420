"use client";
import { useEffect, useRef } from "react";
export function ChromaticMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const configure = () => {
      observer?.disconnect();
      if (preference.matches || !("IntersectionObserver" in window)) {
        el.dataset.motion = "reduced";
        return;
      }
      el.dataset.motion = "ready";
      observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).dataset.revealed = "true";
              observer?.unobserve(entry.target);
            }
          }),
        { threshold: 0.08 },
      );
      el.querySelectorAll(".cu-reveal").forEach((item) =>
        observer?.observe(item),
      );
    };
    configure();
    preference.addEventListener("change", configure);
    const stage = el.querySelector<HTMLElement>(".cu-stage");
    let frame = 0;
    const move = (event: PointerEvent) => {
      if (!stage || preference.matches || event.pointerType !== "mouse") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = stage.getBoundingClientRect();
        stage.style.setProperty(
          "--tilt-y",
          `${((event.clientX - rect.left) / rect.width - 0.5) * 5}deg`,
        );
        stage.style.setProperty(
          "--tilt-x",
          `${-((event.clientY - rect.top) / rect.height - 0.5) * 5}deg`,
        );
      });
    };
    const reset = () => {
      if (stage) {
        cancelAnimationFrame(frame);
        stage.style.setProperty("--tilt-y", "0deg");
        stage.style.setProperty("--tilt-x", "0deg");
      }
    };
    stage?.addEventListener("pointermove", move);
    stage?.addEventListener("pointerleave", reset);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", configure);
      stage?.removeEventListener("pointermove", move);
      stage?.removeEventListener("pointerleave", reset);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <div ref={root} className="cu-motion">
      {children}
    </div>
  );
}
