"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { X } from "lucide-react";
import { site } from "@/lib/data";

const CANNED_ANSWER =
  "That's a great line to ask about. I write everything on this site myself — from the case studies to this little AI panel — so if you want the real story behind it, the fastest way is just to email me.";

const INTRO_ANSWER =
  "Hi, I'm a small AI panel trained to talk about Rae's work. Highlight any line on the site and ask about it, or just email her directly below.";

type AskRaeContextValue = {
  openWithQuote: (quote: string) => void;
  openBlank: () => void;
};

const AskRaeContext = createContext<AskRaeContextValue | null>(null);

export function useAskRae() {
  const ctx = useContext(AskRaeContext);
  if (!ctx) throw new Error("useAskRae must be used within AskRaeProvider");
  return ctx;
}

export function AskRaeProvider({ children }: { children: ReactNode }) {
  const [selection, setSelection] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);
  const [panel, setPanel] = useState<{ open: boolean; quote: string | null }>(
    { open: false, quote: null },
  );

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
    if (!panel.open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPanel({ open: false, quote: null });
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [panel.open]);

  const openWithQuote = (quote: string) => setPanel({ open: true, quote });
  const openBlank = () => setPanel({ open: true, quote: null });
  const close = () => setPanel({ open: false, quote: null });

  return (
    <AskRaeContext.Provider value={{ openWithQuote, openBlank }}>
      {children}

      {selection && (
        <button
          onClick={() => {
            openWithQuote(selection.text);
            setSelection(null);
            window.getSelection()?.removeAllRanges();
          }}
          style={{
            position: "absolute",
            left: selection.x,
            top: selection.y,
            transform: "translate(-50%, calc(-100% - 8px))",
          }}
          className="z-50 rounded-full bg-foreground px-3.5 py-1.5 text-xs text-background shadow-lg transition-transform hover:scale-105"
        >
          Ask
        </button>
      )}

      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-line bg-background shadow-2xl transition-transform duration-500 ease-out ${
          panel.open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <span className="text-xs uppercase tracking-wide text-muted">
            Ask
          </span>
          <button
            onClick={close}
            className="text-muted transition-colors hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {panel.open && (
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {panel.quote ? (
              <>
                <p className="text-xs uppercase tracking-wide text-muted">
                  Your quote
                </p>
                <blockquote className="mt-2 border-l-2 border-accent pl-3 text-sm italic text-muted">
                  &ldquo;{panel.quote}&rdquo;
                </blockquote>
              </>
            ) : null}

            <p className="mt-6 text-xs uppercase tracking-wide text-muted">
              Ask
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              {panel.quote ? CANNED_ANSWER : INTRO_ANSWER}
            </p>

            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs transition-colors hover:border-accent hover:text-accent"
            >
              Email {site.name.split(" ")[0]}
            </a>
          </div>
        )}
      </div>
    </AskRaeContext.Provider>
  );
}
