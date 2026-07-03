import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import authHero from "@/assets/auth-hero.jpg";

export function AuthLayout({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Simple top bar */}
      <header className="border-b border-border/60 bg-surface/70">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l4 4 10-10" />
              </svg>
            </span>
            <span className="font-display font-bold">RemoteVote <span className="text-brand">NG</span></span>
          </Link>
          <span className="hidden text-xs text-muted-foreground sm:inline">Secure. Inclusive. Transparent.</span>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:px-6 md:grid-cols-2 md:py-10">
        {/* Form card */}
        <section className="flex items-center">
          <div className="w-full rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <p className="text-xs font-medium uppercase tracking-wider text-brand">
              Welcome to RemoteVote NG
            </p>
            <h1 className="mt-1 font-display text-3xl font-bold tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
            )}
            <div className="mt-6">{children}</div>
            {footer && (
              <div className="mt-6 border-t border-border pt-4 text-center text-sm text-muted-foreground">
                {footer}
              </div>
            )}
          </div>
        </section>

        {/* Hero panel */}
        <aside className="relative hidden overflow-hidden rounded-2xl bg-brand-dark md:block">
          <img
            src={authHero}
            alt="Nigerian voters holding a VOTE placard, campaign poster reading Your Voice, Your Power, Your Future"
            className="h-full w-full object-cover"
            width={896}
            height={1280}
          />
        </aside>
      </main>
    </div>
  );
}

export function FormField({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-xs text-muted-foreground">{hint}</span>}
    </label>
  );
}

export const inputClass =
  "w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/25";

export const primaryBtnClass =
  "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60";
