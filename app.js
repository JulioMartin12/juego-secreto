let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let titulo = document.querySelector(elemento);
  titulo.innerHTML = texto;
}

function verificarIntento() {
  console.log("click");
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  let inputNumeroDeUsuario = document.getElementById("valorUsuario");

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos}  ${intentos == 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número a adivinar es Menor");
    } else {
      asignarTextoElemento("p", "El número a adivinar es Mayor");
    }
  }

  intentos++;
  limpiarCaja();
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo + 1);
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  if (numeroMaximo == listaNumerosSorteados.length) {
    asignarTextoElemento("p", "Ya sorteamos todos los números posibles");
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto!");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
}

condicionesIniciales();
