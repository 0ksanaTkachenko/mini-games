export const resetSnakeGame = (flags) => {
  //Возвращение всех измененных флагов к начальному состоянию

  flags.snakeLength = 3;
  flags.fruitExists = false;
  flags.randomBerry = {};
  flags.direction = 'down';
  flags.positionOfTheSnakeHead = {
    xPosition: 15,
    yPosition: 10,
  };
  flags.score = 0;

  //Удалить все сегмены которые появились во время прошлой игры, исключая начальные сегменты змеи

  const snakeContainer = document.getElementById('snake-container');
  const snakeSegments = snakeContainer.querySelectorAll('.snake-segment, .snake-head');

  const segmentsToKeep = ['snakeHead', 'snake-segment1', 'snake-segment2'];

  snakeSegments.forEach((segment) => {
    const segmentId = segment.id;
    if (!segmentsToKeep.includes(segmentId)) {
      snakeContainer.removeChild(segment);
    }
  });

  const berries = snakeContainer.querySelectorAll('.berry');

  berries.forEach((berryElem) => {
    snakeContainer.removeChild(berryElem);
  });
};
