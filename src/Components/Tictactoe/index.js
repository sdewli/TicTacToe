import React from "react";
import "./tictactoe.css";
import useTicTacToe from "../../hooks/useTicTacToe";

const TieTacToe = ({ boardSize }) => {
  const { board, handleClick, getStatusMessage, resetGame } = useTicTacToe(boardSize);

  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()} <button onClick={resetGame}>Reset</button>
      </div>
      <div className="board" style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}>
        {board.map((b, index) => (
          <button
            className="cell"
            key={index}
            onClick={() => handleClick(index)}
            disabled={b !== ""}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TieTacToe;
