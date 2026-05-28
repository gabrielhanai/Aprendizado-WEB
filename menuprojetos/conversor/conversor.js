let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")

function mudartema(){
    let body = document.querySelector("body")
    let select = document.querySelectorAll("select")
    let input1 = document.querySelector("#input1")
    let input2 = document.querySelector("#input2")
    let converter = document.querySelector("#converter")
    body.classList.toggle("escuro")
    select.forEach(input => {
        input.classList.toggle("escuro")
    });
    input1.classList.toggle("escuro")
    input2.classList.toggle("escuro")
    converter.classList.toggle("escuro")
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
    else if (input1value == 0){
        alert("O valor é zero, por favor insira um valor maior que zero.");
        return;
    }

    let moeda1 = document.querySelector("#moeda1").value
    let moeda2 = document.querySelector("#moeda2").value
    let url = `https://v6.exchangerate-api.com/v6/b9d7b96d77f8969ec6ddb9fa/latest/${moeda1}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let taxa = data.conversion_rates[moeda2]
        let resultado = input1value * taxa
        input2.value = resultado.toFixed(2)
    })
    .catch(error => {
        console.error("Ocorreu um erro:", error);
        alert("Ocorreu um erro ao converter as moedas. Por favor, tente novamente mais tarde.");
    });
}