import { useState, useEffect } from 'react';
import { checkWinner } from '../utils/gameLogic';

export const useGameState = () => {
  const [gridSize, setGridSize] = useState(3)
  const [playerSymbol, setPlayerSymbol] = useState(null);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isHumanTurn, setIsHumanTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const botSymbol = playerSymbol === 'X' ? 'O' : 'X';

  useEffect(() => {
    if (!playerSymbol || winner) return;

    const gameWinner = checkWinner(squares, gridSize);
    if (gameWinner) {
      setWinner(gameWinner);
      return;
    }

    const isDraw = squares.every((square) => square !== null);
    if (isDraw) {
      setWinner('Draw');
      return;
    }

    if (!isHumanTurn) {
      const emptyIndexes = squares
        .map((square, index) => (square === null ? index : null))
        .filter((val) => val !== null);

      if (emptyIndexes.length > 0) {
        const timer = setTimeout(() => {
          const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
          const nextSquares = [...squares];
          nextSquares[randomIndex] = botSymbol;
          
          setSquares(nextSquares);
          setIsHumanTurn(true); 
        }, 500);

        return () => clearTimeout(timer);
      }
    }
  }, [squares, isHumanTurn, winner, playerSymbol, botSymbol]);

  const playSquare = (index) => {
    if (squares[index] !== null || !isHumanTurn || winner) return;

    const nextSquares = [...squares];
    nextSquares[index] = playerSymbol;
    setSquares(nextSquares);
    setIsHumanTurn(false); 
  };

  const startGame = (symbol, size) =>{
    setGridSize(size);
    setPlayerSymbol(symbol);
    setSquares(Array(size * size).fill(null));
    setIsHumanTurn(true);
    setWinner(null);
  }

  const resetGame = () => {
    setPlayerSymbol(null);
    setIsHumanTurn(true);
    setWinner(null);
  };

  return {
    gridSize,
    playerSymbol,
    setPlayerSymbol,
    squares,
    isHumanTurn,
    winner,
    playSquare,
    resetGame,
    startGame
  };
};