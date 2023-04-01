const date = new Date();
var cont=1;
const day = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()
var dia


function load(){
dias(cont)
}

    function dias(cont){
        const daysMonth = new Date (year, month + cont , 0).getDate()
        for(i=1;i<=daysMonth;i++){
            //dia =document.getElementById("");
            var span = document.createElement("span")
            span.textContent=i;
           document.getElementById("conteiner").append(span)
            
            
        }
        
    }
function clickar(){
    cont=cont+1;
    dias(cont);
    console.log("teste")
}
load()
/*const date = new Date();
const mes=date.getMonth();
const agora = new Date(date.getFullYear(),date.getMonth(),0).toString();

console.log(agora)
console.log(agora.substring(8,10));*/

