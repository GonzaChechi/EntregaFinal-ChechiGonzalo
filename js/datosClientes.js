const contenedorClientes = document.getElementById("sectionClientes");

traerJSON();
if (localStorage.getItem("contador") == null && listaIndices[0] == null) {
    const titulo = document.createElement("H2");
    titulo.textContent = "No se ha contactado ningun cliente";
    contenedorClientes.appendChild(titulo);
} else {
    contenedorClientes.innerHTML = ``;
    listaClientes.forEach((elemento, index) => {
        let { nombre, telefono, correo, mensaje, respuesta } = elemento;
        if (respuesta == null) {            
            contenedorClientes.innerHTML = contenedorClientes.innerHTML + `
        <div class="borderContenedor centrarFlex " id="divCliente${index + 1}">
            <h3> Cliente: ${index + 1}</h3> 
            <label for="nombre">Nombre:</label> <b>${nombre}</b> <br>
            <label for="telefono">Telefono:</label> <b>${telefono}</b> <br>
            <label for="correo">Correo:</label> <b>${correo}</b> <br>
            <label for="mensaje">Mensaje:</label> <b>${mensaje}</b> <br>
        </div>
        `;
        }
    });
    
    contenedorClientes.innerHTML = contenedorClientes.innerHTML + `
    <div class="centrar">
    <a class="boton" href="responder.html">Responder Todos</a> <br><br></br>
    </div> `
    

    
}
//  else {
    //     contenedorClientes.innerHTML = contenedorClientes.innerHTML + `
    // <div class="borderContenedor centrarFlex " id="divCliente${index + 1}">
    //     <h3> Cliente: ${index + 1}</h3> 
    //     Nombre: <b>${nombre}</b> <br>
    //     Telefono: <b>${telefono}</b> <br>
    //     Correo: <b>${correo}</b> <br>
    //     Mensaje: <b>${mensaje}</b> <br>
    //     Respuesta: <b>${respuesta}</b> <br> <br>
    //     </div>
    // `;
    // }
// Respuesta: <a class="boton" href="responder.html">Ver Respuestas</a> <br><br></br>