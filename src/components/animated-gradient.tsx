"use client";

import { useEffect, useRef } from "react";

const SIZE = 560;
const MOUSE_EASE = 0.03;
const MOUSE_INFLUENCE = 0.08;
const MAX_NUDGE = 90;

export function AnimatedGradient() {
  const blobRef = useRef<HTMLDivElement>(null);
  const mouseTarget = useRef({ x: 0, y: 0 });
  const mouseEased = useRef({ x: 0, y: 0 });
  const hasMouse = useRef(false);

  useEffect(() => {
    const center = () => ({
      x: window.innerWidth * 0.72,
      y: window.innerHeight * 0.65,
    });
    mouseTarget.current = center();
    mouseEased.current = center();

    const onMove = (e: MouseEvent) => {
      hasMouse.current = true;
      mouseTarget.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const t = now - start;
      const c = center();

      // Autonomous drifting orbit -- the blob always wanders on its own.
      const floatX = c.x + Math.sin(t * 0.00028) * 190;
      const floatY = c.y + Math.cos(t * 0.00021) * 150;

      // Mouse only nudges the orbit slightly, eased and clamped.
      mouseEased.current.x +=
        (mouseTarget.current.x - mouseEased.current.x) * MOUSE_EASE;
      mouseEased.current.y +=
        (mouseTarget.current.y - mouseEased.current.y) * MOUSE_EASE;

      let nudgeX = 0;
      let nudgeY = 0;
      if (hasMouse.current) {
        nudgeX = (mouseEased.current.x - c.x) * MOUSE_INFLUENCE;
        nudgeY = (mouseEased.current.y - c.y) * MOUSE_INFLUENCE;
        nudgeX = Math.max(-MAX_NUDGE, Math.min(MAX_NUDGE, nudgeX));
        nudgeY = Math.max(-MAX_NUDGE, Math.min(MAX_NUDGE, nudgeY));
      }

      const x = floatX + nudgeX - SIZE / 2;
      const y = floatY + nudgeY - SIZE / 2;

      if (blobRef.current) {
        blobRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        ref={blobRef}
        className="absolute top-0 left-0 h-[560px] w-[560px] rounded-full bg-gradient-to-br from-[#ffd9c2] via-[#ffe4e1] to-transparent opacity-70 blur-3xl"
      />
    </div>
  );
}
