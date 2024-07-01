import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [myFiles, setMyFiles] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const handleImagePreview = () => {
    if (myFiles) {
      Array.from(myFiles).map( (myFile)=>{
        const reader = new FileReader();
        reader.onload = (e) => {
          setImageUrls( (prev) =>  [ ...prev , e.target.result]   );
        };
        reader.readAsDataURL(myFile);
      } )
    }
  };


  return (
    <>
      <h1>Image PreView</h1>
      {imageUrls.map((imageUrl , index )=>(
        <img key={index} src={imageUrl} alt="" />
      ))}
      <input
        type="file"
        multiple="multiple"
        onChange={(e) => setMyFiles(e.target.files)}
      />
      <button onClick={handleImagePreview}>Save</button>
    </>
  );
}

export default App;
