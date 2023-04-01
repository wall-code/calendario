function inicia(){
    
    for(i=0;i<31;i++){
        var dia =document.getElementById("conteiner");
        var span = document.createElement("span")
        span.textContent=i;
        dia.appendChild(span);
        
    }
    
}

window.addEventListener("load",inicia);