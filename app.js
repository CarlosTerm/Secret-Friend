// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const buttonReset = document.getElementById('button-reset');
const lista = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

function limpiarCampo(){
	let amigo = document.getElementById('amigo');
	amigo.value = '';
}

function validarCampo(){
	let amigo = document.getElementById('amigo')
	if (amigo.value == ''){
		alert("Por favor, inserte un nombre.")
		return false;
	}
	return true;
}

function agregarAmigo(){
	const amigo = document.getElementById('amigo');
	let nombre = amigo.value.trim();
	if (validarCampo() == true){
		amigos.push(nombre);
		limpiarCampo();
		mostrarAmigos();
		if (amigos.length > 0) {
            buttonReset.style.display = "block";
        }
	}
}

function mostrarAmigos() {  
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let amigo = amigos[i]; // Obtener el nombre del amigo
    let elementoLi = document.createElement('li');
    elementoLi.textContent = amigo;
    lista.appendChild(elementoLi);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos disponibles");
    return;
  }
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];  
  resultado.innerHTML = amigoSorteado;
}

function resetear() {
  amigos = [];
  lista.innerHTML = "";
  resultado.innerHTML = "";  
  buttonReset.style.display = "none";
}

buttonReset.addEventListener('click', resetear);
