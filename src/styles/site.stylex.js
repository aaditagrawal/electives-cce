/* Responsive bands use grouped negation so Next 16.0 preserves valid exact-boundary media queries.
 * --tw-* values are retained reset/animation contracts, not a Tailwind runtime. */
import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  documentBody: {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
  minorEnabled: {
    display: "flex",
    height: "calc(var(--spacing)*8)",
    alignItems: "center",
    gap: "calc(var(--spacing)*1.5)",
    borderRadius: "calc(var(--radius) - 2px)",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    borderColor: {
      default: "#ac4bff4d",
      "@supports (color:color-mix(in lab, red, red))":
        "color-mix(in oklab,var(--color-purple-500)30%,transparent)",
    },
    backgroundColor: {
      default: "#ac4bff33",
      "@supports (color:color-mix(in lab, red, red))":
        "color-mix(in oklab,var(--color-purple-500)20%,transparent)",
    },
    paddingInline: "calc(var(--spacing)*2.5)",
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
    color: "var(--color-purple-400)",
    transitionProperty:
      "color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    "--tw-leading": null,
  },
  minorDisabled: {
    display: "flex",
    height: "calc(var(--spacing)*8)",
    alignItems: "center",
    gap: "calc(var(--spacing)*1.5)",
    borderRadius: "calc(var(--radius) - 2px)",
    backgroundColor: "var(--muted)",
    paddingInline: "calc(var(--spacing)*2.5)",
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
    color: "var(--muted-foreground)",
    transitionProperty:
      "color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    "--tw-leading": null,
  },
  minorDotEnabled: {
    height: "calc(var(--spacing)*2)",
    width: "calc(var(--spacing)*2)",
    borderRadius: "3.40282e38px",
    backgroundColor: "var(--color-purple-400)",
  },
  minorDotDisabled: {
    height: "calc(var(--spacing)*2)",
    width: "calc(var(--spacing)*2)",
    borderRadius: "3.40282e38px",
    backgroundColor: {
      default: "var(--muted-foreground)",
      "@supports (color:color-mix(in lab, red, red))":
        "color-mix(in oklab,var(--muted-foreground)50%,transparent)",
    },
  },
  minorHintEnabled: {
    display: "inline-flex",
    alignItems: "center",
    gap: "calc(var(--spacing)*2)",
    borderRadius: "var(--radius)",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    borderColor: {
      default: "#ac4bff4d",
      "@supports (color:color-mix(in lab, red, red))":
        "color-mix(in oklab,var(--color-purple-500)30%,transparent)",
    },
    backgroundColor: {
      default: "#ac4bff1a",
      "@supports (color:color-mix(in lab, red, red))":
        "color-mix(in oklab,var(--color-purple-500)10%,transparent)",
    },
    paddingInline: "calc(var(--spacing)*3)",
    paddingBlock: "calc(var(--spacing)*1.5)",
    color: "var(--color-purple-400)",
    transitionProperty:
      "color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
  },
  minorHintDisabled: {
    display: "inline-flex",
    alignItems: "center",
    gap: "calc(var(--spacing)*2)",
    borderRadius: "var(--radius)",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    borderColor: "var(--border)",
    backgroundColor: {
      default: "var(--muted)",
      "@supports (color:color-mix(in lab, red, red))":
        "color-mix(in oklab,var(--muted)50%,transparent)",
    },
    paddingInline: "calc(var(--spacing)*3)",
    paddingBlock: "calc(var(--spacing)*1.5)",
    color: "var(--muted-foreground)",
    transitionProperty:
      "color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
  },
  pageMinorLabel: {
    display: {
      default: "none",
      "@media (min-width:40rem)": "inline",
    },
  },
  pageBrowser: {
    display: "flex",
    height: "100dvh",
    flexDirection: "column",
    overflow: "hidden",
  },
  pageBrowserHeader: {
    display: "flex",
    height: "calc(var(--spacing)*12)",
    flexShrink: "0",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomStyle: "var(--tw-border-style)",
    borderBottomWidth: "1px",
    borderColor: "var(--border)",
    backgroundColor: "var(--background)",
    paddingInline: "calc(var(--spacing)*3)",
  },
  pageBrowserHeading: {
    display: "flex",
    alignItems: "center",
    gap: "calc(var(--spacing)*2)",
  },
  pageBackButton: {
    height: "calc(var(--spacing)*8)",
    gap: "calc(var(--spacing)*1.5)",
    paddingInline: "calc(var(--spacing)*2)",
  },
  pageBackIcon: {
    height: "calc(var(--spacing)*3.5)",
    width: "calc(var(--spacing)*3.5)",
  },
  pageBackLabel: {
    display: {
      default: "none",
      "@media (min-width:40rem)": "inline",
    },
  },
  pageCurrentType: {
    fontFamily: "Commit Mono,ui-monospace,monospace",
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
    color: "var(--muted-foreground)",
    "--tw-leading": null,
  },
  pageBrowserActions: {
    display: "flex",
    alignItems: "center",
    gap: "calc(var(--spacing)*1)",
  },
  pageBrowserSearch: {
    height: "calc(var(--spacing)*8)",
    gap: "calc(var(--spacing)*1.5)",
    paddingInline: "calc(var(--spacing)*2)",
  },
  pageBrowserSearchIcon: {
    height: "calc(var(--spacing)*3.5)",
    width: "calc(var(--spacing)*3.5)",
  },
  pageBrowserShortcut: {
    display: {
      default: "none",
      "@media (min-width:40rem)": "inline",
    },
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
    color: "var(--muted-foreground)",
    "--tw-leading": null,
  },
  pageBrowserBody: {
    minHeight: "calc(var(--spacing)*0)",
    flex: "1",
    overflow: "hidden",
  },
  pageMobileBrowser: {
    height: "100%",
    display: {
      default: null,
      "@media (min-width:48rem)": "none",
    },
  },
  pageMobileCurriculum: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
  },
  pageMobileToolbar: {
    display: "flex",
    flexShrink: "0",
    alignItems: "center",
    borderBottomStyle: "var(--tw-border-style)",
    borderBottomWidth: "1px",
    borderColor: "var(--border)",
    padding: "calc(var(--spacing)*2)",
  },
  pageMobileBack: {
    height: "calc(var(--spacing)*8)",
    gap: "calc(var(--spacing)*1.5)",
  },
  pageMobileBackIcon: {
    height: "calc(var(--spacing)*3.5)",
    width: "calc(var(--spacing)*3.5)",
  },
  pageMobileContent: {
    height: "100%",
    flex: "1",
    overflow: "hidden",
  },
  pageDesktopBrowser: {
    display: {
      default: "none",
      "@media (min-width:48rem)": "flex",
    },
    height: "100%",
  },
  pageLanding: {
    display: "flex",
    minHeight: "100dvh",
    flexDirection: "column",
  },
  pageLandingHeader: {
    display: "flex",
    height: "calc(var(--spacing)*12)",
    flexShrink: "0",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomStyle: "var(--tw-border-style)",
    borderBottomWidth: "1px",
    borderColor: "var(--border)",
    backgroundColor: "var(--background)",
    paddingInline: "calc(var(--spacing)*4)",
  },
  pageBrand: {
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    "--tw-leading": null,
  },
  pageLandingActions: {
    display: "flex",
    alignItems: "center",
    gap: "calc(var(--spacing)*1)",
  },
  pageLandingSearch: {
    height: "calc(var(--spacing)*8)",
    gap: "calc(var(--spacing)*1.5)",
    paddingInline: "calc(var(--spacing)*2)",
  },
  pageLandingSearchIcon: {
    height: "calc(var(--spacing)*3.5)",
    width: "calc(var(--spacing)*3.5)",
  },
  pageLandingShortcut: {
    display: {
      default: "none",
      "@media (min-width:40rem)": "inline",
    },
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
    color: "var(--muted-foreground)",
    "--tw-leading": null,
  },
  pageLandingMain: {
    display: "flex",
    flex: "1",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingInline: "calc(var(--spacing)*4)",
    paddingBlock: "calc(var(--spacing)*8)",
  },
  pageLandingContent: {
    width: "100%",
    maxWidth: "var(--container-2xl)",
  },
  pageIntro: {
    textAlign: "center",
  },
  pageHeading: {
    fontSize: {
      default: "var(--text-2xl)",
      "@media (min-width:48rem)": "var(--text-3xl)",
    },
    lineHeight: {
      default: "var(--tw-leading,var(--text-2xl--line-height))",
      "@media (min-width:48rem)":
        "var(--tw-leading,var(--text-3xl--line-height))",
    },
    "--tw-font-weight": "var(--font-weight-semibold)",
    fontWeight: "var(--font-weight-semibold)",
    "--tw-tracking": "var(--tracking-tight)",
    letterSpacing: "var(--tracking-tight)",
    "--tw-leading": null,
  },
  pageSubtitle: {
    marginInline: "auto",
    maxWidth: "var(--container-md)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    color: "var(--muted-foreground)",
    "--tw-leading": null,
  },
  pageGuideText: {
    marginInline: "auto",
    maxWidth: "var(--container-md)",
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
    color: "var(--muted-foreground)",
    "--tw-leading": null,
  },
  pageGuideLink: {
    color: "var(--color-blue-500)",
  },
  pageSearchTrigger: {
    marginInline: "auto",
    display: "flex",
    alignItems: "center",
    gap: "calc(var(--spacing)*2)",
    borderRadius: "var(--radius)",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    borderColor: "var(--border)",
    backgroundColor: "var(--card)",
    paddingInline: "calc(var(--spacing)*4)",
    paddingBlock: "calc(var(--spacing)*2)",
    transitionProperty:
      "color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
  },
  pageSearchIcon: {
    height: "calc(var(--spacing)*4)",
    width: "calc(var(--spacing)*4)",
    color: "var(--muted-foreground)",
  },
  pageSearchPlaceholder: {
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    color: "var(--muted-foreground)",
    "--tw-leading": null,
  },
  pageSearchShortcut: {
    marginLeft: "calc(var(--spacing)*4)",
    borderRadius: ".25rem",
    backgroundColor: "var(--muted)",
    paddingInline: "calc(var(--spacing)*2)",
    paddingBlock: "calc(var(--spacing)*.5)",
    fontSize: "10px",
    color: "var(--muted-foreground)",
    "--tw-leading": null,
  },
  pageMinorHintContainer: {
    textAlign: "center",
  },
  pageMinorHintLabel: {
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
    "--tw-leading": null,
  },
  pageMinorHintAction: {
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
    textDecorationLine: "underline",
    textUnderlineOffset: "2px",
    "--tw-leading": null,
  },
  pageLegend: {
    textAlign: "center",
  },
  pageLegendItems: {
    display: "inline-flex",
    flexWrap: "wrap",
    justifyContent: "center",
    columnGap: "calc(var(--spacing)*4)",
    rowGap: "calc(var(--spacing)*1)",
    fontSize: "10px",
    color: "var(--muted-foreground)",
    "--tw-leading": null,
  },
  pageMinorLegend: {
    color: "var(--color-purple-400)",
  },
  pageFooter: {
    flexShrink: "0",
    borderTopStyle: "var(--tw-border-style)",
    borderTopWidth: "1px",
    borderColor: "var(--border)",
    paddingBlock: "calc(var(--spacing)*3)",
    textAlign: "center",
    fontSize: "10px",
    color: "var(--muted-foreground)",
    "--tw-leading": null,
  },
  creditsBadgeRoot: {},
  creditsBadgeBreakdown: {
    display: "flex",
    alignItems: "center",
    gap: {
      default: "calc(var(--spacing)*2)",
      "@media (min-width:40rem)": "calc(var(--spacing)*3)",
    },
  },
  creditsBadgeValues: {
    display: "flex",
    alignItems: "center",
    gap: {
      default: "calc(var(--spacing)*.5)",
      "@media (min-width:40rem)": "calc(var(--spacing)*1)",
    },
    fontFamily: "Commit Mono,ui-monospace,monospace",
    fontSize: {
      default: "var(--text-xs)",
      "@media (min-width:40rem)": "var(--text-sm)",
    },
    lineHeight: {
      default: "var(--tw-leading,var(--text-xs--line-height))",
      "@media (min-width:40rem)":
        "var(--tw-leading,var(--text-sm--line-height))",
    },
    color: "var(--foreground)",
    "--tw-leading": null,
  },
  creditsBadgePair: {
    display: "flex",
    alignItems: "center",
  },
  creditsBadgeLabel: {
    fontSize: {
      default: "10px",
      "@media (min-width:40rem)": "var(--text-xs)",
    },
    color: "var(--muted-foreground)",
    lineHeight: {
      default: null,
      "@media (min-width:40rem)":
        "var(--tw-leading,var(--text-xs--line-height))",
    },
    "--tw-leading": null,
  },
  creditsBadgeValue: {
    marginLeft: "calc(var(--spacing)*.5)",
  },
  creditsBadgeDot: {
    marginInline: {
      default: "calc(var(--spacing)*.5)",
      "@media (min-width:40rem)": "calc(var(--spacing)*1)",
    },
    color: {
      default: "var(--muted-foreground)",
      "@supports (color:color-mix(in lab, red, red))":
        "color-mix(in oklab,var(--muted-foreground)50%,transparent)",
    },
  },
  creditsBadgeDivider: {
    height: {
      default: "calc(var(--spacing)*3)",
      "@media (min-width:40rem)": "calc(var(--spacing)*4)",
    },
    width: "1px",
    backgroundColor: "var(--border)",
  },
  creditsBadgeTotal: {
    display: "flex",
    alignItems: "center",
    gap: "calc(var(--spacing)*1)",
  },
  creditsBadgeTotalLabel: {
    fontSize: {
      default: "10px",
      "@media (min-width:40rem)": "var(--text-xs)",
    },
    color: "var(--muted-foreground)",
    lineHeight: {
      default: null,
      "@media (min-width:40rem)":
        "var(--tw-leading,var(--text-xs--line-height))",
    },
    "--tw-leading": null,
  },
  creditsBadgeTotalValue: {
    fontFamily: "Commit Mono,ui-monospace,monospace",
    "--tw-font-weight": "var(--font-weight-semibold)",
    fontWeight: "var(--font-weight-semibold)",
    color: "var(--foreground)",
  },
  creditsBadgeDetails: {
    display: "flex",
    height: {
      default: "calc(var(--spacing)*1.5)",
      "@media (min-width:40rem)": "calc(var(--spacing)*2)",
    },
    alignItems: "center",
    gap: "calc(var(--spacing)*.5)",
  },
  creditsBadgeDetail: {
    height: "100%",
    backgroundColor: {
      default: "var(--foreground)",
      "@supports (color:color-mix(in lab, red, red))":
        "color-mix(in oklab,var(--foreground)20%,transparent)",
    },
  },
  sourcedefinitive: {
    marginBottom: "calc(var(--spacing)*4)",
    borderRadius: ".25rem",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    borderColor: {
      default: "var(--foreground)",
      "@supports (color:color-mix(in lab, red, red))":
        "color-mix(in oklab,var(--foreground)20%,transparent)",
    },
    backgroundColor: {
      default: "var(--foreground)",
      "@supports (color:color-mix(in lab, red, red))":
        "color-mix(in oklab,var(--foreground)5%,transparent)",
    },
    padding: "calc(var(--spacing)*3)",
  },
  sourcespeculative: {
    marginBottom: "calc(var(--spacing)*4)",
    borderRadius: ".25rem",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    borderColor: {
      default: "var(--muted-foreground)",
      "@supports (color:color-mix(in lab, red, red))":
        "color-mix(in oklab,var(--muted-foreground)30%,transparent)",
    },
    backgroundColor: {
      default: "var(--muted)",
      "@supports (color:color-mix(in lab, red, red))":
        "color-mix(in oklab,var(--muted)50%,transparent)",
    },
    padding: "calc(var(--spacing)*3)",
  },
  sourceexternal: {
    marginBottom: "calc(var(--spacing)*4)",
    borderRadius: ".25rem",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    borderColor: {
      default: "var(--muted-foreground)",
      "@supports (color:color-mix(in lab, red, red))":
        "color-mix(in oklab,var(--muted-foreground)20%,transparent)",
    },
    backgroundColor: {
      default: "var(--muted)",
      "@supports (color:color-mix(in lab, red, red))":
        "color-mix(in oklab,var(--muted)30%,transparent)",
    },
    padding: "calc(var(--spacing)*3)",
  },
  sourcemissing: {
    marginBottom: "calc(var(--spacing)*4)",
    borderRadius: ".25rem",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    borderColor: {
      default: "var(--muted-foreground)",
      "@supports (color:color-mix(in lab, red, red))":
        "color-mix(in oklab,var(--muted-foreground)10%,transparent)",
    },
    backgroundColor: {
      default: "var(--muted)",
      "@supports (color:color-mix(in lab, red, red))":
        "color-mix(in oklab,var(--muted)20%,transparent)",
    },
    padding: "calc(var(--spacing)*3)",
  },
  curriculumPanelEmptyPanel: {
    display: "flex",
    minHeight: "calc(var(--spacing)*0)",
    flex: "1",
    alignItems: "center",
    justifyContent: "center",
    padding: "calc(var(--spacing)*4)",
    color: "var(--muted-foreground)",
  },
  curriculumPanelEmptyContent: {
    textAlign: "center",
  },
  curriculumPanelEmptyIcon: {
    marginInline: "auto",
    marginBottom: "calc(var(--spacing)*3)",
    height: "calc(var(--spacing)*8)",
    width: "calc(var(--spacing)*8)",
    opacity: ".2",
  },
  curriculumPanelEmptyLabel: {
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    "--tw-leading": null,
  },
  curriculumPanelScroll: {
    height: "100%",
  },
  curriculumPanelContent: {
    maxWidth: "var(--container-2xl)",
    padding: {
      default: "calc(var(--spacing)*4)",
      "@media (min-width:48rem)": "calc(var(--spacing)*6)",
      "@media (min-width:40rem) and (not (min-width:48rem))":
        "calc(var(--spacing)*5)",
    },
  },
  curriculumPanelHeader: {
    marginBottom: "calc(var(--spacing)*4)",
  },
  curriculumPanelCode: {
    fontFamily: "Commit Mono,ui-monospace,monospace",
    fontSize: {
      default: "11px",
      "@media (min-width:40rem)": "var(--text-xs)",
    },
    color: "var(--muted-foreground)",
    lineHeight: {
      default: null,
      "@media (min-width:40rem)":
        "var(--tw-leading,var(--text-xs--line-height))",
    },
    "--tw-leading": null,
  },
  curriculumPanelTitle: {
    marginTop: "calc(var(--spacing)*1)",
    fontSize: {
      default: "var(--text-base)",
      "@media (min-width:48rem)": "var(--text-xl)",
      "@media (min-width:40rem) and (not (min-width:48rem))": "var(--text-lg)",
    },
    lineHeight: {
      default: "var(--leading-tight)",
      "@media (min-width:48rem)":
        "var(--tw-leading,var(--text-xl--line-height))",
      "@media (min-width:40rem) and (not (min-width:48rem))":
        "var(--tw-leading,var(--text-lg--line-height))",
    },
    "--tw-leading": "var(--leading-tight)",
    "--tw-font-weight": "var(--font-weight-semibold)",
    fontWeight: "var(--font-weight-semibold)",
    overflowWrap: "break-word",
    color: "var(--foreground)",
  },
  curriculumPanelMinorLabel: {
    marginTop: "calc(var(--spacing)*2)",
    fontSize: {
      default: "10px",
      "@media (min-width:40rem)": "var(--text-xs)",
    },
    color: "var(--muted-foreground)",
    lineHeight: {
      default: null,
      "@media (min-width:40rem)":
        "var(--tw-leading,var(--text-xs--line-height))",
    },
    "--tw-leading": null,
  },
  curriculumPanelSourceRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "calc(var(--spacing)*2)",
  },
  curriculumPanelSourceIcon: {
    marginTop: "calc(var(--spacing)*.5)",
    height: {
      default: "calc(var(--spacing)*3.5)",
      "@media (min-width:40rem)": "calc(var(--spacing)*4)",
    },
    width: {
      default: "calc(var(--spacing)*3.5)",
      "@media (min-width:40rem)": "calc(var(--spacing)*4)",
    },
    flexShrink: "0",
    color: "var(--muted-foreground)",
  },
  curriculumPanelSourceContent: {
    minWidth: "calc(var(--spacing)*0)",
    flex: "1",
  },
  curriculumPanelSourceLabel: {
    fontSize: {
      default: "11px",
      "@media (min-width:40rem)": "var(--text-xs)",
    },
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    color: "var(--foreground)",
    lineHeight: {
      default: null,
      "@media (min-width:40rem)":
        "var(--tw-leading,var(--text-xs--line-height))",
    },
    "--tw-leading": null,
  },
  curriculumPanelSourceExplanation: {
    marginTop: "calc(var(--spacing)*1)",
    fontSize: {
      default: "10px",
      "@media (min-width:40rem)": "11px",
    },
    "--tw-leading": "var(--leading-relaxed)",
    lineHeight: "var(--leading-relaxed)",
    overflowWrap: "break-word",
    color: "var(--muted-foreground)",
  },
  curriculumPanelMapping: {
    marginTop: "calc(var(--spacing)*2)",
    borderTopStyle: "var(--tw-border-style)",
    borderTopWidth: "1px",
    borderColor: {
      default: "var(--border)",
      "@supports (color:color-mix(in lab, red, red))":
        "color-mix(in oklab,var(--border)50%,transparent)",
    },
    paddingTop: "calc(var(--spacing)*2)",
  },
  curriculumPanelMappingLabel: {
    fontFamily: "Commit Mono,ui-monospace,monospace",
    fontSize: {
      default: "9px",
      "@media (min-width:40rem)": "10px",
    },
    wordBreak: "break-all",
    color: "var(--muted-foreground)",
    "--tw-leading": null,
  },
  curriculumPanelSeparator: {
    marginBlock: "calc(var(--spacing)*4)",
  },
  curriculumPanelCredits: {
    marginBottom: "calc(var(--spacing)*4)",
  },
  curriculumPanelCreditsHeading: {
    marginBottom: "calc(var(--spacing)*2)",
    fontSize: {
      default: "10px",
      "@media (min-width:40rem)": "var(--text-xs)",
    },
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    "--tw-tracking": "var(--tracking-wider)",
    letterSpacing: "var(--tracking-wider)",
    color: "var(--muted-foreground)",
    textTransform: "uppercase",
    lineHeight: {
      default: null,
      "@media (min-width:40rem)":
        "var(--tw-leading,var(--text-xs--line-height))",
    },
    "--tw-leading": null,
  },
  curriculumPanelDescription: {
    marginBottom: "calc(var(--spacing)*4)",
  },
  curriculumPanelDescriptionHeading: {
    marginBottom: "calc(var(--spacing)*2)",
    fontSize: {
      default: "10px",
      "@media (min-width:40rem)": "var(--text-xs)",
    },
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    "--tw-tracking": "var(--tracking-wider)",
    letterSpacing: "var(--tracking-wider)",
    color: "var(--muted-foreground)",
    textTransform: "uppercase",
    lineHeight: {
      default: null,
      "@media (min-width:40rem)":
        "var(--tw-leading,var(--text-xs--line-height))",
    },
    "--tw-leading": null,
  },
  curriculumPanelDescriptionText: {
    fontSize: {
      default: "11px",
      "@media (min-width:48rem)": "var(--text-sm)",
      "@media (min-width:40rem) and (not (min-width:48rem))": "var(--text-xs)",
    },
    "--tw-leading": "var(--leading-relaxed)",
    lineHeight: {
      default: "var(--leading-relaxed)",
      "@media (min-width:48rem)":
        "var(--tw-leading,var(--text-sm--line-height))",
      "@media (min-width:40rem) and (not (min-width:48rem))":
        "var(--tw-leading,var(--text-xs--line-height))",
    },
    overflowWrap: "break-word",
    color: "var(--foreground)",
  },
  curriculumPanelCombined: {
    marginBottom: "calc(var(--spacing)*4)",
  },
  curriculumPanelCombinedHeading: {
    fontSize: {
      default: "10px",
      "@media (min-width:40rem)": "var(--text-xs)",
    },
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    "--tw-tracking": "var(--tracking-wider)",
    letterSpacing: "var(--tracking-wider)",
    color: "var(--muted-foreground)",
    textTransform: "uppercase",
    lineHeight: {
      default: null,
      "@media (min-width:40rem)":
        "var(--tw-leading,var(--text-xs--line-height))",
    },
    "--tw-leading": null,
  },
  curriculumPanelCombinedItem: {
    borderLeftStyle: "var(--tw-border-style)",
    borderLeftWidth: "2px",
    borderColor: "var(--border)",
    paddingLeft: "calc(var(--spacing)*3)",
  },
  curriculumPanelCombinedTitle: {
    marginBottom: "calc(var(--spacing)*2)",
    fontSize: {
      default: "var(--text-xs)",
      "@media (min-width:40rem)": "var(--text-sm)",
    },
    lineHeight: {
      default: "var(--tw-leading,var(--text-xs--line-height))",
      "@media (min-width:40rem)":
        "var(--tw-leading,var(--text-sm--line-height))",
    },
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    overflowWrap: "break-word",
    color: "var(--foreground)",
    "--tw-leading": null,
  },
  curriculumPanelCombinedText: {
    marginBottom: "calc(var(--spacing)*2)",
    fontSize: {
      default: "11px",
      "@media (min-width:40rem)": "var(--text-xs)",
    },
    "--tw-leading": "var(--leading-relaxed)",
    lineHeight: {
      default: "var(--leading-relaxed)",
      "@media (min-width:40rem)":
        "var(--tw-leading,var(--text-xs--line-height))",
    },
    overflowWrap: "break-word",
    color: "var(--foreground)",
  },
  curriculumPanelResources: {
    marginBottom: "calc(var(--spacing)*4)",
  },
  curriculumPanelResourcesHeading: {
    marginBottom: "calc(var(--spacing)*2)",
    fontSize: {
      default: "10px",
      "@media (min-width:40rem)": "var(--text-xs)",
    },
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    "--tw-tracking": "var(--tracking-wider)",
    letterSpacing: "var(--tracking-wider)",
    color: "var(--muted-foreground)",
    textTransform: "uppercase",
    lineHeight: {
      default: null,
      "@media (min-width:40rem)":
        "var(--tw-leading,var(--text-xs--line-height))",
    },
    "--tw-leading": null,
  },
  curriculumPanelResourceList: {},
  curriculumPanelResourceLink: {
    display: "flex",
    alignItems: "center",
    gap: "calc(var(--spacing)*2)",
    borderRadius: ".25rem",
    backgroundColor: "var(--accent)",
    padding: "calc(var(--spacing)*2)",
    transitionProperty:
      "color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
  },
  curriculumPanelResourceIcon: {
    height: "calc(var(--spacing)*3)",
    width: "calc(var(--spacing)*3)",
    flexShrink: "0",
    color: "var(--muted-foreground)",
  },
  curriculumPanelResourceUrl: {
    minWidth: "calc(var(--spacing)*0)",
    flex: "1",
    fontFamily: "Commit Mono,ui-monospace,monospace",
    fontSize: {
      default: "9px",
      "@media (min-width:40rem)": "10px",
    },
    wordBreak: "break-all",
    color: "var(--foreground)",
    "--tw-leading": null,
  },
  curriculumPanelResourceArrow: {
    height: "calc(var(--spacing)*3)",
    width: "calc(var(--spacing)*3)",
    flexShrink: "0",
    opacity: "0",
    transitionProperty: "opacity",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
  },
  curriculumPanelCourseLinkSection: {
    marginBottom: "calc(var(--spacing)*4)",
  },
  curriculumPanelCourseLinkHeading: {
    marginBottom: "calc(var(--spacing)*2)",
    fontSize: {
      default: "10px",
      "@media (min-width:40rem)": "var(--text-xs)",
    },
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    "--tw-tracking": "var(--tracking-wider)",
    letterSpacing: "var(--tracking-wider)",
    color: "var(--muted-foreground)",
    textTransform: "uppercase",
    lineHeight: {
      default: null,
      "@media (min-width:40rem)":
        "var(--tw-leading,var(--text-xs--line-height))",
    },
    "--tw-leading": null,
  },
  curriculumPanelCourseLink: {
    display: "flex",
    alignItems: "center",
    gap: "calc(var(--spacing)*2)",
    borderRadius: ".25rem",
    backgroundColor: "var(--accent)",
    padding: "calc(var(--spacing)*2)",
    transitionProperty:
      "color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
  },
  curriculumPanelCourseLinkIcon: {
    height: "calc(var(--spacing)*3)",
    width: "calc(var(--spacing)*3)",
    flexShrink: "0",
    color: "var(--muted-foreground)",
  },
  curriculumPanelCourseLinkUrl: {
    minWidth: "calc(var(--spacing)*0)",
    flex: "1",
    fontFamily: "Commit Mono,ui-monospace,monospace",
    fontSize: {
      default: "9px",
      "@media (min-width:40rem)": "10px",
    },
    wordBreak: "break-all",
    color: "var(--foreground)",
    "--tw-leading": null,
  },
  curriculumPanelCourseLinkArrow: {
    height: "calc(var(--spacing)*3)",
    width: "calc(var(--spacing)*3)",
    flexShrink: "0",
    opacity: "0",
    transitionProperty: "opacity",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
  },
  curriculumPanelFallback: {
    marginBottom: "calc(var(--spacing)*4)",
    borderRadius: ".25rem",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    borderColor: "var(--border)",
    backgroundColor: {
      default: "var(--muted)",
      "@supports (color:color-mix(in lab, red, red))":
        "color-mix(in oklab,var(--muted)30%,transparent)",
    },
    padding: "calc(var(--spacing)*3)",
  },
  curriculumPanelFallbackRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "calc(var(--spacing)*2)",
  },
  curriculumPanelFallbackIcon: {
    marginTop: "calc(var(--spacing)*.5)",
    height: {
      default: "calc(var(--spacing)*3.5)",
      "@media (min-width:40rem)": "calc(var(--spacing)*4)",
    },
    width: {
      default: "calc(var(--spacing)*3.5)",
      "@media (min-width:40rem)": "calc(var(--spacing)*4)",
    },
    flexShrink: "0",
    color: "var(--muted-foreground)",
  },
  curriculumPanelFallbackText: {
    fontSize: {
      default: "11px",
      "@media (min-width:40rem)": "var(--text-xs)",
    },
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    overflowWrap: "break-word",
    color: "var(--foreground)",
    lineHeight: {
      default: null,
      "@media (min-width:40rem)":
        "var(--tw-leading,var(--text-xs--line-height))",
    },
    "--tw-leading": null,
  },
  curriculumPanelBottomSpace: {
    height: "calc(var(--spacing)*4)",
  },
  referencesListRoot: {
    marginTop: "calc(var(--spacing)*4)",
  },
  referencesListHeading: {
    marginBottom: "calc(var(--spacing)*2)",
    fontSize: {
      default: "10px",
      "@media (min-width:40rem)": "var(--text-xs)",
    },
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    "--tw-tracking": "var(--tracking-wider)",
    letterSpacing: "var(--tracking-wider)",
    color: "var(--muted-foreground)",
    textTransform: "uppercase",
    lineHeight: {
      default: null,
      "@media (min-width:40rem)":
        "var(--tw-leading,var(--text-xs--line-height))",
    },
    "--tw-leading": null,
  },
  referencesListList: {},
  referencesListItem: {
    display: "flex",
    gap: "calc(var(--spacing)*2)",
    fontSize: {
      default: "10px",
      "@media (min-width:48rem)": "var(--text-xs)",
      "@media (min-width:40rem) and (not (min-width:48rem))": "11px",
    },
    color: "var(--foreground)",
    lineHeight: {
      default: null,
      "@media (min-width:48rem)":
        "var(--tw-leading,var(--text-xs--line-height))",
    },
    "--tw-leading": null,
  },
  referencesListNumber: {
    width: "calc(var(--spacing)*4)",
    flexShrink: "0",
    textAlign: "right",
    fontFamily: "Commit Mono,ui-monospace,monospace",
    color: "var(--muted-foreground)",
  },
  referencesListLink: {
    display: "flex",
    minWidth: "calc(var(--spacing)*0)",
    alignItems: "flex-start",
    gap: "calc(var(--spacing)*1)",
    wordBreak: "break-all",
    textDecorationLine: "underline",
    textUnderlineOffset: "2px",
  },
  referencesListExternalIcon: {
    marginTop: "calc(var(--spacing)*.5)",
    height: "calc(var(--spacing)*2.5)",
    width: "calc(var(--spacing)*2.5)",
    flexShrink: "0",
  },
  referencesListText: {
    "--tw-leading": "var(--leading-relaxed)",
    lineHeight: "var(--leading-relaxed)",
    overflowWrap: "break-word",
  },
  searchDialogContent: {
    maxWidth: "var(--container-lg)",
    gap: "calc(var(--spacing)*0)",
    padding: "calc(var(--spacing)*0)",
  },
  searchDialogHeader: {
    padding: "calc(var(--spacing)*4)",
    paddingBottom: "calc(var(--spacing)*2)",
  },
  searchDialogTitle: {
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    color: "var(--muted-foreground)",
    "--tw-leading": null,
  },
  searchDialogSearchContainer: {
    paddingInline: "calc(var(--spacing)*4)",
    paddingBottom: "calc(var(--spacing)*2)",
  },
  searchDialogSearchField: {
    position: "relative",
  },
  searchDialogSearchIcon: {
    position: "absolute",
    top: "50%",
    left: "calc(var(--spacing)*3)",
    height: "calc(var(--spacing)*4)",
    width: "calc(var(--spacing)*4)",
    "--tw-translate-y": "calc(calc(1/2*100%)*-1)",
    translate: "var(--tw-translate-x)var(--tw-translate-y)",
    color: "var(--muted-foreground)",
  },
  searchDialogInput: {
    height: "calc(var(--spacing)*10)",
    paddingLeft: "calc(var(--spacing)*9)",
    fontFamily: "Commit Mono,ui-monospace,monospace",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    "--tw-leading": null,
  },
  searchDialogResults: {
    maxHeight: "300px",
    borderTopStyle: "var(--tw-border-style)",
    borderTopWidth: "1px",
    borderColor: "var(--border)",
  },
  searchDialogResultList: {
    padding: "calc(var(--spacing)*2)",
  },
  searchDialogEmpty: {
    paddingBlock: "calc(var(--spacing)*8)",
    textAlign: "center",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    color: "var(--muted-foreground)",
    "--tw-leading": null,
  },
  searchDialogResult: {
    width: "100%",
    borderRadius: ".25rem",
    padding: "calc(var(--spacing)*2.5)",
    textAlign: "left",
    transitionProperty:
      "color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
  },
  searchDialogResultRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "calc(var(--spacing)*3)",
  },
  searchDialogResultContent: {
    minWidth: "calc(var(--spacing)*0)",
    flex: "1",
  },
  searchDialogResultHeading: {
    display: "flex",
    alignItems: "center",
    gap: "calc(var(--spacing)*2)",
  },
  searchDialogResultCode: {
    fontFamily: "Commit Mono,ui-monospace,monospace",
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    color: "var(--foreground)",
    "--tw-leading": null,
  },
  searchDialogResultSource: {
    fontSize: "10px",
    color: "var(--muted-foreground)",
    "--tw-leading": null,
  },
  searchDialogResultType: {
    borderRadius: ".25rem",
    backgroundColor: "var(--muted)",
    paddingInline: "calc(var(--spacing)*1.5)",
    paddingBlock: "calc(var(--spacing)*.5)",
    fontSize: "9px",
    color: "var(--muted-foreground)",
    "--tw-leading": null,
  },
  searchDialogResultMinor: {
    borderRadius: ".25rem",
    backgroundColor: {
      default: "#ac4bff33",
      "@supports (color:color-mix(in lab, red, red))":
        "color-mix(in oklab,var(--color-purple-500)20%,transparent)",
    },
    paddingInline: "calc(var(--spacing)*1.5)",
    paddingBlock: "calc(var(--spacing)*.5)",
    fontSize: "9px",
    color: "var(--color-purple-400)",
    "--tw-leading": null,
  },
  searchDialogResultTitle: {
    marginTop: "calc(var(--spacing)*.5)",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
    color: "var(--muted-foreground)",
    "--tw-leading": null,
  },
  searchDialogFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopStyle: "var(--tw-border-style)",
    borderTopWidth: "1px",
    borderColor: "var(--border)",
    padding: "calc(var(--spacing)*2)",
    fontSize: "10px",
    color: "var(--muted-foreground)",
    "--tw-leading": null,
  },
  searchDialogFooterHints: {
    display: "flex",
    alignItems: "center",
    gap: "calc(var(--spacing)*1)",
  },
  searchDialogEnterKey: {
    borderRadius: ".25rem",
    backgroundColor: "var(--muted)",
    paddingInline: "calc(var(--spacing)*1.5)",
    paddingBlock: "calc(var(--spacing)*.5)",
    fontSize: "9px",
    "--tw-leading": null,
  },
  searchDialogEscapeKey: {
    marginLeft: "calc(var(--spacing)*2)",
    borderRadius: ".25rem",
    backgroundColor: "var(--muted)",
    paddingInline: "calc(var(--spacing)*1.5)",
    paddingBlock: "calc(var(--spacing)*.5)",
    fontSize: "9px",
    "--tw-leading": null,
  },
  subjectSelected: {
    marginBottom: "calc(var(--spacing)*.5)",
    display: "flex",
    cursor: "pointer",
    alignItems: "flex-start",
    gap: {
      default: "calc(var(--spacing)*1.5)",
      "@media (min-width:40rem)": "calc(var(--spacing)*2)",
    },
    borderRadius: ".25rem",
    backgroundColor: "var(--accent)",
    padding: {
      default: "calc(var(--spacing)*2)",
      "@media (min-width:40rem)": "calc(var(--spacing)*2.5)",
    },
    transitionProperty:
      "color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
  },
  subjectRow: {
    marginBottom: "calc(var(--spacing)*.5)",
    display: "flex",
    cursor: "pointer",
    alignItems: "flex-start",
    gap: {
      default: "calc(var(--spacing)*1.5)",
      "@media (min-width:40rem)": "calc(var(--spacing)*2)",
    },
    borderRadius: ".25rem",
    padding: {
      default: "calc(var(--spacing)*2)",
      "@media (min-width:40rem)": "calc(var(--spacing)*2.5)",
    },
    transitionProperty:
      "color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
  },
  officialIndicator: {
    fontSize: {
      default: "9px",
      "@media (min-width:40rem)": "10px",
    },
    color: "var(--foreground)",
    "--tw-leading": null,
  },
  historicalIndicator: {
    fontSize: {
      default: "9px",
      "@media (min-width:40rem)": "10px",
    },
    color: "var(--muted-foreground)",
    "--tw-leading": null,
  },
  limitedIndicator: {
    fontSize: {
      default: "9px",
      "@media (min-width:40rem)": "10px",
    },
    color: {
      default: "var(--muted-foreground)",
      "@supports (color:color-mix(in lab, red, red))":
        "color-mix(in oklab,var(--muted-foreground)50%,transparent)",
    },
    "--tw-leading": null,
  },
  subjectSidebarRoot: {
    display: "flex",
    height: "100%",
    minHeight: "calc(var(--spacing)*0)",
    flexDirection: "column",
    borderColor: "var(--border)",
    backgroundColor: "var(--sidebar)",
    width: {
      default: null,
      "@media (min-width:64rem)": "calc(var(--spacing)*80)",
      "@media (min-width:48rem) and (not (min-width:64rem))":
        "calc(var(--spacing)*72)",
    },
    borderRightStyle: {
      default: null,
      "@media (min-width:48rem)": "var(--tw-border-style)",
    },
    borderRightWidth: {
      default: null,
      "@media (min-width:48rem)": "1px",
    },
  },
  subjectSidebarHeader: {
    flexShrink: "0",
    borderBottomStyle: "var(--tw-border-style)",
    borderBottomWidth: "1px",
    borderColor: "var(--border)",
    padding: {
      default: "calc(var(--spacing)*2.5)",
      "@media (min-width:40rem)": "calc(var(--spacing)*3)",
    },
  },
  subjectSidebarHeading: {
    fontSize: {
      default: "10px",
      "@media (min-width:40rem)": "var(--text-xs)",
    },
    "--tw-tracking": "var(--tracking-wider)",
    letterSpacing: "var(--tracking-wider)",
    color: "var(--muted-foreground)",
    textTransform: "uppercase",
    lineHeight: {
      default: null,
      "@media (min-width:40rem)":
        "var(--tw-leading,var(--text-xs--line-height))",
    },
    "--tw-leading": null,
  },
  subjectSidebarScroll: {
    minHeight: "calc(var(--spacing)*0)",
    flex: "1",
  },
  subjectSidebarList: {
    padding: {
      default: "calc(var(--spacing)*1.5)",
      "@media (min-width:40rem)": "calc(var(--spacing)*2)",
    },
  },
  subjectSidebarRank: {
    width: {
      default: "calc(var(--spacing)*4)",
      "@media (min-width:40rem)": "calc(var(--spacing)*5)",
    },
    flexShrink: "0",
    paddingTop: "calc(var(--spacing)*.5)",
    textAlign: "center",
  },
  subjectSidebarRankNumber: {
    fontFamily: "Commit Mono,ui-monospace,monospace",
    fontSize: {
      default: "10px",
      "@media (min-width:40rem)": "var(--text-xs)",
    },
    color: "var(--muted-foreground)",
    lineHeight: {
      default: null,
      "@media (min-width:40rem)":
        "var(--tw-leading,var(--text-xs--line-height))",
    },
    "--tw-leading": null,
  },
  subjectSidebarReorderControls: {
    marginBlock: "calc(var(--spacing)*-.5)",
    display: "flex",
    flexShrink: "0",
    flexDirection: "column",
  },
  subjectSidebarMoveUp: {
    height: {
      default: "calc(var(--spacing)*4)",
      "@media (min-width:40rem)": "calc(var(--spacing)*5)",
    },
    width: {
      default: "calc(var(--spacing)*4)",
      "@media (min-width:40rem)": "calc(var(--spacing)*5)",
    },
    padding: "calc(var(--spacing)*0)",
    opacity: ".4",
  },
  subjectSidebarUpIcon: {
    height: {
      default: "calc(var(--spacing)*2.5)",
      "@media (min-width:40rem)": "calc(var(--spacing)*3)",
    },
    width: {
      default: "calc(var(--spacing)*2.5)",
      "@media (min-width:40rem)": "calc(var(--spacing)*3)",
    },
  },
  subjectSidebarMoveDown: {
    height: {
      default: "calc(var(--spacing)*4)",
      "@media (min-width:40rem)": "calc(var(--spacing)*5)",
    },
    width: {
      default: "calc(var(--spacing)*4)",
      "@media (min-width:40rem)": "calc(var(--spacing)*5)",
    },
    padding: "calc(var(--spacing)*0)",
    opacity: ".4",
  },
  subjectSidebarDownIcon: {
    height: {
      default: "calc(var(--spacing)*2.5)",
      "@media (min-width:40rem)": "calc(var(--spacing)*3)",
    },
    width: {
      default: "calc(var(--spacing)*2.5)",
      "@media (min-width:40rem)": "calc(var(--spacing)*3)",
    },
  },
  subjectSidebarSubjectInfo: {
    minWidth: "calc(var(--spacing)*0)",
    flex: "1",
    overflow: "hidden",
  },
  subjectSidebarSubjectHeading: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: {
      default: "calc(var(--spacing)*1)",
      "@media (min-width:40rem)": "calc(var(--spacing)*1.5)",
    },
  },
  subjectSidebarSubjectCode: {
    fontFamily: "Commit Mono,ui-monospace,monospace",
    fontSize: {
      default: "10px",
      "@media (min-width:40rem)": "var(--text-xs)",
    },
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    color: "var(--foreground)",
    lineHeight: {
      default: null,
      "@media (min-width:40rem)":
        "var(--tw-leading,var(--text-xs--line-height))",
    },
    "--tw-leading": null,
  },
  subjectSidebarMinorLabel: {
    borderRadius: ".25rem",
    backgroundColor: {
      default: "#ac4bff33",
      "@supports (color:color-mix(in lab, red, red))":
        "color-mix(in oklab,var(--color-purple-500)20%,transparent)",
    },
    paddingInline: "calc(var(--spacing)*1)",
    paddingBlock: "calc(var(--spacing)*.5)",
    fontSize: {
      default: "8px",
      "@media (min-width:40rem)": "9px",
    },
    color: "var(--color-purple-400)",
    "--tw-leading": null,
  },
  subjectSidebarSubjectName: {
    marginTop: "calc(var(--spacing)*.5)",
    fontSize: {
      default: "9px",
      "@media (min-width:40rem)": "11px",
    },
    "--tw-leading": "var(--leading-tight)",
    lineHeight: "var(--leading-tight)",
    overflowWrap: "break-word",
    color: "var(--muted-foreground)",
  },
  subjectSidebarFooter: {
    flexShrink: "0",
    borderTopStyle: "var(--tw-border-style)",
    borderTopWidth: "1px",
    borderColor: "var(--border)",
    padding: "calc(var(--spacing)*2)",
    fontSize: {
      default: "9px",
      "@media (min-width:40rem)": "10px",
    },
    color: "var(--muted-foreground)",
    "--tw-leading": null,
  },
  subjectSidebarLegend: {
    display: "flex",
    flexWrap: "wrap",
    columnGap: {
      default: "calc(var(--spacing)*2)",
      "@media (min-width:40rem)": "calc(var(--spacing)*3)",
    },
    rowGap: "calc(var(--spacing)*1)",
  },
  typeCard: {
    borderRadius: "var(--radius)",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    backgroundColor: "var(--card)",
    padding: {
      default: "calc(var(--spacing)*3)",
      "@media (min-width:48rem)": "calc(var(--spacing)*4)",
    },
    textAlign: "left",
    transitionProperty: "all",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: ".15s",
    "--tw-duration": ".15s",
  },
  typeCardSelected: {
    borderRadius: "var(--radius)",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    backgroundColor: "var(--card)",
    padding: {
      default: "calc(var(--spacing)*3)",
      "@media (min-width:48rem)": "calc(var(--spacing)*4)",
    },
    textAlign: "left",
    "--tw-ring-shadow":
      "var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor)",
    boxShadow:
      "var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)",
    "--tw-ring-color": "var(--foreground)",
    transitionProperty: "all",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: ".15s",
    "--tw-duration": ".15s",
  },
  subjectTypeSelectorGrid: {
    display: "grid",
    gridTemplateColumns: {
      default: "repeat(2,minmax(0,1fr))",
      "@media (min-width:64rem)": "repeat(4,minmax(0,1fr))",
    },
    gap: {
      default: "calc(var(--spacing)*2)",
      "@media (min-width:48rem)": "calc(var(--spacing)*3)",
    },
  },
  subjectTypeSelectorHeading: {
    marginBottom: {
      default: "calc(var(--spacing)*1.5)",
      "@media (min-width:48rem)": "calc(var(--spacing)*2)",
    },
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  subjectTypeSelectorName: {
    fontFamily: "Commit Mono,ui-monospace,monospace",
    fontSize: {
      default: "var(--text-xl)",
      "@media (min-width:48rem)": "var(--text-2xl)",
    },
    lineHeight: {
      default: "var(--tw-leading,var(--text-xl--line-height))",
      "@media (min-width:48rem)":
        "var(--tw-leading,var(--text-2xl--line-height))",
    },
    "--tw-font-weight": "var(--font-weight-semibold)",
    fontWeight: "var(--font-weight-semibold)",
    "--tw-leading": null,
  },
  subjectTypeSelectorCounts: {
    display: "flex",
    alignItems: "baseline",
    gap: "calc(var(--spacing)*1)",
  },
  subjectTypeSelectorCount: {
    fontFamily: "Commit Mono,ui-monospace,monospace",
    fontSize: {
      default: "var(--text-lg)",
      "@media (min-width:48rem)": "var(--text-xl)",
    },
    lineHeight: {
      default: "var(--tw-leading,var(--text-lg--line-height))",
      "@media (min-width:48rem)":
        "var(--tw-leading,var(--text-xl--line-height))",
    },
    color: "var(--muted-foreground)",
    "--tw-leading": null,
  },
  subjectTypeSelectorMinorCount: {
    fontFamily: "Commit Mono,ui-monospace,monospace",
    fontSize: "10px",
    color: "var(--color-purple-400)",
    "--tw-leading": null,
  },
  subjectTypeSelectorDescription: {
    fontSize: {
      default: "10px",
      "@media (min-width:48rem)": "var(--text-xs)",
    },
    "--tw-leading": "var(--leading-tight)",
    lineHeight: {
      default: "var(--leading-tight)",
      "@media (min-width:48rem)":
        "var(--tw-leading,var(--text-xs--line-height))",
    },
    color: "var(--muted-foreground)",
  },
  themeTogglePlaceholder: {
    height: "calc(var(--spacing)*8)",
    width: "calc(var(--spacing)*8)",
  },
  themeTogglePlaceholderIcon: {
    height: "calc(var(--spacing)*3.5)",
    width: "calc(var(--spacing)*3.5)",
  },
  themeToggleButton: {
    height: "calc(var(--spacing)*8)",
    width: "calc(var(--spacing)*8)",
  },
  themeToggleSun: {
    height: "calc(var(--spacing)*3.5)",
    width: "calc(var(--spacing)*3.5)",
  },
  themeToggleMoon: {
    height: "calc(var(--spacing)*3.5)",
    width: "calc(var(--spacing)*3.5)",
  },
  themeToggleLabel: {
    clipPath: "inset(50%)",
    whiteSpace: "nowrap",
    borderWidth: "0",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0",
    position: "absolute",
    overflow: "hidden",
  },
  badgevariantdefault: {
    display: "inline-flex",
    width: "fit-content",
    flexShrink: "0",
    alignItems: "center",
    justifyContent: "center",
    gap: "calc(var(--spacing)*1)",
    overflow: "hidden",
    borderRadius: "3.40282e38px",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    borderColor: "#0000",
    backgroundColor: "var(--primary)",
    paddingInline: "calc(var(--spacing)*2)",
    paddingBlock: "calc(var(--spacing)*.5)",
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    whiteSpace: "nowrap",
    color: "var(--primary-foreground)",
    transitionProperty: "color,box-shadow",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    "--tw-leading": null,
  },
  badgevariantsecondary: {
    display: "inline-flex",
    width: "fit-content",
    flexShrink: "0",
    alignItems: "center",
    justifyContent: "center",
    gap: "calc(var(--spacing)*1)",
    overflow: "hidden",
    borderRadius: "3.40282e38px",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    borderColor: "#0000",
    backgroundColor: "var(--secondary)",
    paddingInline: "calc(var(--spacing)*2)",
    paddingBlock: "calc(var(--spacing)*.5)",
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    whiteSpace: "nowrap",
    color: "var(--secondary-foreground)",
    transitionProperty: "color,box-shadow",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    "--tw-leading": null,
  },
  badgevariantdestructive: {
    display: "inline-flex",
    width: "fit-content",
    flexShrink: "0",
    alignItems: "center",
    justifyContent: "center",
    gap: "calc(var(--spacing)*1)",
    overflow: "hidden",
    borderRadius: "3.40282e38px",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    borderColor: "#0000",
    backgroundColor: "var(--destructive)",
    paddingInline: "calc(var(--spacing)*2)",
    paddingBlock: "calc(var(--spacing)*.5)",
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    whiteSpace: "nowrap",
    color: "var(--color-white)",
    transitionProperty: "color,box-shadow",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    "--tw-leading": null,
  },
  badgevariantoutline: {
    display: "inline-flex",
    width: "fit-content",
    flexShrink: "0",
    alignItems: "center",
    justifyContent: "center",
    gap: "calc(var(--spacing)*1)",
    overflow: "hidden",
    borderRadius: "3.40282e38px",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    paddingInline: "calc(var(--spacing)*2)",
    paddingBlock: "calc(var(--spacing)*.5)",
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    whiteSpace: "nowrap",
    color: "var(--foreground)",
    transitionProperty: "color,box-shadow",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    "--tw-leading": null,
  },
  badgeBase: {
    display: "inline-flex",
    width: "fit-content",
    flexShrink: "0",
    alignItems: "center",
    justifyContent: "center",
    gap: "calc(var(--spacing)*1)",
    overflow: "hidden",
    borderRadius: "3.40282e38px",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    paddingInline: "calc(var(--spacing)*2)",
    paddingBlock: "calc(var(--spacing)*.5)",
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    whiteSpace: "nowrap",
    transitionProperty: "color,box-shadow",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    "--tw-leading": null,
  },
  buttonvariantdefault: {
    display: "inline-flex",
    flexShrink: "0",
    alignItems: "center",
    justifyContent: "center",
    gap: "calc(var(--spacing)*2)",
    borderRadius: "calc(var(--radius) - 2px)",
    backgroundColor: "var(--primary)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    whiteSpace: "nowrap",
    color: "var(--primary-foreground)",
    transitionProperty: "all",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    "--tw-outline-style": "none",
    outlineStyle: "none",
    "--tw-leading": null,
  },
  buttonvariantdestructive: {
    display: "inline-flex",
    flexShrink: "0",
    alignItems: "center",
    justifyContent: "center",
    gap: "calc(var(--spacing)*2)",
    borderRadius: "calc(var(--radius) - 2px)",
    backgroundColor: "var(--destructive)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    whiteSpace: "nowrap",
    color: "var(--color-white)",
    transitionProperty: "all",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    "--tw-outline-style": "none",
    outlineStyle: "none",
    "--tw-leading": null,
  },
  buttonvariantoutline: {
    display: "inline-flex",
    flexShrink: "0",
    alignItems: "center",
    justifyContent: "center",
    gap: "calc(var(--spacing)*2)",
    borderRadius: "calc(var(--radius) - 2px)",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    backgroundColor: "var(--background)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    whiteSpace: "nowrap",
    "--tw-shadow": "0 1px 2px 0 var(--tw-shadow-color,#0000000d)",
    boxShadow:
      "var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)",
    transitionProperty: "all",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    "--tw-outline-style": "none",
    outlineStyle: "none",
    "--tw-leading": null,
  },
  buttonvariantsecondary: {
    display: "inline-flex",
    flexShrink: "0",
    alignItems: "center",
    justifyContent: "center",
    gap: "calc(var(--spacing)*2)",
    borderRadius: "calc(var(--radius) - 2px)",
    backgroundColor: "var(--secondary)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    whiteSpace: "nowrap",
    color: "var(--secondary-foreground)",
    transitionProperty: "all",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    "--tw-outline-style": "none",
    outlineStyle: "none",
    "--tw-leading": null,
  },
  buttonvariantghost: {
    display: "inline-flex",
    flexShrink: "0",
    alignItems: "center",
    justifyContent: "center",
    gap: "calc(var(--spacing)*2)",
    borderRadius: "calc(var(--radius) - 2px)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    whiteSpace: "nowrap",
    transitionProperty: "all",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    "--tw-outline-style": "none",
    outlineStyle: "none",
    "--tw-leading": null,
  },
  buttonvariantlink: {
    display: "inline-flex",
    flexShrink: "0",
    alignItems: "center",
    justifyContent: "center",
    gap: "calc(var(--spacing)*2)",
    borderRadius: "calc(var(--radius) - 2px)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    whiteSpace: "nowrap",
    color: "var(--primary)",
    textUnderlineOffset: "4px",
    transitionProperty: "all",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    "--tw-outline-style": "none",
    outlineStyle: "none",
    "--tw-leading": null,
  },
  buttonsizedefault: {
    height: "calc(var(--spacing)*9)",
    paddingInline: "calc(var(--spacing)*4)",
    paddingBlock: "calc(var(--spacing)*2)",
  },
  buttonsizesm: {
    height: "calc(var(--spacing)*8)",
    gap: "calc(var(--spacing)*1.5)",
    borderRadius: "calc(var(--radius) - 2px)",
    paddingInline: "calc(var(--spacing)*3)",
  },
  buttonsizelg: {
    height: "calc(var(--spacing)*10)",
    borderRadius: "calc(var(--radius) - 2px)",
    paddingInline: "calc(var(--spacing)*6)",
  },
  buttonsizeicon: {
    width: "calc(var(--spacing)*9)",
    height: "calc(var(--spacing)*9)",
  },
  buttonsizeicon_sm: {
    width: "calc(var(--spacing)*8)",
    height: "calc(var(--spacing)*8)",
  },
  buttonsizeicon_lg: {
    width: "calc(var(--spacing)*10)",
    height: "calc(var(--spacing)*10)",
  },
  buttonBase: {
    display: "inline-flex",
    flexShrink: "0",
    alignItems: "center",
    justifyContent: "center",
    gap: "calc(var(--spacing)*2)",
    borderRadius: "calc(var(--radius) - 2px)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    whiteSpace: "nowrap",
    transitionProperty: "all",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    "--tw-outline-style": "none",
    outlineStyle: "none",
    "--tw-leading": null,
  },
  cardRoot: {
    display: "flex",
    flexDirection: "column",
    gap: "calc(var(--spacing)*6)",
    borderRadius: "calc(var(--radius) + 4px)",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    backgroundColor: "var(--card)",
    paddingBlock: "calc(var(--spacing)*6)",
    color: "var(--card-foreground)",
    "--tw-shadow":
      "0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a)",
    boxShadow:
      "var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)",
  },
  cardHeader: {
    container: "card-header/inline-size",
    display: "grid",
    gridAutoRows: "min-content",
    gridTemplateRows: "auto auto",
    alignItems: "flex-start",
    gap: "calc(var(--spacing)*2)",
    paddingInline: "calc(var(--spacing)*6)",
  },
  cardTitle: {
    "--tw-leading": "1",
    lineHeight: "1",
    "--tw-font-weight": "var(--font-weight-semibold)",
    fontWeight: "var(--font-weight-semibold)",
  },
  cardDescription: {
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    color: "var(--muted-foreground)",
    "--tw-leading": null,
  },
  cardAction: {
    gridColumnStart: "2",
    gridRow: "span 2/span 2",
    gridRowStart: "1",
    alignSelf: "flex-start",
    justifySelf: "flex-end",
  },
  cardContent: {
    paddingInline: "calc(var(--spacing)*6)",
  },
  cardFooter: {
    display: "flex",
    alignItems: "center",
    paddingInline: "calc(var(--spacing)*6)",
  },
  dialogOverlay: {
    position: "fixed",
    inset: "calc(var(--spacing)*0)",
    zIndex: "50",
    backgroundColor: {
      default: "#00000080",
      "@supports (color:color-mix(in lab, red, red))":
        "color-mix(in oklab,var(--color-black)50%,transparent)",
    },
  },
  dialogContent: {
    position: "fixed",
    top: "50%",
    left: "50%",
    zIndex: "50",
    display: "grid",
    width: "100%",
    maxWidth: {
      default: "calc(100% - 2rem)",
      "@media (min-width:40rem)": "var(--container-lg)",
    },
    "--tw-translate-x": "-50%",
    translate: "var(--tw-translate-x)var(--tw-translate-y)",
    "--tw-translate-y": "-50%",
    gap: "calc(var(--spacing)*4)",
    borderRadius: "var(--radius)",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    backgroundColor: "var(--background)",
    padding: "calc(var(--spacing)*6)",
    "--tw-shadow":
      "0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)",
    boxShadow:
      "var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)",
    "--tw-duration": ".2s",
    transitionDuration: ".2s",
  },
  dialogClose: {
    position: "absolute",
    top: "calc(var(--spacing)*4)",
    right: "calc(var(--spacing)*4)",
    borderRadius: "var(--radius-xs)",
    opacity: ".7",
    "--tw-ring-offset-color": "var(--background)",
    transitionProperty: "opacity",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
  },
  dialogCloseIcon: {
    clipPath: "inset(50%)",
    whiteSpace: "nowrap",
    borderWidth: "0",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0",
    position: "absolute",
    overflow: "hidden",
  },
  dialogCloseLabel: {
    display: "flex",
    flexDirection: "column",
    gap: "calc(var(--spacing)*2)",
    textAlign: {
      default: "center",
      "@media (min-width:40rem)": "left",
    },
  },
  dialogHeader: {
    display: "flex",
    flexDirection: {
      default: "column-reverse",
      "@media (min-width:40rem)": "row",
    },
    gap: "calc(var(--spacing)*2)",
    justifyContent: {
      default: null,
      "@media (min-width:40rem)": "flex-end",
    },
  },
  dialogFooter: {
    fontSize: "var(--text-lg)",
    lineHeight: "1",
    "--tw-leading": "1",
    "--tw-font-weight": "var(--font-weight-semibold)",
    fontWeight: "var(--font-weight-semibold)",
  },
  dialogTitle: {
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    color: "var(--muted-foreground)",
    "--tw-leading": null,
  },
  inputRoot: {
    height: "calc(var(--spacing)*9)",
    width: "100%",
    minWidth: "calc(var(--spacing)*0)",
    borderRadius: "calc(var(--radius) - 2px)",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    borderColor: "var(--input)",
    backgroundColor: "#0000",
    paddingInline: "calc(var(--spacing)*3)",
    paddingBlock: "calc(var(--spacing)*1)",
    fontSize: {
      default: "var(--text-base)",
      "@media (min-width:48rem)": "var(--text-sm)",
    },
    lineHeight: {
      default: "var(--tw-leading,var(--text-base--line-height))",
      "@media (min-width:48rem)":
        "var(--tw-leading,var(--text-sm--line-height))",
    },
    "--tw-shadow": "0 1px 2px 0 var(--tw-shadow-color,#0000000d)",
    boxShadow:
      "var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)",
    transitionProperty: "color,box-shadow",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    "--tw-outline-style": "none",
    outlineStyle: "none",
    "--tw-leading": null,
  },
  scrollVertical: {
    display: "flex",
    height: "100%",
    width: "calc(var(--spacing)*2.5)",
    touchAction: "none",
    borderLeftStyle: "var(--tw-border-style)",
    borderLeftWidth: "1px",
    borderLeftColor: "#0000",
    padding: "1px",
    transitionProperty:
      "color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    WebkitUserSelect: "none",
    userSelect: "none",
  },
  scrollHorizontal: {
    display: "flex",
    height: "calc(var(--spacing)*2.5)",
    touchAction: "none",
    flexDirection: "column",
    borderTopStyle: "var(--tw-border-style)",
    borderTopWidth: "1px",
    borderTopColor: "#0000",
    padding: "1px",
    transitionProperty:
      "color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    WebkitUserSelect: "none",
    userSelect: "none",
  },
  scrollAreaRoot: {
    position: "relative",
  },
  scrollAreaViewport: {
    width: "100%",
    height: "100%",
    borderRadius: "inherit",
    transitionProperty: "color,box-shadow",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    "--tw-outline-style": "none",
    outlineStyle: "none",
  },
  scrollAreaThumb: {
    position: "relative",
    flex: "1",
    borderRadius: "3.40282e38px",
    backgroundColor: "var(--border)",
  },
  separatorRoot: {
    flexShrink: "0",
    backgroundColor: "var(--border)",
  },
  tooltipContent: {
    zIndex: "50",
    width: "fit-content",
    transformOrigin: "var(--radix-tooltip-content-transform-origin)",
    animationName: "enter",
    animationDuration: "var(--tw-animation-duration,var(--tw-duration,.15s))",
    animationTimingFunction: "var(--tw-ease,ease)",
    animationDelay: "var(--tw-animation-delay,0s)",
    animationIterationCount: "var(--tw-animation-iteration-count,1)",
    animationDirection: "var(--tw-animation-direction,normal)",
    animationFillMode: "var(--tw-animation-fill-mode,none)",
    borderRadius: "calc(var(--radius) - 2px)",
    backgroundColor: "var(--foreground)",
    paddingInline: "calc(var(--spacing)*3)",
    paddingBlock: "calc(var(--spacing)*1.5)",
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
    textWrap: "balance",
    color: "var(--background)",
    "--tw-enter-opacity": "0",
    "--tw-enter-scale": ".95",
    "--tw-leading": null,
  },
  tooltipArrow: {
    zIndex: "50",
    width: "calc(var(--spacing)*2.5)",
    height: "calc(var(--spacing)*2.5)",
    "--tw-translate-y": "calc(-50% - 2px)",
    translate: "var(--tw-translate-x)var(--tw-translate-y)",
    rotate: "45deg",
    borderRadius: "2px",
    backgroundColor: "var(--foreground)",
    fill: "var(--foreground)",
  },
});
