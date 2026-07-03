import { createFileRoute, Link } from "@tanstack/react-router";
import { AppHeader } from "@/components/AppHeader";
import { formatNumber } from "@/lib/mock-store";
import { useEffect, useMemo, useState } from "react";
import { TrendingUp, Users } from "lucide-react";
import { apiRequest, Election } from "@/lib/api";

export const Route = createFileRoute("/results")({
  head: () => ({ meta: [{ title: "Live Results — RemoteVote NG" }] }),
  component: ResultsPage,
});

const LGAS = [
  { name: "Ikeja", cast: 32_455 },
  { name: "Surulere", cast: 28_120 },
  { name: "Alimosho", cast: 41_902 },
  { name: "Eti-Osa", cast: 19_884 },
  { name: "Yaba", cast: 15_733 },
];

function ResultsPage() {
  const [electionId, setElectionId] = useState("presidential-2027");
  const [election, setElection] = useState<Election | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  // Poll results every 5 seconds for live simulation
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await apiRequest<Election>(`/elections/${electionId}/`);
        setElection(data);
        setError(null);
      } catch (err: any) {
        console.error("Failed to fetch live results:", err);
        setError("Could not load live results from server.");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();

    const interval = setInterval(() => {
      fetchResults();
      setTick((t) => t + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [electionId]);

  const results = useMemo(() => {
    if (!election) return [];
    // Convert backend candidates into result array
    return election.candidates
      .map((c) => ({
        candidateId: c.id,
        votes: c.votes_count,
        candidateObj: c,
      }))
      .sort((a, b) => b.votes - a.votes);
  }, [election]);

  const total = results.reduce((s, r) => s + r.votes, 0);
  const leader = results[0];
  const leaderCandidate = leader?.candidateObj;
  const leaderPct = leader && total ? (leader.votes / total) * 100 : 0;

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-brand">Live Feed</p>
            <h1 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Current Results</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Updating every few seconds · totals aggregated by LGA
            </p>
          </div>
          <select
            value={electionId}
            onChange={(e) => {
              setElectionId(e.target.value);
              setLoading(true);
            }}
            className="rounded-lg border border-input bg-card px-3 py-2 text-sm font-medium shadow-sm"
          >
            <option value="presidential-2027">Presidential Election</option>
            <option value="senate-2027">National Assembly — Senate</option>
          </select>
        </div>

        {error && (
          <div className="mt-6 rounded-lg bg-destructive/10 p-4 text-center text-sm text-destructive">
            {error}
          </div>
        )}

        {loading && !election ? (
          <div className="mt-8 text-center text-muted-foreground animate-pulse">
            Loading live result feed...
          </div>
        ) : (
          <>
            {/* Stat tiles */}
            <div className="mt-6 grid gap-3 sm:grid-cols-4">
              {results.slice(0, 4).map((r) => {
                const c = r.candidateObj;
                const pct = total ? ((r.votes / total) * 100).toFixed(1) : "0.0";
                return (
                  <div key={r.candidateId} className="rounded-xl border border-border bg-card p-4 shadow-sm">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: c?.color ?? "#888" }} />
                      <p className="text-xs font-semibold text-muted-foreground">{c?.party_abbr ?? "—"}</p>
                    </div>
                    <p className="mt-1 font-display text-2xl font-bold tabular-nums">{formatNumber(r.votes)}</p>
                    <p className="text-xs text-muted-foreground">{pct}% of total</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {/* Leader donut */}
              <section className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-1">
                <h2 className="font-display text-lg font-bold">Leading Candidate</h2>
                <div className="mt-6 grid place-items-center">
                  <Donut percent={leaderPct} color={leaderCandidate?.color ?? "#2e7d32"} label={`${leaderPct.toFixed(1)}%`} />
                </div>
                {leaderCandidate && (
                  <div className="mt-4 text-center">
                    <p className="font-display text-lg font-bold">{leaderCandidate.name}</p>
                    <p className="text-xs text-muted-foreground">{leaderCandidate.party}</p>
                    <p className="mt-2 text-sm text-brand-dark">
                      {formatNumber(leader.votes)} votes · leading by{" "}
                      {formatNumber(Math.max(0, leader.votes - (results[1]?.votes ?? 0)))}
                    </p>
                  </div>
                )}
              </section>

              {/* Breakdown */}
              <section className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-lg font-bold">Candidate Breakdown</h2>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brand">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                    </span>
                    Live
                  </span>
                </div>
                <ul className="mt-4 space-y-3">
                  {results.map((r) => {
                    const c = r.candidateObj;
                    const pct = total ? (r.votes / total) * 100 : 0;
                    const isMyVote = election?.has_voted; // Simulating local indicator
                    return (
                      <li key={r.candidateId}>
                        <div className="mb-1 flex items-center justify-between text-sm">
                          <span className="flex items-center gap-2 font-medium">
                            <span className="grid h-7 w-7 place-items-center rounded-md text-xs font-bold text-white" style={{ background: c?.color }}>
                              {c?.party_abbr}
                            </span>
                            {c?.name}
                          </span>
                          <span className="tabular-nums text-muted-foreground">
                            {formatNumber(r.votes)} · <span className="font-semibold text-foreground">{pct.toFixed(1)}%</span>
                          </span>
                        </div>
                        <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                          <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{ width: `${pct}%`, background: c?.color }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>
          </>
        )}

        {/* LGA Snapshots */}
        <section className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display text-lg font-bold">Local Government Turnout</h2>
              <p className="text-sm text-muted-foreground">Ballots cast per LGA · Lagos State snapshot</p>
            </div>
            <span className="hidden items-center gap-1.5 text-sm text-muted-foreground sm:inline-flex">
              <TrendingUp className="h-4 w-4 text-brand" /> Turnout trending up 3.2%
            </span>
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {LGAS.map((l) => (
              <div key={l.name} className="flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-md bg-primary-soft text-brand-dark">
                    <Users className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{l.name}</p>
                    <p className="text-xs text-muted-foreground">Lagos State</p>
                  </div>
                </div>
                <p className="font-display text-lg font-bold tabular-nums">{formatNumber(l.cast + (tick % 5) * 12)}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4 text-sm">
            <p className="text-muted-foreground">
              Total ballots cast: <span className="font-display text-lg font-bold text-foreground">{formatNumber(total)}</span>
            </p>
            <Link to="/dashboard" className="font-semibold text-brand hover:underline">Back to elections →</Link>
          </div>
        </section>
      </main>
    </div>
  );
}

function Donut({ percent, color, label }: { percent: number; color: string; label: string }) {
  const r = 60;
  const c = 2 * Math.PI * r;
  const offset = c - (percent / 100) * c;
  return (
    <div className="relative">
      <svg width={160} height={160} viewBox="0 0 160 160" className="-rotate-90">
        <circle cx="80" cy="80" r={r} fill="none" stroke="var(--muted)" strokeWidth="14" />
        <circle
          cx="80" cy="80" r={r} fill="none" stroke={color} strokeWidth="14" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 700ms ease" }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <p className="font-display text-2xl font-bold tabular-nums">{label}</p>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Leading</p>
        </div>
      </div>
    </div>
  );
}

