const datos = [
    {
        'materia': 'Programacion Web',
        'calificacion': 70
    },
    {
     'materia': 'base de datos II',
     'calificacion':29
    },
    {
        'materia': 'robotica',
        'calificacion':10
    },
    {
        'materia': 'ingles',
        'calificacion':40
    },
    {
        'materia': 'calculo',
        'calificacion':35
    },
    {
        'materia': 'algebra',
        'calificacion':100
    },
    {
        'materia': 'metodologia de la investigacion',
        'calificacion':50
    },
    {
        'materia': 'programacion web II',
        'calificacion':30
    },
    {
        'materia': 'programacion movil',
        'calificacion':90
    },
    {
        'materia': 'ingles III',
        'calificacion':80
    }
];
let materiaSeleccionada='';
const notaAprobacion=51;
for(let i=0; i<datos.length && notaAprobacion == ''; i++){
    if(datos[i].calificacion<=notaAprobacion){
        materiaSeleccionada= datos[i].materia
    }
}
if (materiaSeleccionada=="")
    console.log('la materia aprobada es : '+ materiaSeleccionada)
else
console.log('no aprobaste la materia')