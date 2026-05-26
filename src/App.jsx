import Board from './components/Board';
import Setup from './components/Setup';
import { gameState } from './hooks/gameState';
import './App.css';

function App() {
  const {
    GRID_SIZE,
    playerSymbol,
    setPlayerSymbol,
    squares,
    isHumanTurn,
    winner,
    playSquare,
    resetGame
  } = gameState();

  return (
    <div className="game-container">
      <h1>Tic Tac Toe</h1>
      
      {!playerSymbol ? (
        <Setup onSelectSymbol={(symbol) => setPlayerSymbol(symbol)} />
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
          <Board squares={squares} onSquareClick={playSquare} size={GRID_SIZE} />
          <button className="reset-btn" onClick={resetGame}>
            Rejouer
          </button>
        </>
      )}
    </div>
  );
}

export default App;