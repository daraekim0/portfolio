"use client";

import { useEffect, useState } from "react";

const SIZE = 560;

export function AnimatedGradient() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className={`absolute h-[560px] w-[560px] rounded-full bg-gradient-to-br from-[#ffd9c2] via-[#ffe4e1] to-transparent opacity-70 blur-3xl transition-transform duration-700 ease-out ${
          pos ? "top-0 left-0" : "-right-40 -bottom-40"
        }`}
        style={
          pos
            ? {
                transform: `translate3d(${pos.x - SIZE / 2}px, ${pos.y - SIZE / 2}px, 0)`,
              }
            : undefined
        }
      />
    </div>
  );
}
