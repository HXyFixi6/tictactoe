import { useState } from 'react';
import Board from './components/Board';
import './App.css';

function App() {
  const [playerSymbol, setPlayerSymbol] = useState(null);
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <div className="game-container">
      <h1>Tic Tac Toe</h1>
        <Board squares={squares} />
    </div>
  );
}

export default App;