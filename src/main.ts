import './style.css'
import { state, playcolumn, checkWinner,resetGame } from './store.ts'
import { renderBoardView } from './views/boardView.ts'

const app = document.querySelector<HTMLDivElement>('#app')!;

function render (){
  app.innerHTML = renderBoardView(state.board, state.currentPlayer, state.winner)

  const cellules = app.querySelectorAll('.cell');
  cellules.forEach((cell)=>{
    cell.addEventListener('click', (e) => {
      if (state.winner) return;
      const target = e.currentTarget as HTMLElement;
      const colIndex = Number(target.getAttribute('data-col'));
      playcolumn(colIndex);
      state.winner = checkWinner(state.board)
      render();
    })
  })

  const resetBtn = app.querySelector('#btn-restart');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      resetGame();
      render();
  });
 }
}

render();