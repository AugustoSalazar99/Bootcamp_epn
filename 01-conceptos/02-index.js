//*conceptos básicos de JavaScript

//*variables
//  var name="Pedro";
//  let lastname="Osorio";
// lastname="Soledad";

//*Constantes
// const PI= 3.1416
// const fullname = "Pedro Osorio";

//console.log( name,lastname,PI,fullname);

//* tipos de datos
//primitivas
// let string='hola mundo';
// let number=100;
// let boolean =false;
// let nullValue=null;
//! NO HACER
// let undefinedValue= undefined;
// Metodos de los tipos de datos
//console.log(string.toUpperCase())
//console.log(number.toFixed(6))
//console.log(typeof undefunedValue);

// Tipado dinámico
//let newVariable="hola";
// newVariable =100;
//console.log(newVariable);
// newVariable=true;
//console.log(newVariable);

//funciones
function suma(a, b) {
  return a + b;
}
const arrowSuma = (a, b) => {
  return a + b;
};

//Arrays
const array = [1, 2, 3, 4, 5];
//console.log(array[0]);

const object = {
  name: "pedro",
  age: 30,
  isStudent: true,
  grades: [8, 7, 6],
  observations: {
    message: "Buenos días",
    success: {
      status: false,
    },
  },
};

//condicionales
let number = 100;

if (number < 200) {
  console.log("es menor a 200");
} else {
  console.log("Es mayort a 200");
}
