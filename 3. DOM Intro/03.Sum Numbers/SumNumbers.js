function calc() {
  const num1El = document.getElementById("num1");
  const num2El = document.getElementById("num2");
  const sumEl = document.getElementById("sum");

  const firstNum = Number(num1El.value);
  const secondNum = Number(num2El.value);

  sumEl.value = firstNum + secondNum;
}
