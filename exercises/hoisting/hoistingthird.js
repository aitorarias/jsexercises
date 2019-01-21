// SOLUCION EJERCIO TRES,
// La ultima funcion no será ejecutada porque está definida como una function expression
// asi que todas las variables serán asignadas.
// entonces, esta es la solución

hello(); // output : Hola Bosers

function hello() {
  console.log("Hola Bosers!");
}

sayHello(); // output: undefined

function sayHello() {
  console.log("El hoisting ya no os vacila");
}
