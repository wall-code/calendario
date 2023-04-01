


const date = new Date();
var cont=1;
const day = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()
 
    

    function dias(){
        const daysMonth = new Date (year, month + cont , 0).getDate()
        
        for(i=1;i<=daysMonth;i++){
            var dia =document.getElementById("conteiner");
            console.log(dia)
            var span = document.createElement("span")
            span.textContent=i;
           dia.appendChild(span)
            
        }
        
    } 



dias();


function clickar(){
    document.getElementById("conteiner").innerHTML=''
    cont++;
    dias();
    console.log("teste")
    const datass = new Date (year, month + cont , 0).toString()
    var formatada = datass.substring(4,7)+" "+datass.substring(11,15)
    document.getElementById("data").innerHTML=formatada
    
}


