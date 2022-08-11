// to el dom va dentro de index
import validator from './validator.js';

const numberCard = document.getElementById ("numberCard"); //elemento input numero de tarjeta
const enviar = document.getElementById ("enviar"); // //elemento botón
const texto = document.getElementById ("texto"); //manda a traer el texto



enviar.addEventListener("click",function(event){ // Escucha click (evento)
    event.preventDefault ();

  validator.isValid (numberCard.value) 

    

    if (validator.isValid(numberCard.value) == true){
     texto.innerHTML ="Esta tarjeta es valida"

     }else {
      texto.innerHTML="Esta tarjeta es no valida"
     }
    

     let resultado = validator.maskify (numberCard.value)
     //console.log(resultado);
     numberCard.value = resultado; 

      } )
      
   
