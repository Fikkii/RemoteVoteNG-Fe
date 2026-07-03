//#region node_modules/.nitro/vite/services/ssr/assets/mock-store-ibCr2NBF.js
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
//#endregion
export { getSession as n, setSession as r, formatNumber as t };
