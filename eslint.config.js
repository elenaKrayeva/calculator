import js from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: { js },
    extends: ["js:recommended"],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn"
    }
  }
]);
