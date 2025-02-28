import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.mocha,
            },
        },
    },

    pluginJs.configs.recommended,

    {
        rules: {
            "no-unused-vars": ["warn", { varsIgnorePattern: "^should$" }],
            "no-undef": "warn",
            "indent": ["error", 4],
            "quotes": ["error", "double"],
        },
    },
];
