//#region TOGGLE CLARO ESCURO
let claroescuro = document.querySelector("#claroescuro");
function mudarModo() {
    if (claroescuro.textContent === "Modo Escuro") {
    claroescuro.textContent = "Modo Claro";
    document.body.style.backgroundColor = "rgb(12, 12, 12)";
    document.body.style.color = "white";
    document.querySelectorAll(".titulos").forEach(titulo => {
        titulo.style.color = "white";
    });
}
    else {
    claroescuro.textContent = "Modo Escuro";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.querySelectorAll(".titulos").forEach(titulo => {
        titulo.style.color = "black";
    });
    }
}
claroescuro.onclick = mudarModo;
//#endregion