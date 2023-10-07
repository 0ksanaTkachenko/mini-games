const setSegmentCoordinates = (segment, x, y) => {
  segment.xPosition = x; //установка новых значений
  segment.yPosition = y;
  segment.element.style.bottom = segment.yPosition * 20 + 'px'; // установка новых сначений CSS
  segment.element.style.left = segment.xPosition * 20 + 'px';
}; //Функция которая устанавливает новые кординаты для сегментов змеи

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
  } // Движении змейки на 1 шаг в зависимости от направления

  if (snake.snakeHead.yPosition > flags.PlayingFieldSize) {
    snake.snakeHead.yPosition = 0;
  } else if (snake.snakeHead.yPosition < 0) {
    snake.snakeHead.yPosition = flags.PlayingFieldSize;
  } else if (snake.snakeHead.xPosition > flags.PlayingFieldSize) {
    snake.snakeHead.xPosition = 0;
  } else if (snake.snakeHead.xPosition < 0) {
    snake.snakeHead.xPosition = flags.PlayingFieldSize;
  } // Появление змейки с другого конца поля при ее врезании в границу поля

  setSegmentCoordinates(snake.snakeHead, snake.snakeHead.xPosition, snake.snakeHead.yPosition); // установка новых координат сегментов змейки

  for (let i = 1; i < flags.snakeLength; i += 1) {
    let elem = snake['segment' + i];

    let tempXValue = elem.xPosition;
    let tempYValue = elem.yPosition;

    elem.xPosition = prevXValue;
    elem.yPosition = prevYValue;

    setSegmentCoordinates(elem, elem.xPosition, elem.yPosition);

    prevXValue = tempXValue;
    prevYValue = tempYValue;
  } // Движение змейки в котором каждый следующий сегмент повторяет движение предидущего
};
