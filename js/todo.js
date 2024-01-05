class Cliente {
    constructor(nombre, telefono, correo, mensaje, respuesta) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.mensaje = mensaje;
        this.respuesta = respuesta;
    }
}

let listaClientes = [];
let listaIndices = [];

//enviamos objeto al sessionStorage
function traerJSON() {
    for (i = 1; i < sessionStorage.length; i++) {
        listaClientes.push(JSON.parse(sessionStorage.getItem("Cliente" + i)));
    }
}

function almacenarJSON(objCliente) {
    const JSONCliente = JSON.stringify(objCliente);
    return JSONCliente;
}

const clientes = [];

//Obtengo elementos del documento
const inputNombre = document.getElementById("nombre");
const inputTelefono = document.getElementById("tel");
const inputEmail = document.getElementById("correo");
const inputMensaje = document.getElementById("mensaje");
const inputSubmit = document.getElementById("submit");
const formRegister = document.getElementById("formularioContacto");



//agregamos los eventos

inputSubmit.addEventListener("click", (e) => {
    e.preventDefault(); //anulo efecto por default de boton input
    registrarCliente(validarCampos());
    limpiarFormulario(formRegister);
});

// tomamos datos de clientes y lo almacenamos en local storage haciendo validacion para que se completen todos los campos de contacto
function validarCampos() {
    const validacionCampos = inputNombre.value && +inputTelefono.value && inputEmail.value;
    return validacionCampos;
}

function registrarCliente(validacionCampos) {

    if (validacionCampos) {
        inputNombre.setAttribute("placeholder", "Tu Nombre");
        inputNombre.classList.add("inputText");
        inputNombre.classList.remove("pushBotton");
        inputTelefono.setAttribute("placeholder", "Tu Telefono");
        inputTelefono.classList.add("inputText");
        inputTelefono.classList.remove("pushBotton");
        inputEmail.setAttribute("placeholder", "Tu Correo");
        inputEmail.classList.add("inputText");
        inputEmail.classList.remove("pushBotton");
        const nuevoCliente = new Cliente(inputNombre.value, +inputTelefono.value, inputEmail.value, inputMensaje.value); //se crea objeto de cliente
        const nuevoClienteJSON = almacenarJSON(nuevoCliente); //se convierte el objeto a JSON funcion almacenar JSON se encuentra en funcionesAuxiliares
        if (localStorage.getItem("contador") === null) {
            sessionStorage.setItem("Cliente" + "1", nuevoClienteJSON);
            localStorage.setItem("contador", "1");
        } else {
            let contador = localStorage.getItem("contador");
            contador++;
            sessionStorage.setItem("Cliente" + contador, nuevoClienteJSON);
            localStorage.setItem("contador", contador);
        }

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Su consulta ha sido enviada, será contactado a la brevedad",
            showConfirmButton: false,
            timer: 1500
        })
    } else {
        inputNombre.setAttribute("placeholder", ">>INGRESE EL NOMBRE<<");
        inputNombre.classList.remove("inputText");
        inputNombre.classList.add("pushBotton");
        inputTelefono.setAttribute("placeholder", ">>INGRESE TELEFONO<<");
        inputTelefono.classList.remove("inputText");
        inputTelefono.classList.add("pushBotton");
        inputEmail.setAttribute("placeholder", ">>INGRESE EL CORREO<<");
        inputEmail.classList.remove("inputText");
        inputEmail.classList.add("pushBotton");
    }

}

// limpiamos el formulario
function limpiarFormulario(formulario) {
    formulario.reset();
}

const botonesEnviarMail = document.querySelectorAll('#botonEnviarMail');

debugger;
botonesEnviarMail.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        const cliente = listaClientes[index];
        enviarPorFormSubmit(cliente);
    });
});

function enviarPorFormSubmit(datosCliente) {
    const urlFormSubmit = `https://formsubmit.co/${datosCliente.correo}`;
    const payload = {
        to: "gonzalochechi@gmail.com",
        subject: 'Respuesta a su consulta',
        message: `Aquí están los datos: ${JSON.stringify(datosCliente)}`
    };

    fetch(urlFormSubmit, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(response => {
            if (response.ok) {
                console.log('Correo electrónico enviado correctamente a través de FormSubmit');
                Swal.fire({
                    title: "Correo enviado exitosamente!",
                    icon: "success"
                });
            } else {
                console.error('Error al enviar el correo electrónico a través de FormSubmit');
                Swal.fire({
                    title: "Correo no se pudo enviar!",
                    icon: "error"
                });
            }
        })
        .catch(error => {
            console.error('Error de red:', error);
        });
}

const contenedorClientes = document.getElementById("sectionClientes");

traerJSON(); //funcion que se encuentra en funciones auxiliares
if (localStorage.getItem("contador") == null && listaIndices[0] == null) {
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
            <a class="boton" id="botonResponder${index + 1}">Responder</a> <br><br></br>
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
                <div class="centrar centrarFlex">
                <label for="respuesta">Respuesta:</label><b>${respuesta}</b> <br>
                <a class="boton" id="botonEnviarMail">Enviar por Email</a> <br
                </div>
            </div>
            `;
        }
    });
}



