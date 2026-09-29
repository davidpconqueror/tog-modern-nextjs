"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DialogContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DialogContext = React.createContext<DialogContextValue | null>(null);

export function Dialog({
  open: controlledOpen,
  onOpenChange,
  children,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = React.useCallback(
    (value: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(value);
      }
      onOpenChange?.(value);
    },
    [isControlled, onOpenChange]
  );

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
}

export function DialogTrigger({
  render,
  children,
  onClick,
  ...props
}: {
  render?: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & React.HTMLAttributes<HTMLElement>) {
  const context = React.useContext(DialogContext);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClick?.(e);
    context?.setOpen(true);
  };

  if (render && React.isValidElement(render)) {
    return React.cloneElement(render, {
      onClick: (e: React.MouseEvent<HTMLElement>) => {
        render.props.onClick?.(e);
        handleClick(e);
      },
    });
  }

  return (
    <button type="button" onClick={handleClick} {...props}>
      {children}
    </button>
  );
}

export function DialogClose({
  render,
  children,
  onClick,
  ...props
}: {
  render?: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & React.HTMLAttributes<HTMLElement>) {
  const context = React.useContext(DialogContext);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClick?.(e);
    context?.setOpen(false);
  };

  if (render && React.isValidElement(render)) {
    return React.cloneElement(render, {
      onClick: (e: React.MouseEvent<HTMLElement>) => {
        render.props.onClick?.(e);
        handleClick(e);
      },
    });
  }

  return (
    <button type="button" onClick={handleClick} {...props}>
      {children}
    </button>
  );
}

export function DialogOverlay({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const context = React.useContext(DialogContext);
  return (
    <div
      onClick={() => context?.setOpen(false)}
      className={cn(
        "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in",
        className
      )}
      {...props}
    />
  );
}

export function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { showCloseButton?: boolean }) {
  const context = React.useContext(DialogContext);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        context?.setOpen(false);
      }
    };
    if (context?.open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [context?.open, context]);

  if (!context?.open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <DialogOverlay />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "relative z-50 grid w-full max-w-lg gap-4 rounded-xl border border-border bg-card p-6 text-card-foreground shadow-xl transition-all animate-in fade-in zoom-in-95",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => context?.setOpen(false)}
            className="absolute top-4 right-4 rounded-md text-muted-foreground hover:text-foreground"
          >
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        )}
      </div>
    </div>
  );
}

export function DialogHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 text-left", className)}
      {...props}
    />
  );
}

export function DialogFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end border-t border-border pt-4 mt-2",
        className
      )}
      {...props}
    />
  );
}

export function DialogTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("text-lg font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-muted-foreground mt-1", className)}
      {...props}
    />
  );
}

export function DialogPortal({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
