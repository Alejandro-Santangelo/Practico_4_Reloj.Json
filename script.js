// Obtener referencias a los elementos HTML relevantes
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultadoDiv = document.getElementById('resultado');
const relojDiv = document.getElementById('reloj');

// Función para sumar dos números
function sumar() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const resultado = num1 + num2;
  resultadoDiv.innerText = `La suma es: ${resultado}`;
}

// Función para restar dos números
function restar() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const resultado = num1 - num2;
  resultadoDiv.innerText = `La resta es: ${resultado}`;
}

// Función para multiplicar dos números
function multiplicar() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const resultado = num1 * num2;
  resultadoDiv.innerText = `La multiplicación es: ${resultado}`;
}

// Función para dividir dos números
function dividir() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  if (num2 !== 0) {
    const resultado = num1 / num2;
    resultadoDiv.innerText = `La división es: ${resultado}`;
  } else {
    resultadoDiv.innerText = "Error: No se puede dividir por cero";
  }
}

// Función para obtener y mostrar la hora actualizada
function mostrarHora() {
  /*const ahora = new Date();
  const hora = ahora.getHours();
  const minutos = ahora.getMinutes();
  const segundos = ahora.getSeconds();
  relojDiv.innerText = `Hora actual: ${hora}:${minutos}:${segundos}`;*/
  const ahora = new Date();
  const hora = ahora.getHours();
  const minutos = ahora.getMinutes().toString().padStart(2, '0');
  const segundos = ahora.getSeconds().toString().padStart(2, '0');
  relojDiv.innerText = `Hora actual: ${hora}:${minutos}:${segundos}`;
}

// Actualizar la hora cada segundo
setInterval(mostrarHora, 1000);
