export const checkWinner = (squares, size = 3) => {
    
  for (let row = 0; row < size; row++) {
    const firstInRow = squares[row * size];
    if (firstInRow) {
      let isWin = true;
      for (let col = 1; col < size; col++) {
        if (squares[row * size + col] !== firstInRow) {
          isWin = false;
          break;
        }
      }
      if (isWin) return firstInRow;
    }
  }

  for (let col = 0; col < size; col++) {
    const firstInCol = squares[col];
    if (firstInCol) {
      let isWin = true;
      for (let row = 1; row < size; row++) {
        if (squares[row * size + col] !== firstInCol) {
          isWin = false;
          break;
        }
      }
      if (isWin) return firstInCol;
    }
  }

  const firstDiag1 = squares[0];
  if (firstDiag1) {
    let isWin = true;
    for (let i = 1; i < size; i++) {
      if (squares[i * size + i] !== firstDiag1) {
        isWin = false;
        break;
      }
    }
    if (isWin) return firstDiag1;
  }

  const firstDiag2 = squares[size - 1];
  if (firstDiag2) {
    let isWin = true;
    for (let i = 1; i < size; i++) {
      if (squares[i * size + (size - 1 - i)] !== firstDiag2) {
        isWin = false;
        break;
      }
    }
    if (isWin) return firstDiag2;
  }

  return null;
};