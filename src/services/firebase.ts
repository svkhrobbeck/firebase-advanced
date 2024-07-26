import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import config from "@/config";

const options = {
  apiKey: config.firebase.apiKey,
  appId: config.firebase.appId,
  authDomain: "test-app-2ccc2.firebaseapp.com",
  storageBucket: "test-app-2ccc2.appspot.com",
  messagingSenderId: "745522774909",
  measurementId: "G-D6JFV6XN6J",
  projectId: "test-app-2ccc2",
};

export const app = !getApps().length ? initializeApp(options) : getApp();
export const storage = getStorage(app);
export const db = getFirestore(app);
