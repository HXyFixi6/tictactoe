import { PlayerSymbol } from '../Pawns/Symbols';

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      <PlayerSymbol symbol={value} />
    </button>
  );
};

export default Square;