let listaClientes = [];
let listaIndices=[];

//enviamos objeto del sessionStorage
function traerJSON(){
    for (i = 1; i < sessionStorage.length; i++) {
        listaClientes.push(JSON.parse(sessionStorage.getItem("Cliente" + i)));
    }
}


//convertimos el JSON del session storage en objeto
function almacenarJSON(objCliente){
    const JSONCliente=JSON.stringify(objCliente);
    return JSONCliente;
}

//almacenamos indice de objetos que necesiten una respuesta

function almacenarIndice(indice){
    listaIndices.push(indice);
}

function eliminarIndice(indice){
    listaIndices.push(indice);
}
