  import { Cross, Circle } from '../Pawns/Symbols';

  const Setup = ({ onSelectSymbol }) => {
    return (
      <div className="setup">
        <h2>Choisissez votre pion</h2>
        <div className="setup-buttons">
        <button className="symbol-btn" onClick={() => onSelectSymbol('X')}>
            <Cross />
          </button>
          <button className="symbol-btn" onClick={() => onSelectSymbol('O')}>
            <Circle />
          </button>
        </div>
      </div>
    );
  };

  export default Setup;