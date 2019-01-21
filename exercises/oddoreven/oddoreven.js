function isOddOrEven(i) {
  if (i & 1) {
    return "Es impar";
  } else {
    return "Es par";
  }
}

console.log(isOddOrEven(prompt("¿Que numero es?")));
