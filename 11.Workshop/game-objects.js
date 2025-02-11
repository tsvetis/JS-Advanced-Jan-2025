// Game object creation
const gameArea = document.querySelector(".game-area");

export const factory = {
  createWizzard(wizardConfig) {
    // Create element
    const wizardElement = document.createElement("div");
    wizardElement.classList.add("wizard");

    // Set styles
    wizardElement.style.width = wizardConfig.width + "px";
    wizardElement.style.height = wizardConfig.height + "px";
    wizardElement.style.backgroundImage = 'url("images/wizard.png")';
    wizardElement.style.backgroundSize = "contain";
    wizardElement.style.backgroundRepeat = "no-repeat";
    wizardElement.style.backgroundPosition = "center";

    // Set postion
    wizardElement.style.position = "absolute";
    wizardElement.style.top = wizardConfig.y + "px";
    wizardElement.style.left = wizardConfig.x + "px";

    // Attach wizard to the game area
    gameArea.appendChild(wizardElement);
  },
  createFireball(wizardConfig) {
    // Check cooldown
    if (wizardConfig.lastMagicUse + wizardConfig.cooldown > Date.now()) {
      return;
    }

    // Create element
    const fireballElement = document.createElement("div");
    fireballElement.classList.add("fireball");

    // Set styles
    fireballElement.style.width = "15px";
    fireballElement.style.height = "15px";
    fireballElement.style.backgroundImage = 'url("images/fire-ball.png")';
    fireballElement.style.backgroundSize = "contain";
    fireballElement.style.backgroundRepeat = "no-repeat";
    fireballElement.style.backgroundPosition = "center";

    // Set postion
    fireballElement.style.position = "absolute";
    // TODO: adjust to match the arm position of the wizard
    fireballElement.style.top = wizardConfig.y + wizardConfig.width / 2 + "px";
    fireballElement.style.left = wizardConfig.x + wizardConfig.width + "px";

    // Modify wizard last magic
    wizardConfig.lastMagicUse = Date.now();

    // Attach wizard to the game area
    gameArea.appendChild(fireballElement);
  },
  createBug() {
    // Create element
    const bugElement = document.createElement("div");
    bugElement.classList.add("bug");

    // Set styles
    bugElement.style.width = "15px";
    bugElement.style.height = "15px";
    bugElement.style.backgroundImage = 'url("images/bug.png")';
    bugElement.style.backgroundSize = "contain";
    bugElement.style.backgroundRepeat = "no-repeat";
    bugElement.style.backgroundPosition = "center";

    // Set postion
    bugElement.style.position = "absolute";
    bugElement.style.top = `${Math.random() * (gameArea.offsetHeight - 15)}px`;
    bugElement.style.left = `${gameArea.offsetWidth - 15}px`;

    // Attach wizard to the game area
    gameArea.appendChild(bugElement);
  },
};
