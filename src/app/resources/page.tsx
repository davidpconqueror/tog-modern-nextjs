"use client";

import * as React from "react";
import {
  Search,
  Download,
  Check,
  Calendar,
} from "lucide-react";
import { resourceDocuments, archiveMilestones } from "@/data/resources";

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [downloadingId, setDownloadingId] = React.useState<string | null>(null);

  const categories = ["All", "Annual Report", "Monthly Update", "Doctrine", "Ministry Guide"];

  const filteredDocuments = resourceDocuments.filter((doc) => {
    const matchesCategory =
      selectedCategory === "All" || doc.category === selectedCategory;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (id: string, title: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      alert(`Initiating download for:\n${title}`);
    }, 600);
  };

  const getCategoryPastel = (cat: string) => {
    switch (cat) {
      case "Annual Report":
        return {
          badge: "bg-pastel-amber/60 text-pastel-amber-fg border-pastel-amber-border",
          borderTop: "border-t-2 border-t-pastel-amber-border",
          activeBtn: "border-pastel-amber-border bg-pastel-amber text-pastel-amber-fg shadow-2xs",
        };
      case "Monthly Update":
        return {
          badge: "bg-pastel-sage/60 text-pastel-sage-fg border-pastel-sage-border",
          borderTop: "border-t-2 border-t-pastel-sage-border",
          activeBtn: "border-pastel-sage-border bg-pastel-sage text-pastel-sage-fg shadow-2xs",
        };
      case "Doctrine":
        return {
          badge: "bg-pastel-lavender/60 text-pastel-lavender-fg border-pastel-lavender-border",
          borderTop: "border-t-2 border-t-pastel-lavender-border",
          activeBtn: "border-pastel-lavender-border bg-pastel-lavender text-pastel-lavender-fg shadow-2xs",
        };
      case "Ministry Guide":
        return {
          badge: "bg-pastel-sky/60 text-pastel-sky-fg border-pastel-sky-border",
          borderTop: "border-t-2 border-t-pastel-sky-border",
          activeBtn: "border-pastel-sky-border bg-pastel-sky text-pastel-sky-fg shadow-2xs",
        };
      default:
        return {
          badge: "bg-secondary text-foreground border-border",
          borderTop: "border-t-border",
          activeBtn: "border-foreground bg-foreground text-background shadow-2xs",
        };
    }
  };

  const getMilestonePastel = (idx: number) => {
    if (idx === 0) return "bg-pastel-rose/70 text-pastel-rose-fg border-pastel-rose-border";
    if (idx === 1) return "bg-pastel-amber/70 text-pastel-amber-fg border-pastel-amber-border";
    return "bg-pastel-sage/70 text-pastel-sage-fg border-pastel-sage-border";
  };

  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-24">
      {/* 1. MODERN CLASSICAL HEADER */}
      <section className="border-b border-border bg-pastel-cream/50">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-12 sm:py-24 space-y-6">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 rounded-2xl sm:rounded-full border border-pastel-sky-border bg-pastel-sky/60 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-pastel-sky-fg max-w-full">
            <span>Official Repository</span>
            <span className="opacity-60">•</span>
            <span>Publications</span>
            <span className="opacity-60">•</span>
            <span>Diocese of Punjab</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-heading break-words">
            Certified Reports &amp; Historical Archives
          </h1>

          <p className="max-w-3xl text-sm sm:text-lg text-muted-foreground leading-relaxed font-sans">
            Official annual ministry statements, monthly mission updates from Punjab,
            theological doctrine papers, and photographic records from 2001 to the present.
          </p>
        </div>
      </section>

      {/* 2. REPOSITORY CONTROLS & DOCUMENT REGISTRY */}
      <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Controls: Search and Pastel Category Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border">
          {/* Pastel Category Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const pastelStyle = getCategoryPastel(cat);
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-md border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                    isActive
                      ? pastelStyle.activeBtn
                      : "border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search reports or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border border-border bg-card pl-10 pr-4 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
          </div>
        </div>

        {/* Document Cards Grid (Modern Classical Layout with Pastel Accents) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDocuments.map((doc, idx) => {
            const pastel = getCategoryPastel(doc.category);
            return (
              <div
                key={doc.id}
                className={`rounded-xl border border-border bg-card p-5 sm:p-7 shadow-2xs hover:shadow-xs hover:border-foreground/30 transition-all flex flex-col justify-between space-y-6 ${pastel.borderTop}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
                      0{idx + 1}
                    </span>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide ${pastel.badge}`}
                    >
                      {doc.category}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-foreground font-heading leading-snug">
                      {doc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {doc.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Metadata & Action */}
                <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-muted-foreground font-medium">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{doc.year}</span>
                    <span>•</span>
                    <span className="font-mono text-[11px]">{doc.fileType} ({doc.fileSize})</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDownload(doc.id, doc.title)}
                    disabled={downloadingId === doc.id}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary hover:bg-muted text-foreground px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors disabled:opacity-50"
                  >
                    {downloadingId === doc.id ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-foreground" />
                        <span>Ready</span>
                      </>
                    ) : (
                      <>
                        <Download className="h-3.5 w-3.5" />
                        <span>Download</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredDocuments.length === 0 && (
          <div className="rounded-xl border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
            No official publications found matching &ldquo;{searchQuery}&rdquo;.
          </div>
        )}
      </section>

      {/* 3. HISTORICAL MILESTONES & ARCHIVES */}
      <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2 border-b border-border pb-6">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-pastel-amber-border bg-pastel-amber/60 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-pastel-amber-fg font-heading">
            Historical Photographic Registry
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-heading">
            Mission Field Milestones (2001 — Present)
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Major community relief interventions and building dedications catalogued from the diocese archives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {archiveMilestones.map((milestone, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border bg-card p-7 shadow-2xs flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider ${getMilestonePastel(
                      idx
                    )}`}
                  >
                    {milestone.period}
                  </span>
                  <span className="text-xs text-muted-foreground uppercase font-medium">
                    {milestone.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground font-heading leading-snug">
                  {milestone.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-border">
                  <span className="text-xs font-semibold text-foreground uppercase tracking-wider block">
                    Documented Actions:
                  </span>
                  {milestone.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                      <span className="text-foreground/60">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-xs text-muted-foreground border-t border-border/60">
                Catalogued in Diocese Archives • Ludhiana
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
