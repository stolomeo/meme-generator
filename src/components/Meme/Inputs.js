import React from "react";
import styled from "styled-components";

export default function Inputs({ topText, bottomText, handleChange }) {
  return (
    <>
      <Input
        type="text"
        placeholder="Top text"
        name="topText"
        value={topText}
        onChange={handleChange}
      />
      <Input
        type="text"
        placeholder="Bottom text"
        name="bottomText"
        value={bottomText}
        onChange={handleChange}
      />
    </>
  );
}
const Input = styled.input`
  font-family: "Karla", sans-serif;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid #d5d4d8;
  text-indent: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
