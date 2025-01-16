function extract(contentId) {
  const contentEl = document.getElementById(contentId);
  const pattern = /\(([^\(\)]+)\)/gm;

  const matches = contentEl.textContent.matchAll(pattern);
  const matchesArray = Array.from(matches);

  const result = matchesArray.map((match) => match[1]).join("; ");

  console.log(result);

  return result;
}
