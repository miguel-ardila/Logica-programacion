class Persona {
    constructor() {
      this._edad = 0;
      this._nombre = "";
      this._telefono = "";
    }
  
    get edad() {
      return this._edad;
    }
  
    set edad(nuevaEdad) {
      this._edad = nuevaEdad;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  
    get telefono() {
      return this._telefono;
    }
  
    set telefono(nuevoTelefono) {
      this._telefono = nuevoTelefono;
    }
  }
  
  // Creando un objeto persona
  const persona = new Persona();
  
  // Utilizando los setters para asignar valores a las propiedades
  persona.edad = 25;
  persona.nombre = "Juan";
  persona.telefono = "123456789";
  
  // Utilizando los getters para mostrar las propiedades por consola
  console.log("Edad:", persona.edad);
  console.log("Nombre:", persona.nombre);
  console.log("Teléfono:", persona.telefono);
  