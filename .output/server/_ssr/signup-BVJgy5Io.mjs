import { n as __toESM } from "../_runtime.mjs";
import { t as apiRequest } from "./api-BZPBSQcW.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as setSession } from "./mock-store-ibCr2NBF.mjs";
import { i as primaryBtnClass, n as FormField, r as inputClass, t as AuthLayout } from "./AuthLayout-PU1ron0f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signup-BVJgy5Io.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SignUpPage() {
	const nav = useNavigate();
	const [form, setForm] = (0, import_react.useState)({
		nin: "",
		email: "",
		password: ""
	});
	const [error, setError] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const submit = async (e) => {
		e.preventDefault();
		if (!/^\d{11}$/.test(form.nin)) return setError("NIN must be exactly 11 digits.");
		if (!form.email.trim() || !form.email.includes("@")) return setError("Please enter a valid email address.");
		if (form.password.length < 6) return setError("Password must be at least 6 characters.");
		setError(null);
		setLoading(true);
		try {
			const response = await apiRequest("/auth/register/", "POST", {
				nin: form.nin,
				email: form.email,
				password: form.password
			});
			setSession({
				fullName: response.full_name,
				nin: response.nin,
				email: response.email,
				state: "",
				lga: "",
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, {
		title: "Create Account",
		subtitle: "Register once to vote securely from anywhere. Your details are verified with NIMC.",
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Already have an account?",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "font-semibold text-brand hover:underline",
				children: "Sign in"
			})
		] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "National Identification Number (NIN)",
					hint: "11-digit NIN issued by NIMC.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						inputMode: "numeric",
						maxLength: 11,
						value: form.nin,
						onChange: (e) => setForm({
							...form,
							nin: e.target.value.replace(/\D/g, "")
						}),
						placeholder: "11-digit NIN",
						className: inputClass
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Email Address",
					hint: "Verification code will be sent to this email.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						value: form.email,
						onChange: (e) => setForm({
							...form,
							email: e.target.value
						}),
						placeholder: "e.g. voter@example.com",
						className: inputClass
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Create Password",
					hint: "Minimum 6 characters.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
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
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: loading,
					className: primaryBtnClass,
					children: loading ? "Registering with NIMC..." : "Create Account"
				})
			]
		})
	});
}
//#endregion
export { SignUpPage as component };
