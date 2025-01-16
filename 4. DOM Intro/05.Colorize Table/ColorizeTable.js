function colorize() {
  const evenTableRowEl = document.querySelectorAll("table tr:nth-child(even");

  for (const row of evenTableRowEl) {
    row.style.background = "teal";
  }
}
