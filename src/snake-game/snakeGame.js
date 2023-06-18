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

  let snakeLength = 3;

  const createSnakeSegment = () => {
    const snakeContainer = document.getElementById('snake-container');
    const elem = document.createElement('div');
    snakeContainer.appendChild(elem);
    elem.setAttribute('id', 'snake-segment' + snakeLength);
    elem.classList.add('snake-segment');
  };

  const MakeSnakeBigger = () => {
    createSnakeSegment();

    let prevSnakeIndex = 'segment' + (snakeLength - 1);
    let prevSnakeElem = snake[prevSnakeIndex];

    let name = 'segment' + snakeLength;
    snake[name] = {
      element: document.getElementById('snake-segment' + snakeLength),
      xPosition: prevSnakeElem.xPosition,
      yPosition: prevSnakeElem.yPosition + 1,
    };

    snakeLength += 1;
  };

  let fruitExists = false;

  let RandomBerry = {};

  const spawnRandomBerry = () => {
    RandomBerry.xPosition = Math.floor(Math.random() * 35);
    RandomBerry.yPosition = Math.floor(Math.random() * 35);

    const berryContainer = document.getElementById('berry-container');
    const elem = document.createElement('div');
    berryContainer.appendChild(elem);
    elem.classList.add('berry');

    elem.style.left = RandomBerry.xPosition * 20 + 'px';
    elem.style.bottom = RandomBerry.yPosition * 20 + 'px';
    fruitExists = true;
  };

  const eatFruit = () => {
    if (
      snake.snakeHead.xPosition === RandomBerry.xPosition &&
      snake.snakeHead.yPosition === RandomBerry.yPosition
    ) {
      MakeSnakeBigger();
      RandomBerry = {};
      const element = document.getElementsByClassName('berry')[0];
      element.remove();

      fruitExists = false;
    }
  };

  setInterval(() => {
    moveSnake();
    eatFruit();
    if (!fruitExists) {
      spawnRandomBerry();
    }
  }, 150);
};
