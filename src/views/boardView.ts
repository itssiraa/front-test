import type { Board, Player } from "../types";

export function renderBoardView(board: Board, currentPlayer: Player, winner: Player | 'DRAW' | null): string {

  let statusMessage = `Tour du Joueur : <span class="player-indicator ${currentPlayer}">${currentPlayer === 'RED' ? '🔴 Rouge' : '🟡 Jaune'}</span>`;
  
  if (winner === 'DRAW') {
    statusMessage = " Égalité ! La grille est pleine.";
  } else if (winner) {
    statusMessage = `Victoire du Joueur ${winner === 'RED' ? '🔴 Rouge' : '🟡 Jaune'} !`;
  }

  const boardHtml = board.map((row, rowIndex) => 
    row.map((cell, colIndex) => {
      // Classe CSS pour la couleur du jeton
      const cellClass = cell ? `player-${cell.toLowerCase()}` : 'empty';
      
      return `
        <div 
          class="cell ${cellClass}" 
          data-row="${rowIndex}" 
          data-col="${colIndex}"
        ></div>
      `;
    }).join('')
  ).join('');

  return `
    <section class="game-container">
      <h1>Puissance 4</h1>
      <div class="status">${statusMessage}</div>
      
      <!-- La grille 6x7 -->
      <div class="board">
        ${boardHtml}
      </div>

      <button id="btn-restart">Recommencer</button>
    </section>
  `;
}