function addItem() {
  // Read elements
  const ulEl = document.getElementById("items");
  const inputEl = document.getElementById("newItemText");

  // Create li element
  const liEl = document.createElement("li");
  liEl.textContent = inputEl.value;

  // Create delete Button
  const deleteBtn = document.createElement("a");
  deleteBtn.href = "#";
  deleteBtn.textContent = "[Delete]";

  // Add event listener to the Delete Button
  deleteBtn.addEventListener("click", (event) => {
    // Delete by reference
    liEl.remove();

    // Delete by parent
    // event.currentTarget.parentElement.remove();
  });

  // Attach delete button to li element
  liEl.appendChild(deleteBtn);

  // Append li to ul
  ulEl.appendChild(liEl);

  // Clean up input
  inputEl.value = "";
}
