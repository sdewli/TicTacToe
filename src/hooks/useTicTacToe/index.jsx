import React, { useState } from "react";

const intialborad = () => Array(9).fill("");
const useTicTacToe = () => {
  const [board, setBoard] = useState(intialborad());
  const [isXNext, setIsXNext] = useState(true);
  const WINNING_PATTERN = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERN.length; i++) {
      const [a, b, c] = WINNING_PATTERN[i];

      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return "";
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
    if (winner) return `Player ${winner} is winner!!..`;

    if (!board.includes("")) return "Its a Draw Reset the game";
    return `Player ${isXNext ? "X" : "O"} turn`;
  };

  const resetGame = () => {
    setBoard(intialborad());
    setIsXNext(true);
  };

  return {
    board,
    calculateWinner,
    handleClick,
    getStatusMessage,
    resetGame,
  };
};

export default useTicTacToe;
