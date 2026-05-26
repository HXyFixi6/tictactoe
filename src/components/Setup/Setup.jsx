import { useState } from 'react';
import { Cross, Circle } from '../Pawns/Symbols';

  const Setup = ({ onStartGame }) => {
    const [selectedSize, setSelectedSize] = useState(3)
    return (
      <div className="setup">

        <button onClick={() => setSelectedSize(3)}>
          3
        </button>
        <button onClick={() => setSelectedSize(4)}>
          4
        </button>

        <h2>Choisissez votre pion</h2>
        <div className="setup-buttons">
        <button className="symbol-btn" onClick={() => onStartGame('X', selectedSize)}>
            <Cross />
        </button>
        <button className="symbol-btn" onClick={() => onStartGame('O', selectedSize)}>
          <Circle />
        </button>
        </div>
      </div>
    );
  };

  export default Setup;