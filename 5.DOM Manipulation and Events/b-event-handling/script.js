const loremEl = document.getElementById("lorem");

// Add event handling with DOM property
loremEl.onclick = function (event) {
  //   console.log("Lorem clicked");
  //   console.log(event);
};

// Event handling with HTML attribute
function showLessHandler(event) {
  const loremElement = document.getElementById("lorem");
  loremElement.textContent = loremElement.textContent.substring(0, 20) + "...";
}

// Add DOM event handler
const newMovieInput = document.getElementById("new-movie");
const addMovieButton = document.getElementById("add-movie");
const movieUlEl = document.getElementById("movie-list");

// Attach event listener
addMovieButton.addEventListener("click", newMovieClickHandler);

function newMovieClickHandler(event) {
  const inputValue = newMovieInput.value;

  if (!inputValue.length) {
    return;
  }

  const liEl = document.createElement("li");
  liEl.textContent = inputValue;

  movieUlEl.prepend(liEl);

  // Clean up
  newMovieInput.value = "";
}

// After 5 seconds remove event listener
setTimeout(() => {
  addMovieButton.removeEventListener("click", newMovieClickHandler);
  console.log("Handler has been removed!");
}, 5000);

// Using this
addMovieButton.addEventListener("click", function (event) {
  console.log(event.currentTarget);
  console.log(addMovieButton);
  console.log(this);
});

// const myObject = {
//   value: 43,
//   onClick: function () {
//     console.log({ this: this });
//   },
// };
// myObject.onClick();
// addMovieButton.addEventListener("click", myObject.onClick);

// print on every keystroke
newMovieInput.addEventListener("input", (event) => {
  //   console.log(event);
  //   console.log(event.currentTarget.value);
});

// print on change
newMovieInput.addEventListener("change", (event) => {
  console.log(event.currentTarget.value);
});

// TODO: Solve 3th and 4th Problems
