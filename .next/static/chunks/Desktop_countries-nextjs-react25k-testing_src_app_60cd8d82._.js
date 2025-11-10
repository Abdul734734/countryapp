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
"[project]/Desktop/countries-nextjs-react25k-testing/src/app/protected/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$app$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/src/app/context/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$app$2f$login$2f$AuthRedirect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/src/app/login/AuthRedirect.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Protected = ()=>{
    _s();
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$app$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {}, void 0, false, {
                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/protected/page.jsx",
                lineNumber: 19,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/protected/page.jsx",
            lineNumber: 11,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$app$2f$login$2f$AuthRedirect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/protected/page.jsx",
            lineNumber: 25,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    console.log("User: ", user);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            maxWidth: 1200,
            mx: "auto",
            p: 3
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "h1",
                children: "Protected - User Data"
            }, void 0, false, {
                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/protected/page.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "body1",
                children: user.email
            }, void 0, false, {
                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/protected/page.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "body1",
                children: user.id
            }, void 0, false, {
                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/protected/page.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "body1",
                children: user.user_metadata.name
            }, void 0, false, {
                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/protected/page.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: user.user_metadata.avatar_url,
                alt: "User Avatar",
                width: 100,
                height: 100
            }, void 0, false, {
                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/protected/page.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/protected/page.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Protected, "EmJkapf7qiLC5Br5eCoEq4veZes=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$app$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Protected;
const __TURBOPACK__default__export__ = Protected;
var _c;
__turbopack_context__.k.register(_c, "Protected");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_countries-nextjs-react25k-testing_src_app_60cd8d82._.js.map