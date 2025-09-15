// Hendrick Arrieta Villalta
// Challenge Amigo Secreto

let listaNombresIngresados = [];


function agregarAmigo() {
    //Capturar nombre
    const nombreIngresado = document.getElementById('amigo').value;
    //Verificar si no esta vacio
    if (nombreIngresado  === '') {
        alert('Por favor, ingrese un nombre.');
        return;
    }
    //Agregar a la lista
    listaNombresIngresados.push(nombreIngresado);
      console.log('Nombres Ingresados:', listaNombresIngresados);
    limpiarEspacio(); 
    mostrarAmigosListados();
}

function mostrarAmigosListados() {
    // Mostrar la lista de amigos
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista
    for (let i = 0; i < listaNombresIngresados.length; i++) {
        const li = document.createElement('li');
        li.textContent = listaNombresIngresados[i]; 
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    //Verificar si hay amigos en la lista
    if (listaNombresIngresados.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }
    //Sorteo
    const indiceAleatorio = Math.floor(Math.random() * listaNombresIngresados.length);
    const amigoSorteado = listaNombresIngresados[indiceAleatorio];
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}

function limpiarEspacio() {
    //Limpiar espacio
    document.getElementById('amigo').value = '';
}    

