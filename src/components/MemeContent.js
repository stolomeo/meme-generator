import React from "react";
import styled from "styled-components";
export default function MemeContent({ meme }) {
  const { randomImage, topText, bottomText } = meme;
  return (
    <>
      <MemeImage src={randomImage} alt="meme" />
      <Text style={{ top: 0 }}>{topText}</Text>
      <Text style={{ bottom: 0 }}>{bottomText}</Text>
    </>
  );
}
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
