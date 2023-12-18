const navPrincipal=document.querySelector(".navPrincipal");
navPrincipal.removeChild(document.getElementById("navNosotros"));
navPrincipal.removeChild(document.getElementById("navContactos"));
<<<<<<< HEAD
const navClientes = document.getElementById("navClientes");
const navDatos = document.createElement("A");
navDatos.textContent="Datos Clientes";
navDatos.setAttribute("href","pages/clientes.html");
navPrincipal.replaceChild(navDatos,navClientes);


=======
navPrincipal.removeChild(document.getElementById("navClientes"));
>>>>>>> cf8dfdb6110ba5fee0460b8a0b926f292c5dac5f
