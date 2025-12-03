"use client";

import { ExternalLink } from "lucide-react";

interface ReferencesListProps {
  references: string[];
}

export function ReferencesList({ references }: ReferencesListProps) {
  if (references.length === 0) return null;

  return (
    <div className="mt-4">
      <h4 className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
        References
      </h4>
      <ul className="space-y-1.5 sm:space-y-2">
        {references.map((ref, i) => {
          const isUrl = ref.startsWith("http");
          return (
            <li key={i} className="text-[10px] sm:text-[11px] md:text-xs text-foreground flex gap-2">
              <span className="text-muted-foreground shrink-0 font-mono w-4 text-right">
                {i + 1}.
              </span>
              {isUrl ? (
                <a
                  href={ref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-muted-foreground flex items-start gap-1 underline underline-offset-2 min-w-0 break-all"
                >
                  <span>{ref}</span>
                  <ExternalLink className="h-2.5 w-2.5 shrink-0 mt-0.5" />
                </a>
              ) : (
                <span className="leading-relaxed break-words">{ref}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
