"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, X } from "lucide-react";
import { site } from "@/lib/data";

const CANNED_ANSWER =
  "That's a great line to ask about. I write everything on this site myself — from the case studies to this little AI panel — so if you want the real story behind it, the fastest way is just to email me.";

export function AskRaeLLM() {
  const [selection, setSelection] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);
  const [panelQuote, setPanelQuote] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onSelectionChange = () => {
      const sel = window.getSelection();
      const text = sel?.toString().trim() ?? "";

      if (!text || text.length < 3 || !sel || sel.rangeCount === 0) {
        setSelection(null);
        return;
      }

      const range = sel.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) {
        setSelection(null);
        return;
      }

      setSelection({
        text,
        x: rect.left + rect.width / 2 + window.scrollX,
        y: rect.top + window.scrollY,
      });
    };

    document.addEventListener("selectionchange", onSelectionChange);
    return () =>
      document.removeEventListener("selectionchange", onSelectionChange);
  }, []);

  useEffect(() => {
    if (!panelQuote) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPanelQuote(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [panelQuote]);

  return (
    <div ref={containerRef}>
      {selection && (
        <button
          onClick={() => {
            setPanelQuote(selection.text);
            setSelection(null);
            window.getSelection()?.removeAllRanges();
          }}
          style={{
            position: "absolute",
            left: selection.x,
            top: selection.y,
            transform: "translate(-50%, calc(-100% - 8px))",
          }}
          className="z-50 flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 text-xs text-background shadow-lg transition-transform hover:scale-105"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Ask RaeLLM
        </button>
      )}

      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-line bg-background shadow-2xl transition-transform duration-300 ${
          panelQuote ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <span className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted">
            <Sparkles className="h-3.5 w-3.5" />
            Ask RaeLLM
          </span>
          <button
            onClick={() => setPanelQuote(null)}
            className="text-muted transition-colors hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {panelQuote && (
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <p className="text-xs uppercase tracking-wide text-muted">
              Your quote
            </p>
            <blockquote className="mt-2 border-l-2 border-accent pl-3 text-sm italic text-muted">
              &ldquo;{panelQuote}&rdquo;
            </blockquote>

            <p className="mt-6 text-xs uppercase tracking-wide text-muted">
              RaeLLM
            </p>
            <p className="mt-2 text-sm leading-relaxed">{CANNED_ANSWER}</p>

            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs transition-colors hover:border-accent hover:text-accent"
            >
              Email {site.name.split(" ")[0]}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
