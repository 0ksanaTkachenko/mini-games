import { resetSnakeGame } from './tryAgain.js';

const gameOver = () => {
  const gameField = document.getElementById('playingField');
  const buttonTryAgain = document.getElementById('buttonTryAgain');
  const gameOverText = document.getElementById('game-over-text');
  gameField.style.display = 'none';
  buttonTryAgain.style.display = 'block';
  gameOverText.style.display = 'block';
}; // Появление надписи игра закончена при роигрыше

export const snakeCrashedIntoItself = (flags, snake) => {
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
