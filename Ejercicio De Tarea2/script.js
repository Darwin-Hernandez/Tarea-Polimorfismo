class Persona{
    constructor(nombre, edad){
      this.nombre = nombre
      this.edad = edad
    }

    Detalles() {
      return console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`)
    }
  }
  
  class EstudianteUniversitario extends Persona {
    constructor(nombre, edad, carrera) {
      super(nombre, edad)
      this.carrera = carrera
    }
  
    Detalles() {
      return console.log(`Nombre: ${this.nombre} Edad: ${this.edad} Carrera: ${this.carrera}`)
    }
  }
  
  class EstudianteSecundaria extends Persona {
    constructor(nombre, edad, grado) {
      super(nombre, edad)
      this.grado = grado
    }
  
    Detalles() {
      return console.log(`Nombre: ${this.nombre} Edad: ${this.edad}, Grado: ${this.grado}`)
    }
  }
  
  let estudiante1 = new EstudianteUniversitario("Darwin", 24, "Licenciatura en Computacion")
  let estudiante2 = new EstudianteSecundaria("Juan", 16, "9º grado")
  estudiante1.Detalles()
  estudiante2.Detalles()
  