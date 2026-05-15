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
    
    display.textContent = resultado
}