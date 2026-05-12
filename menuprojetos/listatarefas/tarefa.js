function adicionartarefa() {
    // recebe valor do input do usuario
    let inputtarefa = document.querySelector("#inputtarefa");
    let tarefa = inputtarefa.value.trim();

    // verifica se tem input
    if (tarefa === ""){
        alert("Digite uma tarefa para adicionar à lista!");
    }
    else{
        console.log(tarefa);

    // cria um elemento li e adiciona a tarefa do usuario dentro da tag da lista ul
        let listatarefas = document.querySelector("#lista");
        let novatarefa = document.createElement("li");
        novatarefa.textContent = tarefa;
        listatarefas.appendChild(novatarefa);

    //coloca o input do usuario vazio novamente
        inputtarefa.value = "";
    }
}
function apagartarefas(){
    let tarefas = document.querySelectorAll("li");
    tarefas.forEach(tarefa => {
        tarefa.remove();
    });
}

function mudarTema() {
    let titulo = document.querySelector("#titulo")
    if (document.body.style.backgroundColor === "white"){
        document.body.style.backgroundColor = "black"
        titulo.style.color = "white"
    }
    else{
        document.body.style.backgroundColor = "white"
        titulo.style.color = "black"
    }
}
// MODELO ALTERADO SEM ID #TITULO PARA COPIAR E COLAR NOS OUTROS CODIGOS
/* function mudarTema() {
    if (document.body.style.backgroundColor === "white"){
        document.body.style.backgroundColor = "black"
    }
    else{
        document.body.style.backgroundColor = "white"
    }
} */