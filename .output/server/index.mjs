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
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"341-HK6iWT9UZnU2CT/2UdcKpVbVr3E\"",
		"mtime": "2026-07-08T01:10:43.837Z",
		"size": 833,
		"path": "../public/favicon.svg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"19-yHADZo6lKl+mSNPU9098EiqzPCE\"",
		"mtime": "2026-07-01T20:32:07.939Z",
		"size": 25,
		"path": "../public/robots.txt"
	},
	"/assets/accreditation-mVatFLBg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"51e8-Dy3zqVBf8YN+YDNcZhWF4O30gn4\"",
		"mtime": "2026-07-10T01:24:46.979Z",
		"size": 20968,
		"path": "../public/assets/accreditation-mVatFLBg.js"
	},
	"/assets/api-t8IPPyb8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"308-Xi14mF7fzWEBZrqy2CaiVtKZTgk\"",
		"mtime": "2026-07-10T01:24:46.979Z",
		"size": 776,
		"path": "../public/assets/api-t8IPPyb8.js"
	},
	"/assets/AppHeader-DiSfaWMO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1396-lUOhs+9qYMfXs1mfinXArFLlDr0\"",
		"mtime": "2026-07-10T01:24:46.968Z",
		"size": 5014,
		"path": "../public/assets/AppHeader-DiSfaWMO.js"
	},
	"/assets/auth-hero-BpALstqu.jpg": {
		"type": "image/jpeg",
		"etag": "\"2db3d-T/Vdm1un2Fdi/ai4GjuPIf9rcsE\"",
		"mtime": "2026-07-10T01:24:46.990Z",
		"size": 187197,
		"path": "../public/assets/auth-hero-BpALstqu.jpg"
	},
	"/assets/AuthLayout-s0eW-8Gu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"740-XDWogf7f6FKxoPCHntDZ1FP31iM\"",
		"mtime": "2026-07-10T01:24:46.979Z",
		"size": 1856,
		"path": "../public/assets/AuthLayout-s0eW-8Gu.js"
	},
	"/assets/check-CF6v4jZh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"75-MggKHdSzZNzSNcrzykVfvBCrITg\"",
		"mtime": "2026-07-10T01:24:46.979Z",
		"size": 117,
		"path": "../public/assets/check-CF6v4jZh.js"
	},
	"/assets/dashboard-BOmNQBBt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20519-voIjGaBlMyG9mOPSSxF50yBnD/4\"",
		"mtime": "2026-07-10T01:24:46.979Z",
		"size": 132377,
		"path": "../public/assets/dashboard-BOmNQBBt.js"
	},
	"/assets/database-DXoyHEh_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a1-Gxu+Ii4ih/XuzXP4tBQy2YQMpK8\"",
		"mtime": "2026-07-10T01:24:46.979Z",
		"size": 417,
		"path": "../public/assets/database-DXoyHEh_.js"
	},
	"/assets/forgot-CRy3_yiN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d2c-/PMsHypOcNfnwYT+KRhDYDyhtwI\"",
		"mtime": "2026-07-10T01:24:46.979Z",
		"size": 3372,
		"path": "../public/assets/forgot-CRy3_yiN.js"
	},
	"/assets/language-Dl_KbSkD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"671-uc89dLXVhsoBLav12k0L6DG3UyU\"",
		"mtime": "2026-07-10T01:24:46.979Z",
		"size": 1649,
		"path": "../public/assets/language-Dl_KbSkD.js"
	},
	"/assets/index-PFuVpL7W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54cf4-jqTiX5UnpwlpJC2Cyi0Y1wgPb6U\"",
		"mtime": "2026-07-10T01:24:46.968Z",
		"size": 347380,
		"path": "../public/assets/index-PFuVpL7W.js"
	},
	"/assets/login-ciSknm1s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"afd-8KxmMs1vbm8CyENrr/3ICUuQ7Eg\"",
		"mtime": "2026-07-10T01:24:46.979Z",
		"size": 2813,
		"path": "../public/assets/login-ciSknm1s.js"
	},
	"/assets/map-pin-C5885Pzu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19c-ZZKghWI+x2+AKI9mcuIQPWTRUqM\"",
		"mtime": "2026-07-10T01:24:46.979Z",
		"size": 412,
		"path": "../public/assets/map-pin-C5885Pzu.js"
	},
	"/assets/onboard-C3SgSwvk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"31ee-hIyX1syUtvrKLBIMErTw/ixzD6o\"",
		"mtime": "2026-07-10T01:24:46.979Z",
		"size": 12782,
		"path": "../public/assets/onboard-C3SgSwvk.js"
	},
	"/assets/results-DugKpYHA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"277b-TOCfC3/O7SWRf+alHC3FeRDog+0\"",
		"mtime": "2026-07-10T01:24:46.979Z",
		"size": 10107,
		"path": "../public/assets/results-DugKpYHA.js"
	},
	"/assets/routes-Cv7iCp1W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1419-ccdawQ+oqxBqtmpBn8NDSU1bXQc\"",
		"mtime": "2026-07-10T01:24:46.988Z",
		"size": 5145,
		"path": "../public/assets/routes-Cv7iCp1W.js"
	},
	"/assets/search-1W6PpzlF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"124-Fum6hxtQcZBp7uHLZUuyQ22bgGQ\"",
		"mtime": "2026-07-10T01:24:46.988Z",
		"size": 292,
		"path": "../public/assets/search-1W6PpzlF.js"
	},
	"/assets/shield-check-Dl826SSG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"139-Nx27WqQyEPsdmccWX/FiMPBlH5E\"",
		"mtime": "2026-07-10T01:24:46.988Z",
		"size": 313,
		"path": "../public/assets/shield-check-Dl826SSG.js"
	},
	"/assets/signup-DjSUHbc-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11e4-wEw4fgVUDfUAAzTFCdtQFXsSHmA\"",
		"mtime": "2026-07-10T01:24:46.990Z",
		"size": 4580,
		"path": "../public/assets/signup-DjSUHbc-.js"
	},
	"/assets/styles-DyK8XBY0.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"19520-zS3oSFo5zU9Cf+i88wLxU38XMNE\"",
		"mtime": "2026-07-10T01:24:46.990Z",
		"size": 103712,
		"path": "../public/assets/styles-DyK8XBY0.css"
	},
	"/assets/users-6qdDiLrm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12b-D47ryJfbxOUkPO4IV72cy8yospI\"",
		"mtime": "2026-07-10T01:24:46.990Z",
		"size": 299,
		"path": "../public/assets/users-6qdDiLrm.js"
	},
	"/assets/verify-C8H2Toxt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2235-7VLS9I4oatb8LdXogOHrA8nSroQ\"",
		"mtime": "2026-07-10T01:24:46.990Z",
		"size": 8757,
		"path": "../public/assets/verify-C8H2Toxt.js"
	},
	"/assets/vote._id-WXdUeuvG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26ba-aJpCFIp9fo/5t5zqM1to4ht8MuI\"",
		"mtime": "2026-07-10T01:24:46.990Z",
		"size": 9914,
		"path": "../public/assets/vote._id-WXdUeuvG.js"
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
