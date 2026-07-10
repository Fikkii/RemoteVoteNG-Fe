import { n as __toESM } from "../_runtime.mjs";
import { t as apiRequest } from "./api-C6UfzThm.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as AppHeader } from "./AppHeader-CUt1SoDQ.mjs";
import "./AuthLayout-DeuqPPNg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/accreditation-CzDo1WZR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var APP_TYPE_INFO = {
	media: {
		label: "Media House / Broadcaster",
		icon: "📰",
		desc: "Accredited journalists, TV/radio stations, and online news organizations covering the election.",
		idLabel: "CAC Registration Number / Press Council ID"
	},
	observer: {
		label: "Domestic Observer (CSO)",
		icon: "🏛️",
		desc: "Nigerian civil society organizations and non-profits accredited for domestic observation.",
		idLabel: "CAC Registration Number"
	},
	intl_observer: {
		label: "International Observer",
		icon: "🌍",
		desc: "Representatives of international bodies, diplomatic missions, and foreign election monitoring groups.",
		idLabel: "International Body Mandate Reference / Diplomatic Note"
	}
};
function AccreditationPage() {
	const [selectedType, setSelectedType] = (0, import_react.useState)(null);
	const [step, setStep] = (0, import_react.useState)("select");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [form, setForm] = (0, import_react.useState)({
		organization_name: "",
		contact_name: "",
		contact_email: "",
		contact_phone: "",
		organization_id: "",
		mandate_description: ""
	});
	const [applicationId, setApplicationId] = (0, import_react.useState)(null);
	const updateField = (field, value) => {
		setForm((prev) => ({
			...prev,
			[field]: value
		}));
		setErrors((prev) => ({
			...prev,
			[field]: ""
		}));
	};
	const validate = () => {
		const errs = {};
		if (!form.organization_name.trim()) errs.organization_name = "Organization name is required";
		if (!form.contact_name.trim()) errs.contact_name = "Contact person name is required";
		if (!form.contact_email.trim()) errs.contact_email = "Email is required";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contact_email)) errs.contact_email = "Invalid email address";
		if (!form.contact_phone.trim()) errs.contact_phone = "Phone number is required";
		if (!form.organization_id.trim()) errs.organization_id = "Organization ID is required";
		if (!form.mandate_description.trim()) errs.mandate_description = "Mandate description is required";
		else if (form.mandate_description.trim().length < 50) errs.mandate_description = "Please provide at least 50 characters";
		return errs;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const errs = validate();
		if (Object.keys(errs).length > 0) {
			setErrors(errs);
			return;
		}
		setLoading(true);
		try {
			const data = await apiRequest("/onboarding/accreditation/", "POST", {
				...form,
				applicant_type: selectedType
			});
			setApplicationId(data.application_id);
			setStep("submitted");
		} catch (err) {
			setErrors({ submit: err?.message || "Submission failed. Please try again." });
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-brand/20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 relative overflow-hidden py-12 px-[16px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/15 via-background to-background pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[100px] pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "acc-container relative z-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "acc-hero",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "acc-inec-badge text-[10px] md:text-[12px]",
										children: "INEC Accreditation Portal"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "text-[31px] md:text-[35px]",
										children: "Apply for Electoral Accreditation"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[16px] md:text-[18px]",
										children: "Media organizations, domestic civil society groups, and international observer missions may apply here to receive INEC accreditation for monitoring the election."
									})
								]
							}),
							step === "select" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "section-title",
									children: "Select Your Organization Type"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "acc-type-grid",
									children: Object.entries(APP_TYPE_INFO).map(([type, info]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: `acc-type-card ${selectedType === type ? "selected" : ""}`,
										onClick: () => setSelectedType(type),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "acc-type-icon",
												children: info.icon
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-[20px] md:text-[23px]",
												children: info.label
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[16px] md:text-[18px]",
												children: info.desc
											}),
											selectedType === type && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "acc-check",
												children: "✓ Selected"
											})
										]
									}, type))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-brand px-[32px] py-[16px] text-[16px] lg:text-[18px] font-semibold text-white shadow-sm transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60",
									disabled: !selectedType,
									onClick: () => setStep("form"),
									children: "Continue to Application"
								})
							] }),
							step === "form" && selectedType && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "acc-form-section",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "acc-type-pill",
										children: [
											APP_TYPE_INFO[selectedType].icon,
											" ",
											APP_TYPE_INFO[selectedType].label,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-[8px] border-2 border-border bg-card px-[16px] md:px-0 md:py-0 py-[8px] text-[14px] font-semibold text-foreground shadow-sm transition hover:border-brand/30 hover:bg-brand/5 ml-4",
												onClick: () => setStep("select"),
												children: "Change"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										onSubmit: handleSubmit,
										className: "acc-form",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "form-row-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-[16px] text-[18px]",
														children: "Organization Name *"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														placeholder: "e.g., Channels Television",
														value: form.organization_name,
														onChange: (e) => updateField("organization_name", e.target.value),
														className: `w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-[16px] lg:text-[18px] text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/25 ${errors.organization_name ? "err" : ""}`
													}),
													errors.organization_name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "ferr",
														children: errors.organization_name
													})
												] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-[16px] md:text-[18px]",
														children: "Contact Person *"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														placeholder: "Full name of primary contact",
														value: form.contact_name,
														onChange: (e) => updateField("contact_name", e.target.value),
														className: `w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-[16px] lg:text-[18px] text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/25 ${errors.contact_name ? "err" : ""}`
													}),
													errors.contact_name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "ferr",
														children: errors.contact_name
													})
												] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "form-row-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-[16px] md:text-[18px]",
														children: "Contact Email *"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "email",
														placeholder: "email@organization.org",
														value: form.contact_email,
														onChange: (e) => updateField("contact_email", e.target.value),
														className: `w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-[16px] lg:text-[18px] text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/25 ${errors.contact_email ? "err" : ""}`
													}),
													errors.contact_email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "ferr",
														children: errors.contact_email
													})
												] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-[16px] md:text-[18px]",
														children: "Phone Number *"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "tel",
														placeholder: "+234 800 000 0000",
														value: form.contact_phone,
														onChange: (e) => updateField("contact_phone", e.target.value),
														className: `w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-[16px] lg:text-[18px] text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/25 ${errors.contact_phone ? "err" : ""}`
													}),
													errors.contact_phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "ferr",
														children: errors.contact_phone
													})
												] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "text-[16px] md:text-[18px]",
													children: [APP_TYPE_INFO[selectedType].idLabel, " *"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													placeholder: "Enter your organization's registration or reference number",
													value: form.organization_id,
													onChange: (e) => updateField("organization_id", e.target.value),
													className: `w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-[16px] lg:text-[18px] text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/25 ${errors.organization_id ? "err" : ""}`
												}),
												errors.organization_id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "ferr",
													children: errors.organization_id
												})
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-[16px] md:text-[18px]",
													children: "Mandate / Coverage Description *"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													rows: 5,
													placeholder: "Briefly describe your organization's mandate, coverage area, and what you intend to monitor or report. (Minimum 50 characters)",
													value: form.mandate_description,
													onChange: (e) => updateField("mandate_description", e.target.value),
													className: `w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-[16px] lg:text-[18px] text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/25 resize-y min-h-[120px] ${errors.mandate_description ? "err" : ""}`
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [form.mandate_description.length, " / 50 minimum characters"] }),
												errors.mandate_description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "ferr",
													children: errors.mandate_description
												})
											] }),
											errors.submit && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "acc-submit-error",
												children: ["⚠️ ", errors.submit]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col sm:flex-row items-center justify-between gap-4 mt-8",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: "inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-[8px] border-2 border-border bg-card px-[32px] py-[16px] text-[16px] lg:text-[18px] font-semibold text-foreground shadow-sm transition hover:border-brand/30 hover:bg-brand/5",
													onClick: () => setStep("select"),
													children: "Back"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "submit",
													disabled: loading,
													className: `inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-brand px-[32px] py-[16px] text-[16px] lg:text-[18px] font-semibold text-white shadow-sm transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto`,
													children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "spinner-sm" }), " Submitting..."] }) : "Submit Application"
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "acc-privacy-note border-none",
										children: "Your information is protected and will only be used for INEC accreditation verification purposes. Approved organizations will receive a portal access link via the provided email."
									})
								]
							}),
							step === "submitted" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "acc-success",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "acc-success-icon",
										children: "🎉"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Application Submitted!" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Thank you. Your accreditation application has been received by INEC. You will be contacted at your provided email address once the review is complete." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "acc-ref",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reference ID" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: ["RVNG-ACC-", String(applicationId).padStart(5, "0")] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "acc-timeline",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "timeline-step done",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✅" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Application Received" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Your submission is in the INEC review queue" })] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "timeline-step",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⏳" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "ICT Officer Review" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Typically 3–5 business days" })] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "timeline-step",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📧" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Portal Access Sent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Activation link emailed upon approval" })] })]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/",
										className: "inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-brand px-[32px] py-[16px] text-[16px] lg:text-[18px] font-semibold text-white shadow-sm transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60",
										children: "Return to Home"
									})
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .acc-container {
          padding: 0 144px;
          margin: 0 auto;
        }

        .acc-hero {
          text-align: center;
          margin-bottom: 3rem;
        }

        .acc-inec-badge {
          display: inline-block;
          background: color-mix(in srgb, var(--color-brand) 15%, transparent);
          border: 1px solid color-mix(in srgb, var(--color-brand) 35%, transparent);
          border-radius: 50px;
          padding: 0.35rem 1rem;
          font-weight: bold;
          color: var(--color-brand);
          margin-bottom: 1rem;
        }

        .acc-hero h1 {
          font-size: clamp(1.6rem, 4vw, 2.5rem);
          font-weight: 800;
          background: linear-gradient(135deg, var(--color-foreground), var(--color-brand));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .acc-hero p {
          color: var(--color-muted-foreground);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .section-title {
          font-size: 1rem;
          color: var(--color-muted-foreground);
          font-weight: 600;
          margin-bottom: 1.25rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .acc-type-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .acc-type-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 1rem;
          padding: 1.5rem;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s;
          color: var(--color-foreground);
          position: relative;
        }

        .acc-type-card:hover {
          border-color: color-mix(in srgb, var(--color-brand) 50%, transparent);
          background: color-mix(in srgb, var(--color-brand) 8%, transparent);
          transform: translateY(-2px);
        }

        .acc-type-card.selected {
          border-color: var(--color-brand);
          background: color-mix(in srgb, var(--color-brand) 15%, transparent);
        }

        .acc-type-icon { font-size: 2rem; margin-bottom: 0.75rem; }

        .acc-type-card strong {
          display: block;
          color: var(--color-foreground);
          margin-bottom: 0.5rem;
        }

        .acc-type-card p {
          color: var(--color-muted-foreground);
          line-height: 1.5;
          margin: 0;
        }

        .acc-check {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          background: var(--color-brand);
          color: var(--color-background);
          font-size: 0.7rem;
          padding: 0.2rem 0.6rem;
          border-radius: 50px;
          font-weight: 600;
        }

        .btn-acc-continue {
          display: block;
          width: 100%;
          background: var(--color-brand);
          color: var(--color-background);
          border: none;
          border-radius: 0.75rem;
          padding: 0.9rem;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .btn-acc-continue:disabled { opacity: 0.4; cursor: not-allowed; }
        .btn-acc-continue:not(:disabled):hover { opacity: 0.9; }

        .acc-type-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: color-mix(in srgb, var(--color-brand) 15%, transparent);
          border: 1px solid color-mix(in srgb, var(--color-brand) 35%, transparent);
          border-radius: 50px;
          padding: 0.4rem 1rem;
          font-size: 0.85rem;
          color: var(--color-brand);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .change-type {
          background: none;
          border: 1px solid color-mix(in srgb, var(--color-brand) 40%, transparent);
          border-radius: 50px;
          color: var(--color-brand);
          font-size: 0.75rem;
          padding: 0.15rem 0.6rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .change-type:hover { background: color-mix(in srgb, var(--color-brand) 15%, transparent); }

        .acc-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        @media (max-width: 600px) { .form-row-2 { grid-template-columns: 1fr; } }

        .ferr { color: #f87171; font-size: 0.8rem; }

        .acc-submit-error {
          background: rgba(239,68,68,0.12);
          border: 1px solid rgba(239,68,68,0.3);
          border-radius: 0.6rem;
          padding: 0.75rem 1rem;
          color: #fca5a5;
          font-size: 0.85rem;
        }

        .acc-form-actions {
          display: flex;
          gap: 1rem;
        }

        .btn-acc-back {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 0.75rem;
          padding: 0.9rem 1.5rem;
          color: var(--color-foreground);
          font-size: 0.9rem;
          cursor: pointer;
          transition: background 0.2s;
          white-space: nowrap;
        }

        .btn-acc-back:hover { background: rgba(255,255,255,0.1); }

        .btn-acc-submit {
          flex: 1;
          background: var(--color-brand);
          color: var(--color-background);
          border: none;
          border-radius: 0.75rem;
          padding: 0.9rem;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: opacity 0.2s;
        }

        .btn-acc-submit:disabled { opacity: 0.5; cursor: not-allowed; }
        .btn-acc-submit:not(:disabled):hover { opacity: 0.9; }

        .spinner-sm {
          display: inline-block;
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        .acc-privacy-note {
          margin-top: 1.5rem;
          color: var(--color-muted-foreground);
          font-size: 0.8rem;
          text-align: center;
          line-height: 1.5;
          padding: 0.75rem;
          background: var(--color-surface);
          border-radius: 0.5rem;
          border: 1px solid var(--color-border);
        }

        .acc-success {
          text-align: center;
          padding: 2rem 0;
        }

        .acc-success-icon { font-size: 4rem; margin-bottom: 1.25rem; }

        .acc-success h2 {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--color-foreground);
          margin-bottom: 0.75rem;
        }

        .acc-success p {
          color: var(--color-muted-foreground);
          max-width: 480px;
          margin: 0 auto 1.5rem;
          line-height: 1.7;
        }

        .acc-ref {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          background: rgba(16,185,129,0.1);
          border: 1px solid rgba(16,185,129,0.3);
          border-radius: 0.75rem;
          padding: 1rem 2rem;
          margin-bottom: 2rem;
        }

        .acc-ref span { color: #6ee7b7; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; }
        .acc-ref strong { color: #34d399; font-size: 1.1rem; font-family: monospace; margin-top: 0.25rem; }

        .acc-timeline {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          text-align: left;
          max-width: 400px;
          margin: 0 auto 2rem;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 0.75rem;
          padding: 1rem 1.25rem;
        }

        .timeline-step {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }

        .timeline-step span { font-size: 1.1rem; flex-shrink: 0; }
        .timeline-step strong { display: block; color: var(--color-foreground); font-size: 0.85rem; }
        .timeline-step p { color: var(--color-muted-foreground); font-size: 0.78rem; margin: 0.15rem 0 0; }
        .timeline-step.done strong { color: var(--color-brand); }

        .btn-acc-home {
          display: inline-block;
          background: var(--color-brand);
          color: var(--color-background);
          text-decoration: none;
          border-radius: 0.75rem;
          padding: 0.85rem 2rem;
          font-size: 0.9rem;
          font-weight: 600;
          transition: opacity 0.2s;
        }
        .btn-acc-home:hover { opacity: 0.9; }

        .acc-form-section { animation: fadeIn 0.3s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
      ` })
		]
	});
}
//#endregion
export { AccreditationPage as component };
