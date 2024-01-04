const navPrincipal = document.querySelector(".navPrincipal");
navPrincipal.removeChild(document.getElementById("navNosotros"));
navPrincipal.removeChild(document.getElementById("navContactos"));
const navClientes = document.getElementById("navClientes");
const navDatos = document.createElement("A");
navDatos.textContent = "Consultas Clientes";
navDatos.setAttribute("href", "clientes.html");
navPrincipal.replaceChild(navDatos, navClientes);