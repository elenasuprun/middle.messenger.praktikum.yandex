import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import {defineConfig, globalIgnores} from "eslint/config";

export default defineConfig([
    { files: ["**/*.{js,ts}"], plugins: { js }, extends: ["js/recommended"] },
    { files: ["**/*.{js,ts}"], languageOptions: { globals: globals.browser } },
    tseslint.configs.recommended,
    globalIgnores(["/node_modules/**", "/dist/**"]),
]);
