/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_PLATFORM_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
