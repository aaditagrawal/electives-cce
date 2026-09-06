"use client";

import { styles } from "@/styles/site.stylex";
import { styleClass } from "@/styles/classes";

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
      const allSubjects = getSubjectsByType(
        selectedType as Subject["Type of Subject"],
      );
      const filtered = withMinor
        ? allSubjects
        : allSubjects.filter((s) => s["Minor-Only"] !== "yes");
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Preserve the existing category/minor reset timing.
      setSubjects(filtered);
    }
  }, [selectedType, withMinor]);

  // Filter subjects for search based on minor mode
  const searchableSubjects = useMemo(() => {
    const all = getSubjects();
    return withMinor ? all : all.filter((s) => s["Minor-Only"] !== "yes");
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

  const handleSearchSelect = useCallback(
    (type: string, code: string) => {
      setSelectedType(type);
      const allSubjects = getSubjectsByType(type as Subject["Type of Subject"]);
      const filtered = withMinor
        ? allSubjects
        : allSubjects.filter((s) => s["Minor-Only"] !== "yes");
      setSubjects(filtered);
      setSelectedCode(code);
      setMobileShowPanel(true);
    },
    [withMinor],
  );

  // Minor toggle component
  const MinorToggle = () => (
    <button
      onClick={() => setWithMinor(!withMinor)}
      className={styleClass(withMinor ? "minorEnabled" : "minorDisabled")}
    >
      <span
        className={styleClass(
          withMinor ? "minorDotEnabled" : "minorDotDisabled",
        )}
      />
      <span className={styleClass("pageMinorLabel")}>Minor</span>
    </button>
  );

  // Browser view with sidebar and content
  if (selectedType) {
    return (
      <div className={styleClass("pageBrowser")}>
        {/* Header */}
        <header className={styleClass("pageBrowserHeader")}>
          <div className={styleClass("pageBrowserHeading")}>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              xstyle={styles.pageBackButton}
              className="sx-pageBackButton"
            >
              <ArrowLeft className={styleClass("pageBackIcon")} />
              <span className={styleClass("pageBackLabel")}>Back</span>
            </Button>
            <span className={styleClass("pageCurrentType")}>
              {selectedType}
            </span>
          </div>
          <div className={styleClass("pageBrowserActions")}>
            {/* eslint-disable-next-line react-hooks/static-components -- Preserve the existing toggle mount lifecycle during the styling port. */}
            <MinorToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchOpen(true)}
              xstyle={styles.pageBrowserSearch}
              className="sx-pageBrowserSearch"
            >
              <Search className={styleClass("pageBrowserSearchIcon")} />
              <span className={styleClass("pageBrowserShortcut")}>⌘K</span>
            </Button>
            <ThemeToggle />
          </div>
        </header>

        {/* Main content */}
        <div className={styleClass("pageBrowserBody")}>
          {/* Mobile Layout */}
          <div className={styleClass("pageMobileBrowser")}>
            {!mobileShowPanel ? (
              <SubjectSidebar
                subjects={subjects}
                selectedCode={selectedCode}
                onSelectSubject={handleSelectSubject}
                onReorder={handleReorder}
              />
            ) : (
              <div className={styleClass("pageMobileCurriculum")}>
                <div className={styleClass("pageMobileToolbar")}>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleMobileBack}
                    xstyle={styles.pageMobileBack}
                    className="sx-pageMobileBack"
                  >
                    <ArrowLeft className={styleClass("pageMobileBackIcon")} />
                    Back to list
                  </Button>
                </div>
                <div className={styleClass("pageMobileContent")}>
                  <CurriculumPanel code={selectedCode} />
                </div>
              </div>
            )}
          </div>

          {/* Desktop Layout */}
          <div className={styleClass("pageDesktopBrowser")}>
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
    <div className={styleClass("pageLanding")}>
      {/* Header */}
      <header className={styleClass("pageLandingHeader")}>
        <span className={styleClass("pageBrand")}>CCE &apos;27</span>
        <div className={styleClass("pageLandingActions")}>
          {/* eslint-disable-next-line react-hooks/static-components -- Preserve the existing toggle mount lifecycle during the styling port. */}
          <MinorToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSearchOpen(true)}
            xstyle={styles.pageLandingSearch}
            className="sx-pageLandingSearch"
          >
            <Search className={styleClass("pageLandingSearchIcon")} />
            <span className={styleClass("pageLandingShortcut")}>⌘K</span>
          </Button>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero */}
      <main className={styleClass("pageLandingMain")}>
        <div className={styleClass("pageLandingContent")}>
          {/* Title */}
          <div className={styleClass("pageIntro")}>
            <h1 className={styleClass("pageHeading")}>Electives Reference</h1>
            <p className={styleClass("pageSubtitle")}>
              Browse curriculum details and rank your preferred electives
            </p>
            <p className={styleClass("pageGuideText")}>
              This is for helping you view the curriculum. To learn more
              information to make your choice - use this website by Mugdha
              Chatterjee:{" "}
              <a
                href="https://manipal-electives.vercel.app/guide"
                target="_blank"
                rel="noopener noreferrer"
                className={styleClass("pageGuideLink")}
              >
                https://manipal-electives.vercel.app/guide
              </a>
            </p>
          </div>

          {/* Search hint */}
          <button
            onClick={() => setSearchOpen(true)}
            className={styleClass("pageSearchTrigger")}
          >
            <Search className={styleClass("pageSearchIcon")} />
            <span className={styleClass("pageSearchPlaceholder")}>
              Search subjects...
            </span>
            <kbd className={styleClass("pageSearchShortcut")}>⌘K</kbd>
          </button>

          {/* Minor Mode Hint */}
          <div className={styleClass("pageMinorHintContainer")}>
            <div
              className={styleClass(
                withMinor ? "minorHintEnabled" : "minorHintDisabled",
              )}
            >
              <span
                className={styleClass(
                  withMinor ? "minorDotEnabled" : "minorDotDisabled",
                )}
              />
              <span className={styleClass("pageMinorHintLabel")}>
                {withMinor
                  ? "Showing all subjects including Minor-only"
                  : "Hiding Minor-only subjects"}
              </span>
              <button
                onClick={() => setWithMinor(!withMinor)}
                className={styleClass("pageMinorHintAction")}
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
          <div className={styleClass("pageLegend")}>
            <div className={styleClass("pageLegendItems")}>
              <span>● Official curriculum</span>
              <span>◐ Historical mapping</span>
              <span>◌ External only</span>
              <span>○ Limited info</span>
              {withMinor && (
                <span className={styleClass("pageMinorLegend")}>
                  M Minor-only
                </span>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styleClass("pageFooter")}>
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
