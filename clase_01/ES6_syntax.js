// Template Strings - String Literals
const usuario = "Alberto"
const cierreSaludo = "Que tengas buenas noches."
const saludo = "Hola " + usuario + "!";
const saludoTemplate = `Hola ${usuario}. ${cierreSaludo}` 
//console.log(saludoTemplate)

// Arrow Functions
/* function suma(a,b){
  return a+b 
} */

// default parameters 
const miSuma = (a = 0, b = 0) => a+b;
// Not A Number


// operador Spread - Rest ...
const multiplicar = (a,b) =>  {
  return a * b
}

const arrayNumeros = [5, 25];
// Spread
const resultado = multiplicar(...arrayNumeros)

const restFunction = (paramA, ...argumentsArray) => {
  //console.log(argumentsArray)
}

restFunction(1, "Hola", "HackABoss", "Buenas Tardes", 10)

const nuevoArrayNums = [...arrayNumeros];
nuevoArrayNums.push(100);
arrayNumeros.push(99);

// destructuring
function getActiveUser(){
  const alumno =  {
    alumno: "Santiago",
    curso: "React",
    edad: 33,
    avatar: "http:/avatar.jpg"
  }
  return alumno
}

const user = getActiveUser();
//const { alumno: username, curso } = getActiveUser()

function printUserData( {alumno, curso} ){  
  console.log(`Bienvenido ${alumno}`)
  console.log(`Estás cursando ${curso}`)
}

printUserData(user);

// Array.find, Array.filter, Array.map, Array.reduce

// ! Codigo Declarativo vs Codigo Imperativo
const nuevoArray = arrayNumeros.map( function (num) { return num * num})
console.log(nuevoArray);