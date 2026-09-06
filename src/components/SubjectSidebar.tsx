"use client";

import { styles } from "@/styles/site.stylex";
import { styleClass } from "@/styles/classes";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { getCurriculum, type Subject } from "@/lib/data";
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
    [newSubjects[index - 1], newSubjects[index]] = [
      newSubjects[index],
      newSubjects[index - 1],
    ];
    onReorder(newSubjects);
  };

  const moveDown = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (index === subjects.length - 1) return;
    const newSubjects = [...subjects];
    [newSubjects[index], newSubjects[index + 1]] = [
      newSubjects[index + 1],
      newSubjects[index],
    ];
    onReorder(newSubjects);
  };

  const getSourceIndicator = (code: string) => {
    const curriculum = getCurriculum(code);
    const type = curriculum.source.type;

    if (type === "definitive") {
      return {
        symbol: "●",
        class: "officialIndicator" as const,
        label: "Official",
      };
    }
    if (type === "speculative") {
      return {
        symbol: "◐",
        class: "historicalIndicator" as const,
        label: "Historical",
      };
    }
    if (type === "external") {
      return {
        symbol: "◌",
        class: "historicalIndicator" as const,
        label: "External",
      };
    }
    return {
      symbol: "○",
      class: "limitedIndicator" as const,
      label: "Limited",
    };
  };

  return (
    <div className={styleClass("subjectSidebarRoot")}>
      <div className={styleClass("subjectSidebarHeader")}>
        <p className={styleClass("subjectSidebarHeading")}>
          Rank • {subjects.length} courses
        </p>
      </div>
      <ScrollArea
        xstyle={styles.subjectSidebarScroll}
        className="sx-subjectSidebarScroll"
      >
        <div className={styleClass("subjectSidebarList")}>
          {subjects.map((subject, index) => {
            const isSelected = selectedCode === subject["SUBJECT CODE"];
            const indicator = getSourceIndicator(subject["SUBJECT CODE"]);

            return (
              <div
                key={subject["SUBJECT CODE"]}
                className={styleClass(
                  isSelected ? "subjectSelected" : "subjectRow",
                )}
                onClick={() => onSelectSubject(subject["SUBJECT CODE"])}
              >
                {/* Rank Number */}
                <div className={styleClass("subjectSidebarRank")}>
                  <span className={styleClass("subjectSidebarRankNumber")}>
                    {index + 1}
                  </span>
                </div>

                {/* Reorder Buttons */}
                <div className={styleClass("subjectSidebarReorderControls")}>
                  <Button
                    variant="ghost"
                    size="icon"
                    xstyle={styles.subjectSidebarMoveUp}
                    className="sx-subjectSidebarMoveUp"
                    onClick={(e) => moveUp(index, e)}
                    disabled={index === 0}
                  >
                    <ChevronUp className={styleClass("subjectSidebarUpIcon")} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    xstyle={styles.subjectSidebarMoveDown}
                    className="sx-subjectSidebarMoveDown"
                    onClick={(e) => moveDown(index, e)}
                    disabled={index === subjects.length - 1}
                  >
                    <ChevronDown
                      className={styleClass("subjectSidebarDownIcon")}
                    />
                  </Button>
                </div>

                {/* Subject Info */}
                <div className={styleClass("subjectSidebarSubjectInfo")}>
                  <div className={styleClass("subjectSidebarSubjectHeading")}>
                    <span className={styleClass("subjectSidebarSubjectCode")}>
                      {subject["SUBJECT CODE"]}
                    </span>
                    <span
                      className={styleClass(indicator.class)}
                      title={indicator.label}
                    >
                      {indicator.symbol}
                    </span>
                    {subject["Minor-Only"] === "yes" && (
                      <span className={styleClass("subjectSidebarMinorLabel")}>
                        M
                      </span>
                    )}
                  </div>
                  <p className={styleClass("subjectSidebarSubjectName")}>
                    {subject["Subject Name"]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>

      {/* Legend */}
      <div className={styleClass("subjectSidebarFooter")}>
        <div className={styleClass("subjectSidebarLegend")}>
          <span>● Official</span>
          <span>◐ Historical</span>
          <span>◌ External</span>
          <span>○ Limited</span>
        </div>
      </div>
    </div>
  );
}
