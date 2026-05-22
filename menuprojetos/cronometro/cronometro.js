function mudartema(){
    let body = document.querySelector("body")
    if (body.style.backgroundColor === "white"){
        body.style.backgroundColor = "hsl(0, 0%, 5%)"
        body.style.color = "white"
    }
    else{
        body.style.backgroundColor = "white"
        body.style.color = "black"
    }
}
let display = document.querySelector("#display")
let botiniciar = document.querySelector("#iniciar")
let botzerar = document.querySelector("#zerar")
function iniciar(){
    if (botiniciar.textContent === "Iniciar"){
        botiniciar.textContent = "Parar"
    }
    else{
        botiniciar.textContent = "Iniciar"
    }
}
function zerar(){
    display.textContent = "00:00,00"
}