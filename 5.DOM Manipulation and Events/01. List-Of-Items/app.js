function addItem() {
  // Read related elements from DOM
  const inputEl = document.getElementById("newItemText");
  const ulEl = document.getElementById("items");

  // Create li element
  const liEl = document.createElement("li");
  liEl.textContent = inputEl.value;

  // Append to UL
  ulEl.appendChild(liEl);

  // Clear Input after submit
  inputEl.value = "";

  // Focus on the input
  inputEl.focus();
}
