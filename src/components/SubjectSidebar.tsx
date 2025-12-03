"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { getCurriculum, type Subject } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown } from "lucide-react";

interface SubjectSidebarProps {
  subjects: Subject[];
  selectedCode: string | null;
  onSelectSubject: (code: string) => void;
  onReorder: (subjects: Subject[]) => void;
}

export function SubjectSidebar({
  subjects,
  selectedCode,
  onSelectSubject,
  onReorder,
}: SubjectSidebarProps) {
  const moveUp = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (index === 0) return;
    const newSubjects = [...subjects];
    [newSubjects[index - 1], newSubjects[index]] = [newSubjects[index], newSubjects[index - 1]];
    onReorder(newSubjects);
  };

  const moveDown = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (index === subjects.length - 1) return;
    const newSubjects = [...subjects];
    [newSubjects[index], newSubjects[index + 1]] = [newSubjects[index + 1], newSubjects[index]];
    onReorder(newSubjects);
  };

  const getSourceIndicator = (code: string) => {
    const curriculum = getCurriculum(code);
    const type = curriculum.source.type;
    
    if (type === "definitive") {
      return { symbol: "●", class: "text-foreground", label: "Official" };
    }
    if (type === "speculative") {
      return { symbol: "◐", class: "text-muted-foreground", label: "Historical" };
    }
    if (type === "external") {
      return { symbol: "◌", class: "text-muted-foreground", label: "External" };
    }
    return { symbol: "○", class: "text-muted-foreground/50", label: "Limited" };
  };

  return (
    <div className="md:w-72 lg:w-80 md:border-r border-border bg-sidebar flex flex-col h-full min-h-0">
      <div className="p-2.5 sm:p-3 border-b border-border shrink-0">
        <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
          Rank • {subjects.length} courses
        </p>
      </div>
      <ScrollArea className="flex-1 min-h-0">
        <div className="p-1.5 sm:p-2">
          {subjects.map((subject, index) => {
            const isSelected = selectedCode === subject["SUBJECT CODE"];
            const indicator = getSourceIndicator(subject["SUBJECT CODE"]);

            return (
              <div
                key={subject["SUBJECT CODE"]}
                className={cn(
                  "group flex items-start gap-1.5 sm:gap-2 p-2 sm:p-2.5 rounded mb-0.5 transition-colors cursor-pointer",
                  isSelected
                    ? "bg-accent"
                    : "hover:bg-accent/50"
                )}
                onClick={() => onSelectSubject(subject["SUBJECT CODE"])}
              >
                {/* Rank Number */}
                <div className="w-4 sm:w-5 text-center shrink-0 pt-0.5">
                  <span className="text-[10px] sm:text-xs font-mono text-muted-foreground">
                    {index + 1}
                  </span>
                </div>

                {/* Reorder Buttons */}
                <div className="flex flex-col shrink-0 -my-0.5">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 sm:h-5 sm:w-5 p-0 opacity-40 hover:opacity-100"
                    onClick={(e) => moveUp(index, e)}
                    disabled={index === 0}
                  >
                    <ChevronUp className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 sm:h-5 sm:w-5 p-0 opacity-40 hover:opacity-100"
                    onClick={(e) => moveDown(index, e)}
                    disabled={index === subjects.length - 1}
                  >
                    <ChevronDown className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  </Button>
                </div>

                {/* Subject Info */}
                <div className="flex-1 min-w-0 overflow-hidden">
                  <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
                    <span className="font-mono text-[10px] sm:text-xs font-medium text-foreground">
                      {subject["SUBJECT CODE"]}
                    </span>
                    <span className={cn("text-[9px] sm:text-[10px]", indicator.class)} title={indicator.label}>
                      {indicator.symbol}
                    </span>
                    {subject["Minor-Only"] === "yes" && (
                      <span className="text-[8px] sm:text-[9px] px-1 py-0.5 bg-purple-500/20 rounded text-purple-400">
                        M
                      </span>
                    )}
                  </div>
                  <p className="text-[9px] sm:text-[11px] text-muted-foreground mt-0.5 break-words leading-tight">
                    {subject["Subject Name"]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
      
      {/* Legend */}
      <div className="p-2 border-t border-border text-[9px] sm:text-[10px] text-muted-foreground shrink-0">
        <div className="flex flex-wrap gap-x-2 sm:gap-x-3 gap-y-1">
          <span>● Official</span>
          <span>◐ Historical</span>
          <span>◌ External</span>
          <span>○ Limited</span>
        </div>
      </div>
    </div>
  );
}
