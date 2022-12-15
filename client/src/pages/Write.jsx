import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Category from "../components/Category";
import axios from "axios";

const Write = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("image", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch {}
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = upload();
    try {
    } catch {}
  };

  const handleCat = (e) => {
    setCat(e.target.value);
  };
  console.log(cat);

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility</b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          {/* CATEGORIES */}
          <h1>Category</h1>

          <Category cat={"science"} handleCat={handleCat}>
            Science
          </Category>
          <Category cat={"technology"} handleCat={handleCat}>
            Technology
          </Category>
          <Category cat={"art"} handleCat={handleCat}>
            Art
          </Category>
          <Category cat={"design"} handleCat={handleCat}>
            Design
          </Category>
          <Category cat={"food"} handleCat={handleCat}>
            Food
          </Category>

          {/* <div className="cat">
            <input
              type="radio"
              name="cat"
              value="science"
              id="science"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="technology"
              id="technology"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="art"
              id="art"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="design"
              id="design"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="food"
              id="food"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="food">Food</label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Write;
