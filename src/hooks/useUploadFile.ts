import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { storage } from "@/services/firebase";

const useUploadFile = (folder = "/") => {
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const uploadFile = async (file: File | null) => {
    if (!file) return;
    setIsLoading(true);

    const fileRef = ref(storage, `${folder}${folder && "/"}${file.name}`);
    const task = uploadBytesResumable(fileRef, file);

    task.on(
      "state_changed",
      snapshot => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log(`Upload is ${progress}% done`);
      },
      err => {
        if (err instanceof Error) setError(err.message);
        else setError(err as string);
      },
      () => {
        getDownloadURL(task.snapshot.ref).then(setDownloadUrl);
        setIsLoading(false);
      }
    );
  };

  return { isLoading, uploadFile, error, downloadUrl };
};

export default useUploadFile;
