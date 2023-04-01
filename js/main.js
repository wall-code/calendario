const date = new Date();

const day = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()



const daysMonth = new Date (year, month + 1 , 0).getDate()


function inicia(){
    
    for(i=0;i<=daysMonth;i++){
        var dia =document.getElementById("conteiner");
        var span = document.createElement("span")
        span.textContent=i;
        dia.appendChild(span);
        
    }
    
}

window.addEventListener("load",inicia);


/*const date = new Date();
const mes=date.getMonth();
const agora = new Date(date.getFullYear(),date.getMonth(),0).toString();

console.log(agora)
console.log(agora.substring(8,10));*/

