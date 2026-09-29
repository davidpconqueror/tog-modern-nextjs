import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
  render?: React.ReactNode;
}

const badgeVariantsMap: Record<string, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/80 border-transparent",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80 border-transparent",
  outline: "text-foreground border-border hover:bg-muted",
  ghost: "hover:bg-muted text-foreground border-transparent",
  link: "text-primary underline-offset-4 hover:underline border-transparent",
};

export function badgeVariants({
  variant = "default",
  className,
}: {
  variant?: BadgeProps["variant"];
  className?: string;
} = {}) {
  return cn(
    "inline-flex items-center justify-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    badgeVariantsMap[variant || "default"],
    className
  );
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={badgeVariants({ variant, className })}
      {...props}
    >
      {children}
    </span>
  );
}
