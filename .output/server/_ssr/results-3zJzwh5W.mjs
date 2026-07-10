import { n as __toESM } from "../_runtime.mjs";
import { t as apiRequest } from "./api-C6UfzThm.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as TrendingUp, r as Users } from "../_libs/lucide-react.mjs";
import { n as formatNumber, t as AppHeader } from "./AppHeader-CUt1SoDQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/results-3zJzwh5W.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LGAS = [
	{
		name: "Ikeja",
		cast: 32455
	},
	{
		name: "Surulere",
		cast: 28120
	},
	{
		name: "Alimosho",
		cast: 41902
	},
	{
		name: "Eti-Osa",
		cast: 19884
	},
	{
		name: "Yaba",
		cast: 15733
	}
];
function ResultsPage() {
	const [electionId, setElectionId] = (0, import_react.useState)("presidential-2027");
	const [election, setElection] = (0, import_react.useState)(null);
	const [allElections, setAllElections] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	const [tick, setTick] = (0, import_react.useState)(0);
	const [simulatedVotes, setSimulatedVotes] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		setSimulatedVotes({});
		setElection(null);
		setLoading(true);
	}, [electionId]);
	(0, import_react.useEffect)(() => {
		let active = true;
		const fetchResults = async () => {
			try {
				const [electionData, allData] = await Promise.all([apiRequest(`/elections/${electionId}/`), apiRequest("/elections/")]);
				if (!active) return;
				setElection(electionData);
				setAllElections(allData);
				setError(null);
				setSimulatedVotes((prev) => {
					if (Object.keys(prev).length > 0) return prev;
					const newSim = {};
					electionData.candidates.forEach((c) => {
						const base = Math.floor(Math.random() * 4e6) + 1e6;
						newSim[c.id] = base + c.votes_count;
					});
					return newSim;
				});
			} catch (err) {
				if (!active) return;
				console.error("Failed to fetch election:", err);
				setError("Could not load election data from server.");
			} finally {
				if (active) setLoading(false);
			}
		};
		fetchResults();
		const interval = setInterval(() => {
			setSimulatedVotes((prev) => {
				if (Object.keys(prev).length === 0) return prev;
				const updated = { ...prev };
				Object.keys(updated).forEach((id) => {
					updated[id] += Math.floor(Math.random() * 400) + 100;
				});
				return updated;
			});
			setTick((t) => t + 1);
		}, 1500);
		return () => {
			active = false;
			clearInterval(interval);
		};
	}, [electionId]);
	const results = (0, import_react.useMemo)(() => {
		if (!election) return [];
		return election.candidates.map((c) => ({
			candidateId: c.id,
			votes: simulatedVotes[c.id] || c.votes_count,
			candidateObj: c
		})).sort((a, b) => b.votes - a.votes);
	}, [election, simulatedVotes]);
	const total = results.reduce((s, r) => s + r.votes, 0);
	const leader = results[0];
	const leaderCandidate = leader?.candidateObj;
	const leaderPct = leader && total ? leader.votes / total * 100 : 0;
	const activeElections = allElections.filter((e) => e.status === "active");
	const allActiveVoted = activeElections.length > 0 ? activeElections.every((e) => e.has_voted) : true;
	const isBlocked = allElections.length > 0 && !allActiveVoted;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-4 py-8 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-wider text-brand",
							children: "Live Feed"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-1 font-display text-3xl font-bold sm:text-4xl",
							children: "Current Results"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Updating securely · totals aggregated nationwide"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: electionId,
						onChange: (e) => setElectionId(e.target.value),
						className: "rounded-lg border border-input bg-card px-3 py-2 text-sm font-medium shadow-sm",
						children: allElections.length > 0 ? allElections.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: e.id,
							children: e.title
						}, e.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "presidential-2027",
								children: "Presidential Election"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "senate-2027",
								children: "National Assembly — Senate"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "house-reps-2027",
								children: "House of Representatives"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "governorship-lagos-2027",
								children: "Lagos Governorship"
							})
						] })
					})]
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 rounded-lg bg-destructive/10 p-4 text-center text-sm text-destructive",
					children: error
				}),
				loading && !election ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 text-center text-muted-foreground animate-pulse",
					children: "Loading live result feed..."
				}) : isBlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 rounded-2xl border border-border bg-card p-12 text-center shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-8 w-8" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-display text-2xl font-bold",
							children: "Results Locked"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-muted-foreground max-w-md mx-auto",
							children: [
								"You must cast your ballot for ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "all active elections" }),
								" before you can view the live aggregated results."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dashboard",
								className: "rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark",
								children: "Go to Dashboard"
							})
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-3 sm:grid-cols-4",
					children: results.slice(0, 4).map((r) => {
						const c = r.candidateObj;
						const pct = total ? (r.votes / total * 100).toFixed(1) : "0.0";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card p-4 shadow-sm relative overflow-hidden group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "h-2.5 w-2.5 rounded-full",
										style: { background: c?.color ?? "#888" }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold text-muted-foreground",
										children: c?.party_abbr ?? "—"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-2xl font-bold tabular-nums transition-all duration-300",
									children: formatNumber(r.votes)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [pct, "% of total"]
								})
							]
						}, r.candidateId);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-6 lg:grid-cols-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-lg font-bold",
								children: "Leading Candidate"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Donut, {
									percent: leaderPct,
									color: leaderCandidate?.color ?? "#2e7d32",
									label: `${leaderPct.toFixed(1)}%`
								})
							}),
							leaderCandidate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 text-center animate-in fade-in duration-500",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-lg font-bold",
										children: leaderCandidate.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: leaderCandidate.party
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-sm text-brand-dark font-medium",
										children: [
											formatNumber(leader.votes),
											" votes · leading by",
											" ",
											formatNumber(Math.max(0, leader.votes - (results[1]?.votes ?? 0)))
										]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-lg font-bold",
								children: "Candidate Breakdown"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 text-xs font-medium text-brand",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative flex h-2 w-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-brand" })]
								}), "Live Simulation"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3",
							children: results.map((r) => {
								const c = r.candidateObj;
								const pct = total ? r.votes / total * 100 : 0;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-1 flex items-center justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2 font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-7 w-7 place-items-center rounded-md text-[10px] font-bold text-white shadow-sm",
											style: { background: c?.color },
											children: c?.party_abbr
										}), c?.name]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular-nums text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground transition-all duration-300",
												children: formatNumber(r.votes)
											}),
											" · ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-semibold text-foreground",
												children: [pct.toFixed(1), "%"]
											})
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-2.5 w-full overflow-hidden rounded-full bg-muted shadow-inner",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full rounded-full transition-all duration-[1500ms] ease-out",
										style: {
											width: `${pct}%`,
											background: c?.color
										}
									})
								})] }, r.candidateId);
							})
						})]
					})]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-lg font-bold",
								children: "Local Government Turnout"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Ballots cast per LGA · Lagos State snapshot"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hidden items-center gap-1.5 text-sm text-muted-foreground sm:inline-flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4 text-brand" }), " Turnout trending up 3.2%"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid gap-2 sm:grid-cols-2",
							children: LGAS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-9 w-9 place-items-center rounded-md bg-primary-soft text-brand-dark",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold",
										children: l.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Lagos State"
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg font-bold tabular-nums",
									children: formatNumber(l.cast + tick % 5 * 12)
								})]
							}, l.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground",
								children: ["Total ballots cast: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg font-bold text-foreground",
									children: formatNumber(total)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dashboard",
								className: "font-semibold text-brand hover:underline",
								children: "Back to elections →"
							})]
						})
					]
				})
			]
		})]
	});
}
function Donut({ percent, color, label }) {
	const r = 60;
	const c = 2 * Math.PI * r;
	const offset = c - percent / 100 * c;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: 160,
			height: 160,
			viewBox: "0 0 160 160",
			className: "-rotate-90",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "80",
				cy: "80",
				r,
				fill: "none",
				stroke: "var(--muted)",
				strokeWidth: "14"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "80",
				cy: "80",
				r,
				fill: "none",
				stroke: color,
				strokeWidth: "14",
				strokeLinecap: "round",
				strokeDasharray: c,
				strokeDashoffset: offset,
				style: { transition: "stroke-dashoffset 700ms ease" }
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 grid place-items-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl font-bold tabular-nums",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] uppercase tracking-wider text-muted-foreground",
					children: "Leading"
				})]
			})
		})]
	});
}
//#endregion
export { ResultsPage as component };
