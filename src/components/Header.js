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
  align-items: center;
  background: linear-gradient(90deg, #672280 1.18%, #a626d3);
  box-shadow: 0 50px 100px -20px rgb(50 50 93 / 25%),
    0 30px 60px -30px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%);
  color: #fff;
  display: flex;
  font-family: Koulen, cursive;
  font-size: 24px;
  height: 65px;
  justify-content: center;
  padding: 20px;
`;

const Logo = styled.img`
  width: 60px;
  margin-right: 1rem;
`;
