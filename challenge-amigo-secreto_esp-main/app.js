const imputAmigo = document.getElementById('amigo');
const listaAmigos = [];
const ulListaAmigos = document.getElementById('listaAmigos');
const ulResultado = document.getElementById('resultado');
function agregarAmigo() {
    listaAmigos.push(imputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${imputAmigo.value}</li>`;
}

function sortearAmigo() {
  const random = Math.floor(Math.random() * listaAmigos.length);
  const amigoSecreto = listaAmigos[random];
  ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
  }