// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
// Primero creamos la función para agregar amigos a nuestro array
function agregarAmigo(nombre) { 
    
    // Declaramos inputAmigo con el valor de la etiqueta del html con el id inputAmigo
    const inputAmigo = document.getElementById('amigo'); 
    // Declaramos nombreAmigo con el valor del inputAmigo que declaramos antes.
    // Esto lo hacemos para poder reiniciar el valor de la primera variable cuando se añada al array.
    const nombreAmigo = inputAmigo.value;
    // Si nombreAmigo está vacío, entonces 
    if (nombreAmigo == '' || amigos.includes(nombreAmigo )) { 
        alert('El nombre no puede estar vacío o ya está en la lista');
        return;
    } else {
        // Después de comprobar ambas condiciones añadimos el nombre al array y reiniciamos el valor del inputAmigo.
        amigos.push(nombreAmigo);
        inputAmigo.value = '';
    }
    // Llamamos a la función actualizarLista para que se actualice la lista de amigos cada que añadamos uno
    actualizarLista();
}

// Ahora creamos la función para añadir cada amigo a la lista visible, cada que añadamos uno.
function actualizarLista() {
    // Declaramos listaAmigos con el valor de la etiqueta del html con el id listaAmigos
    const listaAmigos = document.getElementById('listaAmigos');
    // Declaramos amigosHTML con un string vacío
    let amigosHTML = '';
    // Recorremos el array amigos y añadimos cada elemento al string amigosHTML
    amigos.forEach((amigo) => {
        amigosHTML += `<li>${amigo}</li>`;
    });
    // Añadimos el string amigosHTML a la etiqueta listaAmigos
    listaAmigos.innerHTML = amigosHTML;
}

// Por último creamos la función para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('¡Debes añadir 2 o más amigos para hacer el sorteo!');
        return;
    }

    // Selección aleatoria
    const numAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[numAleatorio];

    // Mostrar el resultado en la página
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar el resultado previo

    const resultadosorteo = document.createElement('resultado');
    resultadosorteo.textContent = `El amigo secreto es: ${amigoSorteado} !!!!`;
    resultado.appendChild(resultadosorteo);
}