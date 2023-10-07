export const spawnRandomBerry = (flags) => {
  if (flags.isGameRunning) {
    // Проверяем, существует ли ягода, и если да, удаляем ее
    const existingBerry = document.querySelector('.berry');
    if (existingBerry) {
      existingBerry.remove();
    }

    flags.randomBerry.xPosition = Math.floor(Math.random() * 35); //Появление ягоды в пределах игрового поля
    flags.randomBerry.yPosition = Math.floor(Math.random() * 35);

    const berryContainer = document.getElementById('berry-container');
    const elem = document.createElement('div');
    berryContainer.appendChild(elem);
    elem.classList.add('berry');

    elem.style.left = flags.randomBerry.xPosition * 20 + 'px'; //Установка ягоды на поле с помощью CSS
    elem.style.bottom = flags.randomBerry.yPosition * 20 + 'px';
  }
};
