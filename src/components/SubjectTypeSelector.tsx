"use client";

import { styleClass } from "@/styles/classes";

import {
  getSubjectTypeCounts,
  getMinorOnlyCounts,
  getSubjectTypeInfo,
} from "@/lib/data";

interface SubjectTypeSelectorProps {
  selectedType: string | null;
  onSelectType: (type: string) => void;
  withMinor: boolean;
}

export function SubjectTypeSelector({
  selectedType,
  onSelectType,
  withMinor,
}: SubjectTypeSelectorProps) {
  const counts = getSubjectTypeCounts(withMinor);
  const minorCounts = getMinorOnlyCounts();
  const types = ["PE1", "PE2", "FC2", "OE"];

  return (
    <div className={styleClass("subjectTypeSelectorGrid")}>
      {types.map((type) => {
        const info = getSubjectTypeInfo(type);
        const isSelected = selectedType === type;
        const minorCount = minorCounts[type] || 0;

        return (
          <button
            key={type}
            type="button"
            className={styleClass(isSelected ? "typeCardSelected" : "typeCard")}
            onClick={() => onSelectType(type)}
          >
            <div className={styleClass("subjectTypeSelectorHeading")}>
              <span className={styleClass("subjectTypeSelectorName")}>
                {info.name}
              </span>
              <div className={styleClass("subjectTypeSelectorCounts")}>
                <span className={styleClass("subjectTypeSelectorCount")}>
                  {counts[type] || 0}
                </span>
                {withMinor && minorCount > 0 && (
                  <span className={styleClass("subjectTypeSelectorMinorCount")}>
                    +{minorCount}M
                  </span>
                )}
              </div>
            </div>
            <p className={styleClass("subjectTypeSelectorDescription")}>
              {info.fullName}
            </p>
          </button>
        );
      })}
    </div>
  );
}
