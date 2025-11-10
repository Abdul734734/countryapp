module.exports = [
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/identifier.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _default = exports.default = '$$material';
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/adaptV4Theme.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = adaptV4Theme;
var _system = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/system/index.js [app-ssr] (ecmascript)");
function adaptV4Theme(inputTheme) {
    if ("TURBOPACK compile-time truthy", 1) {
        console.warn([
            'MUI: adaptV4Theme() is deprecated.',
            'Follow the upgrade guide on https://mui.com/r/migration-v4#theme.'
        ].join('\n'));
    }
    const { defaultProps = {}, mixins = {}, overrides = {}, palette = {}, props = {}, styleOverrides = {}, ...other } = inputTheme;
    const theme = {
        ...other,
        components: {}
    };
    // default props
    Object.keys(defaultProps).forEach((component)=>{
        const componentValue = theme.components[component] || {};
        componentValue.defaultProps = defaultProps[component];
        theme.components[component] = componentValue;
    });
    Object.keys(props).forEach((component)=>{
        const componentValue = theme.components[component] || {};
        componentValue.defaultProps = props[component];
        theme.components[component] = componentValue;
    });
    // CSS overrides
    Object.keys(styleOverrides).forEach((component)=>{
        const componentValue = theme.components[component] || {};
        componentValue.styleOverrides = styleOverrides[component];
        theme.components[component] = componentValue;
    });
    Object.keys(overrides).forEach((component)=>{
        const componentValue = theme.components[component] || {};
        componentValue.styleOverrides = overrides[component];
        theme.components[component] = componentValue;
    });
    // theme.spacing
    theme.spacing = (0, _system.createSpacing)(inputTheme.spacing);
    // theme.mixins.gutters
    const breakpoints = (0, _system.createBreakpoints)(inputTheme.breakpoints || {});
    const spacing = theme.spacing;
    theme.mixins = {
        gutters: (styles = {})=>{
            return {
                paddingLeft: spacing(2),
                paddingRight: spacing(2),
                ...styles,
                [breakpoints.up('sm')]: {
                    paddingLeft: spacing(3),
                    paddingRight: spacing(3),
                    ...styles[breakpoints.up('sm')]
                }
            };
        },
        ...mixins
    };
    const { type: typeInput, mode: modeInput, ...paletteRest } = palette;
    const finalMode = modeInput || typeInput || 'light';
    theme.palette = {
        // theme.palette.text.hint
        text: {
            hint: finalMode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.38)'
        },
        mode: finalMode,
        type: finalMode,
        ...paletteRest
    };
    return theme;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createPalette.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-ssr] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.contrastColor = contrastColor;
exports.dark = void 0;
exports.default = createPalette;
exports.light = void 0;
var _formatMuiErrorMessage = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/formatMuiErrorMessage/index.js [app-ssr] (ecmascript)"));
var _deepmerge = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/deepmerge/index.js [app-ssr] (ecmascript)"));
var _colorManipulator = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/system/colorManipulator/index.js [app-ssr] (ecmascript)");
var _common = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/colors/common.js [app-ssr] (ecmascript)"));
var _grey = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/colors/grey.js [app-ssr] (ecmascript)"));
var _purple = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/colors/purple.js [app-ssr] (ecmascript)"));
var _red = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/colors/red.js [app-ssr] (ecmascript)"));
var _orange = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/colors/orange.js [app-ssr] (ecmascript)"));
var _blue = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/colors/blue.js [app-ssr] (ecmascript)"));
var _lightBlue = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/colors/lightBlue.js [app-ssr] (ecmascript)"));
var _green = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/colors/green.js [app-ssr] (ecmascript)"));
function getLight() {
    return {
        // The colors used to style the text.
        text: {
            // The most important text.
            primary: 'rgba(0, 0, 0, 0.87)',
            // Secondary text.
            secondary: 'rgba(0, 0, 0, 0.6)',
            // Disabled text have even lower visual prominence.
            disabled: 'rgba(0, 0, 0, 0.38)'
        },
        // The color used to divide different elements.
        divider: 'rgba(0, 0, 0, 0.12)',
        // The background colors used to style the surfaces.
        // Consistency between these values is important.
        background: {
            paper: _common.default.white,
            default: _common.default.white
        },
        // The colors used to style the action elements.
        action: {
            // The color of an active action like an icon button.
            active: 'rgba(0, 0, 0, 0.54)',
            // The color of an hovered action.
            hover: 'rgba(0, 0, 0, 0.04)',
            hoverOpacity: 0.04,
            // The color of a selected action.
            selected: 'rgba(0, 0, 0, 0.08)',
            selectedOpacity: 0.08,
            // The color of a disabled action.
            disabled: 'rgba(0, 0, 0, 0.26)',
            // The background color of a disabled action.
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
            disabledOpacity: 0.38,
            focus: 'rgba(0, 0, 0, 0.12)',
            focusOpacity: 0.12,
            activatedOpacity: 0.12
        }
    };
}
const light = exports.light = getLight();
function getDark() {
    return {
        text: {
            primary: _common.default.white,
            secondary: 'rgba(255, 255, 255, 0.7)',
            disabled: 'rgba(255, 255, 255, 0.5)',
            icon: 'rgba(255, 255, 255, 0.5)'
        },
        divider: 'rgba(255, 255, 255, 0.12)',
        background: {
            paper: '#121212',
            default: '#121212'
        },
        action: {
            active: _common.default.white,
            hover: 'rgba(255, 255, 255, 0.08)',
            hoverOpacity: 0.08,
            selected: 'rgba(255, 255, 255, 0.16)',
            selectedOpacity: 0.16,
            disabled: 'rgba(255, 255, 255, 0.3)',
            disabledBackground: 'rgba(255, 255, 255, 0.12)',
            disabledOpacity: 0.38,
            focus: 'rgba(255, 255, 255, 0.12)',
            focusOpacity: 0.12,
            activatedOpacity: 0.24
        }
    };
}
const dark = exports.dark = getDark();
function addLightOrDark(intent, direction, shade, tonalOffset) {
    const tonalOffsetLight = tonalOffset.light || tonalOffset;
    const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
    if (!intent[direction]) {
        if (intent.hasOwnProperty(shade)) {
            intent[direction] = intent[shade];
        } else if (direction === 'light') {
            intent.light = (0, _colorManipulator.lighten)(intent.main, tonalOffsetLight);
        } else if (direction === 'dark') {
            intent.dark = (0, _colorManipulator.darken)(intent.main, tonalOffsetDark);
        }
    }
}
function mixLightOrDark(colorSpace, intent, direction, shade, tonalOffset) {
    const tonalOffsetLight = tonalOffset.light || tonalOffset;
    const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
    if (!intent[direction]) {
        if (intent.hasOwnProperty(shade)) {
            intent[direction] = intent[shade];
        } else if (direction === 'light') {
            intent.light = `color-mix(in ${colorSpace}, ${intent.main}, #fff ${(tonalOffsetLight * 100).toFixed(0)}%)`;
        } else if (direction === 'dark') {
            intent.dark = `color-mix(in ${colorSpace}, ${intent.main}, #000 ${(tonalOffsetDark * 100).toFixed(0)}%)`;
        }
    }
}
function getDefaultPrimary(mode = 'light') {
    if (mode === 'dark') {
        return {
            main: _blue.default[200],
            light: _blue.default[50],
            dark: _blue.default[400]
        };
    }
    return {
        main: _blue.default[700],
        light: _blue.default[400],
        dark: _blue.default[800]
    };
}
function getDefaultSecondary(mode = 'light') {
    if (mode === 'dark') {
        return {
            main: _purple.default[200],
            light: _purple.default[50],
            dark: _purple.default[400]
        };
    }
    return {
        main: _purple.default[500],
        light: _purple.default[300],
        dark: _purple.default[700]
    };
}
function getDefaultError(mode = 'light') {
    if (mode === 'dark') {
        return {
            main: _red.default[500],
            light: _red.default[300],
            dark: _red.default[700]
        };
    }
    return {
        main: _red.default[700],
        light: _red.default[400],
        dark: _red.default[800]
    };
}
function getDefaultInfo(mode = 'light') {
    if (mode === 'dark') {
        return {
            main: _lightBlue.default[400],
            light: _lightBlue.default[300],
            dark: _lightBlue.default[700]
        };
    }
    return {
        main: _lightBlue.default[700],
        light: _lightBlue.default[500],
        dark: _lightBlue.default[900]
    };
}
function getDefaultSuccess(mode = 'light') {
    if (mode === 'dark') {
        return {
            main: _green.default[400],
            light: _green.default[300],
            dark: _green.default[700]
        };
    }
    return {
        main: _green.default[800],
        light: _green.default[500],
        dark: _green.default[900]
    };
}
function getDefaultWarning(mode = 'light') {
    if (mode === 'dark') {
        return {
            main: _orange.default[400],
            light: _orange.default[300],
            dark: _orange.default[700]
        };
    }
    return {
        main: '#ed6c02',
        // closest to orange[800] that pass 3:1.
        light: _orange.default[500],
        dark: _orange.default[900]
    };
}
// Use the same name as the experimental CSS `contrast-color` function.
function contrastColor(background) {
    return `oklch(from ${background} var(--__l) 0 h / var(--__a))`;
}
function createPalette(palette) {
    const { mode = 'light', contrastThreshold = 3, tonalOffset = 0.2, colorSpace, ...other } = palette;
    const primary = palette.primary || getDefaultPrimary(mode);
    const secondary = palette.secondary || getDefaultSecondary(mode);
    const error = palette.error || getDefaultError(mode);
    const info = palette.info || getDefaultInfo(mode);
    const success = palette.success || getDefaultSuccess(mode);
    const warning = palette.warning || getDefaultWarning(mode);
    // Use the same logic as
    // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
    // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
    function getContrastText(background) {
        if (colorSpace) {
            return contrastColor(background);
        }
        const contrastText = (0, _colorManipulator.getContrastRatio)(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
        if ("TURBOPACK compile-time truthy", 1) {
            const contrast = (0, _colorManipulator.getContrastRatio)(background, contrastText);
            if (contrast < 3) {
                console.error([
                    `MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`,
                    'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.',
                    'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'
                ].join('\n'));
            }
        }
        return contrastText;
    }
    const augmentColor = ({ color, name, mainShade = 500, lightShade = 300, darkShade = 700 })=>{
        color = {
            ...color
        };
        if (!color.main && color[mainShade]) {
            color.main = color[mainShade];
        }
        if (!color.hasOwnProperty('main')) {
            throw new Error(("TURBOPACK compile-time truthy", 1) ? `MUI: The color${name ? ` (${name})` : ''} provided to augmentColor(color) is invalid.\n` + `The color object needs to have a \`main\` property or a \`${mainShade}\` property.` : "TURBOPACK unreachable");
        }
        if (typeof color.main !== 'string') {
            throw new Error(("TURBOPACK compile-time truthy", 1) ? `MUI: The color${name ? ` (${name})` : ''} provided to augmentColor(color) is invalid.\n` + `\`color.main\` should be a string, but \`${JSON.stringify(color.main)}\` was provided instead.\n` + '\n' + 'Did you intend to use one of the following approaches?\n' + '\n' + 'import { green } from "@mui/material/colors";\n' + '\n' + 'const theme1 = createTheme({ palette: {\n' + '  primary: green,\n' + '} });\n' + '\n' + 'const theme2 = createTheme({ palette: {\n' + '  primary: { main: green[500] },\n' + '} });' : "TURBOPACK unreachable");
        }
        if (colorSpace) {
            mixLightOrDark(colorSpace, color, 'light', lightShade, tonalOffset);
            mixLightOrDark(colorSpace, color, 'dark', darkShade, tonalOffset);
        } else {
            addLightOrDark(color, 'light', lightShade, tonalOffset);
            addLightOrDark(color, 'dark', darkShade, tonalOffset);
        }
        if (!color.contrastText) {
            color.contrastText = getContrastText(color.main);
        }
        return color;
    };
    let modeHydrated;
    if (mode === 'light') {
        modeHydrated = getLight();
    } else if (mode === 'dark') {
        modeHydrated = getDark();
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (!modeHydrated) {
            console.error(`MUI: The palette mode \`${mode}\` is not supported.`);
        }
    }
    const paletteOutput = (0, _deepmerge.default)({
        // A collection of common colors.
        common: {
            ..._common.default
        },
        // prevent mutable object.
        // The palette mode, can be light or dark.
        mode,
        // The colors used to represent primary interface elements for a user.
        primary: augmentColor({
            color: primary,
            name: 'primary'
        }),
        // The colors used to represent secondary interface elements for a user.
        secondary: augmentColor({
            color: secondary,
            name: 'secondary',
            mainShade: 'A400',
            lightShade: 'A200',
            darkShade: 'A700'
        }),
        // The colors used to represent interface elements that the user should be made aware of.
        error: augmentColor({
            color: error,
            name: 'error'
        }),
        // The colors used to represent potentially dangerous actions or important messages.
        warning: augmentColor({
            color: warning,
            name: 'warning'
        }),
        // The colors used to present information to the user that is neutral and not necessarily important.
        info: augmentColor({
            color: info,
            name: 'info'
        }),
        // The colors used to indicate the successful completion of an action that user triggered.
        success: augmentColor({
            color: success,
            name: 'success'
        }),
        // The grey colors.
        grey: _grey.default,
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold,
        // Takes a background color and returns the text color that maximizes the contrast.
        getContrastText,
        // Generate a rich color object.
        augmentColor,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset,
        // The light and dark mode object.
        ...modeHydrated
    }, other);
    return paletteOutput;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createMixins.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createMixins;
function createMixins(breakpoints, mixins) {
    return {
        toolbar: {
            minHeight: 56,
            [breakpoints.up('xs')]: {
                '@media (orientation: landscape)': {
                    minHeight: 48
                }
            },
            [breakpoints.up('sm')]: {
                minHeight: 64
            }
        },
        ...mixins
    };
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createTypography.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-ssr] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createTypography;
var _deepmerge = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/deepmerge/index.js [app-ssr] (ecmascript)"));
function round(value) {
    return Math.round(value * 1e5) / 1e5;
}
const caseAllCaps = {
    textTransform: 'uppercase'
};
const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://m2.material.io/design/typography/the-type-system.html}
 * @see @link{https://m2.material.io/design/typography/understanding-typography.html}
 */ function createTypography(palette, typography) {
    const { fontFamily = defaultFontFamily, // The default font size of the Material Specification.
    fontSize = 14, // px
    fontWeightLight = 300, fontWeightRegular = 400, fontWeightMedium = 500, fontWeightBold = 700, // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16, // Apply the CSS properties to all the variants.
    allVariants, pxToRem: pxToRem2, ...other } = typeof typography === 'function' ? typography(palette) : typography;
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof fontSize !== 'number') {
            console.error('MUI: `fontSize` is required to be a number.');
        }
        if (typeof htmlFontSize !== 'number') {
            console.error('MUI: `htmlFontSize` is required to be a number.');
        }
    }
    const coef = fontSize / 14;
    const pxToRem = pxToRem2 || ((size)=>`${size / htmlFontSize * coef}rem`);
    const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing)=>({
            fontFamily,
            fontWeight,
            fontSize: pxToRem(size),
            // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
            lineHeight,
            // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
            // across font-families can cause issues with the kerning.
            ...fontFamily === defaultFontFamily ? {
                letterSpacing: `${round(letterSpacing / size)}em`
            } : {},
            ...casing,
            ...allVariants
        });
    const variants = {
        h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
        h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
        h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
        h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
        h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
        h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
        subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
        subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
        body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
        body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
        button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
        caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
        overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
        // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
        inherit: {
            fontFamily: 'inherit',
            fontWeight: 'inherit',
            fontSize: 'inherit',
            lineHeight: 'inherit',
            letterSpacing: 'inherit'
        }
    };
    return (0, _deepmerge.default)({
        htmlFontSize,
        pxToRem,
        fontFamily,
        fontSize,
        fontWeightLight,
        fontWeightRegular,
        fontWeightMedium,
        fontWeightBold,
        ...variants
    }, other, {
        clone: false // No need to clone deep
    });
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/shadows.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;
function createShadow(...px) {
    return [
        `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`,
        `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`,
        `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`
    ].join(',');
}
// Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss
const shadows = [
    'none',
    createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
];
var _default = exports.default = shadows;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createTransitions.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createTransitions;
exports.easing = exports.duration = void 0;
// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
const easing = exports.easing = {
    // This is the most common easing curve.
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
};
// Follow https://m2.material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing
const duration = exports.duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195
};
function formatMs(milliseconds) {
    return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height) {
    if (!height) {
        return 0;
    }
    const constant = height / 36;
    // https://www.desmos.com/calculator/vbrp3ggqet
    return Math.min(Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10), 3000);
}
function createTransitions(inputTransitions) {
    const mergedEasing = {
        ...easing,
        ...inputTransitions.easing
    };
    const mergedDuration = {
        ...duration,
        ...inputTransitions.duration
    };
    const create = (props = [
        'all'
    ], options = {})=>{
        const { duration: durationOption = mergedDuration.standard, easing: easingOption = mergedEasing.easeInOut, delay = 0, ...other } = options;
        if ("TURBOPACK compile-time truthy", 1) {
            const isString = (value)=>typeof value === 'string';
            const isNumber = (value)=>!Number.isNaN(parseFloat(value));
            if (!isString(props) && !Array.isArray(props)) {
                console.error('MUI: Argument "props" must be a string or Array.');
            }
            if (!isNumber(durationOption) && !isString(durationOption)) {
                console.error(`MUI: Argument "duration" must be a number or a string but found ${durationOption}.`);
            }
            if (!isString(easingOption)) {
                console.error('MUI: Argument "easing" must be a string.');
            }
            if (!isNumber(delay) && !isString(delay)) {
                console.error('MUI: Argument "delay" must be a number or a string.');
            }
            if (typeof options !== 'object') {
                console.error([
                    'MUI: Secong argument of transition.create must be an object.',
                    "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"
                ].join('\n'));
            }
            if (Object.keys(other).length !== 0) {
                console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(',')}].`);
            }
        }
        return (Array.isArray(props) ? props : [
            props
        ]).map((animatedProp)=>`${animatedProp} ${typeof durationOption === 'string' ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`).join(',');
    };
    return {
        getAutoHeightDuration,
        create,
        ...inputTransitions,
        easing: mergedEasing,
        duration: mergedDuration
    };
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/zIndex.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
const zIndex = {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
};
var _default = exports.default = zIndex;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/stringifyTheme.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stringifyTheme = stringifyTheme;
var _deepmerge = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/deepmerge/index.js [app-ssr] (ecmascript)");
/* eslint-disable import/prefer-default-export */ function isSerializable(val) {
    return (0, _deepmerge.isPlainObject)(val) || typeof val === 'undefined' || typeof val === 'string' || typeof val === 'boolean' || typeof val === 'number' || Array.isArray(val);
}
/**
 * `baseTheme` usually comes from `createTheme()` or `extendTheme()`.
 *
 * This function is intended to be used with zero-runtime CSS-in-JS like Pigment CSS
 * For example, in a Next.js project:
 *
 * ```js
 * // next.config.js
 * const { extendTheme } = require('@mui/material/styles');
 *
 * const theme = extendTheme();
 * // `.toRuntimeSource` is Pigment CSS specific to create a theme that is available at runtime.
 * theme.toRuntimeSource = stringifyTheme;
 *
 * module.exports = withPigment({
 *  theme,
 * });
 * ```
 */ function stringifyTheme(baseTheme = {}) {
    const serializableTheme = {
        ...baseTheme
    };
    function serializeTheme(object) {
        const array = Object.entries(object);
        // eslint-disable-next-line no-plusplus
        for(let index = 0; index < array.length; index++){
            const [key, value] = array[index];
            if (!isSerializable(value) || key.startsWith('unstable_')) {
                delete object[key];
            } else if ((0, _deepmerge.isPlainObject)(value)) {
                object[key] = {
                    ...value
                };
                serializeTheme(object[key]);
            }
        }
    }
    serializeTheme(serializableTheme);
    return `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(serializableTheme, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createThemeNoVars.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-ssr] (ecmascript)").default;
var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-ssr] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _formatMuiErrorMessage = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/formatMuiErrorMessage/index.js [app-ssr] (ecmascript)"));
var _deepmerge = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/deepmerge/index.js [app-ssr] (ecmascript)"));
var _styleFunctionSx = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/system/styleFunctionSx/index.js [app-ssr] (ecmascript)"));
var _createTheme = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/system/createTheme/index.js [app-ssr] (ecmascript)"));
var _colorManipulator = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/system/colorManipulator/index.js [app-ssr] (ecmascript)");
var _generateUtilityClass = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/generateUtilityClass/index.js [app-ssr] (ecmascript)"));
var _createMixins = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createMixins.js [app-ssr] (ecmascript)"));
var _createPalette = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createPalette.js [app-ssr] (ecmascript)"));
var _createTypography = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createTypography.js [app-ssr] (ecmascript)"));
var _shadows = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/shadows.js [app-ssr] (ecmascript)"));
var _createTransitions = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createTransitions.js [app-ssr] (ecmascript)"));
var _zIndex = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/zIndex.js [app-ssr] (ecmascript)"));
var _stringifyTheme = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/stringifyTheme.js [app-ssr] (ecmascript)");
function coefficientToPercentage(coefficient) {
    if (typeof coefficient === 'number') {
        return `${(coefficient * 100).toFixed(0)}%`;
    }
    return `calc((${coefficient}) * 100%)`;
}
// This can be removed when moved to `color-mix()` entirely.
const parseAddition = (str)=>{
    if (!Number.isNaN(+str)) {
        return +str;
    }
    const numbers = str.match(/\d*\.?\d+/g);
    if (!numbers) {
        return 0;
    }
    let sum = 0;
    for(let i = 0; i < numbers.length; i += 1){
        sum += +numbers[i];
    }
    return sum;
};
function attachColorManipulators(theme) {
    Object.assign(theme, {
        alpha (color, coefficient) {
            const obj = this || theme;
            if (obj.colorSpace) {
                return `oklch(from ${color} l c h / ${typeof coefficient === 'string' ? `calc(${coefficient})` : coefficient})`;
            }
            if (obj.vars) {
                // To preserve the behavior of the CSS theme variables
                // In the future, this could be replaced by `color-mix` (when https://caniuse.com/?search=color-mix reaches 95%).
                return `rgba(${color.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, 'var(--$1Channel)')} / ${typeof coefficient === 'string' ? `calc(${coefficient})` : coefficient})`;
            }
            return (0, _colorManipulator.alpha)(color, parseAddition(coefficient));
        },
        lighten (color, coefficient) {
            const obj = this || theme;
            if (obj.colorSpace) {
                return `color-mix(in ${obj.colorSpace}, ${color}, #fff ${coefficientToPercentage(coefficient)})`;
            }
            return (0, _colorManipulator.lighten)(color, coefficient);
        },
        darken (color, coefficient) {
            const obj = this || theme;
            if (obj.colorSpace) {
                return `color-mix(in ${obj.colorSpace}, ${color}, #000 ${coefficientToPercentage(coefficient)})`;
            }
            return (0, _colorManipulator.darken)(color, coefficient);
        }
    });
}
function createThemeNoVars(options = {}, ...args) {
    const { breakpoints: breakpointsInput, mixins: mixinsInput = {}, spacing: spacingInput, palette: paletteInput = {}, transitions: transitionsInput = {}, typography: typographyInput = {}, shape: shapeInput, colorSpace, ...other } = options;
    if (options.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
    // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
    options.generateThemeVars === undefined) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'MUI: `vars` is a private field used for CSS variables support.\n' + // #host-reference
        'Please use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature.' : "TURBOPACK unreachable");
    }
    const palette = (0, _createPalette.default)({
        ...paletteInput,
        colorSpace
    });
    const systemTheme = (0, _createTheme.default)(options);
    let muiTheme = (0, _deepmerge.default)(systemTheme, {
        mixins: (0, _createMixins.default)(systemTheme.breakpoints, mixinsInput),
        palette,
        // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
        shadows: _shadows.default.slice(),
        typography: (0, _createTypography.default)(palette, typographyInput),
        transitions: (0, _createTransitions.default)(transitionsInput),
        zIndex: {
            ..._zIndex.default
        }
    });
    muiTheme = (0, _deepmerge.default)(muiTheme, other);
    muiTheme = args.reduce((acc, argument)=>(0, _deepmerge.default)(acc, argument), muiTheme);
    if ("TURBOPACK compile-time truthy", 1) {
        // TODO v6: Refactor to use globalStateClassesMapping from @mui/utils once `readOnly` state class is used in Rating component.
        const stateClasses = [
            'active',
            'checked',
            'completed',
            'disabled',
            'error',
            'expanded',
            'focused',
            'focusVisible',
            'required',
            'selected'
        ];
        const traverse = (node, component)=>{
            let key;
            // eslint-disable-next-line guard-for-in
            for(key in node){
                const child = node[key];
                if (stateClasses.includes(key) && Object.keys(child).length > 0) {
                    if ("TURBOPACK compile-time truthy", 1) {
                        const stateClass = (0, _generateUtilityClass.default)('', key);
                        console.error([
                            `MUI: The \`${component}\` component increases ` + `the CSS specificity of the \`${key}\` internal state.`,
                            'You can not override it like this: ',
                            JSON.stringify(node, null, 2),
                            '',
                            `Instead, you need to use the '&.${stateClass}' syntax:`,
                            JSON.stringify({
                                root: {
                                    [`&.${stateClass}`]: child
                                }
                            }, null, 2),
                            '',
                            'https://mui.com/r/state-classes-guide'
                        ].join('\n'));
                    }
                    // Remove the style to prevent global conflicts.
                    node[key] = {};
                }
            }
        };
        Object.keys(muiTheme.components).forEach((component)=>{
            const styleOverrides = muiTheme.components[component].styleOverrides;
            if (styleOverrides && component.startsWith('Mui')) {
                traverse(styleOverrides, component);
            }
        });
    }
    muiTheme.unstable_sxConfig = {
        ..._styleFunctionSx.unstable_defaultSxConfig,
        ...other?.unstable_sxConfig
    };
    muiTheme.unstable_sx = function sx(props) {
        return (0, _styleFunctionSx.default)({
            sx: props,
            theme: this
        });
    };
    muiTheme.toRuntimeSource = _stringifyTheme.stringifyTheme; // for Pigment CSS integration
    attachColorManipulators(muiTheme);
    return muiTheme;
}
var _default = exports.default = createThemeNoVars;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/getOverlayAlpha.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getOverlayAlpha;
// Inspired by https://github.com/material-components/material-components-ios/blob/bca36107405594d5b7b16265a5b0ed698f85a5ee/components/Elevation/src/UIColor%2BMaterialElevation.m#L61
function getOverlayAlpha(elevation) {
    let alphaValue;
    if (elevation < 1) {
        alphaValue = 5.11916 * elevation ** 2;
    } else {
        alphaValue = 4.5 * Math.log(elevation + 1) + 2;
    }
    return Math.round(alphaValue * 10) / 1000;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createColorScheme.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-ssr] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createColorScheme;
exports.getOpacity = getOpacity;
exports.getOverlays = getOverlays;
var _createPalette = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createPalette.js [app-ssr] (ecmascript)"));
var _getOverlayAlpha = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/getOverlayAlpha.js [app-ssr] (ecmascript)"));
const defaultDarkOverlays = [
    ...Array(25)
].map((_, index)=>{
    if (index === 0) {
        return 'none';
    }
    const overlay = (0, _getOverlayAlpha.default)(index);
    return `linear-gradient(rgba(255 255 255 / ${overlay}), rgba(255 255 255 / ${overlay}))`;
});
function getOpacity(mode) {
    return {
        inputPlaceholder: mode === 'dark' ? 0.5 : 0.42,
        inputUnderline: mode === 'dark' ? 0.7 : 0.42,
        switchTrackDisabled: mode === 'dark' ? 0.2 : 0.12,
        switchTrack: mode === 'dark' ? 0.3 : 0.38
    };
}
function getOverlays(mode) {
    return mode === 'dark' ? defaultDarkOverlays : [];
}
function createColorScheme(options) {
    const { palette: paletteInput = {
        mode: 'light'
    }, // need to cast to avoid module augmentation test
    opacity, overlays, colorSpace, ...rest } = options;
    // need to cast because `colorSpace` is considered internal at the moment.
    const palette = (0, _createPalette.default)({
        ...paletteInput,
        colorSpace
    });
    return {
        palette,
        opacity: {
            ...getOpacity(palette.mode),
            ...opacity
        },
        overlays: overlays || getOverlays(palette.mode),
        ...rest
    };
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/shouldSkipGeneratingVar.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = shouldSkipGeneratingVar;
function shouldSkipGeneratingVar(keys) {
    return !!keys[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!keys[0].match(/sxConfig$/) || // ends with sxConfig
    keys[0] === 'palette' && !!keys[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/excludeVariablesFromRoot.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
/**
 * @internal These variables should not appear in the :root stylesheet when the `defaultColorScheme="dark"`
 */ const excludeVariablesFromRoot = (cssVarPrefix)=>[
        ...[
            ...Array(25)
        ].map((_, index)=>`--${cssVarPrefix ? `${cssVarPrefix}-` : ''}overlays-${index}`),
        `--${cssVarPrefix ? `${cssVarPrefix}-` : ''}palette-AppBar-darkBg`,
        `--${cssVarPrefix ? `${cssVarPrefix}-` : ''}palette-AppBar-darkColor`
    ];
var _default = exports.default = excludeVariablesFromRoot;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createGetSelector.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-ssr] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _excludeVariablesFromRoot = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/excludeVariablesFromRoot.js [app-ssr] (ecmascript)"));
var _default = (theme)=>(colorScheme, css)=>{
        const root = theme.rootSelector || ':root';
        const selector = theme.colorSchemeSelector;
        let rule = selector;
        if (selector === 'class') {
            rule = '.%s';
        }
        if (selector === 'data') {
            rule = '[data-%s]';
        }
        if (selector?.startsWith('data-') && !selector.includes('%s')) {
            // 'data-mui-color-scheme' -> '[data-mui-color-scheme="%s"]'
            rule = `[${selector}="%s"]`;
        }
        if (theme.defaultColorScheme === colorScheme) {
            if (colorScheme === 'dark') {
                const excludedVariables = {};
                (0, _excludeVariablesFromRoot.default)(theme.cssVarPrefix).forEach((cssVar)=>{
                    excludedVariables[cssVar] = css[cssVar];
                    delete css[cssVar];
                });
                if (rule === 'media') {
                    return {
                        [root]: css,
                        [`@media (prefers-color-scheme: dark)`]: {
                            [root]: excludedVariables
                        }
                    };
                }
                if (rule) {
                    return {
                        [rule.replace('%s', colorScheme)]: excludedVariables,
                        [`${root}, ${rule.replace('%s', colorScheme)}`]: css
                    };
                }
                return {
                    [root]: {
                        ...css,
                        ...excludedVariables
                    }
                };
            }
            if (rule && rule !== 'media') {
                return `${root}, ${rule.replace('%s', String(colorScheme))}`;
            }
        } else if (colorScheme) {
            if (rule === 'media') {
                return {
                    [`@media (prefers-color-scheme: ${String(colorScheme)})`]: {
                        [root]: css
                    }
                };
            }
            if (rule) {
                return rule.replace('%s', String(colorScheme));
            }
        }
        return root;
    };
exports.default = _default;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createThemeWithVars.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-ssr] (ecmascript)").default;
var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-ssr] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createGetCssVar = void 0;
exports.default = createThemeWithVars;
var _formatMuiErrorMessage = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/formatMuiErrorMessage/index.js [app-ssr] (ecmascript)"));
var _deepmerge = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/deepmerge/index.js [app-ssr] (ecmascript)"));
var _system = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/system/index.js [app-ssr] (ecmascript)");
var _spacing = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/system/spacing/index.js [app-ssr] (ecmascript)");
var _cssVars = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/system/cssVars/index.js [app-ssr] (ecmascript)");
var _styleFunctionSx = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/system/styleFunctionSx/index.js [app-ssr] (ecmascript)"));
var _colorManipulator = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/system/colorManipulator/index.js [app-ssr] (ecmascript)");
var _createThemeNoVars = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createThemeNoVars.js [app-ssr] (ecmascript)"));
var _createColorScheme = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createColorScheme.js [app-ssr] (ecmascript)"));
var _shouldSkipGeneratingVar = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/shouldSkipGeneratingVar.js [app-ssr] (ecmascript)"));
var _createGetSelector = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createGetSelector.js [app-ssr] (ecmascript)"));
var _stringifyTheme = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/stringifyTheme.js [app-ssr] (ecmascript)");
var _createPalette = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createPalette.js [app-ssr] (ecmascript)");
function assignNode(obj, keys) {
    keys.forEach((k)=>{
        if (!obj[k]) {
            obj[k] = {};
        }
    });
}
function setColor(obj, key, defaultValue) {
    if (!obj[key] && defaultValue) {
        obj[key] = defaultValue;
    }
}
function toRgb(color) {
    if (typeof color !== 'string' || !color.startsWith('hsl')) {
        return color;
    }
    return (0, _colorManipulator.hslToRgb)(color);
}
function setColorChannel(obj, key) {
    if (!(`${key}Channel` in obj)) {
        // custom channel token is not provided, generate one.
        // if channel token can't be generated, show a warning.
        obj[`${key}Channel`] = (0, _colorManipulator.private_safeColorChannel)(toRgb(obj[key]), `MUI: Can't create \`palette.${key}Channel\` because \`palette.${key}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` + '\n' + `To suppress this warning, you need to explicitly provide the \`palette.${key}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`);
    }
}
function getSpacingVal(spacingInput) {
    if (typeof spacingInput === 'number') {
        return `${spacingInput}px`;
    }
    if (typeof spacingInput === 'string' || typeof spacingInput === 'function' || Array.isArray(spacingInput)) {
        return spacingInput;
    }
    return '8px';
}
const silent = (fn)=>{
    try {
        return fn();
    } catch (error) {
    // ignore error
    }
    return undefined;
};
const createGetCssVar = (cssVarPrefix = 'mui')=>(0, _system.unstable_createGetCssVar)(cssVarPrefix);
exports.createGetCssVar = createGetCssVar;
function attachColorScheme(colorSpace, colorSchemes, scheme, restTheme, colorScheme) {
    if (!scheme) {
        return undefined;
    }
    scheme = scheme === true ? {} : scheme;
    const mode = colorScheme === 'dark' ? 'dark' : 'light';
    if (!restTheme) {
        colorSchemes[colorScheme] = (0, _createColorScheme.default)({
            ...scheme,
            palette: {
                mode,
                ...scheme?.palette
            },
            colorSpace
        });
        return undefined;
    }
    const { palette, ...muiTheme } = (0, _createThemeNoVars.default)({
        ...restTheme,
        palette: {
            mode,
            ...scheme?.palette
        },
        colorSpace
    });
    colorSchemes[colorScheme] = {
        ...scheme,
        palette,
        opacity: {
            ...(0, _createColorScheme.getOpacity)(mode),
            ...scheme?.opacity
        },
        overlays: scheme?.overlays || (0, _createColorScheme.getOverlays)(mode)
    };
    return muiTheme;
}
/**
 * A default `createThemeWithVars` comes with a single color scheme, either `light` or `dark` based on the `defaultColorScheme`.
 * This is better suited for apps that only need a single color scheme.
 *
 * To enable built-in `light` and `dark` color schemes, either:
 * 1. provide a `colorSchemeSelector` to define how the color schemes will change.
 * 2. provide `colorSchemes.dark` will set `colorSchemeSelector: 'media'` by default.
 */ function createThemeWithVars(options = {}, ...args) {
    const { colorSchemes: colorSchemesInput = {
        light: true
    }, defaultColorScheme: defaultColorSchemeInput, disableCssColorScheme = false, cssVarPrefix = 'mui', nativeColor = false, shouldSkipGeneratingVar = _shouldSkipGeneratingVar.default, colorSchemeSelector: selector = colorSchemesInput.light && colorSchemesInput.dark ? 'media' : undefined, rootSelector = ':root', ...input } = options;
    const firstColorScheme = Object.keys(colorSchemesInput)[0];
    const defaultColorScheme = defaultColorSchemeInput || (colorSchemesInput.light && firstColorScheme !== 'light' ? 'light' : firstColorScheme);
    const getCssVar = createGetCssVar(cssVarPrefix);
    const { [defaultColorScheme]: defaultSchemeInput, light: builtInLight, dark: builtInDark, ...customColorSchemes } = colorSchemesInput;
    const colorSchemes = {
        ...customColorSchemes
    };
    let defaultScheme = defaultSchemeInput;
    // For built-in light and dark color schemes, ensure that the value is valid if they are the default color scheme.
    if (defaultColorScheme === 'dark' && !('dark' in colorSchemesInput) || defaultColorScheme === 'light' && !('light' in colorSchemesInput)) {
        defaultScheme = true;
    }
    if (!defaultScheme) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? `MUI: The \`colorSchemes.${defaultColorScheme}\` option is either missing or invalid.` : "TURBOPACK unreachable");
    }
    // The reason to use `oklch` is that it is the most perceptually uniform color space and widely supported.
    let colorSpace;
    if (nativeColor) {
        colorSpace = 'oklch';
    }
    // Create the palette for the default color scheme, either `light`, `dark`, or custom color scheme.
    const muiTheme = attachColorScheme(colorSpace, colorSchemes, defaultScheme, input, defaultColorScheme);
    if (builtInLight && !colorSchemes.light) {
        attachColorScheme(colorSpace, colorSchemes, builtInLight, undefined, 'light');
    }
    if (builtInDark && !colorSchemes.dark) {
        attachColorScheme(colorSpace, colorSchemes, builtInDark, undefined, 'dark');
    }
    let theme = {
        defaultColorScheme,
        ...muiTheme,
        cssVarPrefix,
        colorSchemeSelector: selector,
        rootSelector,
        getCssVar,
        colorSchemes,
        font: {
            ...(0, _cssVars.prepareTypographyVars)(muiTheme.typography),
            ...muiTheme.font
        },
        spacing: getSpacingVal(input.spacing)
    };
    Object.keys(theme.colorSchemes).forEach((key)=>{
        const palette = theme.colorSchemes[key].palette;
        const setCssVarColor = (cssVar)=>{
            const tokens = cssVar.split('-');
            const color = tokens[1];
            const colorToken = tokens[2];
            return getCssVar(cssVar, palette[color][colorToken]);
        };
        // attach black & white channels to common node
        if (palette.mode === 'light') {
            setColor(palette.common, 'background', '#fff');
            setColor(palette.common, 'onBackground', '#000');
        }
        if (palette.mode === 'dark') {
            setColor(palette.common, 'background', '#000');
            setColor(palette.common, 'onBackground', '#fff');
        }
        function colorMix(method, color, coefficient) {
            if (colorSpace) {
                let mixer;
                if (method === _colorManipulator.private_safeAlpha) {
                    mixer = `transparent ${((1 - coefficient) * 100).toFixed(0)}%`;
                }
                if (method === _colorManipulator.private_safeDarken) {
                    mixer = `#000 ${(coefficient * 100).toFixed(0)}%`;
                }
                if (method === _colorManipulator.private_safeLighten) {
                    mixer = `#fff ${(coefficient * 100).toFixed(0)}%`;
                }
                return `color-mix(in ${colorSpace}, ${color}, ${mixer})`;
            }
            return method(color, coefficient);
        }
        // assign component variables
        assignNode(palette, [
            'Alert',
            'AppBar',
            'Avatar',
            'Button',
            'Chip',
            'FilledInput',
            'LinearProgress',
            'Skeleton',
            'Slider',
            'SnackbarContent',
            'SpeedDialAction',
            'StepConnector',
            'StepContent',
            'Switch',
            'TableCell',
            'Tooltip'
        ]);
        if (palette.mode === 'light') {
            setColor(palette.Alert, 'errorColor', colorMix(_colorManipulator.private_safeDarken, palette.error.light, 0.6));
            setColor(palette.Alert, 'infoColor', colorMix(_colorManipulator.private_safeDarken, palette.info.light, 0.6));
            setColor(palette.Alert, 'successColor', colorMix(_colorManipulator.private_safeDarken, palette.success.light, 0.6));
            setColor(palette.Alert, 'warningColor', colorMix(_colorManipulator.private_safeDarken, palette.warning.light, 0.6));
            setColor(palette.Alert, 'errorFilledBg', setCssVarColor('palette-error-main'));
            setColor(palette.Alert, 'infoFilledBg', setCssVarColor('palette-info-main'));
            setColor(palette.Alert, 'successFilledBg', setCssVarColor('palette-success-main'));
            setColor(palette.Alert, 'warningFilledBg', setCssVarColor('palette-warning-main'));
            setColor(palette.Alert, 'errorFilledColor', silent(()=>palette.getContrastText(palette.error.main)));
            setColor(palette.Alert, 'infoFilledColor', silent(()=>palette.getContrastText(palette.info.main)));
            setColor(palette.Alert, 'successFilledColor', silent(()=>palette.getContrastText(palette.success.main)));
            setColor(palette.Alert, 'warningFilledColor', silent(()=>palette.getContrastText(palette.warning.main)));
            setColor(palette.Alert, 'errorStandardBg', colorMix(_colorManipulator.private_safeLighten, palette.error.light, 0.9));
            setColor(palette.Alert, 'infoStandardBg', colorMix(_colorManipulator.private_safeLighten, palette.info.light, 0.9));
            setColor(palette.Alert, 'successStandardBg', colorMix(_colorManipulator.private_safeLighten, palette.success.light, 0.9));
            setColor(palette.Alert, 'warningStandardBg', colorMix(_colorManipulator.private_safeLighten, palette.warning.light, 0.9));
            setColor(palette.Alert, 'errorIconColor', setCssVarColor('palette-error-main'));
            setColor(palette.Alert, 'infoIconColor', setCssVarColor('palette-info-main'));
            setColor(palette.Alert, 'successIconColor', setCssVarColor('palette-success-main'));
            setColor(palette.Alert, 'warningIconColor', setCssVarColor('palette-warning-main'));
            setColor(palette.AppBar, 'defaultBg', setCssVarColor('palette-grey-100'));
            setColor(palette.Avatar, 'defaultBg', setCssVarColor('palette-grey-400'));
            setColor(palette.Button, 'inheritContainedBg', setCssVarColor('palette-grey-300'));
            setColor(palette.Button, 'inheritContainedHoverBg', setCssVarColor('palette-grey-A100'));
            setColor(palette.Chip, 'defaultBorder', setCssVarColor('palette-grey-400'));
            setColor(palette.Chip, 'defaultAvatarColor', setCssVarColor('palette-grey-700'));
            setColor(palette.Chip, 'defaultIconColor', setCssVarColor('palette-grey-700'));
            setColor(palette.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)');
            setColor(palette.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)');
            setColor(palette.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)');
            setColor(palette.LinearProgress, 'primaryBg', colorMix(_colorManipulator.private_safeLighten, palette.primary.main, 0.62));
            setColor(palette.LinearProgress, 'secondaryBg', colorMix(_colorManipulator.private_safeLighten, palette.secondary.main, 0.62));
            setColor(palette.LinearProgress, 'errorBg', colorMix(_colorManipulator.private_safeLighten, palette.error.main, 0.62));
            setColor(palette.LinearProgress, 'infoBg', colorMix(_colorManipulator.private_safeLighten, palette.info.main, 0.62));
            setColor(palette.LinearProgress, 'successBg', colorMix(_colorManipulator.private_safeLighten, palette.success.main, 0.62));
            setColor(palette.LinearProgress, 'warningBg', colorMix(_colorManipulator.private_safeLighten, palette.warning.main, 0.62));
            setColor(palette.Skeleton, 'bg', colorSpace ? colorMix(_colorManipulator.private_safeAlpha, palette.text.primary, 0.11) : `rgba(${setCssVarColor('palette-text-primaryChannel')} / 0.11)`);
            setColor(palette.Slider, 'primaryTrack', colorMix(_colorManipulator.private_safeLighten, palette.primary.main, 0.62));
            setColor(palette.Slider, 'secondaryTrack', colorMix(_colorManipulator.private_safeLighten, palette.secondary.main, 0.62));
            setColor(palette.Slider, 'errorTrack', colorMix(_colorManipulator.private_safeLighten, palette.error.main, 0.62));
            setColor(palette.Slider, 'infoTrack', colorMix(_colorManipulator.private_safeLighten, palette.info.main, 0.62));
            setColor(palette.Slider, 'successTrack', colorMix(_colorManipulator.private_safeLighten, palette.success.main, 0.62));
            setColor(palette.Slider, 'warningTrack', colorMix(_colorManipulator.private_safeLighten, palette.warning.main, 0.62));
            const snackbarContentBackground = colorSpace ? colorMix(_colorManipulator.private_safeDarken, palette.background.default, 0.6825) // use `0.6825` instead of `0.8` to match the contrast ratio of JS implementation
             : (0, _colorManipulator.private_safeEmphasize)(palette.background.default, 0.8);
            setColor(palette.SnackbarContent, 'bg', snackbarContentBackground);
            setColor(palette.SnackbarContent, 'color', silent(()=>colorSpace ? _createPalette.dark.text.primary : palette.getContrastText(snackbarContentBackground)));
            setColor(palette.SpeedDialAction, 'fabHoverBg', (0, _colorManipulator.private_safeEmphasize)(palette.background.paper, 0.15));
            setColor(palette.StepConnector, 'border', setCssVarColor('palette-grey-400'));
            setColor(palette.StepContent, 'border', setCssVarColor('palette-grey-400'));
            setColor(palette.Switch, 'defaultColor', setCssVarColor('palette-common-white'));
            setColor(palette.Switch, 'defaultDisabledColor', setCssVarColor('palette-grey-100'));
            setColor(palette.Switch, 'primaryDisabledColor', colorMix(_colorManipulator.private_safeLighten, palette.primary.main, 0.62));
            setColor(palette.Switch, 'secondaryDisabledColor', colorMix(_colorManipulator.private_safeLighten, palette.secondary.main, 0.62));
            setColor(palette.Switch, 'errorDisabledColor', colorMix(_colorManipulator.private_safeLighten, palette.error.main, 0.62));
            setColor(palette.Switch, 'infoDisabledColor', colorMix(_colorManipulator.private_safeLighten, palette.info.main, 0.62));
            setColor(palette.Switch, 'successDisabledColor', colorMix(_colorManipulator.private_safeLighten, palette.success.main, 0.62));
            setColor(palette.Switch, 'warningDisabledColor', colorMix(_colorManipulator.private_safeLighten, palette.warning.main, 0.62));
            setColor(palette.TableCell, 'border', colorMix(_colorManipulator.private_safeLighten, colorMix(_colorManipulator.private_safeAlpha, palette.divider, 1), 0.88));
            setColor(palette.Tooltip, 'bg', colorMix(_colorManipulator.private_safeAlpha, palette.grey[700], 0.92));
        }
        if (palette.mode === 'dark') {
            setColor(palette.Alert, 'errorColor', colorMix(_colorManipulator.private_safeLighten, palette.error.light, 0.6));
            setColor(palette.Alert, 'infoColor', colorMix(_colorManipulator.private_safeLighten, palette.info.light, 0.6));
            setColor(palette.Alert, 'successColor', colorMix(_colorManipulator.private_safeLighten, palette.success.light, 0.6));
            setColor(palette.Alert, 'warningColor', colorMix(_colorManipulator.private_safeLighten, palette.warning.light, 0.6));
            setColor(palette.Alert, 'errorFilledBg', setCssVarColor('palette-error-dark'));
            setColor(palette.Alert, 'infoFilledBg', setCssVarColor('palette-info-dark'));
            setColor(palette.Alert, 'successFilledBg', setCssVarColor('palette-success-dark'));
            setColor(palette.Alert, 'warningFilledBg', setCssVarColor('palette-warning-dark'));
            setColor(palette.Alert, 'errorFilledColor', silent(()=>palette.getContrastText(palette.error.dark)));
            setColor(palette.Alert, 'infoFilledColor', silent(()=>palette.getContrastText(palette.info.dark)));
            setColor(palette.Alert, 'successFilledColor', silent(()=>palette.getContrastText(palette.success.dark)));
            setColor(palette.Alert, 'warningFilledColor', silent(()=>palette.getContrastText(palette.warning.dark)));
            setColor(palette.Alert, 'errorStandardBg', colorMix(_colorManipulator.private_safeDarken, palette.error.light, 0.9));
            setColor(palette.Alert, 'infoStandardBg', colorMix(_colorManipulator.private_safeDarken, palette.info.light, 0.9));
            setColor(palette.Alert, 'successStandardBg', colorMix(_colorManipulator.private_safeDarken, palette.success.light, 0.9));
            setColor(palette.Alert, 'warningStandardBg', colorMix(_colorManipulator.private_safeDarken, palette.warning.light, 0.9));
            setColor(palette.Alert, 'errorIconColor', setCssVarColor('palette-error-main'));
            setColor(palette.Alert, 'infoIconColor', setCssVarColor('palette-info-main'));
            setColor(palette.Alert, 'successIconColor', setCssVarColor('palette-success-main'));
            setColor(palette.Alert, 'warningIconColor', setCssVarColor('palette-warning-main'));
            setColor(palette.AppBar, 'defaultBg', setCssVarColor('palette-grey-900'));
            setColor(palette.AppBar, 'darkBg', setCssVarColor('palette-background-paper')); // specific for dark mode
            setColor(palette.AppBar, 'darkColor', setCssVarColor('palette-text-primary')); // specific for dark mode
            setColor(palette.Avatar, 'defaultBg', setCssVarColor('palette-grey-600'));
            setColor(palette.Button, 'inheritContainedBg', setCssVarColor('palette-grey-800'));
            setColor(palette.Button, 'inheritContainedHoverBg', setCssVarColor('palette-grey-700'));
            setColor(palette.Chip, 'defaultBorder', setCssVarColor('palette-grey-700'));
            setColor(palette.Chip, 'defaultAvatarColor', setCssVarColor('palette-grey-300'));
            setColor(palette.Chip, 'defaultIconColor', setCssVarColor('palette-grey-300'));
            setColor(palette.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)');
            setColor(palette.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)');
            setColor(palette.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)');
            setColor(palette.LinearProgress, 'primaryBg', colorMix(_colorManipulator.private_safeDarken, palette.primary.main, 0.5));
            setColor(palette.LinearProgress, 'secondaryBg', colorMix(_colorManipulator.private_safeDarken, palette.secondary.main, 0.5));
            setColor(palette.LinearProgress, 'errorBg', colorMix(_colorManipulator.private_safeDarken, palette.error.main, 0.5));
            setColor(palette.LinearProgress, 'infoBg', colorMix(_colorManipulator.private_safeDarken, palette.info.main, 0.5));
            setColor(palette.LinearProgress, 'successBg', colorMix(_colorManipulator.private_safeDarken, palette.success.main, 0.5));
            setColor(palette.LinearProgress, 'warningBg', colorMix(_colorManipulator.private_safeDarken, palette.warning.main, 0.5));
            setColor(palette.Skeleton, 'bg', colorSpace ? colorMix(_colorManipulator.private_safeAlpha, palette.text.primary, 0.13) : `rgba(${setCssVarColor('palette-text-primaryChannel')} / 0.13)`);
            setColor(palette.Slider, 'primaryTrack', colorMix(_colorManipulator.private_safeDarken, palette.primary.main, 0.5));
            setColor(palette.Slider, 'secondaryTrack', colorMix(_colorManipulator.private_safeDarken, palette.secondary.main, 0.5));
            setColor(palette.Slider, 'errorTrack', colorMix(_colorManipulator.private_safeDarken, palette.error.main, 0.5));
            setColor(palette.Slider, 'infoTrack', colorMix(_colorManipulator.private_safeDarken, palette.info.main, 0.5));
            setColor(palette.Slider, 'successTrack', colorMix(_colorManipulator.private_safeDarken, palette.success.main, 0.5));
            setColor(palette.Slider, 'warningTrack', colorMix(_colorManipulator.private_safeDarken, palette.warning.main, 0.5));
            const snackbarContentBackground = colorSpace ? colorMix(_colorManipulator.private_safeLighten, palette.background.default, 0.985) // use `0.985` instead of `0.98` to match the contrast ratio of JS implementation
             : (0, _colorManipulator.private_safeEmphasize)(palette.background.default, 0.98);
            setColor(palette.SnackbarContent, 'bg', snackbarContentBackground);
            setColor(palette.SnackbarContent, 'color', silent(()=>colorSpace ? _createPalette.light.text.primary : palette.getContrastText(snackbarContentBackground)));
            setColor(palette.SpeedDialAction, 'fabHoverBg', (0, _colorManipulator.private_safeEmphasize)(palette.background.paper, 0.15));
            setColor(palette.StepConnector, 'border', setCssVarColor('palette-grey-600'));
            setColor(palette.StepContent, 'border', setCssVarColor('palette-grey-600'));
            setColor(palette.Switch, 'defaultColor', setCssVarColor('palette-grey-300'));
            setColor(palette.Switch, 'defaultDisabledColor', setCssVarColor('palette-grey-600'));
            setColor(palette.Switch, 'primaryDisabledColor', colorMix(_colorManipulator.private_safeDarken, palette.primary.main, 0.55));
            setColor(palette.Switch, 'secondaryDisabledColor', colorMix(_colorManipulator.private_safeDarken, palette.secondary.main, 0.55));
            setColor(palette.Switch, 'errorDisabledColor', colorMix(_colorManipulator.private_safeDarken, palette.error.main, 0.55));
            setColor(palette.Switch, 'infoDisabledColor', colorMix(_colorManipulator.private_safeDarken, palette.info.main, 0.55));
            setColor(palette.Switch, 'successDisabledColor', colorMix(_colorManipulator.private_safeDarken, palette.success.main, 0.55));
            setColor(palette.Switch, 'warningDisabledColor', colorMix(_colorManipulator.private_safeDarken, palette.warning.main, 0.55));
            setColor(palette.TableCell, 'border', colorMix(_colorManipulator.private_safeDarken, colorMix(_colorManipulator.private_safeAlpha, palette.divider, 1), 0.68));
            setColor(palette.Tooltip, 'bg', colorMix(_colorManipulator.private_safeAlpha, palette.grey[700], 0.92));
        }
        // MUI X - DataGrid needs this token.
        setColorChannel(palette.background, 'default');
        // added for consistency with the `background.default` token
        setColorChannel(palette.background, 'paper');
        setColorChannel(palette.common, 'background');
        setColorChannel(palette.common, 'onBackground');
        setColorChannel(palette, 'divider');
        Object.keys(palette).forEach((color)=>{
            const colors = palette[color];
            // The default palettes (primary, secondary, error, info, success, and warning) errors are handled by the above `createTheme(...)`.
            if (color !== 'tonalOffset' && colors && typeof colors === 'object') {
                // Silent the error for custom palettes.
                if (colors.main) {
                    setColor(palette[color], 'mainChannel', (0, _colorManipulator.private_safeColorChannel)(toRgb(colors.main)));
                }
                if (colors.light) {
                    setColor(palette[color], 'lightChannel', (0, _colorManipulator.private_safeColorChannel)(toRgb(colors.light)));
                }
                if (colors.dark) {
                    setColor(palette[color], 'darkChannel', (0, _colorManipulator.private_safeColorChannel)(toRgb(colors.dark)));
                }
                if (colors.contrastText) {
                    setColor(palette[color], 'contrastTextChannel', (0, _colorManipulator.private_safeColorChannel)(toRgb(colors.contrastText)));
                }
                if (color === 'text') {
                    // Text colors: text.primary, text.secondary
                    setColorChannel(palette[color], 'primary');
                    setColorChannel(palette[color], 'secondary');
                }
                if (color === 'action') {
                    // Action colors: action.active, action.selected
                    if (colors.active) {
                        setColorChannel(palette[color], 'active');
                    }
                    if (colors.selected) {
                        setColorChannel(palette[color], 'selected');
                    }
                }
            }
        });
    });
    theme = args.reduce((acc, argument)=>(0, _deepmerge.default)(acc, argument), theme);
    const parserConfig = {
        prefix: cssVarPrefix,
        disableCssColorScheme,
        shouldSkipGeneratingVar,
        getSelector: (0, _createGetSelector.default)(theme),
        enableContrastVars: nativeColor
    };
    const { vars, generateThemeVars, generateStyleSheets } = (0, _cssVars.prepareCssVars)(theme, parserConfig);
    theme.vars = vars;
    Object.entries(theme.colorSchemes[theme.defaultColorScheme]).forEach(([key, value])=>{
        theme[key] = value;
    });
    theme.generateThemeVars = generateThemeVars;
    theme.generateStyleSheets = generateStyleSheets;
    theme.generateSpacing = function generateSpacing() {
        return (0, _system.createSpacing)(input.spacing, (0, _spacing.createUnarySpacing)(this));
    };
    theme.getColorSchemeSelector = (0, _cssVars.createGetColorSchemeSelector)(selector);
    theme.spacing = theme.generateSpacing();
    theme.shouldSkipGeneratingVar = shouldSkipGeneratingVar;
    theme.unstable_sxConfig = {
        ..._styleFunctionSx.unstable_defaultSxConfig,
        ...input?.unstable_sxConfig
    };
    theme.unstable_sx = function sx(props) {
        return (0, _styleFunctionSx.default)({
            sx: props,
            theme: this
        });
    };
    theme.toRuntimeSource = _stringifyTheme.stringifyTheme; // for Pigment CSS integration
    return theme;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createTheme.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-ssr] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createTheme;
var _createPalette = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createPalette.js [app-ssr] (ecmascript)"));
var _createThemeWithVars = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createThemeWithVars.js [app-ssr] (ecmascript)"));
var _createThemeNoVars = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createThemeNoVars.js [app-ssr] (ecmascript)"));
// eslint-disable-next-line consistent-return
function attachColorScheme(theme, scheme, colorScheme) {
    if (!theme.colorSchemes) {
        return undefined;
    }
    if (colorScheme) {
        theme.colorSchemes[scheme] = {
            ...colorScheme !== true && colorScheme,
            palette: (0, _createPalette.default)({
                ...colorScheme === true ? {} : colorScheme.palette,
                mode: scheme
            }) // cast type to skip module augmentation test
        };
    }
}
/**
 * Generate a theme base on the options received.
 * @param options Takes an incomplete theme object and adds the missing parts.
 * @param args Deep merge the arguments with the about to be returned theme.
 * @returns A complete, ready-to-use theme object.
 */ function createTheme(options = {}, // cast type to skip module augmentation test
...args) {
    const { palette, cssVariables = false, colorSchemes: initialColorSchemes = !palette ? {
        light: true
    } : undefined, defaultColorScheme: initialDefaultColorScheme = palette?.mode, ...rest } = options;
    const defaultColorSchemeInput = initialDefaultColorScheme || 'light';
    const defaultScheme = initialColorSchemes?.[defaultColorSchemeInput];
    const colorSchemesInput = {
        ...initialColorSchemes,
        ...palette ? {
            [defaultColorSchemeInput]: {
                ...typeof defaultScheme !== 'boolean' && defaultScheme,
                palette
            }
        } : undefined
    };
    if (cssVariables === false) {
        if (!('colorSchemes' in options)) {
            // Behaves exactly as v5
            return (0, _createThemeNoVars.default)(options, ...args);
        }
        let paletteOptions = palette;
        if (!('palette' in options)) {
            if (colorSchemesInput[defaultColorSchemeInput]) {
                if (colorSchemesInput[defaultColorSchemeInput] !== true) {
                    paletteOptions = colorSchemesInput[defaultColorSchemeInput].palette;
                } else if (defaultColorSchemeInput === 'dark') {
                    // @ts-ignore to prevent the module augmentation test from failing
                    paletteOptions = {
                        mode: 'dark'
                    };
                }
            }
        }
        const theme = (0, _createThemeNoVars.default)({
            ...options,
            palette: paletteOptions
        }, ...args);
        theme.defaultColorScheme = defaultColorSchemeInput;
        theme.colorSchemes = colorSchemesInput;
        if (theme.palette.mode === 'light') {
            theme.colorSchemes.light = {
                ...colorSchemesInput.light !== true && colorSchemesInput.light,
                palette: theme.palette
            };
            attachColorScheme(theme, 'dark', colorSchemesInput.dark);
        }
        if (theme.palette.mode === 'dark') {
            theme.colorSchemes.dark = {
                ...colorSchemesInput.dark !== true && colorSchemesInput.dark,
                palette: theme.palette
            };
            attachColorScheme(theme, 'light', colorSchemesInput.light);
        }
        return theme;
    }
    if (!palette && !('light' in colorSchemesInput) && defaultColorSchemeInput === 'light') {
        colorSchemesInput.light = true;
    }
    return (0, _createThemeWithVars.default)({
        ...rest,
        colorSchemes: colorSchemesInput,
        defaultColorScheme: defaultColorSchemeInput,
        ...typeof cssVariables !== 'boolean' && cssVariables
    }, ...args);
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createMuiStrictModeTheme.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-ssr] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createMuiStrictModeTheme;
var _deepmerge = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/deepmerge/index.js [app-ssr] (ecmascript)"));
var _createTheme = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createTheme.js [app-ssr] (ecmascript)"));
function createMuiStrictModeTheme(options, ...args) {
    return (0, _createTheme.default)((0, _deepmerge.default)({
        unstable_strictMode: true
    }, options), ...args);
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createStyles.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createStyles;
let warnedOnce = false;
// To remove in v6
function createStyles(styles) {
    if (!warnedOnce) {
        console.warn([
            'MUI: createStyles from @mui/material/styles is deprecated.',
            'Please use @mui/styles/createStyles'
        ].join('\n'));
        warnedOnce = true;
    }
    return styles;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/cssUtils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.alignProperty = alignProperty;
exports.convertLength = convertLength;
exports.fontGrid = fontGrid;
exports.getUnit = getUnit;
exports.isUnitless = isUnitless;
exports.responsiveProperty = responsiveProperty;
exports.toUnitless = toUnitless;
function isUnitless(value) {
    return String(parseFloat(value)).length === String(value).length;
}
// Ported from Compass
// https://github.com/Compass/compass/blob/master/core/stylesheets/compass/typography/_units.scss
// Emulate the sass function "unit"
function getUnit(input) {
    return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || '';
}
// Emulate the sass function "unitless"
function toUnitless(length) {
    return parseFloat(length);
}
// Convert any CSS <length> or <percentage> value to any another.
// From https://github.com/KyleAMathews/convert-css-length
function convertLength(baseFontSize) {
    return (length, toUnit)=>{
        const fromUnit = getUnit(length);
        // Optimize for cases where `from` and `to` units are accidentally the same.
        if (fromUnit === toUnit) {
            return length;
        }
        // Convert input length to pixels.
        let pxLength = toUnitless(length);
        if (fromUnit !== 'px') {
            if (fromUnit === 'em') {
                pxLength = toUnitless(length) * toUnitless(baseFontSize);
            } else if (fromUnit === 'rem') {
                pxLength = toUnitless(length) * toUnitless(baseFontSize);
            }
        }
        // Convert length in pixels to the output unit
        let outputLength = pxLength;
        if (toUnit !== 'px') {
            if (toUnit === 'em') {
                outputLength = pxLength / toUnitless(baseFontSize);
            } else if (toUnit === 'rem') {
                outputLength = pxLength / toUnitless(baseFontSize);
            } else {
                return length;
            }
        }
        return parseFloat(outputLength.toFixed(5)) + toUnit;
    };
}
function alignProperty({ size, grid }) {
    const sizeBelow = size - size % grid;
    const sizeAbove = sizeBelow + grid;
    return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
}
// fontGrid finds a minimal grid (in rem) for the fontSize values so that the
// lineHeight falls under a x pixels grid, 4px in the case of Material Design,
// without changing the relative line height
function fontGrid({ lineHeight, pixels, htmlFontSize }) {
    return pixels / (lineHeight * htmlFontSize);
}
/**
 * generate a responsive version of a given CSS property
 * @example
 * responsiveProperty({
 *   cssProperty: 'fontSize',
 *   min: 15,
 *   max: 20,
 *   unit: 'px',
 *   breakpoints: [300, 600],
 * })
 *
 * // this returns
 *
 * {
 *   fontSize: '15px',
 *   '@media (min-width:300px)': {
 *     fontSize: '17.5px',
 *   },
 *   '@media (min-width:600px)': {
 *     fontSize: '20px',
 *   },
 * }
 * @param {Object} params
 * @param {string} params.cssProperty - The CSS property to be made responsive
 * @param {number} params.min - The smallest value of the CSS property
 * @param {number} params.max - The largest value of the CSS property
 * @param {string} [params.unit] - The unit to be used for the CSS property
 * @param {Array.number} [params.breakpoints]  - An array of breakpoints
 * @param {number} [params.alignStep] - Round scaled value to fall under this grid
 * @returns {Object} responsive styles for {params.cssProperty}
 */ function responsiveProperty({ cssProperty, min, max, unit = 'rem', breakpoints = [
    600,
    900,
    1200
], transform = null }) {
    const output = {
        [cssProperty]: `${min}${unit}`
    };
    const factor = (max - min) / breakpoints[breakpoints.length - 1];
    breakpoints.forEach((breakpoint)=>{
        let value = min + factor * breakpoint;
        if (transform !== null) {
            value = transform(value);
        }
        output[`@media (min-width:${breakpoint}px)`] = {
            [cssProperty]: `${Math.round(value * 10000) / 10000}${unit}`
        };
    });
    return output;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/responsiveFontSizes.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-ssr] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = responsiveFontSizes;
var _formatMuiErrorMessage = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/formatMuiErrorMessage/index.js [app-ssr] (ecmascript)"));
var _cssUtils = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/cssUtils.js [app-ssr] (ecmascript)");
function responsiveFontSizes(themeInput, options = {}) {
    const { breakpoints = [
        'sm',
        'md',
        'lg'
    ], disableAlign = false, factor = 2, variants = [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'button',
        'overline'
    ] } = options;
    const theme = {
        ...themeInput
    };
    theme.typography = {
        ...theme.typography
    };
    const typography = theme.typography;
    // Convert between CSS lengths e.g. em->px or px->rem
    // Set the baseFontSize for your project. Defaults to 16px (also the browser default).
    const convert = (0, _cssUtils.convertLength)(typography.htmlFontSize);
    const breakpointValues = breakpoints.map((x)=>theme.breakpoints.values[x]);
    variants.forEach((variant)=>{
        const style = typography[variant];
        if (!style) {
            return;
        }
        const remFontSize = parseFloat(convert(style.fontSize, 'rem'));
        if (remFontSize <= 1) {
            return;
        }
        const maxFontSize = remFontSize;
        const minFontSize = 1 + (maxFontSize - 1) / factor;
        let { lineHeight } = style;
        if (!(0, _cssUtils.isUnitless)(lineHeight) && !disableAlign) {
            throw new Error(("TURBOPACK compile-time truthy", 1) ? 'MUI: Unsupported non-unitless line height with grid alignment.\n' + 'Use unitless line heights instead.' : "TURBOPACK unreachable");
        }
        if (!(0, _cssUtils.isUnitless)(lineHeight)) {
            // make it unitless
            lineHeight = parseFloat(convert(lineHeight, 'rem')) / parseFloat(remFontSize);
        }
        let transform = null;
        if (!disableAlign) {
            transform = (value)=>(0, _cssUtils.alignProperty)({
                    size: value,
                    grid: (0, _cssUtils.fontGrid)({
                        pixels: 4,
                        lineHeight,
                        htmlFontSize: typography.htmlFontSize
                    })
                });
        }
        typography[variant] = {
            ...style,
            ...(0, _cssUtils.responsiveProperty)({
                cssProperty: 'fontSize',
                min: minFontSize,
                max: maxFontSize,
                unit: 'rem',
                breakpoints: breakpointValues,
                transform
            })
        };
    });
    return theme;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/defaultTheme.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-ssr] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _createTheme = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createTheme.js [app-ssr] (ecmascript)"));
const defaultTheme = (0, _createTheme.default)();
var _default = exports.default = defaultTheme;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/useTheme.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-ssr] (ecmascript)").default;
var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-ssr] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = useTheme;
var React = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
var _system = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/system/index.js [app-ssr] (ecmascript)");
var _defaultTheme = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/defaultTheme.js [app-ssr] (ecmascript)"));
var _identifier = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/identifier.js [app-ssr] (ecmascript)"));
function useTheme() {
    const theme = (0, _system.useTheme)(_defaultTheme.default);
    if ("TURBOPACK compile-time truthy", 1) {
        // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
        // eslint-disable-next-line react-hooks/rules-of-hooks
        React.useDebugValue(theme);
    }
    return theme[_identifier.default] || theme;
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/useThemeProps.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-ssr] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = useThemeProps;
var _useThemeProps = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/system/useThemeProps/index.js [app-ssr] (ecmascript)"));
var _defaultTheme = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/defaultTheme.js [app-ssr] (ecmascript)"));
var _identifier = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/identifier.js [app-ssr] (ecmascript)"));
function useThemeProps({ props, name }) {
    return (0, _useThemeProps.default)({
        props,
        name,
        defaultTheme: _defaultTheme.default,
        themeId: _identifier.default
    });
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/slotShouldForwardProp.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
// copied from @mui/system/createStyled
function slotShouldForwardProp(prop) {
    return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
var _default = exports.default = slotShouldForwardProp;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/rootShouldForwardProp.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-ssr] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _slotShouldForwardProp = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/slotShouldForwardProp.js [app-ssr] (ecmascript)"));
const rootShouldForwardProp = (prop)=>(0, _slotShouldForwardProp.default)(prop) && prop !== 'classes';
var _default = exports.default = rootShouldForwardProp;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/styled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-ssr] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
Object.defineProperty(exports, "rootShouldForwardProp", {
    enumerable: true,
    get: function() {
        return _rootShouldForwardProp.default;
    }
});
Object.defineProperty(exports, "slotShouldForwardProp", {
    enumerable: true,
    get: function() {
        return _slotShouldForwardProp.default;
    }
});
var _createStyled = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/system/createStyled/index.js [app-ssr] (ecmascript)"));
var _defaultTheme = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/defaultTheme.js [app-ssr] (ecmascript)"));
var _identifier = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/identifier.js [app-ssr] (ecmascript)"));
var _rootShouldForwardProp = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/rootShouldForwardProp.js [app-ssr] (ecmascript)"));
var _slotShouldForwardProp = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/slotShouldForwardProp.js [app-ssr] (ecmascript)"));
const styled = (0, _createStyled.default)({
    themeId: _identifier.default,
    defaultTheme: _defaultTheme.default,
    rootShouldForwardProp: _rootShouldForwardProp.default
});
var _default = exports.default = styled;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/ThemeProviderNoVars.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-ssr] (ecmascript)").default;
var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-ssr] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ThemeProviderNoVars;
var React = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
var _system = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/system/index.js [app-ssr] (ecmascript)");
var _identifier = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/identifier.js [app-ssr] (ecmascript)"));
var _jsxRuntime = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
function ThemeProviderNoVars({ theme: themeInput, ...props }) {
    const scopedTheme = _identifier.default in themeInput ? themeInput[_identifier.default] : undefined;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(_system.ThemeProvider, {
        ...props,
        themeId: scopedTheme ? _identifier.default : undefined,
        theme: scopedTheme || themeInput
    });
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/ThemeProviderWithVars.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-ssr] (ecmascript)").default;
var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-ssr] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CssVarsProvider = void 0;
exports.Experimental_CssVarsProvider = Experimental_CssVarsProvider;
exports.useColorScheme = exports.getInitColorSchemeScript = void 0;
var React = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
var _styleFunctionSx = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/system/styleFunctionSx/index.js [app-ssr] (ecmascript)"));
var _system = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/system/index.js [app-ssr] (ecmascript)");
var _createTheme = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createTheme.js [app-ssr] (ecmascript)"));
var _createTypography = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createTypography.js [app-ssr] (ecmascript)"));
var _identifier = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/identifier.js [app-ssr] (ecmascript)"));
var _InitColorSchemeScript = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/InitColorSchemeScript/InitColorSchemeScript.js [app-ssr] (ecmascript)");
var _jsxRuntime = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const { CssVarsProvider: InternalCssVarsProvider, useColorScheme, getInitColorSchemeScript: deprecatedGetInitColorSchemeScript } = (0, _system.unstable_createCssVarsProvider)({
    themeId: _identifier.default,
    // @ts-ignore ignore module augmentation tests
    theme: ()=>(0, _createTheme.default)({
            cssVariables: true
        }),
    colorSchemeStorageKey: _InitColorSchemeScript.defaultConfig.colorSchemeStorageKey,
    modeStorageKey: _InitColorSchemeScript.defaultConfig.modeStorageKey,
    defaultColorScheme: {
        light: _InitColorSchemeScript.defaultConfig.defaultLightColorScheme,
        dark: _InitColorSchemeScript.defaultConfig.defaultDarkColorScheme
    },
    resolveTheme: (theme)=>{
        const newTheme = {
            ...theme,
            typography: (0, _createTypography.default)(theme.palette, theme.typography)
        };
        newTheme.unstable_sx = function sx(props) {
            return (0, _styleFunctionSx.default)({
                sx: props,
                theme: this
            });
        };
        return newTheme;
    }
});
exports.useColorScheme = useColorScheme;
let warnedOnce = false;
// TODO: remove in v7
// eslint-disable-next-line @typescript-eslint/naming-convention
function Experimental_CssVarsProvider(props) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (!warnedOnce) {
            console.warn([
                'MUI: The Experimental_CssVarsProvider component has been ported into ThemeProvider.',
                '',
                "You should use `import { ThemeProvider } from '@mui/material/styles'` instead.",
                'For more details, check out https://mui.com/material-ui/customization/css-theme-variables/usage/'
            ].join('\n'));
            warnedOnce = true;
        }
    }
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(InternalCssVarsProvider, {
        ...props
    });
}
let warnedInitScriptOnce = false;
// TODO: remove in v7
const getInitColorSchemeScript = (params)=>{
    if (!warnedInitScriptOnce) {
        console.warn([
            'MUI: The getInitColorSchemeScript function has been deprecated.',
            '',
            "You should use `import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'`",
            'and replace the function call with `<InitColorSchemeScript />` instead.'
        ].join('\n'));
        warnedInitScriptOnce = true;
    }
    return deprecatedGetInitColorSchemeScript(params);
};
/**
 * TODO: remove this export in v7
 * @deprecated
 * The `CssVarsProvider` component has been deprecated and ported into `ThemeProvider`.
 *
 * You should use `ThemeProvider` and `createTheme()` instead:
 *
 * ```diff
 * - import { CssVarsProvider, extendTheme } from '@mui/material/styles';
 * + import { ThemeProvider, createTheme } from '@mui/material/styles';
 *
 * - const theme = extendTheme();
 * + const theme = createTheme({
 * +   cssVariables: true,
 * +   colorSchemes: { light: true, dark: true },
 * + });
 *
 * - <CssVarsProvider theme={theme}>
 * + <ThemeProvider theme={theme}>
 * ```
 *
 * To see the full documentation, check out https://mui.com/material-ui/customization/css-theme-variables/usage/.
 */ exports.getInitColorSchemeScript = getInitColorSchemeScript;
const CssVarsProvider = exports.CssVarsProvider = InternalCssVarsProvider;
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/ThemeProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-ssr] (ecmascript)").default;
var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-ssr] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ThemeProvider;
var React = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
var _ThemeProviderNoVars = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/ThemeProviderNoVars.js [app-ssr] (ecmascript)"));
var _ThemeProviderWithVars = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/ThemeProviderWithVars.js [app-ssr] (ecmascript)");
var _identifier = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/identifier.js [app-ssr] (ecmascript)"));
var _jsxRuntime = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
function ThemeProvider({ theme, ...props }) {
    const noVarsTheme = React.useMemo(()=>{
        if (typeof theme === 'function') {
            return theme;
        }
        const muiTheme = _identifier.default in theme ? theme[_identifier.default] : theme;
        if (!('colorSchemes' in muiTheme)) {
            if (!('vars' in muiTheme)) {
                // For non-CSS variables themes, set `vars` to null to prevent theme inheritance from the upper theme.
                // The example use case is the docs demo that uses ThemeProvider to customize the theme while the upper theme is using CSS variables.
                return {
                    ...theme,
                    vars: null
                };
            }
            return theme;
        }
        return null;
    }, [
        theme
    ]);
    if (noVarsTheme) {
        return /*#__PURE__*/ (0, _jsxRuntime.jsx)(_ThemeProviderNoVars.default, {
            theme: noVarsTheme,
            ...props
        });
    }
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(_ThemeProviderWithVars.CssVarsProvider, {
        theme: theme,
        ...props
    });
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/makeStyles.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-ssr] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = makeStyles;
var _formatMuiErrorMessage = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/formatMuiErrorMessage/index.js [app-ssr] (ecmascript)"));
function makeStyles() {
    throw new Error(("TURBOPACK compile-time truthy", 1) ? 'MUI: makeStyles is no longer exported from @mui/material/styles.\n' + 'You have to import it from @mui/styles.\n' + 'See https://mui.com/r/migration-v4/#mui-material-styles for more details.' : "TURBOPACK unreachable");
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/withStyles.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-ssr] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = withStyles;
var _formatMuiErrorMessage = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/formatMuiErrorMessage/index.js [app-ssr] (ecmascript)"));
function withStyles() {
    throw new Error(("TURBOPACK compile-time truthy", 1) ? 'MUI: withStyles is no longer exported from @mui/material/styles.\n' + 'You have to import it from @mui/styles.\n' + 'See https://mui.com/r/migration-v4/#mui-material-styles for more details.' : "TURBOPACK unreachable");
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/withTheme.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-ssr] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = withTheme;
var _formatMuiErrorMessage = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/formatMuiErrorMessage/index.js [app-ssr] (ecmascript)"));
function withTheme() {
    throw new Error(("TURBOPACK compile-time truthy", 1) ? 'MUI: withTheme is no longer exported from @mui/material/styles.\n' + 'You have to import it from @mui/styles.\n' + 'See https://mui.com/r/migration-v4/#mui-material-styles for more details.' : "TURBOPACK unreachable");
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/experimental_extendTheme.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-ssr] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = deprecatedExtendTheme;
var _createThemeWithVars = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createThemeWithVars.js [app-ssr] (ecmascript)"));
let warnedOnce = false;
function deprecatedExtendTheme(...args) {
    if (!warnedOnce) {
        console.warn([
            'MUI: The `experimental_extendTheme` has been stabilized.',
            '',
            "You should use `import { extendTheme } from '@mui/material/styles'`"
        ].join('\n'));
        warnedOnce = true;
    }
    return (0, _createThemeWithVars.default)(...args);
}
}),
"[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireWildcard = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireWildcard.js [app-ssr] (ecmascript)").default;
var _interopRequireDefault = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-ssr] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _exportNames = {
    experimental_sx: true,
    THEME_ID: true,
    adaptV4Theme: true,
    hexToRgb: true,
    rgbToHex: true,
    hslToRgb: true,
    decomposeColor: true,
    recomposeColor: true,
    getContrastRatio: true,
    getLuminance: true,
    emphasize: true,
    alpha: true,
    darken: true,
    lighten: true,
    css: true,
    keyframes: true,
    StyledEngineProvider: true,
    unstable_createBreakpoints: true,
    createTheme: true,
    unstable_createMuiStrictModeTheme: true,
    createStyles: true,
    unstable_getUnit: true,
    unstable_toUnitless: true,
    responsiveFontSizes: true,
    createTransitions: true,
    duration: true,
    easing: true,
    createColorScheme: true,
    useTheme: true,
    useThemeProps: true,
    styled: true,
    ThemeProvider: true,
    makeStyles: true,
    withStyles: true,
    withTheme: true,
    extendTheme: true,
    experimental_extendTheme: true,
    getOverlayAlpha: true,
    shouldSkipGeneratingVar: true,
    private_createTypography: true,
    private_createMixins: true,
    private_excludeVariablesFromRoot: true
};
Object.defineProperty(exports, "StyledEngineProvider", {
    enumerable: true,
    get: function() {
        return _system.StyledEngineProvider;
    }
});
Object.defineProperty(exports, "THEME_ID", {
    enumerable: true,
    get: function() {
        return _identifier.default;
    }
});
Object.defineProperty(exports, "ThemeProvider", {
    enumerable: true,
    get: function() {
        return _ThemeProvider.default;
    }
});
Object.defineProperty(exports, "adaptV4Theme", {
    enumerable: true,
    get: function() {
        return _adaptV4Theme.default;
    }
});
Object.defineProperty(exports, "alpha", {
    enumerable: true,
    get: function() {
        return _system.alpha;
    }
});
Object.defineProperty(exports, "createColorScheme", {
    enumerable: true,
    get: function() {
        return _createColorScheme.default;
    }
});
Object.defineProperty(exports, "createStyles", {
    enumerable: true,
    get: function() {
        return _createStyles.default;
    }
});
Object.defineProperty(exports, "createTheme", {
    enumerable: true,
    get: function() {
        return _createTheme.default;
    }
});
Object.defineProperty(exports, "createTransitions", {
    enumerable: true,
    get: function() {
        return _createTransitions.default;
    }
});
Object.defineProperty(exports, "css", {
    enumerable: true,
    get: function() {
        return _system.css;
    }
});
Object.defineProperty(exports, "darken", {
    enumerable: true,
    get: function() {
        return _system.darken;
    }
});
Object.defineProperty(exports, "decomposeColor", {
    enumerable: true,
    get: function() {
        return _system.decomposeColor;
    }
});
Object.defineProperty(exports, "duration", {
    enumerable: true,
    get: function() {
        return _createTransitions.duration;
    }
});
Object.defineProperty(exports, "easing", {
    enumerable: true,
    get: function() {
        return _createTransitions.easing;
    }
});
Object.defineProperty(exports, "emphasize", {
    enumerable: true,
    get: function() {
        return _system.emphasize;
    }
});
Object.defineProperty(exports, "experimental_extendTheme", {
    enumerable: true,
    get: function() {
        return _experimental_extendTheme.default;
    }
});
exports.experimental_sx = experimental_sx;
Object.defineProperty(exports, "extendTheme", {
    enumerable: true,
    get: function() {
        return _createThemeWithVars.default;
    }
});
Object.defineProperty(exports, "getContrastRatio", {
    enumerable: true,
    get: function() {
        return _system.getContrastRatio;
    }
});
Object.defineProperty(exports, "getLuminance", {
    enumerable: true,
    get: function() {
        return _system.getLuminance;
    }
});
Object.defineProperty(exports, "getOverlayAlpha", {
    enumerable: true,
    get: function() {
        return _getOverlayAlpha.default;
    }
});
Object.defineProperty(exports, "hexToRgb", {
    enumerable: true,
    get: function() {
        return _system.hexToRgb;
    }
});
Object.defineProperty(exports, "hslToRgb", {
    enumerable: true,
    get: function() {
        return _system.hslToRgb;
    }
});
Object.defineProperty(exports, "keyframes", {
    enumerable: true,
    get: function() {
        return _system.keyframes;
    }
});
Object.defineProperty(exports, "lighten", {
    enumerable: true,
    get: function() {
        return _system.lighten;
    }
});
Object.defineProperty(exports, "makeStyles", {
    enumerable: true,
    get: function() {
        return _makeStyles.default;
    }
});
Object.defineProperty(exports, "private_createMixins", {
    enumerable: true,
    get: function() {
        return _createMixins.default;
    }
});
Object.defineProperty(exports, "private_createTypography", {
    enumerable: true,
    get: function() {
        return _createTypography.default;
    }
});
Object.defineProperty(exports, "private_excludeVariablesFromRoot", {
    enumerable: true,
    get: function() {
        return _excludeVariablesFromRoot.default;
    }
});
Object.defineProperty(exports, "recomposeColor", {
    enumerable: true,
    get: function() {
        return _system.recomposeColor;
    }
});
Object.defineProperty(exports, "responsiveFontSizes", {
    enumerable: true,
    get: function() {
        return _responsiveFontSizes.default;
    }
});
Object.defineProperty(exports, "rgbToHex", {
    enumerable: true,
    get: function() {
        return _system.rgbToHex;
    }
});
Object.defineProperty(exports, "shouldSkipGeneratingVar", {
    enumerable: true,
    get: function() {
        return _shouldSkipGeneratingVar.default;
    }
});
Object.defineProperty(exports, "styled", {
    enumerable: true,
    get: function() {
        return _styled.default;
    }
});
Object.defineProperty(exports, "unstable_createBreakpoints", {
    enumerable: true,
    get: function() {
        return _createBreakpoints.unstable_createBreakpoints;
    }
});
Object.defineProperty(exports, "unstable_createMuiStrictModeTheme", {
    enumerable: true,
    get: function() {
        return _createMuiStrictModeTheme.default;
    }
});
Object.defineProperty(exports, "unstable_getUnit", {
    enumerable: true,
    get: function() {
        return _cssUtils.getUnit;
    }
});
Object.defineProperty(exports, "unstable_toUnitless", {
    enumerable: true,
    get: function() {
        return _cssUtils.toUnitless;
    }
});
Object.defineProperty(exports, "useTheme", {
    enumerable: true,
    get: function() {
        return _useTheme.default;
    }
});
Object.defineProperty(exports, "useThemeProps", {
    enumerable: true,
    get: function() {
        return _useThemeProps.default;
    }
});
Object.defineProperty(exports, "withStyles", {
    enumerable: true,
    get: function() {
        return _withStyles.default;
    }
});
Object.defineProperty(exports, "withTheme", {
    enumerable: true,
    get: function() {
        return _withTheme.default;
    }
});
var _formatMuiErrorMessage = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/utils/formatMuiErrorMessage/index.js [app-ssr] (ecmascript)"));
var _identifier = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/identifier.js [app-ssr] (ecmascript)"));
var _adaptV4Theme = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/adaptV4Theme.js [app-ssr] (ecmascript)"));
var _system = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/system/index.js [app-ssr] (ecmascript)");
var _createBreakpoints = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/system/createBreakpoints/index.js [app-ssr] (ecmascript)");
var _createTheme = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createTheme.js [app-ssr] (ecmascript)"));
var _createMuiStrictModeTheme = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createMuiStrictModeTheme.js [app-ssr] (ecmascript)"));
var _createStyles = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createStyles.js [app-ssr] (ecmascript)"));
var _cssUtils = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/cssUtils.js [app-ssr] (ecmascript)");
var _responsiveFontSizes = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/responsiveFontSizes.js [app-ssr] (ecmascript)"));
var _createTransitions = _interopRequireWildcard(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createTransitions.js [app-ssr] (ecmascript)"));
var _createColorScheme = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createColorScheme.js [app-ssr] (ecmascript)"));
var _useTheme = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/useTheme.js [app-ssr] (ecmascript)"));
var _useThemeProps = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/useThemeProps.js [app-ssr] (ecmascript)"));
var _styled = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/styled.js [app-ssr] (ecmascript)"));
var _ThemeProvider = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/ThemeProvider.js [app-ssr] (ecmascript)"));
var _makeStyles = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/makeStyles.js [app-ssr] (ecmascript)"));
var _withStyles = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/withStyles.js [app-ssr] (ecmascript)"));
var _withTheme = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/withTheme.js [app-ssr] (ecmascript)"));
var _ThemeProviderWithVars = __turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/ThemeProviderWithVars.js [app-ssr] (ecmascript)");
Object.keys(_ThemeProviderWithVars).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    if (key in exports && exports[key] === _ThemeProviderWithVars[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _ThemeProviderWithVars[key];
        }
    });
});
var _createThemeWithVars = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createThemeWithVars.js [app-ssr] (ecmascript)"));
var _experimental_extendTheme = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/experimental_extendTheme.js [app-ssr] (ecmascript)"));
var _getOverlayAlpha = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/getOverlayAlpha.js [app-ssr] (ecmascript)"));
var _shouldSkipGeneratingVar = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/shouldSkipGeneratingVar.js [app-ssr] (ecmascript)"));
var _createTypography = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createTypography.js [app-ssr] (ecmascript)"));
var _createMixins = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/createMixins.js [app-ssr] (ecmascript)"));
var _excludeVariablesFromRoot = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/countries-nextjs-react25k-testing/node_modules/@mui/material/styles/excludeVariablesFromRoot.js [app-ssr] (ecmascript)"));
// TODO: Remove this function in v6.
// eslint-disable-next-line @typescript-eslint/naming-convention
function experimental_sx() {
    throw new Error(("TURBOPACK compile-time truthy", 1) ? 'MUI: The `experimental_sx` has been moved to `theme.unstable_sx`.' + 'For more details, see https://github.com/mui/material-ui/pull/35150.' : "TURBOPACK unreachable");
} // The legacy utilities from @mui/styles
 // These are just empty functions that throws when invoked
 // TODO: Remove in v7
 // Private methods for creating parts of the theme
}),
];

//# sourceMappingURL=9fe60_%40mui_material_styles_6b7e7e1b._.js.map