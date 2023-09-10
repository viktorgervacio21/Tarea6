//Tarea de un arreglo de numeros enteros que calcule su promedio.
//GERVACIO HERNÁNDEZ VIKTOR
//DISEÑO DE ALGORITMOS
//10/09/2023

let A = [5, 7, 8, 9, 13, 19, 13, 55, 99,7, 6,3,20,45,8,5,6,10,45,2];//Este es el conjunto de numeros que conforman mi arreglo.
 let suma = A.reduce ((a, n) => (a += n, a), 0); //la funcion reduce sirve para reducir cada elemento
  console.log (suma); //sumamos cada uno de los elementos del arreglo

  console. log();
   let promedio = suma / A. length;  //dividimos entre la suma total
   console.log (promedio); //nos arroja el promedio