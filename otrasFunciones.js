const ciudadesDisponibles=new Array("Santiago", "Bogota","Lima","MonteVideo");

const paisesDisponibles=["colombia","chile","peru","paraguay","panama"];
const cantidadCiudades= ciudadesDisponibles.length;

console.log(`En la lista existen ${cantidadCiudades} elementos`)
console.log(`En la lista existen ${paisesDisponibles.length} elementos`)

//quitar el primer elemento de un array

ciudadesDisponibles.shift();
console.log(`En la lista existen ${cantidadCiudades} elementos`)
console.log(ciudadesDisponibles)
//quitar el ultimo elemento

ciudadesDisponibles.pop();
console.log(`En la lista existen ${cantidadCiudades} elementos`)
console.log(ciudadesDisponibles);
//ordenar lista
console.log(ciudadesDisponibles.sort())

//posicion de un elemento
console.log(`En la lista existen ${paisesDisponibles.indexOf("peru")}`);

//concatenar Dos listas

const listaPaisesCiudades= paisesDisponibles.concat(ciudadesDisponibles);
console.log(listaPaisesCiudades)
