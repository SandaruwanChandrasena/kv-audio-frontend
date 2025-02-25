import { useState } from "react";
import MediaUpload from "../utils/MedialUpload";

function Testing() {
  
const [file, setFile] = useState(null)

function uploadFile() {
  console.log(file);
  MediaUpload(file).then((url) => {
    console.log(url);
  })
}
  
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <input type="file" onChange={(e) => {
        setFile(e.target.files[0]);
      }} className="border"/>
      <button onClick={uploadFile} className="w-[200px] h-[50px] bg-blue-500 text-white py-2 hover:bg-blue-600 transition decoration-5">
        Upload
      </button>
    </div>
  );
}

export default Testing;
