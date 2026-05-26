import { useState, useEffect } from 'react';
import { checkWinner } from '../utils/gameLogic';
import { GRID_SIZE } from '../config/gameConfig';


export const useGameState = () => {
  const [playerSymbol, setPlayerSymbol] = useState(null);
  const [squares, setSquares] = useState(Array(GRID_SIZE * GRID_SIZE).fill(null));
  const [isHumanTurn, setIsHumanTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const botSymbol = playerSymbol === 'X' ? 'O' : 'X';

  useEffect(() => {
    if (!playerSymbol || winner) return;

    const gameWinner = checkWinner(squares, GRID_SIZE);
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

  const resetGame = () => {
    setSquares(Array(GRID_SIZE * GRID_SIZE).fill(null));
    setPlayerSymbol(null);
    setIsHumanTurn(true);
    setWinner(null);
  };

  return {
    playerSymbol,
    setPlayerSymbol,
    squares,
    isHumanTurn,
    winner,
    playSquare,
    resetGame
  };
};