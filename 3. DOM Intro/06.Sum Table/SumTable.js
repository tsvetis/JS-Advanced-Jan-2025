function sumTable() {
  const sumEl = document.getElementById("sum");
  const costElements = document.querySelectorAll(
    "table tr td:nth-of-type(2):not(#sum)"
  );

  let totalPrice = 0;
  for (const el of costElements) {
    totalPrice += Number(el.textContent);
  }

  sumEl.textContent = totalPrice;
}
