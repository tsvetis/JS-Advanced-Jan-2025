const x = 5;
function outer() {
  const name = "Ivan";
  console.log(x);

  return function () {
    const age = 20;
    console.log(name + " - " + age);
  };
}

const inner = outer();
inner();
