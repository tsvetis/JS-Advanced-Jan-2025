function editElement(element, match, replacer) {
  if (element.textContent.includes(match)) {
    element.textContent = element.textContent.replace(match, replacer);
  }
}
