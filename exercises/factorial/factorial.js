function factorial(x) {
  let factorial = 1;

  for (let i = 1; i <= x; i++) {
    // factorial = 1 * 1 = 1
    // factorial = 1 * 2 = 2
    // factorial = 2 * 3 = 6
    // factorial = 6 * 4 = 24
    // ...
    factorial *= i; // same as factorial = factorial * i
  }
  return factorial;
}

console.log(factorial(4));
