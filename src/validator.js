

const validator = { //objeto 

  isValid: function(numeros){ //declaracion isvalid
  console.log(numeros);
  }
  

};


enviar.addEventListener("click",function(event){
  event.preventDefault ();
  const tarjeta = numberCard.value
  const revertido = tarjeta.split("").reverse()
  console.log (revertido);

  //for (let contador = 0; contador<revertido.length);


  for (let contador = 0; contador<revertido.length; contador++)
  //console.log(contador)
  {

  if (revertido [contador] % 2 === 0) {
console.log ("El numero:" + revertido[contador] + "es par")}
    else{
      console.log ("El numero:" + revertido[contador] + "es impar")
      return contador [1,3,5,7,9,11,13,15]
      // revertido.array.forEach(contenedor => { revertido.1, revertido.3, revertido.5
        
      // });
    }
    }
  
    //practicar sobre los arreglos y 



/* for que haga que contador < 16 posiciones
 8 cuando llegue a la posicion 8 que se detenga
 arrojar array con numeros parse
*/


 //validator.isValid(numberCard.value)
  
})


export default validator;



/*
//todo lo que se ponga adentro de las llaves es la informacion del objeto
const validator={ isValid: function (ingresarTarjeta){
//instrucciones algoritmo
console.log ("mensaje valido")
ESPERA QUE ESTAN TRABAJANDO AQUI DONDE ESTOY XD EN EL DEPA
}

} 
*/