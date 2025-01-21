function deleteByEmail() {
  // Read elements
  const inputEl = document.querySelector("input[name=email]");
  const resultEl = document.getElementById("result");

  // Select all rows
  const trElements = document.querySelectorAll("#customers tbody tr");

  const resultRow = Array.from(trElements).find((tr) => {
    const emailRowValue = tr.getElementsByTagName("td")[1].textContent;
    return emailRowValue === inputEl.value;
  });

  // Remove row and append result
  if (resultRow) {
    resultRow.remove();
    resultEl.textContent = "Deleted.";
  } else {
    resultEl.textContent = "Not found.";
  }

  // Clean up
  inputEl.value = "";
}
