"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm transition-colors">
      {/* Top subtle pastel institutional band */}
      <div className="hidden sm:block border-b border-border/80 bg-pastel-cream/70 px-4 sm:px-8 py-1.5 text-xs text-muted-foreground">
        <div className="mx-auto max-w-[1440px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-foreground tracking-wide whitespace-nowrap">TABERNACLE OF GRACE MINISTRIES DIOCESE</span>
            <span className="text-border">|</span>
            <span className="whitespace-nowrap">Registered with the Government of Punjab State, India</span>
          </div>
          <div className="flex items-center gap-4 text-xs whitespace-nowrap">
            <span className="inline-flex items-center gap-1.5 text-pastel-sage-fg font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-pastel-sage-fg" />
              Diocese HQ: Ludhiana, Punjab
            </span>
            <span className="text-muted-foreground/70">•</span>
            <span>Est. 2001</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex h-16 sm:h-20 max-w-[1440px] items-center justify-between px-3 sm:px-6 lg:px-8 gap-2">
        {/* Brand Link with Official Logo */}
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2.5 sm:gap-3.5 transition-opacity hover:opacity-90"
        >
          <div className="relative h-10 w-24 sm:h-12 sm:w-32 overflow-hidden rounded border border-border bg-white p-1 shrink-0">
            <Image
              src="/images/logo_main.jpg"
              alt="Tabernacle of Grace Logo"
              fill
              sizes="(max-width: 640px) 96px, 128px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col min-w-0 pr-1">
            <span className="text-sm sm:text-lg font-bold tracking-tight text-foreground font-heading truncate">
              Tabernacle of Grace
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-muted-foreground tracking-wider uppercase truncate">
              Diocese of Punjab • North India
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {siteConfig.navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>{item.title}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-foreground" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Controls & Give CTA */}
        <div className="hidden lg:flex shrink-0 items-center gap-3">
          <ThemeToggle />
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 rounded-md border border-pastel-amber-border bg-pastel-amber/80 hover:bg-pastel-amber text-pastel-amber-fg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all shadow-2xs whitespace-nowrap"
          >
            <span>Partner / Give</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Menu Button Only */}
        <div className="flex items-center lg:hidden shrink-0">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-lg border border-border bg-card text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring transition-colors shadow-2xs"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-background/98 backdrop-blur-md px-4 py-5 lg:hidden shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="space-y-1 divide-y divide-border/60">
            {siteConfig.navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2.5 text-sm sm:text-base font-medium transition-colors ${
                    isActive
                      ? "text-foreground font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>{item.title}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-foreground" />}
                </Link>
              );
            })}
          </div>

          {/* Theme Toggle & Give Action inside Mobile Drawer */}
          <div className="mt-5 pt-4 border-t border-border space-y-3">
            <div className="flex items-center justify-between py-1 px-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Theme / Appearance
              </span>
              <ThemeToggle />
            </div>

            <Link
              href="/get-involved"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-pastel-amber-border bg-pastel-amber text-pastel-amber-fg hover:bg-pastel-amber/80 py-2.5 text-xs font-bold uppercase tracking-wider transition-all shadow-2xs"
            >
              <span>Partner &amp; Give Now</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
