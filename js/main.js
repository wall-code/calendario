


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
            span.id="celula"
            span.textContent=i
            span.addEventListener('click',alert())
           dia.appendChild(span)
            
        }
        const datass = new Date (year, month + cont , 0).toString()
        var formatada = datass.substring(4,7)+" "+datass.substring(11,15)
        document.getElementById("data").innerHTML=formatada
    } 



dias();


function proximo(){
    document.getElementById("conteiner").innerHTML=''
    cont++;
    dias();

   
    
}



function alert(){
    console.log("teste")
}