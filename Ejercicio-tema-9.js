class Persona {
    constructor(edad, nombre, telefono) {
      this.edad = edad;
      this.nombre = nombre;
      this.telefono = telefono;
    }
  }
  
  class Cliente extends Persona {
    constructor(edad, nombre, telefono, credito) {
      super(edad, nombre, telefono);
      this.credito = credito;
    }
  }
  
  class Trabajador extends Persona {
    constructor(edad, nombre, telefono, salario) {
      super(edad, nombre, telefono);
      this.salario = salario;
    }
  }
  
  // Creando un objeto de la clase Cliente
  const cliente = new Cliente(30, "Juan", "123456789", 5000);
  
  // Mostrando las propiedades del objeto Cliente por consola
  console.log("Edad del Cliente:", cliente.edad);
  console.log("Nombre del Cliente:", cliente.nombre);
  console.log("Teléfono del Cliente:", cliente.telefono);
  console.log("Crédito del Cliente:", cliente.credito);
  
  // Creando un objeto de la clase Trabajador
  const trabajador = new Trabajador(35, "María", "987654321", 3000);
  
  // Mostrando las propiedades del objeto Trabajador por consola
  console.log("Edad del Trabajador:", trabajador.edad);
  console.log("Nombre del Trabajador:", trabajador.nombre);
  console.log("Teléfono del Trabajador:", trabajador.telefono);
  console.log("Salario del Trabajador:", trabajador.salario);
  