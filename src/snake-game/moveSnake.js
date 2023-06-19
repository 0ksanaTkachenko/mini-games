import { setSegmentCoordinates } from './setSegmentCoordinates.js';

export const moveSnake = (snake, flags) => {
  let prevXValue = snake.snakeHead.xPosition;
  let prevYValue = snake.snakeHead.yPosition;

  if (flags.direction === 'down') {
    snake.snakeHead.yPosition -= 1;
  } else if (flags.direction === 'up') {
    snake.snakeHead.yPosition += 1;
  } else if (flags.direction === 'left') {
    snake.snakeHead.xPosition -= 1;
  } else if (flags.direction === 'right') {
    snake.snakeHead.xPosition += 1;
  }

  if (snake.snakeHead.yPosition > 34) {
    snake.snakeHead.yPosition = 0;
  } else if (snake.snakeHead.yPosition < 0) {
    snake.snakeHead.yPosition = 34;
  } else if (snake.snakeHead.xPosition > 34) {
    snake.snakeHead.xPosition = 0;
  } else if (snake.snakeHead.xPosition < 0) {
    snake.snakeHead.xPosition = 34;
  }

  setSegmentCoordinates(snake.snakeHead, snake.snakeHead.xPosition, snake.snakeHead.yPosition);

  for (let i = 1; i < flags.snakeLength; i += 1) {
    let elem = snake['segment' + i];

    let tempXValue = elem.xPosition;
    let tempYValue = elem.yPosition;

    elem.xPosition = prevXValue;
    elem.yPosition = prevYValue;

    setSegmentCoordinates(elem, elem.xPosition, elem.yPosition);

    prevXValue = tempXValue;
    prevYValue = tempYValue;
  }
};
