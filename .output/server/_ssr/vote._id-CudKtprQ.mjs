import { n as __toESM } from "../_runtime.mjs";
import { t as apiRequest } from "./api-C6UfzThm.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowLeft, C as CircleCheck, c as ShieldCheck, l as Search, t as X } from "../_libs/lucide-react.mjs";
import { r as getSession, t as AppHeader } from "./AppHeader-CUt1SoDQ.mjs";
import { t as Route } from "./vote._id-BZJY8k5B.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vote._id-CudKtprQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function VotePage() {
	const { id } = Route.useParams();
	const nav = useNavigate();
	const [election, setElection] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	const [query, setQuery] = (0, import_react.useState)("");
	const [partyFilter, setPartyFilter] = (0, import_react.useState)(null);
	const [letterFilter, setLetterFilter] = (0, import_react.useState)(null);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [reviewing, setReviewing] = (0, import_react.useState)(false);
	const [receipt, setReceipt] = (0, import_react.useState)(null);
	const [alreadyVoted, setAlreadyVoted] = (0, import_react.useState)(false);
	const [casting, setCasting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!getSession()) {
			nav({ to: "/" });
			return;
		}
		const fetchElectionData = async () => {
			try {
				setLoading(true);
				const data = await apiRequest(`/elections/${id}/`);
				setElection(data);
				if (data.has_voted) setAlreadyVoted(true);
			} catch (err) {
				console.error("Failed to load election details:", err);
				setError(err.message || "Failed to load election details.");
			} finally {
				setLoading(false);
			}
		};
		fetchElectionData();
	}, [id, nav]);
	const candidates = election?.candidates || [];
	(0, import_react.useMemo)(() => Array.from(new Set(candidates.map((c) => c.party_abbr))), [candidates]);
	const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
	const filtered = candidates.filter((c) => {
		const q = query.toLowerCase();
		const matchesQuery = !q || c.name.toLowerCase().includes(q) || c.party.toLowerCase().includes(q);
		const matchesParty = !partyFilter || c.party_abbr === partyFilter;
		const matchesLetter = !letterFilter || c.party_abbr.toUpperCase().startsWith(letterFilter) || c.party.toUpperCase().startsWith(letterFilter);
		return matchesQuery && matchesParty && matchesLetter;
	});
	const confirmVote = async () => {
		if (!selected || !election) return;
		setError(null);
		setCasting(true);
		try {
			const res = await apiRequest("/vote/", "POST", {
				election_id: id,
				candidate_id: selected
			});
			setReceipt(res.receipt);
			setAlreadyVoted(true);
			setReviewing(false);
		} catch (err) {
			setError(err.message || "Failed to cast vote. Please try again.");
			setReviewing(false);
		} finally {
			setCasting(false);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-5xl px-4 py-16 text-center animate-pulse",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Loading ballot details..."
			})
		})]
	});
	if (!election) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-4 py-16 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Election not found or server unavailable."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/dashboard",
				className: "mt-4 inline-block font-semibold text-brand hover:underline",
				children: "Back to elections"
			})]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-5xl px-4 py-8 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/dashboard",
						className: "inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-brand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " All elections"]
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 rounded-lg bg-destructive/10 p-4 text-center text-sm text-destructive",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-wider text-brand",
								children: election.date
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-1 font-display text-3xl font-bold sm:text-4xl",
								children: election.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Review each candidate, then confirm your choice on the review screen."
							})
						] }), alreadyVoted && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-success/15 px-3 py-1.5 text-sm font-semibold text-success",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), " Ballot already cast"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col sm:flex-row gap-6 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-row sm:flex-col flex-wrap gap-1.5 shrink-0 justify-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
								active: !letterFilter,
								onClick: () => setLetterFilter(null),
								children: "All"
							}), ALPHABET.map((letter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
								active: letterFilter === letter,
								onClick: () => setLetterFilter(letter),
								children: letter
							}, letter))]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-col gap-3 rounded-xl border border-border bg-card p-3 shadow-sm sm:flex-row sm:items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex-1 sm:max-w-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											placeholder: "Search candidate or party…",
											value: query,
											onChange: (e) => setQuery(e.target.value),
											className: "w-full rounded-lg border border-input bg-background py-2 pl-9 pr-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/25"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 grid gap-3 sm:grid-cols-2",
									children: filtered.map((c) => {
										const active = selected === c.id;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => {
												if (!alreadyVoted) {
													setSelected(c.id);
													setReviewing(true);
												}
											},
											disabled: alreadyVoted,
											"aria-pressed": active,
											className: `h-full w-full rounded-2xl border p-4 text-left transition ${active ? "border-brand bg-primary-soft/50 shadow-md" : "border-border bg-card hover:border-brand/50 hover:shadow-sm"} ${alreadyVoted && !active ? "opacity-40" : ""}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-3",
												children: [c.party_logo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: c.party_logo,
													alt: `${c.party_abbr} logo`,
													className: "h-14 w-14 shrink-0 rounded-xl object-contain shadow-sm bg-white p-1"
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "grid h-14 w-14 shrink-0 place-items-center rounded-xl font-display text-lg font-bold text-white shadow-sm",
													style: { background: c.color },
													"aria-hidden": true,
													children: c.party_abbr
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0 flex-1",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-start justify-between gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "min-w-0",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "truncate font-display text-lg font-bold",
																	children: c.name
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "truncate text-xs text-muted-foreground",
																	children: c.party
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: `mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 ${active ? "border-brand bg-brand text-white" : "border-border"}`,
																children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" })
															})]
														}),
														c.running_mate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "mt-1 text-xs text-muted-foreground",
															children: ["Running mate: ", c.running_mate]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-2 line-clamp-2 text-sm text-foreground/80",
															children: c.manifesto
														})
													]
												})]
											})
										}) }, c.id);
									})
								}),
								filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 text-center text-sm text-muted-foreground",
									children: "No candidates match your filters."
								})
							]
						})]
					})
				]
			}),
			reviewing && selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				onClose: () => setReviewing(false),
				title: "Review your ballot",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Please confirm. Once submitted, your ballot is committed and cannot be changed."
					}),
					(() => {
						const c = candidates.find((x) => x.id === selected);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center gap-3 rounded-xl border border-border bg-surface p-4",
							children: [c.party_logo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: c.party_logo,
								alt: `${c.party_abbr} logo`,
								className: "h-12 w-12 shrink-0 rounded-lg object-contain bg-white p-0.5"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-12 w-12 place-items-center rounded-lg font-display font-bold text-white",
								style: { background: c.color },
								children: c.party_abbr
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg font-bold",
								children: c.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: c.party
							})] })]
						});
					})(),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center gap-2 rounded-lg bg-primary-soft/40 px-3 py-2 text-xs text-brand-dark",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }), "Your NIN is not linked to this ballot. Voter anonymity is preserved."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setReviewing(false),
							disabled: casting,
							className: "flex-1 rounded-lg border border-input bg-background px-4 py-2.5 text-sm font-semibold hover:bg-muted",
							children: "Go back"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onDoubleClick: confirmVote,
							onClick: confirmVote,
							disabled: casting,
							className: "flex-1 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark",
							children: casting ? "Casting Ballot..." : "Confirm & Cast"
						})]
					})
				]
			}),
			receipt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				onClose: () => nav({ to: "/dashboard" }),
				title: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid h-16 w-16 place-items-center rounded-full bg-success/15 text-success",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-9 w-9" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-2xl font-bold",
							children: "Vote Cast Successfully"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Your ballot has been securely recorded. Save your receipt token as proof of participation."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 rounded-lg border border-dashed border-brand/50 bg-primary-soft/40 px-4 py-3 font-mono text-sm tracking-wider text-brand-dark",
							children: receipt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dashboard",
								className: "flex-1 rounded-lg border border-input bg-background px-4 py-2.5 text-sm font-semibold hover:bg-muted",
								children: "Back to elections"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/results",
								className: "flex-1 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark",
								children: "See live results"
							})]
						})
					]
				})
			})
		]
	});
}
function FilterChip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		className: `rounded-full px-3 py-1.5 text-xs font-semibold transition ${active ? "bg-brand text-white" : "bg-muted text-muted-foreground hover:text-foreground"}`,
		children
	});
}
function Modal({ title, children, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 grid place-items-center bg-foreground/40 p-4 backdrop-blur-sm",
		role: "dialog",
		"aria-modal": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between",
				children: [title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-bold",
					children: title
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "rounded-md p-1 text-muted-foreground hover:bg-muted",
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2",
				children
			})]
		})
	});
}
//#endregion
export { VotePage as component };
