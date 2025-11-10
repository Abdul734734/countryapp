module.exports = [
"[project]/Desktop/countries-nextjs-react25k-testing/src/components/FavouriteButton.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$app$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/src/app/context/AuthContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Favorite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/icons-material/esm/Favorite.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FavoriteBorder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/icons-material/esm/FavoriteBorder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/esm/IconButton/IconButton.js [app-ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-ssr] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$lib$2f$features$2f$favourites$2f$favouritesSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/src/lib/features/favourites/favouritesSlice.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const FavouriteButton = ({ country, variant = "button" })=>{
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$app$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const isFavourite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.favourites.favourites.some((favourite)=>favourite.country_name === country?.name?.common));
    const loading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.favourites.loading);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (user) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$lib$2f$features$2f$favourites$2f$favouritesSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchFavourites"])());
        }
    }, [
        user,
        dispatch
    ]);
    const toggleFavourite = ()=>{
        if (isFavourite) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$lib$2f$features$2f$favourites$2f$favouritesSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeFavourite"])(country.name.common));
        } else {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$lib$2f$features$2f$favourites$2f$favouritesSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addFavourite"])(country));
        }
    };
    // if no user, return nothing
    if (!user) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
        title: isFavourite ? "Remove from favourites" : "Add to favourites",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
            onClick: toggleFavourite,
            disabled: loading,
            color: isFavourite ? "error" : "primary",
            children: isFavourite ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Favorite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/components/FavouriteButton.jsx",
                lineNumber: 51,
                columnNumber: 24
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FavoriteBorder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/components/FavouriteButton.jsx",
                lineNumber: 51,
                columnNumber: 39
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/components/FavouriteButton.jsx",
            lineNumber: 46,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/components/FavouriteButton.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = FavouriteButton;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$app$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/src/app/context/AuthContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$components$2f$FavouriteButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/src/components/FavouriteButton.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$lib$2f$features$2f$countries$2f$countriesSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/src/lib/features/countries/countriesSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowBack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/icons-material/esm/ArrowBack.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/esm/Button/Button.js [app-ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/esm/Card/Card.js [app-ssr] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/esm/CardContent/CardContent.js [app-ssr] (ecmascript) <export default as CardContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/esm/Chip/Chip.js [app-ssr] (ecmascript) <export default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/esm/Divider/Divider.js [app-ssr] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/esm/Grid/Grid.js [app-ssr] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/esm/Paper/Paper.js [app-ssr] (ecmascript) <export default as Paper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
const CountryPage = ()=>{
    // 1. Get URL parameters and setup hooks
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$app$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    // 2. Get country data from Redux store
    const { selectedCountry, loading, error, countries } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.countries);
    console.log("Countries from SinglePage: ", countries);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (countries.length === 0) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$lib$2f$features$2f$countries$2f$countriesSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchCountries"])());
        }
    });
    // 3. Weather state (we'll add this functionality later)
    const [weatherData, setWeatherData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [weatherLoading, setWeatherLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [weatherError, setWeatherError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchWeatherData = async (capital)=>{
        if (!capital) return;
        setWeatherLoading(true);
        setWeatherError(null);
        try {
            const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERAPI;
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(capital)}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error("Weather data not available");
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (err) {
            setWeatherError(err.message);
            console.error("Weather fetch error:", err);
        } finally{
            setWeatherLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedCountry?.capital?.[0]) {
            fetchWeatherData(selectedCountry.capital[0]);
        }
    }, [
        selectedCountry
    ]);
    // 4. Find and set country data from existing store data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (slug && countries.length > 0) {
            // Convert URL slug back to country name
            const countryName = decodeURIComponent(slug.replace(/-/g, " "));
            // Find country in existing data (no API call needed!)
            const foundCountry = countries.find((country)=>country.name.common.toLowerCase() === countryName.toLowerCase() || country.name.official.toLowerCase() === countryName.toLowerCase());
            if (foundCountry) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$lib$2f$features$2f$countries$2f$countriesSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setSelectedCountry"])(foundCountry));
            } else {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$lib$2f$features$2f$countries$2f$countriesSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearSelectedCountry"])());
            }
        }
        // Cleanup when component unmounts
        return ()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$lib$2f$features$2f$countries$2f$countriesSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearSelectedCountry"])());
        };
    }, [
        slug,
        countries,
        dispatch
    ]);
    // 5. Navigation handler
    const handleBack = ()=>{
        router.push("/countries");
    };
    // 6. Loading state - only when countries data is being fetched initially
    if (loading || countries.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "400px",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "h6",
                children: "Loading countries data..."
            }, void 0, false, {
                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                lineNumber: 124,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
            lineNumber: 118,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // 7. Error state
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "400px",
            gap: 2,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "h6",
                    color: "error",
                    children: [
                        "Error loading country: ",
                        error
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    variant: "contained",
                    onClick: handleBack,
                    startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowBack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                        lineNumber: 146,
                        columnNumber: 22
                    }, void 0),
                    children: "Back to Countries"
                }, void 0, false, {
                    fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                    lineNumber: 143,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
            lineNumber: 132,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // 8. No data state
    if (!selectedCountry) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "400px",
            gap: 2,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "h6",
                    children: "Country not found"
                }, void 0, false, {
                    fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                    lineNumber: 165,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    variant: "contained",
                    onClick: handleBack,
                    startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowBack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                        lineNumber: 169,
                        columnNumber: 22
                    }, void 0),
                    children: "Back to Countries"
                }, void 0, false, {
                    fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                    lineNumber: 166,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
            lineNumber: 157,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // 9. Helper functions for data formatting
    const getCurrencies = (country)=>{
        if (!country.currencies) return "N/A";
        return Object.values(country.currencies).map((currency)=>`${currency.name} (${currency.symbol})`).join(", ");
    };
    const getLanguages = (country)=>{
        if (!country.languages) return "N/A";
        return Object.values(country.languages).join(", ");
    };
    const formatPopulation = (population)=>{
        return new Intl.NumberFormat().format(population);
    };
    // 10. Main component render
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            maxWidth: 1200,
            mx: "auto",
            p: 3
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                variant: "outlined",
                onClick: handleBack,
                startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowBack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                    lineNumber: 201,
                    columnNumber: 20
                }, void 0),
                sx: {
                    mb: 3
                },
                children: "Back to Countries"
            }, void 0, false, {
                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                lineNumber: 198,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$components$2f$FavouriteButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    country: selectedCountry
                }, void 0, false, {
                    fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                    lineNumber: 209,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                lineNumber: 208,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
                elevation: 3,
                sx: {
                    p: 4
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                        container: true,
                        spacing: 4,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                item: true,
                                xs: 12,
                                md: 6,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                    sx: {
                                        height: "100%"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            gap: 3,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    width: 300,
                                                    height: 200,
                                                    style: {
                                                        objectFit: "cover",
                                                        borderRadius: "8px",
                                                        border: "1px solid #ddd"
                                                    },
                                                    src: selectedCountry.flags?.svg || selectedCountry.flags?.png,
                                                    alt: `Flag of ${selectedCountry.name?.common}`,
                                                    priority: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                    lineNumber: 226,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                    textAlign: "center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                        variant: "h3",
                                                        component: "h1",
                                                        gutterBottom: true,
                                                        children: selectedCountry.name?.common
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                        lineNumber: 241,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                    lineNumber: 240,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                            lineNumber: 220,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                lineNumber: 217,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                item: true,
                                xs: 12,
                                md: 6,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                    sx: {
                                        height: "100%"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "h5",
                                                gutterBottom: true,
                                                children: "Country Details"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                                                sx: {
                                                    mb: 2
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                lineNumber: 257,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 2,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                variant: "subtitle1",
                                                                fontWeight: "bold",
                                                                children: "Population"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                                lineNumber: 261,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                variant: "body1",
                                                                children: formatPopulation(selectedCountry.population)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                                lineNumber: 264,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                        lineNumber: 260,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                variant: "subtitle1",
                                                                fontWeight: "bold",
                                                                children: "Capital"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                                lineNumber: 270,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                variant: "body1",
                                                                children: selectedCountry.capital?.join(", ") || "N/A"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                                lineNumber: 273,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                        lineNumber: 269,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                variant: "subtitle1",
                                                                fontWeight: "bold",
                                                                children: "Languages"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                                lineNumber: 279,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                sx: {
                                                                    mt: 1
                                                                },
                                                                children: getLanguages(selectedCountry).split(", ").map((language, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                                                        label: language,
                                                                        variant: "outlined",
                                                                        size: "small",
                                                                        sx: {
                                                                            mr: 1,
                                                                            mb: 1
                                                                        }
                                                                    }, index, false, {
                                                                        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                                        lineNumber: 286,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                                lineNumber: 282,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                        lineNumber: 278,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                lineNumber: 251,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                        lineNumber: 215,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    selectedCountry?.capital?.[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                        container: true,
                        spacing: 4,
                        sx: {
                            mt: 2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            item: true,
                            xs: 12,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "h5",
                                            gutterBottom: true,
                                            children: [
                                                "Weather in ",
                                                selectedCountry.capital[0]
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                            lineNumber: 307,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                                            sx: {
                                                mb: 2
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                            lineNumber: 310,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        weatherLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            minHeight: "200px",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "body1",
                                                children: "Loading weather data..."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                lineNumber: 319,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                            lineNumber: 313,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        weatherError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            minHeight: "200px",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "body1",
                                                color: "error",
                                                children: weatherError
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                lineNumber: 332,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                            lineNumber: 326,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        weatherData && !weatherLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                            container: true,
                                            spacing: 3,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                                    item: true,
                                                    xs: 12,
                                                    md: 6,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "center",
                                                        gap: 2,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: 2,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    width: 80,
                                                                    height: 80,
                                                                    src: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
                                                                    alt: weatherData.weather[0].description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                                    lineNumber: 349,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                            variant: "h3",
                                                                            component: "div",
                                                                            children: [
                                                                                Math.round(weatherData.main.temp),
                                                                                "°C"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                                            lineNumber: 356,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                            variant: "h6",
                                                                            color: "text.secondary",
                                                                            children: weatherData.weather[0].main
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                                            lineNumber: 359,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                                    lineNumber: 355,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                            lineNumber: 348,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                        lineNumber: 342,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                    lineNumber: 341,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                                    item: true,
                                                    xs: 12,
                                                    md: 6,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 1.5,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                display: "flex",
                                                                justifyContent: "space-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                        variant: "body1",
                                                                        fontWeight: "bold",
                                                                        children: "Humidity:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                                        lineNumber: 371,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                        variant: "body1",
                                                                        children: [
                                                                            weatherData.main.humidity,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                                        lineNumber: 374,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                                lineNumber: 370,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                display: "flex",
                                                                justifyContent: "space-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                        variant: "body1",
                                                                        fontWeight: "bold",
                                                                        children: "Wind Speed:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                                        lineNumber: 379,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                        variant: "body1",
                                                                        children: [
                                                                            weatherData.wind.speed,
                                                                            " m/s"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                                        lineNumber: 382,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                                lineNumber: 378,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                display: "flex",
                                                                justifyContent: "space-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                        variant: "body1",
                                                                        fontWeight: "bold",
                                                                        children: "Feels like:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                                        lineNumber: 387,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                        variant: "body1",
                                                                        children: [
                                                                            Math.round(weatherData.main.feels_like),
                                                                            "°C"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                                        lineNumber: 390,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                                lineNumber: 386,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                        lineNumber: 369,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                                    lineNumber: 368,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                            lineNumber: 339,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                    lineNumber: 306,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                                lineNumber: 305,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                            lineNumber: 304,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                        lineNumber: 303,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
                lineNumber: 214,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/countries/[slug]/page.js",
        lineNumber: 196,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CountryPage;
}),
];

//# sourceMappingURL=Desktop_countries-nextjs-react25k-testing_src_e7756c9d._.js.map