(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/countries-nextjs-react25k-testing/src/app/context/ThemeContext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomThemeProvider",
    ()=>CustomThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CssBaseline$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/esm/CssBaseline/CssBaseline.js [app-client] (ecmascript) <export default as CssBaseline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/esm/styles/createTheme.js [app-client] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/esm/styles/ThemeProvider.js [app-client] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const lightTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
    palette: {
        mode: "light",
        primary: {
            main: "#1976d0",
            light: "#42a5f5",
            dark: "#1565c0",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#9c27b0",
            light: "#ba68c8",
            dark: "#7b1fa2",
            contrastText: "#ffffff"
        },
        background: {
            default: "#ffffff",
            paper: "#f5f5f5"
        },
        text: {
            primary: "#212121",
            secondary: "#757575"
        }
    },
    typography: {
        fontFamily: [
            "Roboto",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            '"Helvetica Neue"',
            "Arial",
            "sans-serif"
        ].join(","),
        h1: {
            fontWeight: 300,
            fontSize: "2.5rem"
        },
        h2: {
            fontWeight: 400,
            fontSize: "2rem"
        },
        h3: {
            fontWeight: 400,
            fontSize: "1.75rem"
        },
        h4: {
            fontWeight: 500,
            fontSize: "1.5rem"
        },
        h5: {
            fontWeight: 500,
            fontSize: "1.25rem"
        },
        h6: {
            fontWeight: 500,
            fontSize: "1rem"
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: 8
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }
            }
        }
    }
});
// Define dark theme
const darkTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
    palette: {
        mode: "dark",
        primary: {
            main: "#90caf9",
            light: "#e3f2fd",
            dark: "#42a5f5",
            contrastText: "#000000"
        },
        secondary: {
            main: "#ce93d8",
            light: "#f3e5f5",
            dark: "#ab47bc",
            contrastText: "#000000"
        },
        background: {
            default: "#121212",
            paper: "#1e1e1e"
        },
        text: {
            primary: "#ffffff",
            secondary: "#b0b0b0"
        }
    },
    typography: {
        fontFamily: [
            "Roboto",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            '"Helvetica Neue"',
            "Arial",
            "sans-serif"
        ].join(","),
        h1: {
            fontWeight: 300,
            fontSize: "2.5rem"
        },
        h2: {
            fontWeight: 400,
            fontSize: "2rem"
        },
        h3: {
            fontWeight: 400,
            fontSize: "1.75rem"
        },
        h4: {
            fontWeight: 500,
            fontSize: "1.5rem"
        },
        h5: {
            fontWeight: 500,
            fontSize: "1.25rem"
        },
        h6: {
            fontWeight: 500,
            fontSize: "1rem"
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: 8
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.3)"
                }
            }
        }
    }
});
function CustomThemeProvider(param) {
    let { children } = param;
    _s();
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHydrated, setIsHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomThemeProvider.useEffect": ()=>{
            // Mark as hydrated first
            setIsHydrated(true);
            const savedTheme = localStorage.getItem("theme-mode");
            if (savedTheme) {
                setIsDarkMode(savedTheme === "dark");
            } else {
                // Check system preference:
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                setIsDarkMode(prefersDark);
            }
        }
    }["CustomThemeProvider.useEffect"], []);
    // Save theme preference when it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomThemeProvider.useEffect": ()=>{
            if (isHydrated) {
                localStorage.setItem("theme-mode", isDarkMode ? "dark" : "light");
            }
        }
    }["CustomThemeProvider.useEffect"], [
        isDarkMode,
        isHydrated
    ]);
    const toggleTheme = ()=>{
        setIsDarkMode((prev)=>!prev);
    };
    // Use light theme as default until hydrated to prevent mismatch
    const currentTheme = isHydrated ? isDarkMode ? darkTheme : lightTheme : lightTheme;
    const value = {
        isDarkMode: isHydrated ? isDarkMode : false,
        toggleTheme,
        theme: currentTheme,
        isHydrated
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: value,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
            theme: currentTheme,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CssBaseline$3e$__["CssBaseline"], {}, void 0, false, {
                    fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/context/ThemeContext.jsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/context/ThemeContext.jsx",
            lineNumber: 214,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/context/ThemeContext.jsx",
        lineNumber: 213,
        columnNumber: 5
    }, this);
}
_s(CustomThemeProvider, "G5fCKBGCsUVCZ6jlACj1po3J2h8=");
_c = CustomThemeProvider;
function useTheme() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a Theme Provider");
    }
    return context;
}
_s1(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CustomThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/src/components/ThemeToggle.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$app$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/src/app/context/ThemeContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Brightness4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/icons-material/esm/Brightness4.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Brightness7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/icons-material/esm/Brightness7.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ThemeToggle() {
    _s();
    const { isDarkMode, toggleTheme, isHydrated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$app$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    // Don't render until hydrated to prevent mismatch
    if (!isHydrated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
            disabled: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Brightness4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/components/ThemeToggle.jsx",
                lineNumber: 14,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/components/ThemeToggle.jsx",
            lineNumber: 13,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
        onClick: toggleTheme,
        children: isDarkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Brightness7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/components/ThemeToggle.jsx",
            lineNumber: 21,
            columnNumber: 21
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Brightness4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/components/ThemeToggle.jsx",
            lineNumber: 21,
            columnNumber: 39
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/components/ThemeToggle.jsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "ZiWij/14Bo5efNoY9ci72dxp/P0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$app$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/src/lib/supabase/supabase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// create a supabase client connection
__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://lppvahprjeqlrqqghuhz.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwcHZhaHByamVxbHJxcWdodWh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MTAxMjMsImV4cCI6MjA3ODA4NjEyM30.c685ItTCm-7_Z6MkyTo1BJ18ilXUpD0oeQnzcKOaN8Y"));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/src/app/context/AuthContext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$lib$2f$supabase$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/src/lib/supabase/supabase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider(param) {
    let { children } = param;
    _s();
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            // Get initial session
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$lib$2f$supabase$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession().then({
                "AuthProvider.useEffect": (param)=>{
                    let { data: { session } } = param;
                    setSession(session);
                    var _session_user;
                    setUser((_session_user = session === null || session === void 0 ? void 0 : session.user) !== null && _session_user !== void 0 ? _session_user : null);
                    setLoading(false);
                }
            }["AuthProvider.useEffect"]);
            // Listen for auth changes
            const { data: { subscription } } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$lib$2f$supabase$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange({
                "AuthProvider.useEffect": (_event, session)=>{
                    setSession(session);
                    var _session_user;
                    setUser((_session_user = session === null || session === void 0 ? void 0 : session.user) !== null && _session_user !== void 0 ? _session_user : null);
                    setLoading(false);
                }
            }["AuthProvider.useEffect"]);
            return ({
                "AuthProvider.useEffect": ()=>subscription.unsubscribe()
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], []);
    const signOut = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$lib$2f$supabase$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
    };
    const value = {
        session,
        user,
        loading,
        signOut
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/context/AuthContext.jsx",
        lineNumber: 43,
        columnNumber: 10
    }, this);
}
_s(AuthProvider, "OmtWNs1wmtvVriGCMVMhIptcvUQ=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/src/components/Navigaton.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$components$2f$ThemeToggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/src/components/ThemeToggle.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const { useAuth } = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/src/app/context/AuthContext.jsx [app-client] (ecmascript)");
const { AppBar, Toolbar, Button } = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/index.js [app-client] (ecmascript)");
const Navigation = (param)=>{
    let { children } = param;
    _s();
    const { user, signOut } = useAuth();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppBar, {
                position: "static",
                color: "gradient",
                sx: {
                    mb: 3
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toolbar, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            color: "inherit",
                            onClick: ()=>router.push("/countries"),
                            children: "Countries"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/components/Navigaton.jsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            color: "inherit",
                            onClick: ()=>router.push("/example"),
                            children: "Example"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/components/Navigaton.jsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            color: "inherit",
                            onClick: ()=>router.push("/protected"),
                            children: "Protected"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/components/Navigaton.jsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            color: "inherit",
                            onClick: ()=>signOut(),
                            children: "Logout"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/components/Navigaton.jsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            color: "inherit",
                            onClick: ()=>router.push("/profile"),
                            children: "Profile"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/components/Navigaton.jsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        !user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            color: "inherit",
                            onClick: ()=>router.push("/login"),
                            children: "Login"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/components/Navigaton.jsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$components$2f$ThemeToggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/components/Navigaton.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/components/Navigaton.jsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/components/Navigaton.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/components/Navigaton.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navigation, "p25EqY+ph/7kPIJ5Ow6afH+fokk=", false, function() {
    return [
        useAuth,
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Navigation;
const __TURBOPACK__default__export__ = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/src/lib/features/countries/countriesSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearSelectedCountry",
    ()=>clearSelectedCountry,
    "countriesSlice",
    ()=>countriesSlice,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fetchCountries",
    ()=>fetchCountries,
    "selectCountryByName",
    ()=>selectCountryByName,
    "setSelectedCountry",
    ()=>setSelectedCountry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
;
const api = "https://restcountries.com/v3.1/all?fields=name,flags,population,currencies,capital,languages,region,subregion,area,timezones";
const initialState = {
    countries: [],
    selectedCountry: null,
    loading: false,
    error: null
};
const fetchCountries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("countries/countries", async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(api);
    console.log("status: ", response.status);
    console.log("Response: ", response.data);
    return response.data;
});
const selectCountryByName = (state, countryName)=>{
    return state.countries.countries.find((country)=>country.name.common.toLowerCase() === countryName.toLowerCase() || country.name.official.toLowerCase() === countryName.toLowerCase());
};
const countriesSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "countries",
    initialState,
    reducers: {
        setSelectedCountry: (state, action)=>{
            state.selectedCountry = action.payload;
            state.error = null;
        },
        clearSelectedCountry: (state)=>{
            state.selectedCountry = null;
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchCountries.fulfilled, (state, action)=>{
            state.countries = action.payload;
        });
    }
});
const { setSelectedCountry, clearSelectedCountry } = countriesSlice.actions;
const __TURBOPACK__default__export__ = countriesSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/src/lib/features/favourites/favouritesSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addFavourite",
    ()=>addFavourite,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fetchFavourites",
    ()=>fetchFavourites,
    "removeFavourite",
    ()=>removeFavourite
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    favourites: [],
    loading: false
};
const getCurrentSession = async ()=>{
    const { supabase } = await __turbopack_context__.A("[project]/Desktop/countries-nextjs-react25k-testing/src/lib/supabase/supabase.js [app-client] (ecmascript, async loader)");
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error || !(session === null || session === void 0 ? void 0 : session.access_token)) {
        throw new Error("No valid authentication session found");
    }
    return session;
};
const fetchFavourites = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("favourites/fetchFavourites", async (_, param)=>{
    let { rejectWithValue } = param;
    try {
        await getCurrentSession();
        const { supabase } = await __turbopack_context__.A("[project]/Desktop/countries-nextjs-react25k-testing/src/lib/supabase/supabase.js [app-client] (ecmascript, async loader)");
        const { data, error } = await supabase.from("favourites") // table name
        .select("*") // selects all fields and rows
        .order("created_at", {
            ascending: false
        }); // order by created_at in descending order
        if (error) throw error;
        // Clean up inconsistent data: ensure country_name is always a simple string
        const cleanedData = await Promise.all((data === null || data === void 0 ? void 0 : data.map(async (favourite)=>{
            if (typeof favourite.country_name === "string") {
                try {
                    // If it's a JSON string, extract the common name
                    const parsedName = JSON.parse(favourite.country_name);
                    if (parsedName.common) {
                        // Update the database record to use simple string format
                        await supabase.from("favourites").update({
                            country_name: parsedName.common
                        }).eq("id", favourite.id);
                        return {
                            ...favourite,
                            country_name: parsedName.common
                        };
                    }
                } catch (e) {
                // Already a simple string, no change needed
                }
            }
            return favourite;
        })) || []);
        return cleanedData || data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
const addFavourite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("favourites/addFavourite", async (countryData, param)=>{
    let { rejectWithValue } = param;
    try {
        const session = await getCurrentSession();
        const { supabase } = await __turbopack_context__.A("[project]/Desktop/countries-nextjs-react25k-testing/src/lib/supabase/supabase.js [app-client] (ecmascript, async loader)");
        const { data, error } = await supabase.from("favourites").insert({
            user_id: session.user.id,
            country_name: countryData.name.common,
            country_data: countryData
        }).select().single(); // single row is returned
        if (error) throw error;
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
const removeFavourite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("favourites/removeFavourite", async (countryName, param)=>{
    let { rejectWithValue } = param;
    try {
        await getCurrentSession();
        const { supabase } = await __turbopack_context__.A("[project]/Desktop/countries-nextjs-react25k-testing/src/lib/supabase/supabase.js [app-client] (ecmascript, async loader)");
        const { data, error } = await supabase.from("favourites").delete().eq("country_name", countryName);
        if (error) throw error;
        return countryName;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
const favouritesSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "favourites",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchFavourites.fulfilled, (state, action)=>{
            state.favourites = action.payload;
            state.loading = false;
        }).addCase(fetchFavourites.pending, (state)=>{
            state.loading = true;
        }).addCase(addFavourite.fulfilled, (state, action)=>{
            state.favourites.push(action.payload);
            state.loading = false;
        }).addCase(addFavourite.pending, (state)=>{
            state.loading = true;
        }).addCase(removeFavourite.fulfilled, (state, action)=>{
            state.favourites = state.favourites.filter((favourite)=>favourite.country_name !== action.payload);
            state.loading = false;
        }).addCase(removeFavourite.pending, (state)=>{
            state.loading = true;
        });
    }
});
const __TURBOPACK__default__export__ = favouritesSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/src/lib/features/profile/profileSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearError",
    ()=>clearError,
    "clearProfile",
    ()=>clearProfile,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fetchProfile",
    ()=>fetchProfile,
    "selectProfile",
    ()=>selectProfile,
    "selectProfileError",
    ()=>selectProfileError,
    "selectProfileLoading",
    ()=>selectProfileLoading,
    "selectProfileUpdating",
    ()=>selectProfileUpdating,
    "setProfile",
    ()=>setProfile,
    "updateProfile",
    ()=>updateProfile,
    "uploadAvatar",
    ()=>uploadAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    profile: null,
    loading: false,
    error: null,
    updating: false
};
const fetchProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("profile/fetchProfile", async (_, param)=>{
    let { rejectWithValue } = param;
    try {
        // Import supabase client to get current session
        const { supabase } = await __turbopack_context__.A("[project]/Desktop/countries-nextjs-react25k-testing/src/lib/supabase/supabase.js [app-client] (ecmascript, async loader)");
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        if (sessionError || !(session === null || session === void 0 ? void 0 : session.access_token)) {
            throw new Error("No valid authentication session found");
        }
        const response = await fetch("/api/profile", {
            method: "GET",
            headers: {
                Authorization: "Bearer ".concat(session.access_token),
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to fetch profile");
        }
        const data = await response.json();
        return data.profile;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
const updateProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("profile/updateProfile", async (profileData, param)=>{
    let { rejectWithValue } = param;
    try {
        // Import supabase client to get current session
        const { supabase } = await __turbopack_context__.A("[project]/Desktop/countries-nextjs-react25k-testing/src/lib/supabase/supabase.js [app-client] (ecmascript, async loader)");
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        if (sessionError || !(session === null || session === void 0 ? void 0 : session.access_token)) {
            throw new Error("No valid authentication session found");
        }
        const response = await fetch("/api/profile", {
            method: "PUT",
            headers: {
                Authorization: "Bearer ".concat(session.access_token),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profileData)
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to update profile");
        }
        const data = await response.json();
        return data.profile;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
const uploadAvatar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("profile/uploadAvatar", async (file, param)=>{
    let { rejectWithValue } = param;
    try {
        // Import supabase client to get current session
        const { supabase } = await __turbopack_context__.A("[project]/Desktop/countries-nextjs-react25k-testing/src/lib/supabase/supabase.js [app-client] (ecmascript, async loader)");
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        if (sessionError || !(session === null || session === void 0 ? void 0 : session.access_token)) {
            throw new Error("No valid authentication session found");
        }
        const formData = new FormData();
        formData.append("avatar", file);
        const response = await fetch("/api/profile/avatar", {
            method: "POST",
            headers: {
                Authorization: "Bearer ".concat(session.access_token)
            },
            body: formData
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to upload avatar");
        }
        const data = await response.json();
        return data.avatar_url;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
const profileSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "profile",
    initialState,
    reducers: {
        clearProfile: (state)=>{
            state.profile = null;
            state.error = null;
        },
        clearError: (state)=>{
            state.error = null;
        },
        setProfile: (state, action)=>{
            state.profile = action.payload;
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder// Fetch profile
        .addCase(fetchProfile.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchProfile.fulfilled, (state, action)=>{
            state.loading = false;
            state.profile = action.payload;
            state.error = null;
        }).addCase(fetchProfile.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Update profile
        .addCase(updateProfile.pending, (state)=>{
            state.updating = true;
            state.error = null;
        }).addCase(updateProfile.fulfilled, (state, action)=>{
            state.updating = false;
            state.profile = action.payload;
            state.error = null;
        }).addCase(updateProfile.rejected, (state, action)=>{
            state.updating = false;
            state.error = action.payload;
        })// Upload avatar
        .addCase(uploadAvatar.pending, (state)=>{
            state.updating = true;
            state.error = null;
        }).addCase(uploadAvatar.fulfilled, (state, action)=>{
            state.updating = false;
            if (state.profile) {
                state.profile.avatar_url = action.payload;
            }
            state.error = null;
        }).addCase(uploadAvatar.rejected, (state, action)=>{
            state.updating = false;
            state.error = action.payload;
        });
    }
});
const selectProfile = (state)=>state.profile.profile;
const selectProfileLoading = (state)=>state.profile.loading;
const selectProfileUpdating = (state)=>state.profile.updating;
const selectProfileError = (state)=>state.profile.error;
const { clearProfile, clearError, setProfile } = profileSlice.actions;
const __TURBOPACK__default__export__ = profileSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/src/lib/store.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeStore",
    ()=>makeStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$lib$2f$features$2f$countries$2f$countriesSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/src/lib/features/countries/countriesSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$lib$2f$features$2f$favourites$2f$favouritesSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/src/lib/features/favourites/favouritesSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$lib$2f$features$2f$profile$2f$profileSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/src/lib/features/profile/profileSlice.js [app-client] (ecmascript)");
;
;
;
;
const makeStore = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
        reducer: {
            countries: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$lib$2f$features$2f$countries$2f$countriesSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            favourites: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$lib$2f$features$2f$favourites$2f$favouritesSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            profile: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$lib$2f$features$2f$profile$2f$profileSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        }
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/src/app/StoreProvider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StoreProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$lib$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/src/lib/store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function StoreProvider(param) {
    let { children } = param;
    _s();
    const storeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (!storeRef.current) {
        storeRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$src$2f$lib$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeStore"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: storeRef.current,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/countries-nextjs-react25k-testing/src/app/StoreProvider.jsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_s(StoreProvider, "EtiU7pDwGhTDZwMnrKEqZbxjqXE=");
_c = StoreProvider;
var _c;
__turbopack_context__.k.register(_c, "StoreProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_countries-nextjs-react25k-testing_src_888dc831._.js.map