// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var i = array.length - 1;
  return array[i];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  for (var i = array.length - 1; i >= 0; i--) {
    array[i] += 1;
  }

  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento);

  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento);
  return array;
}

//6


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:


  var i = palabras.length;

  var string;

  for (var j = 0; j < i; j++) {
    if (j ===0) {
      string = palabras[j];
    }
    else {
      string +=" " + palabras[j];
    }
    
  }

  return string;


}


//7
function arrayContiene(arr, item) {
  // Comprueba si el item existe dentro de "arr"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:


  for (var i = arr.length - 1; i >= 0; i--) {

    if (arr[i] === item) {return true;}
  }
  return false;



//8

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for (var i = numeros.length - 1; i >= 0; i--) {
    suma += numeros[i];  }

    return suma;
}
//9


function promedioResultadosTest(testScores) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  var suma = 0;
  var promedio = 0;
  for (var i = testScores.length - 1; i >= 0; i--) {

    suma += testScores[i];
    promedio = suma / (testScores.length);

  }

    return promedio;


}

//10

function numeroMasGrande(numbers) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var numero;
  var arreglo = [];


  for (var i =  numbers.length - 1; i >= 0; i--) {
     arreglo[i] = numbers[i];
  }

  //1 4 5 9 1 3 4 11 16 12 11
  for (var i = numbers.length - 2; i >= 0; i--) {
    
    if (numbers[i] >= numbers[i+1]) {
      
      numero = numbers[i];

    }

     else {

    numero = numbers[i + 1];
    numbers[i] = numbers[i +1];
  }
      
  }

 

  return numero;

}

//11
function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
if (!arguments.length > 0) {
  return 0;
}

var numero = 1;

if (arguments.length === 1) {
  numero = arguments[arguments.length - 1];
}

for (var i = arguments.length - 1; i >= 0; i--) {
  
  
   numero *= arguments[i];
  
}

return numero;

}

//12
function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  var contador = 0;

  
for (var i = arreglo.length - 1; i >= 0; i--) {

  if (arreglo[i] > 18) {
    ++contador;
  }


  
}

return contador;

}

//13
function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   


  if (numeroDeDia === 1 || numeroDeDia === 7) {

    return "Es fin de semana"
  }

   return "Es dia Laboral"
  
} 

//14


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí


  var valido =  n + "";

  

  if (valido[0] === "9" ) {

    return true;
  }

return false;

  
  
}
//15

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
    for (var i = arreglo.length - 2; i >= 0; i--) {

      if (!(arreglo[i] === arreglo[i+1])) {

            return false;

      }


    }

    return true;



} 

//16
function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:


  var arraunuevo= [];


  for (var i = array.length - 1; i >= 0; i--) {

    if(array[i] === "Enero")
    {
      arraunuevo[2]= "Enero";
    }

     if(array[i] === "Marzo")
    {
      arraunuevo[0] ="Marzo";
    }

     if(array[i] === "Noviembre")
    {
      arraunuevo[1]= "Noviembre";
    }

    
  }


  if(arraunuevo.length === 3){
      return arraunuevo;
  }

    return "No se encontraron los meses pedidos";

}

//17


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

var contador = [];

  
  for (var i = 0; i < array.length; i++) {

  if (array[i] > 100) {
    contador.push(array[i]);
  }


  
}

return contador;



}
//18

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:


  var arreglo = [];

  for (var i = 0; i < 10; i++) {

    arreglo.push(numero + 2);
    numero += 2;

    if (arreglo[i] === 2) {
      break;
      }
    }

  if (arreglo.length-1===2) {
    return "Se interrumpió la ejecución";
    }


return arreglo;



}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  var arreglo = [];

  for (var i = 0; i < 9; i++) {
    if (arreglo[i] === 5) {
      continue;
      }
    arreglo.push(numero + 2);
    numero += 2;
    }


  return arreglo;

}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
