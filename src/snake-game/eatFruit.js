import { MakeSnakeBigger } from './snakeCreate.js';

export const eatFruit = (snake, flags) => {
  if (
    snake.snakeHead.xPosition === flags.randomBerry.xPosition &&
    snake.snakeHead.yPosition === flags.randomBerry.yPosition
  ) {
    MakeSnakeBigger(snake, flags);

    flags.randomBerry = {};
    const element = document.getElementsByClassName('berry')[0];
    element.remove();

    flags.fruitExists = false;
  }
};
