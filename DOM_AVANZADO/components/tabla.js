const Table = (() => {
    const tableBody = document.querySelector("#taskTable tbody");
    const taskCards = document.querySelector("#taskCards"); // 📌 Contenedor de tarjetas

    // Función para agregar una tarea a la tabla
    const addTask = (task) => {
        if (!tableBody) {
            console.error("❌ ERROR: No se encontró el tbody de la tabla.");
            return;
        }

        // Crear nueva fila
        const row = document.createElement("tr");

        // Crear celdas
        row.innerHTML = `
            <td>${task.task}</td>
            <td>${task.description}</td>
            <td>${task.date}</td>
            <td>${task.priority}</td>
        `;

        // Crear celda para las acciones
        const accion = document.createElement("td");

        // Botón de completar tarea
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✔️";
        completeBtn.classList.add("complete-btn");
        completeBtn.addEventListener("click", () => {
            row.classList.toggle("completed");
            updateTaskCards(); // 📌 Actualiza la sección de tareas registradas
        });

        // Botón de eliminar tarea
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => {
            row.remove();
            updateTaskCards(); // 📌 Actualiza la sección de tareas registradas
        });

        // Agregar botones a la celda de acciones
        accion.appendChild(completeBtn);
        accion.appendChild(deleteBtn);
        row.appendChild(accion);

        // Agregar fila a la tabla
        tableBody.appendChild(row);
    };

    // Función para obtener tareas completadas
    const getTasks = () => {
        return Array.from(tableBody.querySelectorAll("tr.completed")).map((row) => ({
            task: row.cells[0].textContent,
            description: row.cells[1].textContent,
            date: row.cells[2].textContent,
            priority: row.cells[3].textContent,
        }));
    };

    // Función para actualizar la sección de Tareas Registradas
    const updateTaskCards = () => {
        if (!taskCards) {
            console.error("❌ ERROR: No se encontró el contenedor de tareas registradas.");
            return;
        }

        taskCards.innerHTML = ""; // 📌 Limpia antes de agregar nuevas tareas

        getTasks().forEach((task) => {
            const card = document.createElement("div");
            card.classList.add("task-card");
            card.innerHTML = `
                <h3>${task.task}</h3>
                <p>${task.description}</p>
                <p><strong>Fecha:</strong> ${task.date}</p>
                <p><strong>Prioridad:</strong> ${task.priority}</p>
            `;
            taskCards.appendChild(card);
        });
    };

    return { addTask, getTasks, updateTaskCards };
})();

export default Table;
