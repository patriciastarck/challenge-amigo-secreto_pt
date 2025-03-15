// Lista que armazenará os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let nome = document.getElementById("amigo").value; // Obtém o valor do campo de entrada
    
    if (nome === "") { // Verifica se o campo está vazio
        alert("Digite um nome!"); // Exibe um alerta se estiver vazio
        return; // Sai da função
    }
    
    amigos.push(nome); // Adiciona o nome à lista
    document.getElementById("amigo").value = ""; // Limpa o campo de entrada
    mostrarLista(); // Atualiza a exibição da lista
}

// Função para exibir a lista de amigos na página
function mostrarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtém a referência da lista no HTML

    // Coloca os nomes em ordem alfabética
    let amigosOrdenados = [...amigos].sort((a, b) => a.localeCompare (b));

    lista.innerHTML = amigosOrdenados.map(nome => `<li>${nome}</li>`).join(""); // Cria a lista de forma mais simples
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) { // Verifica se há nomes na lista
        alert("Adicione nomes antes de sortear!"); // Exibe um alerta se a lista estiver vazia
        return; // Sai da função
    }
    
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)]; // Escolhe um nome aleatório da lista
    document.getElementById("resultado").innerHTML = `<li>O amigo secreto é: <strong>${sorteado}</strong></li>`; // Exibe o nome sorteado na página
}

function reiniciarJogo() {
    amigos = []; //esvazia a lista de amigos
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").innerHTML = "";
}

document.getElementById("amigo").addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        adicionarAmigo();
    }
})
