function adicionartarefa() {
    // recebe valor do input do usuario
    let inputtarefa = document.querySelector("#inputtarefa");
    let tarefa = inputtarefa.value;

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