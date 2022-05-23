import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Inputs from "./Inputs";

export default function Meme() {
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
        <MemeImage src={meme.randomImage} alt="meme" />
        <Text style={{ top: 0 }}>{meme.topText}</Text>
        <Text style={{ bottom: 0 }}>{meme.bottomText}</Text>
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

const MemeImage = styled.img`
  max-width: 100%;
  border-radius: 1rem;
`;

const Text = styled.h2`
  position: absolute;
  width: 80%;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  margin: 15px 0;
  padding: 0 5px;
  font-family: impact, sans-serif;
  font-size: 2em;
  text-transform: uppercase;
  color: white;
  letter-spacing: 1px;
  text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,
    -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000,
    2px 2px 5px #000;
`;
