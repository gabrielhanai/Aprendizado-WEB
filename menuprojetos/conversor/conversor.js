let body = document.querySelector("body")
body.style.backgroundColor = "white"
function mudartema(){
    if (body.style.backgroundColor === "white"){
        body.style.backgroundColor = "rgb(25, 25, 25)"
        body.style.color = "white"
    }
    else{
        body.style.backgroundColor = "white"
    }
}