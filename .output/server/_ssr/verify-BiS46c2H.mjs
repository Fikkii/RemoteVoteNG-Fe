import { n as __toESM } from "../_runtime.mjs";
import { n as setAuthToken, t as apiRequest } from "./api-DWUceDVU.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ShieldCheck, i as User, k as Award, m as Mail, p as MapPin, u as ScanFace, w as CircleCheckBig } from "../_libs/lucide-react.mjs";
import { i as setSession, r as getSession } from "./AppHeader-BudCmw4d.mjs";
import { t as AuthLayout } from "./AuthLayout-BrZPvPeY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/verify-BiS46c2H.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function VerifyPage() {
	const nav = useNavigate();
	const [code, setCode] = (0, import_react.useState)([
		"",
		"",
		"",
		"",
		"",
		""
	]);
	const inputs = (0, import_react.useRef)([]);
	const [scanning, setScanning] = (0, import_react.useState)(false);
	const [step, setStep] = (0, import_react.useState)("otp");
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [email, setEmail] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [profile, setProfile] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const s = getSession();
		if (!s) {
			nav({ to: "/signup" });
			return;
		}
		setEmail(s.email || "your registered email");
		inputs.current[0]?.focus();
	}, [nav]);
	const complete = code.every((c) => c !== "");
	const submitOtp = async (e) => {
		e.preventDefault();
		if (!complete) return;
		setError(null);
		setLoading(true);
		try {
			const res = await apiRequest("/auth/verify-otp/", "POST", {
				nin: getSession()?.nin || "",
				code: code.join(""),
				purpose: "signup"
			});
			setAuthToken(res.token);
			setProfile(res.voter);
			setSession({
				fullName: res.voter.full_name,
				nin: res.voter.username,
				email: res.voter.email,
				state: res.voter.state,
				lga: res.voter.lga,
				verified: false,
				language: res.voter.language || "English"
			});
			setStep("profile");
		} catch (err) {
			setError(err.message || "Invalid or expired verification code.");
		} finally {
			setLoading(false);
		}
	};
	const startBiometrics = () => {
		setStep("biometric");
	};
	const runScan = () => {
		setScanning(true);
		setProgress(0);
		const id = setInterval(() => {
			setProgress((p) => {
				if (p >= 100) {
					clearInterval(id);
					const s = getSession();
					if (s) setSession({
						...s,
						verified: true
					});
					setStep("done");
					setTimeout(() => nav({ to: "/language" }), 700);
					return 100;
				}
				return p + 4;
			});
		}, 60);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthLayout, {
		title: step === "profile" ? "NIMC Digital ID Card" : step === "biometric" ? "Facial Scan Match" : "Verification",
		children: [
			step === "otp" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submitOtp,
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-between gap-2",
						role: "group",
						"aria-label": "6-digit verification code",
						children: code.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: (el) => {
								inputs.current[i] = el;
							},
							inputMode: "numeric",
							maxLength: 1,
							value: c,
							"aria-label": `Digit ${i + 1}`,
							onChange: (e) => {
								const v = e.target.value.replace(/\D/g, "");
								const next = [...code];
								next[i] = v;
								setCode(next);
								if (v && i < 5) inputs.current[i + 1]?.focus();
							},
							onKeyDown: (e) => {
								if (e.key === "Backspace" && !code[i] && i > 0) inputs.current[i - 1]?.focus();
							},
							className: "h-14 w-full rounded-lg border border-input bg-background text-center text-2xl font-semibold text-foreground shadow-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/25"
						}, i))
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "alert",
						className: "rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive text-center",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-center text-sm text-muted-foreground",
						children: [
							"Didn't receive a code?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "font-semibold text-brand hover:underline",
								children: "Resend"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: !complete || loading,
						className: "inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-brand px-[32px] py-[16px] text-[16px] lg:text-[18px] font-semibold text-white shadow-sm transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60",
						children: loading ? "Verifying..." : "Verify code"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center justify-center gap-2 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-brand" }), "End-to-end encrypted. Tokens expire in 10 minutes."]
					})
				]
			}),
			step === "profile" && profile && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-2xl border border-emerald-600/20 bg-gradient-to-br from-emerald-950/95 via-emerald-900/90 to-neutral-900 p-6 text-white shadow-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-white/10 pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-6 w-6 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xs font-bold uppercase tracking-wider text-emerald-400",
										children: "NIMC Identity Profile"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-white/50",
										children: "FEDERAL REPUBLIC OF NIGERIA"
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-3 w-3" }), " E-VERIFIED"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-5 w-5 text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-white/50 uppercase",
											children: "Full Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-base font-bold tracking-wide",
											children: profile.full_name
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-5 w-5 text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-white/50 uppercase",
												children: "NIN (ID)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold font-mono tracking-wider",
												children: profile.username
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5 text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-white/50 uppercase",
												children: "Email Address"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-semibold truncate max-w-[140px]",
												children: profile.email
											})] })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3 border-t border-white/10 pt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-white/50 uppercase",
											children: "Voter Registration Area"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs font-semibold",
											children: [
												profile.lga,
												", ",
												profile.state,
												" State"
											]
										})] })]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-lg bg-emerald-500/5 p-4 border border-emerald-500/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground text-center",
							children: "Please double check the details above. If this is your correct profile, click below to perform the on-device biometric match."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: startBiometrics,
						className: "inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-brand px-[32px] py-[16px] text-[16px] lg:text-[18px] font-semibold text-white shadow-sm transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60",
						children: "Confirm Details & Scan Face"
					})
				]
			}),
			step === "biometric" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto grid h-56 w-56 place-items-center rounded-full border-4 border-dashed border-brand/40 bg-primary-soft/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanFace, { className: "h-24 w-24 text-brand-dark" }), scanning && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute inset-x-6 top-1/2 h-0.5 origin-left animate-pulse rounded-full bg-brand shadow-[0_0_16px_2px_var(--brand)]",
						style: { transform: `translateY(${(progress - 50) * 1.5}%)` }
					})]
				}), !scanning ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Look straight at your camera. Ensure lighting is even. Frames resolve in under 5 seconds."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: runScan,
					className: "inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-brand px-[32px] py-[16px] text-[16px] lg:text-[18px] font-semibold text-white shadow-sm transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60",
					children: "Start Facial Scan"
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-2 w-full overflow-hidden rounded-full bg-primary-soft",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full bg-brand transition-all",
						style: { width: `${progress}%` }
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						"Matching against NIMC record… ",
						progress,
						"%"
					]
				})] })]
			}),
			step === "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid h-20 w-20 place-items-center rounded-full bg-success/15 text-success",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-10 w-10" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-semibold",
						children: "Identity verified"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Redirecting you to language preferences…"
					})
				]
			})
		]
	});
}
//#endregion
export { VerifyPage as component };
