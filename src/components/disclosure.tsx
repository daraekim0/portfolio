"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export function Disclosure({
  label,
  defaultOpen = false,
  children,
}: {
  label: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-line py-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-left text-sm"
      >
        {label}
        {open ? (
          <Minus className="h-4 w-4 text-muted" />
        ) : (
          <Plus className="h-4 w-4 text-muted" />
        )}
      </button>
      {open && <div className="mt-3 text-sm text-muted">{children}</div>}
    </div>
  );
}
