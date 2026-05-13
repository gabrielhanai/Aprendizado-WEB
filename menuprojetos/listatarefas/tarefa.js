let tarefas = []
function adicionartarefa() {
    let inputtarefa = document.querySelector("#inputtarefa");
    let tarefa = inputtarefa.value.trim();
    if (tarefa === ""){
        alert("Digite uma tarefa para adicionar à lista!");
    }

    else{
        console.log(tarefa);
        tarefas.push(tarefa);
        let listatarefas = document.querySelector("#lista");
        let novatarefa = document.createElement("li");
        let botaoeditar = document.createElement("button");
        botaoeditar.id = "botaoeditar";
        botaoeditar.textContent = "Editar";
        novatarefa.textContent = tarefa;
        botaoeditar.onclick = function() {
            let novotexto = prompt("Digite o novo texto para a tarefa:");
            let novotexto2 = novotexto.trim();
            if (novotexto2 === ""){
                alert("Insira um valor válido!")
            }
            else{
                novatarefa.textContent = novotexto2;
            }
        }
        listatarefas.appendChild(novatarefa);
        listatarefas.appendChild(botaoeditar);
        inputtarefa.value = "";
        console.log(tarefas);
    }
}
function apagartarefas(){
    let tarefas = document.querySelectorAll("li");
    tarefas.forEach(tarefa => {
        tarefa.remove();
        let botaoeditar = document.getElementById("botaoeditar");
        botaoeditar.remove();
    });
    tarefas = [];
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