function SimpleSymbols() {
  var array1 = str.split("");
  var arrayABC = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  var check = function(name, index) {
    if (typeOf().arrayABC.indexOf(name[index]) === "number") {
      if (name[index - 1] === "+" && name[index + 1] === "+") {
        return true;
      } else {
        return false;
      }
    }
  };
  return array1.forEach(check);
}

console.log(SimpleSymbols());
