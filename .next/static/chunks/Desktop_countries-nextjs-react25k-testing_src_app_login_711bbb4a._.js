(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/countries-nextjs-react25k-testing/src/app/login/AuthRedirect.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$app$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/src/app/context/AuthContext.jsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const AuthRedirect = ()=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$app$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthRedirect.useEffect": ()=>{
            if (user) {
                router.push("/protected");
            }
        }
    }["AuthRedirect.useEffect"], [
        user,
        router
    ]);
    return null;
};
_s(AuthRedirect, "VvmgW5gML8gtJ8g+p6fOEJP2gYk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$app$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthRedirect;
const __TURBOPACK__default__export__ = AuthRedirect;
var _c;
__turbopack_context__.k.register(_c, "AuthRedirect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/src/app/login/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$lib$2f$supabase$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/src/lib/supabase/supabase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/esm/Paper/Paper.js [app-client] (ecmascript) <export default as Paper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@supabase/auth-ui-react/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@supabase/auth-ui-shared/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$app$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/src/app/context/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$app$2f$login$2f$AuthRedirect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/src/app/login/AuthRedirect.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const Login = ()=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$app$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    console.log("User: ", user);
    if (user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$app$2f$login$2f$AuthRedirect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/login/page.jsx",
            lineNumber: 15,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    } else {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                p: 3
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
                elevation: 3,
                sx: {
                    p: 4,
                    maxWidth: 400,
                    width: "100%"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "h5",
                        gutterBottom: true,
                        textAlign: "center",
                        children: "Welcome"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/login/page.jsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Auth"], {
                        supabaseClient: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$lib$2f$supabase$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"],
                        appearance: {
                            theme: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeSupa"],
                            variables: {
                                default: {
                                    colors: {
                                        brand: "#1976d2",
                                        brandAccent: "#1565c0"
                                    }
                                }
                            }
                        },
                        providers: [
                            "google"
                        ],
                        socialLayout: "horizontal",
                        view: "sign_in"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/login/page.jsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/login/page.jsx",
                lineNumber: 27,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/login/page.jsx",
            lineNumber: 18,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
};
_s(Login, "9ep4vdl3mBfipxjmc+tQCDhw6Ik=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$app$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Login;
const __TURBOPACK__default__export__ = Login;
var _c;
__turbopack_context__.k.register(_c, "Login");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_countries-nextjs-react25k-testing_src_app_login_711bbb4a._.js.map