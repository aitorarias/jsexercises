let person = {
  name: prompt("¿Cómo te llamas?"),
  driver: null,
  age: prompt("¿Cuántos años tienes?")
};

person.driver =
  person.age >= 18
    ? window.open("https://www.todotest.com/tests/idxtests.asp") +
      person.name +
      ", puedes conducir"
    : person.name + ", no puedes conducir";

console.log(person.driver);
