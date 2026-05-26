let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")

function mudartema(){
    let body = document.querySelector("body")
    let select = document.querySelectorAll("select")
    body.classList.toggle("escuro")
    select.forEach(input => {
        input.classList.toggle("escuro")
    });
    // OBS UM JEITO MT BOM PRA FAZER MUDANCA DE TEMAS É USANDO .TOGGLE E INTEGRANDO COM O CSS
}
function converter(){
    let input1value = input1.value
    if(input1value == ""){
        alert("Por favor, preencha todos os campos.");
        return;
    }
    else if (input1value < 0){
        alert("Por favor, insira um valor válido.");
        return;
    }
}