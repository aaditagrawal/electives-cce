"use client";

import { styleClass } from "@/styles/classes";

import { ExternalLink } from "lucide-react";

interface ReferencesListProps {
  references: string[];
}

export function ReferencesList({ references }: ReferencesListProps) {
  if (references.length === 0) return null;

  return (
    <div className={styleClass("referencesListRoot")}>
      <h4 className={styleClass("referencesListHeading")}>References</h4>
      <ul className={styleClass("referencesListList")}>
        {references.map((ref, i) => {
          const isUrl = ref.startsWith("http");
          return (
            <li key={i} className={styleClass("referencesListItem")}>
              <span className={styleClass("referencesListNumber")}>
                {i + 1}.
              </span>
              {isUrl ? (
                <a
                  href={ref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styleClass("referencesListLink")}
                >
                  <span>{ref}</span>
                  <ExternalLink
                    className={styleClass("referencesListExternalIcon")}
                  />
                </a>
              ) : (
                <span className={styleClass("referencesListText")}>{ref}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
