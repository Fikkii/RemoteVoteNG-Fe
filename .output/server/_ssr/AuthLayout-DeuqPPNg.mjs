import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as AppHeader } from "./AppHeader-CUt1SoDQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AuthLayout-DeuqPPNg.js
var import_jsx_runtime = require_jsx_runtime();
var auth_hero_default = "/assets/auth-hero-BpALstqu.jpg";
function AuthLayout({ title, subtitle, children, footer }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto grid max-w-6xl h-screen gap-6 px-4 py-6 sm:px-6 md:grid-cols-2 md:py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "flex items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full border border-border bg-card p-6 shadow-sm sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-1 font-display text-[49px] lg:text-[55px] font-bold tracking-tight",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-[32px]",
							children
						}),
						footer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 border-t border-border pt-4 text-center text-sm text-muted-foreground",
							children: footer
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "relative hidden overflow-hidden bg-brand-dark md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: auth_hero_default,
					alt: "Nigerian voters holding a VOTE placard, campaign poster reading Your Voice, Your Power, Your Future",
					className: "h-full w-full object-cover",
					width: 896,
					height: 1280
				})
			})]
		})]
	});
}
function FormField({ label, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-[12.5px] block text-[16px] lg:text-[18px] font-medium text-foreground",
			children: label
		}), children]
	});
}
var inputClass = "w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-[16px] lg:text-[18px] text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/25";
var primaryBtnClass = "inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-brand px-[32px] py-[16px] text-[16px] lg:text-[18px] font-semibold text-white shadow-sm transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60";
//#endregion
export { primaryBtnClass as i, FormField as n, inputClass as r, AuthLayout as t };
