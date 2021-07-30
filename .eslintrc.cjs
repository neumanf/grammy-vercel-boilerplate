module.exports = {
    plugins: ["@typescript-eslint", "prettier"],
    extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
    rules: {},
    overrides: [
        {
            files: ["src/*/*"],
            rules: {
                "max-lines": "off",
                "max-nested-callbacks": "off",
                "max-statements": "off",
            },
        },
    ],
    rules: {
        "@typescript-eslint/no-var-requires": "off",
    },
    settings: {
        node: {
            extensions: [".ts", ".json"],
        },
    },
};
