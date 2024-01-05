let listaClientes = [];

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
