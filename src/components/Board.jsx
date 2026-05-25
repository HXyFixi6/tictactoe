import Square from './Square';

const Board = ({ squares }) => {
  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square 
          key={index} 
          value={square} 
          onClick={() => console.log(`Clic sur la case ${index}`)} 
        />
      ))}
    </div>
  );
};

export default Board;