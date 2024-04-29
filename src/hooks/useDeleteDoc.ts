import { useState } from "react";
import { deleteObject, ref } from "firebase/storage";
import * as Firestore from "firebase/firestore";

import { firebase } from "@/services";

const useDeleteDoc = (collectionName: string) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const deleteDoc = async (docId: string, mediaFieldName = "") => {
    setIsLoading(true);
    try {
      const docRef = Firestore.doc(firebase.db, collectionName, docId);
      const doc = (await Firestore.getDoc(docRef)).data() as Firestore.DocumentData;

      if (mediaFieldName && doc.hasOwnProperty(mediaFieldName)) {
        const mediaRef = ref(firebase.storage, doc[mediaFieldName]);
        deleteObject(mediaRef).then(() => console.log("media deleted successfull"));
      }

      await Firestore.deleteDoc(docRef);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError(err as string);
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteDoc, isLoading, error };
};

export default useDeleteDoc;
