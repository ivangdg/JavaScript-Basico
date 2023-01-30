class Estudiante {
    #nombre
    #asignaturas
     constructor(nombre, asignaturas) {
        this.#nombre = nombre
        this.#asignaturas = [asignaturas]
     } 

     setAsignaturas (asignatura) {
        this.#asignaturas.push(asignatura)  
     }

     saludo() {
        console.log(`Hola, mi nombre es ${this.#nombre}, curso estás materias: ${this.#asignaturas} .`)
     }
}



const nuevoEstudiante = new Estudiante("Iván","Javascript")
nuevoEstudiante.setAsignaturas("HTML")
nuevoEstudiante.setAsignaturas("CSS")

console.log(nuevoEstudiante)
nuevoEstudiante.saludo()