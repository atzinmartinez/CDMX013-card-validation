import validator from './validator.js';

const numberCard = document.getElementById ("numberCard");
const enviar = document.getElementById ("enviar");

enviar.addEventListener("click",function(event){
    event.preventDefault ();
    const tarjeta = numberCard.value
    const revertido = tarjeta.split("").reverse().map(Number)
    //let nuevonumero []
   
  
    console.log (revertido);
   
    //for (let contador = 0; contador<revertido.length);
  
  
    for (let i = 0; i<revertido.length; i++)
    //console.log(contador)
    {
  if (revertido [i] % 2 === 1) {
  console.log (revertido [i])
  } }
  })


//hacer split y Map transforma a numeros
