const btnMod = document.getElementById('btn-mod')

function mod() {
    /*Selecionar o elemento body*/
    var body = document.querySelector ("body")
    
    /*Colocar ou tirar classe active*/
    if (body.className == "active") {
        body.className = "text-white"
    }
    else {
        body.className = "active"
    }
}