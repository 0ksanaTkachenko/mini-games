export const spawnRandomBerry = (flags, snake) => {
  if (flags.isGameRunning) {
    // Проверяем, существует ли ягода, и если да, удаляем ее
    const existingBerry = document.querySelector('.berry');
    if (existingBerry) {
      existingBerry.remove();
    }

    let newBerryX, newBerryY;

    const settingBerryCoordinates = () => {
      newBerryX = Math.floor(Math.random() * flags.PlayingFieldSize);
      newBerryY = Math.floor(Math.random() * flags.PlayingFieldSize);

      for (let i = 1; i < flags.snakeLength; i += 1) {
        let currentSegment = snake[`segment${i}`];
        if (newBerryX === currentSegment.xPosition && newBerryY === currentSegment.yPosition) {
          settingBerryCoordinates();
          return;
        }
      }
    };

    settingBerryCoordinates();

    flags.randomBerry.xPosition = newBerryX;
    flags.randomBerry.yPosition = newBerryY;

    const berryContainer = document.getElementById('berry-container');
    const elem = document.createElement('div');
    berryContainer.appendChild(elem);
    elem.classList.add('berry');

    elem.style.left = flags.randomBerry.xPosition * 20 + 'px'; //Установка ягоды на поле с помощью CSS
    elem.style.bottom = flags.randomBerry.yPosition * 20 + 'px';
  }
};
