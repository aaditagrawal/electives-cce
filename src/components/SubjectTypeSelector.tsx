"use client";

import { getSubjectTypeCounts, getSubjectTypeInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

interface SubjectTypeSelectorProps {
  selectedType: string | null;
  onSelectType: (type: string) => void;
}

export function SubjectTypeSelector({
  selectedType,
  onSelectType,
}: SubjectTypeSelectorProps) {
  const counts = getSubjectTypeCounts();
  const types = ["PE1", "PE2", "FC2", "OE"];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
      {types.map((type) => {
        const info = getSubjectTypeInfo(type);
        const isSelected = selectedType === type;

        return (
          <button
            key={type}
            type="button"
            className={cn(
              "text-left p-3 md:p-4 rounded-lg border bg-card transition-all duration-150 hover:bg-accent",
              isSelected && "ring-1 ring-foreground"
            )}
            onClick={() => onSelectType(type)}
          >
            <div className="flex items-baseline justify-between mb-1.5 md:mb-2">
              <span className="text-xl md:text-2xl font-mono font-semibold">
                {info.name}
              </span>
              <span className="text-lg md:text-xl font-mono text-muted-foreground">
                {counts[type]}
              </span>
            </div>
            <p className="text-[10px] md:text-xs text-muted-foreground leading-tight">
              {info.fullName}
            </p>
          </button>
        );
      })}
    </div>
  );
}
