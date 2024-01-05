const contenedorClientes = document.getElementById("sectionClientes");
debugger;
traerJSON(); //funcion que se encuentra en funciones auxiliares
if (localStorage.getItem("contador") == null) {
    Swal.fire({
        title: "Lo sentimos",
        text: "Aún no se ha contactado ningun cliente",
        icon: "info"
    });
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
            <label for="mensaje">Mensaje:</label> <b class="ajusteMensaje" >${mensaje}</b> <br>
            <div class="centrar">
            <a class="boton " id="botonResponder${index + 1}">Responder</a> <br><br></br>
            </div>
        </div>
        `;
        } else {
            contenedorClientes.innerHTML = contenedorClientes.innerHTML + `
                <div class="borderContenedor centrarFlex " id="divCliente${index + 1}">
                <h3> Cliente: ${index + 1}</h3> 
                <label for="nombre">Nombre:</label> <b>${nombre}</b> <br>
                <label for="telefono">Telefono:</label> <b>${telefono}</b> <br>
                <label for="correo">Correo:</label> <b>${correo}</b> <br>
                <label for="mensaje">Mensaje:</label> <b class="ajusteMensaje" >${mensaje}</b> <br>
                <div class="centrar centrarFlex" id="contRespuesta">
                <label for="respuesta">Respuesta:</label><b>${respuesta}</b> <br>
                <a class="boton" id="botonEnviarMail${index+1}">Enviar por Email</a> <br
                </div>
            </div>
            `;
        }
    });
}