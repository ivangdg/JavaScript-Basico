class persona {
    #nombre
    #apellido
    constructor(nom, apell){
        this.#nombre = nom
        this.#apellido = apell
    }
     
saludo(){
    const saludo = `Hola, mi nombre es ${this.#nombre} ${this.#apellido}, que tengas buen día.`
    console.log(saludo)
    return saludo
}
getNombre(){
    return this.#nombre
}
getApellido (){
    return this.#apellido
}
}

const miNombre = "Iván"
const miapellido = "García"
const saludo = new persona(miNombre,miapellido)
const fechaExpira = new Date(Date.now() +120000) // Aumenta 2 minutos en milisegundos
console.log(fechaExpira)
const paraCookie =  "nombreCookie=" + saludo.getNombre() + "; expires=" + fechaExpira.toUTCString()
console.log(paraCookie)
alert(paraCookie)
alert(saludo.saludo())
alert(`Mi nombre es ${saludo.getNombre()}`)
alert(`Mi apellido es ${saludo.getApellido()}`)
sessionStorage.setItem("nombre", saludo.getNombre())
localStorage.setItem("apellido", saludo.getApellido())




document.cookie = paraCookie
