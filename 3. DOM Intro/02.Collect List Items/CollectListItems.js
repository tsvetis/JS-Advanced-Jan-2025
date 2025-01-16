function extractText() {
  // get ul list elements
  const liElements = document.querySelectorAll("#items > li");

  // Extract li items text
  const liElToArray = Array.from(liElements);

  const items = liElToArray.map((li) => {
    return li.textContent;
  });

  // Get result element
  const resultTextArea = document.getElementById("result");
  resultTextArea.value = items.join("\n");
}
