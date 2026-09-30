import Image from "next/image";

const frames = {
  timer: { src: "task-flow.png", width: 1114, height: 1610, x: 63, y: 4, w: 513, h: 575, alt: "Timely timer screen with a custom duration and structured focus modes" },
  block: { src: "task-flow.png", width: 1114, height: 1610, x: 63, y: 742, w: 987, h: 640, alt: "Timely task block screen with task title, duration, and task selection annotations" },
  physical: { src: "focus-flow.png", width: 856, height: 1078, x: 68, y: 46, w: 366, h: 410, alt: "Timely phone-distance prompt with a green physical timer concept" },
  reminder: { src: "focus-flow.png", width: 856, height: 1078, x: 68, y: 544, w: 705, h: 254, alt: "Timely task reminder and suggested tasks from Canvas and Notion" },
} as const;

export function TimelyVisual({ frame, priority = false }: { frame: keyof typeof frames; priority?: boolean }) {
  const crop = frames[frame];
  return (
    <div className="timely-source-frame" style={{ aspectRatio: `${crop.w} / ${crop.h}` }}>
      <Image src={`/work/timely/${crop.src}`} alt={crop.alt} width={crop.width} height={crop.height} sizes="(max-width: 700px) 200vw, 1100px" preload={priority} style={{ width: `${crop.width / crop.w * 100}%`, maxWidth: "none", height: "auto", position: "absolute", left: `${-crop.x / crop.w * 100}%`, top: `${-crop.y / crop.h * 100}%` }} />
    </div>
  );
}
