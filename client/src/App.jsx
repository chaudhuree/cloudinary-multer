import React, { useRef, useState } from "react";
import "./App.css";
import { postImage } from "./api";

function App() {
  const [imagePreview, setImagePreview] = useState(""); // <- To
  const [imageFile, setImageFile] = useState({});
  const [imageUrl, setImageUrl] = useState(null);
  const [copied, setCopied] = useState(false);
  const textRef = useRef(null);

  function handleClick() {
		
    const selectedText = textRef.current.innerText;
    navigator.clipboard.writeText(selectedText)
      .then(() => {
				setCopied(true)
				setTimeout(() => {
					setCopied(false)
				}, 2000);}
			)
      .catch(() => console.error('Failed to copy text'));
		
  }

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", (e) => {
        setImagePreview(e.target.result);
        console.log(e.target.result);
      });

      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async () => {
    try {
      const res = await postImage({ image: imageFile });
      console.log(res.data.data.imageUrl);
      setImageUrl(res.data.data.imageUrl);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <div className="uploadImage">
        <input
          type="file"
          accept="image/png, image/jpg, image/jpeg, image/webp"
          onChange={(e) => handleImagePreview(e)}
        />
      </div>

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <p onClick={handleClick} ref={textRef}>
        {imageUrl}
      </p>
			<p>{copied && <span style={{ marginLeft: '0.5rem', color: 'green' }}>Copied!</span>}</p>
      <div
        className="image-preview-div"
        style={{ display: imagePreview === "" ? "none" : "flex" }}
      >
        <img src={imagePreview} alt="" />
      </div>
    </div>
  );
}

export default App;
