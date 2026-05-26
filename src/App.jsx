import Board from './components/Board/Board';
import Setup from './components/Setup/Setup';
import { useGameState } from './hooks/useGameState';
import { GRID_SIZE } from './config/gameConfig';

import './App.css';

function App() {
  const {
    gridSize,
    playerSymbol,
    setPlayerSymbol,
    squares,
    isHumanTurn,
    winner,
    playSquare,
    resetGame,
    startGame
  } = useGameState();

  return (
    <div className="game-container">
      <h1>Tic Tac Toe</h1>
      
      {!playerSymbol ? (
        <Setup onStartGame={startGame} />
      ) : (
        <>
          <div className="game-status">
            {winner === 'Draw' && <h2>Match nulle</h2>}
            {winner && winner !== 'Draw' && (
              <h2>
                Gagnant : {winner === playerSymbol ? 'Vous' : "L'ordinateur"} ({winner})
              </h2>
            )}
            {!winner && (
              <p>
                Vous jouez : <strong>{playerSymbol}</strong> | 
                Tour : <strong>{isHumanTurn ? "À vous" : "Ordinateur..."}</strong>
              </p>
            )}
          </div>
          <Board squares={squares} onSquareClick={playSquare} size={gridSize} />
          <button className="reset-btn" onClick={resetGame}>
            Rejouer
          </button>
        </>
      )}
    </div>
  );
}

export default App;