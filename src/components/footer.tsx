import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-pastel-cream/40 text-foreground transition-colors mt-auto">
      {/* Upper Subtle Pastel Bar */}
      <div className="border-b border-border/70 py-3 sm:py-4 px-4 sm:px-8 bg-pastel-cream/70 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="font-semibold text-foreground">Tabernacle of Grace Diocese</span>
          <span className="opacity-60">•</span>
          <span>Pioneering Northern India Church Planting Since 2001</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="inline-flex items-center gap-1.5 text-pastel-sage-fg font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-pastel-sage-fg" />
            Diocese Motto: &ldquo;Loving, Liberating &amp; Life-Giving&rdquo;
          </span>
        </div>
      </div>

      {/* Main Structural Columns */}
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Identity & About */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-32 overflow-hidden rounded border border-border bg-white p-1">
                <Image
                  src="/images/logo_main.jpg"
                  alt="Tabernacle of Grace Logo"
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Tabernacle of Grace Ministries is an evangelical, indigenous missionary society
              dedicated to preaching the Gospel, discipling rural communities, sheltering orphaned children,
              and equipping frontline native pastors across Punjab and North India.
            </p>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p>Registered with the Government of Punjab State, India.</p>
              <p className="text-foreground font-medium">Secretariat: deepgospel@gmail.com</p>
            </div>
          </div>

          {/* Directory Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground font-heading">
                Directory
              </h4>
              <ul className="space-y-2.5 text-sm">
                {siteConfig.navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group"
                    >
                      <span>{item.title}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ministry Divisions */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground font-heading">
                Divisions
              </h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li>
                  <Link href="/ministries#church-planting" className="hover:text-foreground transition-colors">
                    Church Planting
                  </Link>
                </li>
                <li>
                  <Link href="/ministries#children-ministry" className="hover:text-foreground transition-colors">
                    Grace Children&apos;s Home
                  </Link>
                </li>
                <li>
                  <Link href="/ministries#slum-ministry" className="hover:text-foreground transition-colors">
                    Slum Daycare Centers
                  </Link>
                </li>
                <li>
                  <Link href="/ministries#leadership-training" className="hover:text-foreground transition-colors">
                    Leadership & Pastor Support
                  </Link>
                </li>
                <li>
                  <Link href="/ministries#bible-college" className="hover:text-foreground transition-colors">
                    Logos Bible College
                  </Link>
                </li>
              </ul>
            </div>

            {/* Banking Details */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground font-heading">
                Stewardship
              </h4>
              <div className="rounded-xl border border-pastel-sky-border p-4 space-y-2 bg-pastel-sky/30 text-xs shadow-2xs">
                <div className="font-semibold text-foreground">
                  State Bank of India
                </div>
                <div className="font-mono text-xs font-bold text-foreground">
                  A/C: {siteConfig.banking.accountNumber}
                </div>
                <div className="text-muted-foreground text-[11px]">
                  Fountain Chowk, Ludhiana
                </div>
                <Link
                  href="/get-involved"
                  className="inline-block pt-1 text-xs font-bold text-pastel-sky-fg hover:underline"
                >
                  Bank Transfer Details →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground text-center sm:text-left">
          <p>© {new Date().getFullYear()} Tabernacle of Grace Ministries. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
            <Link href="/about#beliefs" className="hover:text-foreground">
              Statement of Faith
            </Link>
            <Link href="/resources" className="hover:text-foreground">
              Official Repository
            </Link>
            <Link href="/gallery" className="hover:text-foreground">
              Photo Gallery
            </Link>
            <Link href="/get-involved" className="text-pastel-amber-fg font-bold">
              Partner &amp; Give
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
