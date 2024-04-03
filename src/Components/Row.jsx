import Piece from "./Piece";

const Row = ({ shape }) => {
  let tds = [];
  for (let i = 0; i < shape.length; i++) {
    tds.push(wrapInPiece(shape[i]));
  }
  return <tr>{tds}</tr>;
};

const wrapInPiece = (val) => <Piece which={val} />;

export default Row;
