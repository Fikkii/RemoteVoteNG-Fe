import { n as __toESM } from "../_runtime.mjs";
import { n as setAuthToken, t as apiRequest } from "./api-BZPBSQcW.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as setSession } from "./mock-store-ibCr2NBF.mjs";
import { i as primaryBtnClass, n as FormField, r as inputClass, t as AuthLayout } from "./AuthLayout-PU1ron0f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CWDAgJ0f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SignInPage() {
	const navigate = useNavigate();
	const [nin, setNin] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const onSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		if (!/^[a-zA-Z]/.test(nin) && !/^\d{11}$/.test(nin)) {
			setError("Please enter a valid 11-digit NIN or Staff Number.");
			return;
		}
		if (password.length < 6) {
			setError("Password must be at least 6 characters.");
			return;
		}
		setLoading(true);
		try {
			const res = await apiRequest("/auth/login/", "POST", {
				nin,
				password
			});
			setAuthToken(res.token);
			setSession({
				fullName: res.voter.full_name,
				nin: res.voter.username,
				email: res.voter.email,
				state: res.voter.state,
				lga: res.voter.lga,
				verified: res.voter.is_verified,
				language: res.voter.language || "English"
			});
			if (res.voter.is_verified) navigate({ to: "/dashboard" });
			else navigate({ to: "/verify" });
		} catch (err) {
			if (err.message && err.message.includes("not verified")) {
				setSession({
					fullName: "Voter",
					nin,
					state: "",
					lga: "",
					verified: false,
					language: "English"
				});
				navigate({ to: "/verify" });
			} else setError(err.message || "Invalid NIN or password.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, {
		title: "Sign in",
		subtitle: "Enter your NIN and password to continue your secure session.",
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Don't have an account?",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/signup",
				className: "font-semibold text-brand hover:underline",
				children: "Create Account"
			})
		] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "NIN or Staff Number",
					hint: "Enter your 11-digit NIN or your INEC Staff ID.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						placeholder: "e.g. 11111111111 or STAFF-PO",
						value: nin,
						onChange: (e) => setNin(e.target.value),
						className: inputClass,
						"aria-invalid": error?.includes("NIN") || void 0
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Password",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "password",
						placeholder: "Enter your password",
						value: password,
						onChange: (e) => setPassword(e.target.value),
						className: inputClass
					})
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							className: "h-4 w-4 accent-[oklch(0.5_0.17_145)]"
						}), " Remember me"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/forgot",
						className: "font-medium text-brand hover:underline",
						children: "Forgot password?"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: loading,
					className: primaryBtnClass,
					children: loading ? "Signing in…" : "Sign in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs text-muted-foreground",
					children: "By continuing you agree to our voter privacy notice — your NIN is decoupled from your ballot."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 border-t border-border pt-4 flex flex-col gap-2 text-center text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-foreground/60 uppercase tracking-wider text-[9px]",
							children: "Other Portals"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 justify-center flex-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/accreditation",
								className: "rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition",
								children: "📰 Apply for Media / Observer Accreditation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/signup",
								className: "rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition",
								children: "🗳️ Register as a Voter"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-muted-foreground/60",
							children: "Electoral staff? Use the invitation link sent to your official email."
						})
					]
				})
			]
		})
	});
}
//#endregion
export { SignInPage as component };
