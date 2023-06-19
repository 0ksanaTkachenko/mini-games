import { moveSnake } from './moveSnake.js';
import { spawnRandomBerry } from './berrySpawn.js';
import { eatFruit } from './eatFruit.js';
import { snakeCrashedIntoItself } from './snakeCrashed.js';

let flags = {
  snakeLength: 3,
  fruitExists: false,
  randomBerry: {},
  direction: 'down',
  isGameRunning: false,
};

const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
  if (!flags.isGameRunning) {
    startSnakeGame();
    flags.isGameRunning = true;
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowDown') {
    flags.direction = 'down';
  } else if (event.key === 'ArrowUp') {
    flags.direction = 'up';
  } else if (event.key === 'ArrowLeft') {
    flags.direction = 'left';
  } else if (event.key === 'ArrowRight') {
    flags.direction = 'right';
  }
});

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

const startSnakeGame = () => {
  setInterval(() => {
    moveSnake(snake, flags);

    if (!flags.fruitExists) {
      spawnRandomBerry(flags);
      flags.fruitExists = true;
    }

    eatFruit(snake, flags);
    snakeCrashedIntoItself(flags, snake);
  }, 150);
};
