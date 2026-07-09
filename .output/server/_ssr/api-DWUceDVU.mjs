//#region node_modules/.nitro/vite/services/ssr/assets/api-DWUceDVU.js
var API_BASE_URL = "http://127.0.0.1:8000/api";
function getAuthToken() {
	if (typeof window === "undefined") return null;
	return window.localStorage.getItem("rvng.token");
}
function setAuthToken(token) {
	if (typeof window === "undefined") return;
	if (token) window.localStorage.setItem("rvng.token", token);
	else window.localStorage.removeItem("rvng.token");
}
async function apiRequest(endpoint, method = "GET", body) {
	const url = `${API_BASE_URL}${endpoint}`;
	const headers = { "Content-Type": "application/json" };
	const token = getAuthToken();
	if (token) headers["Authorization"] = `Token ${token}`;
	const options = {
		method,
		headers
	};
	if (body) options.body = JSON.stringify(body);
	const response = await fetch(url, options);
	if (response.status === 401) setAuthToken(null);
	const data = await response.json();
	if (!response.ok) {
		const errorMessage = data.error || data.detail || Object.values(data).flat().join(", ") || "An error occurred";
		throw new Error(errorMessage);
	}
	return data;
}
//#endregion
export { setAuthToken as n, apiRequest as t };
