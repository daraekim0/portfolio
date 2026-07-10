import { ImageIcon } from "lucide-react";

function Placeholder({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg border border-line bg-surface ${className ?? ""}`}
    >
      <ImageIcon className="h-5 w-5 text-muted" strokeWidth={1.5} />
    </div>
  );
}

export function PhotoCollage() {
  return (
    <div className="grid grid-cols-3 items-end gap-3">
      <Placeholder className="aspect-[3/4] self-end" />
      <Placeholder className="-mt-10 aspect-[3/4]" />
      <div className="flex flex-col gap-3">
        <Placeholder className="aspect-square" />
        <Placeholder className="aspect-square" />
      </div>
    </div>
  );
}
