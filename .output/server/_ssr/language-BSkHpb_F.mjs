import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Check } from "../_libs/lucide-react.mjs";
import { i as setSession, r as getSession } from "./AppHeader-BudCmw4d.mjs";
import { i as primaryBtnClass, t as AuthLayout } from "./AuthLayout-BrZPvPeY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/language-BSkHpb_F.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LANGS = [
	{
		code: "en",
		label: "English",
		native: "English"
	},
	{
		code: "ha",
		label: "Hausa",
		native: "Hausa"
	},
	{
		code: "yo",
		label: "Yoruba",
		native: "Yorùbá"
	},
	{
		code: "ig",
		label: "Igbo",
		native: "Igbo"
	},
	{
		code: "pcm",
		label: "Nigerian Pidgin",
		native: "Naija"
	},
	{
		code: "ff",
		label: "Fulfulde",
		native: "Fulfulde"
	}
];
function LanguagePage() {
	const nav = useNavigate();
	const [selected, setSelected] = (0, import_react.useState)("en");
	const submit = () => {
		const s = getSession();
		if (s) setSession({
			...s,
			language: LANGS.find((l) => l.code === selected)?.label ?? "English"
		});
		nav({ to: "/dashboard" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthLayout, {
		title: "Select Preferred Language",
		subtitle: "Choose the language you'd like the ballot, instructions, and voice guidance to appear in.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: LANGS.map((l) => {
				const active = l.code === selected;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setSelected(l.code),
					className: `flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left transition ${active ? "border-brand bg-primary-soft/60" : "border-border bg-card hover:border-brand/50 hover:bg-muted"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold text-foreground",
						children: l.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: l.native
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `grid h-6 w-6 place-items-center rounded-full border-2 ${active ? "border-brand bg-brand text-white" : "border-border"}`,
						children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
					})]
				}, l.code);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: submit,
			className: `${primaryBtnClass} mt-6`,
			children: "Continue"
		})]
	});
}
//#endregion
export { LanguagePage as component };
