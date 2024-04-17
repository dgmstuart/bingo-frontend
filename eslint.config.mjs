import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["dist"],
    rules: {
      "no-var": "error",
      "prefer-const": "error",
      "func-style": ["error", "expression"],
    },
  },
  eslintPluginPrettierRecommended,
);
