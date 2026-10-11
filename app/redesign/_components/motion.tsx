"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
const scenes = [
  [1, 0.48, 0.1, 0.04],
  [0.32, 0.1, 1, 0.1],
  [0.65, 0.48, 0.22, 1],
  [0.38, 0.22, 0.18, 0.35],
  [0.1, 0.08, 0.06, 0.04],
];
export function ChromaticMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stage = el.querySelector<HTMLElement>(".cu-stage");
    let observer: IntersectionObserver | undefined;
    let ambientFrame = 0;
    let depthFrame = 0;
    const paintScene = () => {
      ambientFrame = 0;
      const extent = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const progress = preference.matches
        ? 0
        : Math.min(1, Math.max(0, window.scrollY / extent));
      const position = progress * (scenes.length - 1);
      const index = Math.min(scenes.length - 2, Math.floor(position));
      const blend = position - index;
      ["violet", "magenta", "cyan", "orange"].forEach((name, n) => {
        el.style.setProperty(
          `--scene-${name}`,
          (
            scenes[index][n] * (1 - blend) +
            scenes[index + 1][n] * blend
          ).toFixed(3),
        );
      });
    };
    const scheduleScene = () => {
      if (!preference.matches && !ambientFrame)
        ambientFrame = requestAnimationFrame(paintScene);
    };
    const reset = () => {
      cancelAnimationFrame(depthFrame);
      stage?.style.setProperty("--tilt-y", "0deg");
      stage?.style.setProperty("--tilt-x", "0deg");
    };
    const configure = () => {
      observer?.disconnect();
      reset();
      paintScene();
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
    const move = (event: PointerEvent) => {
      if (!stage || preference.matches || event.pointerType !== "mouse") return;
      cancelAnimationFrame(depthFrame);
      depthFrame = requestAnimationFrame(() => {
        const rect = stage.getBoundingClientRect();
        stage.style.setProperty(
          "--tilt-y",
          `${((event.clientX - rect.left) / rect.width - 0.5) * 4}deg`,
        );
        stage.style.setProperty(
          "--tilt-x",
          `${-((event.clientY - rect.top) / rect.height - 0.5) * 4}deg`,
        );
      });
    };
    configure();
    preference.addEventListener("change", configure);
    window.addEventListener("scroll", scheduleScene, { passive: true });
    window.addEventListener("resize", scheduleScene, { passive: true });
    stage?.addEventListener("pointermove", move);
    stage?.addEventListener("pointerleave", reset);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", configure);
      window.removeEventListener("scroll", scheduleScene);
      window.removeEventListener("resize", scheduleScene);
      stage?.removeEventListener("pointermove", move);
      stage?.removeEventListener("pointerleave", reset);
      cancelAnimationFrame(ambientFrame);
      cancelAnimationFrame(depthFrame);
    };
  }, [pathname]);
  return (
    <div ref={root} className="cu-motion">
      {children}
    </div>
  );
}
