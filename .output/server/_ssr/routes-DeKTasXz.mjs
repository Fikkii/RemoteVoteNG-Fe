import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as FingerprintPattern, c as ShieldCheck, j as Activity, x as Database } from "../_libs/lucide-react.mjs";
import { t as AppHeader } from "./AppHeader-CUt1SoDQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DeKTasXz.js
var import_jsx_runtime = require_jsx_runtime();
function LandingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-brand/20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 flex flex-col justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden py-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/15 via-background to-background pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[100px] pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] md:text-[12px] font-semibold mb-8 hover:bg-brand/15 transition-colors cursor-default",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative flex h-2 w-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-brand" })]
									}), "2026 General Elections Live"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "text-[49px] md:text-[55px] font-extrabold tracking-tight text-foreground mb-4 max-w-4xl mx-auto leading-[1.1]",
									children: ["The Future of ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-400",
										children: "Nigerian Democracy"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[16px] md:text-[18px] text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed",
									children: "Secure, inclusive, and transparent remote voting. Empowering every eligible Nigerian to cast their ballot from anywhere with uncompromising integrity."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/login",
										className: "inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-[8px] bg-brand px-[32px] py-[16px] text-[16px] lg:text-[18px] font-semibold text-white shadow-sm transition hover:bg-brand-dark",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FingerprintPattern, { className: "h-5 w-5" }), "Sign in to Vote"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/accreditation",
										className: "inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-[8px] border-2 border-border bg-card px-[32px] py-[16px] text-[16px] lg:text-[18px] font-semibold text-foreground shadow-sm transition hover:border-brand/30 hover:bg-brand/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5 text-brand" }), "Apply for Accreditation"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pt-8 border-t border-border/40",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-5xl mx-auto",
										children: [
											{
												icon: FingerprintPattern,
												title: "NIMC Verification",
												desc: "Instant biometric authentication.",
												color: "text-blue-500"
											},
											{
												icon: Activity,
												title: "Real-Time Collation",
												desc: "Transparent live results.",
												color: "text-emerald-500"
											},
											{
												icon: Database,
												title: "Immutable Ledger",
												desc: "Cryptographic audit logs.",
												color: "text-purple-500"
											},
											{
												icon: ShieldCheck,
												title: "Role Integrity",
												desc: "Secure specialized portals.",
												color: "text-amber-500"
											}
										].map((feature, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col items-center text-center p-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(feature.icon, { className: `h-8 w-8 mb-4 ${feature.color}` }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-bold text-[16px] mb-1",
													children: feature.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[13px] text-muted-foreground",
													children: feature.desc
												})
											]
										}, i))
									})
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border/40 py-6 bg-background",
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
