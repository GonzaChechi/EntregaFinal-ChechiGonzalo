const navPrincipal = document.querySelector(".navPrincipal");
navPrincipal.removeChild(document.getElementById("navNosotros"));
navPrincipal.removeChild(document.getElementById("navContactos"));
const navClientes = document.getElementById("navClientes");
const navDatos = document.createElement("A");
navDatos.textContent = "Consultas Clientes";
navDatos.setAttribute("href", "clientes.html");
navPrincipal.replaceChild(navDatos, navClientes);

const limpiarStorage = document.getElementById("limpiarStorage");


limpiarStorage.addEventListener(`click`,()=>{
    sessionStorage.clear();
    localStorage.clear();
    Swal.fire({
        title: "Limpieza de Storage",
        text: "Local y Session Storage fueron limpiados",
        icon: "success"
    }).then(() => {
        location.reload();
    });
})