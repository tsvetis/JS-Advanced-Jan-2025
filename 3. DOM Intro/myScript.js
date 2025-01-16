console.log("My External Script is working!");

const wrapperElement = document.querySelector("#wrapper");

[1, 2, 3, 4].forEach((el) => {
  // create span element
  const divche = document.createElement("div");

  // Add text to the span
  divche.textContent = `${el}. Div Item`;

  // append to div with id of "wrapper"
  wrapperElement.appendChild(divche);
});
