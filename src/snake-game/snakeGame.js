import { moveSnake } from './moveSnake.js';
import { spawnRandomBerry } from './berrySpawn.js';
import { eatFruit } from './eatFruit.js';
import { snakeCrashedIntoItself } from './snakeCrashed.js';
import { resetSnakeGame } from './tryAgain.js';

let flags = {
  snakeLength: 3,
  fruitExists: false,
  randomBerry: {},
  direction: 'down',
  isGameRunning: false,
  PlayingFieldSize: 34,
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

let gameInterval;

const start = () => {
  gameInterval = setInterval(() => {
    snakeGame();
  }, 150);
};

startButton.addEventListener('click', () => {
  if (!flags.isGameRunning) {
    flags.isGameRunning = true;
    start();
  }
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
let tryAgainHandlerAdded = false;

tryAgainButton.addEventListener('click', () => {
  if (!tryAgainHandlerAdded) {
    tryAgainHandlerAdded = true;
    tryAgainHandler();
  }
});

const tryAgainHandler = () => {
  if (!flags.isGameRunning) {
    const gameOverField = document.getElementById('game-over');
    gameOverField.style.display = 'none';
    buttonTryAgain.style.display = 'none';

    flags.isGameRunning = true;
    tryAgainHandlerAdded = false;

    resetSnakeGame(flags, snake);

    clearInterval(gameInterval);
    gameInterval = setInterval(() => {
      snakeGame();
    }, 150);
  }
};
