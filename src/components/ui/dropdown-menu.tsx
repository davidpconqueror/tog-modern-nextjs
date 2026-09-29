"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface DropdownContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLDivElement | null>;
}

const DropdownContext = React.createContext<DropdownContextValue | null>(null);

export function DropdownMenu({
  open: controlledOpen,
  onOpenChange,
  children,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLDivElement | null>(null);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = React.useCallback(
    (val: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(val);
      }
      onOpenChange?.(val);
    },
    [isControlled, onOpenChange]
  );

  return (
    <DropdownContext.Provider value={{ open, setOpen, triggerRef }}>
      <div className="relative inline-block text-left">{children}</div>
    </DropdownContext.Provider>
  );
}

export function DropdownMenuTrigger({
  render,
  children,
  onClick,
  ...props
}: {
  render?: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & React.HTMLAttributes<HTMLDivElement>) {
  const context = React.useContext(DropdownContext);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClick?.(e);
    context?.setOpen(!context.open);
  };

  if (render && React.isValidElement(render)) {
    return (
      <div ref={context?.triggerRef} className="inline-block">
        {React.cloneElement(render, {
          onClick: (e: React.MouseEvent<HTMLElement>) => {
            render.props.onClick?.(e);
            handleClick(e);
          },
        })}
      </div>
    );
  }

  return (
    <div
      ref={context?.triggerRef}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      className="inline-block cursor-pointer"
      {...props}
    >
      {children}
    </div>
  );
}

export function DropdownMenuContent({
  className,
  align = "start",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  align?: "start" | "center" | "end";
  sideOffset?: number;
}) {
  const context = React.useContext(DropdownContext);
  const menuRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        context?.triggerRef.current &&
        !context.triggerRef.current.contains(event.target as Node)
      ) {
        context?.setOpen(false);
      }
    };

    if (context?.open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [context?.open, context]);

  if (!context?.open) return null;

  const alignClasses =
    align === "end"
      ? "right-0"
      : align === "center"
      ? "left-1/2 -translate-x-1/2"
      : "left-0";

  return (
    <div
      ref={menuRef}
      role="menu"
      className={cn(
        "absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-lg animate-in fade-in-0 zoom-in-95",
        alignClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function DropdownMenuItem({
  className,
  onClick,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const context = React.useContext(DropdownContext);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(e);
    context?.setOpen(false);
  };

  return (
    <div
      role="menuitem"
      onClick={handleClick}
      className={cn(
        "relative flex cursor-pointer select-none items-center gap-2 rounded-md px-2.5 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function DropdownMenuLabel({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("px-2.5 py-1.5 text-xs font-semibold text-muted-foreground", className)}
      {...props}
    />
  );
}

export function DropdownMenuSeparator({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />;
}

export function DropdownMenuGroup({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props}>{children}</div>;
}

export function DropdownMenuPortal({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
