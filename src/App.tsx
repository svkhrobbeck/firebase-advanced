import { useAddDoc, useUploadFile } from "./hooks";

const App = () => {
  const { addDoc } = useAddDoc("blogs");
  const { error, downloadUrl, uploadFile } = useUploadFile("images");

  console.log(error);
  console.log(downloadUrl);

  return (
    <div>
      <input
        type="file"
        name="file"
        accept="image/*"
        onChange={e => uploadFile(e.target.files && e.target.files[0])}
      />
      <button onClick={() => addDoc({ author: "Suhrobbek" })}>create collection</button>
    </div>
  );
};

export default App;
