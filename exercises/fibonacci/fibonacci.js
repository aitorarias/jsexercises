let i;
let fib = []; // Inicializamos array

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 10; i++) {
  // SIguiente numero de Fibonacci = anterior + más uno del anterior
  // en js es =>
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}
