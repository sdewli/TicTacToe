import React, { useState } from "react";

const generateBoard = (size) => Array(size * size).fill("");
const generateWinningPatterns = (size) => {
  const patterns = [];

  // Rows and Columns
  for (let i = 0; i < size; i++) {
    const row = [];
    const col = [];
    for (let j = 0; j < size; j++) {
      row.push(i * size + j);
      col.push(j * size + i);
    }
    patterns.push(row);
    patterns.push(col);
  }

  // Diagonals
  const diag1 = [];
  const diag2 = [];
  for (let i = 0; i < size; i++) {
    diag1.push(i * size + i);
    diag2.push(i * size + (size - 1 - i));
  }
  patterns.push(diag1);
  patterns.push(diag2);

  return patterns;
};

const useTicTacToe = (boardSize = 3) => {
  const [board, setBoard] = useState(generateBoard(boardSize));
  const [isXNext, setIsXNext] = useState(true);
  const WINNING_PATTERN = generateWinningPatterns(boardSize);
  console.log(WINNING_PATTERN);
  const calculateWinner = (currentBoard) => {
    // Loop through all winning patterns generated based on board size
    for (let i = 0; i < WINNING_PATTERN.length; i++) {
      const pattern = WINNING_PATTERN[i];
  
      // Check if all positions in the current pattern have the same non-empty value
      const firstCell = currentBoard[pattern[0]];
      if (firstCell && pattern.every((index) => currentBoard[index] === firstCell)) {
        return firstCell;  // Return the winner (either "X" or "O")
      }
    }
    return "";  // No winner
  };
  

  const handleClick = (index) => {
    const winner = calculateWinner(board);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} wins!!`;

    if (!board.includes("")) return "It's a Draw! Reset the game.";
    return `Player ${isXNext ? "X" : "O"}'s turn`;
  };

  const resetGame = () => {
    setBoard(generateBoard(boardSize));
    setIsXNext(true);
  };

  return {
    board,
    handleClick,
    getStatusMessage,
    resetGame,
  };
};

export default useTicTacToe;
