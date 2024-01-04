id = [];
const alertRespuesta = [];
listaClientes.forEach((elemento, index) => {
    alertRespuesta.push(document.getElementById(`botonResponder${index + 1}`));
});

for (let i = 0; i < alertRespuesta.length; i++) {
    if (alertRespuesta[i] !== null) {
        alertRespuesta[i].addEventListener("click", createAlert(i));
    }

}


function createAlert(index) {
    return function () {
        (async () => {
            const { value: text } = await Swal.fire({
                input: "textarea",
                inputLabel: `Responder Mensaje de: ${listaClientes[index].nombre}`,
                inputPlaceholder: `${listaClientes[index].mensaje}`,
                inputAttributes: {
                    "aria-label": "Type your message here"
                },
                showCancelButton: true
            });
            if (text) {
                Swal.fire(text);
                const clienteConRespuesta = { ...listaClientes[index], respuesta: text };
                listaClientes[index] = clienteConRespuesta;
                sessionStorage.setItem(`Cliente${index + 1}`, almacenarJSON(listaClientes[index]));
            }
        })();
    };
}