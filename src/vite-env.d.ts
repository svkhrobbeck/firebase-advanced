/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_EDITOR_API_KEY: string;
  readonly VITE_APP_FIREBASE_API_KEY: string;
  readonly VITE_APP_FIREBASE_APP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
