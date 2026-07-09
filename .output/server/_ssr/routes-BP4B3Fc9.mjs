import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowRight, M as Activity, _ as FingerprintPattern, c as ShieldCheck, x as Database } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BP4B3Fc9.js
var import_jsx_runtime = require_jsx_runtime();
function LandingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-brand/20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white shadow-lg shadow-brand/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold tracking-tight text-lg",
							children: "RemoteVote NG"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/results",
								className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:inline-block",
								children: "Live Results"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								className: "text-sm font-semibold text-brand hover:text-brand/80 transition-colors",
								children: "Sign In"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/signup",
								className: "hidden sm:flex items-center gap-1 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-foreground/90 transition-all shadow-sm",
								children: ["Register ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/15 via-background to-background pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[100px] pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-sm font-semibold mb-8 hover:bg-brand/15 transition-colors cursor-default",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative flex h-2 w-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-brand" })]
									}), "2026 General Elections Live"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6 max-w-4xl mx-auto leading-[1.1]",
									children: ["The Future of ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-400",
										children: "Nigerian Democracy"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed",
									children: "Secure, inclusive, and transparent remote voting. Empowering every eligible Nigerian to cast their ballot from anywhere with uncompromising integrity."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row items-center justify-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/login",
										className: "w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/25 hover:bg-brand/90 hover:-translate-y-0.5 transition-all duration-200",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FingerprintPattern, { className: "h-5 w-5" }), "Sign in to Vote"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/results",
										className: "w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border-2 border-border bg-card px-8 py-3.5 text-base font-semibold text-foreground shadow-sm hover:border-brand/30 hover:bg-brand/5 hover:-translate-y-0.5 transition-all duration-200",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-5 w-5 text-brand" }), "View Live Collation"]
									})]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-border/40 bg-muted/30 py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center mb-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl md:text-4xl font-bold tracking-tight mb-4",
								children: "Engineered for Trust"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground max-w-2xl mx-auto",
								children: "Built from the ground up to ensure complete transparency, security, and accessibility for the Nigerian electoral process."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
							children: [
								{
									icon: FingerprintPattern,
									title: "NIMC Verification",
									desc: "Instant biometric and NIN-based authentication ensures one citizen, one vote.",
									color: "text-blue-500",
									bg: "bg-blue-500/10"
								},
								{
									icon: Activity,
									title: "Real-Time Collation",
									desc: "Watch live LGA turnouts and aggregated results with transparent analytics.",
									color: "text-emerald-500",
									bg: "bg-emerald-500/10"
								},
								{
									icon: Database,
									title: "Immutable Ledger",
									desc: "Every interaction is secured in a cryptographic audit log to prevent tampering.",
									color: "text-purple-500",
									bg: "bg-purple-500/10"
								},
								{
									icon: ShieldCheck,
									title: "Role-Based Integrity",
									desc: "Specialized secure portals for Voters, Presiding Officers, and Accredited Media.",
									color: "text-amber-500",
									bg: "bg-amber-500/10"
								}
							].map((feature, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-brand/30 transition-all duration-300",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `h-12 w-12 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(feature.icon, { className: "h-6 w-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-bold mb-2",
										children: feature.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground leading-relaxed",
										children: feature.desc
									})
								]
							}, i))
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border/40 py-12 bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-muted-foreground",
								children: "RemoteVote NG"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "© 2026 RemoteVote NG Systems. All rights reserved."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								className: "text-sm text-muted-foreground hover:text-foreground",
								children: "Staff Portal"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/results",
								className: "text-sm text-muted-foreground hover:text-foreground",
								children: "Transparency"
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { LandingPage as component };
