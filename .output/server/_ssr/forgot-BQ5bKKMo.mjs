import { n as __toESM } from "../_runtime.mjs";
import { t as apiRequest } from "./api-BZPBSQcW.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as primaryBtnClass, n as FormField, r as inputClass, t as AuthLayout } from "./AuthLayout-PU1ron0f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forgot-BQ5bKKMo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ForgotPage() {
	const nav = useNavigate();
	const [nin, setNin] = (0, import_react.useState)("");
	const [code, setCode] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [step, setStep] = (0, import_react.useState)("request");
	const [email, setEmail] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [success, setSuccess] = (0, import_react.useState)(false);
	const handleRequestCode = async (e) => {
		e.preventDefault();
		if (!/^\d{11}$/.test(nin)) {
			setError("NIN must be exactly 11 digits.");
			return;
		}
		setError(null);
		setLoading(true);
		try {
			const res = await apiRequest("/auth/forgot-password/", "POST", { nin });
			setEmail(res.email);
			setStep("reset");
		} catch (err) {
			setError(err.message || "Failed to send reset code. Please check your NIN.");
		} finally {
			setLoading(false);
		}
	};
	const handleResetPassword = async (e) => {
		e.preventDefault();
		if (!/^\d{6}$/.test(code)) {
			setError("Verification code must be exactly 6 digits.");
			return;
		}
		if (password.length < 6) {
			setError("Password must be at least 6 characters.");
			return;
		}
		if (password !== confirmPassword) {
			setError("Passwords do not match.");
			return;
		}
		setError(null);
		setLoading(true);
		try {
			await apiRequest("/auth/reset-password/", "POST", {
				nin,
				code,
				password
			});
			setSuccess(true);
			setTimeout(() => nav({ to: "/" }), 2e3);
		} catch (err) {
			setError(err.message || "Failed to reset password. Check the code.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, {
		title: "Forgot Password",
		subtitle: success ? "Your password has been reset successfully." : step === "request" ? "Enter your NIN and we'll send a reset code to your registered email address." : `We've sent a 6-digit verification code to ${email}.`,
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "font-semibold text-brand hover:underline",
			children: "Back to sign in"
		}) }),
		children: success ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/20 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold text-emerald-800 dark:text-emerald-300",
				children: "Password reset successful!"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground mt-1",
				children: "Redirecting you to the sign in page..."
			})]
		}) : step === "request" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleRequestCode,
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "National Identification Number (NIN)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						inputMode: "numeric",
						maxLength: 11,
						value: nin,
						onChange: (e) => setNin(e.target.value.replace(/\D/g, "")),
						placeholder: "Enter your 11-digit NIN",
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
					children: loading ? "Sending code..." : "Send reset code"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleResetPassword,
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Verification Code",
					hint: "Enter the 6-digit code sent to your email.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						inputMode: "numeric",
						maxLength: 6,
						value: code,
						onChange: (e) => setCode(e.target.value.replace(/\D/g, "")),
						placeholder: "e.g. 123456",
						className: inputClass
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "New Password",
					hint: "Minimum 6 characters.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "password",
						value: password,
						onChange: (e) => setPassword(e.target.value),
						placeholder: "Enter new password",
						className: inputClass
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Confirm New Password",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "password",
						value: confirmPassword,
						onChange: (e) => setConfirmPassword(e.target.value),
						placeholder: "Confirm new password",
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
					children: loading ? "Resetting password..." : "Reset Password"
				})
			]
		})
	});
}
//#endregion
export { ForgotPage as component };
