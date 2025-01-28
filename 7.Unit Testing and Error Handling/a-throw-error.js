function riskyOperion(num) {
  if (num < 50) {
    throw new Error("Task has failed!");
  }

  return "Task passed successfully!";
}

try {
  const result = riskyOperion(13);
  console.log(result);
} catch (err) {
  // Error handling here
  console.error(err.message);
}
