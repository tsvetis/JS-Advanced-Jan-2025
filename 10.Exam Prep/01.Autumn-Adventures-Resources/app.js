window.addEventListener("load", solve);

function solve() {
  // capture form inputs
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");
  const placeElement = document.getElementById("place");
  const eventNameElement = document.getElementById("event-name");
  const emailElement = document.getElementById("email");

  // capture list elements
  const checkListElement = document.getElementById("check-list");
  const upcomingListElement = document.getElementById("upcoming-list");
  const finishedListElement = document.getElementById("finished-list");

  // capture buttons
  const addBtnElement = document.getElementById("add-btn");
  const clearBtnElement = document.getElementById("clear");

  // attach event listeners
  addBtnElement.addEventListener("click", addEventHendler);

  function addEventHendler(e) {
    e.preventDefault();
    if (
      timeElement.value === "" ||
      dateElement.value === "" ||
      placeElement.value === "" ||
      eventNameElement.value === "" ||
      emailElement.value === ""
    ) {
      return;
    }

    // create li item with populated data
    const liElement = document.createElement("li");
    liElement.setAttribute("class", "event-content");

    const articleElement = document.createElement("article");

    // create paragraphs
    const beginsParagraph = document.createElement("p");
    beginsParagraph.textContent = `Begins: ${dateElement.value} at: ${timeElement.value}`;

    const inParagraph = document.createElement("p");
    inParagraph.textContent = `In: ${placeElement.value}`;

    const eventParagraph = document.createElement("p");
    eventParagraph.textContent = `Event: ${eventNameElement.value}`;

    const contactParagraph = document.createElement("p");
    contactParagraph.textContent = `Contact: ${emailElement.value}`;

    // create buttons
    const editBtnElement = document.createElement("button");
    editBtnElement.setAttribute("class", "edit-btn");
    editBtnElement.textContent = "Edit";

    const continueBtnElement = document.createElement("button");
    continueBtnElement.setAttribute("class", "continue-btn");
    continueBtnElement.textContent = "Continue";

    // append paragraphs to article
    articleElement.appendChild(beginsParagraph);
    articleElement.appendChild(inParagraph);
    articleElement.appendChild(eventParagraph);
    articleElement.appendChild(contactParagraph);

    // append article and buttons to li element
    liElement.appendChild(articleElement);
    liElement.appendChild(editBtnElement);
    liElement.appendChild(continueBtnElement);

    checkListElement.appendChild(liElement);

    // preserve inputs data on edit
    const editedTimeElement = timeElement.value;
    const editedDateElement = dateElement.value;
    const editedPlaceElement = placeElement.value;
    const editedNameElement = eventNameElement.value;
    const editedEmailElement = emailElement.value;

    // reset add event view input data
    timeElement.value = "";
    dateElement.value = "";
    placeElement.value = "";
    eventNameElement.value = "";
    emailElement.value = "";

    // disable add button
    addBtnElement.disabled = true;

    /** Edit Button Functionality */
    editBtnElement.addEventListener("click", (e) =>
      onEditHandler(
        e,
        editedTimeElement,
        editedDateElement,
        editedPlaceElement,
        editedNameElement,
        editedEmailElement,
        liElement
      )
    );

    /** ContinueButton Functionality */
    continueBtnElement.addEventListener("click", (e) =>
      onConfirmHandler(e, articleElement, liElement)
    );
  }

  function onConfirmHandler(e, articleElement, liElement) {
    // create list element for upcomming view
    const liElementUpcoming = document.createElement("li");
    liElementUpcoming.setAttribute("class", "event-content");

    // set the article date from the previous view
    let articleElementUpcoming = document.createElement("article");
    articleElementUpcoming = articleElement;

    // create move to finished button
    const moveToFinishedBtnElement = document.createElement("button");
    moveToFinishedBtnElement.setAttribute("class", "finished-btn");
    moveToFinishedBtnElement.textContent = "Move to Finished";

    // append to li for upcoming view article and button
    liElementUpcoming.appendChild(articleElementUpcoming);
    liElementUpcoming.appendChild(moveToFinishedBtnElement);

    // remove li from last-check view
    liElement.remove();

    // attach li to upcoming view ul
    upcomingListElement.appendChild(liElementUpcoming);

    // enable add-event button
    addBtnElement.disabled = false;

    /** Move to Finished button Functionality */
    moveToFinishedBtnElement.addEventListener("click", (e) =>
      moveToFinishedHandler(e, articleElement, liElementUpcoming)
    );
  }

  function moveToFinishedHandler(e, articleElement, liElementUpcoming) {
    // create list element for finished view
    const liElementFinished = document.createElement("li");
    liElementFinished.setAttribute("class", "event-content");

    // set the article date from the previous view
    let articleElementFinished = document.createElement("article");
    articleElementFinished = articleElement;

    liElementFinished.appendChild(articleElement);
    liElementUpcoming.remove();

    finishedListElement.appendChild(liElementFinished);

    // attach click event for clear
    clearBtnElement.addEventListener("click", (e) =>
      clearHandler(e, liElementFinished)
    );
  }

  function clearHandler(e, liElementFinished) {
    liElementFinished.remove();
    addBtnElement.disabled = false;
  }

  function onEditHandler(
    e,
    editedTimeElement,
    editedDateElement,
    editedPlaceElement,
    editedNameElement,
    editedEmailElement,
    liElement
  ) {
    // re-populate input data in add-event view
    timeElement.value = editedTimeElement;
    dateElement.value = editedDateElement;
    placeElement.value = editedPlaceElement;
    eventNameElement.value = editedNameElement;
    emailElement.value = editedEmailElement;

    // remove list element from check-list view
    liElement.remove();

    // enable add-event button
    addBtnElement.disabled = false;
  }
}
