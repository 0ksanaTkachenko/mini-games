import { resetSnakeGame } from './tryAgain.js';
import { updateBestScore } from './score.js';

const gameOver = () => {
  const gameField = document.getElementById('playingField');
  const buttonTryAgain = document.getElementById('buttonTryAgain');
  const gameOverText = document.getElementById('game-over-text');
  const gameOverBestScore = document.getElementById('game-over-best-score');

  gameField.style.display = 'none';
  buttonTryAgain.style.display = 'block';
  gameOverText.style.display = 'block';
  gameOverBestScore.style.display = 'block';
}; // Появление надписи игра закончена при роигрыше

export const snakeCrashedIntoItself = (flags, snake) => {
  updateBestScore(flags.score);
  for (let i = 1; i <= flags.snakeLength - 1; i += 1) {
    let elem = snake['segment' + i];
    let elemXPosition = elem.xPosition;
    let elemYPosition = elem.yPosition;
    if (
      snake.snakeHead.xPosition === elemXPosition &&
      snake.snakeHead.yPosition === elemYPosition
    ) {
      gameOver();
      resetSnakeGame(flags);
      flags.isGameRunning = false;
    } // Остановить игру если змея врезяется сама в себя
  }
};
