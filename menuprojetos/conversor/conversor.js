function mudartema(){
    let body = document.querySelector("body")
    let select = document.querySelectorAll("select")
    body.classList.toggle("escuro")
    select.forEach(input => {
        input.classList.toggle("escuro")
    });
    // OBS UM JEITO MT BOM PRA FAZER MUDANCA DE TEMAS É USANDO .TOGGLE E INTEGRANDO COM O CSS
}
