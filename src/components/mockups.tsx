function TrafficLights() {
  return (
    <div className="flex gap-1.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#e7e7e7]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#e7e7e7]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#e7e7e7]" />
    </div>
  );
}

export function BrowserDashboardMockup() {
  return (
    <div className="h-full w-full overflow-hidden rounded-xl border border-line bg-[#111111] text-white">
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
        <TrafficLights />
        <div className="mx-auto h-6 w-1/3 rounded-full bg-white/5" />
      </div>
      <div className="grid grid-cols-[110px_1fr] gap-0">
        <div className="flex flex-col gap-3 border-r border-white/10 p-4">
          <div className="h-2 w-16 rounded bg-white/20" />
          {["Overview", "Team", "Calendar", "Settings"].map((label, i) => (
            <div
              key={label}
              className={`h-2 rounded ${i === 0 ? "w-full bg-white/60" : "w-10 bg-white/15"}`}
            />
          ))}
        </div>
        <div className="p-5">
          <div className="mb-4 flex items-end gap-2">
            {[40, 70, 55, 90, 65, 80, 45].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-white/25"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-lg border border-white/10 p-3">
                <div className="mb-2 h-2 w-8 rounded bg-white/40" />
                <div className="h-2 w-14 rounded bg-white/15" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PhoneAppMockup() {
  return (
    <div className="mx-auto h-full max-w-[220px] overflow-hidden rounded-[2rem] border-4 border-[#111111] bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 pt-3 text-[10px] text-foreground">
        <span>9:41</span>
        <span>100%</span>
      </div>
      <div className="mt-4 space-y-3 px-4">
        <div className="h-2 w-20 rounded bg-foreground/70" />
        <div className="h-24 w-full rounded-xl bg-surface" />
        <div className="flex gap-2">
          <div className="h-16 flex-1 rounded-lg bg-surface" />
          <div className="h-16 flex-1 rounded-lg bg-surface" />
        </div>
        <div className="space-y-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="h-6 w-6 shrink-0 rounded-full bg-surface" />
              <span className="h-2 flex-1 rounded bg-surface" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center pb-3">
        <div className="h-10 w-10 rounded-full bg-accent/90" />
      </div>
    </div>
  );
}

export function BrowserMapMockup() {
  return (
    <div className="h-full w-full overflow-hidden rounded-xl border border-line bg-[#f2f2f0]">
      <div className="flex items-center gap-3 border-b border-line bg-white px-4 py-3">
        <TrafficLights />
        <div className="mx-auto h-6 w-1/3 rounded-full bg-[#f2f2f0]" />
      </div>
      <div className="relative h-[calc(100%-2.75rem)] w-full">
        <svg viewBox="0 0 400 260" className="h-full w-full">
          <line x1="0" y1="60" x2="400" y2="90" stroke="#d9d9d6" strokeWidth="2" />
          <line x1="0" y1="150" x2="400" y2="120" stroke="#d9d9d6" strokeWidth="2" />
          <line x1="140" y1="0" x2="180" y2="260" stroke="#d9d9d6" strokeWidth="2" />
          <line x1="280" y1="0" x2="240" y2="260" stroke="#d9d9d6" strokeWidth="2" />
          <circle cx="170" cy="95" r="6" fill="#111111" />
          <circle cx="250" cy="140" r="4" fill="#8a8a8a" />
          <circle cx="110" cy="170" r="4" fill="#8a8a8a" />
        </svg>
        <div className="absolute left-4 top-4 w-40 rounded-lg border border-line bg-white p-3 shadow-sm">
          <div className="mb-2 h-2 w-16 rounded bg-foreground/60" />
          <div className="h-2 w-24 rounded bg-line" />
        </div>
      </div>
    </div>
  );
}

export function ProjectMockup({
  type,
}: {
  type: "browser-dashboard" | "phone-app" | "browser-map";
}) {
  if (type === "phone-app") return <PhoneAppMockup />;
  if (type === "browser-map") return <BrowserMapMockup />;
  return <BrowserDashboardMockup />;
}
