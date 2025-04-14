const crear_nueva_fila=(nombre,email)=>{//recepciono datos
    const fila = document.createElement('tr');//creo una nueva fila en la tabla
    //guardo html en una variable y tambien
    const contenido = `
            <td class="td" data-td>
            ${nombre}
            </td>
            <td>${email}</td>
            <td>
              <ul class="table__button-control">
                <li>
                  <a
                    href="../screens/editar_cliente.html"
                    class="simple-button simple-button--edit"
                    >Editar</a
                  >
                </li>
                <li>
                    <button
                    class="simple-button simple-button--delete"
                    type="button"
                    >
                    Eliminar
                    </button>
                </li>
              </ul>
            </td>
          `;
        fila.innerHTML= contenido;
    return fila;
};

const table = document.querySelector("[data-table]")

const lista_clientes=()=>{
    const promesa = new Promise((resolve,reject)=>{
        const http = new XMLHttpRequest();//variable con request y xml
        http.open("GET","http://localhost:3000/perfil");
        http.send();
        http.onload=()=>{
            const response = JSON.parse(http.response);
            if(http.response>=400){
                reject(response)
            } else{
                resolve(response)
            }
        };
    });
    return promesa;
}

lista_clientes()
    .then((data)=>{
        data.forEach((perfil)=>{
            const nuevafila=crear_nueva_fila(perfil.nombre,perfil.email);
            table.appendChild(nuevafila)
        });
    })
    .catch((error)=> alert("No existe conexión"));


