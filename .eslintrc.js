module.exports = {
    env: {
        browser: false,
        es6: true,
    },
    extends: ["plugin:prettier/recommended"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: "module",
    },
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                singleQuote: false,
                tabWidth: 4,
                trailingComma: "all",
                Semicolons: true,
            },
        ],
    },
};
