import type { Board} from './types';
import type { GameState } from './types';
import type { Cell } from './types';


// grille 6x7 null
export function createEmptyBoard(): Board {
  const board: Board = [];

  for (let i = 0; i < 6; i++) {
    const row = [];
    for (let j = 0; j < 7; j++) {
      row.push(null);
    }
    board.push(row);
  }
  return board;
}

export const state: GameState = {
  board: createEmptyBoard(),
  currentPlayer: 'RED',
  winner: null,
  isGameOver: false
};

export function resetGame() {
  state.board = createEmptyBoard();
  state.currentPlayer = 'RED';
  state.winner = null;
  state.isGameOver = false;
}


export function playcolumn(colIndex: number){
  for (let i = 5; i >= 0; i--) {
      if(state.board[i][colIndex] == null){ 
        state.board[i][colIndex] = state.currentPlayer;
        if (state.currentPlayer === 'RED') {
          state.currentPlayer = 'YELLOW';
        } else {
          state.currentPlayer = 'RED';
        }
        break;
      }
  
  }
}


export function checkWinner(board : Board) : Cell | 'DRAW'{
  //checking horizontal
  for (let r = 0; r < 6; r++) {
  for (let c = 0; c < 4; c++) {
    const cell = board[r][c];
    if (
      cell !== null &&
      cell === board[r][c + 1] &&
      cell === board[r][c + 2] &&
      cell === board[r][c + 3]
    ) {
      return cell; 
    }
  }
}


// checking vertical
 for (let c = 0; c < 7; c++) {
  for (let r = 0; r < 4; r++) {
    const cell = board[r][c];
    if (
      cell !== null &&
      cell === board[r + 1][c] &&
      cell === board[r + 2][c] &&
      cell === board[r + 3][c]
    ) {
      return cell;
    }
  }
}

// checking diagonale ascendante
 for (let c = 0; c < 4; c++) {
  for (let r = 5; r >= 0; r--) {
    const cell = board[r][c];
    if (
      cell !== null &&
      cell === board[r - 1][c +1] &&
      cell === board[r - 2][c +2] &&
      cell === board[r - 3][c+3]
    ) {
      return cell;
    }
  }
}


// checking diagonale descendante
for (let c = 0; c < 4; c++) {
  for (let r = 0; r < 4; r++) {
    const cell = board[r][c];
    if (
      cell !== null &&
      cell === board[r + 1][c+1] &&
      cell === board[r + 2][c+2] &&
      cell === board[r + 3][c+3]
    ) {
      return cell;
    }
  }
}



let isFull = true;
for (let c = 0; c < 7; c++) {
  if (board[0][c] === null) {
    isFull = false;
    break;
  }
}

if (isFull) {
  return 'DRAW';
}
return null;
}