


const date = new Date();
var cont=1;
const day = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()


 
    

    function dias(cont){
        const daysMonth = new Date (year, month + cont , 0).getDate()
        for(i=1;i<=daysMonth;i++){
            var dia =document.getElementById("conteiner");
            console.log(dia)
            var span = document.createElement("span")
            span.textContent=i;
           dia.append(span)
           
          
            
        }
        
    } 


dias(cont);


function clickar(){
   
    cont=cont+1;
    dias(cont);
    console.log("teste")
    
}


