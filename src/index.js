// to el dom va dentro de index
import validator from './validator.js';

const numberCard = document.getElementById ("numberCard"); //variable numero tarjeta llama al elemento
const enviar = document.getElementById ("enviar"); // //variable enviar llama al elemento

enviar.addEventListener("click",function(event){ // al hacer el evento click en enviar se declara la función event
    event.preventDefault ();

    validator.isValid (numberCard.value)
  } );


 //investigar expresiones y operadores
 //parametros y argumentos


//hacer split y Map transforma a numeros
