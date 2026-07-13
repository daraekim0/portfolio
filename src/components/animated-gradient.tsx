"use client";

import { useEffect, useRef } from "react";

const SIZE = 560;
const EASE = 0.045;

export function AnimatedGradient() {
  const blobRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const initial = {
      x: window.innerWidth * 0.8,
      y: window.innerHeight * 0.75,
    };
    target.current = initial;
    current.current = initial;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    let frame: number;
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * EASE;
      current.current.y += (target.current.y - current.current.y) * EASE;

      if (blobRef.current) {
        blobRef.current.style.transform = `translate3d(${current.current.x - SIZE / 2}px, ${current.current.y - SIZE / 2}px, 0)`;
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
