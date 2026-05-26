import Square from './Square';

const Board = ({ squares, onSquareClick, size }) => {
  return (
    <div 
      className="board" 
      style={{
        gridTemplateColumns: `repeat(${size}, 100px)`,
        gridTemplateRows: `repeat(${size}, 100px)`
      }}
    >
      {squares.map((square, index) => (
        <Square 
          key={index} 
          value={square} 
          onClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;