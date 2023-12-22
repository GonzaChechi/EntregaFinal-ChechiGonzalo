const contenedorRespuestas = document.getElementById("respuestasClientes");

traerJSON();

contenedorRespuestas.innerHTML = ``;
debugger;
    listaClientes.forEach((elemento, index) => {
        let { nombre, mensaje, respuesta } = elemento;
        if (respuesta == null) {
            contenedorRespuestas.innerHTML = contenedorRespuestas.innerHTML + `
            <div class="borderContenedor centrarFlex " id="respCliente${index + 1}">
            <h2> Cliente: ${index + 1}</h2> 
            <label for="nombre">Nombre:</label> <b>${nombre}</b> <br>
            <label for="mensaje">Mensaje:</label> <b>${mensaje}</b> <br>
            <label for="respuesta">Respuesta</label>
            <textarea class="textArea" name="respuesta" id="respuesta"></textarea>          
            <a class="boton">Enviar Respuesta</a> <br><br>
        </div>
        `;
        // }else{
        //     contenedorRespuestas.innerHTML = `
        //     <div class="borderContenedor centrarFlex " id="respCliente${index + 1}">
        //     <h2> Cliente: ${index + 1}</h2> 
        //     <label for="nombre">Nombre:</label> <b>${nombre}</b> <br>
        //     <label for="mensaje">Mensaje:</label> <b>${mensaje}</b> <br>
        //     <label for="respuesta">Respuesta</label>
        //     <label for="mensaje">Mensaje:</label> <b>${respuesta}</b> <br>
        // </div>
        // `;
        }

    });