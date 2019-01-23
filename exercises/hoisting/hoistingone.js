//SOLUCION PRIMER EJERCICIO//
//Se declara "a" en vez de "var a"
//Esta es la gran diferencia. Pues las variables, sino están asignadas con 'var', transforman éstas en variables globales.

function hoistExample() {
  a = 10;
}

hoistExample();
console.log(a);

// 10

// El código equivalente, afectado por el hoisting, es:

var a = 10;
function hoistExample() {
  a = 10;
}

hoistExample();
console.log(a);

//10
