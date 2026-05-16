let resultado
let display = document.querySelector("#display")
function addvalor(num){
    if (display.textContent == 0){
        display.textContent = ""
        display.textContent += num
    }
    else{
        display.textContent += num
    }
}
function limpar(){
    display.textContent = 0
}
function igual(){
    resultado = eval(display.textContent)
    display.textContent = resultado
}


let calculadora = document.querySelector("#calculadora")
let body = document.querySelector("body")
body.style.backgroundColor = "white"
calculadora.style.borderColor = "black"
function mudarTema(){
    if (body.style.backgroundColor === "white"){
        body.style.backgroundColor = "rgb(15, 15, 15)"
        calculadora.style.borderColor = "greenyellow"
    }
    else{
        body.style.backgroundColor = "white"
        calculadora.style.borderColor = "black"
    }
}