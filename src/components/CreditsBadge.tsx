"use client";

interface CreditsBadgeProps {
  credits: [number, number, number, number];
}

export function CreditsBadge({ credits }: CreditsBadgeProps) {
  const [L, T, P, C] = credits;
  const labels = ["L", "T", "P"];
  const fullLabels = ["Lecture", "Tutorial", "Practical"];

  return (
    <div className="space-y-2">
      {/* Compact display */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 font-mono text-sm">
          {[L, T, P].map((val, i) => (
            <span key={i} className="flex items-center">
              <span className="text-muted-foreground text-xs">{labels[i]}</span>
              <span className="ml-0.5">{val}</span>
              {i < 2 && <span className="text-muted-foreground/50 mx-1">·</span>}
            </span>
          ))}
        </div>
        <div className="h-4 w-px bg-border" />
        <div className="flex items-center gap-1">
          <span className="text-xs text-muted-foreground">Credits</span>
          <span className="font-mono font-semibold">{C}</span>
        </div>
      </div>

      {/* Visual bar */}
      <div className="flex items-center gap-0.5 h-2">
        {[L, T, P].map((val, i) => (
          <div
            key={i}
            className="h-full bg-foreground/20 first:rounded-l last:rounded-r"
            style={{ width: `${Math.max(val * 24, 4)}px` }}
            title={`${fullLabels[i]}: ${val} hr/week`}
          />
        ))}
      </div>
    </div>
  );
}
