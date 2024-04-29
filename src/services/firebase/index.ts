import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

import config from "@/config";

const options = {
  apiKey: config.firebase.apiKey,
  appId: config.firebase.appId,
  projectId: "blog-935a3",
  measurementId: "G-3KSCB3BS82",
  messagingSenderId: "593972114524",
  storageBucket: "blog-935a3.appspot.com",
  authDomain: "blog-935a3.firebaseapp.com",
};

const app = initializeApp(options);
export const db = getFirestore(app);
export const storage = getStorage(app);
