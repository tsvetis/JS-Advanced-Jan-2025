const movieList = document.querySelector("#movie-list");

// Create our movie element
const firstMovieElement = document.createElement("li");
firstMovieElement.textContent = "X-men";

// Append to movie-list
movieList.appendChild(firstMovieElement);

// Create movie element with link
const matrixAnchorElement = document.createElement("a");
matrixAnchorElement.href =
  "https://www.imdb.com/title/tt0133093/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_matrix";
matrixAnchorElement.textContent = "The Matrix";
matrixAnchorElement.target = "_blank";

const matrixListElement = document.createElement("li");
matrixListElement.appendChild(matrixAnchorElement);

movieList.appendChild(matrixListElement);

// Create shallow copy of element
const matrixListShallowCopy = matrixListElement.cloneNode();
console.log(matrixListShallowCopy);

// Create deep copy of element
const matrixListDeepCopy = matrixListElement.cloneNode(true);
console.log(matrixListDeepCopy);

// Delete Element
// firstMovieElement.parentNode.removeChild(firstMovieElement);

// Delete Element with delay of 3 seconds
setTimeout(() => {
  matrixListElement.remove();
}, 3000);
