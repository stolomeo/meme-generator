import trollFace from "../assets/TrollFace.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={trollFace} alt="Troll face" className="header-img" />
      <h1 className="header-title">Meme Generator</h1>
    </header>
  );
}
