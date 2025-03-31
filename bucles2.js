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
const notaAprobacion=51;
let i = 0;
let materiaSeleccionada = '';
do{
    if(datos[i].calificacion>=notaAprobacion){
        materiaSeleccionada= datos[i].materia
        break;
    }
    i++;
}while(i<datos.length && materiaSeleccionada=='')

    if(materiaSeleccionada=='')
    console.log('no parobaste las materias')
else 
console.log('la materia aprobada es : '+ materiaSeleccionada)