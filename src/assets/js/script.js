const nombreDuenno = document.getElementById("nombreDuenno")
const direccion = document.getElementById("direccion")
const telefono = document.getElementById("telefono")

const tipoMascota = document.getElementById("tipoMascota")

const nombreMascota = document.getElementById("nombreMascota")
const motivo = document.getElementById("motivo")

const boton = document.getElementById("boton")
const mensaje = document.getElementById("mensaje")


class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono
    }

    datosPropietario() {
        return `El nombre del usuario es ${this._nombre}. El domicilio es ${this._direccion}. El numero de telefono es ${this._telefono}`
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo){
        super(nombre, direccion, telefono)
        this._tipo = tipo;
    }

    get tipo() {
        return `El tipo de animal es un ${this._tipo}`
    }
}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad){
        super(nombre, direccion, telefono, tipo)
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }

    get nombreMascota() {
        return this._nombreMascota;
    }
    set setNombreMascota(v) {
        this._nombreMascota = v
    }
    get enfermedad() {
        return this._enfermedad;
    }
    set setEnfermedad(v) {
        this._enfermedad = v
    }
}

boton.addEventListener('click', () => {
    const mascotaValor = tipoMascota.value 
    if (nombreDuenno.value == "" || direccion.value == "" || telefono.value == "" || mascotaValor =="" || nombreMascota.value == "" || motivo.value == ""){
        alert("Debes llenar todos los campos")
    } else if (mascotaValor === "perro") {
        const Perro = new Mascota(nombreDuenno.value, direccion.value, telefono.value, mascotaValor, nombreMascota.value, motivo.value);
        mensaje.innerHTML =  `${Perro.datosPropietario()} ${Perro.tipo}, mientras que el nombre de la mascota es: ${Perro.nombreMascota} y la enfermedad es ${Perro.enfermedad} `   
    } else if (mascotaValor === "gato") {
        const Gato = new Mascota(nombreDuenno.value, direccion.value, telefono.value, mascotaValor, nombreMascota.value, motivo.value);
        mensaje.innerHTML =  `${Gato.datosPropietario()} ${Gato.tipo}, mientras que el nombre de la mascota es: ${Gato.nombreMascota} y la enfermedad es ${Gato.enfermedad} `   
    } else if (mascotaValor === "conejo") {
        const Conejo = new Mascota(nombreDuenno.value, direccion.value, telefono.value, mascotaValor, nombreMascota.value, motivo.value);
        mensaje.innerHTML =  `${Conejo.datosPropietario()} ${Conejo.tipo}, mientras que el nombre de la mascota es: ${Conejo.nombreMascota} y la enfermedad es ${Conejo.enfermedad} `   
    }
})