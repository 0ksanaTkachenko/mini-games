export const spawnRandomBerry = (flags) => {
  flags.randomBerry.xPosition = Math.floor(Math.random() * 35);
  flags.randomBerry.yPosition = Math.floor(Math.random() * 35);

  const berryContainer = document.getElementById('berry-container');
  const elem = document.createElement('div');
  berryContainer.appendChild(elem);
  elem.classList.add('berry');

  elem.style.left = flags.randomBerry.xPosition * 20 + 'px';
  elem.style.bottom = flags.randomBerry.yPosition * 20 + 'px';
};
