"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  ZoomIn,
  Download,
  MapPin,
  Camera,
} from "lucide-react";
import { ministriesData, MinistryImage } from "@/data/ministries";

interface LightboxState {
  pillarTitle: string;
  images: MinistryImage[];
  currentIndex: number;
}

export default function MinistriesPage() {
  const [selectedTag, setSelectedTag] = React.useState<string>("All");
  const [lightbox, setLightbox] = React.useState<LightboxState | null>(null);
  const [isZoomed, setIsZoomed] = React.useState<boolean>(false);

  // Carousel ref map for smooth horizontal scrolling
  const carouselRefs = React.useRef<Record<string, HTMLDivElement | null>>({});

  const filterTags = ["All", "Church Planting", "Compassion", "Community Care", "Empowerment", "Education"];

  const filteredMinistries = ministriesData.filter((m) => {
    if (selectedTag === "All") return true;
    return (
      m.badge.toLowerCase().includes(selectedTag.toLowerCase()) ||
      m.title.toLowerCase().includes(selectedTag.toLowerCase())
    );
  });

  const getPastelForDivision = (idx: number) => {
    const list = [
      {
        topBorder: "border-t-2 border-t-pastel-sage-border",
        badge: "bg-pastel-sage/60 border-pastel-sage-border text-pastel-sage-fg",
        box: "bg-pastel-sage/35 border-pastel-sage-border",
        statColor: "text-pastel-sage-fg",
        glow: "hover:border-pastel-sage-border",
      },
      {
        topBorder: "border-t-2 border-t-pastel-rose-border",
        badge: "bg-pastel-rose/60 border-pastel-rose-border text-pastel-rose-fg",
        box: "bg-pastel-rose/35 border-pastel-rose-border",
        statColor: "text-pastel-rose-fg",
        glow: "hover:border-pastel-rose-border",
      },
      {
        topBorder: "border-t-2 border-t-pastel-amber-border",
        badge: "bg-pastel-amber/60 border-pastel-amber-border text-pastel-amber-fg",
        box: "bg-pastel-amber/35 border-pastel-amber-border",
        statColor: "text-pastel-amber-fg",
        glow: "hover:border-pastel-amber-border",
      },
      {
        topBorder: "border-t-2 border-t-pastel-lavender-border",
        badge: "bg-pastel-lavender/60 border-pastel-lavender-border text-pastel-lavender-fg",
        box: "bg-pastel-lavender/35 border-pastel-lavender-border",
        statColor: "text-pastel-lavender-fg",
        glow: "hover:border-pastel-lavender-border",
      },
      {
        topBorder: "border-t-2 border-t-pastel-sky-border",
        badge: "bg-pastel-sky/60 border-pastel-sky-border text-pastel-sky-fg",
        box: "bg-pastel-sky/35 border-pastel-sky-border",
        statColor: "text-pastel-sky-fg",
        glow: "hover:border-pastel-sky-border",
      },
    ];
    return list[idx % list.length];
  };

  // Carousel scroll handler
  const scrollCarousel = (id: string, direction: "left" | "right") => {
    const el = carouselRefs.current[id];
    if (!el) return;
    const scrollAmount = 340;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Lightbox handlers
  const openLightbox = (pillarTitle: string, images: MinistryImage[], index: number) => {
    setLightbox({ pillarTitle, images, currentIndex: index });
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setLightbox(null);
    setIsZoomed(false);
  };

  const nextImage = React.useCallback(() => {
    if (!lightbox) return;
    setLightbox((prev) => {
      if (!prev) return null;
      const nextIdx = prev.currentIndex < prev.images.length - 1 ? prev.currentIndex + 1 : 0;
      return { ...prev, currentIndex: nextIdx };
    });
    setIsZoomed(false);
  }, [lightbox]);

  const prevImage = React.useCallback(() => {
    if (!lightbox) return;
    setLightbox((prev) => {
      if (!prev) return null;
      const prevIdx = prev.currentIndex > 0 ? prev.currentIndex - 1 : prev.images.length - 1;
      return { ...prev, currentIndex: prevIdx };
    });
    setIsZoomed(false);
  }, [lightbox]);

  // Keyboard navigation & body scroll locking for lightbox
  React.useEffect(() => {
    if (!lightbox) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox, nextImage, prevImage]);

  const currentImage = lightbox ? lightbox.images[lightbox.currentIndex] : null;

  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-24 w-full min-w-0 max-w-full">
      {/* 1. MODERN CLASSICAL HEADER */}
      <section className="border-b border-border bg-pastel-cream/50 w-full min-w-0">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-12 sm:py-24 space-y-6 min-w-0">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 rounded-2xl sm:rounded-full border border-pastel-sage-border bg-pastel-sage/60 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-pastel-sage-fg max-w-full">
            <span>Frontline Ministries</span>
            <span className="opacity-60">•</span>
            <span>State of Punjab</span>
            <span className="opacity-60">•</span>
            <span>Five Divisions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-heading break-words">
            Strategic Pillars of Ministry
          </h1>

          <p className="max-w-3xl text-sm sm:text-lg text-muted-foreground leading-relaxed font-sans">
            Consolidating church planting across unreached rural villages, residential care for orphans,
            interventions in migrant labor settlements, and equipping indigenous Christian leaders.
          </p>
        </div>
      </section>

      {/* 2. MINISTRIES CONTENT SECTIONS */}
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 min-w-0">
        {/* Pastel Filter Buttons - Smoothly Scrollable on Mobile, Wrapped on Desktop */}
        <div className="w-full min-w-0 border-b border-border pb-4 sm:pb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none sm:flex-wrap">
            {filterTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`shrink-0 rounded-md border px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                  selectedTag === tag
                    ? "border-pastel-sage-border bg-pastel-sage text-pastel-sage-fg shadow-2xs"
                    : "border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted/40"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Divided Division Cards with Pastel Accents */}
        <div className="space-y-10">
          {filteredMinistries.map((ministry, idx) => {
            const pastel = getPastelForDivision(idx);
            const hasImages = ministry.galleryImages && ministry.galleryImages.length > 0;

            return (
              <div
                key={ministry.id}
                id={ministry.id}
                className={`scroll-mt-28 rounded-xl border border-border bg-card p-4 sm:p-10 lg:p-12 shadow-2xs hover:shadow-xs transition-all min-w-0 overflow-hidden ${pastel.topBorder}`}
              >
                {/* Upper: Narrative + Support Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left: Narrative & Directives */}
                  <div className="lg:col-span-8 space-y-6">
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wider ${pastel.badge}`}
                      >
                        {ministry.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-foreground">
                      {ministry.title}
                    </h2>

                    <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {ministry.fullDesc.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>

                    <div className="pt-2">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-foreground font-heading mb-3">
                        Field Directives & Operations
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {ministry.keyInitiatives.map((init, iIdx) => (
                          <div
                            key={iIdx}
                            className="flex items-start gap-2.5 rounded-lg border border-border bg-muted/15 p-3 text-xs sm:text-sm font-medium text-foreground"
                          >
                            <CheckCircle2 className="h-4 w-4 text-pastel-sage-fg shrink-0 mt-0.5" />
                            <span>{init}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Impact Benchmark & Sponsorship */}
                  <div className="lg:col-span-4 flex flex-col gap-6">
                    <div className={`rounded-xl border p-4 sm:p-6 space-y-2 ${pastel.box}`}>
                      <div className={`text-3xl sm:text-4xl font-extrabold font-heading ${pastel.statColor}`}>
                        {ministry.impactStat.number}
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">
                        {ministry.impactStat.label}
                      </div>
                    </div>

                    <div className="rounded-xl border border-border bg-card p-4 sm:p-6 space-y-4 shadow-2xs">
                      <h3 className="font-bold text-sm text-foreground font-heading">
                        {ministry.id === "bible-college" ? "Admissions & Enrollment" : "Support This Pillar"}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {ministry.id === "bible-college"
                          ? "Admissions are currently open for C.Th, D.Th, and B.Th programs with affordable tuition. Connect with Dean Rev. Joshua Karthick (+91 8595246679) or email admissions."
                          : "Your recurring or one-time contribution directly fuels field missionaries, children's supplies, and local church planting in Punjab."}
                      </p>
                      <Link
                        href={
                          ministry.id === "bible-college"
                            ? "mailto:logosbible07@gmail.com?subject=Logos%20Bible%20College%20Admission%20Inquiry"
                            : "/get-involved"
                        }
                        className="block text-center rounded-md border border-pastel-amber-border bg-pastel-amber hover:bg-pastel-amber/80 text-pastel-amber-fg py-2.5 text-xs font-bold uppercase tracking-wider transition-all shadow-2xs"
                      >
                        {ministry.id === "bible-college" ? "Apply for Admission" : "Sponsor or Donate"}
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Lower: Side-scroll Field Photography Carousel */}
                {hasImages && (
                  <div className="mt-8 pt-8 border-t border-border/70 space-y-4 min-w-0 max-w-full">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 min-w-0">
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-foreground font-heading">
                          <Camera className="h-4 w-4 text-muted-foreground shrink-0" />
                          <span>Field Documentation & Photography</span>
                        </div>
                        <span
                          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold font-mono ${pastel.badge}`}
                        >
                          {ministry.galleryImages.length}{" "}
                          {ministry.galleryImages.length === 1 ? "Photograph" : "Photographs"}
                        </span>
                      </div>

                      {/* Directional Scroll Buttons */}
                      {ministry.galleryImages.length > 1 && (
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => scrollCarousel(ministry.id, "left")}
                            className="rounded-md border border-border bg-card p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all shadow-2xs"
                            aria-label="Scroll left"
                            title="Scroll left"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => scrollCarousel(ministry.id, "right")}
                            className="rounded-md border border-border bg-card p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all shadow-2xs"
                            aria-label="Scroll right"
                            title="Scroll right"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Sidescroll Track */}
                    <div
                      ref={(el) => {
                        carouselRefs.current[ministry.id] = el;
                      }}
                      className="flex gap-3 sm:gap-4 overflow-x-auto pb-3 pt-1 snap-x scroll-smooth w-full min-w-0 max-w-full touch-pan-x scrollbar-thin"
                    >
                      {ministry.galleryImages.map((image, imgIdx) => (
                        <div
                          key={image.id}
                          onClick={() => openLightbox(ministry.title, ministry.galleryImages, imgIdx)}
                          className={`w-[240px] sm:w-[310px] shrink-0 snap-start rounded-xl border border-border bg-card overflow-hidden shadow-2xs hover:shadow-md cursor-pointer group transition-all duration-300 ${pastel.glow}`}
                        >
                          {/* Image Container */}
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                            <Image
                              src={image.src}
                              alt={image.title}
                              fill
                              unoptimized={image.src.endsWith(".gif")}
                              sizes="(max-width: 640px) 240px, 310px"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Counter pill */}
                            <div className="absolute top-2.5 right-2.5 rounded bg-black/60 px-2 py-0.5 text-[10px] text-white font-mono backdrop-blur-xs">
                              {imgIdx + 1}/{ministry.galleryImages.length}
                            </div>
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3.5">
                              <span className="text-[11px] font-medium text-white flex items-center gap-1.5">
                                <Maximize2 className="h-3.5 w-3.5" />
                                <span>Expand Photo</span>
                              </span>
                            </div>
                          </div>

                          {/* Card Caption Info */}
                          <div className="p-3.5 space-y-1">
                            {image.location && (
                              <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                                <MapPin className="h-3 w-3 shrink-0" />
                                <span className="truncate">{image.location}</span>
                              </div>
                            )}
                            <h4 className="font-bold text-xs sm:text-sm text-foreground font-heading truncate">
                              {image.title}
                            </h4>
                            {image.caption && (
                              <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">
                                {image.caption}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. SHORT-TERM MISSIONS VOLUNTEER BANNER */}
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="rounded-xl border border-pastel-sky-border bg-pastel-sky/30 p-8 sm:p-12 shadow-2xs">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-pastel-sky-border bg-pastel-sky/60 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-pastel-sky-fg font-heading">
              Field Service Opportunities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-foreground">
              Participate in a Mission Outreach to Punjab
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We welcome individuals, church delegations, and theological interns for short-term mission
              expeditions ranging from one week to two years. Experience hands-on cross-cultural ministry
              and village discipleship.
            </p>
            <div className="pt-2">
              <Link
                href="/get-involved#contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground hover:underline"
              >
                <span>Submit Inquiry for Field Service</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FULLSCREEN HIGH-RES LIGHTBOX MODAL */}
      {lightbox && currentImage && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 text-white backdrop-blur-md animate-in fade-in duration-200">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-white/10 bg-black/40">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-white/15 px-3 py-0.5 text-xs font-medium font-mono">
                {lightbox.currentIndex + 1} of {lightbox.images.length}
              </span>
              <span className="text-xs text-white/90 font-semibold font-heading truncate max-w-[200px] sm:max-w-md">
                {lightbox.pillarTitle}
              </span>
              {currentImage.location && (
                <span className="hidden sm:inline-flex items-center gap-1 text-xs text-white/60">
                  <span>•</span>
                  <MapPin className="h-3 w-3" />
                  <span>{currentImage.location}</span>
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsZoomed(!isZoomed)}
                className="rounded-lg p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                title="Toggle Zoom"
                aria-label="Toggle Zoom"
              >
                <ZoomIn className="h-5 w-5" />
              </button>
              <a
                href={currentImage.src}
                target="_blank"
                rel="noreferrer"
                download
                className="rounded-lg p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                title="Direct High-Res Link"
                aria-label="Download image"
              >
                <Download className="h-5 w-5" />
              </a>
              <button
                type="button"
                onClick={closeLightbox}
                className="rounded-lg p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                title="Close Lightbox (Esc)"
                aria-label="Close Lightbox"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Main Stage with Navigation Arrows */}
          <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden select-none">
            {/* Prev Button */}
            {lightbox.images.length > 1 && (
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-4 sm:left-8 z-10 rounded-full bg-black/60 p-3 text-white/90 hover:text-white hover:bg-black/90 transition-all border border-white/15 shadow-lg"
                title="Previous Photo (Left Arrow)"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {/* Main Image */}
            <div
              className={`relative max-w-5xl max-h-[70vh] w-full h-full flex items-center justify-center transition-transform duration-300 ${
                isZoomed ? "scale-125 cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <Image
                src={currentImage.src}
                alt={currentImage.title}
                fill
                priority
                unoptimized={currentImage.src.endsWith(".gif")}
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            {/* Next Button */}
            {lightbox.images.length > 1 && (
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-4 sm:right-8 z-10 rounded-full bg-black/60 p-3 text-white/90 hover:text-white hover:bg-black/90 transition-all border border-white/15 shadow-lg"
                title="Next Photo (Right Arrow)"
                aria-label="Next Photo"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>

          {/* Bottom Bar: Title, Caption & Thumbnail Drawer */}
          <div className="border-t border-white/10 bg-black/60 px-4 sm:px-8 py-4 space-y-3">
            <div className="max-w-3xl space-y-1">
              <h3 className="text-base font-bold text-white font-heading">
                {currentImage.title}
              </h3>
              {currentImage.caption && (
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {currentImage.caption}
                </p>
              )}
            </div>

            {/* Thumbnail Strip for Multi-Image Galleries */}
            {lightbox.images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-thin">
                {lightbox.images.map((thumb, tIdx) => (
                  <button
                    key={thumb.id}
                    type="button"
                    onClick={() => {
                      setLightbox({ ...lightbox, currentIndex: tIdx });
                      setIsZoomed(false);
                    }}
                    className={`relative h-12 w-16 sm:h-14 sm:w-20 shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                      tIdx === lightbox.currentIndex
                        ? "border-white ring-2 ring-white/30 scale-105"
                        : "border-white/20 opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={thumb.src}
                      alt={thumb.title}
                      fill
                      unoptimized={thumb.src.endsWith(".gif")}
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
