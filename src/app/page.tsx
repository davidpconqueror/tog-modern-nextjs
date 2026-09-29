"use client";

import * as React from "react";
import {
  Sparkles,
  Layers,
  Palette,
  Terminal,
  ExternalLink,
  Code2,
  CheckCircle2,
  Copy,
  Check,
  Search,
  Settings,
  User,
  Heart,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const [copiedCmd, setCopiedCmd] = React.useState<string | null>(null);

  const copyToClipboard = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const stackItems = [
    {
      name: "Next.js",
      version: "App Router & Turbopack",
      description: "React framework with fast builds and server components.",
      icon: Zap,
    },
    {
      name: "Tailwind CSS",
      version: "v4.0+",
      description: "Next-generation CSS utility-first framework.",
      icon: Palette,
    },
    {
      name: "Tailwind UI",
      version: "Pure CSS",
      description: "Fast, flexible, responsive components styled purely with Tailwind CSS.",
      icon: Layers,
    },
    {
      name: "Lucide React",
      version: "Iconography",
      description: "Crisp, flexible and beautiful vector icons.",
      icon: Sparkles,
    },
    {
      name: "Yarn",
      version: "Modern (Berry v4)",
      description: "Fast, reliable and deterministic package management.",
      icon: Terminal,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold shadow-sm">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <span className="font-semibold tracking-tight text-base sm:text-lg">
                Next.js Template
              </span>
              <span className="ml-2 hidden rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground sm:inline-block">
                Yarn Ready
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden md:block"
            >
              Tailwind CSS
            </a>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noreferrer"
              className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden md:block"
            >
              Next.js Docs
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="container mx-auto max-w-6xl px-4 py-16 sm:py-24 sm:px-6">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Badge variant="secondary" className="mb-4 px-3 py-1 gap-1.5 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Production-Ready Starter Kit
            </Badge>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">
              Next.js +{" "}
              <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent dark:from-teal-400 dark:via-cyan-400 dark:to-blue-400">
                Tailwind CSS
              </span>
            </h1>

            <p className="mt-6 text-base text-muted-foreground sm:text-lg leading-relaxed max-w-2xl">
              Configured with <strong>Yarn</strong>, modern <strong>Tailwind CSS v4</strong>, 
              lightweight accessible UI components, and <strong>Lucide React</strong> icons.
            </p>

            {/* Quick Actions */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Dialog>
                <DialogTrigger
                  render={
                    <Button size="lg" className="gap-2 cursor-pointer shadow-sm">
                      <Sparkles className="h-4 w-4" />
                      Try Dialog Demo
                    </Button>
                  }
                />
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                      Welcome to your new project!
                    </DialogTitle>
                    <DialogDescription>
                      This dialog is powered by pure Tailwind CSS. You can customize any component in{" "}
                      <code className="text-foreground bg-muted px-1.5 py-0.5 rounded text-xs">
                        src/components/ui
                      </code>
                      .
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-2 text-sm text-muted-foreground space-y-2">
                    <p>Included in this starter:</p>
                    <ul className="list-disc list-inside space-y-1 text-xs">
                      <li>Next.js App Router with TypeScript</li>
                      <li>Tailwind CSS v4 with CSS variables</li>
                      <li>Dark / Light Mode theme switching</li>
                      <li>Pure Tailwind UI components</li>
                      <li>Lucide icons library</li>
                    </ul>
                  </div>
                  <DialogFooter>
                    <Button
                      onClick={() =>
                        copyToClipboard("yarn dev")
                      }
                      className="gap-1.5"
                    >
                      <Copy className="h-3.5 w-3.5" />
                      Copy Dev Command
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant="outline" size="lg" className="gap-2 cursor-pointer">
                      <Settings className="h-4 w-4" />
                      Dropdown Menu
                    </Button>
                  }
                />
                <DropdownMenuContent align="center" className="w-48">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer gap-2"
                    onClick={() => copyToClipboard("yarn dev")}
                  >
                    <Terminal className="h-4 w-4" />
                    Copy `yarn dev`
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer gap-2"
                    onClick={() => copyToClipboard("yarn build")}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Copy `yarn build`
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer gap-2"
                    onClick={() =>
                      window.open("https://github.com", "_blank")
                    }
                  >
                    <ExternalLink className="h-4 w-4" />
                    GitHub
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button variant="secondary" size="lg" className="gap-2 cursor-pointer">
                      <Heart className="h-4 w-4 text-red-500 fill-red-500/20" />
                      Tooltip Demo
                    </Button>
                  }
                />
                <TooltipContent>
                  <p>Tooltips work seamlessly across devices!</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* Tech Stack Cards */}
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stackItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.name} className="transition-all hover:shadow-md hover:border-primary/40">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {item.version}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mt-3">{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}

            {/* Quick Component Gallery Card */}
            <Card className="transition-all hover:shadow-md hover:border-primary/40">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <Badge variant="default" className="text-xs">
                    Ready
                  </Badge>
                </div>
                <CardTitle className="text-lg mt-3">Pre-installed UI</CardTitle>
                <CardDescription>
                  Button, Card, Badge, Input, Dialog, Dropdown, Avatar, Tooltip & more.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Interactive Component Demo Section */}
          <div className="mt-16 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Interactive Playground</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Preview how Tailwind CSS components look and feel in both light & dark modes.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&q=80" alt="Avatar" />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium text-muted-foreground">Avatar Demo</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Form Input Demo */}
              <div className="space-y-4">
                <label className="text-sm font-medium">Search with Lucide Icon</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search templates or components..."
                    className="pl-9"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <Badge variant="default">Primary Badge</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </div>

              {/* Button Variants Demo */}
              <div className="space-y-4">
                <label className="text-sm font-medium">Button Variants</label>
                <div className="flex flex-wrap gap-2">
                  <Button variant="default" size="sm">Default</Button>
                  <Button variant="secondary" size="sm">Secondary</Button>
                  <Button variant="outline" size="sm">Outline</Button>
                  <Button variant="ghost" size="sm">Ghost</Button>
                  <Button variant="destructive" size="sm">Destructive</Button>
                </div>

                <div className="pt-2">
                  <div className="flex items-center justify-between rounded-lg bg-muted p-3 text-xs font-mono">
                    <span className="text-muted-foreground">yarn run dev</span>
                    <button
                      onClick={() => copyToClipboard("yarn dev")}
                      className="text-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                      {copiedCmd === "yarn dev" ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-green-500" />
                          <span className="text-green-500">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick CLI Commands */}
          <div className="mt-16">
            <h3 className="text-xl font-bold tracking-tight mb-4 flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              Helpful Yarn Commands
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { cmd: "yarn dev", desc: "Start Next.js Turbopack dev server" },
                { cmd: "yarn build", desc: "Create optimized production build" },
                { cmd: "yarn lint", desc: "Run ESLint code checks" },
                { cmd: "yarn add <pkg>", desc: "Install a new package with Yarn" },
                { cmd: "yarn test", desc: "Run test suite" },
                { cmd: "yarn start", desc: "Start production server" },
              ].map(({ cmd, desc }) => (
                <div
                  key={cmd}
                  onClick={() => copyToClipboard(cmd)}
                  className="group relative cursor-pointer rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:bg-muted/30"
                >
                  <div className="flex items-center justify-between">
                    <code className="text-xs font-semibold font-mono text-primary">
                      {cmd}
                    </code>
                    {copiedCmd === cmd ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    )}
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 bg-muted/20">
        <div className="container mx-auto flex max-w-6xl flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 text-xs text-muted-foreground">
          <p>
            Built with Next.js, Tailwind CSS, Lucide React & Yarn.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              GitHub <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
