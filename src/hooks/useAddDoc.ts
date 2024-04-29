import { useState } from "react";
import * as Firestore from "firebase/firestore";

import { firebase } from "@/services";

export type PayloadType = Firestore.WithFieldValue<Firestore.DocumentData>;

const useAddDoc = (collectionName: string) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const collectionRef = Firestore.collection(firebase.db, collectionName);

  const addDoc = async (payload: PayloadType) => {
    setIsLoading(true);
    try {
      await Firestore.addDoc(collectionRef, payload);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError(err as string);
    } finally {
      setIsLoading(false);
    }
  };

  return { addDoc, isLoading, error };
};

export default useAddDoc;
