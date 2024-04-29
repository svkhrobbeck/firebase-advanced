import { useState } from "react";
import * as Firestore from "firebase/firestore";

import { firebase } from "@/services";

const useGetDoc = (collectionName: string) => {
  const [data, setData] = useState<Firestore.DocumentData>({});
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getDoc = async (docId: string) => {
    setIsLoading(true);
    try {
      const docRef = Firestore.doc(firebase.db, collectionName, docId);
      const doc = await Firestore.getDoc(docRef);
      setData(doc.data() as Firestore.DocumentData);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError(err as string);
    } finally {
      setIsLoading(false);
    }
  };

  return { getDoc, data, isLoading, error };
};

export default useGetDoc;
