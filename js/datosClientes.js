const contenedorClientes = document.getElementById("sectionClientes");
let listaClientes = [];

for (i = 1; i <= sessionStorage.length; i++) {
    
    listaClientes.push(JSON.parse(sessionStorage.getItem("Cliente" + i)));
}

if (localStorage.getItem("contador") === null) {
    const titulo = document.createElement("H2");
    titulo.textContent = "No se ha contactado ningun cliente";
    contenedorClientes.appendChild(titulo);
} else {
    
    contenedorClientes.innerHTML = ``;
    listaClientes.forEach((elemento, index) => {
    contenedorClientes.innerHTML = contenedorClientes.innerHTML + `
    <div class="borderContenedor centrarFlex">
        <h3> Cliente: ${index + 1}</h3> 
        Nombre: <b>${elemento.nombre}</b> <br>
        Telefono: <b>${elemento.telefono}</b> <br>
        Correo: <b>${elemento.correo}</b> <br>
        Mensaje: <b>${elemento.mensaje}</b> <br> <br>
    </div>
    `;
    });

}

