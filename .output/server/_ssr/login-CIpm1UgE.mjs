import { n as __toESM } from "../_runtime.mjs";
import { n as setAuthToken, t as apiRequest } from "./api-DWUceDVU.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as setSession } from "./AppHeader-BudCmw4d.mjs";
import { i as primaryBtnClass, n as FormField, r as inputClass, t as AuthLayout } from "./AuthLayout-BrZPvPeY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-CIpm1UgE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SignInPage() {
	const navigate = useNavigate();
	const [identifier, setIdentifier] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	/**
	* Determine what kind of identifier was entered:
	*  - 19-char alphanumeric starting with 3 letters  → VIN (Voter ID)
	*  - starts with a letter (INEC/... or STAFF-...)   → Staff Number
	*  - 11 digits                                      → NIN fallback
	*/
	const getLoginPayload = (id, pwd) => {
		const trimmed = id.trim();
		if (/^[A-Za-z]{2,3}\d+[A-Za-z]{1,2}$/.test(trimmed)) return {
			voter_id: trimmed,
			password: pwd
		};
		if (/^[A-Za-z]/.test(trimmed)) return {
			staff_id: trimmed,
			password: pwd
		};
		return {
			nin: trimmed,
			password: pwd
		};
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		const trimmed = identifier.trim();
		if (!trimmed) {
			setError("Please enter your Voter ID, Staff Number, or NIN.");
			return;
		}
		if (password.length < 6) {
			setError("Password must be at least 6 characters.");
			return;
		}
		setLoading(true);
		try {
			const res = await apiRequest("/auth/login/", "POST", getLoginPayload(trimmed, password));
			setAuthToken(res.token);
			const userData = res.voter || res.staff;
			setSession({
				fullName: userData.full_name || userData.username,
				nin: userData.username,
				email: userData.email,
				state: userData.state || "",
				lga: userData.lga || "",
				verified: userData.is_verified,
				language: userData.language || "English",
				role: userData.role,
				staffNumber: userData.staff_number,
				voterId: userData.voter_id
			});
			if (userData.is_verified) navigate({ to: "/dashboard" });
			else navigate({ to: "/verify" });
		} catch (err) {
			if (err.message?.includes("not verified")) {
				setSession({
					fullName: "Voter",
					nin: identifier.trim(),
					state: "",
					lga: "",
					verified: false,
					language: "English"
				});
				navigate({ to: "/verify" });
			} else setError(err.message || "Invalid credentials. Please check your details and try again.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, {
		title: "Sign in",
		subtitle: "Enter your Voter ID (VIN), Staff Number, or NIN to continue your secure session.",
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "font-semibold text-[16px] md:text-[18px]",
			children: [
				"Don't have an account?",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/signup",
					className: "text-brand hover:underline",
					children: "Create Account"
				})
			]
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Voter ID / Staff Number / NIN",
					hint: "Voters: enter your VIN (e.g. LAG1234567890123IK). Staff: enter your Staff Number.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "login-identifier",
						placeholder: "e.g. LAG12345678901IK  or  INEC/LAG/PO/2026/123456",
						value: identifier,
						onChange: (e) => setIdentifier(e.target.value),
						className: `${inputClass} font-mono tracking-wide`,
						autoComplete: "username",
						"aria-label": "Voter ID, Staff Number or NIN"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Password",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "login-password",
						type: "password",
						placeholder: "Enter your password",
						value: password,
						onChange: (e) => setPassword(e.target.value),
						className: inputClass,
						autoComplete: "current-password"
					})
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center mb-[32px] text-[16px] lg:text-[18px] font-bold justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/forgot",
						className: "text-brand hover:underline",
						children: "Forgot password?"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					id: "login-submit",
					type: "submit",
					disabled: loading,
					className: primaryBtnClass,
					children: loading ? "Signing in…" : "Sign in"
				})
			]
		})
	});
}
//#endregion
export { SignInPage as component };
