# Hoisting

A causa del hoisting, estos extractos de código no nos dan el resultado esperado. Arréglalos y el explica el por qué.

1. Primer ejemplo. (output: ReferenceError: a is not defined)

```javascript
function hoistExample() {
  var a = 10;
}

hoistExample();
console.log(a);
```

2. Segundo ejemplo (Output: Value of a in global scope: undefined | Value of a in local scope: 10)

```javascript
function hoistExample() {
  console.log("Value of a in local scope: ", a);
}

console.log("Value of a in global scope: ", a);
var a = 10;
hoistExample();
```

3. Tercer ejemplo: (output: )

```javascript
hello(); // output : Hola Bosers

function hello() {
  console.log("Hola Bosers!");
}
sayHello(); // output: undefined
var sayHello = function() {
  console.log("El hoisting os vacila");
};
```
