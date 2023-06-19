export const MakeSnakeBigger = (snake, flags) => {
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
};
