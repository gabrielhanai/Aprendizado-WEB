let body = document.querySelector("body")
let gerar = document.querySelector("#gerar")
let display = document.querySelector("#display")
let caracteres = "!@#$%&*0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*"
function mudartema(){
    body.classList.toggle("escuro")
    gerar.classList.toggle("escuro")
    display.classList.toggle("escuro")
}
function gerarsenha(){
 for(i = 0; i<12; i++){
    display.textContent += caracteres[Math.floor(Math.random() * caracteres.length)]
    console.log("fez")
 }
 gerar.textContent = "Limpar"
 gerar.onclick = function limpar(){
    console.log("limpando")
    display.textContent = ""
    gerar.textContent = "Clique para gerar uma senha forte"
    gerar.onclick = gerarsenha
 }
}