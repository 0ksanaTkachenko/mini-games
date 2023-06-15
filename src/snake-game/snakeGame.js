// import createSnakeSegments from './snakeElements.js';

// const createSnakeSegments = (snakeLength) => {
//   const snakeContainer = document.getElementById('snake-container');
//   const snakeSegments = [];

//   for (let i = 0; i < snakeLength; i++) {
//     const segment = document.createElement('div');
//     segment.classList.add('snake-segment');
//     snakeContainer.appendChild(segment);
//     snakeSegments.push({ element: segment });
//     console.log(snakeSegments);
//   }

//   return snakeSegments;
// };

const startSnakeGame = () => {
  let snake = {
    snakeHead: {
      element: document.getElementById('snakeHead'),
      xPosition: 15,
      yPosition: 10,
    },
    segment1: {
      element: document.getElementById('snake-segment1'),
      xPosition: 15,
      yPosition: 11,
    },
    segment2: {
      element: document.getElementById('snake-segment2'),
      xPosition: 15,
      yPosition: 12,
    },
  };

  const setSegmentCoordinates = (segment, x, y) => {
    segment.xPosition = x;
    segment.yPosition = y;
    segment.element.style.bottom = segment.yPosition * 20 + 'px';
    segment.element.style.left = segment.xPosition * 20 + 'px';
  };

  let segmentSize = 20;

  // const snakeSegments = createSnakeSegments(snakeLength);

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

  let snakeLength = 3;

  const moveSnake = () => {
    let prevXValue = snake.snakeHead.xPosition;
    let prevYValue = snake.snakeHead.yPosition;

    if (direction === 'down') {
      snake.snakeHead.yPosition -= 1;
    } else if (direction === 'up') {
      snake.snakeHead.yPosition += 1;
    } else if (direction === 'left') {
      snake.snakeHead.xPosition -= 1;
    } else if (direction === 'right') {
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

    for (let i = 1; i < snakeLength; i += 1) {
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

  setInterval(() => {
    moveSnake();
  }, 150);
};

// const createSnakeSegments = (snakeLength) => {
//   const snakeContainer = document.getElementById('snake-container');
//   const snakeSegments = [];

//   for (let i = 0; i < snakeLength; i += 1) {
//     const elem = document.createElement('div');

//     let segment = {
//       element: elem,
//       xPosition: 30,
//       yPosition: 20,
//     };

//     segment.classList.add('snake-segment');
//     snakeSegments.push(segment);
//     snakeContainer.appendChild(segment);
//   }

//   return snakeSegments;
// };
