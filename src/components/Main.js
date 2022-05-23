import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Inputs from "./Inputs";
import MemeContent from "./MemeContent";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <Form>
        <Inputs meme={meme} handleChange={handleChange} />
        <Button onClick={getMemeImage}>Get a new meme image 🖼</Button>
      </Form>
      <MemeWrapper>
        <MemeContent meme={meme} />
      </MemeWrapper>
    </main>
  );
}

const Form = styled.div`
  display: grid;
  grid-template: 40px 40px / 1fr 1fr;
  gap: 2rem;
  width: 50%;
  margin: auto;
  margin-top: 2rem;
`;

const Button = styled.button`
  grid-column: 1 / -1;
  font-family: "Koulen", cursive;
  font-size: 22px;
  border-radius: 5px;
  background: linear-gradient(90.41deg, #711f8d 1.14%, #a818da 100%);
  color: white;
  border: none;
  width: 40%;
  height: 40px;
  margin: auto;
  transition: 0.2s all;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

const MemeWrapper = styled.div`
  margin-top: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
