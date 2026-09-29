"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { bishopProfile } from "@/data/leadership";
import { beliefsData, visionPillars } from "@/data/beliefs";

export default function AboutPage() {
  const [openBeliefId, setOpenBeliefId] = React.useState<string | null>(beliefsData[0].id);

  const toggleBelief = (id: string) => {
    setOpenBeliefId(openBeliefId === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-24">
      {/* 1. MODERN CLASSICAL HEADER */}
      <section className="border-b border-border bg-pastel-cream/50">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-12 sm:py-24 space-y-6">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 rounded-2xl sm:rounded-full border border-pastel-lavender-border bg-pastel-lavender/60 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-pastel-lavender-fg max-w-full">
            <span>Diocese History</span>
            <span className="opacity-60">•</span>
            <span>Episcopal Calling</span>
            <span className="opacity-60">•</span>
            <span>Confession of Faith</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-heading break-words">
            Origins, Leadership &amp; Doctrine
          </h1>

          <p className="max-w-3xl text-sm sm:text-lg text-muted-foreground leading-relaxed font-sans">
            The history, pioneering journey, and evangelical doctrinal convictions of Tabernacle of Grace
            Ministries Diocese in Punjab, India.
          </p>
        </div>
      </section>

      {/* 2. DIOCESE FOUNDATIONS & 7 VISION MANDATES */}
      <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Mission History */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-pastel-sage-border bg-pastel-sage/60 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-pastel-sage-fg font-heading">
              Ecclesiastical Foundations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-foreground">
              A Mission of Faith, Preaching in Word and Deed
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                Tabernacle of Grace Ministries is an evangelical, indigenous missionary organization
                registered with the Government of Punjab state in India. Founded to glorify God,
                we proclaim the Good News, establish local churches, nurture orphaned children,
                and equip native pastors across North India.
              </p>
              <p>
                In 2001, Bishop Paul Tamilarasan and his family stepped out in faith, relocating north
                from Tamil Nadu to Punjab. Over the last 24 years, God has opened doors in unreached
                villages and towns, allowing us to establish over 24 worshipping fellowships, operate
                Grace Children&apos;s Home, and run daily slum care centers.
              </p>
            </div>

            <div className="rounded-xl border border-pastel-sky-border bg-pastel-sky/30 p-6 space-y-2">
              <h3 className="font-bold text-foreground text-sm font-heading">
                Governance & Non-Profit Registration
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Registered under the Punjab State Government. All regional missions, orphan boarding homes,
                and pastoral networks adhere to strict non-profit standards and Christian accountability.
              </p>
            </div>
          </div>

          {/* Right Column: 7 Vision Mandates */}
          <div className="lg:col-span-6 space-y-6" id="vision">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-pastel-amber-border bg-pastel-amber/60 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-pastel-amber-fg font-heading">
              Seven Vision Mandates
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-foreground">
              The Seven Pillars of Our Calling
            </h2>
            <div className="rounded-xl border border-border divide-y divide-border bg-card shadow-2xs overflow-hidden">
              {visionPillars.map((pillar, idx) => (
                <div key={idx} className="p-4 sm:p-5 flex items-start gap-4">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full border border-pastel-sage-border bg-pastel-sage/50 text-[11px] font-bold text-pastel-sage-fg shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <p className="text-sm font-medium text-foreground leading-relaxed">
                    {pillar}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. BISHOP PAUL TAMILARASAN BIOGRAPHY & TESTIMONY */}
      <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-36">
        <div className="rounded-xl border border-border bg-card shadow-2xs">
          {/* Header Banner with Out-of-Box Founder Portrait */}
          <div className="relative border-b border-border bg-pastel-cream/50 rounded-t-xl px-4 sm:px-12 pt-6 sm:pt-10 pb-0">
            <div className="flex flex-row items-end justify-between gap-3 sm:gap-8">
              {/* Left Column: Heading and Details */}
              <div className="flex-1 min-w-0 space-y-2 sm:space-y-4 py-4 sm:py-6 md:pb-12 max-w-xl lg:max-w-2xl self-center md:self-end">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-pastel-amber-border bg-pastel-amber/60 px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-pastel-amber-fg font-heading">
                  Episcopal Profile
                </span>
                <h2 className="text-xl sm:text-4xl lg:text-5xl font-bold font-heading text-foreground leading-tight">
                  {bishopProfile.name}
                </h2>
                <p className="text-xs sm:text-base text-muted-foreground font-medium leading-snug">
                  Founder &amp; Presiding Bishop • Tabernacle of Grace Ministries Diocese
                </p>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1 sm:gap-4 text-[11px] sm:text-xs text-muted-foreground pt-1">
                  <div><span className="font-semibold text-foreground">Born:</span> May 21, 1975 (Namakkal, Tamil Nadu)</div>
                  <div className="hidden sm:inline">•</div>
                  <div><span className="font-semibold text-foreground">Ministry in Punjab:</span> 2001 to Present (24+ yrs)</div>
                </div>
              </div>

              {/* Right Column: Founder Portrait Popping Out of the Box (Large & Half Outside) */}
              <div className="relative shrink-0 w-44 sm:w-80 md:w-96 lg:w-[410px] xl:w-[460px] self-end -mt-20 sm:-mt-28 md:-mt-36 lg:-mt-44 xl:-mt-52 z-20 pointer-events-none">
                <div className="relative h-72 sm:h-88 md:h-[430px] lg:h-[490px] xl:h-[530px] w-full">
                  <Image
                    src="/images/about/founder_img.png"
                    alt="Bishop Paul Tamilarasan - Founder & Presiding Bishop"
                    fill
                    sizes="(max-width: 640px) 200px, (max-width: 768px) 320px, (max-width: 1024px) 410px, 460px"
                    className="object-contain object-bottom drop-shadow-2xl -scale-x-100"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Testimony Grid */}
          <div className="p-4 sm:p-12 space-y-10">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-heading">
                Personal Conversion & Testimony
              </span>
              <h3 className="text-2xl font-bold font-heading text-foreground">
                Surrendering Engineering for the Northern Mission
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bishopProfile.testimony.map((block, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="font-bold text-base text-foreground font-heading flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-pastel-amber-fg" />
                    {block.heading}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {block.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Milestones Chronology */}
            <div className="pt-8 border-t border-border space-y-6">
              <h4 className="font-bold text-lg text-foreground font-heading">
                Chronological Milestones (1975 — Present)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {bishopProfile.timeline.map((event, index) => (
                  <div key={index} className="p-5 rounded-xl border border-border bg-card shadow-2xs space-y-2 hover:border-pastel-sky-border transition-colors">
                    <span className="inline-flex items-center rounded-full border border-pastel-sky-border bg-pastel-sky/60 px-2.5 py-0.5 text-xs font-bold text-pastel-sky-fg">
                      {event.year}
                    </span>
                    <div className="font-bold text-sm text-foreground font-heading">
                      {event.title}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Family Note */}
            <div className="rounded-2xl border border-pastel-rose-border bg-pastel-rose/25 p-4 sm:p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
                {/* Family Portrait */}
                <div className="relative shrink-0 w-48 sm:w-56 md:w-64 aspect-[480/575] rounded-xl overflow-hidden border border-pastel-rose-border/80 shadow-md bg-muted/20 transition-all duration-300 hover:shadow-lg hover:border-pastel-rose-border hover:-translate-y-1">
                  <Image
                    src="/images/about/Tamilarasan Family.jpeg"
                    alt="The Tamilarasan Family - Bishop Paul, Mrs. Beulah, Jubaldevaprasad, and Helen Priscilla"
                    fill
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Family Details & Message */}
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <div className="space-y-1.5">
                    <h4 className="text-2xl sm:text-3xl font-bold text-foreground font-heading">
                      The Tamilarasan Family
                    </h4>
                    <p className="text-sm text-foreground/80 font-medium">
                      Serving together across Punjab in church planting, pastoral training &amp; holistic care
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The Lord has blessed Bishop Paul and Mrs. Beulah Tamilarasan with their son Jubaldevaprasad and daughter Helen Priscilla. Together as a family, they are passionately devoted to full-time gospel work across North India—shepherding church planting initiatives, overseeing 24 churches under diocesan care in Punjab, directing children’s and orphan ministries, empowering native pastors through the Pastors Equip Network, and physically helping the poor and needy through practical relief and benevolent outreach.
                  </p>

                  {/* Ministry Focus Badges */}
                  <div className="flex flex-wrap gap-2 pt-1 justify-center md:justify-start">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-pastel-rose-border bg-card px-2.5 py-1 text-xs font-medium text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-pastel-rose-fg" />
                      24 Churches Supervised
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-pastel-rose-border bg-card px-2.5 py-1 text-xs font-medium text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-pastel-rose-fg" />
                      Children&apos;s Ministry &amp; Grace Home
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-pastel-rose-border bg-card px-2.5 py-1 text-xs font-medium text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-pastel-rose-fg" />
                      Pastors Equip Network
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-pastel-rose-border bg-card px-2.5 py-1 text-xs font-medium text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-pastel-rose-fg" />
                      Aid for the Poor &amp; Needy
                    </span>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                    <Link
                      href="/get-involved#contact"
                      className="inline-flex items-center gap-2 rounded-lg border border-pastel-rose-border bg-pastel-rose hover:bg-pastel-rose/80 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-pastel-rose-fg shadow-2xs transition-colors"
                    >
                      Send Pastoral Greeting
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATEMENT OF FAITH (WHAT WE BELIEVE) */}
      <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-10" id="beliefs">
        <div className="space-y-2 border-b border-border pb-6">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-pastel-lavender-border bg-pastel-lavender/60 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-pastel-lavender-fg font-heading">
            Doctrinal Articles
          </span>
          <h2 className="text-3xl font-bold font-heading text-foreground">
            What We Believe (Statement of Faith)
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Our eight foundational articles of evangelical doctrine and scriptural authority.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {beliefsData.map((belief, idx) => {
            const isOpen = openBeliefId === belief.id;
            return (
              <div
                key={belief.id}
                className={`rounded-xl border transition-all shadow-2xs bg-card overflow-hidden ${
                  isOpen ? "border-pastel-lavender-border shadow-xs" : "border-border hover:border-foreground/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleBelief(belief.id)}
                  className="w-full p-5 text-left flex items-start justify-between gap-4 hover:bg-muted/15 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full border border-pastel-lavender-border bg-pastel-lavender/50 text-[11px] font-bold text-pastel-lavender-fg shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <div className="space-y-0.5">
                      <h3 className="font-bold text-base text-foreground font-heading">
                        {belief.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {belief.summary}
                      </p>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    {isOpen ? "[-]" : "[+]"}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-3 border-t border-border bg-pastel-lavender/30 space-y-3 text-xs text-muted-foreground leading-relaxed">
                    <p>{belief.details}</p>
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="font-bold text-foreground uppercase tracking-wider text-[10px]">
                        Scriptures:
                      </span>
                      {belief.scriptures.map((verse, vIdx) => (
                        <span
                          key={vIdx}
                          className="rounded-md border border-pastel-lavender-border bg-card px-2.5 py-0.5 font-mono text-[10px] font-semibold text-pastel-lavender-fg"
                        >
                          {verse}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
