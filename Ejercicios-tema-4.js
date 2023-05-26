// Usando if para comparar si la variable es positiva, negativa o cero
let numeroIf = 5;

if (numeroIf > 0) {
  console.log("El número es positivo");
} else if (numeroIf < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}

// Bucle While
let numeroWhile = 0;

while (numeroWhile < 3) {
  numeroWhile++;
  console.log(numeroWhile);
}

// Bucle Do While
let numeroDoWhile = 0;

do {
  numeroDoWhile++;
  console.log(numeroDoWhile);
} while (numeroDoWhile < 3);

// Bucle For
for (let numeroFor = 0; numeroFor <= 3; numeroFor++) {
  console.log(numeroFor);
}

// Switch para las estaciones del año
let estacion = "verano";

switch (estacion) {
  case "primavera":
    console.log("Estamos en primavera");
    break;
  case "verano":
    console.log("Estamos en verano");
    break;
  case "otoño":
    console.log("Estamos en otoño");
    break;
  case "invierno":
    console.log("Estamos en invierno");
    break;
  default:
    console.log("No es una estación válida");
    break;
}
