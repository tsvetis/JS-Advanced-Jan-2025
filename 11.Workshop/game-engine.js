import { state } from "./game-state.js";
import { config } from "./game-config.js";
import { factory } from "./game-objects.js";

const gameArea = document.querySelector(".game-area");
const gameScore = document.querySelector(".game-score");

// Game frames
function newFrame() {
  // Move wizzard
  const wizardElement = modifyWizardPostion();

  // Modify fireballs
  const fireballs = document.querySelectorAll(".fireball");
  for (const fireball of fireballs) {
    if (fireball.offsetLeft > gameArea.offsetWidth) {
      fireball.remove();
    } else {
      fireball.style.left = `${fireball.offsetLeft + config.magicSpeed}px`;
    }
  }

  // Create bugs
  if (state.lastBugSpawn + state.maxBugSpawnTime * Math.random() < Date.now()) {
    factory.createBug();
    state.lastBugSpawn = Date.now();
  }

  // Move bugs
  const bugs = document.querySelectorAll(".bug");
  bugs.forEach((bug) => {
    // When to remove the bugs
    if (bug.offsetLeft < 0) {
      bug.remove();
      return;
    }

    // Check wizzard collision
    const hasCollision = checkCollision(wizardElement, bug);
    if (hasCollision) {
      state.isGameOver = true;
    }

    // Check fireball collission
    const fireballs = document.querySelectorAll(".fireball");
    fireballs.forEach((fireball) => {
      if (checkCollision(fireball, bug)) {
        fireball.remove();
        bug.remove();
        state.score += config.bugPoints;
      }
    });

    // Actual movement of the bugs
    bug.style.left = `${bug.offsetLeft - config.bugSpeed}px`;
  });

  // Apply score
  state.score += config.timePoints;
  gameScore.textContent = `${state.score}pts.`;

  // Game over check
  if (!state.isGameOver) {
    window.requestAnimationFrame(newFrame);
  } else {
    const gameOver = document.querySelector(".game-over");
    gameOver.classList.remove("hidden");
  }
}

function checkCollision(firstElement, secondElement) {
  const first = firstElement.getBoundingClientRect();
  const second = secondElement.getBoundingClientRect();

  const hasCollision = !(
    first.top > second.bottom ||
    first.bottom < second.top ||
    first.right < second.left ||
    first.left > second.right
  );

  return hasCollision;
}

function modifyWizardPostion() {
  const { wizard: wizardConfig } = state;

  // Capture wizard element
  const wizardElement = document.querySelector(".wizard");

  // Wizard movements
  if (state.controls.KeyA && wizardConfig.x > 0) {
    wizardElement.style.left = `${(wizardConfig.x -= config.speed)}px`;
  }

  if (
    state.controls.KeyD &&
    wizardConfig.x + wizardConfig.width < gameArea.offsetWidth
  ) {
    wizardElement.style.left = `${(wizardConfig.x += config.speed)}px`;
  }

  if (state.controls.KeyW && wizardConfig.y > 0) {
    wizardElement.style.top = `${(wizardConfig.y -= config.speed)}px`;
  }

  if (
    state.controls.KeyS &&
    wizardConfig.y + wizardConfig.height < gameArea.offsetHeight
  ) {
    wizardElement.style.top = `${(wizardConfig.y += config.speed)}px`;
  }

  // Wizzard magic attack
  if (state.controls.Space) {
    wizardElement.style.backgroundImage = "url(images/wizard-fire.png)";

    // Blast fireball
    factory.createFireball(wizardConfig);
  } else {
    wizardElement.style.backgroundImage = "url(images/wizard.png)";
  }

  return wizardElement;
}

export const engine = {
  start() {
    window.requestAnimationFrame(newFrame);
  },
};
