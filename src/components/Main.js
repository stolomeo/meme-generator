import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Inputs from "./Meme/Inputs";
import MemeContent from "./Meme/MemeContent";
import NewMemeBtn from "./Meme/NewMemeBtn";

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
        <NewMemeBtn getMemeImage={getMemeImage} />
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

const MemeWrapper = styled.div`
  margin-top: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
