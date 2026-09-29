import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Church,
  Heart,
  Users,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { bishopProfile } from "@/data/leadership";
import { ministriesData } from "@/data/ministries";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-24">
      {/* 1. MODERN CLASSICAL HERO SECTION WITH PASTEL PALETTE */}
      <section className="border-b border-border bg-pastel-cream/50">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-20 sm:py-28 space-y-10">
          {/* Institutional Pastel Eyebrow */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 rounded-2xl sm:rounded-full border border-pastel-sage-border bg-pastel-sage/60 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-pastel-sage-fg max-w-full">
            <span>Diocese of Punjab</span>
            <span className="opacity-60">•</span>
            <span>Evangelical Missionary Society</span>
            <span className="opacity-60">•</span>
            <span>Established 2001</span>
          </div>

          {/* Classical Headline */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground font-heading leading-[1.15] break-words">
              Loving, Liberating &amp; Life-Giving.
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed font-sans max-w-2xl">
              An indigenous Christian mission in Punjab dedicated to planting disciple-making churches,
              nurturing orphaned children, lifting migrant slum families, and equipping native pastors across North India.
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 rounded-md border border-pastel-amber-border bg-pastel-amber hover:bg-pastel-amber/90 px-4 sm:px-6 py-3 text-xs font-bold uppercase tracking-wider text-pastel-amber-fg transition-all shadow-2xs"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 sm:px-6 py-3 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-pastel-cream/50 transition-colors shadow-2xs"
            >
              <span>Diocese Foundations &amp; Testimony</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Key Impact Benchmarks (Pastel Card Matrix) */}
          <div className="pt-8 border-t border-border/80">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {siteConfig.stats.map((stat, i) => {
                const pastelStyles = [
                  "bg-pastel-sage/50 border-pastel-sage-border text-pastel-sage-fg",
                  "bg-pastel-sky/50 border-pastel-sky-border text-pastel-sky-fg",
                  "bg-pastel-rose/50 border-pastel-rose-border text-pastel-rose-fg",
                  "bg-pastel-amber/50 border-pastel-amber-border text-pastel-amber-fg",
                ];
                const currentStyle = pastelStyles[i % pastelStyles.length];

                return (
                  <div key={i} className={`rounded-xl border p-3.5 sm:p-5 space-y-1.5 transition-all shadow-2xs ${currentStyle}`}>
                    <div className="text-3xl sm:text-4xl font-extrabold font-heading">
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium uppercase tracking-wider opacity-90">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. PASTORAL WELCOME (EDITORIAL LETTER FORMAT) */}
      <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border bg-card shadow-2xs overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border">
            {/* Left Column: Bishop Profile */}
            <div className="lg:col-span-5 p-5 sm:p-12 space-y-6 bg-muted/15 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-heading">
                  Pastoral Greeting
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-foreground leading-snug">
                  &ldquo;God has a purposeful plan for your life.&rdquo;
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Whatever reason might have brought you here, know that you are precious to God.
                  You were created with an intentional calling, and we welcome you to the fellowship
                  of Tabernacle of Grace.
                </p>
              </div>

              <div className="pt-6 border-t border-border space-y-1">
                <div className="font-bold text-foreground font-heading">{bishopProfile.name}</div>
                <div className="text-xs text-muted-foreground">{bishopProfile.title}</div>
                <div className="text-xs text-muted-foreground">Ludhiana, Punjab, India</div>
              </div>
            </div>

            {/* Right Column: Narrative Letter */}
            <div className="lg:col-span-7 p-5 sm:p-12 space-y-6 flex flex-col justify-center">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-heading">
                  Welcome to the Fellowship
                </span>
                <h3 className="text-2xl font-bold text-foreground font-heading">
                  A Ministry Rooted in Word and Deed
                </h3>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  Even before you were born, God designed an abundant plan of peace, redemption, and
                  purpose for you. In Christ Jesus, we discover forgiveness, divine healing, and true fellowship.
                </p>
                <p>
                  In 2001, answering the Lord&apos;s call, my wife Beulah and I relocated to Punjab to plant
                  churches, care for destitute and orphan children, and establish support networks for
                  indigenous evangelists. Today, by God&apos;s grace, over 24 churches actively minister under our oversight.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="text-xs font-bold uppercase tracking-wider text-foreground hover:underline flex items-center gap-1.5"
                >
                  <span>Read Bishop&apos;s Full Conversion Story</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <span className="text-muted-foreground/40">•</span>
                <Link
                  href="/about#beliefs"
                  className="text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground"
                >
                  Statement of Faith
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STRATEGIC MINISTRY PILLARS (MATTE REFINED CARDS) */}
      <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-heading">
              Operational Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-heading">
              Five Divisions of Frontier Outreach
            </h2>
          </div>
          <Link
            href="/ministries"
            className="text-xs font-bold uppercase tracking-wider text-foreground hover:underline flex items-center gap-1.5"
          >
            <span>View All Five Divisions</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ministriesData.slice(0, 3).map((ministry, idx) => {
            const pillarPastel = [
              {
                icon: "bg-pastel-sage/70 border-pastel-sage-border text-pastel-sage-fg",
                topBorder: "border-t-2 border-t-pastel-sage-border",
                badge: "bg-pastel-sage/50 text-pastel-sage-fg border-pastel-sage-border",
              },
              {
                icon: "bg-pastel-rose/70 border-pastel-rose-border text-pastel-rose-fg",
                topBorder: "border-t-2 border-t-pastel-rose-border",
                badge: "bg-pastel-rose/50 text-pastel-rose-fg border-pastel-rose-border",
              },
              {
                icon: "bg-pastel-amber/70 border-pastel-amber-border text-pastel-amber-fg",
                topBorder: "border-t-2 border-t-pastel-amber-border",
                badge: "bg-pastel-amber/50 text-pastel-amber-fg border-pastel-amber-border",
              },
            ][idx % 3];

            return (
              <div
                key={ministry.id}
                className={`rounded-xl border border-border bg-card p-5 sm:p-8 flex flex-col justify-between space-y-6 hover:shadow-xs transition-all shadow-2xs ${pillarPastel.topBorder}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-lg border ${pillarPastel.icon}`}>
                      {ministry.id === "church-planting" && <Church className="h-5 w-5" />}
                      {ministry.id === "children-ministry" && <Heart className="h-5 w-5" />}
                      {ministry.id === "slum-ministry" && <Users className="h-5 w-5" />}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground font-heading">
                    {ministry.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {ministry.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between text-xs">
                  <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${pillarPastel.badge}`}>
                    {ministry.impactStat.number} {ministry.impactStat.label}
                  </span>
                  <Link
                    href={`/ministries#${ministry.id}`}
                    className="font-semibold text-foreground hover:underline flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. FINANCIAL STEWARDSHIP OVERVIEW */}
      <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border bg-card p-5 sm:p-12 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-pastel-sky-border bg-pastel-sky/60 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-pastel-sky-fg font-heading">
                Accountability & Giving
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-foreground">
                Independent Faith Stewardship
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
                Tabernacle of Grace is an independent missionary society not underwritten by any single
                denomination. We depend upon God and faithful partners to support native evangelists,
                shelter orphans, and construct rural church buildings.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pastel-sage-fg shrink-0" />
                  <span>State Bank of India (Fountain Chowk Branch, Ludhiana)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pastel-sage-fg shrink-0" />
                  <span>Transparent Non-Profit Financial Auditing</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-xl border border-pastel-sky-border bg-pastel-sky/30 p-4 sm:p-6 space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-pastel-sky-fg">
                  Direct Bank Transfer
                </span>
                <div className="font-mono text-xl font-bold text-foreground tracking-wider">
                  {siteConfig.banking.accountNumber}
                </div>
                <div className="text-xs text-muted-foreground">
                  Beneficiary: {siteConfig.banking.accountName}
                </div>
              </div>
              <Link
                href="/get-involved"
                className="block text-center rounded-md border border-pastel-sky-border bg-pastel-sky text-pastel-sky-fg py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-pastel-sky/80 transition-colors shadow-2xs"
              >
                View Full Bank Particulars
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
