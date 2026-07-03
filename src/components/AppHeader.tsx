import { Link, useRouterState } from "@tanstack/react-router";
import { LogOut, User } from "lucide-react";
import { getSession, setSession } from "@/lib/mock-store";
import { useEffect, useState } from "react";

export function AppHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    setName(getSession()?.fullName ?? null);
  }, [pathname]);

  const nav = [
    { to: "/dashboard", label: "Elections" },
    { to: "/results", label: "Live Results" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-surface/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-white shadow-sm">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l4 4 10-10" />
            </svg>
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            RemoteVote <span className="text-brand">NG</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  active ? "bg-primary-soft text-brand-dark" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {name ? (
            <>
              <div className="hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 sm:flex">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-primary-soft text-brand-dark">
                  <User className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium">{name}</span>
              </div>
              <button
                onClick={() => {
                  setSession(null);
                  try {
                    localStorage.removeItem('rvng.token');
                  } catch (e) {}
                  window.location.href = "/";
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium hover:bg-muted"
                aria-label="Sign out"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Sign out</span>
              </button>
            </>
          ) : (
            <Link
              to="/"
              className="rounded-lg bg-brand px-3 py-1.5 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
