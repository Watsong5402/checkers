import Piece from "./Piece";

export default function Board({ board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <Piece which={playerSymbol} />
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
