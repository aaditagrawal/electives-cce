"use client";

import { styles } from "@/styles/site.stylex";
import { styleClass } from "@/styles/classes";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { getCurriculum, getSubjects } from "@/lib/data";
import { CreditsBadge } from "./CreditsBadge";
import { ReferencesList } from "./ReferencesList";
import {
  ExternalLink,
  AlertCircle,
  FileText,
  ArrowRight,
  Info,
} from "lucide-react";

interface CurriculumPanelProps {
  code: string | null;
}

export function CurriculumPanel({ code }: CurriculumPanelProps) {
  if (!code) {
    return (
      <div className={styleClass("curriculumPanelEmptyPanel")}>
        <div className={styleClass("curriculumPanelEmptyContent")}>
          <FileText className={styleClass("curriculumPanelEmptyIcon")} />
          <p className={styleClass("curriculumPanelEmptyLabel")}>
            Select a subject to view curriculum
          </p>
        </div>
      </div>
    );
  }

  const curriculum = getCurriculum(code);
  const subject = getSubjects().find((s) => s["SUBJECT CODE"] === code);

  const sourceTypeStyles = {
    definitive: "sourcedefinitive",
    speculative: "sourcespeculative",
    external: "sourceexternal",
    missing: "sourcemissing",
  } as const;

  return (
    <ScrollArea
      xstyle={styles.curriculumPanelScroll}
      className="sx-curriculumPanelScroll"
    >
      <div className={styleClass("curriculumPanelContent")}>
        {/* Header */}
        <div className={styleClass("curriculumPanelHeader")}>
          <p className={styleClass("curriculumPanelCode")}>{code}</p>
          <h1 className={styleClass("curriculumPanelTitle")}>
            {curriculum.title}
          </h1>

          {subject?.["Minor-Only"] === "yes" && (
            <p className={styleClass("curriculumPanelMinorLabel")}>
              Minor Specialization Only
            </p>
          )}
        </div>

        {/* Source Information Box */}
        <div className={styleClass(sourceTypeStyles[curriculum.source.type])}>
          <div className={styleClass("curriculumPanelSourceRow")}>
            <Info className={styleClass("curriculumPanelSourceIcon")} />
            <div className={styleClass("curriculumPanelSourceContent")}>
              <p className={styleClass("curriculumPanelSourceLabel")}>
                {curriculum.source.label}
              </p>
              <p className={styleClass("curriculumPanelSourceExplanation")}>
                {curriculum.source.explanation}
              </p>

              {/* Mapping Info */}
              {curriculum.source.mappingInfo && (
                <div className={styleClass("curriculumPanelMapping")}>
                  <p className={styleClass("curriculumPanelMappingLabel")}>
                    {curriculum.source.mappingInfo.relationship}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <Separator
          xstyle={styles.curriculumPanelSeparator}
          className="sx-curriculumPanelSeparator"
        />

        {/* Credits */}
        {curriculum.credits && (
          <div className={styleClass("curriculumPanelCredits")}>
            <h3 className={styleClass("curriculumPanelCreditsHeading")}>
              Credits
            </h3>
            <CreditsBadge credits={curriculum.credits} />
          </div>
        )}

        {/* Description */}
        {curriculum.description && (
          <div className={styleClass("curriculumPanelDescription")}>
            <h3 className={styleClass("curriculumPanelDescriptionHeading")}>
              Course Content
            </h3>
            <p className={styleClass("curriculumPanelDescriptionText")}>
              {curriculum.description}
            </p>
          </div>
        )}

        {/* Multiple Subjects (for combined courses) */}
        {curriculum.subjects && curriculum.subjects.length > 0 && (
          <div className={styleClass("curriculumPanelCombined")}>
            <h3 className={styleClass("curriculumPanelCombinedHeading")}>
              Combined Course Content
            </h3>
            {curriculum.subjects.map((sub, i) => (
              <div
                key={i}
                className={styleClass("curriculumPanelCombinedItem")}
              >
                <h4 className={styleClass("curriculumPanelCombinedTitle")}>
                  {sub.title}
                </h4>
                <p className={styleClass("curriculumPanelCombinedText")}>
                  {sub.description}
                </p>
                {sub.references && sub.references.length > 0 && (
                  <ReferencesList references={sub.references} />
                )}
              </div>
            ))}
          </div>
        )}

        {/* External URLs */}
        {curriculum.urls && curriculum.urls.length > 0 && (
          <div className={styleClass("curriculumPanelResources")}>
            <h3 className={styleClass("curriculumPanelResourcesHeading")}>
              External Resources
            </h3>
            <div className={styleClass("curriculumPanelResourceList")}>
              {curriculum.urls.map((url, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styleClass("curriculumPanelResourceLink")}
                >
                  <ExternalLink
                    className={styleClass("curriculumPanelResourceIcon")}
                  />
                  <span className={styleClass("curriculumPanelResourceUrl")}>
                    {url}
                  </span>
                  <ArrowRight
                    className={styleClass("curriculumPanelResourceArrow")}
                  />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Single URL (for Coursera courses) */}
        {curriculum.url && (
          <div className={styleClass("curriculumPanelCourseLinkSection")}>
            <h3 className={styleClass("curriculumPanelCourseLinkHeading")}>
              Course Link
            </h3>
            <a
              href={curriculum.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styleClass("curriculumPanelCourseLink")}
            >
              <ExternalLink
                className={styleClass("curriculumPanelCourseLinkIcon")}
              />
              <span className={styleClass("curriculumPanelCourseLinkUrl")}>
                {curriculum.url}
              </span>
              <ArrowRight
                className={styleClass("curriculumPanelCourseLinkArrow")}
              />
            </a>
          </div>
        )}

        {/* Fallback Message */}
        {curriculum.fallbackMessage && (
          <div className={styleClass("curriculumPanelFallback")}>
            <div className={styleClass("curriculumPanelFallbackRow")}>
              <AlertCircle
                className={styleClass("curriculumPanelFallbackIcon")}
              />
              <div>
                <p className={styleClass("curriculumPanelFallbackText")}>
                  {curriculum.fallbackMessage}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* References */}
        {curriculum.references && curriculum.references.length > 0 && (
          <ReferencesList references={curriculum.references} />
        )}

        {/* Bottom padding for scroll */}
        <div className={styleClass("curriculumPanelBottomSpace")} />
      </div>
    </ScrollArea>
  );
}
