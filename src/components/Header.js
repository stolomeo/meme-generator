import styled from "styled-components";
import trollFace from "../assets/TrollFace.svg";

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo src={trollFace} alt="Troll face" />
      <h1>Meme Generator</h1>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  font-family: "Koulen", cursive;
  align-items: center;
  height: 65px;
  font-size: 24px;
  background: linear-gradient(90deg, #672280 1.18%, #a626d3 100%);
  color: white;
  padding: 20px;
  justify-content: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const Logo = styled.img`
  width: 60px;
  margin-right: 1rem;
`;
