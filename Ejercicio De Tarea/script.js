class Persona{
    constructor(nombre, apellido) {
      this.nombre = nombre
      this.apellido = apellido
    }
  
    saludar() {
      return console.log(`Hola, soy ${this.nombre} ${this.apellido}`)
    }
  }
  
  class Amigo extends Persona {
    saludar() {
      return console.log(`Hola, Soy tu amigo ${this.nombre} ${this.apellido}`)
    }
  }
  
  class Colega extends Persona {
    saludar() {
      return console.log(`Hola, soy tu colega ${this.nombre} ${this.apellido}`)
    }
  }
  
  let Presentacion = new Persona(`Darwin`, `Hernandez`)
  let Persona1 = new Amigo(`Juan`, `Robles`)
  let Persona2 = new Colega(`Nahum`, `Hernandez`)
  Presentacion.saludar()
  Persona1.saludar()
  Persona2.saludar()
  