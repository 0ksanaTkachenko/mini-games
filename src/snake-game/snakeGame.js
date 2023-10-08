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
  PlayingFieldSize: 24,
  positionOfTheSnakeHead: {
    xPosition: 15,
    yPosition: 10,
  },
}; // Флаги которые регулируют игру

let snake = {
  snakeHead: {
    element: document.getElementById('snakeHead'),
    xPosition: flags.positionOfTheSnakeHead.xPosition,
    yPosition: flags.positionOfTheSnakeHead.yPosition,
  },
  segment1: {
    element: document.getElementById('snake-segment1'),
    xPosition: flags.positionOfTheSnakeHead.xPosition,
    yPosition: flags.positionOfTheSnakeHead.yPosition + 1,
  },
  segment2: {
    element: document.getElementById('snake-segment2'),
    xPosition: flags.positionOfTheSnakeHead.xPosition,
    yPosition: flags.positionOfTheSnakeHead.yPosition + 2,
  },
}; // Начальный вид змейки

const startButton = document.getElementById('startButton');
const gameField = document.getElementById('playingField');

let gameInterval;

const start = () => {
  gameField.style.display = 'block';
  startButton.style.display = 'none';

  gameInterval = setInterval(() => {
    snakeGame();
  }, 150);
};

startButton.addEventListener('click', () => {
  flags.isGameRunning = true;
  start();
}); //Начало игры при нажатии кнопки старт

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
}); // движение змейки которое задается стрелочками на клавиатуре

const snakeGame = () => {
  if (flags.isGameRunning) {
    moveSnake(snake, flags);
  } // движение змейки

  if (!flags.fruitExists) {
    spawnRandomBerry(flags);
    flags.fruitExists = true;
  } // появление ягод

  eatFruit(snake, flags); // проверка съедена ли ягода, удаление ее с поля если она съедена
  snakeCrashedIntoItself(flags, snake); // Проверка не врезалась ли змея сама в себя
};

const tryAgainButton = document.getElementById('buttonTryAgain');

tryAgainButton.addEventListener('click', () => {
  flags.isGameRunning = true;
  buttonTryAgain.style.display = 'none';
  gameField.style.display = 'block';
  tryAgainHandler();
});

const tryAgainHandler = () => {
  if (!flags.isGameRunning) {
    clearInterval(gameInterval);
    gameInterval = setInterval(() => {
      snakeGame();
    }, 150);
  }
};
