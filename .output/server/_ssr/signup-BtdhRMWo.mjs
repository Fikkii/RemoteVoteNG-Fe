import { n as __toESM } from "../_runtime.mjs";
import { n as setAuthToken, t as apiRequest } from "./api-DWUceDVU.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as setSession } from "./AppHeader-BudCmw4d.mjs";
import { i as primaryBtnClass, n as FormField, r as inputClass, t as AuthLayout } from "./AuthLayout-BrZPvPeY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signup-BtdhRMWo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SignUpPage() {
	const nav = useNavigate();
	const [step, setStep] = (0, import_react.useState)("verify");
	const [lookup, setLookup] = (0, import_react.useState)({
		nin: "",
		vrn: ""
	});
	const [vrnInfo, setVrnInfo] = (0, import_react.useState)(null);
	const [lookupLoading, setLookupLoading] = (0, import_react.useState)(false);
	const [lookupError, setLookupError] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)({
		password: "",
		confirm_password: ""
	});
	const [error, setError] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const handleLookup = async (e) => {
		e.preventDefault();
		if (!/^\d{11}$/.test(lookup.nin)) return setLookupError("NIN must be exactly 11 digits.");
		if (!lookup.vrn.trim()) return setLookupError("Voter Registration Number (VRN) is required.");
		setLookupError(null);
		setLookupLoading(true);
		try {
			const res = await apiRequest("/auth/vrn-lookup/", "POST", {
				nin: lookup.nin,
				vrn: lookup.vrn.trim().toUpperCase()
			});
			setVrnInfo(res);
			setStep("register");
		} catch (err) {
			setLookupError(err.message || "Verification failed. Check your NIN and VRN.");
		} finally {
			setLookupLoading(false);
		}
	};
	const handleRegister = async (e) => {
		e.preventDefault();
		if (form.password.length < 6) return setError("Password must be at least 6 characters.");
		if (form.password !== form.confirm_password) return setError("Passwords do not match.");
		setError(null);
		setLoading(true);
		try {
			const response = await apiRequest("/auth/register/", "POST", {
				nin: lookup.nin,
				vrn: lookup.vrn.trim().toUpperCase(),
				password: form.password
			});
			if (!(response.requires_otp !== false) && response.token) {
				setAuthToken(response.token);
				setSession({
					fullName: response.voter?.full_name || response.full_name,
					nin: lookup.nin,
					state: response.state || "",
					lga: response.lga || "",
					verified: true,
					language: "English",
					role: "voter",
					voterId: response.voter_id
				});
				nav({ to: "/dashboard" });
				return;
			}
			setSession({
				fullName: response.full_name,
				nin: lookup.nin,
				state: response.state || "",
				lga: response.lga || "",
				verified: false,
				language: "English"
			});
			nav({ to: "/verify" });
		} catch (err) {
			setError(err.message || "Registration failed. Please check your details.");
		} finally {
			setLoading(false);
		}
	};
	if (step === "verify") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, {
		title: "Verify Your Identity",
		subtitle: "Enter your NIN and Voter Registration Number (VRN) exactly as printed on your Permanent Voter Card (PVC).",
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "font-semibold text-[16px] md:text-[18px]",
			children: [
				"Already have an account?",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					className: "text-brand hover:underline",
					children: "Sign in"
				})
			]
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleLookup,
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "National Identification Number (NIN)",
					hint: "11-digit NIN issued by NIMC.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "signup-nin",
						inputMode: "numeric",
						maxLength: 11,
						value: lookup.nin,
						onChange: (e) => setLookup({
							...lookup,
							nin: e.target.value.replace(/\D/g, "")
						}),
						placeholder: "e.g. 12345678901",
						className: inputClass
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Voter Registration Number (VRN)",
					hint: "Printed on the back of your Permanent Voter Card (PVC). e.g. LAG12345678AB",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "signup-vrn",
						value: lookup.vrn,
						onChange: (e) => setLookup({
							...lookup,
							vrn: e.target.value.toUpperCase()
						}),
						placeholder: "e.g. LAG12345678AB",
						className: `${inputClass} uppercase tracking-widest`
					})
				}),
				lookupError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive",
					children: lookupError
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: lookupLoading,
					className: primaryBtnClass,
					children: lookupLoading ? "Checking INEC Voter Register…" : "Verify Identity →"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthLayout, {
		title: "Create Your Account",
		subtitle: "Your identity has been verified. Set up your password to complete registration.",
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-semibold text-[16px] md:text-[18px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setStep("verify"),
				className: "text-brand hover:underline",
				children: "← Change NIN / VRN"
			})
		}),
		children: [vrnInfo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 mb-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-green-400 font-semibold uppercase tracking-wider mb-1",
					children: "✓ Identity Verified"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-bold text-foreground",
					children: vrnInfo.full_name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						vrnInfo.lga,
						", ",
						vrnInfo.state,
						vrnInfo.ward ? ` — ${vrnInfo.ward}` : ""
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleRegister,
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Create Password",
					hint: "Minimum 6 characters.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "signup-password",
						type: "password",
						value: form.password,
						onChange: (e) => setForm({
							...form,
							password: e.target.value
						}),
						placeholder: "Enter a strong password",
						className: inputClass
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Confirm Password",
					hint: "Re-type your password.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "signup-confirm-password",
						type: "password",
						value: form.confirm_password,
						onChange: (e) => setForm({
							...form,
							confirm_password: e.target.value
						}),
						placeholder: "Re-enter your password",
						className: inputClass
					})
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: loading,
					className: primaryBtnClass,
					children: loading ? "Creating Account…" : "Create Account"
				})
			]
		})]
	});
}
//#endregion
export { SignUpPage as component };
