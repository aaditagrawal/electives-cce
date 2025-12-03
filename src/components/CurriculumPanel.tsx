"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { getCurriculum, getSubjects } from "@/lib/data";
import { CreditsBadge } from "./CreditsBadge";
import { ReferencesList } from "./ReferencesList";
import { ExternalLink, AlertCircle, FileText, ArrowRight, Info } from "lucide-react";

interface CurriculumPanelProps {
  code: string | null;
}

export function CurriculumPanel({ code }: CurriculumPanelProps) {
  if (!code) {
    return (
      <div className="flex-1 flex items-center justify-center text-muted-foreground p-4 min-h-0">
        <div className="text-center">
          <FileText className="h-8 w-8 mx-auto mb-3 opacity-20" />
          <p className="text-sm">Select a subject to view curriculum</p>
        </div>
      </div>
    );
  }

  const curriculum = getCurriculum(code);
  const subject = getSubjects().find((s) => s["SUBJECT CODE"] === code);

  const sourceTypeStyles = {
    definitive: "border-foreground/20 bg-foreground/5",
    speculative: "border-muted-foreground/30 bg-muted/50",
    external: "border-muted-foreground/20 bg-muted/30",
    missing: "border-muted-foreground/10 bg-muted/20",
  };

  return (
    <ScrollArea className="flex-1 min-h-0">
      <div className="p-4 sm:p-5 md:p-6 max-w-2xl">
        {/* Header */}
        <div className="mb-4">
          <p className="font-mono text-[11px] sm:text-xs text-muted-foreground">
            {code}
          </p>
          <h1 className="text-base sm:text-lg md:text-xl font-semibold mt-1 leading-tight break-words text-foreground">
            {curriculum.title}
          </h1>

          {subject?.["Minor-Only"] === "yes" && (
            <p className="text-[10px] sm:text-xs text-muted-foreground mt-2">
              Minor Specialization Only
            </p>
          )}
        </div>

        {/* Source Information Box */}
        <div className={`p-3 rounded border mb-4 ${sourceTypeStyles[curriculum.source.type]}`}>
          <div className="flex items-start gap-2">
            <Info className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <p className="text-[11px] sm:text-xs font-medium text-foreground">
                {curriculum.source.label}
              </p>
              <p className="text-[10px] sm:text-[11px] text-muted-foreground mt-1 leading-relaxed break-words">
                {curriculum.source.explanation}
              </p>
              
              {/* Mapping Info */}
              {curriculum.source.mappingInfo && (
                <div className="mt-2 pt-2 border-t border-border/50">
                  <p className="font-mono text-[9px] sm:text-[10px] text-muted-foreground break-all">
                    {curriculum.source.mappingInfo.relationship}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Credits */}
        {curriculum.credits && (
          <div className="mb-4">
            <h3 className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Credits
            </h3>
            <CreditsBadge credits={curriculum.credits} />
          </div>
        )}

        {/* Description */}
        {curriculum.description && (
          <div className="mb-4">
            <h3 className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Course Content
            </h3>
            <p className="text-[11px] sm:text-xs md:text-sm text-foreground leading-relaxed break-words">
              {curriculum.description}
            </p>
          </div>
        )}

        {/* Multiple Subjects (for combined courses) */}
        {curriculum.subjects && curriculum.subjects.length > 0 && (
          <div className="mb-4 space-y-4">
            <h3 className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Combined Course Content
            </h3>
            {curriculum.subjects.map((sub, i) => (
              <div key={i} className="pl-3 border-l-2 border-border">
                <h4 className="text-xs sm:text-sm font-medium mb-2 break-words text-foreground">{sub.title}</h4>
                <p className="text-[11px] sm:text-xs text-foreground leading-relaxed mb-2 break-words">
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
          <div className="mb-4">
            <h3 className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              External Resources
            </h3>
            <div className="space-y-1.5">
              {curriculum.urls.map((url, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded bg-accent hover:bg-accent/80 transition-colors group"
                >
                  <ExternalLink className="h-3 w-3 text-muted-foreground shrink-0" />
                  <span className="flex-1 min-w-0 font-mono text-[9px] sm:text-[10px] break-all text-foreground">{url}</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Single URL (for Coursera courses) */}
        {curriculum.url && (
          <div className="mb-4">
            <h3 className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Course Link
            </h3>
            <a
              href={curriculum.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 rounded bg-accent hover:bg-accent/80 transition-colors group"
            >
              <ExternalLink className="h-3 w-3 text-muted-foreground shrink-0" />
              <span className="flex-1 min-w-0 font-mono text-[9px] sm:text-[10px] break-all text-foreground">{curriculum.url}</span>
              <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </a>
          </div>
        )}

        {/* Fallback Message */}
        {curriculum.fallbackMessage && (
          <div className="mb-4 p-3 rounded bg-muted/30 border border-border">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] sm:text-xs font-medium break-words text-foreground">
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
        <div className="h-4" />
      </div>
    </ScrollArea>
  );
}
