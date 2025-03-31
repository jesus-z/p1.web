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
const procesarDatos = datos =>{
    return datos
    .filter(datos => datos.calificacion >51)
    .map(datos => {
        const {materia}=datos;
        return materia.length > 5 ? materia.toUpperCase() : materia.toLowerCase();
    });
}
const resultado = procesarDatos(datos)
console.log(resultado)