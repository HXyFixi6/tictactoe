import { useState, useEffect } from 'react';
import Board from './components/Board';
import Setup from './components/Setup';
import './App.css';

function App() {
  const [playerSymbol, setPlayerSymbol] = useState(null);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isHumanTurn, setIsHumanTurn] = useState(true);
  const botSymbol = playerSymbol === 'X' ? 'O' : 'X';

  const handleSquareClick = (index) => {
    if (squares[index] !== null || !isHumanTurn) {
      return;
    }

    const nextSquares = [...squares];
    nextSquares[index] = playerSymbol;
    
    setSquares(nextSquares);
    setIsHumanTurn(false);
  };

  useEffect(() => {
    if (isHumanTurn || !playerSymbol) return;

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
  }, [isHumanTurn, squares, playerSymbol, botSymbol]);

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setPlayerSymbol(null);
    setIsHumanTurn(true);
  };

  return (
    <div className="game-container">
      <h1>Tic Tac Toe</h1>
      
      {!playerSymbol ? (
        <Setup onSelectSymbol={(symbol) => setPlayerSymbol(symbol)} />
      ) : (
        <>
          <p>Vous jouez avec : <strong>{playerSymbol}</strong></p>
          <Board squares={squares} onSquareClick={handleSquareClick} />
          <button className="reset-btn" onClick={handleReset}>
            Recommencer
          </button>
        </>
      )}
    </div>
  );
}

export default App;