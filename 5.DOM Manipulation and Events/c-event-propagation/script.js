const orangeElement = document.querySelector(".orange");
const greenElement = document.querySelector(".green");
const yellowElement = document.querySelector(".yellow");

// Add capture for orange element
orangeElement.addEventListener(
  "click",
  () => {
    console.log("Clicked the Orange div.");
  },
  { capture: true } // false
);

// Bubling by default
greenElement.addEventListener("click", (event) => {
  console.log("Clicked the Green div.");
});

// Stop propagation
yellowElement.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Clicked the Yellow div.");
});

// Prevent the default behaviour
const linkEl = document.getElementById("link");
linkEl.addEventListener("click", (event) => {
  console.log("click");
  event.preventDefault();
});
