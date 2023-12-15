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
    e.preventDefault();
    registrarCliente();
    
    limpiarFormulario(formRegister);
    almacenarClientes();
});

// tomamos datos de clientes y lo almacenamos en local storage
function registrarCliente() {
    if (inputNombre.value === "" || +inputTelefono.value === 0 || inputEmail.value === "") {
        inputNombre.setAttribute("placeholder", ">>INGRESE EL NOMBRE<<");
        inputNombre.classList.remove("inputText");
        inputNombre.classList.add("pushBotton");
        inputTelefono.setAttribute("placeholder", ">>INGRESE EL TELEFONO<<");
        inputTelefono.classList.remove("inputText");
        inputTelefono.classList.add("pushBotton");
        inputEmail.setAttribute("placeholder", ">>INGRESE EL CORREO<<");
        inputEmail.classList.remove("inputText");
        inputEmail.classList.add("pushBotton");
    } else {
        inputNombre.setAttribute("placeholder", "Tu Nombre");
        inputNombre.classList.add("inputText");
        inputNombre.classList.remove("pushBotton");
        inputTelefono.setAttribute("placeholder", "Tu Telefono");
        inputTelefono.classList.add("inputText");
        inputTelefono.classList.remove("pushBotton");
        inputEmail.setAttribute("placeholder", "Tu Correo");
        inputEmail.classList.add("inputText");
        inputEmail.classList.remove("pushBotton");
        const nuevoCliente = new Cliente(inputNombre.value, +inputTelefono.value, inputEmail.value, inputMensaje.value);
        const nuevoClienteJSON = JSON.stringify(nuevoCliente);
        if (localStorage.getItem("contador") === null) {
            sessionStorage.setItem("Cliente" + "1", nuevoClienteJSON);
            localStorage.setItem("contador", "1");
        } else {
            let contador = localStorage.getItem("contador");
            contador++;
            sessionStorage.setItem("Cliente" + contador, nuevoClienteJSON);
            localStorage.setItem("contador", contador);
        }
        alert("Su consulta ah sido enviada, será contactado a la brevedad");
    }

}


// limpiamos el formulario
function limpiarFormulario(formulario) {
    formulario.reset();
}


// traemos los datos del local storage para luego poder almacenarlos en una base de datos y darles el uso correcto

function almacenarClientes() {
    let ListaCliente = [];
    for (i = 1; i < sessionStorage.length; i++) {
        ListaCliente.push(JSON.parse(sessionStorage.getItem("Cliente" + i)));
    }
    console.clear();
    console.log(ListaCliente);
}



