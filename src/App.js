import "./App.css";

import Board from "./components/Board.jsx";
import React, { useState } from "react";

const initialGameBoard = [
  ["_", "B", "_", "B", "_", "B", "_", "B"],
  ["B", "_", "B", "_", "B", "_", "B", "_"],
  ["_", "B", "_", "B", "_", "B", "_", "B"],
  ["_", "_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_", "_"],
  ["W", "_", "W", "_", "W", "_", "W", "_"],
  ["_", "W", "_", "W", "_", "W", "_", "W"],
  ["W", "_", "W", "_", "W", "_", "W", "_"],
];

function App() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  return (
    <main id="game-container">
      <Board board={gameBoard} />
    </main>
  );
}

export default App;
