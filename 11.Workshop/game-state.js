// State init
export const state = {
  play: "Akira the Destroyer",
  score: 0,
  isGameOver: false,
  wizard: {
    x: 100,
    y: 100,
    width: 50,
    height: 50,
    lastMagicUse: 0,
    cooldown: 500,
  },
  controls: {
    KeyA: false,
    KeyW: false,
    KeyS: false,
    KeyD: false,
    Space: false,
  },
  lastBugSpawn: 0,
  maxBugSpawnTime: 20000,
};
