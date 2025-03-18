// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarNombre() {
    const nombreInput = document.getElementById('nombre');
    const nombre = nombreInput.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();

    nombreInput.value = "";
}

function actualizarLista() {
    const listaElement = document.getElementById('amigos-lista');
    listaElement.innerHTML = "";  // Limpiar la lista actual

    amigos.forEach((nombre) => {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega nombres primero.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
            const amigoSorteado = amigos[indiceAleatorio];

            const resultadoElemento = document.getElementById('resultado');
            resultadoElemento.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
        }