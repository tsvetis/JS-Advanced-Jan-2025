function attachGradientEvents() {
  const resultEl = document.getElementById("result");
  const grandiendEl = document.getElementById("gradient");

  grandiendEl.addEventListener("mousemove", (event) => {
    const currentMousePosition = event.offsetX;
    const elementWidth = event.currentTarget.clientWidth;

    const percentage = Math.floor((currentMousePosition / elementWidth) * 100);
    resultEl.textContent = `${percentage}%`;
  });
}
