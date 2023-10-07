const MakeSnakeBigger = (snake, flags) => {
  const snakeContainer = document.getElementById('snake-container');
  const htmlElem = document.createElement('div');

  snakeContainer.appendChild(htmlElem);
  htmlElem.setAttribute('id', 'snake-segment' + flags.snakeLength);
  htmlElem.classList.add('snake-segment');

  let prevSnakeIndex = 'segment' + (flags.snakeLength - 1);
  let prevSnakeElem = snake[prevSnakeIndex];

  let name = 'segment' + flags.snakeLength;
  snake[name] = {
    element: document.getElementById('snake-segment' + flags.snakeLength),
    xPosition: prevSnakeElem.xPosition,
    yPosition: prevSnakeElem.yPosition,
  };

  const elem = snake[name].element;

  elem.style.bottom = snake[name].yPosition * 20 + 'px';
  elem.style.left = snake[name].xPosition * 20 + 'px';

  flags.snakeLength += 1;
}; // Функция увеличения змею на 1 элемент

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
}; //Если голова змени касается ягоды увеличивает змею и убирает ягоду с поля
