const scoreElement = document.getElementById('score');
const bestScoreElement = document.getElementById('game-over-best-score');

let bestScore = 0;

export const updateScore = (score) => {
  scoreElement.textContent = 'Score: ' + score;
};

export const updateBestScore = (score) => {
  if (score > bestScore) {
    bestScore = score;
  }
  bestScoreElement.textContent = 'Best score: ' + bestScore;
};
