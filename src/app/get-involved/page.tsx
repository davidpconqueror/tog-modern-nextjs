"use client";

import * as React from "react";
import {
  Copy,
  Check,
  Send,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function GetInvolvedPage() {
  const [copied, setCopied] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "Prayer Partnership",
    message: "",
  });

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(siteConfig.banking.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-24">
      {/* 1. MODERN CLASSICAL HEADER */}
      <section className="border-b border-border bg-pastel-cream/50">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-12 sm:py-24 space-y-6">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 rounded-2xl sm:rounded-full border border-pastel-amber-border bg-pastel-amber/60 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-pastel-amber-fg max-w-full">
            <span>Stewardship Console</span>
            <span className="opacity-60">•</span>
            <span>Financial Partnership</span>
            <span className="opacity-60">•</span>
            <span>Frontline Giving</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-heading break-words">
            Partner With Us to Transform Lives
          </h1>

          <p className="max-w-3xl text-sm sm:text-lg text-muted-foreground leading-relaxed font-sans">
            Tabernacle of Grace is an independent missionary society. We look to God and our friends
            across India and globally to stand with us through financial stewardship, prayer,
            and personal involvement.
          </p>
        </div>
      </section>

      {/* 2. OFFICIAL BANK TRANSFER & STEWARDSHIP PARTICULARS */}
      <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Official Bank Particulars Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-xl border border-border bg-card p-5 sm:p-10 shadow-2xs space-y-8">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground font-heading">
                    Electronic Funds Transfer Particulars
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    State Bank of India (SBI) • Domestic & International Wire
                  </p>
                </div>
                <span className="rounded-full border border-pastel-sage-border bg-pastel-sage/60 px-3 py-1 text-xs font-bold text-pastel-sage-fg uppercase tracking-wider">
                  Verified
                </span>
              </div>

              {/* Large Account Number Card with Instant Copy in Pastel Sky */}
              <div className="rounded-xl border border-pastel-sky-border bg-pastel-sky/30 p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-pastel-sky-fg block font-heading">
                    SBI Account Number
                  </span>
                  <span className="text-xl sm:text-3xl font-mono font-bold tracking-wider text-foreground break-all">
                    {siteConfig.banking.accountNumber}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyAccount}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-pastel-sky-border bg-pastel-sky hover:bg-pastel-sky/80 text-pastel-sky-fg px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all shrink-0 shadow-2xs"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-pastel-sky-fg" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copy Account #</span>
                    </>
                  )}
                </button>
              </div>

              {/* Account Details Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="rounded-lg border border-border bg-card p-4 space-y-1">
                  <span className="text-muted-foreground font-semibold uppercase text-[10px] font-heading">
                    Beneficiary Name
                  </span>
                  <div className="font-bold text-foreground text-sm font-heading">
                    {siteConfig.banking.accountName}
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-card p-4 space-y-1">
                  <span className="text-muted-foreground font-semibold uppercase text-[10px] font-heading">
                    Bank & Branch
                  </span>
                  <div className="font-bold text-foreground text-sm font-heading">
                    {siteConfig.banking.bankName}
                  </div>
                  <div className="text-muted-foreground text-[11px]">
                    {siteConfig.banking.branch}
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-card p-4 space-y-1 sm:col-span-2">
                  <span className="text-muted-foreground font-semibold uppercase text-[10px] font-heading">
                    Location Jurisdiction
                  </span>
                  <div className="font-medium text-foreground">
                    {siteConfig.banking.city}
                  </div>
                </div>
              </div>

              {/* PayPal / International Notice */}
              <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <div className="space-y-0.5">
                  <div className="font-bold text-foreground font-heading">
                    International Support via PayPal or Direct Wire
                  </div>
                  <p className="text-muted-foreground">
                    Global donors may request international wire Swift routing codes or PayPal transfer links.
                  </p>
                </div>
                <a
                  href="mailto:deepgospel@gmail.com?subject=PayPal%20or%20Wire%20Donation%20Inquiry"
                  className="rounded-md border border-pastel-amber-border bg-pastel-amber/60 hover:bg-pastel-amber px-3.5 py-2 font-bold text-pastel-amber-fg uppercase tracking-wider text-[11px] transition-colors shrink-0 shadow-2xs"
                >
                  Request PayPal Link →
                </a>
              </div>

              <div className="p-4 rounded-xl border border-pastel-cream-border bg-pastel-cream/50 text-xs text-muted-foreground leading-relaxed">
                {siteConfig.banking.partnershipNote}
              </div>
            </div>
          </div>

          {/* Right Column: Three Ways to Partner & Inquiry Form */}
          <div className="lg:col-span-5 space-y-8">
            {/* 3 Channels of Active Partnership with Pastel Accents */}
            <div className="rounded-xl border border-border bg-card p-5 sm:p-8 space-y-6 shadow-2xs">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-pastel-rose-border bg-pastel-rose/60 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-pastel-rose-fg font-heading">
                Engagement Channels
              </span>
              <h3 className="text-xl font-bold text-foreground font-heading">
                Three Ways to Partner
              </h3>

              <div className="space-y-4">
                <div className="space-y-1.5 border-t border-border pt-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full border border-pastel-sage-border bg-pastel-sage/60 px-2 py-0.5 text-[11px] font-bold text-pastel-sage-fg">
                      01
                    </span>
                    <h4 className="font-bold text-sm text-foreground font-heading">
                      Sponsor a Native Pastor
                    </h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-7">
                    Provide a monthly living stipend covering food, transit, and ministry literature for an indigenous frontline evangelist.
                  </p>
                </div>

                <div className="space-y-1.5 border-t border-border pt-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full border border-pastel-rose-border bg-pastel-rose/60 px-2 py-0.5 text-[11px] font-bold text-pastel-rose-fg">
                      02
                    </span>
                    <h4 className="font-bold text-sm text-foreground font-heading">
                      Grace Children&apos;s Home
                    </h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-7">
                    Cover tuition, textbooks, warm clothes, boarding, and meals for an orphan or impoverished student in Ludhiana.
                  </p>
                </div>

                <div className="space-y-1.5 border-t border-border pt-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full border border-pastel-lavender-border bg-pastel-lavender/60 px-2 py-0.5 text-[11px] font-bold text-pastel-lavender-fg">
                      03
                    </span>
                    <h4 className="font-bold text-sm text-foreground font-heading">
                      Intercessory Prayer Guild
                    </h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-7">
                    Receive monthly prayer letters to intercede for unreached villages, newly established churches, and regional revivals.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Inquiry & Prayer Form */}
            <div className="rounded-xl border border-border bg-card p-5 sm:p-8 space-y-6 shadow-2xs" id="contact">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-heading">
                  Dispatch Form
                </span>
                <h3 className="text-xl font-bold text-foreground font-heading">
                  Prayer Needs & Partnership Inquiry
                </h3>
              </div>

              {submitted ? (
                <div className="rounded-xl border border-pastel-sage-border bg-pastel-sage/30 p-6 text-center space-y-2">
                  <div className="font-bold text-sm text-pastel-sage-fg font-heading">Message Transmitted</div>
                  <p className="text-xs text-muted-foreground">
                    Thank you for connecting with Tabernacle of Grace. Bishop Paul Tamilarasan and the secretariat in Ludhiana will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground font-heading">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name or Church Fellowship"
                      className="w-full rounded-md border border-border bg-card px-3.5 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground font-heading">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full rounded-md border border-border bg-card px-3.5 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground font-heading">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91..."
                        className="w-full rounded-md border border-border bg-card px-3.5 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground font-heading">
                      Area of Partnership
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full rounded-md border border-border bg-card px-3.5 py-2 text-xs text-foreground focus:outline-none focus:border-foreground transition-colors"
                    >
                      <option value="Pastor Sponsorship">Frontline Evangelist Sponsorship</option>
                      <option value="Grace Children Home">Grace Children&apos;s Home Support</option>
                      <option value="Church Building">Church Building / Land Project</option>
                      <option value="Prayer Partnership">Prayer Partnership & Updates</option>
                      <option value="Other">General Mission Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground font-heading">
                      Message / Prayer Request
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your prayer need, word of encouragement, or inquiry..."
                      className="w-full rounded-md border border-border bg-card px-3.5 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-pastel-amber-border bg-pastel-amber hover:bg-pastel-amber/80 text-pastel-amber-fg py-3 text-xs font-bold uppercase tracking-wider transition-all shadow-2xs"
                  >
                    <span>Transmit Dispatch</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
