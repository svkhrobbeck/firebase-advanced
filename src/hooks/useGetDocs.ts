import { useState } from "react";
import * as Firestore from "firebase/firestore";

import { firebase } from "@/services";

const useGetDocs = <T>(collectionName: string) => {
  const [data, setData] = useState<T>([] as T);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const collectionRef = Firestore.collection(firebase.db, collectionName);

  const getDocs = async () => {
    setIsLoading(true);
    try {
      const data = await Firestore.getDocs(collectionRef);
      const array = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setData(array as T);
      return array;
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError(err as string);
    } finally {
      setIsLoading(false);
    }
  };

  return { getDocs, data, isLoading, error };
};

export default useGetDocs;
