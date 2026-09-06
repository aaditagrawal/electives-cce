"use client";

import { styles } from "@/styles/site.stylex";
import { styleClass } from "@/styles/classes";

import { useState, useEffect, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getCurriculum, getSubjectTypeInfo, type Subject } from "@/lib/data";
import { Search } from "lucide-react";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectSubject: (type: string, code: string) => void;
  subjects: Subject[];
}

export function SearchDialog({
  open,
  onOpenChange,
  onSelectSubject,
  subjects,
}: SearchDialogProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Preserve clearing the query when the existing dialog opens.
      setQuery("");
    }
  }, [open]);

  const filteredSubjects = useMemo(() => {
    if (!query.trim()) {
      return subjects.slice(0, 10);
    }

    const lowerQuery = query.toLowerCase();
    return subjects.filter((subject) => {
      const code = subject["SUBJECT CODE"].toLowerCase();
      const name = subject["Subject Name"].toLowerCase();
      const curriculum = getCurriculum(subject["SUBJECT CODE"]);
      const title = curriculum.title.toLowerCase();
      const description = curriculum.description?.toLowerCase() || "";

      return (
        code.includes(lowerQuery) ||
        name.includes(lowerQuery) ||
        title.includes(lowerQuery) ||
        description.includes(lowerQuery)
      );
    });
  }, [query, subjects]);

  const handleSelect = (subject: Subject) => {
    onSelectSubject(subject["Type of Subject"], subject["SUBJECT CODE"]);
    onOpenChange(false);
  };

  const getSourceIndicator = (code: string) => {
    const curriculum = getCurriculum(code);
    const type = curriculum.source.type;

    if (type === "definitive") return "●";
    if (type === "speculative") return "◐";
    if (type === "external") return "◌";
    return "○";
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        xstyle={styles.searchDialogContent}
        className="sx-searchDialogContent"
      >
        <DialogHeader
          xstyle={styles.searchDialogHeader}
          className="sx-searchDialogHeader"
        >
          <DialogTitle
            xstyle={styles.searchDialogTitle}
            className="sx-searchDialogTitle"
          >
            Search Subjects
          </DialogTitle>
        </DialogHeader>

        <div className={styleClass("searchDialogSearchContainer")}>
          <div className={styleClass("searchDialogSearchField")}>
            <Search className={styleClass("searchDialogSearchIcon")} />
            <Input
              placeholder="Search by code, name, or content..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              xstyle={styles.searchDialogInput}
              className="sx-searchDialogInput"
              autoFocus
            />
          </div>
        </div>

        <ScrollArea
          xstyle={styles.searchDialogResults}
          className="sx-searchDialogResults"
        >
          <div className={styleClass("searchDialogResultList")}>
            {filteredSubjects.length === 0 ? (
              <div className={styleClass("searchDialogEmpty")}>
                No subjects found
              </div>
            ) : (
              filteredSubjects.map((subject) => {
                const curriculum = getCurriculum(subject["SUBJECT CODE"]);
                const typeInfo = getSubjectTypeInfo(subject["Type of Subject"]);
                const isMinorOnly = subject["Minor-Only"] === "yes";

                return (
                  <button
                    key={subject["SUBJECT CODE"]}
                    className={styleClass("searchDialogResult")}
                    onClick={() => handleSelect(subject)}
                  >
                    <div className={styleClass("searchDialogResultRow")}>
                      <div className={styleClass("searchDialogResultContent")}>
                        <div
                          className={styleClass("searchDialogResultHeading")}
                        >
                          <span
                            className={styleClass("searchDialogResultCode")}
                          >
                            {subject["SUBJECT CODE"]}
                          </span>
                          <span
                            className={styleClass("searchDialogResultSource")}
                          >
                            {getSourceIndicator(subject["SUBJECT CODE"])}
                          </span>
                          <span
                            className={styleClass("searchDialogResultType")}
                          >
                            {typeInfo.name}
                          </span>
                          {isMinorOnly && (
                            <span
                              className={styleClass("searchDialogResultMinor")}
                            >
                              M
                            </span>
                          )}
                        </div>
                        <p className={styleClass("searchDialogResultTitle")}>
                          {curriculum.title}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </ScrollArea>

        <div className={styleClass("searchDialogFooter")}>
          <span>
            {filteredSubjects.length} result
            {filteredSubjects.length !== 1 ? "s" : ""}
          </span>
          <span className={styleClass("searchDialogFooterHints")}>
            <kbd className={styleClass("searchDialogEnterKey")}>↵</kbd>
            <span>to select</span>
            <kbd className={styleClass("searchDialogEscapeKey")}>esc</kbd>
            <span>to close</span>
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
