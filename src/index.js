// to el dom va dentro de index
import validator from './validator.js';

const numberCard = document.getElementById ("numberCard"); //variable numero tarjeta llama al elemento
const enviar = document.getElementById ("enviar"); // //variable enviar llama al elemento



enviar.addEventListener("click",function(event){ // al hacer el evento click en enviar se declara la función event
    event.preventDefault ();

    validator.isValid (numberCard.value)
    

    if (validator.isValid(numberCard.value) == true){

      alert ("Valida")
    
     }else {
      alert ("No valida")
     }
    
      } )


    let resultado = validator.maskify (numberCard.value)
//console.log(resultado);
numberCard.value = resultado; 


//devuelve automaticamente el true el if (codigo limpio)


   


  


 //investigar expresiones y operadores
 //parametros y argumentos


//hacer split y Map transforma a numeros
