const gameOver = () => {
  const gameOverField = document.getElementById('game-over');
  gameOverField.style.display = 'block';
};

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
    }
  }
};
