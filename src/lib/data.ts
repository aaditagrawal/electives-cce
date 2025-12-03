import subjectsData from "@/data/subjects.json";
import definitiveData from "@/data/definitive.json";
import speculativeData from "@/data/speculative.json";

// Types
export interface Subject {
  "Type of Subject": "PE1" | "PE2" | "FC2" | "OE";
  "SUBJECT CODE": string;
  "Subject Name": string;
  "Minor-Only": "yes" | "no";
}

export interface DefinitiveCurriculum {
  code: string;
  title: string;
  credits: [number, number, number, number]; // L, T, P, C
  description: string;
  references: string[];
  url?: string;
}

export interface SpeculativeCurriculum {
  new_code: string;
  old_code: string | null;
  title: string;
  credits: [number, number, number, number];
  description?: string;
  references?: string[];
  note?: string;
  subjects?: Array<{
    title: string;
    description: string;
    references: string[];
  }>;
}

export type DataSource = "definitive" | "speculative" | "external" | "missing";

export interface SourceInfo {
  type: DataSource;
  label: string;
  explanation: string;
  mappingInfo?: {
    currentCode: string;
    basedOnCode?: string;
    relationship: string;
  };
}

export interface CurriculumResult {
  source: SourceInfo;
  title: string;
  credits?: [number, number, number, number];
  description?: string;
  references?: string[];
  url?: string;
  urls?: string[];
  fallbackMessage?: string;
  note?: string;
  subjects?: Array<{
    title: string;
    description: string;
    references: string[];
  }>;
}

// External course URLs
const externalCourses: Record<string, { urls: string[] }> = {
  "IIE 4334": {
    urls: [
      "https://summer.manipal.edu/index.php/discerning-india-journey-across-living-cultures/",
      "https://youtu.be/rGgHJLltfqg",
    ],
  },
  "IIE 4324": {
    urls: [
      "https://manipal.edu/cimr/program-list/yoga-short-term1.html",
      "https://www.manipal.edu/cimr/department-faculty/department-list/division-of-yoga.html",
    ],
  },
  "IIE 4333": {
    urls: [
      "https://www.manipal.edu/psph/news-events/Meditation-and-Conscious-Living-Course-April-18-2024-to-May-30-2024.html",
    ],
  },
};

// Missing course fallback messages
function getMissingFallback(code: string): { message: string; reason: string } {
  if (code.startsWith("IIE")) {
    return {
      message: "Held in partnership with another MAHE college",
      reason: "Inter-institutional elective without published curriculum",
    };
  }
  if (code.startsWith("MAT")) {
    return {
      message: "No Historical Record",
      reason: "No archived curriculum data found for this course",
    };
  }
  if (code === "ECE 4323") {
    return {
      message: "No Published Curriculum",
      reason: "Course curriculum not yet published by department",
    };
  }
  return {
    message: "Curriculum information not available",
    reason: "Unable to locate curriculum data",
  };
}

// Get all subjects
export function getSubjects(): Subject[] {
  return subjectsData as Subject[];
}

// Get subjects by type
export function getSubjectsByType(type: Subject["Type of Subject"]): Subject[] {
  return getSubjects().filter((s) => s["Type of Subject"] === type);
}

// Get subject type counts
export function getSubjectTypeCounts(): Record<string, number> {
  const subjects = getSubjects();
  return subjects.reduce(
    (acc, s) => {
      acc[s["Type of Subject"]] = (acc[s["Type of Subject"]] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );
}

// Get curriculum for a subject code
export function getCurriculum(code: string): CurriculumResult {
  // 1. Check definitive data first
  const definitive = (definitiveData as DefinitiveCurriculum[]).find(
    (d) => d.code === code
  );
  if (definitive) {
    return {
      source: {
        type: "definitive",
        label: "Official Curriculum",
        explanation: "This curriculum is directly published by the department for this exact course code.",
        mappingInfo: {
          currentCode: code,
          relationship: "Direct match",
        },
      },
      title: definitive.title,
      credits: definitive.credits,
      description: definitive.description,
      references: definitive.references,
      url: definitive.url,
    };
  }

  // 2. Check external courses
  if (externalCourses[code]) {
    const subject = getSubjects().find((s) => s["SUBJECT CODE"] === code);
    return {
      source: {
        type: "external",
        label: "External Resources",
        explanation: "No official curriculum published. Information available via external links from MAHE websites.",
        mappingInfo: {
          currentCode: code,
          relationship: "External sources only",
        },
      },
      title: subject?.["Subject Name"] || code,
      urls: externalCourses[code].urls,
    };
  }

  // 3. Check speculative data (new_code matches current code)
  const speculative = (speculativeData as SpeculativeCurriculum[]).find(
    (s) => s.new_code === code
  );
  if (speculative) {
    const hasOldCode = speculative.old_code && speculative.old_code !== code;
    return {
      source: {
        type: "speculative",
        label: "Historical Mapping",
        explanation: hasOldCode
          ? `This course (${code}) appears to be based on a previous course (${speculative.old_code}). The curriculum shown is from the older version.`
          : "This curriculum is derived from historical records and may not reflect the current syllabus.",
        mappingInfo: {
          currentCode: code,
          basedOnCode: speculative.old_code || undefined,
          relationship: hasOldCode
            ? `${code} ← based on → ${speculative.old_code}`
            : "Historical data",
        },
      },
      title: speculative.title,
      credits: speculative.credits,
      description: speculative.description,
      references: speculative.references,
      note: speculative.note,
      subjects: speculative.subjects,
    };
  }

  // 4. Check speculative data (old_code matches current code - reverse lookup)
  const speculativeReverse = (speculativeData as SpeculativeCurriculum[]).find(
    (s) => s.old_code === code
  );
  if (speculativeReverse) {
    return {
      source: {
        type: "speculative",
        label: "Historical Mapping",
        explanation: `This course code (${code}) has been superseded by ${speculativeReverse.new_code}. The curriculum shown is from when this code was active.`,
        mappingInfo: {
          currentCode: code,
          basedOnCode: speculativeReverse.new_code,
          relationship: `${code} → superseded by → ${speculativeReverse.new_code}`,
        },
      },
      title: speculativeReverse.title,
      credits: speculativeReverse.credits,
      description: speculativeReverse.description,
      references: speculativeReverse.references,
      note: `Now offered as ${speculativeReverse.new_code}`,
      subjects: speculativeReverse.subjects,
    };
  }

  // 5. Return missing fallback
  const subject = getSubjects().find((s) => s["SUBJECT CODE"] === code);
  const fallback = getMissingFallback(code);
  return {
    source: {
      type: "missing",
      label: "Limited Information",
      explanation: fallback.reason,
      mappingInfo: {
        currentCode: code,
        relationship: "No curriculum data",
      },
    },
    title: subject?.["Subject Name"] || code,
    fallbackMessage: fallback.message,
  };
}

// Get subject type display info
export function getSubjectTypeInfo(type: string): {
  name: string;
  fullName: string;
  description: string;
} {
  const info: Record<string, { name: string; fullName: string; description: string }> =
    {
      PE1: {
        name: "PE1",
        fullName: "Program Elective 1",
        description: "Core program electives for specialization",
      },
      PE2: {
        name: "PE2",
        fullName: "Program Elective 2",
        description: "Advanced program electives",
      },
      FC2: {
        name: "FC2",
        fullName: "Flexi-Core 2",
        description: "Flexible core subjects",
      },
      OE: {
        name: "OE",
        fullName: "Open Elective",
        description: "Cross-disciplinary open electives",
      },
    };
  return info[type] || { name: type, fullName: type, description: "" };
}
