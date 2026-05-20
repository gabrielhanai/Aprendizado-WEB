let acertos = 0
let erros = 0
function enviar(){
    let q1 = document.querySelector("input[name='pergunta1']:checked")
    let q2 = document.querySelector("input[name='pergunta2']:checked")
    let q3 = document.querySelector("input[name='pergunta3']:checked")
    let q4 = document.querySelector("input[name='pergunta4']:checked")
    let q5 = document.querySelector("input[name='pergunta5']:checked")
    let q6 = document.querySelector("input[name='pergunta6']:checked")
    let q7 = document.querySelector("input[name='pergunta7']:checked")
    let q8 = document.querySelector("input[name='pergunta8']:checked")
    let q9 = document.querySelector("input[name='pergunta9']:checked")
    let q10 = document.querySelector("input[name='pergunta10']:checked")

    if (q1 === null || q2 === null || q3 === null || q4 === null || q5 === null || q6 === null || q7 === null || q8 === null || q9 === null || q10 === null) {
        alert("Responda todas as questões!");
        return;
    }

    if (q1.value === "a1"){
        acertos += 1
    }
    else{
        erros += 1
    }
    
    if (q2.value === "b2"){
        acertos += 1
    }
    else{
        erros += 1
    }
    
    if (q3.value === "b3"){
        acertos += 1
    }
    else{
        erros += 1
    }

    if (q4.value === "c4"){
        acertos += 1
    }
    else{
        erros += 1
    }

    if (q5.value === "c5"){
        acertos += 1
    }
    else{
        erros += 1
    }

    if (q6.value === "b6"){
        acertos += 1
    }
    else{
        erros += 1
    }

    if (q7.value === "b7"){
        acertos += 1
    }
    else{
        erros += 1
    }

    if (q8.value === "b8"){
        acertos += 1
    }
    else{
        erros += 1
    }

    if (q9.value === "b9"){
        acertos += 1
    }
    else{
        erros += 1
    }

    if (q10.value === "c10"){
        acertos += 1
    }
    else{
        erros += 1
    }
    console.log(acertos)
    console.log(erros)

    let resultado = document.createElement("p")
    resultado.textContent = `Você acertou ${acertos} e errou ${erros} questões`
    document.getElementById("nota").appendChild(resultado)

    let gabarito = document.createElement("table")   // A B B C C B B B B C

    let botaoenviar = document.querySelector("#enviar")
    botaoenviar.remove()

    let tentarnovamente = document.createElement("button")
    tentarnovamente.textContent = "Tentar Novamente"
    tentarnovamente.onclick = function() {
        location.reload()
    }
    document.getElementById("tentarnovamente").appendChild(tentarnovamente)

    acertos = 0
    erros = 0
}