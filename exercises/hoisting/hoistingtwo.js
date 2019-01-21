function hoistExample() {
  console.log("Value of a in local scope: ", a);
}
a = 10;
console.log("Value of a in global scope: ", a);

hoistExample();

//¿Cómo actúa el hoisting?

var a = 10;
function hoistExample() {
  console.log("Value of a in local scope: ", a);
}
console.log("Value of a in global scope: ", a);

hoistExample();
