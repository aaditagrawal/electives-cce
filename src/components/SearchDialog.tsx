"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getSubjects, getCurriculum, getSubjectTypeInfo, type Subject } from "@/lib/data";
import { Search } from "lucide-react";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectSubject: (type: string, code: string) => void;
}

export function SearchDialog({ open, onOpenChange, onSelectSubject }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const subjects = getSubjects();

  // Reset query when dialog opens
  useEffect(() => {
    if (open) {
      setQuery("");
    }
  }, [open]);

  // Filter subjects based on query
  const filteredSubjects = useMemo(() => {
    if (!query.trim()) {
      return subjects.slice(0, 10); // Show first 10 when no query
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
      <DialogContent className="max-w-lg p-0 gap-0">
        <DialogHeader className="p-4 pb-2">
          <DialogTitle className="text-sm font-medium text-muted-foreground">
            Search Subjects
          </DialogTitle>
        </DialogHeader>
        
        <div className="px-4 pb-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by code, name, or content..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9 h-10 font-mono text-sm"
              autoFocus
            />
          </div>
        </div>

        <ScrollArea className="max-h-[300px] border-t border-border">
          <div className="p-2">
            {filteredSubjects.length === 0 ? (
              <div className="py-8 text-center text-sm text-muted-foreground">
                No subjects found
              </div>
            ) : (
              filteredSubjects.map((subject) => {
                const curriculum = getCurriculum(subject["SUBJECT CODE"]);
                const typeInfo = getSubjectTypeInfo(subject["Type of Subject"]);
                
                return (
                  <button
                    key={subject["SUBJECT CODE"]}
                    className="w-full text-left p-2.5 rounded hover:bg-accent transition-colors"
                    onClick={() => handleSelect(subject)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-medium text-foreground">
                            {subject["SUBJECT CODE"]}
                          </span>
                          <span className="text-[10px] text-muted-foreground">
                            {getSourceIndicator(subject["SUBJECT CODE"])}
                          </span>
                          <span className="text-[9px] px-1.5 py-0.5 bg-muted rounded text-muted-foreground">
                            {typeInfo.name}
                          </span>
                          {subject["Minor-Only"] === "yes" && (
                            <span className="text-[9px] px-1.5 py-0.5 bg-muted rounded text-muted-foreground">
                              Minor
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5 truncate">
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

        <div className="p-2 border-t border-border text-[10px] text-muted-foreground flex items-center justify-between">
          <span>
            {filteredSubjects.length} result{filteredSubjects.length !== 1 ? "s" : ""}
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-muted rounded text-[9px]">↵</kbd>
            <span>to select</span>
            <kbd className="px-1.5 py-0.5 bg-muted rounded text-[9px] ml-2">esc</kbd>
            <span>to close</span>
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}

