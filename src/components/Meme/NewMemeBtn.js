import React from "react";
import styled from "styled-components";

export default function NewMemeBtn({ getMemeImage }) {
  return <Button onClick={getMemeImage}>Get a new meme image 🖼</Button>;
}
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
