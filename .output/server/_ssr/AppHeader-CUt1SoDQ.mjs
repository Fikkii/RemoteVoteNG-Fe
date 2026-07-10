import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as LogOut, i as User } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AppHeader-CUt1SoDQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_default = "data:image/svg+xml,%3csvg%20width='32'%20height='31'%20viewBox='0%200%2032%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%208.23438C16%2012.2471%2012.7107%2015.5%208.65306%2015.5H1.30612V8.23438C1.30612%204.22168%204.59545%200.96875%208.65306%200.96875C12.7107%200.96875%2016%204.22168%2016%208.23438Z'%20fill='%2317CF97'/%3e%3cpath%20d='M16%2022.7656C16%2018.7529%2019.2893%2015.5%2023.3469%2015.5H30.6939V22.7656C30.6939%2026.7783%2027.4045%2030.0312%2023.3469%2030.0312C19.2893%2030.0312%2016%2026.7783%2016%2022.7656Z'%20fill='%2317CF97'/%3e%3cpath%20d='M1.30612%2022.7656C1.30612%2026.7783%204.59545%2030.0312%208.65306%2030.0312H16V22.7656C16%2018.7529%2012.7107%2015.5%208.65306%2015.5C4.59545%2015.5%201.30612%2018.7529%201.30612%2022.7656Z'%20fill='%2317CF97'/%3e%3cpath%20d='M30.6939%208.23438C30.6939%204.22168%2027.4045%200.96875%2023.3469%200.96875H16V8.23438C16%2012.2471%2019.2893%2015.5%2023.3469%2015.5C27.4045%2015.5%2030.6939%2012.2471%2030.6939%208.23438Z'%20fill='%2317CF97'/%3e%3c/svg%3e";
var KEY = "rvng.session.v1";
function getSession() {
	if (typeof window === "undefined") return null;
	try {
		const raw = window.localStorage.getItem(KEY);
		return raw ? JSON.parse(raw) : null;
	} catch {
		return null;
	}
}
function setSession(s) {
	if (typeof window === "undefined") return;
	if (!s) window.localStorage.removeItem(KEY);
	else window.localStorage.setItem(KEY, JSON.stringify(s));
}
function formatNumber(n) {
	return n.toLocaleString("en-NG");
}
function AppHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [name, setName] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setName(getSession()?.fullName ?? null);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-border/60 bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-6xl items-center justify-between px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: logo_default,
					alt: "Brand Logo"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-display font-bold text-[16px] md:text-[18px]",
					children: ["RemoteVote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-brand",
						children: "NG"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-2",
				children: name ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 sm\r\n:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-6 w-6 place-items-center rounded-full bg-primary-soft text-brand-dark",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-3.5 w-3.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: name
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 md:flex",
						children: [{
							to: "/dashboard",
							label: "Elections"
						}, {
							to: "/results",
							label: "Live Results"
						}].map((n) => {
							const active = pathname === n.to;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: n.to,
								className: `rounded-lg px-3 py-1.5 text-[13px] md:text-[14px] font-medium transition-colors ${active ? "bg-primary-soft text-brand-dark" : "text-muted-foreground hover:text-foreground"}`,
								children: n.label
							}, n.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setSession(null);
							try {
								localStorage.removeItem("rvng.token");
							} catch (e) {}
							window.location.href = "/";
						},
						className: "inline-flex items-center gap-1.5 rounded-[8px] border border-border bg-card px-3 py-1.5 \r\ntext-sm font-medium hover:bg-muted",
						"aria-label": "Sign out",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline text-[14px]",
							children: "Sign out"
						})]
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden text-xs text-muted-foreground sm:inline",
					children: "Secure. Inclusive. Transparent."
				})
			})]
		})
	});
}
//#endregion
export { setSession as i, formatNumber as n, getSession as r, AppHeader as t };
