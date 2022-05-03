import React from "react";
import memesData from "../memesData";

export default function Content() {
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button">Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src="#" alt="meme" className="meme--image" />
        <h2 className="meme--text top">Hi</h2>
        <h2 className="meme--text bottom">Hi</h2>
      </div>
    </main>
  );
}
