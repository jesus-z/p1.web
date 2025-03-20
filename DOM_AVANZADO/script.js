import Form from "./components/formulario.js";
import Table from "./components/tabla.js";
import Cards from "./components/cads.js";
(()=>{
    Form.setDatos((task)=>{
        Table.addTask(task);
        Cards.update();
    });
})();