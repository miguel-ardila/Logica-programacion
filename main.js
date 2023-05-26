
//Primera parte
function sumarNumero(num1, num2, num3) {
    return num1 + num2 + num3;
}

// llamando a la funcion en el main
const result = sumarNumeros(num1, num2, num3);
console.log("La Suma de los numeros es: ", resultado);

//Segunda parte
class coche {
    constructor() {
        this.numeroDepuertas = 0;
}
incrementarPuertas(){
    this.numeroDepuertas++;
}
}


//creando un objeto miChoche y a;adiendo una puerta
const miChoche = new coche();
miChoche.incrementarPuertas();

//mostrando el numero de puertas del objeto
console.log("Mostrando el numero de puertas del coche es: ", miChoche.numeroDepuertas);
