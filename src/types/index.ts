export interface player{
    id : number;
    name : string;
}

export interface Cellule{
    line : number;
    column : number;
}

export type Player = 'RED' | 'YELLOW';
export type Cell = Player | null;
export type Board = Cell[][];

export interface GameState {
  board: Board;                
  currentPlayer: Player;        
  winner: Player | 'DRAW' | null;
  isGameOver: boolean;        
}

    