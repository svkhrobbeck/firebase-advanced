const ENV = import.meta.env;

const config = {
  app: {
    env: ENV,
    isDev: ENV.MODE !== "production",
    editorApiKey: ENV.VITE_APP_EDITOR_API_KEY,
  },
  firebase: {
    apiKey: ENV.VITE_APP_FIREBASE_API_KEY,
    appId: ENV.VITE_APP_FIREBASE_APP_ID,
  },
  api: {
    // baseUrl: ENV.VITE_APP_API_BASE_URL,
  },
};

export default config;
