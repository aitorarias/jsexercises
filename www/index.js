//Test

// function isEven(n) {
//   return n % 2 == 0;
// }

// function isOdd(n) {
//   return Math.abs(n % 2) == 1;
// }

// console.log(isEven(4));

function isOddOrEven(i) {
  if (i & 1) {
    return "Es impar";
  } else {
    return "Es par";
  }
}

console.log(isOddOrEven(prompt("¿Que numero es?")));
