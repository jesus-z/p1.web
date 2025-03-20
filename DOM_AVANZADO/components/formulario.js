const Form = (() => {
    // Recuperando elementos del formulario correctamente
    const form = document.querySelector('[data-form]');
    const inputTask = document.querySelector('[data-input-task]');
    const inputDescription = document.querySelector('[data-input-descripcion]'); // 🛠️ Corregido
    const date = document.querySelector('[data-input-fecha]'); // 🛠️ Corregido
    const inputPrioridad = document.querySelector('[data-input-prioridad]'); // 🛠️ Corregido

    // Verificación de existencia de elementos
    if (!form || !inputTask || !inputDescription || !date || !inputPrioridad) {
        console.error("❌ ERROR: Uno o más elementos del formulario no se encontraron en el DOM. Verifica los nombres en el HTML.");
        return;
    }

    console.log("✅ Todos los elementos fueron encontrados correctamente.");

    // Función para obtener los datos del formulario
    const datosForm = () => ({
        task: inputTask.value.trim(),
        description: inputDescription.value.trim(),
        date: date.value.trim(),
        priority: inputPrioridad.value.trim(),
    });

    // Función para limpiar los campos del formulario
    const reset = () => {
        inputTask.value = '';
        inputDescription.value = '';
        date.value = '';
        inputPrioridad.value = '';
    };

    // Manejador del evento submit
    const setDatos = (callback) => {
        form.addEventListener('submit', (evento) => {
            evento.preventDefault();
            callback(datosForm());
            reset();
        });
    };

    return { setDatos };
})();

export default Form;

