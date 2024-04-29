import { useState } from "react";
import * as Firestore from "firebase/firestore";

import { firebase } from "@/services";

export type PayloadType = Firestore.WithFieldValue<Firestore.DocumentData>;

const useUpdateDoc = (collectionName: string) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateDoc = async (docId: string, payload: PayloadType) => {
    setIsLoading(true);
    try {
      const docRef = Firestore.doc(firebase.db, collectionName, docId);
      await Firestore.updateDoc(docRef, payload);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError(err as string);
    } finally {
      setIsLoading(false);
    }
  };

  return { updateDoc, isLoading, error };
};

export default useUpdateDoc;
