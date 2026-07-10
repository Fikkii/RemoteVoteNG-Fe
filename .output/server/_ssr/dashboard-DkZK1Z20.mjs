import { n as __toESM } from "../_runtime.mjs";
import { t as apiRequest } from "./api-C6UfzThm.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as CircleCheck, D as ChartColumn, E as Check, O as CalendarDays, S as Cpu, T as ChevronRight, a as TriangleAlert, b as EyeOff, c as ShieldCheck, d as RotateCw, f as Plus, g as Lock, i as User, j as Activity, l as Search, m as Mail, n as Vote, p as MapPin, r as Users, s as Shield, v as FileText, x as Database, y as Eye } from "../_libs/lucide-react.mjs";
import { r as getSession, t as AppHeader } from "./AppHeader-CUt1SoDQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-DkZK1Z20.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PaginationControls({ currentPage, totalPages, onPageChange, count }) {
	if (count === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between mt-6 px-2 py-3 border-t border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-sm text-muted-foreground",
			children: [
				"Showing ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-foreground",
					children: count
				}),
				" total entries"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex space-x-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => onPageChange(currentPage - 1),
					disabled: currentPage <= 1,
					className: "px-3 py-1 text-sm bg-surface border border-border rounded-md text-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-surface-muted transition",
					children: "Previous"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-3 py-1 text-sm font-medium",
					children: [
						"Page ",
						currentPage,
						" of ",
						Math.max(1, totalPages)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => onPageChange(currentPage + 1),
					disabled: currentPage >= totalPages,
					className: "px-3 py-1 text-sm bg-surface border border-border rounded-md text-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-surface-muted transition",
					children: "Next"
				})
			]
		})]
	});
}
function exportToCSV(data, headers, displayNames, filename) {
	if (data.length === 0) {
		alert("No records to export.");
		return;
	}
	const csvRows = [displayNames.join(",")];
	for (const row of data) {
		const values = headers.map((header) => {
			return `"${("" + (row[header] ?? "")).replace(/"/g, "\"\"")}"`;
		});
		csvRows.push(values.join(","));
	}
	const csvContent = csvRows.join("\n");
	const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.setAttribute("href", url);
	link.setAttribute("download", filename);
	link.style.visibility = "hidden";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}
function parseCSV(text) {
	const result = [];
	let row = [];
	let col = "";
	let insideQuote = false;
	for (let i = 0; i < text.length; i++) {
		const char = text[i];
		const next = text[i + 1];
		if (char === "\"") if (insideQuote && next === "\"") {
			col += "\"";
			i++;
		} else insideQuote = !insideQuote;
		else if (char === "," && !insideQuote) {
			row.push(col.trim());
			col = "";
		} else if ((char === "\r" || char === "\n") && !insideQuote) {
			if (char === "\r" && next === "\n") i++;
			row.push(col.trim());
			result.push(row);
			row = [];
			col = "";
		} else col += char;
	}
	if (col || row.length > 0) {
		row.push(col.trim());
		result.push(row);
	}
	return result;
}
function mapRowToPu(row, headers) {
	const obj = {};
	headers.forEach((h, idx) => {
		const cleanH = h.toLowerCase().trim();
		const val = row[idx];
		if (cleanH.includes("name") || cleanH.includes("facility")) obj.name = val;
		else if (cleanH.includes("ward")) obj.ward = val;
		else if (cleanH.includes("lga") || cleanH.includes("local")) obj.lga = val;
		else if (cleanH.includes("state")) obj.state = val;
		else if (cleanH.includes("voters") || cleanH.includes("count")) obj.registered_voters_count = Number(val) || 0;
		else if (cleanH.includes("code") || cleanH.includes("id")) obj.id = val || void 0;
	});
	return obj;
}
function mapRowToNimc(row, headers) {
	const obj = {};
	headers.forEach((h, idx) => {
		const cleanH = h.toLowerCase().trim();
		const val = row[idx];
		if (cleanH.includes("nin") || cleanH.includes("national")) obj.nin = val;
		else if (cleanH.includes("name") || cleanH.includes("full")) obj.full_name = val;
		else if (cleanH.includes("state")) obj.state = val;
		else if (cleanH.includes("lga") || cleanH.includes("local")) obj.lga = val;
		else if (cleanH.includes("biometric") || cleanH.includes("hash")) obj.biometric_hash = val;
	});
	if (!obj.biometric_hash) obj.biometric_hash = "mock_biometric_hash_" + Math.random().toString(36).substring(7);
	return obj;
}
function mapRowToInvite(row, headers) {
	const obj = {};
	headers.forEach((h, idx) => {
		const cleanH = h.toLowerCase().trim();
		const val = row[idx];
		if (cleanH.includes("email") || cleanH.includes("mail")) obj.email = val;
		else if (cleanH.includes("role") || cleanH.includes("position")) obj.role = val?.toLowerCase();
		else if (cleanH.includes("polling") || cleanH.includes("unit") || cleanH.includes("pu")) obj.polling_unit_id = val || void 0;
	});
	return obj;
}
function DashboardPage() {
	const nav = useNavigate();
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [elections, setElections] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	const [showProfile, setShowProfile] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const s = getSession();
		if (s) setProfile({
			username: s.nin,
			full_name: s.fullName,
			email: s.email || "",
			state: s.state,
			lga: s.lga,
			is_verified: s.verified,
			language: s.language,
			role: s.role || "voter",
			staff_number: s.staff_number || ""
		});
		const fetchData = () => {
			setLoading(true);
			apiRequest("/elections/").then(setElections).catch(console.error);
			apiRequest("/auth/profile/").then((freshProfile) => {
				setProfile(freshProfile);
				const s = getSession();
				if (s) {
					s.role = freshProfile.role;
					s.staff_number = freshProfile.staff_number;
					s.fullName = freshProfile.full_name;
					s.state = freshProfile.state;
					s.lga = freshProfile.lga;
					localStorage.setItem("rvng.session.v1", JSON.stringify(s));
				}
				setLoading(false);
			}).catch((err) => {
				console.error("Dashboard data load failed:", err);
				setError("Session expired or server unavailable.");
				nav({ to: "/" });
			});
		};
		fetchData();
	}, [nav]);
	if (loading && !profile) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 text-center animate-pulse",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Loading electoral interface..."
			})
		})]
	});
	const role = profile?.role || "voter";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-4 py-8 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-dark via-brand to-[oklch(0.45_0.15_150)] p-6 text-white shadow-md sm:p-8 mb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 h-48 w-48 rounded-full bg-white/5 blur-3xl pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white",
										children: "INEC Official Portal"
									}), profile?.staff_number && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded-full bg-yellow-400/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-yellow-300",
										children: ["ID: ", profile.staff_number]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
									children: profile?.full_name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm text-white/80",
									children: [
										"Role: ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold uppercase text-yellow-300",
											children: role.replace("_", " ")
										}),
										" · Location: ",
										profile?.lga ? `${profile.lga}, ${profile.state} State` : "National Headquarters"
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setShowProfile(!showProfile),
									className: "flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-sm transition hover:bg-white/20 ring-1 ring-white/15",
									children: [showProfile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" }), showProfile ? "Hide Profile" : "View Profile"]
								})
							})]
						}),
						showProfile && profile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 border-t border-white/10 pt-6 animate-in fade-in slide-in-from-top-4 duration-300",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-white/10 bg-black/20 p-4 backdrop-blur-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xs font-bold uppercase tracking-wider text-brand-light mb-4",
									children: "Official Registration Records"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2 md:grid-cols-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileItem, {
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4 text-brand-light" }),
											label: "Full Name",
											value: profile.full_name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileItem, {
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-brand-light" }),
											label: "NIN (ID)",
											value: profile.username
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileItem, {
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-brand-light" }),
											label: "Email Address",
											value: profile.email
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileItem, {
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-brand-light" }),
											label: "Location",
											value: `${profile.lga}, ${profile.state}`
										})
									]
								})]
							})
						})
					]
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6 rounded-lg bg-destructive/10 p-4 text-center text-sm text-destructive",
					children: error
				}),
				role === "voter" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoterDashboard, {
					elections,
					loading
				}),
				role === "commissioner" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommissionerDashboard, {}),
				role === "secretary" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecretaryDashboard, {}),
				role === "po" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PresidingOfficerDashboard, {}),
				role === "co" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollationOfficerDashboard, { elections }),
				role === "ro" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReturningOfficerDashboard, { elections }),
				role === "agent" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PollingAgentDashboard, {}),
				role === "observer" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ObserverDashboard, {}),
				role === "media" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaDashboard, { elections }),
				role === "auditor" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditorDashboard, {}),
				![
					"voter",
					"commissioner",
					"secretary",
					"po",
					"co",
					"ro",
					"agent",
					"observer",
					"media",
					"auditor"
				].includes(role) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-8 text-center shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-12 w-12 text-brand mx-auto mb-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-bold",
							children: "Access Granted"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-muted-foreground mt-1 max-w-md mx-auto",
							children: [
								"Your credentials are valid for role: ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-brand",
									children: role
								}),
								". Subordinate officer panels can be managed from local field devices."
							]
						})
					]
				})
			]
		})]
	});
}
var STATUS_COLOURS = {
	drafted: "bg-slate-500/15 text-slate-400",
	upcoming: "bg-amber-500/15 text-amber-400",
	active: "bg-emerald-500/15 text-emerald-400",
	collation: "bg-blue-500/15 text-blue-400",
	closed: "bg-muted text-muted-foreground"
};
var ELECTION_TYPE_OPTS = [
	{
		value: "presidential",
		label: "Presidential"
	},
	{
		value: "gubernatorial",
		label: "Gubernatorial"
	},
	{
		value: "senatorial",
		label: "Senatorial"
	},
	{
		value: "house_reps",
		label: "House of Representatives"
	},
	{
		value: "state_assembly",
		label: "State House of Assembly"
	},
	{
		value: "council",
		label: "Local Government / Council"
	}
];
var NIGERIAN_STATES = [
	"Abia",
	"Adamawa",
	"Akwa Ibom",
	"Anambra",
	"Bauchi",
	"Bayelsa",
	"Benue",
	"Borno",
	"Cross River",
	"Delta",
	"Ebonyi",
	"Edo",
	"Ekiti",
	"Enugu",
	"FCT",
	"Gombe",
	"Imo",
	"Jigawa",
	"Kaduna",
	"Kano",
	"Katsina",
	"Kebbi",
	"Kogi",
	"Kwara",
	"Lagos",
	"Nasarawa",
	"Niger",
	"Ogun",
	"Ondo",
	"Osun",
	"Oyo",
	"Plateau",
	"Rivers",
	"Sokoto",
	"Taraba",
	"Yobe",
	"Zamfara"
];
function CommissionerDashboard() {
	const [elections, setElections] = (0, import_react.useState)([]);
	const [accreditations, setAccreditations] = (0, import_react.useState)([]);
	const [invitations, setInvitations] = (0, import_react.useState)([]);
	const [pollingUnits, setPollingUnits] = (0, import_react.useState)([]);
	const [nimcRecords, setNimcRecords] = (0, import_react.useState)([]);
	const [loadState, setLoadState] = (0, import_react.useState)({
		el: true,
		acc: true,
		inv: true,
		pu: true,
		nimc: true
	});
	const [activeTab, setActiveTab] = (0, import_react.useState)("elections");
	const loading = activeTab === "elections" ? loadState.el : activeTab === "accreditations" ? loadState.acc : activeTab === "invitations" ? loadState.inv : activeTab === "pollingUnits" ? loadState.pu : activeTab === "nimc" ? loadState.nimc : false;
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [showCreate, setShowCreate] = (0, import_react.useState)(false);
	const [expandedId, setExpandedId] = (0, import_react.useState)(null);
	const [advancing, setAdvancing] = (0, import_react.useState)({});
	const [deleting, setDeleting] = (0, import_react.useState)({});
	const [resending, setResending] = (0, import_react.useState)({});
	const [msg, setMsg] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)({
		title: "",
		election_type: "presidential",
		description: "",
		date: "",
		eligible_states: []
	});
	const [creating, setCreating] = (0, import_react.useState)(false);
	const [formErr, setFormErr] = (0, import_react.useState)({});
	const [candForm, setCandForm] = (0, import_react.useState)({
		name: "",
		party: "",
		party_abbr: "",
		color: "#1565c0",
		manifesto: "",
		running_mate: ""
	});
	const [addingCand, setAddingCand] = (0, import_react.useState)({});
	const [candErr, setCandErr] = (0, import_react.useState)({});
	const [inviteForm, setInviteForm] = (0, import_react.useState)({
		email: "",
		role: "po",
		polling_unit_id: ""
	});
	const [sendingInvite, setSendingInvite] = (0, import_react.useState)(false);
	const [inviteErr, setInviteErr] = (0, import_react.useState)(null);
	const [reviewing, setReviewing] = (0, import_react.useState)({});
	const [showPuModal, setShowPuModal] = (0, import_react.useState)(false);
	const [puForm, setPuForm] = (0, import_react.useState)({
		id: "",
		name: "",
		ward: "",
		lga: "",
		state: "Lagos",
		registered_voters_count: 1e3
	});
	const [editingPuId, setEditingPuId] = (0, import_react.useState)(null);
	const [showNimcModal, setShowNimcModal] = (0, import_react.useState)(false);
	const [nimcForm, setNimcForm] = (0, import_react.useState)({
		nin: "",
		full_name: "",
		state: "Lagos",
		lga: "",
		biometric_hash: "mock_biometric_hash_xyz_123"
	});
	const [editingNimcId, setEditingNimcId] = (0, import_react.useState)(null);
	const fetchData = () => {
		setLoadState({
			el: true,
			acc: true,
			inv: true,
			pu: true,
			nimc: true
		});
		apiRequest("/commissioner/elections/").then(setElections).catch((e) => setMsg({
			text: e?.message || "Failed to load elections",
			type: "err"
		})).finally(() => setLoadState((p) => ({
			...p,
			el: false
		})));
		apiRequest("/onboarding/accreditation/").then(setAccreditations).catch((e) => setMsg({
			text: e?.message || "Failed to load accreditations",
			type: "err"
		})).finally(() => setLoadState((p) => ({
			...p,
			acc: false
		})));
		apiRequest("/onboarding/invitations/").then(setInvitations).catch((e) => setMsg({
			text: e?.message || "Failed to load invitations",
			type: "err"
		})).finally(() => setLoadState((p) => ({
			...p,
			inv: false
		})));
		apiRequest("/polling-units/").then(setPollingUnits).catch((e) => setMsg({
			text: e?.message || "Failed to load polling units",
			type: "err"
		})).finally(() => setLoadState((p) => ({
			...p,
			pu: false
		})));
		apiRequest("/nimc-records/").then(setNimcRecords).catch((e) => setMsg({
			text: e?.message || "Failed to load NIMC records",
			type: "err"
		})).finally(() => setLoadState((p) => ({
			...p,
			nimc: false
		})));
	};
	const handleImportCSV = async (e, type) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = async (event) => {
			const text = event.target?.result;
			if (!text) return;
			const parsedRows = parseCSV(text);
			if (parsedRows.length < 2) {
				alert("Invalid CSV file. Must include a header row and at least one data row.");
				return;
			}
			const headers = parsedRows[0];
			const dataRows = parsedRows.slice(1).filter((r) => r.length > 0 && r.some((cell) => cell.trim() !== ""));
			let items = [];
			let url = "";
			if (type === "polling-units") {
				items = dataRows.map((row) => mapRowToPu(row, headers));
				url = "/polling-units/";
			} else if (type === "nimc") {
				items = dataRows.map((row) => mapRowToNimc(row, headers));
				url = "/nimc-records/";
			} else if (type === "invitations") {
				items = dataRows.map((row) => mapRowToInvite(row, headers));
				url = "/onboarding/invite/";
			}
			try {
				const response = await apiRequest(url, "POST", items);
				setMsg({
					text: response.message || `Successfully imported ${items.length} records!`,
					type: "ok"
				});
				fetchData();
			} catch (err) {
				setMsg({
					text: "Import failed: " + err.message,
					type: "err"
				});
			}
		};
		reader.readAsText(file);
		e.target.value = "";
	};
	(0, import_react.useEffect)(() => {
		fetchData();
	}, []);
	const handleCreate = async (e) => {
		e.preventDefault();
		const errs = {};
		if (!form.title.trim()) errs.title = "Title is required";
		if (!form.date) errs.date = "Date is required";
		if (Object.keys(errs).length) {
			setFormErr(errs);
			return;
		}
		setCreating(true);
		setFormErr({});
		try {
			await apiRequest("/commissioner/elections/create/", "POST", form);
			setShowCreate(false);
			setForm({
				title: "",
				election_type: "presidential",
				description: "",
				date: "",
				eligible_states: []
			});
			setMsg({
				text: "Election drafted successfully!",
				type: "ok"
			});
			const el = await apiRequest("/commissioner/elections/");
			setElections(el);
		} catch (e) {
			setMsg({
				text: e?.message || "Failed to create election",
				type: "err"
			});
		} finally {
			setCreating(false);
		}
	};
	const handleAdvance = async (id) => {
		setAdvancing((p) => ({
			...p,
			[id]: true
		}));
		setMsg(null);
		try {
			const res = await apiRequest(`/commissioner/elections/${id}/advance/`, "POST");
			setMsg({
				text: res.message,
				type: "ok"
			});
			const el = await apiRequest("/commissioner/elections/");
			setElections(el);
		} catch (e) {
			setMsg({
				text: e?.message || "Status transition failed",
				type: "err"
			});
		} finally {
			setAdvancing((p) => ({
				...p,
				[id]: false
			}));
		}
	};
	const handleDelete = async (id, title) => {
		if (!confirm(`Delete the DRAFT election "${title}"? This cannot be undone.`)) return;
		setDeleting((p) => ({
			...p,
			[id]: true
		}));
		try {
			await apiRequest(`/commissioner/elections/${id}/`, "DELETE");
			setMsg({
				text: `Election "${title}" deleted.`,
				type: "ok"
			});
			const el = await apiRequest("/commissioner/elections/");
			setElections(el);
		} catch (e) {
			setMsg({
				text: e?.message || "Delete failed",
				type: "err"
			});
		} finally {
			setDeleting((p) => ({
				...p,
				[id]: false
			}));
		}
	};
	const handleAddCandidate = async (e, electionId) => {
		e.preventDefault();
		const errs = {};
		if (!candForm.name.trim()) errs.name = "Name required";
		if (!candForm.party.trim()) errs.party = "Party required";
		if (!candForm.party_abbr.trim()) errs.party_abbr = "Abbreviation required";
		if (!candForm.manifesto.trim()) errs.manifesto = "Manifesto required";
		if (Object.keys(errs).length) {
			setCandErr(errs);
			return;
		}
		setAddingCand((p) => ({
			...p,
			[electionId]: true
		}));
		setCandErr({});
		try {
			await apiRequest(`/commissioner/elections/${electionId}/candidates/`, "POST", candForm);
			setCandForm({
				name: "",
				party: "",
				party_abbr: "",
				color: "#1565c0",
				manifesto: "",
				running_mate: ""
			});
			setMsg({
				text: "Candidate registered successfully!",
				type: "ok"
			});
			const el = await apiRequest("/commissioner/elections/");
			setElections(el);
		} catch (e) {
			setMsg({
				text: e?.message || "Failed to add candidate",
				type: "err"
			});
		} finally {
			setAddingCand((p) => ({
				...p,
				[electionId]: false
			}));
		}
	};
	const handleRemoveCandidate = async (electionId, candidateId, name) => {
		if (!confirm(`Remove candidate "${name}" from this election?`)) return;
		try {
			await apiRequest(`/commissioner/elections/${electionId}/candidates/${candidateId}/`, "DELETE");
			setMsg({
				text: `Candidate "${name}" removed.`,
				type: "ok"
			});
			const el = await apiRequest("/commissioner/elections/");
			setElections(el);
		} catch (e) {
			setMsg({
				text: e?.message || "Failed to remove candidate",
				type: "err"
			});
		}
	};
	const handleReviewAccreditation = async (id, decision) => {
		let notes = "Approved";
		if (decision === "reject") {
			const promptNotes = prompt("Please enter rejection notes / reasons:");
			if (promptNotes === null) return;
			notes = promptNotes || "Does not meet organization criteria";
		}
		setReviewing((p) => ({
			...p,
			[id]: true
		}));
		setMsg(null);
		try {
			const res = await apiRequest(`/onboarding/accreditation/${id}/review/`, "POST", {
				decision,
				notes
			});
			setMsg({
				text: res.message,
				type: "ok"
			});
			const [acc, invs] = await Promise.all([apiRequest("/onboarding/accreditation/"), apiRequest("/onboarding/invitations/")]);
			setAccreditations(acc);
			setInvitations(invs);
		} catch (e) {
			setMsg({
				text: e?.message || "Accreditation review failed",
				type: "err"
			});
		} finally {
			setReviewing((p) => ({
				...p,
				[id]: false
			}));
		}
	};
	const handleSendInvite = async (e) => {
		e.preventDefault();
		setInviteErr(null);
		if (!inviteForm.email) {
			setInviteErr("Email is required.");
			return;
		}
		setSendingInvite(true);
		try {
			const res = await apiRequest("/onboarding/invite/", "POST", inviteForm);
			setMsg({
				text: res.message,
				type: "ok"
			});
			setInviteForm({
				email: "",
				role: "po",
				polling_unit_id: ""
			});
			const invs = await apiRequest("/onboarding/invitations/");
			setInvitations(invs);
		} catch (e) {
			setInviteErr(e?.message || "Invitation submission failed");
		} finally {
			setSendingInvite(false);
		}
	};
	const handleResendInvite = async (id, email) => {
		setMsg(null);
		setResending((prev) => ({
			...prev,
			[id]: true
		}));
		try {
			const res = await apiRequest(`/onboarding/invite/${id}/resend/`, "POST");
			setMsg({
				text: res.message,
				type: "ok"
			});
		} catch (err) {
			setMsg({
				text: err.message || "Failed to resend invitation email",
				type: "err"
			});
		} finally {
			setResending((prev) => ({
				...prev,
				[id]: false
			}));
		}
	};
	const handleSavePu = async (e) => {
		e.preventDefault();
		if (editingPuId && !puForm.id || !puForm.name || !puForm.ward || !puForm.lga || !puForm.state) {
			alert("Required fields (Name, Ward, LGA, State) are missing.");
			return;
		}
		try {
			if (editingPuId) {
				await apiRequest(`/polling-units/${editingPuId}/`, "PATCH", puForm);
				setMsg({
					text: `Polling Unit ${editingPuId} updated.`,
					type: "ok"
				});
			} else {
				const newPu = await apiRequest("/polling-units/", "POST", puForm);
				setMsg({
					text: `Polling Unit ${newPu?.id || "successfully"} registered.`,
					type: "ok"
				});
			}
			setShowPuModal(false);
			setEditingPuId(null);
			setPuForm({
				id: "",
				name: "",
				ward: "",
				lga: "",
				state: "Lagos",
				registered_voters_count: 1e3
			});
			const data = await apiRequest("/polling-units/");
			setPollingUnits(data);
		} catch (err) {
			alert(err.message || "Failed to save Polling Unit");
		}
	};
	const handleDeletePu = async (id) => {
		if (!confirm(`Delete Polling Unit ${id}?`)) return;
		try {
			await apiRequest(`/polling-units/${id}/`, "DELETE");
			setMsg({
				text: `Polling Unit ${id} deleted.`,
				type: "ok"
			});
			const data = await apiRequest("/polling-units/");
			setPollingUnits(data);
		} catch (err) {
			alert(err.message || "Failed to delete Polling Unit");
		}
	};
	const handleSaveNimc = async (e) => {
		e.preventDefault();
		if (!nimcForm.nin || !nimcForm.full_name || !nimcForm.state || !nimcForm.lga) {
			alert("All fields are required to register a NIMC citizen.");
			return;
		}
		try {
			if (editingNimcId) {
				await apiRequest(`/nimc-records/${editingNimcId}/`, "PATCH", nimcForm);
				setMsg({
					text: "NIMC record updated.",
					type: "ok"
				});
			} else {
				await apiRequest("/nimc-records/", "POST", nimcForm);
				setMsg({
					text: "New citizen registered in NIMC database.",
					type: "ok"
				});
			}
			setShowNimcModal(false);
			setEditingNimcId(null);
			setNimcForm({
				nin: "",
				full_name: "",
				state: "Lagos",
				lga: "",
				biometric_hash: "mock_biometric_hash_xyz_123"
			});
			const data = await apiRequest("/nimc-records/");
			setNimcRecords(data);
		} catch (err) {
			alert(err.message || "Failed to save NIMC record");
		}
	};
	const handleDeleteNimc = async (id) => {
		if (!confirm("Remove this citizen record from the National ID database?")) return;
		try {
			await apiRequest(`/nimc-records/${id}/`, "DELETE");
			setMsg({
				text: "NIMC citizen record deleted.",
				type: "ok"
			});
			const data = await apiRequest("/nimc-records/");
			setNimcRecords(data);
		} catch (err) {
			alert(err.message || "Failed to delete NIMC record");
		}
	};
	const NEXT_ACTION = {
		drafted: "Publish (→ Upcoming)",
		upcoming: "Open Polls (→ Active)",
		active: "Close Polls (→ Collation)"
	};
	const isRolePuBound = [
		"po",
		"apo",
		"spo",
		"agent"
	].includes(inviteForm.role);
	const filteredElections = elections.filter((el) => {
		const matchesSearch = el.title.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesFilter = statusFilter === "all" || el.status === statusFilter;
		return matchesSearch && matchesFilter;
	});
	const filteredAccreditations = accreditations.filter((acc) => {
		const matchesSearch = acc.organization_name.toLowerCase().includes(searchQuery.toLowerCase()) || acc.contact_name.toLowerCase().includes(searchQuery.toLowerCase()) || acc.contact_email.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesFilter = statusFilter === "all" || acc.status === statusFilter;
		return matchesSearch && matchesFilter;
	});
	const filteredInvitations = invitations.filter((inv) => {
		const matchesSearch = inv.invited_email.toLowerCase().includes(searchQuery.toLowerCase()) || inv.staff_number.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesFilter = statusFilter === "all" || inv.role === statusFilter || statusFilter === "used" && inv.is_used || statusFilter === "pending" && !inv.is_used;
		return matchesSearch && matchesFilter;
	});
	const filteredPollingUnits = pollingUnits.filter((pu) => {
		const matchesSearch = pu.id.toLowerCase().includes(searchQuery.toLowerCase()) || pu.name.toLowerCase().includes(searchQuery.toLowerCase()) || pu.ward.toLowerCase().includes(searchQuery.toLowerCase()) || pu.lga.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesFilter = statusFilter === "all" || pu.state === statusFilter;
		return matchesSearch && matchesFilter;
	});
	const filteredNimcRecords = nimcRecords.filter((nm) => {
		const matchesSearch = nm.nin.toLowerCase().includes(searchQuery.toLowerCase()) || nm.full_name.toLowerCase().includes(searchQuery.toLowerCase()) || nm.lga.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesFilter = statusFilter === "all" || nm.state === statusFilter;
		return matchesSearch && matchesFilter;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold",
						children: "INEC Electoral Commissioner Terminal"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mt-0.5",
						children: "National headquarters gateway for election control, official provisioning, and observer accreditation."
					})] }),
					activeTab === "elections" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setShowCreate(true),
						className: "inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-xs font-semibold text-white hover:bg-brand-dark transition self-start sm:self-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Draft New Election"]
					}),
					activeTab === "pollingUnits" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setEditingPuId(null);
							setPuForm({
								id: "",
								name: "",
								ward: "",
								lga: "",
								state: "Lagos",
								registered_voters_count: 1e3
							});
							setShowPuModal(true);
						},
						className: "inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-xs font-semibold text-white hover:bg-brand-dark transition self-start sm:self-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Register Polling Unit"]
					}),
					activeTab === "nimc" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setEditingNimcId(null);
							setNimcForm({
								nin: "",
								full_name: "",
								state: "Lagos",
								lga: "",
								biometric_hash: "mock_biometric_hash_xyz_123"
							});
							setShowNimcModal(true);
						},
						className: "inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-xs font-semibold text-white hover:bg-brand-dark transition self-start sm:self-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Register NIMC Citizen"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex border-b border-border gap-2 flex-wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setActiveTab("elections");
							setMsg(null);
							setSearchQuery("");
							setStatusFilter("all");
						},
						className: `px-4 py-2.5 text-xs font-bold border-b-2 transition uppercase tracking-wider ${activeTab === "elections" ? "border-brand text-brand" : "border-transparent text-muted-foreground hover:text-foreground"}`,
						children: [
							"🗳️ Elections (",
							elections.length,
							")"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setActiveTab("accreditations");
							setMsg(null);
							setSearchQuery("");
							setStatusFilter("all");
						},
						className: `px-4 py-2.5 text-xs font-bold border-b-2 transition uppercase tracking-wider ${activeTab === "accreditations" ? "border-brand text-brand" : "border-transparent text-muted-foreground hover:text-foreground"}`,
						children: [
							"📰 Accreditations (",
							accreditations.filter((a) => a.status === "pending").length,
							" pending)"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setActiveTab("invitations");
							setMsg(null);
							setSearchQuery("");
							setStatusFilter("all");
						},
						className: `px-4 py-2.5 text-xs font-bold border-b-2 transition uppercase tracking-wider ${activeTab === "invitations" ? "border-brand text-brand" : "border-transparent text-muted-foreground hover:text-foreground"}`,
						children: "✉️ Staff Onboarding"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setActiveTab("pollingUnits");
							setMsg(null);
							setSearchQuery("");
							setStatusFilter("all");
						},
						className: `px-4 py-2.5 text-xs font-bold border-b-2 transition uppercase tracking-wider ${activeTab === "pollingUnits" ? "border-brand text-brand" : "border-transparent text-muted-foreground hover:text-foreground"}`,
						children: [
							"📍 Polling Units (",
							pollingUnits.length,
							")"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setActiveTab("nimc");
							setMsg(null);
							setSearchQuery("");
							setStatusFilter("all");
						},
						className: `px-4 py-2.5 text-xs font-bold border-b-2 transition uppercase tracking-wider ${activeTab === "nimc" ? "border-brand text-brand" : "border-transparent text-muted-foreground hover:text-foreground"}`,
						children: [
							"🪪 NIMC Registry (",
							nimcRecords.length,
							")"
						]
					})
				]
			}),
			msg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `rounded-xl p-3 text-xs font-semibold ${msg.type === "ok" ? "bg-emerald-500/10 text-emerald-600" : "bg-destructive/10 text-destructive"} animate-in fade-in`,
				children: [
					msg.type === "ok" ? "✅" : "⚠️",
					" ",
					msg.text
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between bg-card p-4 rounded-xl border border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						placeholder: `Search ${activeTab === "elections" ? "elections by title..." : activeTab === "accreditations" ? "accreditations by name/org/email..." : activeTab === "invitations" ? "invitations by email/staff ID..." : activeTab === "pollingUnits" ? "polling units by code/name/ward/LGA..." : activeTab === "nimc" ? "NIMC citizens by NIN/name/LGA..." : "records..."}`,
						value: searchQuery,
						onChange: (e) => setSearchQuery(e.target.value),
						className: "w-full rounded-lg border border-input bg-background pl-9 pr-3 py-2 text-xs outline-none focus:border-brand"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [
						activeTab === "elections" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: statusFilter,
							onChange: (e) => setStatusFilter(e.target.value),
							className: "rounded-lg border border-input bg-background px-3 py-2 text-xs outline-none focus:border-brand",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: "All Statuses"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "drafted",
									children: "Drafted"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "upcoming",
									children: "Upcoming"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "active",
									children: "Active"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "collation",
									children: "Collation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "closed",
									children: "Closed"
								})
							]
						}),
						activeTab === "accreditations" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: statusFilter,
							onChange: (e) => setStatusFilter(e.target.value),
							className: "rounded-lg border border-input bg-background px-3 py-2 text-xs outline-none focus:border-brand",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: "All Statuses"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "pending",
									children: "Pending"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "approved",
									children: "Approved"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "rejected",
									children: "Rejected"
								})
							]
						}),
						activeTab === "invitations" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: statusFilter,
							onChange: (e) => setStatusFilter(e.target.value),
							className: "rounded-lg border border-input bg-background px-3 py-2 text-xs outline-none focus:border-brand",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: "All Roles & Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "pending",
									children: "Pending Invitation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "used",
									children: "Activated Account"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "commissioner",
									children: "INEC Commissioner"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "secretary",
									children: "INEC Secretary"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "ro",
									children: "Returning Officer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "co",
									children: "Collation Officer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "po",
									children: "Presiding Officer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "apo",
									children: "Assistant Presiding Officer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "spo",
									children: "Supervisory Presiding Officer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "auditor",
									children: "Auditor"
								})
							]
						}),
						(activeTab === "pollingUnits" || activeTab === "nimc") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: statusFilter,
							onChange: (e) => setStatusFilter(e.target.value),
							className: "rounded-lg border border-input bg-background px-3 py-2 text-xs outline-none focus:border-brand",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "All States"
							}), NIGERIAN_STATES.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: st,
								children: st
							}, st))]
						})
					]
				})]
			}),
			activeTab === "elections" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					showCreate && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full max-w-lg rounded-2xl border border-border bg-card shadow-2xl p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-bold",
									children: "Draft New Election"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setShowCreate(false),
									className: "rounded-md p-1.5 text-muted-foreground hover:bg-muted",
									children: "✕"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleCreate,
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-[10px] font-semibold uppercase text-muted-foreground",
											children: "Election Title *"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											placeholder: "e.g. 2027 Presidential Election",
											value: form.title,
											onChange: (e) => {
												setForm((p) => ({
													...p,
													title: e.target.value
												}));
												setFormErr((p) => ({
													...p,
													title: ""
												}));
											},
											className: `w-full mt-1 rounded-lg border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand ${formErr.title ? "border-destructive" : "border-input"}`
										}),
										formErr.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-destructive mt-1",
											children: formErr.title
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-[10px] font-semibold uppercase text-muted-foreground",
											children: "Election Type *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: form.election_type,
											onChange: (e) => setForm((p) => ({
												...p,
												election_type: e.target.value
											})),
											className: "w-full mt-1 rounded-lg border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-brand",
											children: ELECTION_TYPE_OPTS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: o.value,
												children: o.label
											}, o.value))
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-[10px] font-semibold uppercase text-muted-foreground",
												children: "Election Date *"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "date",
												value: form.date,
												onChange: (e) => {
													setForm((p) => ({
														...p,
														date: e.target.value
													}));
													setFormErr((p) => ({
														...p,
														date: ""
													}));
												},
												className: `w-full mt-1 rounded-lg border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand ${formErr.date ? "border-destructive" : "border-input"}`
											}),
											formErr.date && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-destructive mt-1",
												children: formErr.date
											})
										] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[10px] font-semibold uppercase text-muted-foreground",
										children: "Official Description"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										rows: 3,
										placeholder: "Official INEC election brief (optional)",
										value: form.description,
										onChange: (e) => setForm((p) => ({
											...p,
											description: e.target.value
										})),
										className: "w-full mt-1 rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-brand resize-none"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-[10px] font-semibold uppercase text-muted-foreground",
											children: "Eligible States (leave blank = nationwide)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1.5 max-h-36 overflow-y-auto rounded-lg border border-input bg-background p-2 grid grid-cols-2 gap-1",
											children: NIGERIAN_STATES.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "flex items-center gap-1.5 text-xs cursor-pointer hover:text-foreground text-muted-foreground py-0.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "checkbox",
													checked: form.eligible_states.includes(st),
													onChange: (e) => setForm((p) => ({
														...p,
														eligible_states: e.target.checked ? [...p.eligible_states, st] : p.eligible_states.filter((s) => s !== st)
													})),
													className: "h-3 w-3 accent-brand"
												}), st]
											}, st))
										}),
										form.eligible_states.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[10px] text-brand mt-1",
											children: [form.eligible_states.length, " state(s) selected"]
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3 pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setShowCreate(false),
											className: "flex-1 rounded-xl border border-input py-2.5 text-sm font-semibold text-muted-foreground hover:bg-muted",
											children: "Cancel"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											disabled: creating,
											className: "flex-1 rounded-xl bg-brand py-2.5 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-50",
											children: creating ? "Creating…" : "📋 Save as Draft"
										})]
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-2xl border border-border bg-card shadow-sm overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between p-5 border-b border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-5 w-5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-base font-bold",
									children: "All Elections"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: fetchData,
								className: "rounded-md p-1.5 text-muted-foreground hover:bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "h-4 w-4" })
							})]
						}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "py-12 text-center text-sm text-muted-foreground animate-pulse",
							children: "Loading elections…"
						}) : filteredElections.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "py-16 text-center text-xs text-muted-foreground border border-dashed border-border rounded-2xl m-4",
							children: "No matching elections found."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "divide-y divide-border",
							children: filteredElections.map((el) => {
								const isExpanded = expandedId === el.id;
								const canAdvance = [
									"drafted",
									"upcoming",
									"active"
								].includes(el.status);
								const canDelete = el.status === "drafted";
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 hover:bg-muted/20 transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 flex-wrap mb-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase ${STATUS_COLOURS[el.status] || "bg-muted text-muted-foreground"}`,
													children: el.status_display
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[9px] text-muted-foreground border border-border rounded-full px-2 py-0.5",
													children: el.election_type_display
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-display font-bold text-foreground",
												children: el.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-muted-foreground font-mono mt-0.5",
												children: [
													el.date,
													" · ID: ",
													el.id,
													" · ",
													el.candidate_count,
													" candidate(s)",
													el.created_by_name && ` · By ${el.created_by_name}`
												]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 flex-shrink-0 flex-wrap",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => setExpandedId(isExpanded ? null : el.id),
												className: "inline-flex items-center gap-1 rounded-lg border border-input px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:bg-muted",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3.5 w-3.5" }), isExpanded ? "Hide" : "Candidates"]
											}),
											canAdvance && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => handleAdvance(el.id),
												disabled: advancing[el.id],
												className: "inline-flex items-center gap-1 rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-dark disabled:opacity-50",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" }), advancing[el.id] ? "Working…" : NEXT_ACTION[el.status]]
											}),
											canDelete && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleDelete(el.id, el.title),
												disabled: deleting[el.id],
												className: "inline-flex items-center gap-1 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-1.5 text-xs font-semibold text-destructive hover:bg-destructive/20 disabled:opacity-50",
												children: deleting[el.id] ? "…" : "🗑"
											})
										]
									})]
								}), isExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-border bg-muted/20 p-4 space-y-4",
									children: [el.candidates.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-bold uppercase text-muted-foreground mb-2",
										children: "Registered Candidates"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-2 sm:grid-cols-2",
										children: el.candidates.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-6 w-6 rounded-full flex-shrink-0",
													style: { background: c.color }
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-semibold text-foreground",
													children: c.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-[10px] text-muted-foreground",
													children: [
														c.party_abbr,
														" · ",
														c.party
													]
												})] })]
											}), ![
												"active",
												"collation",
												"closed"
											].includes(el.status) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleRemoveCandidate(el.id, c.id, c.name),
												className: "rounded p-1 text-muted-foreground hover:text-destructive hover:bg-destructive/10",
												children: "✕"
											})]
										}, c.id))
									})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "No candidates yet."
									}), ![
										"active",
										"collation",
										"closed"
									].includes(el.status) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-bold uppercase text-muted-foreground mb-2",
										children: "Register New Candidate"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										onSubmit: (e) => handleAddCandidate(e, el.id),
										className: "grid gap-2 sm:grid-cols-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												placeholder: "Candidate full name *",
												value: candForm.name,
												onChange: (e) => {
													setCandForm((p) => ({
														...p,
														name: e.target.value
													}));
													setCandErr((p) => ({
														...p,
														name: ""
													}));
												},
												className: `w-full rounded-lg border bg-background px-2.5 py-2 text-xs outline-none focus:border-brand ${candErr.name ? "border-destructive" : "border-input"}`
											}), candErr.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-destructive",
												children: candErr.name
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												placeholder: "Political party full name *",
												value: candForm.party,
												onChange: (e) => {
													setCandForm((p) => ({
														...p,
														party: e.target.value
													}));
													setCandErr((p) => ({
														...p,
														party: ""
													}));
												},
												className: `w-full rounded-lg border bg-background px-2.5 py-2 text-xs outline-none focus:border-brand ${candErr.party ? "border-destructive" : "border-input"}`
											}) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													placeholder: "Abbr. e.g. APC *",
													maxLength: 10,
													value: candForm.party_abbr,
													onChange: (e) => {
														setCandForm((p) => ({
															...p,
															party_abbr: e.target.value
														}));
														setCandErr((p) => ({
															...p,
															party_abbr: ""
														}));
													},
													className: `flex-1 rounded-lg border bg-background px-2.5 py-2 text-xs outline-none focus:border-brand ${candErr.party_abbr ? "border-destructive" : "border-input"}`
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-[10px] text-muted-foreground whitespace-nowrap",
														children: "Party colour:"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "color",
														value: candForm.color,
														onChange: (e) => setCandForm((p) => ({
															...p,
															color: e.target.value
														})),
														className: "h-8 w-10 rounded cursor-pointer border border-input bg-background"
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												placeholder: "Running mate name (optional)",
												value: candForm.running_mate,
												onChange: (e) => setCandForm((p) => ({
													...p,
													running_mate: e.target.value
												})),
												className: "w-full rounded-lg border border-input bg-background px-2.5 py-2 text-xs outline-none focus:border-brand"
											}) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "sm:col-span-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													placeholder: "Manifesto / campaign summary *",
													rows: 2,
													value: candForm.manifesto,
													onChange: (e) => {
														setCandForm((p) => ({
															...p,
															manifesto: e.target.value
														}));
														setCandErr((p) => ({
															...p,
															manifesto: ""
														}));
													},
													className: `w-full rounded-lg border bg-background px-2.5 py-2 text-xs outline-none focus:border-brand resize-none ${candErr.manifesto ? "border-destructive" : "border-input"}`
												}), candErr.manifesto && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[10px] text-destructive",
													children: candErr.manifesto
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "sm:col-span-2",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "submit",
													disabled: addingCand[el.id],
													className: "rounded-lg bg-brand px-4 py-2 text-xs font-bold text-white hover:bg-brand-dark disabled:opacity-50",
													children: addingCand[el.id] ? "Registering…" : "+ Register Candidate"
												})
											})
										]
									})] })]
								})] }, el.id);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-2xl border border-border bg-card p-5 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-sm font-bold mb-3 text-muted-foreground uppercase tracking-wider",
								children: "Election Lifecycle"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2 items-center text-xs text-muted-foreground",
								children: [
									{
										s: "drafted",
										label: "Drafted"
									},
									{
										s: "upcoming",
										label: "Upcoming"
									},
									{
										s: "active",
										label: "Active"
									},
									{
										s: "collation",
										label: "Collation"
									},
									{
										s: "closed",
										label: "Closed"
									}
								].map((item, i, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase ${STATUS_COLOURS[item.s]}`,
										children: item.label
									}), i < arr.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3 text-muted-foreground/40" })]
								}, item.s))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[10px] text-muted-foreground mt-2",
								children: [
									"Commissioners advance elections through ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Drafted → Collation" }),
									". The final ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Collation → Closed" }),
									" step requires multi-signature approval from Returning Officers."
								]
							})
						]
					})
				]
			}),
			activeTab === "accreditations" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-border bg-card shadow-sm overflow-hidden p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border pb-4 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold",
							children: "Accreditation Requests"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: fetchData,
							className: "rounded-md p-1.5 text-muted-foreground hover:bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "h-4 w-4" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mb-6",
						children: "Review submitted media licences and observer credentials. Approving an application will generate a secure onboarding link and trigger automated notification emails."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-xs border-collapse",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border text-muted-foreground uppercase text-[10px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4",
										children: "Organization"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4",
										children: "Type"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4",
										children: "Contact Person"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4",
										children: "Reference ID"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4",
										children: "Description"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4 text-center",
										children: "Status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4 text-right",
										children: "Actions"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-border",
								children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 7,
									className: "py-8 text-center text-muted-foreground animate-pulse",
									children: "Loading applications..."
								}) }) : filteredAccreditations.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 7,
									className: "py-8 text-center text-muted-foreground",
									children: "No matching accreditation applications found."
								}) }) : filteredAccreditations.map((acc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-muted/30 align-top",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 font-bold text-foreground",
											children: acc.organization_name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 capitalize",
											children: acc.applicant_type.replace("_", " ")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "py-3 px-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold",
													children: acc.contact_name
												}),
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-muted-foreground",
													children: acc.contact_email
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 font-mono",
											children: acc.organization_id
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 max-w-xs truncate",
											children: acc.mandate_description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 text-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `inline-block rounded px-2 py-0.5 text-[9px] font-bold uppercase ${acc.status === "approved" ? "bg-success/15 text-success" : acc.status === "rejected" ? "bg-destructive/15 text-destructive" : "bg-amber-500/15 text-amber-500"}`,
												children: acc.status
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 text-right space-x-1.5 whitespace-nowrap",
											children: acc.status === "pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												disabled: reviewing[acc.id],
												onClick: () => handleReviewAccreditation(acc.id, "approve"),
												className: "rounded bg-emerald-600 px-2 py-1 text-[10px] font-bold text-white hover:bg-emerald-700 disabled:opacity-50",
												children: "Approve"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												disabled: reviewing[acc.id],
												onClick: () => handleReviewAccreditation(acc.id, "reject"),
												className: "rounded bg-destructive px-2 py-1 text-[10px] font-bold text-white hover:bg-destructive-dark disabled:opacity-50",
												children: "Reject"
											})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-muted-foreground font-mono",
												children: "Reviewed"
											})
										})
									]
								}, acc.id))
							})]
						})
					})
				]
			}),
			activeTab === "invitations" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-sm self-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base font-bold border-b border-border pb-3 mb-4",
						children: "Onboard Official"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSendInvite,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[10px] font-semibold uppercase text-muted-foreground",
								children: "Official Email *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								placeholder: "name@email.com",
								value: inviteForm.email,
								onChange: (e) => setInviteForm((p) => ({
									...p,
									email: e.target.value
								})),
								className: "w-full mt-1 rounded-lg border border-input bg-background px-3 py-2 text-xs outline-none focus:border-brand"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[10px] font-semibold uppercase text-muted-foreground",
								children: "Staff ID (Autogenerated)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								readOnly: true,
								placeholder: "STAFF-[ROLE]-[RANDOM_ID]",
								className: "w-full mt-1 rounded-lg border border-input bg-muted px-3 py-2 text-xs outline-none cursor-not-allowed font-mono text-muted-foreground"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[10px] font-semibold uppercase text-muted-foreground",
								children: "Electoral Role *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: inviteForm.role,
								onChange: (e) => setInviteForm((p) => ({
									...p,
									role: e.target.value
								})),
								className: "w-full mt-1 rounded-lg border border-input bg-card px-3 py-2 text-xs outline-none focus:border-brand",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "commissioner",
										children: "INEC Commissioner (HQ)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "ro",
										children: "Returning Officer (RO)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "co",
										children: "Collation Officer (CO)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "po",
										children: "Presiding Officer (PO)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "apo",
										children: "Assistant Presiding Officer (APO)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "spo",
										children: "Supervisory Presiding Officer (SPO)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "auditor",
										children: "Cybersecurity Auditor"
									})
								]
							})] }),
							isRolePuBound && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[10px] font-semibold uppercase text-muted-foreground",
								children: "Assigned Polling Unit"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: inviteForm.polling_unit_id,
								onChange: (e) => setInviteForm((p) => ({
									...p,
									polling_unit_id: e.target.value
								})),
								className: "w-full mt-1 rounded-lg border border-input bg-card px-3 py-2 text-xs outline-none focus:border-brand",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select Polling Unit..."
								}), pollingUnits.map((pu) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: pu.id,
									children: [
										pu.name,
										" (",
										pu.id,
										")"
									]
								}, pu.id))]
							})] }),
							inviteErr && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rounded-md bg-destructive/10 p-2.5 text-[10px] text-destructive leading-relaxed font-semibold",
								children: inviteErr
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: sendingInvite,
								className: "w-full rounded-lg bg-brand py-2 text-xs font-bold text-white hover:bg-brand-dark disabled:opacity-50",
								children: sendingInvite ? "Generating invite…" : "📨 Generate Invitation"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-sm md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-3 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-bold",
							children: "Onboarding Invitations Logs"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => exportToCSV(filteredInvitations, [
										"staff_number",
										"invited_email",
										"role",
										"is_used",
										"expires_at"
									], [
										"Staff Number",
										"Email Address",
										"Role",
										"Is Activated",
										"Expires At"
									], "staff_invitations.csv"),
									className: "inline-flex items-center gap-1 rounded-lg border border-input bg-card px-2.5 py-1.5 text-[11px] font-semibold text-foreground hover:bg-muted transition",
									children: "📥 Export CSV"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "inline-flex items-center gap-1 rounded-lg border border-input bg-card px-2.5 py-1.5 text-[11px] font-semibold text-foreground hover:bg-muted transition cursor-pointer",
									children: ["📤 Bulk Invite (CSV)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										accept: ".csv",
										className: "hidden",
										onChange: (e) => handleImportCSV(e, "invitations")
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: fetchData,
									className: "rounded-md p-1.5 text-muted-foreground hover:bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "h-4 w-4" })
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-xs border-collapse",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border text-muted-foreground uppercase text-[10px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2.5 px-3",
										children: "Staff Number"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2.5 px-3",
										children: "Email Address"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2.5 px-3",
										children: "Role"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2.5 px-3 text-center",
										children: "Status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2.5 px-3 text-right",
										children: "Actions"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-border",
								children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 5,
									className: "py-8 text-center text-muted-foreground animate-pulse",
									children: "Loading invitations..."
								}) }) : filteredInvitations.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 5,
									className: "py-8 text-center text-muted-foreground",
									children: "No matching invitations found."
								}) }) : filteredInvitations.map((inv) => {
									const isExpired = new Date(inv.expires_at) < /* @__PURE__ */ new Date();
									const statusLabel = inv.is_used ? "Activated" : isExpired ? "Expired" : "Pending";
									const link = `${window.location.origin}/onboard?token=${inv.token}`;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "hover:bg-muted/20 align-middle",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-2.5 px-3 font-mono font-bold text-foreground",
												children: inv.staff_number
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-2.5 px-3",
												children: inv.invited_email
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-2.5 px-3 uppercase text-[10px]",
												children: inv.role
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-2.5 px-3 text-center",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `inline-block rounded px-2 py-0.5 text-[8px] font-bold uppercase ${statusLabel === "Activated" ? "bg-success/10 text-success" : statusLabel === "Expired" ? "bg-destructive/10 text-destructive" : "bg-amber-500/10 text-amber-500"}`,
													children: statusLabel
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-2.5 px-3 text-right whitespace-nowrap space-x-1",
												children: statusLabel === "Pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													disabled: resending[inv.id],
													onClick: () => handleResendInvite(inv.id, inv.invited_email),
													className: "inline-block bg-primary-soft text-brand-dark rounded px-2 py-1 text-[9px] hover:bg-brand/10 transition font-semibold disabled:opacity-50",
													children: resending[inv.id] ? "⏳ Resending…" : "✉️ Send Mail"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => {
														navigator.clipboard.writeText(link);
														alert("Activation URL copied to clipboard!");
													},
													className: "inline-block border border-input rounded px-2 py-1 text-[9px] hover:bg-muted transition",
													children: "Copy Link"
												})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-muted-foreground font-mono",
													children: "Inactive"
												})
											})
										]
									}, inv.id);
								})
							})]
						})
					})]
				})]
			}),
			activeTab === "pollingUnits" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-border bg-card shadow-sm p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-4 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold",
							children: "INEC Registered Polling Units"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => exportToCSV(filteredPollingUnits, [
										"id",
										"name",
										"ward",
										"lga",
										"state",
										"registered_voters_count"
									], [
										"Code / ID",
										"Name",
										"Ward",
										"LGA",
										"State",
										"Registered Voters"
									], "polling_units.csv"),
									className: "inline-flex items-center gap-1 rounded-lg border border-input bg-card px-2.5 py-1.5 text-[11px] font-semibold text-foreground hover:bg-muted transition",
									children: "📥 Export CSV"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "inline-flex items-center gap-1 rounded-lg border border-input bg-card px-2.5 py-1.5 text-[11px] font-semibold text-foreground hover:bg-muted transition cursor-pointer",
									children: ["📤 Import CSV", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										accept: ".csv",
										className: "hidden",
										onChange: (e) => handleImportCSV(e, "polling-units")
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: fetchData,
									className: "rounded-md p-1.5 text-muted-foreground hover:bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "h-4 w-4" })
								})
							]
						})]
					}),
					showPuModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full max-w-md rounded-2xl border border-border bg-card shadow-2xl p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold mb-4",
								children: editingPuId ? "Update Polling Unit" : "Register New Polling Unit"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSavePu,
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "text-[10px] font-semibold uppercase text-muted-foreground",
										children: ["Polling Unit Code/ID ", editingPuId ? "*" : "(Autogenerated)"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										placeholder: editingPuId ? "e.g. PU-24-05-11" : "PU-[RANDOM_ID] (Autogenerated)",
										disabled: true,
										value: puForm.id,
										onChange: (e) => setPuForm((p) => ({
											...p,
											id: e.target.value.toUpperCase()
										})),
										className: "w-full mt-1 rounded-lg border border-input bg-muted px-3 py-2 text-xs outline-none cursor-not-allowed font-mono text-muted-foreground"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[10px] font-semibold uppercase text-muted-foreground",
										children: "Facility Name *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										placeholder: "e.g. Alausa Primary School",
										value: puForm.name,
										onChange: (e) => setPuForm((p) => ({
											...p,
											name: e.target.value
										})),
										className: "w-full mt-1 rounded-lg border border-input bg-background px-3 py-2 text-xs outline-none focus:border-brand"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-[10px] font-semibold uppercase text-muted-foreground",
											children: "Ward *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											placeholder: "Alausa",
											value: puForm.ward,
											onChange: (e) => setPuForm((p) => ({
												...p,
												ward: e.target.value
											})),
											className: "w-full mt-1 rounded-lg border border-input bg-background px-3 py-2 text-xs outline-none focus:border-brand"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-[10px] font-semibold uppercase text-muted-foreground",
											children: "LGA *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											placeholder: "Ikeja",
											value: puForm.lga,
											onChange: (e) => setPuForm((p) => ({
												...p,
												lga: e.target.value
											})),
											className: "w-full mt-1 rounded-lg border border-input bg-background px-3 py-2 text-xs outline-none focus:border-brand"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-[10px] font-semibold uppercase text-muted-foreground",
											children: "State *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: puForm.state,
											onChange: (e) => setPuForm((p) => ({
												...p,
												state: e.target.value
											})),
											className: "w-full mt-1 rounded-lg border border-input bg-card px-3 py-2 text-xs outline-none focus:border-brand",
											children: NIGERIAN_STATES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: s,
												children: s
											}, s))
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-[10px] font-semibold uppercase text-muted-foreground",
											children: "Registered Voters Count"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											value: puForm.registered_voters_count,
											onChange: (e) => setPuForm((p) => ({
												...p,
												registered_voters_count: Number(e.target.value)
											})),
											className: "w-full mt-1 rounded-lg border border-input bg-background px-3 py-2 text-xs outline-none focus:border-brand"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3 pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setShowPuModal(false),
											className: "flex-1 rounded-xl border border-input py-2 text-xs font-semibold hover:bg-muted",
											children: "Cancel"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											className: "flex-1 rounded-xl bg-brand py-2 text-xs font-semibold text-white hover:bg-brand-dark",
											children: "Save"
										})]
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-xs border-collapse",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border text-muted-foreground uppercase text-[10px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4",
										children: "Code / ID"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4",
										children: "Name"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4",
										children: "Ward / LGA"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4",
										children: "State"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4",
										children: "Registered Voters"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4 text-right",
										children: "Actions"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-border",
								children: filteredPollingUnits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 6,
									className: "py-8 text-center text-muted-foreground",
									children: "No matching polling units found."
								}) }) : filteredPollingUnits.map((pu) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-muted/30",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 font-mono font-bold text-foreground",
											children: pu.id
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4",
											children: pu.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "py-3 px-4",
											children: [
												pu.ward,
												" Ward, ",
												pu.lga
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4",
											children: pu.state
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 font-mono",
											children: pu.registered_voters_count.toLocaleString()
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "py-3 px-4 text-right space-x-1 whitespace-nowrap",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => {
													setEditingPuId(pu.id);
													setPuForm({
														id: pu.id,
														name: pu.name,
														ward: pu.ward,
														lga: pu.lga,
														state: pu.state,
														registered_voters_count: pu.registered_voters_count
													});
													setShowPuModal(true);
												},
												className: "rounded border border-input px-2 py-1 text-[10px] hover:bg-muted font-semibold text-muted-foreground",
												children: "Edit"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleDeletePu(pu.id),
												className: "rounded bg-destructive/10 text-destructive px-2 py-1 text-[10px] hover:bg-destructive/20 font-semibold",
												children: "Delete"
											})]
										})
									]
								}, pu.id))
							})]
						})
					})
				]
			}),
			activeTab === "nimc" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-border bg-card shadow-sm p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-4 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold",
							children: "National NIMC Identity Database"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => exportToCSV(filteredNimcRecords, [
										"nin",
										"full_name",
										"state",
										"lga",
										"biometric_hash"
									], [
										"NIN",
										"Full Name",
										"State",
										"LGA",
										"Biometric Hash"
									], "nimc_records.csv"),
									className: "inline-flex items-center gap-1 rounded-lg border border-input bg-card px-2.5 py-1.5 text-[11px] font-semibold text-foreground hover:bg-muted transition",
									children: "📥 Export CSV"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "inline-flex items-center gap-1 rounded-lg border border-input bg-card px-2.5 py-1.5 text-[11px] font-semibold text-foreground hover:bg-muted transition cursor-pointer",
									children: ["📤 Import CSV", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										accept: ".csv",
										className: "hidden",
										onChange: (e) => handleImportCSV(e, "nimc")
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: fetchData,
									className: "rounded-md p-1.5 text-muted-foreground hover:bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "h-4 w-4" })
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mb-6",
						children: "This panel interfaces directly with the simulated National Identity Management Commission (NIMC) register. Add or edit national registry profiles to mock physical biometric records."
					}),
					showNimcModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full max-w-md rounded-2xl border border-border bg-card shadow-2xl p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold mb-4",
								children: editingNimcId ? "Update Citizen Record" : "Register Citizen in Database"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSaveNimc,
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[10px] font-semibold uppercase text-muted-foreground",
										children: "National Identification Number (NIN) *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										placeholder: "e.g. 11111111111",
										maxLength: 11,
										disabled: !!editingNimcId,
										value: nimcForm.nin,
										onChange: (e) => setNimcForm((p) => ({
											...p,
											nin: e.target.value.replace(/\D/g, "")
										})),
										className: "w-full mt-1 rounded-lg border border-input bg-background px-3 py-2 text-xs outline-none focus:border-brand font-mono disabled:opacity-50"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[10px] font-semibold uppercase text-muted-foreground",
										children: "Full Registered Name *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										placeholder: "e.g. Chinonso Alabi",
										value: nimcForm.full_name,
										onChange: (e) => setNimcForm((p) => ({
											...p,
											full_name: e.target.value
										})),
										className: "w-full mt-1 rounded-lg border border-input bg-background px-3 py-2 text-xs outline-none focus:border-brand"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-[10px] font-semibold uppercase text-muted-foreground",
											children: "State of Origin/Res *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: nimcForm.state,
											onChange: (e) => setNimcForm((p) => ({
												...p,
												state: e.target.value
											})),
											className: "w-full mt-1 rounded-lg border border-input bg-card px-3 py-2 text-xs outline-none focus:border-brand",
											children: NIGERIAN_STATES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: s,
												children: s
											}, s))
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-[10px] font-semibold uppercase text-muted-foreground",
											children: "LGA of Registration *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											placeholder: "e.g. Ikeja",
											value: nimcForm.lga,
											onChange: (e) => setNimcForm((p) => ({
												...p,
												lga: e.target.value
											})),
											className: "w-full mt-1 rounded-lg border border-input bg-background px-3 py-2 text-xs outline-none focus:border-brand"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[10px] font-semibold uppercase text-muted-foreground",
										children: "Biometric Hash Record"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: nimcForm.biometric_hash,
										onChange: (e) => setNimcForm((p) => ({
											...p,
											biometric_hash: e.target.value
										})),
										className: "w-full mt-1 rounded-lg border border-input bg-background px-3 py-2 text-xs outline-none focus:border-brand font-mono"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3 pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setShowNimcModal(false),
											className: "flex-1 rounded-xl border border-input py-2 text-xs font-semibold hover:bg-muted",
											children: "Cancel"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											className: "flex-1 rounded-xl bg-brand py-2 text-xs font-semibold text-white hover:bg-brand-dark",
											children: "Save Record"
										})]
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-xs border-collapse",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border text-muted-foreground uppercase text-[10px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4",
										children: "NIN"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4",
										children: "Full Name"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4",
										children: "Origin (State / LGA)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4",
										children: "Biometric Status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4 text-right",
										children: "Actions"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-border",
								children: filteredNimcRecords.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 5,
									className: "py-8 text-center text-muted-foreground",
									children: "No matching citizen records found."
								}) }) : filteredNimcRecords.map((nm) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-muted/30",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 font-mono font-bold text-foreground",
											children: nm.nin
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4",
											children: nm.full_name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "py-3 px-4",
											children: [
												nm.lga,
												", ",
												nm.state,
												" State"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 font-mono text-[10px] text-muted-foreground truncate max-w-xs",
											children: nm.biometric_hash
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "py-3 px-4 text-right space-x-1 whitespace-nowrap",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => {
													setEditingNimcId(nm.id);
													setNimcForm({
														nin: nm.nin,
														full_name: nm.full_name,
														state: nm.state,
														lga: nm.lga,
														biometric_hash: nm.biometric_hash
													});
													setShowNimcModal(true);
												},
												className: "rounded border border-input px-2 py-1 text-[10px] hover:bg-muted font-semibold text-muted-foreground",
												children: "Edit"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleDeleteNimc(nm.id),
												className: "rounded bg-destructive/10 text-destructive px-2 py-1 text-[10px] hover:bg-destructive/20 font-semibold",
												children: "Delete"
											})]
										})
									]
								}, nm.id))
							})]
						})
					})
				]
			})
		]
	});
}
function SecretaryDashboard() {
	const [metrics, setMetrics] = (0, import_react.useState)(null);
	const [elections, setElections] = (0, import_react.useState)([]);
	const [accreditations, setAccreditations] = (0, import_react.useState)([]);
	const [invitations, setInvitations] = (0, import_react.useState)([]);
	const [pollingUnits, setPollingUnits] = (0, import_react.useState)([]);
	const [nimcRecords, setNimcRecords] = (0, import_react.useState)([]);
	const [logs, setLogs] = (0, import_react.useState)([]);
	const [loadState, setLoadState] = (0, import_react.useState)({
		metrics: true,
		el: true,
		acc: true,
		inv: true,
		pu: true,
		nimc: true,
		logs: true
	});
	const [activeTab, setActiveTab] = (0, import_react.useState)("metrics");
	const loading = activeTab === "metrics" ? loadState.metrics : activeTab === "elections" ? loadState.el : activeTab === "accreditations" ? loadState.acc : activeTab === "invitations" ? loadState.inv : activeTab === "pollingUnits" ? loadState.pu : activeTab === "nimc" ? loadState.nimc : activeTab === "logs" ? loadState.logs : false;
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [inviteForm, setInviteForm] = (0, import_react.useState)({
		email: "",
		role: "po",
		polling_unit_id: ""
	});
	const [sendingInvite, setSendingInvite] = (0, import_react.useState)(false);
	const [inviteErr, setInviteErr] = (0, import_react.useState)(null);
	const [resending, setResending] = (0, import_react.useState)({});
	const [reviewing, setReviewing] = (0, import_react.useState)({});
	const [msg, setMsg] = (0, import_react.useState)(null);
	const [expandedLog, setExpandedLog] = (0, import_react.useState)(null);
	const fetchData = () => {
		setLoadState({
			metrics: true,
			el: true,
			acc: true,
			inv: true,
			pu: true,
			nimc: true,
			logs: true
		});
		apiRequest("/secretary/metrics/").then(setMetrics).catch((e) => setMsg({
			text: e?.message || "Failed to load metrics",
			type: "err"
		})).finally(() => setLoadState((p) => ({
			...p,
			metrics: false
		})));
		apiRequest("/commissioner/elections/").then(setElections).catch((e) => setMsg({
			text: e?.message || "Failed to load elections",
			type: "err"
		})).finally(() => setLoadState((p) => ({
			...p,
			el: false
		})));
		apiRequest("/onboarding/accreditation/").then(setAccreditations).catch((e) => setMsg({
			text: e?.message || "Failed to load accreditations",
			type: "err"
		})).finally(() => setLoadState((p) => ({
			...p,
			acc: false
		})));
		apiRequest("/onboarding/invitations/").then(setInvitations).catch((e) => setMsg({
			text: e?.message || "Failed to load invitations",
			type: "err"
		})).finally(() => setLoadState((p) => ({
			...p,
			inv: false
		})));
		apiRequest("/polling-units/").then(setPollingUnits).catch((e) => setMsg({
			text: e?.message || "Failed to load polling units",
			type: "err"
		})).finally(() => setLoadState((p) => ({
			...p,
			pu: false
		})));
		apiRequest("/nimc-records/").then(setNimcRecords).catch((e) => setMsg({
			text: e?.message || "Failed to load NIMC records",
			type: "err"
		})).finally(() => setLoadState((p) => ({
			...p,
			nimc: false
		})));
		apiRequest("/audit-logs/").then(setLogs).catch((e) => setMsg({
			text: e?.message || "Failed to load audit logs",
			type: "err"
		})).finally(() => setLoadState((p) => ({
			...p,
			logs: false
		})));
	};
	const handleImportCSV = async (e, type) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = async (event) => {
			const text = event.target?.result;
			if (!text) return;
			const parsedRows = parseCSV(text);
			if (parsedRows.length < 2) {
				alert("Invalid CSV file. Must include a header row and at least one data row.");
				return;
			}
			const headers = parsedRows[0];
			const dataRows = parsedRows.slice(1).filter((r) => r.length > 0 && r.some((cell) => cell.trim() !== ""));
			let items = [];
			let url = "";
			if (type === "polling-units") {
				items = dataRows.map((row) => mapRowToPu(row, headers));
				url = "/polling-units/";
			} else if (type === "nimc") {
				items = dataRows.map((row) => mapRowToNimc(row, headers));
				url = "/nimc-records/";
			} else if (type === "invitations") {
				items = dataRows.map((row) => mapRowToInvite(row, headers));
				url = "/onboarding/invite/";
			}
			try {
				const response = await apiRequest(url, "POST", items);
				setMsg({
					text: response.message || `Successfully imported ${items.length} records!`,
					type: "ok"
				});
				fetchData();
			} catch (err) {
				setMsg({
					text: "Import failed: " + err.message,
					type: "err"
				});
			}
		};
		reader.readAsText(file);
		e.target.value = "";
	};
	(0, import_react.useEffect)(() => {
		fetchData();
	}, []);
	const handleSendInvite = async (e) => {
		e.preventDefault();
		if (!inviteForm.email) {
			setInviteErr("Email is required.");
			return;
		}
		setSendingInvite(true);
		setInviteErr(null);
		setMsg(null);
		try {
			const res = await apiRequest("/onboarding/invite/", "POST", inviteForm);
			setMsg({
				text: res.message,
				type: "ok"
			});
			setInviteForm({
				email: "",
				role: "po",
				polling_unit_id: ""
			});
			const [invs, met] = await Promise.all([apiRequest("/onboarding/invitations/"), apiRequest("/secretary/metrics/")]);
			setInvitations(invs);
			setMetrics(met);
		} catch (err) {
			setInviteErr(err.message || "Failed to send invitation.");
		} finally {
			setSendingInvite(false);
		}
	};
	const handleResendInvite = async (id, email) => {
		setResending((p) => ({
			...p,
			[id]: true
		}));
		setMsg(null);
		try {
			const res = await apiRequest(`/onboarding/invite/${id}/resend/`, "POST");
			setMsg({
				text: res.message,
				type: "ok"
			});
		} catch (e) {
			setMsg({
				text: e?.message || `Failed to resend invitation to ${email}`,
				type: "err"
			});
		} finally {
			setResending((p) => ({
				...p,
				[id]: false
			}));
		}
	};
	const handleReviewAccreditation = async (id, decision) => {
		let notes = "Approved";
		if (decision === "reject") {
			const promptNotes = prompt("Please enter rejection notes / reasons:");
			if (promptNotes === null) return;
			notes = promptNotes || "Does not meet organization criteria";
		}
		setReviewing((p) => ({
			...p,
			[id]: true
		}));
		setMsg(null);
		try {
			const res = await apiRequest(`/onboarding/accreditation/${id}/review/`, "POST", {
				decision,
				notes
			});
			setMsg({
				text: res.message,
				type: "ok"
			});
			const [acc, invs, met] = await Promise.all([
				apiRequest("/onboarding/accreditation/"),
				apiRequest("/onboarding/invitations/"),
				apiRequest("/secretary/metrics/")
			]);
			setAccreditations(acc);
			setInvitations(invs);
			setMetrics(met);
		} catch (e) {
			setMsg({
				text: e?.message || "Accreditation review failed",
				type: "err"
			});
		} finally {
			setReviewing((p) => ({
				...p,
				[id]: false
			}));
		}
	};
	const isRolePuBound = [
		"po",
		"apo",
		"agent"
	].includes(inviteForm.role);
	const filteredElections = elections.filter((el) => {
		const matchesSearch = el.title.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesFilter = statusFilter === "all" || el.status === statusFilter;
		return matchesSearch && matchesFilter;
	});
	const filteredAccreditations = accreditations.filter((acc) => {
		const matchesSearch = acc.organization_name.toLowerCase().includes(searchQuery.toLowerCase()) || acc.contact_name.toLowerCase().includes(searchQuery.toLowerCase()) || acc.contact_email.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesFilter = statusFilter === "all" || acc.status === statusFilter;
		return matchesSearch && matchesFilter;
	});
	const filteredInvitations = invitations.filter((inv) => {
		const matchesSearch = inv.invited_email.toLowerCase().includes(searchQuery.toLowerCase()) || inv.staff_number.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesFilter = statusFilter === "all" || inv.role === statusFilter || statusFilter === "used" && inv.is_used || statusFilter === "pending" && !inv.is_used;
		return matchesSearch && matchesFilter;
	});
	const filteredPollingUnits = pollingUnits.filter((pu) => {
		const matchesSearch = pu.id.toLowerCase().includes(searchQuery.toLowerCase()) || pu.name.toLowerCase().includes(searchQuery.toLowerCase()) || pu.ward.toLowerCase().includes(searchQuery.toLowerCase()) || pu.lga.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesFilter = statusFilter === "all" || pu.state === statusFilter;
		return matchesSearch && matchesFilter;
	});
	const filteredNimcRecords = nimcRecords.filter((nm) => {
		const matchesSearch = nm.nin.toLowerCase().includes(searchQuery.toLowerCase()) || nm.full_name.toLowerCase().includes(searchQuery.toLowerCase()) || nm.lga.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesFilter = statusFilter === "all" || nm.state === statusFilter;
		return matchesSearch && matchesFilter;
	});
	const filteredLogs = logs.filter((log) => {
		const matchesSearch = log.username.toLowerCase().includes(searchQuery.toLowerCase()) || log.model_name.toLowerCase().includes(searchQuery.toLowerCase()) || log.object_id.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesFilter = statusFilter === "all" || log.action === statusFilter;
		return matchesSearch && matchesFilter;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `rounded-xl p-4 text-xs font-semibold ${msg.type === "ok" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`,
				children: msg.text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2 border-b border-border pb-4 mb-6",
				children: [
					{
						id: "metrics",
						label: "Overview & Metrics"
					},
					{
						id: "invitations",
						label: "Staff Onboarding"
					},
					{
						id: "accreditations",
						label: `Accreditation Requests (${accreditations.filter((a) => a.status === "pending").length})`
					},
					{
						id: "elections",
						label: "Elections (Read-Only)"
					},
					{
						id: "pollingUnits",
						label: "Polling Units (Read-Only)"
					},
					{
						id: "nimc",
						label: "NIMC Register (Read-Only)"
					},
					{
						id: "logs",
						label: "System Audit Logs"
					}
				].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setActiveTab(tab.id);
						setMsg(null);
						setSearchQuery("");
						setStatusFilter("all");
					},
					className: `rounded-lg px-4 py-2 text-xs font-semibold transition ${activeTab === tab.id ? "bg-brand text-white" : "bg-card text-muted-foreground border border-border hover:bg-muted/40"}`,
					children: tab.label
				}, tab.id))
			}),
			activeTab !== "metrics" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between bg-card p-4 rounded-xl border border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						placeholder: `Search ${activeTab === "elections" ? "elections by title..." : activeTab === "accreditations" ? "accreditations by name/org/email..." : activeTab === "invitations" ? "invitations by email/staff ID..." : activeTab === "pollingUnits" ? "polling units by code/name/ward/LGA..." : activeTab === "nimc" ? "NIMC citizens by NIN/name/LGA..." : activeTab === "logs" ? "audit logs by username/model/object..." : "records..."}`,
						value: searchQuery,
						onChange: (e) => setSearchQuery(e.target.value),
						className: "w-full rounded-lg border border-input bg-background pl-9 pr-3 py-2 text-xs outline-none focus:border-brand"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [
						activeTab === "elections" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: statusFilter,
							onChange: (e) => setStatusFilter(e.target.value),
							className: "rounded-lg border border-input bg-background px-3 py-2 text-xs outline-none focus:border-brand",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: "All Statuses"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "drafted",
									children: "Drafted"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "upcoming",
									children: "Upcoming"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "active",
									children: "Active"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "collation",
									children: "Collation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "closed",
									children: "Closed"
								})
							]
						}),
						activeTab === "accreditations" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: statusFilter,
							onChange: (e) => setStatusFilter(e.target.value),
							className: "rounded-lg border border-input bg-background px-3 py-2 text-xs outline-none focus:border-brand",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: "All Statuses"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "pending",
									children: "Pending"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "approved",
									children: "Approved"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "rejected",
									children: "Rejected"
								})
							]
						}),
						activeTab === "invitations" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: statusFilter,
							onChange: (e) => setStatusFilter(e.target.value),
							className: "rounded-lg border border-input bg-background px-3 py-2 text-xs outline-none focus:border-brand",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: "All Roles & Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "pending",
									children: "Pending Invitation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "used",
									children: "Activated Account"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "commissioner",
									children: "INEC Commissioner"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "secretary",
									children: "INEC Secretary"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "ro",
									children: "Returning Officer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "co",
									children: "Collation Officer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "po",
									children: "Presiding Officer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "apo",
									children: "Assistant Presiding Officer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "spo",
									children: "Supervisory Presiding Officer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "auditor",
									children: "Auditor"
								})
							]
						}),
						(activeTab === "pollingUnits" || activeTab === "nimc") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: statusFilter,
							onChange: (e) => setStatusFilter(e.target.value),
							className: "rounded-lg border border-input bg-background px-3 py-2 text-xs outline-none focus:border-brand",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "All States"
							}), NIGERIAN_STATES.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: st,
								children: st
							}, st))]
						}),
						activeTab === "logs" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: statusFilter,
							onChange: (e) => setStatusFilter(e.target.value),
							className: "rounded-lg border border-input bg-background px-3 py-2 text-xs outline-none focus:border-brand",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: "All Actions"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "CREATE",
									children: "CREATE"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "UPDATE",
									children: "UPDATE"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "DELETE",
									children: "DELETE"
								})
							]
						})
					]
				})]
			}),
			activeTab === "metrics" && metrics && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card p-5 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground uppercase font-bold tracking-wider",
								children: "Total Voters"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-3xl font-bold font-mono text-brand",
								children: metrics.total_voters?.toLocaleString()
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card p-5 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground uppercase font-bold tracking-wider",
								children: "Total Votes Cast"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-3xl font-bold font-mono text-emerald-600",
								children: metrics.total_votes_cast?.toLocaleString()
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card p-5 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground uppercase font-bold tracking-wider",
								children: "Polling Units"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-3xl font-bold font-mono text-blue-600",
								children: metrics.total_polling_units?.toLocaleString()
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card p-5 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground uppercase font-bold tracking-wider",
								children: "Elections"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-3xl font-bold font-mono text-purple-600",
								children: metrics.total_elections?.toLocaleString()
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card p-5 shadow-sm text-center col-span-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-8 w-8 text-brand mx-auto mb-2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-bold",
									children: "Active Staff Directory"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-2xl font-bold font-mono text-brand mt-1",
									children: metrics.total_staff
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-muted-foreground mt-1",
									children: "Electoral officers currently in database"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card p-5 shadow-sm text-center col-span-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-8 w-8 text-amber-500 mx-auto mb-2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-bold",
									children: "Onboarding Invitations"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-2xl font-bold font-mono text-amber-500 mt-1",
									children: metrics.total_invitations
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-muted-foreground mt-1",
									children: "Sent token-based email invites"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card p-5 shadow-sm text-center col-span-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-8 w-8 text-purple-500 mx-auto mb-2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-bold",
									children: "Accreditations Logged"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-2xl font-bold font-mono text-purple-500 mt-1",
									children: metrics.total_accreditations
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-muted-foreground mt-1",
									children: "Media and Observer applications submitted"
								})
							]
						})
					]
				})]
			}),
			activeTab === "invitations" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-sm self-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base font-bold border-b border-border pb-3 mb-4",
						children: "Onboard Official"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSendInvite,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[10px] font-semibold uppercase text-muted-foreground",
								children: "Official Email *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								placeholder: "name@email.com",
								value: inviteForm.email,
								onChange: (e) => setInviteForm((p) => ({
									...p,
									email: e.target.value
								})),
								className: "w-full mt-1 rounded-lg border border-input bg-background px-3 py-2 text-xs outline-none focus:border-brand"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[10px] font-semibold uppercase text-muted-foreground",
								children: "Staff ID (Autogenerated)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								readOnly: true,
								placeholder: "STAFF-[ROLE]-[RANDOM_ID]",
								className: "w-full mt-1 rounded-lg border border-input bg-muted px-3 py-2 text-xs outline-none cursor-not-allowed font-mono text-muted-foreground"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[10px] font-semibold uppercase text-muted-foreground",
								children: "Electoral Role *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: inviteForm.role,
								onChange: (e) => setInviteForm((p) => ({
									...p,
									role: e.target.value
								})),
								className: "w-full mt-1 rounded-lg border border-input bg-card px-3 py-2 text-xs outline-none focus:border-brand",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "commissioner",
										children: "INEC Commissioner (HQ)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "secretary",
										children: "INEC Secretary (HQ)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "ro",
										children: "Returning Officer (RO)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "co",
										children: "Collation Officer (CO)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "po",
										children: "Presiding Officer (PO)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "apo",
										children: "Assistant Presiding Officer (APO)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "spo",
										children: "Supervisory Presiding Officer (SPO)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "auditor",
										children: "Cybersecurity Auditor"
									})
								]
							})] }),
							isRolePuBound && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[10px] font-semibold uppercase text-muted-foreground",
								children: "Assigned Polling Unit"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: inviteForm.polling_unit_id,
								onChange: (e) => setInviteForm((p) => ({
									...p,
									polling_unit_id: e.target.value
								})),
								className: "w-full mt-1 rounded-lg border border-input bg-card px-3 py-2 text-xs outline-none focus:border-brand",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select Polling Unit..."
								}), pollingUnits.map((pu) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: pu.id,
									children: [
										pu.name,
										" (",
										pu.id,
										")"
									]
								}, pu.id))]
							})] }),
							inviteErr && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rounded-md bg-destructive/10 p-2.5 text-[10px] text-destructive leading-relaxed font-semibold",
								children: inviteErr
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: sendingInvite,
								className: "w-full rounded-lg bg-brand py-2 text-xs font-bold text-white hover:bg-brand-dark disabled:opacity-50",
								children: sendingInvite ? "Generating invite…" : "📨 Generate Invitation"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-sm md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-3 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-bold",
							children: "Onboarding Invitations Logs"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => exportToCSV(filteredInvitations, [
										"staff_number",
										"invited_email",
										"role",
										"is_used",
										"expires_at"
									], [
										"Staff Number",
										"Email Address",
										"Role",
										"Is Activated",
										"Expires At"
									], "staff_invitations.csv"),
									className: "inline-flex items-center gap-1 rounded-lg border border-input bg-card px-2.5 py-1.5 text-[11px] font-semibold text-foreground hover:bg-muted transition",
									children: "📥 Export CSV"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "inline-flex items-center gap-1 rounded-lg border border-input bg-card px-2.5 py-1.5 text-[11px] font-semibold text-foreground hover:bg-muted transition cursor-pointer",
									children: ["📤 Bulk Invite (CSV)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										accept: ".csv",
										className: "hidden",
										onChange: (e) => handleImportCSV(e, "invitations")
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: fetchData,
									className: "rounded-md p-1.5 text-muted-foreground hover:bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "h-4 w-4" })
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-xs border-collapse",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border text-muted-foreground uppercase text-[10px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2.5 px-3",
										children: "Staff Number"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2.5 px-3",
										children: "Email Address"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2.5 px-3",
										children: "Role"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2.5 px-3 text-center",
										children: "Status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2.5 px-3 text-right",
										children: "Actions"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-border",
								children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 5,
									className: "py-8 text-center text-muted-foreground animate-pulse",
									children: "Loading invitations..."
								}) }) : filteredInvitations.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 5,
									className: "py-8 text-center text-muted-foreground",
									children: "No matching invitations found."
								}) }) : filteredInvitations.map((inv) => {
									const isExpired = new Date(inv.expires_at) < /* @__PURE__ */ new Date();
									const statusLabel = inv.is_used ? "Activated" : isExpired ? "Expired" : "Pending";
									const link = `${window.location.origin}/onboard?token=${inv.token}`;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "hover:bg-muted/20 align-middle",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-2.5 px-3 font-mono font-bold text-foreground",
												children: inv.staff_number
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-2.5 px-3",
												children: inv.invited_email
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-2.5 px-3 uppercase text-[10px]",
												children: inv.role
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-2.5 px-3 text-center",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `inline-block rounded px-2 py-0.5 text-[8px] font-bold uppercase ${statusLabel === "Activated" ? "bg-success/10 text-success" : statusLabel === "Expired" ? "bg-destructive/10 text-destructive" : "bg-amber-500/10 text-amber-500"}`,
													children: statusLabel
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-2.5 px-3 text-right whitespace-nowrap space-x-1",
												children: statusLabel === "Pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													disabled: resending[inv.id],
													onClick: () => handleResendInvite(inv.id, inv.invited_email),
													className: "inline-block bg-primary-soft text-brand-dark rounded px-2 py-1 text-[9px] hover:bg-brand/10 transition font-semibold disabled:opacity-50",
													children: resending[inv.id] ? "⏳ Resending…" : "✉️ Send Mail"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => {
														navigator.clipboard.writeText(link);
														alert("Activation URL copied to clipboard!");
													},
													className: "inline-block border border-input rounded px-2 py-1 text-[9px] hover:bg-muted transition",
													children: "Copy Link"
												})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-muted-foreground font-mono",
													children: "Inactive"
												})
											})
										]
									}, inv.id);
								})
							})]
						})
					})]
				})]
			}),
			activeTab === "accreditations" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-border bg-card shadow-sm overflow-hidden p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border pb-4 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold",
							children: "Accreditation Requests"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: fetchData,
							className: "rounded-md p-1.5 text-muted-foreground hover:bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "h-4 w-4" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mb-6",
						children: "Review submitted media licences and observer credentials. Approving an application will generate a secure onboarding link and trigger automated notification emails."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-xs border-collapse",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border text-muted-foreground uppercase text-[10px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4",
										children: "Organization"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4",
										children: "Type"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4",
										children: "Contact Person"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4",
										children: "Reference ID"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4",
										children: "Description"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4 text-center",
										children: "Status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-3 px-4 text-right",
										children: "Actions"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-border",
								children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 7,
									className: "py-8 text-center text-muted-foreground animate-pulse",
									children: "Loading applications..."
								}) }) : filteredAccreditations.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 7,
									className: "py-8 text-center text-muted-foreground",
									children: "No matching accreditation applications found."
								}) }) : filteredAccreditations.map((acc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-muted/30 align-top",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 font-bold text-foreground",
											children: acc.organization_name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 capitalize",
											children: acc.applicant_type.replace("_", " ")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "py-3 px-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold",
													children: acc.contact_name
												}),
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-muted-foreground",
													children: acc.contact_email
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 font-mono",
											children: acc.organization_id
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 max-w-xs truncate",
											children: acc.mandate_description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 text-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `inline-block rounded px-2 py-0.5 text-[9px] font-bold uppercase ${acc.status === "approved" ? "bg-success/15 text-success" : acc.status === "rejected" ? "bg-destructive/15 text-destructive" : "bg-amber-500/15 text-amber-500"}`,
												children: acc.status
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 text-right space-x-1.5 whitespace-nowrap",
											children: acc.status === "pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												disabled: reviewing[acc.id],
												onClick: () => handleReviewAccreditation(acc.id, "approve"),
												className: "rounded bg-emerald-600 px-2 py-1 text-[10px] font-bold text-white hover:bg-emerald-700 disabled:opacity-50",
												children: "Approve"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												disabled: reviewing[acc.id],
												onClick: () => handleReviewAccreditation(acc.id, "reject"),
												className: "rounded bg-destructive px-2 py-1 text-[10px] font-bold text-white hover:bg-destructive-dark disabled:opacity-50",
												children: "Reject"
											})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-muted-foreground font-mono",
												children: "Reviewed"
											})
										})
									]
								}, acc.id))
							})]
						})
					})
				]
			}),
			activeTab === "elections" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-border bg-card shadow-sm p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border pb-4 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-bold",
						children: "Elections Registry"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: fetchData,
						className: "rounded-md p-1.5 text-muted-foreground hover:bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "h-4 w-4" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-xs border-collapse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border text-muted-foreground uppercase text-[10px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Title"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Type"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Date"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4 font-mono",
									children: "Candidates"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Created By"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4 text-center",
									children: "Status"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-border",
							children: filteredElections.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: 6,
								className: "py-8 text-center text-muted-foreground",
								children: "No matching elections found."
							}) }) : filteredElections.map((el) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-muted/30",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4 font-bold text-foreground",
										children: el.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4 capitalize",
										children: el.election_type_display
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4 font-mono",
										children: el.date
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "py-3 px-4 font-mono",
										children: [el.candidate_count, " candidates"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4 text-muted-foreground",
										children: el.created_by_name || "System"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4 text-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `inline-block rounded px-2.5 py-0.5 text-[9px] font-bold uppercase ${STATUS_COLOURS[el.status]}`,
											children: el.status
										})
									})
								]
							}, el.id))
						})]
					})
				})]
			}),
			activeTab === "pollingUnits" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-border bg-card shadow-sm p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-4 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-bold",
						children: "INEC Registered Polling Units"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => exportToCSV(filteredPollingUnits, [
								"id",
								"name",
								"ward",
								"lga",
								"state",
								"registered_voters_count"
							], [
								"Code / ID",
								"Name",
								"Ward",
								"LGA",
								"State",
								"Registered Voters"
							], "polling_units.csv"),
							className: "inline-flex items-center gap-1 rounded-lg border border-input bg-card px-2.5 py-1.5 text-[11px] font-semibold text-foreground hover:bg-muted transition",
							children: "📥 Export CSV"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: fetchData,
							className: "rounded-md p-1.5 text-muted-foreground hover:bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "h-4 w-4" })
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-xs border-collapse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border text-muted-foreground uppercase text-[10px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Code / ID"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Ward / LGA"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "State"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Officers"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4 font-mono",
									children: "Registered Voters"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-border",
							children: filteredPollingUnits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: 6,
								className: "py-8 text-center text-muted-foreground",
								children: "No matching polling units found."
							}) }) : filteredPollingUnits.map((pu) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-muted/30",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4 font-mono font-bold text-foreground",
										children: pu.id
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4",
										children: pu.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "py-3 px-4",
										children: [
											pu.ward,
											" Ward, ",
											pu.lga
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4",
										children: pu.state
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "py-3 px-4 space-y-0.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[10px]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-muted-foreground",
													children: "PO:"
												}),
												" ",
												pu.presiding_officer_name || "Unassigned"
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[10px]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-muted-foreground",
													children: "CO:"
												}),
												" ",
												pu.collation_officer_name || "Unassigned"
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4 font-mono font-semibold",
										children: pu.registered_voters_count?.toLocaleString()
									})
								]
							}, pu.id))
						})]
					})
				})]
			}),
			activeTab === "nimc" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-border bg-card shadow-sm p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-4 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-bold",
						children: "National NIMC Identity Database"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => exportToCSV(filteredNimcRecords, [
									"nin",
									"full_name",
									"state",
									"lga",
									"biometric_hash"
								], [
									"NIN",
									"Full Name",
									"State",
									"LGA",
									"Biometric Hash"
								], "nimc_records.csv"),
								className: "inline-flex items-center gap-1 rounded-lg border border-input bg-card px-2.5 py-1.5 text-[11px] font-semibold text-foreground hover:bg-muted transition",
								children: "📥 Export CSV"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "inline-flex items-center gap-1 rounded-lg border border-input bg-card px-2.5 py-1.5 text-[11px] font-semibold text-foreground hover:bg-muted transition cursor-pointer",
								children: ["📤 Import CSV", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									accept: ".csv",
									className: "hidden",
									onChange: (e) => handleImportCSV(e, "nimc")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: fetchData,
								className: "rounded-md p-1.5 text-muted-foreground hover:bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "h-4 w-4" })
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-xs border-collapse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border text-muted-foreground uppercase text-[10px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "NIN"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Full Name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Origin (State / LGA)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Biometric Status"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-border",
							children: filteredNimcRecords.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: 4,
								className: "py-8 text-center text-muted-foreground",
								children: "No matching citizen records found."
							}) }) : filteredNimcRecords.map((nm) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-muted/30",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4 font-mono font-bold text-foreground",
										children: nm.nin
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4",
										children: nm.full_name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "py-3 px-4",
										children: [
											nm.lga,
											", ",
											nm.state,
											" State"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4 font-mono text-[10px] text-muted-foreground truncate max-w-xs",
										children: nm.biometric_hash
									})
								]
							}, nm.id))
						})]
					})
				})]
			}),
			activeTab === "logs" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border pb-4 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-5 w-5 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-bold",
							children: "Cybersecurity & CRUD Operations Audit Stream"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: fetchData,
						className: "rounded-md p-1.5 text-muted-foreground hover:bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "h-4 w-4" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: filteredLogs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-xs text-muted-foreground py-8",
						children: "No matching CRUD audit entries found."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-border font-mono text-xs",
						children: filteredLogs.map((log) => {
							const isExpanded = expandedLog === log.id;
							const isDelete = log.action === "DELETE";
							const isCreate = log.action === "CREATE";
							log.action;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 flex-wrap",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `rounded px-1.5 py-0.5 text-[9px] font-bold ${isDelete ? "bg-red-500/10 text-red-500" : isCreate ? "bg-emerald-500/10 text-emerald-500" : "bg-blue-500/10 text-blue-500"}`,
												children: log.action
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-foreground",
												children: log.model_name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-muted-foreground",
												children: ["ID: ", log.object_id]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "by"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-brand font-bold",
												children: [
													log.username,
													" (",
													log.role,
													")"
												]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 text-[10px] text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["IP: ", log.ip_address || "127.0.0.1"] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: log.timestamp.substring(11, 19) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setExpandedLog(isExpanded ? null : log.id),
												className: "rounded border border-input px-2 py-0.5 text-[9px] font-semibold text-muted-foreground hover:bg-muted",
												children: isExpanded ? "Collapse" : "JSON Diff"
											})
										]
									})]
								}), isExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 rounded-lg border border-border bg-muted/50 p-3 text-[10px] text-muted-foreground overflow-x-auto max-h-48",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-foreground mb-1 uppercase tracking-wider text-[8px]",
										children: "Instance State Payload:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
										className: "whitespace-pre-wrap",
										children: JSON.stringify(JSON.parse(log.details || "{}"), null, 2)
									})]
								})]
							}, log.id);
						})
					})
				})]
			})
		]
	});
}
function VoterDashboard({ elections, loading }) {
	const [search, setSearch] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const filtered = elections.filter((el) => {
		const matchesSearch = el.title.toLowerCase().includes(search.toLowerCase());
		const matchesFilter = statusFilter === "all" || statusFilter === "active" && el.status === "active" || statusFilter === "upcoming" && el.status === "upcoming" || statusFilter === "voted" && el.has_voted;
		return matchesSearch && matchesFilter;
	});
	const ballotsCast = elections.filter((e) => e.has_voted).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Active elections",
					value: String(elections.filter((e) => e.status === "active").length)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Ballots cast",
					value: String(ballotsCast)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Voice guidance",
					value: "On"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-bold",
					children: "Upcoming & Active Ballots"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Tap an election to review candidates and cast your vote."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "Search ballots...",
								value: search,
								onChange: (e) => setSearch(e.target.value),
								className: "rounded-lg border border-input bg-card pl-8 pr-2.5 py-1.5 text-xs outline-none focus:border-brand w-40"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: statusFilter,
							onChange: (e) => setStatusFilter(e.target.value),
							className: "rounded-lg border border-input bg-card px-2.5 py-1.5 text-xs outline-none focus:border-brand",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: "All Ballots"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "active",
									children: "Open Now"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "upcoming",
									children: "Upcoming"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "voted",
									children: "Ballots Cast"
								})
							]
						}),
						(() => {
							const activeElections = elections.filter((e) => e.status === "active");
							return (activeElections.length > 0 ? activeElections.every((e) => e.has_voted) : true) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/results",
								className: "hidden text-sm font-semibold text-brand hover:underline sm:inline",
								children: "View live results →"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden text-sm font-semibold text-muted-foreground opacity-50 cursor-not-allowed sm:inline",
								title: "You must cast all active ballots to view live results",
								children: "Complete ballots for results"
							});
						})()
					]
				})]
			}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: [
					1,
					2,
					3
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-20 w-full animate-pulse rounded-xl bg-card border border-border" }, i))
			}) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border border-dashed border-border p-8 text-center text-muted-foreground text-xs",
				children: "No matching ballots found."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3",
				children: filtered.map((el) => {
					const voted = el.has_voted;
					const active = el.status === "active";
					const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `grid h-11 w-11 place-items-center rounded-lg ${active ? "bg-primary-soft text-brand-dark" : "bg-muted text-muted-foreground"}`,
							children: voted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Vote, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-foreground",
							children: el.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-3.5 w-3.5" }),
								" ",
								el.date
							]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `hidden rounded-full px-2.5 py-1 text-xs font-semibold sm:inline-block ${voted ? "bg-success/15 text-success" : active ? "bg-primary-soft text-brand-dark" : "bg-muted text-muted-foreground"}`,
							children: voted ? "Ballot cast" : active ? "Open now" : "Upcoming"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-brand" })]
					})] });
					const cls = `group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 shadow-sm transition ${active ? "hover:border-brand hover:shadow-md" : "opacity-70 cursor-not-allowed"}`;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/vote/$id",
						params: { id: el.id },
						className: cls,
						children: inner
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cls,
						"aria-disabled": "true",
						children: inner
					}) }, el.id);
				})
			})]
		})]
	});
}
function PresidingOfficerDashboard() {
	const [accreditNin, setAccreditNin] = (0, import_react.useState)("");
	const [accreditationMsg, setAccreditationMsg] = (0, import_react.useState)(null);
	const [accreditationErr, setAccreditationErr] = (0, import_react.useState)(null);
	const [accrediting, setAccrediting] = (0, import_react.useState)(false);
	const [accreditedVotersCount, setAccreditedVotersCount] = (0, import_react.useState)(125);
	const [totalVotesCast, setTotalVotesCast] = (0, import_react.useState)(120);
	const [formUrl, setFormUrl] = (0, import_react.useState)("http://irev.inec.gov.ng/forms/EC8A-Ikeja-01.pdf");
	const [uploadMsg, setUploadMsg] = (0, import_react.useState)(null);
	const [uploadErr, setUploadErr] = (0, import_react.useState)(null);
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [disputes, setDisputes] = (0, import_react.useState)([]);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	(0, import_react.useEffect)(() => {
		fetchDisputes();
	}, []);
	const filteredDisputes = disputes.filter((d) => {
		const matchesSearch = d.description.toLowerCase().includes(searchQuery.toLowerCase()) || d.raised_by_name.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesFilter = statusFilter === "all" || statusFilter === "resolved" && d.is_resolved || statusFilter === "open" && !d.is_resolved;
		return matchesSearch && matchesFilter;
	});
	const fetchDisputes = async () => {
		try {
			const data = await apiRequest("/disputes/");
			setDisputes(data);
		} catch (e) {}
	};
	const handleAccredit = async (e) => {
		e.preventDefault();
		if (!/^\d{11}$/.test(accreditNin)) {
			setAccreditationErr("NIN must be exactly 11 digits.");
			return;
		}
		setAccreditationErr(null);
		setAccreditationMsg(null);
		setAccrediting(true);
		try {
			setTimeout(() => {
				setAccrediting(false);
				setAccreditationMsg(`Voter successfully Accredited via BVAS! Biometrics Match. NIN: ${accreditNin}`);
				setAccreditedVotersCount((prev) => prev + 1);
				setAccreditNin("");
			}, 1500);
		} catch (err) {
			setAccreditationErr(err.message || "Accreditation failed.");
			setAccrediting(false);
		}
	};
	const handleUploadEC8A = async (e) => {
		e.preventDefault();
		setUploadErr(null);
		setUploadMsg(null);
		setUploading(true);
		const signature = "SIG-" + Math.random().toString(36).substring(2, 10).toUpperCase() + "-" + Date.now();
		try {
			await apiRequest("/results-sheets/", "POST", {
				election: "presidential-2027",
				polling_unit: "PU-24-05-11",
				scanned_form_url: formUrl,
				accredited_voters: accreditedVotersCount,
				total_votes_cast: totalVotesCast,
				po_digital_signature: signature,
				is_countersigned_by_agents: true
			});
			setUploadMsg("Form EC8A Result Sheet successfully signed and uploaded to IReV!");
		} catch (err) {
			setUploadErr(err.message || "Failed to upload Result Sheet.");
		} finally {
			setUploading(false);
		}
	};
	const resolveDispute = async (id) => {
		try {
			await apiRequest(`/disputes/${id}/resolve/`, "POST");
			fetchDisputes();
		} catch (e) {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 border-b border-border pb-4 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "h-5 w-5 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-bold",
							children: "BVAS Accreditation Terminal"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleAccredit,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Bimodal Voter Accreditation: Scan biometric details of the arriving citizen to verify and accredit them to vote."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									placeholder: "Enter Voter 11-digit NIN...",
									value: accreditNin,
									onChange: (e) => setAccreditNin(e.target.value.replace(/\D/g, "")),
									maxLength: 11,
									className: "flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-brand"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: accrediting,
									className: "rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700",
									children: accrediting ? "Accrediting..." : "Accredit"
								})]
							}),
							accreditationMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rounded-md bg-emerald-500/10 p-3 text-xs text-emerald-600 font-semibold",
								children: accreditationMsg
							}),
							accreditationErr && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rounded-md bg-destructive/10 p-3 text-xs text-destructive",
								children: accreditationErr
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 rounded-lg bg-primary-soft/40 p-4 border border-brand/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-xs text-brand-dark",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Live PU Voter Count:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-bold font-mono text-sm",
								children: [accreditedVotersCount, " Accredited"]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 border-b border-border pb-4 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-bold",
						children: "Upload Form EC8A (Result Sheet)"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleUploadEC8A,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Once voting ends, enter aggregate counts and upload a scanned image/PDF of the physically signed Form EC8A sheet."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[10px] text-muted-foreground uppercase",
								children: "Accredited Voters"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								value: accreditedVotersCount,
								onChange: (e) => setAccreditedVotersCount(parseInt(e.target.value) || 0),
								className: "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[10px] text-muted-foreground uppercase",
								children: "Total Votes Cast"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								value: totalVotesCast,
								onChange: (e) => setTotalVotesCast(parseInt(e.target.value) || 0),
								className: "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[10px] text-muted-foreground uppercase",
							children: "Scanned Form EC8A Document Link"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: formUrl,
							onChange: (e) => setFormUrl(e.target.value),
							className: "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none font-mono text-xs"
						})] }),
						uploadMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-md bg-emerald-500/10 p-3 text-xs text-emerald-600 font-semibold",
							children: uploadMsg
						}),
						uploadErr && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-md bg-destructive/10 p-3 text-xs text-destructive",
							children: uploadErr
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: uploading,
							className: "w-full rounded-lg bg-brand py-2.5 text-xs font-semibold text-white hover:bg-brand-dark",
							children: uploading ? "Signing & Syncing to IReV..." : "Sign and Submit Result Sheet"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-sm md:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-4 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-5 w-5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-bold",
							children: "Disputes & Incident Logs"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "Search disputes...",
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									className: "rounded-lg border border-input bg-background pl-8 pr-2.5 py-1.5 text-xs outline-none focus:border-brand w-40"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: statusFilter,
								onChange: (e) => setStatusFilter(e.target.value),
								className: "rounded-lg border border-input bg-card px-2.5 py-1.5 text-xs outline-none focus:border-brand",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "all",
										children: "All Status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "open",
										children: "Open Only"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "resolved",
										children: "Resolved Only"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: fetchDisputes,
								className: "rounded-md p-1.5 text-muted-foreground hover:bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "h-4 w-4" })
							})
						]
					})]
				}), filteredDisputes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground text-center py-8 border border-dashed border-border rounded-xl",
					children: "No matching disputes logged."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-border",
					children: filteredDisputes.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "py-3 flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold text-foreground",
									children: d.raised_by_name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-muted-foreground font-mono",
									children: d.timestamp.substring(11, 16)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `rounded px-1.5 py-0.5 text-[8px] font-bold uppercase ${d.is_resolved ? "bg-success/10 text-success" : "bg-amber-500/10 text-amber-500"}`,
									children: d.is_resolved ? "Resolved" : "Open"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-1",
							children: d.description
						})] }), !d.is_resolved && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => resolveDispute(d.id),
							className: "rounded bg-brand px-3 py-1.5 text-[10px] font-bold text-white hover:bg-brand-dark",
							children: "Resolve"
						})]
					}, d.id))
				})]
			})
		]
	});
}
function CollationOfficerDashboard({ elections }) {
	const [sheets, setSheets] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	(0, import_react.useEffect)(() => {
		fetchSheets();
	}, []);
	const filteredSheets = sheets.filter((s) => {
		const matchesSearch = s.polling_unit_name.toLowerCase().includes(searchQuery.toLowerCase()) || s.polling_unit.toLowerCase().includes(searchQuery.toLowerCase()) || s.presiding_officer_name.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesFilter = statusFilter === "all" || statusFilter === "overvoting" && s.flagged_for_overvoting || statusFilter === "verified" && !s.flagged_for_overvoting;
		return matchesSearch && matchesFilter;
	});
	const fetchSheets = async () => {
		try {
			setLoading(true);
			const data = await apiRequest("/results-sheets/");
			setSheets(data);
		} catch (e) {} finally {
			setLoading(false);
		}
	};
	const handleVerify = async (id, action) => {
		try {
			await apiRequest(`/results-sheets/${id}/verify/`, "POST", { action });
			fetchSheets();
		} catch (e) {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-2xl border border-border bg-card p-6 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-4 mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "h-5 w-5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-bold",
					children: "Ward & LGA Collation Center"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Search polling units...",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							className: "rounded-lg border border-input bg-background pl-8 pr-2.5 py-1.5 text-xs outline-none focus:border-brand w-48"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: statusFilter,
						onChange: (e) => setStatusFilter(e.target.value),
						className: "rounded-lg border border-input bg-card px-2.5 py-1.5 text-xs outline-none focus:border-brand",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "All Results"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "verified",
								children: "Verified Only"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "overvoting",
								children: "Overvoting Flagged"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: fetchSheets,
						className: "rounded-md p-1.5 text-muted-foreground hover:bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "h-4 w-4" })
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-left text-xs border-collapse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border text-muted-foreground uppercase text-[10px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-3 px-4",
							children: "Polling Unit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-3 px-4",
							children: "Presiding Officer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-3 px-4",
							children: "Accredited"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-3 px-4",
							children: "Votes Cast"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-3 px-4 text-center",
							children: "Status"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-3 px-4 text-right",
							children: "Actions"
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
					className: "divide-y divide-border",
					children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						colSpan: 6,
						className: "py-8 text-center text-muted-foreground animate-pulse",
						children: "Loading collations..."
					}) }) : filteredSheets.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						colSpan: 6,
						className: "py-8 text-center text-muted-foreground",
						children: "No matching result sheets found."
					}) }) : filteredSheets.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "hover:bg-muted/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "py-3 px-4 font-semibold text-foreground",
								children: [
									s.polling_unit_name,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-muted-foreground font-mono",
										children: s.polling_unit
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 px-4",
								children: s.presiding_officer_name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 px-4 font-mono font-semibold",
								children: s.accredited_voters
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 px-4 font-mono font-semibold",
								children: s.total_votes_cast
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 px-4 text-center",
								children: s.flagged_for_overvoting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 rounded bg-destructive/10 px-2 py-0.5 text-[8px] font-bold text-destructive",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-3 w-3" }), " OVERVOTING"]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 rounded bg-success/10 px-2 py-0.5 text-[8px] font-bold text-success",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }), " VERIFIED"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "py-3 px-4 text-right space-x-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: s.scanned_form_url,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-block rounded border border-input px-2 py-1 text-[10px] font-bold text-muted-foreground hover:bg-muted",
									children: "View Form"
								}), s.flagged_for_overvoting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => handleVerify(s.id, "verify"),
									className: "rounded bg-brand px-2.5 py-1 text-[10px] font-bold text-white hover:bg-brand-dark",
									children: "Clear Flag"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => handleVerify(s.id, "flag"),
									className: "rounded bg-destructive px-2.5 py-1 text-[10px] font-bold text-white hover:bg-destructive-dark",
									children: "Flag"
								})]
							})
						]
					}, s.id))
				})]
			})
		})]
	});
}
function ReturningOfficerDashboard({ elections }) {
	const [signing, setSigning] = (0, import_react.useState)({});
	const [statusMsg, setStatusMsg] = (0, import_react.useState)(null);
	const [statusType, setStatusType] = (0, import_react.useState)("success");
	const [approvalData, setApprovalData] = (0, import_react.useState)({});
	const [signedIds, setSignedIds] = (0, import_react.useState)([]);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const filteredElections = elections.filter((el) => {
		const matchesSearch = el.title.toLowerCase().includes(searchQuery.toLowerCase()) || el.id.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesFilter = statusFilter === "all" || el.status === statusFilter;
		return matchesSearch && matchesFilter;
	});
	const handleApproveClosure = async (id) => {
		if (!window.confirm("⚠️ By signing this election closure, you are legally attesting that all results from your constituency are accurate and final.\n\nThis action is cryptographically logged and immutable.\n\nProceed?")) return;
		setSigning((prev) => ({
			...prev,
			[id]: true
		}));
		setStatusMsg(null);
		try {
			const res = await apiRequest(`/elections/${id}/approve-closure/`, "POST", { notes: "Signed via RO Dashboard" });
			setApprovalData((prev) => ({
				...prev,
				[id]: {
					approvals: res.approvals,
					required: res.required,
					signature: res.your_signature
				}
			}));
			setSignedIds((prev) => [...prev, id]);
			if (res.status === "closed") {
				setStatusType("success");
				setStatusMsg(`✅ ${res.message}`);
				setTimeout(() => window.location.reload(), 2500);
			} else {
				setStatusType("pending");
				setStatusMsg(`⏳ ${res.message}`);
			}
		} catch (e) {
			setStatusType("error");
			setStatusMsg(e.message || "Failed to submit closure approval.");
		} finally {
			setSigning((prev) => ({
				...prev,
				[id]: false
			}));
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-2xl border border-border bg-card p-6 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-4 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-5 w-5 text-yellow-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-bold",
						children: "Constituency Return & Multi-Sig Election Declaration"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Search elections...",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							className: "rounded-lg border border-input bg-background pl-8 pr-2.5 py-1.5 text-xs outline-none focus:border-brand w-48"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: statusFilter,
						onChange: (e) => setStatusFilter(e.target.value),
						className: "rounded-lg border border-input bg-card px-2.5 py-1.5 text-xs outline-none focus:border-brand",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "All Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "active",
								children: "Active"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "collation",
								children: "Collation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "closed",
								children: "Closed"
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6 rounded-xl bg-yellow-500/8 border border-yellow-500/20 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-amber-700 dark:text-amber-300 leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "⚖️ Multi-Signature Protocol:" }),
						" Per INEC electoral guidelines, closing an election requires ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "N signatures from multiple Returning Officers" }),
						". Your individual approval is cryptographically signed and recorded. The election transitions to CLOSED only once the required signature threshold is reached. This prevents any single officer from unilaterally publishing results."
					]
				})
			}),
			statusMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mb-4 rounded-md p-3 text-xs font-semibold ${statusType === "success" ? "bg-emerald-500/10 text-emerald-600" : statusType === "pending" ? "bg-amber-500/10 text-amber-600" : "bg-destructive/10 text-destructive"}`,
				children: statusMsg
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: filteredElections.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground text-center py-8 border border-dashed border-border rounded-xl",
					children: "No matching elections found."
				}) : filteredElections.map((el) => {
					const isClosed = el.status === "closed";
					const isActive = el.status === "active";
					const hasAlreadySigned = signedIds.includes(el.id);
					const ad = approvalData[el.id];
					const approvalCount = ad?.approvals ?? el.approval_count ?? 0;
					const required = ad?.required ?? 2;
					const progress = Math.min(100, approvalCount / required * 100);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border border-border rounded-xl p-4 bg-surface hover:border-brand/40 transition",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `inline-block rounded px-2 py-0.5 text-[8px] font-bold uppercase mb-2 ${isClosed ? "bg-muted text-muted-foreground" : isActive ? "bg-emerald-600/10 text-emerald-600" : "bg-amber-500/10 text-amber-500"}`,
										children: el.status.replace("_", " ")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-base font-bold",
										children: el.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground font-mono mt-0.5",
										children: [
											"ID: ",
											el.id,
											" · Scheduled: ",
											el.date
										]
									}),
									!isClosed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between text-[10px] text-muted-foreground mb-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Closure Signatures" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono font-bold",
												children: [
													approvalCount,
													" / ",
													required,
													" required"
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-1.5 w-full rounded-full bg-muted",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-1.5 rounded-full bg-yellow-400 transition-all duration-500",
												style: { width: `${progress}%` }
											})
										})]
									}),
									ad?.signature && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 font-mono text-[9px] text-muted-foreground bg-muted/50 rounded px-2 py-1 inline-block",
										children: ["Your sig: ", ad.signature]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2 flex-shrink-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/results",
										className: "inline-flex items-center gap-1 rounded-lg border border-input bg-background px-3 py-2 text-xs font-semibold text-muted-foreground hover:bg-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-4 w-4" }), " Final Tally"]
									}),
									isActive && !hasAlreadySigned && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => handleApproveClosure(el.id),
										disabled: signing[el.id],
										className: "inline-flex items-center gap-1 rounded-lg bg-yellow-500 px-4 py-2 text-xs font-semibold text-black hover:bg-yellow-600 disabled:opacity-50",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4" }), signing[el.id] ? "Signing…" : "Sign Closure Approval"]
									}),
									hasAlreadySigned && !isClosed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-600",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }), " Signed"]
									})
								]
							})]
						})
					}, el.id);
				})
			})
		]
	});
}
function PollingAgentDashboard() {
	const [description, setDescription] = (0, import_react.useState)("");
	const [msg, setMsg] = (0, import_react.useState)(null);
	const [err, setErr] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const PU_Registered = 1250;
	const [PU_Voted, setPU_Voted] = (0, import_react.useState)(384);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => {
			setPU_Voted((v) => Math.min(PU_Registered, v + Math.floor(Math.random() * 3)));
		}, 4e3);
		return () => clearInterval(id);
	}, []);
	const handleDispute = async (e) => {
		e.preventDefault();
		if (!description.trim()) return;
		setMsg(null);
		setErr(null);
		setLoading(true);
		try {
			await apiRequest("/disputes/", "POST", {
				polling_unit: "PU-24-05-11",
				description
			});
			setMsg("Incident report logged successfully. INEC Collation officers notified.");
			setDescription("");
		} catch (e) {
			setErr(e.message || "Failed to log dispute.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-2xl border border-border bg-card p-6 shadow-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 border-b border-border pb-4 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-5 w-5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-bold",
						children: "PU Accreditation Telemetry"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mb-4",
					children: "Live feed of BVAS accreditation count at your assigned Polling Unit: **Ikeja PU 1 (Alausa Primary School)**."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-32 w-32 grid place-items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							viewBox: "0 0 100 100",
							className: "absolute inset-0 h-full w-full -rotate-90",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "50",
								cy: "50",
								r: "40",
								fill: "none",
								stroke: "var(--muted)",
								strokeWidth: "8"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "50",
								cy: "50",
								r: "40",
								fill: "none",
								stroke: "var(--brand)",
								strokeWidth: "8",
								strokeDasharray: "251",
								strokeDashoffset: 251 - PU_Voted / PU_Registered * 251
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center z-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl font-bold font-mono text-foreground",
								children: PU_Voted
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] block text-muted-foreground uppercase",
								children: "Accredited"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground mt-4 font-semibold font-mono",
						children: [
							"PU Turnout: ",
							(PU_Voted / PU_Registered * 100).toFixed(1),
							"% (",
							PU_Registered,
							" registered)"
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-2xl border border-border bg-card p-6 shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 border-b border-border pb-4 mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-5 w-5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-bold",
					children: "Raise Dispute / Log Incident"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleDispute,
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Has there been a technical BVAS failure, violence, or biometric bypass at this polling unit? File an official dispute report."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						placeholder: "Describe the incident in detail...",
						value: description,
						onChange: (e) => setDescription(e.target.value),
						className: "w-full h-24 rounded-lg border border-input bg-background p-3 text-xs outline-none focus:border-brand"
					}) }),
					msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-md bg-emerald-500/10 p-3 text-xs text-emerald-600 font-semibold",
						children: msg
					}),
					err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-md bg-destructive/10 p-3 text-xs text-destructive",
						children: err
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: loading,
						className: "w-full rounded-lg bg-yellow-500 py-2.5 text-xs font-semibold text-black hover:bg-yellow-600",
						children: loading ? "Filing report..." : "Submit Incident Report"
					})
				]
			})]
		})]
	});
}
function ObserverDashboard() {
	const [desc, setDesc] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("materials_late");
	const [msg, setMsg] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const handleObserverLog = async (e) => {
		e.preventDefault();
		setMsg(null);
		setLoading(true);
		try {
			await apiRequest("/disputes/", "POST", {
				polling_unit: "PU-24-05-11",
				description: `[Observer Alert - ${category.replace("_", " ").toUpperCase()}]: ${desc}`
			});
			setMsg("Observer report successfully logged in INEC Central Monitoring Dashboard.");
			setDesc("");
		} catch (err) {
			alert("Failed to submit observer log");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-2xl border border-border bg-card p-6 shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 border-b border-border pb-4 mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-5 w-5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-bold",
					children: "Independent Observer Incident Portal"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleObserverLog,
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Report non-partisan oversight logs. Observers contribute field data for credibility audits."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[10px] text-muted-foreground uppercase",
						children: "Incident Category"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: category,
						onChange: (e) => setCategory(e.target.value),
						className: "w-full rounded-lg border border-input bg-card px-3 py-2 text-xs font-medium outline-none mt-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "materials_late",
								children: "Late arrival of materials"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "bvas_malfunction",
								children: "BVAS hardware malfunction"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "voter_intimidation",
								children: "Voter coercion / intimidation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "pu_not_opened",
								children: "Polling unit did not open"
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[10px] text-muted-foreground uppercase",
						children: "Incident Description"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						placeholder: "Enter details...",
						value: desc,
						onChange: (e) => setDesc(e.target.value),
						className: "w-full h-24 rounded-lg border border-input bg-background p-3 text-xs outline-none focus:border-brand mt-1"
					})] }),
					msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-md bg-emerald-500/10 p-3 text-xs text-emerald-600 font-semibold",
						children: msg
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: loading,
						className: "w-full rounded-lg bg-brand py-2 text-xs font-semibold text-white hover:bg-brand-dark",
						children: loading ? "Submitting report..." : "Submit Observer Log"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-2xl border border-border bg-card p-6 shadow-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 border-b border-border pb-4 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-bold",
						children: "Parallel Vote Tabulation (PVT)"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mb-4",
					children: "Observers use Parallel Vote Tabulation (PVT) to independently verify the calculations of collation tables."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-primary-soft/30 p-4 border border-border space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: "Domestic CSO Deployment:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Accredited" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: "Observer Access Level:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Universal Read-only" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: "PVT Integrity Index:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-emerald-600",
								children: "99.8% Match Rate"
							})]
						})
					]
				})
			]
		})]
	});
}
function MediaDashboard({ elections }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-sm md:col-span-2 text-center py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-10 w-10 text-brand mx-auto mb-2" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-bold",
						children: "Accredited Broadcaster & Journalist Terminal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mt-1 max-w-lg mx-auto",
						children: "You are granted high-throughput API endpoints to access collation streams directly, bypassing generic public rate-limiting."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 border-b border-border pb-4 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-5 w-5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-bold",
						children: "Live Constituency Feed"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: elections.slice(0, 2).map((el) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-foreground",
							children: el.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/results",
							className: "text-brand hover:underline font-bold",
							children: "View Graphics Board →"
						})]
					}, el.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 border-b border-border pb-4 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-bold",
							children: "Verified Result Forms (EC8A)"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mb-4",
						children: "All result sheets uploaded from the PUs are open for public and press verification on the IReV portal."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/results",
						className: "w-full block text-center rounded-lg bg-brand py-2 text-xs font-semibold text-white hover:bg-brand-dark",
						children: "Go to IReV Collation View"
					})
				]
			})
		]
	});
}
function AuditorDashboard() {
	const [logs, setLogs] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [expandedLog, setExpandedLog] = (0, import_react.useState)(null);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	(0, import_react.useEffect)(() => {
		fetchLogs();
	}, []);
	const filteredLogs = logs.filter((log) => {
		const matchesSearch = log.username.toLowerCase().includes(searchQuery.toLowerCase()) || log.model_name.toLowerCase().includes(searchQuery.toLowerCase()) || log.object_id.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesFilter = statusFilter === "all" || log.action === statusFilter;
		return matchesSearch && matchesFilter;
	});
	(0, import_react.useEffect)(() => {
		fetchLogs();
	}, []);
	const fetchLogs = async (page = 1) => {
		try {
			setLoading(true);
			const data = await apiRequest(`/audit-logs/?page=${page}`);
			setLogs(data);
			setLogsPage(page);
		} catch (e) {
			console.error(e);
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-2xl border border-border bg-card p-6 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-4 mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-5 w-5 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-bold",
					children: "Cybersecurity & CRUD Operations Audit Stream"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Search logs...",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							className: "rounded-lg border border-input bg-background pl-8 pr-2.5 py-1.5 text-xs outline-none focus:border-brand w-48"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: statusFilter,
						onChange: (e) => setStatusFilter(e.target.value),
						className: "rounded-lg border border-input bg-card px-2.5 py-1.5 text-xs outline-none focus:border-brand",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "All Actions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "CREATE",
								children: "CREATE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "UPDATE",
								children: "UPDATE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "DELETE",
								children: "DELETE"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: fetchLogs,
						className: "rounded-md p-1.5 text-muted-foreground hover:bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "h-4 w-4" })
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-xs text-muted-foreground animate-pulse py-8",
				children: "Polling security ledger..."
			}) : filteredLogs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-xs text-muted-foreground py-8",
				children: "No matching CRUD audit entries found."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border font-mono text-xs",
				children: filteredLogs.map((log) => {
					const isExpanded = expandedLog === log.id;
					const isDelete = log.action === "DELETE";
					const isCreate = log.action === "CREATE";
					log.action;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 flex-wrap",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `rounded px-1.5 py-0.5 text-[9px] font-bold ${isDelete ? "bg-red-500/10 text-red-500" : isCreate ? "bg-emerald-500/10 text-emerald-500" : "bg-blue-500/10 text-blue-500"}`,
										children: log.action
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-foreground",
										children: log.model_name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: ["ID: ", log.object_id]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "by"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-brand font-bold",
										children: [
											log.username,
											" (",
											log.role,
											")"
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-[10px] text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["IP: ", log.ip_address || "127.0.0.1"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: log.timestamp.substring(11, 19) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setExpandedLog(isExpanded ? null : log.id),
										className: "rounded border border-input px-2 py-0.5 text-[9px] font-semibold text-muted-foreground hover:bg-muted",
										children: isExpanded ? "Collapse" : "JSON Diff"
									})
								]
							})]
						}), isExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 rounded-lg border border-border bg-muted/50 p-3 text-[10px] text-muted-foreground overflow-x-auto max-h-48",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold text-foreground mb-1 uppercase tracking-wider text-[8px]",
								children: "Instance State Payload:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
								className: "whitespace-pre-wrap",
								children: JSON.stringify(JSON.parse(log.details || "{}"), null, 2)
							})]
						})]
					}, log.id);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationControls, {
				currentPage: logsPage,
				totalPages: Math.ceil((logs.count || 0) / 50),
				count: logs.count || logs.length,
				onPageChange: fetchLogs
			})]
		})]
	});
}
function ProfileItem({ icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-0.5 rounded bg-white/10 p-1.5",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] uppercase text-white/50",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold text-white truncate",
				children: value
			})]
		})]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card px-4 py-3 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-display text-2xl font-bold text-foreground",
			children: value
		})]
	});
}
//#endregion
export { DashboardPage as component };
