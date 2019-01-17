function nif(dni) {
  let numero;
  let letr;
  let letra;
  let expresion_regular_dni;

  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

  if (expresion_regular_dni.test(dni) == true) {
    numero = dni.substr(0, dni.length - 1);
    letr = dni.substr(dni.length - 1, 1);
    numero = numero % 23;
    letra = "TRWAGMYFPDXBNJZSQVHLCKET";
    letra = letra.substring(numero, numesro + 1);
    if (letra != letr.toUpperCase()) {
      alert("Dni erroneo, la letra del NIF no se corresponde");
    } else {
      alert("Dni correcto");
    }
  } else {
    alert("Dni erroneo, formato no válido");
  }
}
