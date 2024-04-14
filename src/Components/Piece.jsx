import whitePng from "../res/whitePiece.png";
import blackPng from "../res/blackPiece.png";

export default function Piece({ which }) {
  return <button>{determinePng(which)}</button>;
}

const determinePng = (which) => {
  if (which === "W") {
    return <img className="piece" alt="white piece" src={whitePng}></img>;
  } else if (which === "B") {
    return <img className="piece" alt="piece of color" src={blackPng}></img>;
  } else if (which === "_") {
    return <></>;
  } else {
    throw new TypeError("type should be B, W, or _");
  }
};
