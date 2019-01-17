//Test

// Haga que la función QuestionsMarks(str) tome el parámetro str string,
// que contendrá números de un solo dígito, letras y signos de interrogación, y
// compruebe si hay exactamente 3 signos de interrogación entre cada par de dos números
// que suman hasta 10. Si es así, entonces el programa debería devolver la cadena true,
// de lo contrario debería devolver la cadena false. Si no hay dos números que sumen hasta
// 10 en la cadena, entonces su programa debería devolver también falso.

// Por ejemplo: si str es "arrb6????4xxbl5????eeeee5" entonces su programa debería devolver true
//  porque hay exactamente 3 signos de interrogación entre 6 y 4, y 3 signos de interrogación entre
//  5 y 5 al final de la cadena.

function QuestionsMarks(str) {
  let numberPlaces = [];
  //presunción de falso, hasta que se convierta en verdadero
  let flag = false;

  //consigue un array de "places" que mantiene el holding
  for (let i = 0, len = str.length; i < len; i++) {
    if (/\d/.test(str[i])) {
      numberPlaces.push(i);
    }
  }

  let numCount = numberPlaces.length;

  for (let i = 0; i < numCount - 1; i++) {
    if (
      parseInt(str[numberPlaces[i]], 10) +
        parseInt(str[numberPlaces[i + 1]], 10) ===
      10
    ) {
      flag = true;
      let strSeg = str.slice(numberPlaces[i], numberPlaces[i + 1]);

      strSeg = strSeg.replace(/[^\?]/g, "");
      if (strSeg !== "???") {
        return false;
      }
    }
  }
  return flag;
}

QuestionsMarks(readline());
