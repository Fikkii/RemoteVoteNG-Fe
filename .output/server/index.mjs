globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-01T20:32:07.938Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"19-yHADZo6lKl+mSNPU9098EiqzPCE\"",
		"mtime": "2026-07-01T20:32:07.939Z",
		"size": 25,
		"path": "../public/robots.txt"
	},
	"/assets/accreditation-jcgg-NDG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a91-F2xHyCM8nBlhadsQW4qZnJYfbLs\"",
		"mtime": "2026-07-03T00:13:15.099Z",
		"size": 19089,
		"path": "../public/assets/accreditation-jcgg-NDG.js"
	},
	"/assets/api-CsN8sKBL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26b-/MzfXELbzpxIpv2i8jUMvUzcbeQ\"",
		"mtime": "2026-07-03T00:13:15.100Z",
		"size": 619,
		"path": "../public/assets/api-CsN8sKBL.js"
	},
	"/assets/AppHeader-a0WHeQlp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"af2-gqgkpKyKONiViJZJFeCgBOcc0ZE\"",
		"mtime": "2026-07-03T00:13:15.050Z",
		"size": 2802,
		"path": "../public/assets/AppHeader-a0WHeQlp.js"
	},
	"/assets/auth-hero-BpALstqu.jpg": {
		"type": "image/jpeg",
		"etag": "\"2db3d-T/Vdm1un2Fdi/ai4GjuPIf9rcsE\"",
		"mtime": "2026-07-03T00:13:15.117Z",
		"size": 187197,
		"path": "../public/assets/auth-hero-BpALstqu.jpg"
	},
	"/assets/AuthLayout-CMBX2sf0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b18-TNzEr1IL17nm8Mof/HtgWJnwqjA\"",
		"mtime": "2026-07-03T00:13:15.098Z",
		"size": 2840,
		"path": "../public/assets/AuthLayout-CMBX2sf0.js"
	},
	"/assets/check-CmH_fECm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c-tir34mPrEZ/84UCsU2LKgqVwVpc\"",
		"mtime": "2026-07-03T00:13:15.101Z",
		"size": 124,
		"path": "../public/assets/check-CmH_fECm.js"
	},
	"/assets/createLucideIcon-DXD3xX8X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a5-61lVdzOnGaPjbfXrZUBJ7zZAUZI\"",
		"mtime": "2026-07-03T00:13:15.101Z",
		"size": 1189,
		"path": "../public/assets/createLucideIcon-DXD3xX8X.js"
	},
	"/assets/dashboard-lHtZARN8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fae7-irC8/t5fHMCRBNAw3TZWx09mWcM\"",
		"mtime": "2026-07-03T00:13:15.102Z",
		"size": 129767,
		"path": "../public/assets/dashboard-lHtZARN8.js"
	},
	"/assets/forgot-cq5bxOkc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d27-2nP4/bWPoW4/EppAKyKZis852Fc\"",
		"mtime": "2026-07-03T00:13:15.103Z",
		"size": 3367,
		"path": "../public/assets/forgot-cq5bxOkc.js"
	},
	"/assets/language-CpGqWUaM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"672-RP6gWAdjz80YgZD6UoACi08vFWo\"",
		"mtime": "2026-07-03T00:13:15.104Z",
		"size": 1650,
		"path": "../public/assets/language-CpGqWUaM.js"
	},
	"/assets/map-pin-B3oAFTY7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a3-QZ+6770LdTgvE516MTwhMxov4vY\"",
		"mtime": "2026-07-03T00:13:15.104Z",
		"size": 419,
		"path": "../public/assets/map-pin-B3oAFTY7.js"
	},
	"/assets/index-mLgPX7Ua.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54afe-cMH0QIQUve7QFrIVYg1LrELZ2W8\"",
		"mtime": "2026-07-03T00:13:15.050Z",
		"size": 346878,
		"path": "../public/assets/index-mLgPX7Ua.js"
	},
	"/assets/mock-store-CYXUJbzL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"162-3Bw8xjOBsga9hmqpOGZ5+8aS5iY\"",
		"mtime": "2026-07-03T00:13:15.105Z",
		"size": 354,
		"path": "../public/assets/mock-store-CYXUJbzL.js"
	},
	"/assets/onboard-DvxEMZEq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"31ee-ENGzcY+nc+gUbNA9jjT2nNRm1UM\"",
		"mtime": "2026-07-03T00:13:15.106Z",
		"size": 12782,
		"path": "../public/assets/onboard-DvxEMZEq.js"
	},
	"/assets/results-DhkUEtjd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fe6-BVLsbIgoAnDfl8aoBuV8ZkNMWFA\"",
		"mtime": "2026-07-03T00:13:15.108Z",
		"size": 8166,
		"path": "../public/assets/results-DhkUEtjd.js"
	},
	"/assets/routes-D9t5LBvP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e1a-99yh5/YwYzGKS97+NK7WXXdTFYQ\"",
		"mtime": "2026-07-03T00:13:15.109Z",
		"size": 3610,
		"path": "../public/assets/routes-D9t5LBvP.js"
	},
	"/assets/search-Djuyno4P.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12b-CMIdbrRdWJ180ZcO95Fjz0hU/r0\"",
		"mtime": "2026-07-03T00:13:15.109Z",
		"size": 299,
		"path": "../public/assets/search-Djuyno4P.js"
	},
	"/assets/shield-check-Csao_TV2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-8LtpGCxv27vBAKuDQn2OrtcTseE\"",
		"mtime": "2026-07-03T00:13:15.110Z",
		"size": 320,
		"path": "../public/assets/shield-check-Csao_TV2.js"
	},
	"/assets/signup-CvLS-qV5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8f8-id1pO4xZdOSFLZY6wkf4AAWrkZA\"",
		"mtime": "2026-07-03T00:13:15.112Z",
		"size": 2296,
		"path": "../public/assets/signup-CvLS-qV5.js"
	},
	"/assets/styles-8QIiyJ_U.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"17de6-kvf7KPscjDugEH2Vi27C+QPeLOI\"",
		"mtime": "2026-07-03T00:13:15.118Z",
		"size": 97766,
		"path": "../public/assets/styles-8QIiyJ_U.css"
	},
	"/assets/user-CfTu7kbK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c4-kiIfcnaMs04S6YEFnEKqcBlFbB4\"",
		"mtime": "2026-07-03T00:13:15.113Z",
		"size": 196,
		"path": "../public/assets/user-CfTu7kbK.js"
	},
	"/assets/users-CoUVl_1R.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"132-sqYxKL/Pi1slgkSOr7y4xXBWklI\"",
		"mtime": "2026-07-03T00:13:15.114Z",
		"size": 306,
		"path": "../public/assets/users-CoUVl_1R.js"
	},
	"/assets/verify-Drrrb37X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2304-LlQ83r15lg2pnmVUI8XoaXwUoSc\"",
		"mtime": "2026-07-03T00:13:15.115Z",
		"size": 8964,
		"path": "../public/assets/verify-Drrrb37X.js"
	},
	"/assets/vote._id-Bfz_9jSV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"279d-BnRWODXXdmtNfp4SeKtE7xLSxt8\"",
		"mtime": "2026-07-03T00:13:15.115Z",
		"size": 10141,
		"path": "../public/assets/vote._id-Bfz_9jSV.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_Z_S_XV = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_Z_S_XV
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
