class Cliente {
    constructor(nombre, telefono, correo, mensaje) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.mensaje = mensaje;
    }
    info(){
        return `
        Nombre: <b>${this.nombre}</b> <br>
        Telefono: <b>${this.telefono}</b> <br>
        Correo: <b>${this.correo}</b> <br>
        Mensaje: <b>${this.mensaje}</b> <br>
        `
    }
}