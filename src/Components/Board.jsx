import "./Board.css";
import Row from "./Row";
import React, { useState } from "react";
import DEFAULT_BOARD from "../Model/DEFAULT_BOARD.js";

const Board = () => {
  const [boardState, setBoardState] = useState(DEFAULT_BOARD);
  return (
    <table>
      <tbody>
        {boardState.map((string) => {
          return <Row shape={string}></Row>;
        })}
      </tbody>
    </table>
  );
};

export default Board;
