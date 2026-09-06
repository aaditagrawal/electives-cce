"use client";

import { styleClass } from "@/styles/classes";

interface CreditsBadgeProps {
  credits: [number, number, number, number];
}

export function CreditsBadge({ credits }: CreditsBadgeProps) {
  const [L, T, P, C] = credits;
  const labels = ["L", "T", "P"];
  const fullLabels = ["Lecture", "Tutorial", "Practical"];

  return (
    <div className={styleClass("creditsBadgeRoot")}>
      {/* Compact display */}
      <div className={styleClass("creditsBadgeBreakdown")}>
        <div className={styleClass("creditsBadgeValues")}>
          {[L, T, P].map((val, i) => (
            <span key={i} className={styleClass("creditsBadgePair")}>
              <span className={styleClass("creditsBadgeLabel")}>
                {labels[i]}
              </span>
              <span className={styleClass("creditsBadgeValue")}>{val}</span>
              {i < 2 && (
                <span className={styleClass("creditsBadgeDot")}>·</span>
              )}
            </span>
          ))}
        </div>
        <div className={styleClass("creditsBadgeDivider")} />
        <div className={styleClass("creditsBadgeTotal")}>
          <span className={styleClass("creditsBadgeTotalLabel")}>Credits</span>
          <span className={styleClass("creditsBadgeTotalValue")}>{C}</span>
        </div>
      </div>

      {/* Visual bar */}
      <div className={styleClass("creditsBadgeDetails")}>
        {[L, T, P].map((val, i) => (
          <div
            key={i}
            className={styleClass("creditsBadgeDetail")}
            style={{ width: `${Math.max(val * 16, 4)}px` }}
            title={`${fullLabels[i]}: ${val} hr/week`}
          />
        ))}
      </div>
    </div>
  );
}
