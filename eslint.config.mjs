import astro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [...tseslint.configs.recommended, ...astro.configs.recommended];
