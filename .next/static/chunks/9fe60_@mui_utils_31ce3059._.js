(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/deepmerge/deepmerge.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>deepmerge,
    "isPlainObject",
    ()=>isPlainObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$utils$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/node_modules/react-is/index.js [app-client] (ecmascript)");
;
;
function isPlainObject(item) {
    if (typeof item !== 'object' || item === null) {
        return false;
    }
    const prototype = Object.getPrototypeOf(item);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
}
function deepClone(source) {
    if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](source) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$utils$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElementType"])(source) || !isPlainObject(source)) {
        return source;
    }
    const output = {};
    Object.keys(source).forEach((key)=>{
        output[key] = deepClone(source[key]);
    });
    return output;
}
function deepmerge(target, source) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        clone: true
    };
    const output = options.clone ? {
        ...target
    } : target;
    if (isPlainObject(target) && isPlainObject(source)) {
        Object.keys(source).forEach((key)=>{
            if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](source[key]) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$utils$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElementType"])(source[key])) {
                output[key] = source[key];
            } else if (isPlainObject(source[key]) && // Avoid prototype pollution
            Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
                // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
                output[key] = deepmerge(target[key], source[key], options);
            } else if (options.clone) {
                output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
            } else {
                output[key] = source[key];
            }
        });
    }
    return output;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/capitalize/capitalize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>capitalize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
;
function capitalize(string) {
    if (typeof string !== 'string') {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'MUI: `capitalize(string)` expects a string argument.' : "TURBOPACK unreachable");
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/clamp/clamp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function clamp(val) {
    let min = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MIN_SAFE_INTEGER, max = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Number.MAX_SAFE_INTEGER;
    return Math.max(min, Math.min(val, max));
}
const __TURBOPACK__default__export__ = clamp;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const defaultGenerator = (componentName)=>componentName;
const createClassNameGenerator = ()=>{
    let generate = defaultGenerator;
    return {
        configure (generator) {
            generate = generator;
        },
        generate (componentName) {
            return generate(componentName);
        },
        reset () {
            generate = defaultGenerator;
        }
    };
};
const ClassNameGenerator = createClassNameGenerator();
const __TURBOPACK__default__export__ = ClassNameGenerator;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>generateUtilityClass,
    "globalStateClasses",
    ()=>globalStateClasses,
    "isGlobalState",
    ()=>isGlobalState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ClassNameGenerator$2f$ClassNameGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js [app-client] (ecmascript)");
;
const globalStateClasses = {
    active: 'active',
    checked: 'checked',
    completed: 'completed',
    disabled: 'disabled',
    error: 'error',
    expanded: 'expanded',
    focused: 'focused',
    focusVisible: 'focusVisible',
    open: 'open',
    readOnly: 'readOnly',
    required: 'required',
    selected: 'selected'
};
function generateUtilityClass(componentName, slot) {
    let globalStatePrefix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'Mui';
    const globalStateClass = globalStateClasses[slot];
    return globalStateClass ? "".concat(globalStatePrefix, "-").concat(globalStateClass) : "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ClassNameGenerator$2f$ClassNameGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].generate(componentName), "-").concat(slot);
}
function isGlobalState(slot) {
    return globalStateClasses[slot] !== undefined;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/resolveProps/resolveProps.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>resolveProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
function resolveProps(defaultProps, props) {
    let mergeClassNameAndStyle = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    const output = {
        ...props
    };
    for(const key in defaultProps){
        if (Object.prototype.hasOwnProperty.call(defaultProps, key)) {
            const propName = key;
            if (propName === 'components' || propName === 'slots') {
                output[propName] = {
                    ...defaultProps[propName],
                    ...output[propName]
                };
            } else if (propName === 'componentsProps' || propName === 'slotProps') {
                const defaultSlotProps = defaultProps[propName];
                const slotProps = props[propName];
                if (!slotProps) {
                    output[propName] = defaultSlotProps || {};
                } else if (!defaultSlotProps) {
                    output[propName] = slotProps;
                } else {
                    output[propName] = {
                        ...slotProps
                    };
                    for(const slotKey in defaultSlotProps){
                        if (Object.prototype.hasOwnProperty.call(defaultSlotProps, slotKey)) {
                            const slotPropName = slotKey;
                            output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName], mergeClassNameAndStyle);
                        }
                    }
                }
            } else if (propName === 'className' && mergeClassNameAndStyle && props.className) {
                output.className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(defaultProps === null || defaultProps === void 0 ? void 0 : defaultProps.className, props === null || props === void 0 ? void 0 : props.className);
            } else if (propName === 'style' && mergeClassNameAndStyle && props.style) {
                output.style = {
                    ...defaultProps === null || defaultProps === void 0 ? void 0 : defaultProps.style,
                    ...props === null || props === void 0 ? void 0 : props.style
                };
            } else if (output[propName] === undefined) {
                output[propName] = defaultProps[propName];
            }
        }
    }
    return output;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/exactProp/exactProp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.
__turbopack_context__.s([
    "default",
    ()=>exactProp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const specialProperty = 'exact-prop: \u200b';
function exactProp(propTypes) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return {
        ...propTypes,
        [specialProperty]: (props)=>{
            const unsupportedProps = Object.keys(props).filter((prop)=>!propTypes.hasOwnProperty(prop));
            if (unsupportedProps.length > 0) {
                return new Error("The following props are not supported: ".concat(unsupportedProps.map((prop)=>"`".concat(prop, "`")).join(', '), ". Please remove them."));
            }
            return null;
        }
    };
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
/**
 * A version of `React.useLayoutEffect` that does not show a warning when server-side rendering.
 * This is useful for effects that are only needed for client-side rendering but not for SSR.
 *
 * Before you use this hook, make sure to read https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * and confirm it doesn't apply to your use-case.
 */ const useEnhancedEffect = typeof window !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
const __TURBOPACK__default__export__ = useEnhancedEffect;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/useId/useId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
let globalId = 0;
// TODO React 17: Remove `useGlobalId` once React 17 support is removed
function useGlobalId(idOverride) {
    const [defaultId, setDefaultId] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(idOverride);
    const id = idOverride || defaultId;
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useGlobalId.useEffect": ()=>{
            if (defaultId == null) {
                // Fallback to this default id when possible.
                // Use the incrementing value for client-side rendering only.
                // We can't use it server-side.
                // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
                globalId += 1;
                setDefaultId("mui-".concat(globalId));
            }
        }
    }["useGlobalId.useEffect"], [
        defaultId
    ]);
    return id;
}
// See https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379 for why
const safeReact = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
};
const maybeReactUseId = safeReact.useId;
function useId(idOverride) {
    // React.useId() is only available from React 17.0.0.
    if (maybeReactUseId !== undefined) {
        const reactId = maybeReactUseId();
        return idOverride !== null && idOverride !== void 0 ? idOverride : reactId;
    }
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
    return useGlobalId(idOverride);
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint no-restricted-syntax: 0, prefer-template: 0, guard-for-in: 0
   ---
   These rules are preventing the performance optimizations below.
 */ /**
 * Compose classes from multiple sources.
 *
 * @example
 * ```tsx
 * const slots = {
 *  root: ['root', 'primary'],
 *  label: ['label'],
 * };
 *
 * const getUtilityClass = (slot) => `MuiButton-${slot}`;
 *
 * const classes = {
 *   root: 'my-root-class',
 * };
 *
 * const output = composeClasses(slots, getUtilityClass, classes);
 * // {
 * //   root: 'MuiButton-root MuiButton-primary my-root-class',
 * //   label: 'MuiButton-label',
 * // }
 * ```
 *
 * @param slots a list of classes for each possible slot
 * @param getUtilityClass a function to resolve the class based on the slot name
 * @param classes the input classes from props
 * @returns the resolved classes for all slots
 */ __turbopack_context__.s([
    "default",
    ()=>composeClasses
]);
function composeClasses(slots, getUtilityClass) {
    let classes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : undefined;
    const output = {};
    for(const slotName in slots){
        const slot = slots[slotName];
        let buffer = '';
        let start = true;
        for(let i = 0; i < slot.length; i += 1){
            const value = slot[i];
            if (value) {
                buffer += (start === true ? '' : ' ') + getUtilityClass(value);
                start = false;
                if (classes && classes[value]) {
                    buffer += ' ' + classes[value];
                }
            }
        }
        output[slotName] = buffer;
    }
    return output;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/getDisplayName/getDisplayName.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getDisplayName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$utils$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/node_modules/react-is/index.js [app-client] (ecmascript)");
;
function getFunctionComponentName(Component) {
    let fallback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    return Component.displayName || Component.name || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
    const functionName = getFunctionComponentName(innerType);
    return outerType.displayName || (functionName !== '' ? "".concat(wrapperName, "(").concat(functionName, ")") : wrapperName);
}
function getDisplayName(Component) {
    if (Component == null) {
        return undefined;
    }
    if (typeof Component === 'string') {
        return Component;
    }
    if (typeof Component === 'function') {
        return getFunctionComponentName(Component, 'Component');
    }
    // TypeScript can't have components as objects but they exist in the form of `memo` or `Suspense`
    if (typeof Component === 'object') {
        switch(Component.$$typeof){
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$utils$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForwardRef"]:
                return getWrappedName(Component, Component.render, 'ForwardRef');
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$utils$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Memo"]:
                return getWrappedName(Component, Component.type, 'memo');
            default:
                return undefined;
        }
    }
    return undefined;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>generateUtilityClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)");
;
function generateUtilityClasses(componentName, slots) {
    let globalStatePrefix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'Mui';
    const result = {};
    slots.forEach((slot)=>{
        result[slot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(componentName, slot, globalStatePrefix);
    });
    return result;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>chainPropTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function chainPropTypes(propType1, propType2) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return function validate() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return propType1(...args) || propType2(...args);
    };
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/refType/refType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/prop-types/index.js [app-client] (ecmascript)");
;
const refType = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
]);
const __TURBOPACK__default__export__ = refType;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/elementTypeAcceptingRef/elementTypeAcceptingRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js [app-client] (ecmascript)");
;
;
function isClassComponent(elementType) {
    // elementType.prototype?.isReactComponent
    const { prototype = {} } = elementType;
    return Boolean(prototype.isReactComponent);
}
function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
    const propValue = props[propName];
    const safePropName = propFullName || propName;
    if (propValue == null || // When server-side rendering React doesn't warn either.
    // This is not an accurate check for SSR.
    // This is only in place for emotion compat.
    // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
    typeof window === 'undefined') {
        return null;
    }
    let warningHint;
    /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */ if (typeof propValue === 'function' && !isClassComponent(propValue)) {
        warningHint = 'Did you accidentally provide a plain function component instead?';
    }
    if (warningHint !== undefined) {
        return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an element type that can hold a ref. ".concat(warningHint, " ") + 'For more information see https://mui.com/r/caveat-with-refs-guide');
    }
    return null;
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType, elementTypeAcceptingRef);
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/isFocusVisible/isFocusVisible.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns a boolean indicating if the event's target has :focus-visible
 */ __turbopack_context__.s([
    "default",
    ()=>isFocusVisible
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function isFocusVisible(element) {
    try {
        return element.matches(':focus-visible');
    } catch (error) {
        // Do not warn on jsdom tests, otherwise all tests that rely on focus have to be skipped
        // Tests that rely on `:focus-visible` will still have to be skipped in jsdom
        if (("TURBOPACK compile-time value", "development") !== 'production' && !/jsdom/.test(window.navigator.userAgent)) {
            console.warn([
                'MUI: The `:focus-visible` pseudo class is not supported in this browser.',
                'Some components rely on this feature to work properly.'
            ].join('\n'));
        }
    }
    return false;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/useForkRef/useForkRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useForkRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function useForkRef() {
    for(var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++){
        refs[_key] = arguments[_key];
    }
    const cleanupRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](undefined);
    const refEffect = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useForkRef.useCallback[refEffect]": (instance)=>{
            const cleanups = refs.map({
                "useForkRef.useCallback[refEffect].cleanups": (ref)=>{
                    if (ref == null) {
                        return null;
                    }
                    if (typeof ref === 'function') {
                        const refCallback = ref;
                        const refCleanup = refCallback(instance);
                        return typeof refCleanup === 'function' ? refCleanup : ({
                            "useForkRef.useCallback[refEffect].cleanups": ()=>{
                                refCallback(null);
                            }
                        })["useForkRef.useCallback[refEffect].cleanups"];
                    }
                    ref.current = instance;
                    return ({
                        "useForkRef.useCallback[refEffect].cleanups": ()=>{
                            ref.current = null;
                        }
                    })["useForkRef.useCallback[refEffect].cleanups"];
                }
            }["useForkRef.useCallback[refEffect].cleanups"]);
            return ({
                "useForkRef.useCallback[refEffect]": ()=>{
                    cleanups.forEach({
                        "useForkRef.useCallback[refEffect]": (refCleanup)=>refCleanup === null || refCleanup === void 0 ? void 0 : refCleanup()
                    }["useForkRef.useCallback[refEffect]"]);
                }
            })["useForkRef.useCallback[refEffect]"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useForkRef.useCallback[refEffect]"], refs);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useForkRef.useMemo": ()=>{
            if (refs.every({
                "useForkRef.useMemo": (ref)=>ref == null
            }["useForkRef.useMemo"])) {
                return null;
            }
            return ({
                "useForkRef.useMemo": (value)=>{
                    if (cleanupRef.current) {
                        cleanupRef.current();
                        cleanupRef.current = undefined;
                    }
                    if (value != null) {
                        cleanupRef.current = refEffect(value);
                    }
                }
            })["useForkRef.useMemo"];
        // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- intentionally ignoring that the dependency array must be an array literal
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useForkRef.useMemo"], refs);
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js [app-client] (ecmascript)");
'use client';
;
;
/**
 * Inspired by https://github.com/facebook/react/issues/14099#issuecomment-440013892
 * See RFC in https://github.com/reactjs/rfcs/pull/220
 */ function useEventCallback(fn) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](fn);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useEventCallback.useEnhancedEffect": ()=>{
            ref.current = fn;
        }
    }["useEventCallback.useEnhancedEffect"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({
        "useEventCallback.useRef": function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return(// @ts-expect-error hide `this`
            (0, ref.current)(...args));
        }
    }["useEventCallback.useRef"]).current;
}
const __TURBOPACK__default__export__ = useEventCallback;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useLazyRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const UNINITIALIZED = {};
function useLazyRef(init, initArg) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](UNINITIALIZED);
    if (ref.current === UNINITIALIZED) {
        ref.current = init(initArg);
    }
    return ref;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/useOnMount/useOnMount.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useOnMount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const EMPTY = [];
function useOnMount(fn) {
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- no need to put `fn` in the dependency array
    /* eslint-disable react-hooks/exhaustive-deps */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](fn, EMPTY);
/* eslint-enable react-hooks/exhaustive-deps */ }
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/useTimeout/useTimeout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timeout",
    ()=>Timeout,
    "default",
    ()=>useTimeout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useLazyRef$2f$useLazyRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useOnMount$2f$useOnMount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/esm/useOnMount/useOnMount.js [app-client] (ecmascript)");
'use client';
;
;
;
class Timeout {
    static create() {
        return new Timeout();
    }
    /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */ start(delay, fn) {
        this.clear();
        this.currentId = setTimeout(()=>{
            this.currentId = null;
            fn();
        }, delay);
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "currentId", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "clear", ()=>{
            if (this.currentId !== null) {
                clearTimeout(this.currentId);
                this.currentId = null;
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "disposeEffect", ()=>{
            return this.clear;
        });
    }
}
function useTimeout() {
    const timeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useLazyRef$2f$useLazyRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Timeout.create).current;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useOnMount$2f$useOnMount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(timeout.disposeEffect);
    return timeout;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/formatMuiErrorMessage/formatMuiErrorMessage.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = formatMuiErrorMessage;
/**
 * WARNING: Don't import this directly. It's imported by the code generated by
 * `@mui/interal-babel-plugin-minify-errors`. Make sure to always use string literals in `Error`
 * constructors to ensure the plugin works as expected. Supported patterns include:
 *   throw new Error('My message');
 *   throw new Error(`My message: ${foo}`);
 *   throw new Error(`My message: ${foo}` + 'another string');
 *   ...
 * @param {number} code
 */ function formatMuiErrorMessage(code) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    const url = new URL("https://mui.com/production-error/?code=".concat(code));
    args.forEach((arg)=>url.searchParams.append('args[]', arg));
    return "Minified MUI error #".concat(code, "; visit ").concat(url, " for the full message.");
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/formatMuiErrorMessage/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _formatMuiErrorMessage.default;
    }
});
var _formatMuiErrorMessage = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/formatMuiErrorMessage/formatMuiErrorMessage.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/deepmerge/deepmerge.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = deepmerge;
exports.isPlainObject = isPlainObject;
var React = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _reactIs = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/node_modules/react-is/index.js [app-client] (ecmascript)");
// https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
function isPlainObject(item) {
    if (typeof item !== 'object' || item === null) {
        return false;
    }
    const prototype = Object.getPrototypeOf(item);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
}
function deepClone(source) {
    if (/*#__PURE__*/ React.isValidElement(source) || (0, _reactIs.isValidElementType)(source) || !isPlainObject(source)) {
        return source;
    }
    const output = {};
    Object.keys(source).forEach((key)=>{
        output[key] = deepClone(source[key]);
    });
    return output;
}
/**
 * Merge objects deeply.
 * It will shallow copy React elements.
 *
 * If `options.clone` is set to `false` the source object will be merged directly into the target object.
 *
 * @example
 * ```ts
 * deepmerge({ a: { b: 1 }, d: 2 }, { a: { c: 2 }, d: 4 });
 * // => { a: { b: 1, c: 2 }, d: 4 }
 * ````
 *
 * @param target The target object.
 * @param source The source object.
 * @param options The merge options.
 * @param options.clone Set to `false` to merge the source object directly into the target object.
 * @returns The merged object.
 */ function deepmerge(target, source) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        clone: true
    };
    const output = options.clone ? {
        ...target
    } : target;
    if (isPlainObject(target) && isPlainObject(source)) {
        Object.keys(source).forEach((key)=>{
            if (/*#__PURE__*/ React.isValidElement(source[key]) || (0, _reactIs.isValidElementType)(source[key])) {
                output[key] = source[key];
            } else if (isPlainObject(source[key]) && // Avoid prototype pollution
            Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
                // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
                output[key] = deepmerge(target[key], source[key], options);
            } else if (options.clone) {
                output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
            } else {
                output[key] = source[key];
            }
        });
    }
    return output;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/deepmerge/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _exportNames = {};
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _deepmerge.default;
    }
});
var _deepmerge = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/deepmerge/deepmerge.js [app-client] (ecmascript)"));
Object.keys(_deepmerge).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    if (key in exports && exports[key] === _deepmerge[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _deepmerge[key];
        }
    });
});
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/capitalize/capitalize.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = capitalize;
var _formatMuiErrorMessage = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/formatMuiErrorMessage/index.js [app-client] (ecmascript)"));
// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word in the sentence.
// We only handle the first word.
function capitalize(string) {
    if (typeof string !== 'string') {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'MUI: `capitalize(string)` expects a string argument.' : "TURBOPACK unreachable");
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/capitalize/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _capitalize.default;
    }
});
var _capitalize = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/capitalize/capitalize.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/ClassNameGenerator/ClassNameGenerator.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
const defaultGenerator = (componentName)=>componentName;
const createClassNameGenerator = ()=>{
    let generate = defaultGenerator;
    return {
        configure (generator) {
            generate = generator;
        },
        generate (componentName) {
            return generate(componentName);
        },
        reset () {
            generate = defaultGenerator;
        }
    };
};
const ClassNameGenerator = createClassNameGenerator();
var _default = exports.default = ClassNameGenerator;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/ClassNameGenerator/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _ClassNameGenerator.default;
    }
});
var _ClassNameGenerator = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/ClassNameGenerator/ClassNameGenerator.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = generateUtilityClass;
exports.globalStateClasses = void 0;
exports.isGlobalState = isGlobalState;
var _ClassNameGenerator = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/ClassNameGenerator/index.js [app-client] (ecmascript)"));
const globalStateClasses = exports.globalStateClasses = {
    active: 'active',
    checked: 'checked',
    completed: 'completed',
    disabled: 'disabled',
    error: 'error',
    expanded: 'expanded',
    focused: 'focused',
    focusVisible: 'focusVisible',
    open: 'open',
    readOnly: 'readOnly',
    required: 'required',
    selected: 'selected'
};
function generateUtilityClass(componentName, slot) {
    let globalStatePrefix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'Mui';
    const globalStateClass = globalStateClasses[slot];
    return globalStateClass ? "".concat(globalStatePrefix, "-").concat(globalStateClass) : "".concat(_ClassNameGenerator.default.generate(componentName), "-").concat(slot);
}
function isGlobalState(slot) {
    return globalStateClasses[slot] !== undefined;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/generateUtilityClass/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _exportNames = {};
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _generateUtilityClass.default;
    }
});
var _generateUtilityClass = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)"));
Object.keys(_generateUtilityClass).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    if (key in exports && exports[key] === _generateUtilityClass[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _generateUtilityClass[key];
        }
    });
});
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = generateUtilityClasses;
var _generateUtilityClass = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/generateUtilityClass/index.js [app-client] (ecmascript)"));
function generateUtilityClasses(componentName, slots) {
    let globalStatePrefix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'Mui';
    const result = {};
    slots.forEach((slot)=>{
        result[slot] = (0, _generateUtilityClass.default)(componentName, slot, globalStatePrefix);
    });
    return result;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/generateUtilityClasses/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _generateUtilityClasses.default;
    }
});
var _generateUtilityClasses = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/getDisplayName/getDisplayName.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getDisplayName;
var _reactIs = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/node_modules/react-is/index.js [app-client] (ecmascript)");
function getFunctionComponentName(Component) {
    let fallback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    return Component.displayName || Component.name || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
    const functionName = getFunctionComponentName(innerType);
    return outerType.displayName || (functionName !== '' ? "".concat(wrapperName, "(").concat(functionName, ")") : wrapperName);
}
/**
 * cherry-pick from
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 * originally forked from recompose/getDisplayName
 */ function getDisplayName(Component) {
    if (Component == null) {
        return undefined;
    }
    if (typeof Component === 'string') {
        return Component;
    }
    if (typeof Component === 'function') {
        return getFunctionComponentName(Component, 'Component');
    }
    // TypeScript can't have components as objects but they exist in the form of `memo` or `Suspense`
    if (typeof Component === 'object') {
        switch(Component.$$typeof){
            case _reactIs.ForwardRef:
                return getWrappedName(Component, Component.render, 'ForwardRef');
            case _reactIs.Memo:
                return getWrappedName(Component, Component.type, 'memo');
            default:
                return undefined;
        }
    }
    return undefined;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/getDisplayName/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _getDisplayName.default;
    }
});
var _getDisplayName = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/getDisplayName/getDisplayName.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/resolveProps/resolveProps.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = resolveProps;
var _clsx = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/clsx/dist/clsx.js [app-client] (ecmascript)"));
/**
 * Add keys, values of `defaultProps` that does not exist in `props`
 * @param defaultProps
 * @param props
 * @param mergeClassNameAndStyle If `true`, merges `className` and `style` props instead of overriding them.
 *   When `false` (default), props override defaultProps. When `true`, `className` values are concatenated
 *   and `style` objects are merged with props taking precedence.
 * @returns resolved props
 */ function resolveProps(defaultProps, props) {
    let mergeClassNameAndStyle = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    const output = {
        ...props
    };
    for(const key in defaultProps){
        if (Object.prototype.hasOwnProperty.call(defaultProps, key)) {
            const propName = key;
            if (propName === 'components' || propName === 'slots') {
                output[propName] = {
                    ...defaultProps[propName],
                    ...output[propName]
                };
            } else if (propName === 'componentsProps' || propName === 'slotProps') {
                const defaultSlotProps = defaultProps[propName];
                const slotProps = props[propName];
                if (!slotProps) {
                    output[propName] = defaultSlotProps || {};
                } else if (!defaultSlotProps) {
                    output[propName] = slotProps;
                } else {
                    output[propName] = {
                        ...slotProps
                    };
                    for(const slotKey in defaultSlotProps){
                        if (Object.prototype.hasOwnProperty.call(defaultSlotProps, slotKey)) {
                            const slotPropName = slotKey;
                            output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName], mergeClassNameAndStyle);
                        }
                    }
                }
            } else if (propName === 'className' && mergeClassNameAndStyle && props.className) {
                output.className = (0, _clsx.default)(defaultProps === null || defaultProps === void 0 ? void 0 : defaultProps.className, props === null || props === void 0 ? void 0 : props.className);
            } else if (propName === 'style' && mergeClassNameAndStyle && props.style) {
                output.style = {
                    ...defaultProps === null || defaultProps === void 0 ? void 0 : defaultProps.style,
                    ...props === null || props === void 0 ? void 0 : props.style
                };
            } else if (output[propName] === undefined) {
                output[propName] = defaultProps[propName];
            }
        }
    }
    return output;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/resolveProps/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _resolveProps.default;
    }
});
var _resolveProps = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/resolveProps/resolveProps.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useEnhancedEffect/useEnhancedEffect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
/**
 * A version of `React.useLayoutEffect` that does not show a warning when server-side rendering.
 * This is useful for effects that are only needed for client-side rendering but not for SSR.
 *
 * Before you use this hook, make sure to read https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * and confirm it doesn't apply to your use-case.
 */ const useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
var _default = exports.default = useEnhancedEffect;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useEnhancedEffect/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _useEnhancedEffect.default;
    }
});
var _useEnhancedEffect = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useEnhancedEffect/useEnhancedEffect.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/clamp/clamp.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
function clamp(val) {
    let min = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MIN_SAFE_INTEGER, max = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Number.MAX_SAFE_INTEGER;
    return Math.max(min, Math.min(val, max));
}
var _default = exports.default = clamp;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/clamp/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _clamp.default;
    }
});
var _clamp = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/clamp/clamp.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/exactProp/exactProp.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exactProp;
// This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.
const specialProperty = 'exact-prop: \u200b';
function exactProp(propTypes) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return {
        ...propTypes,
        [specialProperty]: (props)=>{
            const unsupportedProps = Object.keys(props).filter((prop)=>!propTypes.hasOwnProperty(prop));
            if (unsupportedProps.length > 0) {
                return new Error("The following props are not supported: ".concat(unsupportedProps.map((prop)=>"`".concat(prop, "`")).join(', '), ". Please remove them."));
            }
            return null;
        }
    };
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/exactProp/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _exactProp.default;
    }
});
var _exactProp = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/exactProp/exactProp.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useId/useId.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = useId;
var React = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
let globalId = 0;
// TODO React 17: Remove `useGlobalId` once React 17 support is removed
function useGlobalId(idOverride) {
    const [defaultId, setDefaultId] = React.useState(idOverride);
    const id = idOverride || defaultId;
    React.useEffect({
        "useGlobalId.useEffect": ()=>{
            if (defaultId == null) {
                // Fallback to this default id when possible.
                // Use the incrementing value for client-side rendering only.
                // We can't use it server-side.
                // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
                globalId += 1;
                setDefaultId("mui-".concat(globalId));
            }
        }
    }["useGlobalId.useEffect"], [
        defaultId
    ]);
    return id;
}
// See https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379 for why
const safeReact = {
    ...React
};
const maybeReactUseId = safeReact.useId;
/**
 *
 * @example <div id={useId()} />
 * @param idOverride
 * @returns {string}
 */ function useId(idOverride) {
    // React.useId() is only available from React 17.0.0.
    if (maybeReactUseId !== undefined) {
        const reactId = maybeReactUseId();
        return idOverride !== null && idOverride !== void 0 ? idOverride : reactId;
    }
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
    return useGlobalId(idOverride);
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useId/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _useId.default;
    }
});
var _useId = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useId/useId.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/composeClasses/composeClasses.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = composeClasses;
/* eslint no-restricted-syntax: 0, prefer-template: 0, guard-for-in: 0
   ---
   These rules are preventing the performance optimizations below.
 */ /**
 * Compose classes from multiple sources.
 *
 * @example
 * ```tsx
 * const slots = {
 *  root: ['root', 'primary'],
 *  label: ['label'],
 * };
 *
 * const getUtilityClass = (slot) => `MuiButton-${slot}`;
 *
 * const classes = {
 *   root: 'my-root-class',
 * };
 *
 * const output = composeClasses(slots, getUtilityClass, classes);
 * // {
 * //   root: 'MuiButton-root MuiButton-primary my-root-class',
 * //   label: 'MuiButton-label',
 * // }
 * ```
 *
 * @param slots a list of classes for each possible slot
 * @param getUtilityClass a function to resolve the class based on the slot name
 * @param classes the input classes from props
 * @returns the resolved classes for all slots
 */ function composeClasses(slots, getUtilityClass) {
    let classes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : undefined;
    const output = {};
    for(const slotName in slots){
        const slot = slots[slotName];
        let buffer = '';
        let start = true;
        for(let i = 0; i < slot.length; i += 1){
            const value = slot[i];
            if (value) {
                buffer += (start === true ? '' : ' ') + getUtilityClass(value);
                start = false;
                if (classes && classes[value]) {
                    buffer += ' ' + classes[value];
                }
            }
        }
        output[slotName] = buffer;
    }
    return output;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/composeClasses/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _composeClasses.default;
    }
});
var _composeClasses = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/composeClasses/composeClasses.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/isMuiElement/isMuiElement.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isMuiElement;
var React = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
function isMuiElement(element, muiNames) {
    var _element_type__payload_value, _element_type__payload, _element_type;
    var // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    _element_type_muiName;
    return /*#__PURE__*/ React.isValidElement(element) && muiNames.indexOf((_element_type_muiName = element.type.muiName) !== null && _element_type_muiName !== void 0 ? _element_type_muiName : (_element_type = element.type) === null || _element_type === void 0 ? void 0 : (_element_type__payload = _element_type._payload) === null || _element_type__payload === void 0 ? void 0 : (_element_type__payload_value = _element_type__payload.value) === null || _element_type__payload_value === void 0 ? void 0 : _element_type__payload_value.muiName) !== -1;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/isMuiElement/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _isMuiElement.default;
    }
});
var _isMuiElement = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/isMuiElement/isMuiElement.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/createChainedFunction/createChainedFunction.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createChainedFunction;
/**
 * Safe chained function.
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 */ function createChainedFunction() {
    for(var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++){
        funcs[_key] = arguments[_key];
    }
    return funcs.reduce((acc, func)=>{
        if (func == null) {
            return acc;
        }
        return function chainedFunction() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            acc.apply(this, args);
            func.apply(this, args);
        };
    }, ()=>{});
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/createChainedFunction/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _createChainedFunction.default;
    }
});
var _createChainedFunction = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/createChainedFunction/createChainedFunction.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/debounce/debounce.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = debounce;
// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce(func) {
    let wait = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 166;
    let timeout;
    function debounced() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        const later = ()=>{
            // @ts-ignore
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    }
    debounced.clear = ()=>{
        clearTimeout(timeout);
    };
    return debounced;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/debounce/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _exportNames = {};
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _debounce.default;
    }
});
var _debounce = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/debounce/debounce.js [app-client] (ecmascript)"));
Object.keys(_debounce).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    if (key in exports && exports[key] === _debounce[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _debounce[key];
        }
    });
});
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/deprecatedPropType/deprecatedPropType.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = deprecatedPropType;
function deprecatedPropType(validator, reason) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return (props, propName, componentName, location, propFullName)=>{
        const componentNameSafe = componentName || '<<anonymous>>';
        const propFullNameSafe = propFullName || propName;
        if (typeof props[propName] !== 'undefined') {
            return new Error("The ".concat(location, " `").concat(propFullNameSafe, "` of ") + "`".concat(componentNameSafe, "` is deprecated. ").concat(reason));
        }
        return null;
    };
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/deprecatedPropType/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _deprecatedPropType.default;
    }
});
var _deprecatedPropType = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/deprecatedPropType/deprecatedPropType.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/ownerDocument/ownerDocument.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ownerDocument;
function ownerDocument(node) {
    return node && node.ownerDocument || document;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/ownerDocument/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _ownerDocument.default;
    }
});
var _ownerDocument = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/ownerDocument/ownerDocument.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/ownerWindow/ownerWindow.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ownerWindow;
var _ownerDocument = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/ownerDocument/index.js [app-client] (ecmascript)"));
function ownerWindow(node) {
    const doc = (0, _ownerDocument.default)(node);
    return doc.defaultView || window;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/ownerWindow/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _ownerWindow.default;
    }
});
var _ownerWindow = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/ownerWindow/ownerWindow.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/requirePropFactory/requirePropFactory.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = requirePropFactory;
function requirePropFactory(componentNameInError, Component) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const prevPropTypes = Component ? {
        ...Component.propTypes
    } : null;
    const requireProp = (requiredProp)=>function(props, propName, componentName, location, propFullName) {
            for(var _len = arguments.length, args = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++){
                args[_key - 5] = arguments[_key];
            }
            const propFullNameSafe = propFullName || propName;
            const defaultTypeChecker = prevPropTypes === null || prevPropTypes === void 0 ? void 0 : prevPropTypes[propFullNameSafe];
            if (defaultTypeChecker) {
                const typeCheckerResult = defaultTypeChecker(props, propName, componentName, location, propFullName, ...args);
                if (typeCheckerResult) {
                    return typeCheckerResult;
                }
            }
            if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
                return new Error("The prop `".concat(propFullNameSafe, "` of ") + "`".concat(componentNameInError, "` can only be used together with the `").concat(requiredProp, "` prop."));
            }
            return null;
        };
    return requireProp;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/requirePropFactory/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _requirePropFactory.default;
    }
});
var _requirePropFactory = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/requirePropFactory/requirePropFactory.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/setRef/setRef.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = setRef;
/**
 * TODO v5: consider making it private
 *
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */ function setRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/setRef/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _setRef.default;
    }
});
var _setRef = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/setRef/setRef.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/unsupportedProp/unsupportedProp.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = unsupportedProp;
function unsupportedProp(props, propName, componentName, location, propFullName) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const propFullNameSafe = propFullName || propName;
    if (typeof props[propName] !== 'undefined') {
        return new Error("The prop `".concat(propFullNameSafe, "` is not supported. Please remove it."));
    }
    return null;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/unsupportedProp/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _unsupportedProp.default;
    }
});
var _unsupportedProp = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/unsupportedProp/unsupportedProp.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useControlled/useControlled.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
'use client';
// TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- process.env never changes, dependency arrays are intentionally ignored
/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */ var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = useControlled;
var React = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
function useControlled(props) {
    const { controlled, default: defaultProp, name, state = 'value' } = props;
    // isControlled is ignored in the hook dependency lists as it should never change.
    const { current: isControlled } = React.useRef(controlled !== undefined);
    const [valueState, setValue] = React.useState(defaultProp);
    const value = isControlled ? controlled : valueState;
    if ("TURBOPACK compile-time truthy", 1) {
        React.useEffect({
            "useControlled.useEffect": ()=>{
                if (isControlled !== (controlled !== undefined)) {
                    console.error([
                        "MUI: A component is changing the ".concat(isControlled ? '' : 'un', "controlled ").concat(state, " state of ").concat(name, " to be ").concat(isControlled ? 'un' : '', "controlled."),
                        'Elements should not switch from uncontrolled to controlled (or vice versa).',
                        "Decide between using a controlled or uncontrolled ".concat(name, " ") + 'element for the lifetime of the component.',
                        "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
                        'More info: https://fb.me/react-controlled-components'
                    ].join('\n'));
                }
            }
        }["useControlled.useEffect"], [
            state,
            name,
            controlled
        ]);
        const { current: defaultValue } = React.useRef(defaultProp);
        React.useEffect({
            "useControlled.useEffect": ()=>{
                if (!isControlled && JSON.stringify(defaultProp) !== JSON.stringify(defaultValue)) {
                    console.error([
                        "MUI: A component is changing the default ".concat(state, " state of an uncontrolled ").concat(name, " after being initialized. ") + "To suppress this warning opt to use a controlled ".concat(name, ".")
                    ].join('\n'));
                }
            }
        }["useControlled.useEffect"], [
            JSON.stringify(defaultProp)
        ]);
    }
    const setValueIfUncontrolled = React.useCallback({
        "useControlled.useCallback[setValueIfUncontrolled]": (newValue)=>{
            if (!isControlled) {
                setValue(newValue);
            }
        }
    }["useControlled.useCallback[setValueIfUncontrolled]"], []);
    // TODO: provide overloads for the useControlled function to account for the case where either
    // controlled or default is not undefined.
    // In that case the return type should be [T, React.Dispatch<React.SetStateAction<T>>]
    // otherwise it should be [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>]
    return [
        value,
        setValueIfUncontrolled
    ];
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useControlled/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _exportNames = {};
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _useControlled.default;
    }
});
var _useControlled = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useControlled/useControlled.js [app-client] (ecmascript)"));
Object.keys(_useControlled).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    if (key in exports && exports[key] === _useControlled[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _useControlled[key];
        }
    });
});
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useEventCallback/useEventCallback.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _useEnhancedEffect = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useEnhancedEffect/index.js [app-client] (ecmascript)"));
/**
 * Inspired by https://github.com/facebook/react/issues/14099#issuecomment-440013892
 * See RFC in https://github.com/reactjs/rfcs/pull/220
 */ function useEventCallback(fn) {
    const ref = React.useRef(fn);
    (0, _useEnhancedEffect.default)(()=>{
        ref.current = fn;
    });
    return React.useRef({
        "useEventCallback.useRef": function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return(// @ts-expect-error hide `this`
            (0, ref.current)(...args));
        }
    }["useEventCallback.useRef"]).current;
}
var _default = exports.default = useEventCallback;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useEventCallback/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _useEventCallback.default;
    }
});
var _useEventCallback = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useEventCallback/useEventCallback.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useForkRef/useForkRef.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = useForkRef;
var React = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
/**
 * Merges refs into a single memoized callback ref or `null`.
 *
 * ```tsx
 * const rootRef = React.useRef<Instance>(null);
 * const refFork = useForkRef(rootRef, props.ref);
 *
 * return (
 *   <Root {...props} ref={refFork} />
 * );
 * ```
 *
 * @param {Array<React.Ref<Instance> | undefined>} refs The ref array.
 * @returns {React.RefCallback<Instance> | null} The new ref callback.
 */ function useForkRef() {
    for(var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++){
        refs[_key] = arguments[_key];
    }
    const cleanupRef = React.useRef(undefined);
    const refEffect = React.useCallback({
        "useForkRef.useCallback[refEffect]": (instance)=>{
            const cleanups = refs.map({
                "useForkRef.useCallback[refEffect].cleanups": (ref)=>{
                    if (ref == null) {
                        return null;
                    }
                    if (typeof ref === 'function') {
                        const refCallback = ref;
                        const refCleanup = refCallback(instance);
                        return typeof refCleanup === 'function' ? refCleanup : ({
                            "useForkRef.useCallback[refEffect].cleanups": ()=>{
                                refCallback(null);
                            }
                        })["useForkRef.useCallback[refEffect].cleanups"];
                    }
                    ref.current = instance;
                    return ({
                        "useForkRef.useCallback[refEffect].cleanups": ()=>{
                            ref.current = null;
                        }
                    })["useForkRef.useCallback[refEffect].cleanups"];
                }
            }["useForkRef.useCallback[refEffect].cleanups"]);
            return ({
                "useForkRef.useCallback[refEffect]": ()=>{
                    cleanups.forEach({
                        "useForkRef.useCallback[refEffect]": (refCleanup)=>refCleanup === null || refCleanup === void 0 ? void 0 : refCleanup()
                    }["useForkRef.useCallback[refEffect]"]);
                }
            })["useForkRef.useCallback[refEffect]"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useForkRef.useCallback[refEffect]"], refs);
    return React.useMemo({
        "useForkRef.useMemo": ()=>{
            if (refs.every({
                "useForkRef.useMemo": (ref)=>ref == null
            }["useForkRef.useMemo"])) {
                return null;
            }
            return ({
                "useForkRef.useMemo": (value)=>{
                    if (cleanupRef.current) {
                        cleanupRef.current();
                        cleanupRef.current = undefined;
                    }
                    if (value != null) {
                        cleanupRef.current = refEffect(value);
                    }
                }
            })["useForkRef.useMemo"];
        // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- intentionally ignoring that the dependency array must be an array literal
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useForkRef.useMemo"], refs);
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useForkRef/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _useForkRef.default;
    }
});
var _useForkRef = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useForkRef/useForkRef.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/chainPropTypes/chainPropTypes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = chainPropTypes;
function chainPropTypes(propType1, propType2) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return function validate() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return propType1(...args) || propType2(...args);
    };
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/chainPropTypes/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _chainPropTypes.default;
    }
});
var _chainPropTypes = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/chainPropTypes/chainPropTypes.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useLazyRef/useLazyRef.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = useLazyRef;
var React = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const UNINITIALIZED = {};
/**
 * A React.useRef() that is initialized lazily with a function. Note that it accepts an optional
 * initialization argument, so the initialization function doesn't need to be an inline closure.
 *
 * @usage
 *   const ref = useLazyRef(sortColumns, columns)
 */ function useLazyRef(init, initArg) {
    const ref = React.useRef(UNINITIALIZED);
    if (ref.current === UNINITIALIZED) {
        ref.current = init(initArg);
    }
    return ref;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useOnMount/useOnMount.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = useOnMount;
var React = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const EMPTY = [];
/**
 * A React.useEffect equivalent that runs once, when the component is mounted.
 */ function useOnMount(fn) {
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- no need to put `fn` in the dependency array
    /* eslint-disable react-hooks/exhaustive-deps */ React.useEffect(fn, EMPTY);
/* eslint-enable react-hooks/exhaustive-deps */ }
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useTimeout/useTimeout.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _define_property = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@swc/helpers/cjs/_define_property.cjs [app-client] (ecmascript)");
var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Timeout = void 0;
exports.default = useTimeout;
var _useLazyRef = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useLazyRef/useLazyRef.js [app-client] (ecmascript)"));
var _useOnMount = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useOnMount/useOnMount.js [app-client] (ecmascript)"));
class Timeout {
    static create() {
        return new Timeout();
    }
    /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */ start(delay, fn) {
        this.clear();
        this.currentId = setTimeout(()=>{
            this.currentId = null;
            fn();
        }, delay);
    }
    constructor(){
        _define_property._(this, "currentId", null);
        _define_property._(this, "clear", ()=>{
            if (this.currentId !== null) {
                clearTimeout(this.currentId);
                this.currentId = null;
            }
        });
        _define_property._(this, "disposeEffect", ()=>{
            return this.clear;
        });
    }
}
exports.Timeout = Timeout;
function useTimeout() {
    const timeout = (0, _useLazyRef.default)(Timeout.create).current;
    (0, _useOnMount.default)(timeout.disposeEffect);
    return timeout;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useTimeout/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Timeout", {
    enumerable: true,
    get: function() {
        return _useTimeout.Timeout;
    }
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _useTimeout.default;
    }
});
var _useTimeout = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useTimeout/useTimeout.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/elementTypeAcceptingRef/elementTypeAcceptingRef.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/prop-types/index.js [app-client] (ecmascript)"));
var _chainPropTypes = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/chainPropTypes/index.js [app-client] (ecmascript)"));
function isClassComponent(elementType) {
    // elementType.prototype?.isReactComponent
    const { prototype = {} } = elementType;
    return Boolean(prototype.isReactComponent);
}
function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
    const propValue = props[propName];
    const safePropName = propFullName || propName;
    if (propValue == null || // When server-side rendering React doesn't warn either.
    // This is not an accurate check for SSR.
    // This is only in place for emotion compat.
    // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
    typeof window === 'undefined') {
        return null;
    }
    let warningHint;
    /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */ if (typeof propValue === 'function' && !isClassComponent(propValue)) {
        warningHint = 'Did you accidentally provide a plain function component instead?';
    }
    if (warningHint !== undefined) {
        return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an element type that can hold a ref. ".concat(warningHint, " ") + 'For more information see https://mui.com/r/caveat-with-refs-guide');
    }
    return null;
}
var _default = exports.default = (0, _chainPropTypes.default)(_propTypes.default.elementType, elementTypeAcceptingRef);
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/elementTypeAcceptingRef/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _elementTypeAcceptingRef.default;
    }
});
var _elementTypeAcceptingRef = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/elementTypeAcceptingRef/elementTypeAcceptingRef.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/integerPropType/integerPropType.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
exports.getTypeByValue = getTypeByValue;
function getTypeByValue(value) {
    const valueType = typeof value;
    switch(valueType){
        case 'number':
            if (Number.isNaN(value)) {
                return 'NaN';
            }
            if (!Number.isFinite(value)) {
                return 'Infinity';
            }
            if (value !== Math.floor(value)) {
                return 'float';
            }
            return 'number';
        case 'object':
            if (value === null) {
                return 'null';
            }
            return value.constructor.name;
        default:
            return valueType;
    }
}
function requiredInteger(props, propName, componentName, location) {
    const propValue = props[propName];
    if (propValue == null || !Number.isInteger(propValue)) {
        const propType = getTypeByValue(propValue);
        return new RangeError("Invalid ".concat(location, " `").concat(propName, "` of type `").concat(propType, "` supplied to `").concat(componentName, "`, expected `integer`."));
    }
    return null;
}
function validator(props, propName, componentName, location) {
    const propValue = props[propName];
    if (propValue === undefined) {
        return null;
    }
    return requiredInteger(props, propName, componentName, location);
}
function validatorNoop() {
    return null;
}
validator.isRequired = requiredInteger;
validatorNoop.isRequired = validatorNoop;
const integerPropType = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : validator;
var _default = exports.default = integerPropType;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/integerPropType/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _exportNames = {};
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _integerPropType.default;
    }
});
var _integerPropType = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/integerPropType/integerPropType.js [app-client] (ecmascript)"));
Object.keys(_integerPropType).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    if (key in exports && exports[key] === _integerPropType[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _integerPropType[key];
        }
    });
});
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/isHostComponent/isHostComponent.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */ function isHostComponent(element) {
    return typeof element === 'string';
}
var _default = exports.default = isHostComponent;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/isHostComponent/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _isHostComponent.default;
    }
});
var _isHostComponent = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/isHostComponent/isHostComponent.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/appendOwnerState/appendOwnerState.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _isHostComponent = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/isHostComponent/index.js [app-client] (ecmascript)"));
/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */ /**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */ function appendOwnerState(elementType, otherProps, ownerState) {
    if (elementType === undefined || (0, _isHostComponent.default)(elementType)) {
        return otherProps;
    }
    return {
        ...otherProps,
        ownerState: {
            ...otherProps.ownerState,
            ...ownerState
        }
    };
}
var _default = exports.default = appendOwnerState;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/appendOwnerState/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _appendOwnerState.default;
    }
});
var _appendOwnerState = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/appendOwnerState/appendOwnerState.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/resolveComponentProps/resolveComponentProps.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */ function resolveComponentProps(componentProps, ownerState, slotState) {
    if (typeof componentProps === 'function') {
        return componentProps(ownerState, slotState);
    }
    return componentProps;
}
var _default = exports.default = resolveComponentProps;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/resolveComponentProps/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _resolveComponentProps.default;
    }
});
var _resolveComponentProps = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/resolveComponentProps/resolveComponentProps.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/extractEventHandlers/extractEventHandlers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 * @param excludeKeys An array of keys to exclude from the returned object.
 */ function extractEventHandlers(object) {
    let excludeKeys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    if (object === undefined) {
        return {};
    }
    const result = {};
    Object.keys(object).filter((prop)=>prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach((prop)=>{
        result[prop] = object[prop];
    });
    return result;
}
var _default = exports.default = extractEventHandlers;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/extractEventHandlers/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _extractEventHandlers.default;
    }
});
var _extractEventHandlers = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/extractEventHandlers/extractEventHandlers.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/omitEventHandlers/omitEventHandlers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */ function omitEventHandlers(object) {
    if (object === undefined) {
        return {};
    }
    const result = {};
    Object.keys(object).filter((prop)=>!(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach((prop)=>{
        result[prop] = object[prop];
    });
    return result;
}
var _default = exports.default = omitEventHandlers;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/omitEventHandlers/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _omitEventHandlers.default;
    }
});
var _omitEventHandlers = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/omitEventHandlers/omitEventHandlers.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/mergeSlotProps/mergeSlotProps.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _clsx = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/clsx/dist/clsx.js [app-client] (ecmascript)"));
var _extractEventHandlers = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/extractEventHandlers/index.js [app-client] (ecmascript)"));
var _omitEventHandlers = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/omitEventHandlers/index.js [app-client] (ecmascript)"));
/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on a Base UI component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `slotProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */ function mergeSlotProps(parameters) {
    const { getSlotProps, additionalProps, externalSlotProps, externalForwardedProps, className } = parameters;
    if (!getSlotProps) {
        // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
        // so we can simply merge all the props without having to worry about extracting event handlers.
        const joinedClasses = (0, _clsx.default)(additionalProps === null || additionalProps === void 0 ? void 0 : additionalProps.className, className, externalForwardedProps === null || externalForwardedProps === void 0 ? void 0 : externalForwardedProps.className, externalSlotProps === null || externalSlotProps === void 0 ? void 0 : externalSlotProps.className);
        const mergedStyle = {
            ...additionalProps === null || additionalProps === void 0 ? void 0 : additionalProps.style,
            ...externalForwardedProps === null || externalForwardedProps === void 0 ? void 0 : externalForwardedProps.style,
            ...externalSlotProps === null || externalSlotProps === void 0 ? void 0 : externalSlotProps.style
        };
        const props = {
            ...additionalProps,
            ...externalForwardedProps,
            ...externalSlotProps
        };
        if (joinedClasses.length > 0) {
            props.className = joinedClasses;
        }
        if (Object.keys(mergedStyle).length > 0) {
            props.style = mergedStyle;
        }
        return {
            props,
            internalRef: undefined
        };
    }
    // In this case, getSlotProps is responsible for calling the external event handlers.
    // We don't need to include them in the merged props because of this.
    const eventHandlers = (0, _extractEventHandlers.default)({
        ...externalForwardedProps,
        ...externalSlotProps
    });
    const componentsPropsWithoutEventHandlers = (0, _omitEventHandlers.default)(externalSlotProps);
    const otherPropsWithoutEventHandlers = (0, _omitEventHandlers.default)(externalForwardedProps);
    const internalSlotProps = getSlotProps(eventHandlers);
    // The order of classes is important here.
    // Emotion (that we use in libraries consuming Base UI) depends on this order
    // to properly override style. It requires the most important classes to be last
    // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
    const joinedClasses = (0, _clsx.default)(internalSlotProps === null || internalSlotProps === void 0 ? void 0 : internalSlotProps.className, additionalProps === null || additionalProps === void 0 ? void 0 : additionalProps.className, className, externalForwardedProps === null || externalForwardedProps === void 0 ? void 0 : externalForwardedProps.className, externalSlotProps === null || externalSlotProps === void 0 ? void 0 : externalSlotProps.className);
    const mergedStyle = {
        ...internalSlotProps === null || internalSlotProps === void 0 ? void 0 : internalSlotProps.style,
        ...additionalProps === null || additionalProps === void 0 ? void 0 : additionalProps.style,
        ...externalForwardedProps === null || externalForwardedProps === void 0 ? void 0 : externalForwardedProps.style,
        ...externalSlotProps === null || externalSlotProps === void 0 ? void 0 : externalSlotProps.style
    };
    const props = {
        ...internalSlotProps,
        ...additionalProps,
        ...otherPropsWithoutEventHandlers,
        ...componentsPropsWithoutEventHandlers
    };
    if (joinedClasses.length > 0) {
        props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
        props.style = mergedStyle;
    }
    return {
        props,
        internalRef: internalSlotProps.ref
    };
}
var _default = exports.default = mergeSlotProps;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/mergeSlotProps/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _mergeSlotProps.default;
    }
});
var _mergeSlotProps = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/mergeSlotProps/mergeSlotProps.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/refType/refType.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/prop-types/index.js [app-client] (ecmascript)"));
const refType = _propTypes.default.oneOfType([
    _propTypes.default.func,
    _propTypes.default.object
]);
var _default = exports.default = refType;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/refType/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _refType.default;
    }
});
var _refType = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/refType/refType.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/isFocusVisible/isFocusVisible.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isFocusVisible;
/**
 * Returns a boolean indicating if the event's target has :focus-visible
 */ function isFocusVisible(element) {
    try {
        return element.matches(':focus-visible');
    } catch (error) {
        // Do not warn on jsdom tests, otherwise all tests that rely on focus have to be skipped
        // Tests that rely on `:focus-visible` will still have to be skipped in jsdom
        if (("TURBOPACK compile-time value", "development") !== 'production' && !/jsdom/.test(window.navigator.userAgent)) {
            console.warn([
                'MUI: The `:focus-visible` pseudo class is not supported in this browser.',
                'Some components rely on this feature to work properly.'
            ].join('\n'));
        }
    }
    return false;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/isFocusVisible/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _isFocusVisible.default;
    }
});
var _isFocusVisible = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/isFocusVisible/isFocusVisible.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useLazyRef/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _useLazyRef.default;
    }
});
var _useLazyRef = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useLazyRef/useLazyRef.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/usePreviousProps/usePreviousProps.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const usePreviousProps = (value)=>{
    const ref = React.useRef({});
    React.useEffect({
        "usePreviousProps.useEffect": ()=>{
            ref.current = value;
        }
    }["usePreviousProps.useEffect"]);
    return ref.current;
};
var _default = exports.default = usePreviousProps;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/usePreviousProps/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _usePreviousProps.default;
    }
});
var _usePreviousProps = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/usePreviousProps/usePreviousProps.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/HTMLElementType/HTMLElementType.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$countries$2d$nextjs$2d$react25k$2d$testing$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = HTMLElementType;
function HTMLElementType(props, propName, componentName, location, propFullName) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const propValue = props[propName];
    const safePropName = propFullName || propName;
    if (propValue == null) {
        return null;
    }
    if (propValue && propValue.nodeType !== 1) {
        return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an HTMLElement.");
    }
    return null;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/HTMLElementType/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _HTMLElementType.default;
    }
});
var _HTMLElementType = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/HTMLElementType/HTMLElementType.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useSlotProps/useSlotProps.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _useForkRef = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useForkRef/index.js [app-client] (ecmascript)"));
var _appendOwnerState = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/appendOwnerState/index.js [app-client] (ecmascript)"));
var _mergeSlotProps = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/mergeSlotProps/index.js [app-client] (ecmascript)"));
var _resolveComponentProps = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/resolveComponentProps/index.js [app-client] (ecmascript)"));
/**
 * @ignore - do not document.
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */ function useSlotProps(parameters) {
    var _parameters_additionalProps;
    const { elementType, externalSlotProps, ownerState, skipResolvingSlotProps = false, ...other } = parameters;
    const resolvedComponentsProps = skipResolvingSlotProps ? {} : (0, _resolveComponentProps.default)(externalSlotProps, ownerState);
    const { props: mergedProps, internalRef } = (0, _mergeSlotProps.default)({
        ...other,
        externalSlotProps: resolvedComponentsProps
    });
    const ref = (0, _useForkRef.default)(internalRef, resolvedComponentsProps === null || resolvedComponentsProps === void 0 ? void 0 : resolvedComponentsProps.ref, (_parameters_additionalProps = parameters.additionalProps) === null || _parameters_additionalProps === void 0 ? void 0 : _parameters_additionalProps.ref);
    const props = (0, _appendOwnerState.default)(elementType, {
        ...mergedProps,
        ref
    }, ownerState);
    return props;
}
var _default = exports.default = useSlotProps;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useSlotProps/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _useSlotProps.default;
    }
});
var _useSlotProps = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/useSlotProps/useSlotProps.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/getReactElementRef/getReactElementRef.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getReactElementRef;
var React = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
/**
 * Returns the ref of a React element handling differences between React 19 and older versions.
 * It will throw runtime error if the element is not a valid React element.
 *
 * @param element React.ReactElement
 * @returns React.Ref<any> | null
 */ function getReactElementRef(element) {
    // 'ref' is passed as prop in React 19, whereas 'ref' is directly attached to children in older versions
    if (parseInt(React.version, 10) >= 19) {
        var _element_props;
        return (element === null || element === void 0 ? void 0 : (_element_props = element.props) === null || _element_props === void 0 ? void 0 : _element_props.ref) || null;
    }
    // @ts-expect-error element.ref is not included in the ReactElement type
    // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
    return (element === null || element === void 0 ? void 0 : element.ref) || null;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/getReactElementRef/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _getReactElementRef.default;
    }
});
var _getReactElementRef = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/getReactElementRef/getReactElementRef.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/elementAcceptingRef/elementAcceptingRef.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/prop-types/index.js [app-client] (ecmascript)"));
var _chainPropTypes = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/chainPropTypes/index.js [app-client] (ecmascript)"));
function isClassComponent(elementType) {
    // elementType.prototype?.isReactComponent
    const { prototype = {} } = elementType;
    return Boolean(prototype.isReactComponent);
}
function acceptingRef(props, propName, componentName, location, propFullName) {
    const element = props[propName];
    const safePropName = propFullName || propName;
    if (element == null || // When server-side rendering React doesn't warn either.
    // This is not an accurate check for SSR.
    // This is only in place for Emotion compat.
    // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
    typeof window === 'undefined') {
        return null;
    }
    let warningHint;
    const elementType = element.type;
    /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */ if (typeof elementType === 'function' && !isClassComponent(elementType)) {
        warningHint = 'Did you accidentally use a plain function component for an element instead?';
    }
    if (warningHint !== undefined) {
        return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an element that can hold a ref. ".concat(warningHint, " ") + 'For more information see https://mui.com/r/caveat-with-refs-guide');
    }
    return null;
}
const elementAcceptingRef = (0, _chainPropTypes.default)(_propTypes.default.element, acceptingRef);
elementAcceptingRef.isRequired = (0, _chainPropTypes.default)(_propTypes.default.element.isRequired, acceptingRef);
var _default = exports.default = elementAcceptingRef;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/elementAcceptingRef/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _elementAcceptingRef.default;
    }
});
var _elementAcceptingRef = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/elementAcceptingRef/elementAcceptingRef.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/getValidReactChildren/getValidReactChildren.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getValidReactChildren;
var React = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
/**
 * Gets only the valid children of a component,
 * and ignores any nullish or falsy child.
 *
 * @param children the children
 */ function getValidReactChildren(children) {
    return React.Children.toArray(children).filter((child)=>/*#__PURE__*/ React.isValidElement(child));
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/getValidReactChildren/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _getValidReactChildren.default;
    }
});
var _getValidReactChildren = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/getValidReactChildren/getValidReactChildren.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/getScrollbarSize/getScrollbarSize.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getScrollbarSize;
// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
function getScrollbarSize() {
    let win = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window;
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = win.document.documentElement.clientWidth;
    return win.innerWidth - documentWidth;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/getScrollbarSize/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _getScrollbarSize.default;
    }
});
var _getScrollbarSize = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/getScrollbarSize/getScrollbarSize.js [app-client] (ecmascript)"));
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/visuallyHidden/visuallyHidden.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
const visuallyHidden = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
};
var _default = exports.default = visuallyHidden;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/visuallyHidden/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _visuallyHidden.default;
    }
});
var _visuallyHidden = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/visuallyHidden/visuallyHidden.js [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=9fe60_%40mui_utils_31ce3059._.js.map