"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  MapPin,
  Folder,
  LayoutGrid,
  Sparkles,
  Columns,
  Download,
  Info,
  SlidersHorizontal,
  ArrowUpRight,
  ZoomIn,
} from "lucide-react";
import { galleryData, GalleryImage, GallerySubsection } from "@/data/gallery";

type ViewMode = "grid" | "showcase" | "carousel";

// Pastel styling helper
const getAccentStyles = (accent: GallerySubsection["accent"]) => {
  switch (accent) {
    case "amber":
      return {
        badge: "bg-pastel-amber/60 text-pastel-amber-fg border-pastel-amber-border",
        borderTop: "border-t-2 border-t-pastel-amber-border",
        activeBtn: "border-pastel-amber-border bg-pastel-amber text-pastel-amber-fg shadow-2xs",
        dot: "bg-pastel-amber-fg",
        glow: "group-hover:border-pastel-amber-border",
      };
    case "sage":
      return {
        badge: "bg-pastel-sage/60 text-pastel-sage-fg border-pastel-sage-border",
        borderTop: "border-t-2 border-t-pastel-sage-border",
        activeBtn: "border-pastel-sage-border bg-pastel-sage text-pastel-sage-fg shadow-2xs",
        dot: "bg-pastel-sage-fg",
        glow: "group-hover:border-pastel-sage-border",
      };
    case "sky":
      return {
        badge: "bg-pastel-sky/60 text-pastel-sky-fg border-pastel-sky-border",
        borderTop: "border-t-2 border-t-pastel-sky-border",
        activeBtn: "border-pastel-sky-border bg-pastel-sky text-pastel-sky-fg shadow-2xs",
        dot: "bg-pastel-sky-fg",
        glow: "group-hover:border-pastel-sky-border",
      };
    case "lavender":
      return {
        badge: "bg-pastel-lavender/60 text-pastel-lavender-fg border-pastel-lavender-border",
        borderTop: "border-t-2 border-t-pastel-lavender-border",
        activeBtn: "border-pastel-lavender-border bg-pastel-lavender text-pastel-lavender-fg shadow-2xs",
        dot: "bg-pastel-lavender-fg",
        glow: "group-hover:border-pastel-lavender-border",
      };
  }
};

interface MobileSectionCarouselProps {
  section: GallerySubsection;
  styles: ReturnType<typeof getAccentStyles>;
  openLightbox: (sectionId: string, index: number) => void;
}

function MobileSectionCarousel({
  section,
  styles,
  openLightbox,
}: MobileSectionCarouselProps) {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleScroll = React.useCallback(() => {
    if (!scrollContainerRef.current) return;
    const el = scrollContainerRef.current;
    const card = el.firstElementChild as HTMLElement | null;
    if (!card) return;
    const cardWidth = card.offsetWidth + 14; // card width + 14px gap (gap-3.5)
    const newIndex = Math.round(el.scrollLeft / cardWidth);
    const clampedIndex = Math.max(0, Math.min(newIndex, section.images.length - 1));
    setActiveIndex(clampedIndex);
  }, [section.images.length]);

  const scrollToImage = (index: number) => {
    if (!scrollContainerRef.current) return;
    const el = scrollContainerRef.current;
    const card = el.firstElementChild as HTMLElement | null;
    if (!card) return;
    const cardWidth = card.offsetWidth + 14;
    el.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToImage(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < section.images.length - 1) {
      scrollToImage(activeIndex + 1);
    }
  };

  return (
    <div className="space-y-3 w-full min-w-0 max-w-full">
      {/* Mobile Carousel Control Bar */}
      <div className="flex items-center justify-between px-0.5">
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${styles.badge}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
            <span>
              Photo {activeIndex + 1} of {section.images.length}
            </span>
          </span>
          <span className="text-[11px] text-muted-foreground font-medium flex items-center gap-1">
            <span>Swipe side-to-side</span>
            <span className="text-xs">→</span>
          </span>
        </div>

        {/* Prev / Next Arrows */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous photo"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-2xs transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted active:scale-95"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={activeIndex === section.images.length - 1}
            aria-label="Next photo"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-2xs transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted active:scale-95"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Side-Scrollable Track (Strictly within page padding) */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 pt-1 w-full min-w-0 max-w-full overscroll-x-contain touch-pan-x scrollbar-none"
      >
        {section.images.map((image, idx) => (
          <div
            key={image.id}
            onClick={() => openLightbox(section.id, idx)}
            className={`w-[78vw] sm:w-[300px] max-w-[320px] shrink-0 snap-start rounded-xl border border-border bg-card overflow-hidden shadow-2xs hover:shadow-md cursor-pointer transition-all active:scale-[0.99] ${styles.glow}`}
          >
            {/* Image Box */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 640px) 82vw, 320px"
                className="object-cover"
              />
              {/* Bottom gradient overlay with expand hint */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end justify-between p-3 text-white">
                <span className="text-[11px] font-medium flex items-center gap-1 text-white/90">
                  <Maximize2 className="h-3 w-3" />
                  Tap to expand
                </span>
                <span className="text-[10px] font-mono text-white/90 bg-black/50 px-1.5 py-0.5 rounded backdrop-blur-xs">
                  #{idx + 1}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-3.5 space-y-1.5">
              <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                <span>{image.date}</span>
                <span className="truncate max-w-[130px]">{image.location}</span>
              </div>
              <h3 className="font-bold text-sm text-foreground font-heading line-clamp-1">
                {image.title}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                {image.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Dots Track */}
      {section.images.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 pt-1">
          {section.images.map((img, dotIdx) => (
            <button
              key={img.id}
              type="button"
              onClick={() => scrollToImage(dotIdx)}
              aria-label={`Jump to photo ${dotIdx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dotIdx === activeIndex
                  ? `w-6 ${styles.dot}`
                  : "w-1.5 bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function GalleryPage() {
  const [selectedSection, setSelectedSection] = React.useState<string>("all");
  const [viewMode, setViewMode] = React.useState<ViewMode>("grid");
  const [activeImageIndex, setActiveImageIndex] = React.useState<number | null>(null);
  const [activeSectionId, setActiveSectionId] = React.useState<string | null>(null);
  const [isZoomed, setIsZoomed] = React.useState<boolean>(false);

  // Flattened images for modal navigation
  const allImages = React.useMemo(() => {
    return galleryData.flatMap((section) => section.images);
  }, []);

  // Filtered subsections based on active collection
  const filteredSubsections = React.useMemo(() => {
    return galleryData.filter((section) => {
      if (selectedSection === "all") return true;
      return section.id === selectedSection;
    });
  }, [selectedSection]);

  // Current active image object for lightbox
  const currentModalImage = React.useMemo(() => {
    if (activeImageIndex === null || !activeSectionId) return null;
    const targetSection = galleryData.find((s) => s.id === activeSectionId);
    if (!targetSection) return null;
    return targetSection.images[activeImageIndex] || null;
  }, [activeImageIndex, activeSectionId]);

  // Total count of matching images
  const totalVisibleImages = React.useMemo(() => {
    return filteredSubsections.reduce((acc, s) => acc + s.images.length, 0);
  }, [filteredSubsections]);

  // Lightbox handlers
  const openLightbox = (sectionId: string, index: number) => {
    setActiveSectionId(sectionId);
    setActiveImageIndex(index);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
    setActiveSectionId(null);
    setIsZoomed(false);
  };

  const nextImage = React.useCallback(() => {
    if (activeSectionId === null || activeImageIndex === null) return;
    const targetSection = galleryData.find((s) => s.id === activeSectionId);
    if (!targetSection) return;
    setActiveImageIndex((prev) =>
      prev !== null && prev < targetSection.images.length - 1 ? prev + 1 : 0
    );
    setIsZoomed(false);
  }, [activeSectionId, activeImageIndex]);

  const prevImage = React.useCallback(() => {
    if (activeSectionId === null || activeImageIndex === null) return;
    const targetSection = galleryData.find((s) => s.id === activeSectionId);
    if (!targetSection) return;
    setActiveImageIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : targetSection.images.length - 1
    );
    setIsZoomed(false);
  }, [activeSectionId, activeImageIndex]);

  // Keyboard navigation for Lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, nextImage, prevImage]);


  return (
    <div className="flex flex-col gap-14 sm:gap-20 pb-24">
      {/* 1. MODERN INSTITUTIONAL HEADER */}
      <section className="border-b border-border bg-pastel-cream/50">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-6">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 rounded-2xl sm:rounded-full border border-pastel-amber-border bg-pastel-amber/60 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-pastel-amber-fg max-w-full">
            <span>Visual Chronicle</span>
            <span className="opacity-60">•</span>
            <span>Photographic Archives</span>
            <span className="opacity-60">•</span>
            <span>Diocese of Punjab</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-heading break-words">
                Diocese Visual Archives &amp; Field Records
              </h1>
              <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed font-sans">
                Authentic photographic documentation capturing church foundation consecrations,
                COVID-19 food relief operations, public health sanitization drives, and leadership
                fellowships across Punjab and North India.
              </p>
            </div>

            {/* Quick Metrics Badge */}
            <div className="grid grid-cols-3 divide-x divide-border rounded-xl border border-border bg-card p-3 sm:p-4 shadow-2xs w-full sm:w-auto shrink-0">
              <div className="px-3 sm:px-5 text-center flex flex-col items-center justify-center">
                <span className="block text-xl sm:text-2xl font-bold text-foreground font-heading tabular-nums">
                  {allImages.length}
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground font-medium whitespace-nowrap">
                  Photos
                </span>
              </div>
              <div className="px-3 sm:px-5 text-center flex flex-col items-center justify-center">
                <span className="block text-xl sm:text-2xl font-bold text-foreground font-heading tabular-nums">
                  {galleryData.length}
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground font-medium whitespace-nowrap">
                  Collections
                </span>
              </div>
              <div className="px-3 sm:px-5 text-center flex flex-col items-center justify-center">
                <span className="block text-xl sm:text-2xl font-bold text-foreground font-heading tabular-nums whitespace-nowrap">
                  2017–21
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground font-medium whitespace-nowrap">
                  Field Era
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REPOSITORY CONTROLS & SUBSECTION SELECTOR */}
      <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 w-full space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
          {/* Subsection Filters (Strictly inside page margins) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap scrollbar-none min-w-0 max-w-full">
            <button
              type="button"
              onClick={() => setSelectedSection("all")}
              className={`rounded-md border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider shrink-0 transition-all ${
                selectedSection === "all"
                  ? "border-foreground bg-foreground text-background shadow-2xs"
                  : "border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted/40"
              }`}
            >
              All Collections ({allImages.length})
            </button>

            {galleryData.map((section) => {
              const styles = getAccentStyles(section.accent);
              const isActive = selectedSection === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setSelectedSection(section.id)}
                  className={`rounded-md border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider shrink-0 transition-all ${
                    isActive
                      ? styles.activeBtn
                      : "border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  }`}
                >
                  <span className="inline-block mr-1.5 h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                  {section.title} ({section.images.length})
                </button>
              );
            })}
          </div>

          {/* View Mode Switcher (Visible on tablet & desktop) */}
          <div className="hidden sm:inline-flex rounded-lg border border-border bg-card p-1 text-xs shrink-0 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              title="Mosaic Grid View"
              className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 font-medium transition-colors ${
                viewMode === "grid"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Grid</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("showcase")}
              title="Editorial Showcase View"
              className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 font-medium transition-colors ${
                viewMode === "showcase"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Columns className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Showcase</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("carousel")}
              title="Slider View"
              className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 font-medium transition-colors ${
                viewMode === "carousel"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Carousel</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. GALLERY SUBSECTIONS */}
      <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 w-full space-y-12 sm:space-y-20">
        {filteredSubsections.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border p-14 text-center space-y-3">
            <p className="text-base font-semibold text-foreground font-heading">
              No photographic records found
            </p>
            <p className="text-xs text-muted-foreground">
              Reset the filter to view all collections.
            </p>
            <button
              type="button"
              onClick={() => setSelectedSection("all")}
              className="inline-flex rounded-md border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-muted"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredSubsections.map((section) => {
            const styles = getAccentStyles(section.accent);

            return (
              <div
                key={section.id}
                id={section.id}
                className="scroll-mt-28 space-y-5 sm:space-y-8"
              >
                {/* Subsection Header */}
                <div className={`rounded-xl border border-border bg-card p-4 sm:p-8 shadow-2xs space-y-3 sm:space-y-4 ${styles.borderTop}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 sm:px-3 py-0.5 text-xs font-semibold uppercase tracking-wider ${styles.badge}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
                        {section.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4 text-xs text-muted-foreground font-medium">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {section.period}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {section.location}
                      </span>

                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <h2 className="text-xl sm:text-3xl font-bold text-foreground font-heading tracking-tight">
                      {section.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-foreground max-w-3xl leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>

                {/* Mobile View: Dedicated Side-Scroll Carousel */}
                <div className="block sm:hidden w-full min-w-0 max-w-full overflow-hidden">
                  <MobileSectionCarousel
                    section={section}
                    styles={styles}
                    openLightbox={openLightbox}
                  />
                </div>

                {/* Desktop & Tablet View (sm: and up): Preserves User Selected ViewMode */}
                <div className="hidden sm:block">
                  {/* Sub-section Images by ViewMode */}
                  {viewMode === "grid" && (
                  /* Standard Masonry / Card Grid */
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {section.images.map((image, idx) => (
                      <div
                        key={image.id}
                        onClick={() => openLightbox(section.id, idx)}
                        className={`group relative rounded-xl border border-border bg-card overflow-hidden shadow-2xs transition-all duration-300 hover:shadow-md cursor-pointer ${styles.glow}`}
                      >
                        {/* Image Container with Aspect Ratio */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                          <Image
                            src={image.src}
                            alt={image.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {/* Hover Gradient Overlay with Quick Action */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3.5">
                            <span className="text-[11px] font-medium text-white flex items-center gap-1">
                              <Maximize2 className="h-3.5 w-3.5" />
                              View High-Res
                            </span>
                            <span className="text-[10px] font-mono text-white/80 bg-black/40 px-1.5 py-0.5 rounded backdrop-blur-xs">
                              #{idx + 1}
                            </span>
                          </div>
                        </div>

                        {/* Card Info */}
                        <div className="p-4 space-y-1.5">
                          <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                            <span>{image.date}</span>
                            <span className="truncate max-w-[120px]">{image.location}</span>
                          </div>
                          <h3 className="font-bold text-sm text-foreground font-heading line-clamp-1 group-hover:text-foreground">
                            {image.title}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                            {image.caption}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {viewMode === "showcase" && (
                  /* Editorial Showcase: Featured Hero Photo + Responsive Thumbnail Grid */
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Featured Hero Photo */}
                    <div
                      onClick={() => openLightbox(section.id, 0)}
                      className="lg:col-span-7 group relative rounded-2xl border border-border bg-card overflow-hidden shadow-xs cursor-pointer hover:border-foreground/30 transition-all"
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                        <Image
                          src={section.images[0].src}
                          alt={section.images[0].title}
                          fill
                          priority
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white space-y-2">
                          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/90">
                            <span className="rounded-full bg-white/20 px-2.5 py-0.5 backdrop-blur-sm">
                              Featured Archive Frame
                            </span>
                            <span>•</span>
                            <span>{section.images[0].date}</span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                            {section.images[0].title}
                          </h3>
                          <p className="text-xs sm:text-sm text-white/80 line-clamp-2 max-w-xl">
                            {section.images[0].caption}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Companion Thumbnails */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                      {section.images.slice(1).map((image, idx) => (
                        <div
                          key={image.id}
                          onClick={() => openLightbox(section.id, idx + 1)}
                          className="group relative rounded-xl border border-border bg-card overflow-hidden shadow-2xs cursor-pointer hover:border-foreground/40 transition-all"
                        >
                          <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                            <Image
                              src={image.src}
                              alt={image.title}
                              fill
                              sizes="(max-width: 640px) 50vw, 25vw"
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                              <Maximize2 className="h-5 w-5" />
                            </div>
                          </div>
                          <div className="p-2.5 space-y-1">
                            <p className="font-heading font-semibold text-xs text-foreground truncate">
                              {image.title}
                            </p>
                            <p className="text-[10px] text-muted-foreground truncate">
                              {image.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {viewMode === "carousel" && (
                  /* Horizontal Scrollable Carousel */
                  <div className="relative rounded-2xl border border-border bg-card/60 p-4 sm:p-6 min-w-0 overflow-hidden">
                    <div className="flex items-center justify-between pb-4 border-b border-border mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Interactive Filmstrip • Scroll horizontally
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">
                        {section.images.length} frames
                      </span>
                    </div>

                    <div className="flex gap-5 overflow-x-auto pb-4 pt-1 snap-x scrollbar-thin">
                      {section.images.map((image, idx) => (
                        <div
                          key={image.id}
                          onClick={() => openLightbox(section.id, idx)}
                          className="min-w-[280px] sm:min-w-[320px] max-w-[340px] shrink-0 snap-start rounded-xl border border-border bg-card overflow-hidden shadow-2xs hover:shadow-sm cursor-pointer group transition-all"
                        >
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                            <Image
                              src={image.src}
                              alt={image.title}
                              fill
                              sizes="340px"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-2 right-2 rounded bg-black/60 px-2 py-0.5 text-[10px] text-white font-mono backdrop-blur-xs">
                              {idx + 1}/{section.images.length}
                            </div>
                          </div>
                          <div className="p-4 space-y-1">
                            <span className="text-[11px] text-muted-foreground block">
                              {image.date} • {image.location}
                            </span>
                            <h4 className="font-bold text-sm text-foreground font-heading truncate">
                              {image.title}
                            </h4>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {image.caption}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                </div>
              </div>
            );
          })
        )}
      </section>

      {/* 4. CURATORIAL SUGGESTIONS SECTION (Architecture & Presentation Options) */}
      <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-2xl border border-border bg-pastel-cream/40 p-8 sm:p-12 space-y-8">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pastel-amber-border bg-pastel-amber/60 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-pastel-amber-fg">
              Recommendations & Options
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-heading">
              Curatorial Showcase Suggestions for Diocese Sub-Sections
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed">
              Based on church history and digital archiving best practices, here are recommended
              approaches for enhancing each sub-section&apos;s gallery experience:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-border bg-card p-6 space-y-3 shadow-2xs">
              <div className="inline-flex rounded-lg bg-pastel-amber/60 p-2.5 text-pastel-amber-fg border border-pastel-amber-border">
                <Columns className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-foreground font-heading">
                1. Before & After Transformation Slider
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                For <strong>Branch church foundation laying</strong>, pair the 2017 raw foundation excavation photos with completed church sanctuary photos using an interactive split-screen slider to visually prove project completion to donors.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 space-y-3 shadow-2xs">
              <div className="inline-flex rounded-lg bg-pastel-sage/60 p-2.5 text-pastel-sage-fg border border-pastel-sage-border">
                <Calendar className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-foreground font-heading">
                2. Chronological Field Timeline
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                For <strong>COVID-19 Relief & Sanitizer Drives</strong>, organize photos along an interactive timeline showing the emergency escalation from June 2021 (sanitizer/masks) to October 2021 (massive grain distribution drives).
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 space-y-3 shadow-2xs">
              <div className="inline-flex rounded-lg bg-pastel-sky/60 p-2.5 text-pastel-sky-fg border border-pastel-sky-border">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-foreground font-heading">
                3. Geotagged Punjab Mission Map
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Integrate an interactive SVG map of Punjab districts (Ludhiana, Jalandhar, Amritsar, Gurdaspur) where clicking a pinpoint filters the photo gallery to that regional field station.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CROSS-LINK TO DOCUMENTARY RESOURCES */}
      <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground font-heading">
              Seeking Certified Financial & Annual Reports?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Explore the official Diocese repository containing audited financial statements,
              monthly field newsletters, and theological doctrine guidelines.
            </p>
          </div>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-foreground text-background hover:bg-foreground/90 px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all shrink-0"
          >
            <span>View Official Repository</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 6. FULLSCREEN HIGH-RES LIGHTBOX MODAL */}
      {currentModalImage && activeSectionId && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 text-white backdrop-blur-md animate-in fade-in duration-200">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-white/10 bg-black/40">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-white/15 px-3 py-0.5 text-xs font-medium">
                Photo {activeImageIndex! + 1} of{" "}
                {galleryData.find((s) => s.id === activeSectionId)?.images.length}
              </span>
              <span className="hidden sm:inline text-xs text-white/60">
                {currentModalImage.date} • {currentModalImage.location}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsZoomed(!isZoomed)}
                className="rounded-lg p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                title="Toggle Zoom"
              >
                <ZoomIn className="h-5 w-5" />
              </button>
              <a
                href={currentModalImage.src}
                target="_blank"
                rel="noreferrer"
                download
                className="rounded-lg p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                title="Direct High-Res Link"
              >
                <Download className="h-5 w-5" />
              </a>
              <button
                type="button"
                onClick={closeLightbox}
                className="rounded-lg p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                title="Close Lightbox (Esc)"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Main Stage with Navigation Arrows */}
          <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden select-none">
            {/* Prev Button */}
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-4 sm:left-8 z-10 rounded-full bg-black/60 p-3 text-white/90 hover:text-white hover:bg-black/90 transition-all border border-white/15 shadow-lg"
              title="Previous Photo (Left Arrow)"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Main Image */}
            <div
              className={`relative max-w-5xl max-h-[70vh] w-full h-full flex items-center justify-center transition-transform duration-300 ${
                isZoomed ? "scale-125 cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <Image
                src={currentModalImage.src}
                alt={currentModalImage.title}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-4 sm:right-8 z-10 rounded-full bg-black/60 p-3 text-white/90 hover:text-white hover:bg-black/90 transition-all border border-white/15 shadow-lg"
              title="Next Photo (Right Arrow)"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Bottom Info & Thumbnail Drawer */}
          <div className="border-t border-white/10 bg-black/60 p-4 sm:px-8 space-y-3">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-base sm:text-lg font-bold font-heading text-white">
                  {currentModalImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/75">
                  {currentModalImage.caption}
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs text-white/50 block font-mono">
                  {galleryData.find((s) => s.id === activeSectionId)?.folderName}
                </span>
                <span className="text-xs text-white/80">
                  {currentModalImage.location}
                </span>
              </div>
            </div>

            {/* Bottom Thumbnail Strip */}
            <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 overflow-x-auto py-1 scrollbar-none">
              {galleryData
                .find((s) => s.id === activeSectionId)
                ?.images.map((thumb, idx) => (
                  <button
                    key={thumb.id}
                    type="button"
                    onClick={() => {
                      setActiveImageIndex(idx);
                      setIsZoomed(false);
                    }}
                    className={`relative h-12 w-16 shrink-0 rounded overflow-hidden border-2 transition-all ${
                      idx === activeImageIndex
                        ? "border-white scale-105 opacity-100"
                        : "border-transparent opacity-50 hover:opacity-80"
                    }`}
                  >
                    <Image
                      src={thumb.src}
                      alt={thumb.title}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
