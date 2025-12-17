"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SubjectTypeSelector } from "@/components/SubjectTypeSelector";
import { SubjectSidebar } from "@/components/SubjectSidebar";
import { CurriculumPanel } from "@/components/CurriculumPanel";
import { SearchDialog } from "@/components/SearchDialog";
import { Button } from "@/components/ui/button";
import { getSubjectsByType, getSubjects, type Subject } from "@/lib/data";
import { ArrowLeft, Search } from "lucide-react";

export default function Home() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [mobileShowPanel, setMobileShowPanel] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [withMinor, setWithMinor] = useState(false);

  // Keyboard shortcut for search (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (selectedType) {
      const allSubjects = getSubjectsByType(selectedType as Subject["Type of Subject"]);
      const filtered = withMinor 
        ? allSubjects 
        : allSubjects.filter(s => s["Minor-Only"] !== "yes");
      setSubjects(filtered);
    }
  }, [selectedType, withMinor]);

  // Filter subjects for search based on minor mode
  const searchableSubjects = useMemo(() => {
    const all = getSubjects();
    return withMinor ? all : all.filter(s => s["Minor-Only"] !== "yes");
  }, [withMinor]);

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

  const handleSearchSelect = useCallback((type: string, code: string) => {
    setSelectedType(type);
    const allSubjects = getSubjectsByType(type as Subject["Type of Subject"]);
    const filtered = withMinor 
      ? allSubjects 
      : allSubjects.filter(s => s["Minor-Only"] !== "yes");
    setSubjects(filtered);
    setSelectedCode(code);
    setMobileShowPanel(true);
  }, [withMinor]);

  // Minor toggle component
  const MinorToggle = () => (
    <button
      onClick={() => setWithMinor(!withMinor)}
      className={`flex items-center gap-1.5 h-8 px-2.5 rounded-md text-xs transition-colors ${
        withMinor 
          ? "bg-purple-500/20 text-purple-400 border border-purple-500/30" 
          : "bg-muted text-muted-foreground hover:bg-accent"
      }`}
    >
      <span className={`w-2 h-2 rounded-full ${withMinor ? "bg-purple-400" : "bg-muted-foreground/50"}`} />
      <span className="hidden sm:inline">Minor</span>
    </button>
  );

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
          <div className="flex items-center gap-1">
            <MinorToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchOpen(true)}
              className="gap-1.5 h-8 px-2"
            >
              <Search className="h-3.5 w-3.5" />
              <span className="hidden sm:inline text-xs text-muted-foreground">⌘K</span>
            </Button>
            <ThemeToggle />
          </div>
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
                <div className="flex-1 h-full overflow-hidden">
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

        <SearchDialog
          open={searchOpen}
          onOpenChange={setSearchOpen}
          onSelectSubject={handleSearchSelect}
          subjects={searchableSubjects}
        />
      </div>
    );
  }

  // Landing page
  return (
    <div className="min-h-[100dvh] flex flex-col">
      {/* Header */}
      <header className="h-12 border-b border-border flex items-center justify-between px-4 bg-background shrink-0">
        <span className="text-sm font-medium">CCE &apos;27</span>
        <div className="flex items-center gap-1">
          <MinorToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSearchOpen(true)}
            className="gap-1.5 h-8 px-2"
          >
            <Search className="h-3.5 w-3.5" />
            <span className="hidden sm:inline text-xs text-muted-foreground">⌘K</span>
          </Button>
          <ThemeToggle />
        </div>
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
            <p className="text-xs text-muted-foreground max-w-md mx-auto">
              This is for helping you view the curriculum. To learn more information to make your choice - use this website by Mugdha Chatterjee:{" "}
              <a 
                href="https://manipal-electives.vercel.app/guide" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                https://manipal-electives.vercel.app/guide
              </a>
            </p>
          </div>

          {/* Search hint */}
          <button
            onClick={() => setSearchOpen(true)}
            className="mx-auto flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent transition-colors"
          >
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Search subjects...</span>
            <kbd className="ml-4 px-2 py-0.5 bg-muted rounded text-[10px] text-muted-foreground">⌘K</kbd>
          </button>

          {/* Minor Mode Hint */}
          <div className="text-center">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-colors ${
              withMinor 
                ? "bg-purple-500/10 border-purple-500/30 text-purple-400" 
                : "bg-muted/50 border-border text-muted-foreground"
            }`}>
              <span className={`w-2 h-2 rounded-full ${withMinor ? "bg-purple-400" : "bg-muted-foreground/50"}`} />
              <span className="text-xs">
                {withMinor ? "Showing all subjects including Minor-only" : "Hiding Minor-only subjects"}
              </span>
              <button 
                onClick={() => setWithMinor(!withMinor)}
                className="text-xs underline underline-offset-2 hover:text-foreground"
              >
                {withMinor ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Category Cards */}
          <SubjectTypeSelector
            selectedType={selectedType}
            onSelectType={handleSelectType}
            withMinor={withMinor}
          />

          {/* Legend */}
          <div className="text-center">
            <div className="inline-flex flex-wrap justify-center gap-x-4 gap-y-1 text-[10px] text-muted-foreground">
              <span>● Official curriculum</span>
              <span>◐ Historical mapping</span>
              <span>◌ External only</span>
              <span>○ Limited info</span>
              {withMinor && <span className="text-purple-400">M Minor-only</span>}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-3 text-center text-[10px] text-muted-foreground border-t border-border shrink-0">
        Data from MIT records
      </footer>

      <SearchDialog
        open={searchOpen}
        onOpenChange={setSearchOpen}
        onSelectSubject={handleSearchSelect}
        subjects={searchableSubjects}
      />
    </div>
  );
}
