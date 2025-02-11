import { state } from "./game-state.js";

document.addEventListener("keydown", (e) => {
  if (state.controls.hasOwnProperty(e.code)) {
    state.controls[e.code] = true;
  }
});

document.addEventListener("keyup", (e) => {
  if (state.controls.hasOwnProperty(e.code)) {
    state.controls[e.code] = false;
  }
});
