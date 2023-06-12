const moving = () => {
  const snake = document.getElementById('snake');
  let snakeLength = 3;
  let segmentSize = 20;
  let snakeSegments = [];

  let direction = 'down';

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
      direction = 'down';
    } else if (event.key === 'ArrowUp') {
      direction = 'up';
    } else if (event.key === 'ArrowLeft') {
      direction = 'left';
    } else if (event.key === 'ArrowRight') {
      direction = 'right';
    }
  });

  setInterval(() => {
    const snakeStyles = getComputedStyle(snake);

    let topValue = parseFloat(snakeStyles.top);
    let leftValue = parseFloat(snakeStyles.left);

    if (direction === 'down') {
      snake.style.top = topValue + segmentSize + 'px';
      if (topValue === 680) {
        snake.style.top = 0;
      }
    } else if (direction === 'left') {
      snake.style.left = leftValue - segmentSize + 'px';
      if (leftValue <= segmentSize) {
        snake.style.left = '680px';
      }
    } else if (direction === 'right') {
      snake.style.left = leftValue + segmentSize + 'px';
      if (leftValue >= 680) {
        snake.style.left = '20px';
      }
    } else if (direction === 'up') {
      snake.style.top = topValue - segmentSize + 'px';
      if (topValue === segmentSize) {
        snake.style.top = '680px';
      }
    }
  }, 150);
};
