"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SubjectTypeSelector } from "@/components/SubjectTypeSelector";
import { SubjectSidebar } from "@/components/SubjectSidebar";
import { CurriculumPanel } from "@/components/CurriculumPanel";
import { Button } from "@/components/ui/button";
import { getSubjectsByType, type Subject } from "@/lib/data";
import { ArrowLeft } from "lucide-react";

export default function Home() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [mobileShowPanel, setMobileShowPanel] = useState(false);

  useEffect(() => {
    if (selectedType) {
      setSubjects(getSubjectsByType(selectedType as Subject["Type of Subject"]));
    }
  }, [selectedType]);

  const handleSelectType = (type: string) => {
    setSelectedType(type);
    setSelectedCode(null);
    setMobileShowPanel(false);
  };

  const handleSelectSubject = (code: string) => {
    setSelectedCode(code);
    setMobileShowPanel(true);
  };

  const handleBack = () => {
    setSelectedType(null);
    setSelectedCode(null);
    setSubjects([]);
    setMobileShowPanel(false);
  };

  const handleReorder = (newSubjects: Subject[]) => {
    setSubjects(newSubjects);
  };

  const handleMobileBack = () => {
    setMobileShowPanel(false);
  };

  // Browser view with sidebar and content
  if (selectedType) {
    return (
      <div className="h-[100dvh] flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-12 border-b border-border flex items-center justify-between px-3 bg-background shrink-0">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="gap-1.5 h-8 px-2"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Back</span>
            </Button>
            <span className="text-xs font-mono text-muted-foreground">
              {selectedType}
            </span>
          </div>
          <ThemeToggle />
        </header>

        {/* Main content */}
        <div className="flex-1 min-h-0 overflow-hidden">
          {/* Mobile Layout */}
          <div className="md:hidden h-full">
            {!mobileShowPanel ? (
              <SubjectSidebar
                subjects={subjects}
                selectedCode={selectedCode}
                onSelectSubject={handleSelectSubject}
                onReorder={handleReorder}
              />
            ) : (
              <div className="h-full flex flex-col">
                <div className="flex items-center p-2 border-b border-border shrink-0">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleMobileBack}
                    className="gap-1.5 h-8"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Back to list
                  </Button>
                </div>
                <div className="flex-1 min-h-0 overflow-hidden">
                  <CurriculumPanel code={selectedCode} />
                </div>
              </div>
            )}
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex h-full">
            <SubjectSidebar
              subjects={subjects}
              selectedCode={selectedCode}
              onSelectSubject={(code) => setSelectedCode(code)}
              onReorder={handleReorder}
            />
            <CurriculumPanel code={selectedCode} />
          </div>
        </div>
      </div>
    );
  }

  // Landing page
  return (
    <div className="min-h-[100dvh] flex flex-col">
      {/* Header */}
      <header className="h-12 border-b border-border flex items-center justify-between px-4 bg-background shrink-0">
        <span className="text-sm font-medium">CCE &apos;27</span>
        <ThemeToggle />
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-2xl w-full space-y-8">
          {/* Title */}
          <div className="text-center space-y-3">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Electives Reference
            </h1>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Browse curriculum details and rank your preferred electives
            </p>
          </div>

          {/* Category Cards */}
          <SubjectTypeSelector
            selectedType={selectedType}
            onSelectType={handleSelectType}
          />

          {/* Legend */}
          <div className="text-center">
            <div className="inline-flex flex-wrap justify-center gap-x-4 gap-y-1 text-[10px] text-muted-foreground">
              <span>● Official curriculum</span>
              <span>◐ Historical mapping</span>
              <span>◌ External only</span>
              <span>○ Limited info</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-3 text-center text-[10px] text-muted-foreground border-t border-border shrink-0">
        Data from MIT records
      </footer>
    </div>
  );
}
