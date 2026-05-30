let body = document.querySelector("body")
body.style.backgroundColor = "white"
function mudartema(){
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
let horas = document.querySelector("#horas")
let minutos = document.querySelector("#minutos")
let segundos = document.querySelector("#segundos")
let milissegundos = document.querySelector("#milissegundos")
let botiniciar = document.querySelector("#iniciar")
let botzerar = document.querySelector("#zerar")
let tempo = 0;
let rodando = false;
function contar(){
    let s = 0
    let m = 0
    let h = 0
    if (rodando === true){
        tempo++;
        console.log(tempo)
        let h = Math.floor(tempo / 360000);
        let m = Math.floor((tempo % 360000) / 6000);
        let s = Math.floor((tempo % 6000) / 100);
        let ms = tempo % 100;
        
        horas.textContent = String(h).padStart(2, '0');
        minutos.textContent = String(m).padStart(2, '0');
        segundos.textContent = String(s).padStart(2, '0');
        milissegundos.textContent = String(ms).padStart(2, '0');
    }
}
function iniciar(){
    rodando = true
    if (botiniciar.textContent === "Iniciar"){
        botiniciar.textContent = "Parar"
        intervalo = setInterval(contar, 10)
    }
    else{
        rodando = false
        botiniciar.textContent = "Iniciar"
        clearInterval(intervalo);
    }
}
function zerar(){
    horas.textContent = "00"
    minutos.textContent = "00"
    segundos.textContent = "00"
    milissegundos.textContent = "00"
    tempo = 0;
    rodando = false;
}