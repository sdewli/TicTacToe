import React from "react";

import "./tictactoe.css";
import useTicTacToe from "../../hooks/useTicTacToe";

const TieTacToe = () => {
  const { board, calculateWinner, handleClick, getStatusMessage, resetGame } =
    useTicTacToe();
  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()} <button onClick={resetGame}>Reset </button>
      </div>
      <div className="board">
        {board.map((b, index) => {
          return (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              disabled={!b === ""}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TieTacToe;
