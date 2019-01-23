let max = 20;
let min = 1;
let random = Math.random() * (max - min) + min;
random = parseInt(random);

while (true) {
  let user = prompt("Pon un número");
  console.log(user);

  if (user == random) {
    alert("¡Has acertado! 🎉");
    break;
  } else if (user == 0) {
    break;
  } else if (user < random) {
    alert("El numero es menor que el numero magico. Inténtalo de nuevo 🕳️");
  } else if (user > random) {
    alert("EL numero es mayor que el numero magico Inténtalo de nuevo 🕳️");
  }
}
