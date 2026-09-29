"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TooltipChildProps {
  _tooltipOpen?: boolean;
}

export function TooltipProvider({
  children,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return <>{children}</>;
}

export function Tooltip({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement<TooltipChildProps>(child)) {
          return React.cloneElement(child, {
            _tooltipOpen: open,
          });
        }
        return child;
      })}
    </div>
  );
}

export function TooltipTrigger({
  render,
  children,
  ...props
}: {
  render?: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  if (render && React.isValidElement(render)) {
    return render;
  }
  return (
    <div className="inline-flex cursor-pointer" {...props}>
      {children}
    </div>
  );
}

export function TooltipContent({
  className,
  children,
  _tooltipOpen,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { _tooltipOpen?: boolean }) {
  if (!_tooltipOpen) return null;

  return (
    <div
      role="tooltip"
      className={cn(
        "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 whitespace-nowrap rounded-md bg-foreground px-3 py-1.5 text-xs text-background shadow-md animate-in fade-in-0 zoom-in-95 pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
    </div>
  );
}
