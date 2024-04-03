import whitePng from "../res/whitePiece.png";
import blackPng from "../res/blackPiece.png";

const Piece = ({ which }) => {
  return <td>{determinePng(which)}</td>;
};

const determinePng = (which) => {
  if (which === "W") {
    return <img src={whitePng}></img>;
  } else if (which === "B") {
    return <img src={blackPng}></img>;
  } else if (which === "_") {
    return null;
  } else {
    throw new TypeError("type should be B, W, or _");
  }
};

export default Piece;
