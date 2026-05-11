let botaotema = document.querySelector("#tema");
let body = document.querySelector("body")
let botoesmenu = document.querySelectorAll(".botoesmenu")
body.style.backgroundColor = "white";
botaotema.addEventListener("click", function(){
    if (body.style.backgroundColor === "white") {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    botoesmenu.forEach(function(botao){
        botao.style.backgroundColor = "rgb(20, 20, 20)";
        botao.style.color = "white";
        botao.classList.toggle("tema-escuro");
    });
}
else{
    body.style.backgroundColor = "white";
    body.style.color = "black";
    botoesmenu.forEach(function(botao){
        botao.style.backgroundColor = "rgb(255, 255, 255)";
        botao.style.color = "black";
        botao.classList.toggle("tema-claro");
    });
}})