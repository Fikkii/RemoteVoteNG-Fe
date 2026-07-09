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
	"/assets/accreditation-B1kCyaYa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a91-vtmiyrhbsDKbSm+lJ1jGdKKnNCE\"",
		"mtime": "2026-07-09T19:37:16.122Z",
		"size": 19089,
		"path": "../public/assets/accreditation-B1kCyaYa.js"
	},
	"/assets/api-DPOT9_VF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26b-wh3iEcQDeNYnmrngFiCMZj0ppbQ\"",
		"mtime": "2026-07-09T19:37:16.122Z",
		"size": 619,
		"path": "../public/assets/api-DPOT9_VF.js"
	},
	"/assets/AppHeader-cjOgFs9R.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f30-wlbJv3bBCdLPpjy8NhKRx4qtVQU\"",
		"mtime": "2026-07-09T19:37:16.122Z",
		"size": 3888,
		"path": "../public/assets/AppHeader-cjOgFs9R.js"
	},
	"/assets/AuthLayout-CHCi25YP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"740-5KAxbj8ex6jk2K9sQ01izWmxnNc\"",
		"mtime": "2026-07-09T19:37:16.122Z",
		"size": 1856,
		"path": "../public/assets/AuthLayout-CHCi25YP.js"
	},
	"/assets/auth-hero-BpALstqu.jpg": {
		"type": "image/jpeg",
		"etag": "\"2db3d-T/Vdm1un2Fdi/ai4GjuPIf9rcsE\"",
		"mtime": "2026-07-09T19:37:16.138Z",
		"size": 187197,
		"path": "../public/assets/auth-hero-BpALstqu.jpg"
	},
	"/assets/check-CZDPrWhs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c-C567PRCTIRgpzaCjk7R18AKr5Po\"",
		"mtime": "2026-07-09T19:37:16.122Z",
		"size": 124,
		"path": "../public/assets/check-CZDPrWhs.js"
	},
	"/assets/createLucideIcon-C21n4tXD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a5-gY2hbeFX/V61sJWgvbE6e7Vmpl4\"",
		"mtime": "2026-07-09T19:37:16.122Z",
		"size": 1189,
		"path": "../public/assets/createLucideIcon-C21n4tXD.js"
	},
	"/assets/dashboard-vdUQ6A4p.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fae6-97w8kdekAeC2/E++tKGqGAVCsGc\"",
		"mtime": "2026-07-09T19:37:16.122Z",
		"size": 129766,
		"path": "../public/assets/dashboard-vdUQ6A4p.js"
	},
	"/assets/database-qmf6hrtc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a8-l2iy8FOhXLGq/8FAlAtHfMeCs34\"",
		"mtime": "2026-07-09T19:37:16.122Z",
		"size": 424,
		"path": "../public/assets/database-qmf6hrtc.js"
	},
	"/assets/forgot-ux3Ve-RB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d2c-XXOYP3YpXlmPDqcH+mE65yW/R6o\"",
		"mtime": "2026-07-09T19:37:16.122Z",
		"size": 3372,
		"path": "../public/assets/forgot-ux3Ve-RB.js"
	},
	"/assets/language-BpHipxJL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"671-EXsjo8OPEtCjrYtwNa/MBLC+KGk\"",
		"mtime": "2026-07-09T19:37:16.122Z",
		"size": 1649,
		"path": "../public/assets/language-BpHipxJL.js"
	},
	"/assets/login-jvOiSbJY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"afd-ULqmiha1b1pknlks7fsD3JtvZjE\"",
		"mtime": "2026-07-09T19:37:16.122Z",
		"size": 2813,
		"path": "../public/assets/login-jvOiSbJY.js"
	},
	"/assets/index-DYhThW01.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54bb7-bDHmGmMM+cF/sF9QRVEKL+mlZY4\"",
		"mtime": "2026-07-09T19:37:16.122Z",
		"size": 347063,
		"path": "../public/assets/index-DYhThW01.js"
	},
	"/assets/map-pin-CP-mM8El.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a3-21Mx2+NbT4hsZ6b15LP7MPhFStE\"",
		"mtime": "2026-07-09T19:37:16.122Z",
		"size": 419,
		"path": "../public/assets/map-pin-CP-mM8El.js"
	},
	"/assets/onboard-DfXxOPwA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"31ee-0o8gXp/uHJlGQQ0wwXqwbjFobB0\"",
		"mtime": "2026-07-09T19:37:16.122Z",
		"size": 12782,
		"path": "../public/assets/onboard-DfXxOPwA.js"
	},
	"/assets/results-CsuJ-4Ff.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"27a2-cXpHZGCh76ziIiBHqtA0EkeqOBQ\"",
		"mtime": "2026-07-09T19:37:16.122Z",
		"size": 10146,
		"path": "../public/assets/results-CsuJ-4Ff.js"
	},
	"/assets/routes-BQt-rYqK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cf4-rgZeaUZQWRHN69H+GD0b76P2QRo\"",
		"mtime": "2026-07-09T19:37:16.122Z",
		"size": 7412,
		"path": "../public/assets/routes-BQt-rYqK.js"
	},
	"/assets/search-CThtoR1e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12b-cC8YfuBgjRknS+MJVtgIhDcuAw4\"",
		"mtime": "2026-07-09T19:37:16.122Z",
		"size": 299,
		"path": "../public/assets/search-CThtoR1e.js"
	},
	"/assets/shield-check-D9Z2S2aD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-biSkZahCB4zw/Pcg1oQMoUN6d6Q\"",
		"mtime": "2026-07-09T19:37:16.122Z",
		"size": 320,
		"path": "../public/assets/shield-check-D9Z2S2aD.js"
	},
	"/assets/signup-CylgMNv9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11e4-wJvtisfxPMD+Ge0WU9ofLIar1AU\"",
		"mtime": "2026-07-09T19:37:16.138Z",
		"size": 4580,
		"path": "../public/assets/signup-CylgMNv9.js"
	},
	"/assets/styles-BCCVeb5c.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"19da1-TLj9fpiC7y1fdZhWCXQbOiWpMKs\"",
		"mtime": "2026-07-09T19:37:16.138Z",
		"size": 105889,
		"path": "../public/assets/styles-BCCVeb5c.css"
	},
	"/assets/users-Beeh7dlL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"132-9nJZitxSgh/av4RhciQnVb8N4Aw\"",
		"mtime": "2026-07-09T19:37:16.138Z",
		"size": 306,
		"path": "../public/assets/users-Beeh7dlL.js"
	},
	"/assets/verify-ve8NTkwF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2266-ftzn+OZhYCAsNbB5l0BqIqQkElQ\"",
		"mtime": "2026-07-09T19:37:16.138Z",
		"size": 8806,
		"path": "../public/assets/verify-ve8NTkwF.js"
	},
	"/assets/vote._id-6y2vGjwb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26e6-sHTR6yh+yGCmSSIDv7Q8bJ13RVs\"",
		"mtime": "2026-07-09T19:37:16.138Z",
		"size": 9958,
		"path": "../public/assets/vote._id-6y2vGjwb.js"
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
