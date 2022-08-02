//todo el algoritmo para la tarjeta va aqui 
const validator = { //objeto 

  isValid: function (numberCard) { //declaracion isvalid
    //console.log(numberCard);

    const reverse = numberCard.split("").reverse().map(Number)
    console.log(reverse);

    
    let ultima= 0;
    for (let i = 0; i < reverse.length; i++){ //ciclo
    //console.log(contador)

      // estudiar array
      // array:      4356
      // posiciones: 0123 por aca va la i
      let numeroActual = parseInt(reverse[i]);
      let impares = (i % 2 !== 0); //pares e impares con true false //estudiar operadores logicos
      //console.log (impares);
      //console.log (numeroActual);

      if (impares) {
        let multiplicar = numeroActual * 2
        numeroActual = multiplicar;                    //numero multiplicado pares
        //console.log (multiplicar);
      }
     
      

      if (numeroActual > 9) {
        let sumarN = numeroActual - 9;                 //numero sumado
        numeroActual = sumarN;   

      }
      ultima += numeroActual;
      console.log (numeroActual);
      //let suma = numeroActual.reduce((numero, total) => numero += total, 0);

      //console. log(suma);
      //console.log(numeroActual);
      
      
      /*for(let i = 0; i<numeroActual.length; i++){
        sum += numeroActual[i]; }

        console.log(sum);*/

       /* resultado = doubleNums.concat(singleNums);
 console.log(resultArray) */

     

      // join() para juntar todos

      /*let todo = 0; //devuelve 16 0
      for (let final = 0; final<numeroActual.length; final++){
      todo = todo++ (numeroActual[final])
      }
    console.log(todo);

*/
    }
console.log(ultima);
      
    }



  }



  //como declarar arreglos
  //como manipularlos




  //if (revertido [i] % 2 === 1) {
  //console.log (revertido [i]) // 


  /*let result = sum % 10 === 0;
  if (result) {
      true;
  } else {
      false;
  }
  return result;*/












// se pone [i], cuando se va a acceder a un array
/*if (revertido [i] % 2 === 0) {
    console.log ("El numero:" + revertido[i] + " es par")}
else{
    console.log ("El numero:" + revertido[i] + " es impar")
  
  }
*/

//Number funcion que cambia a numeros ()

//return i [1,3,5,7,9,11,13,15]
// revertido.array.forEach(contenedor => { revertido.1, revertido.3, revertido.5

//var search = function (array, elemento){
//for(var i = 0; i)


//newArray.push(revertido[contador]);
// return newArray;
// });

// revertido ()


//practicar sobre los arreglos y 



/* for que haga que contador < 16 posiciones
 8 cuando llegue a la posicion 8 que se detenga
 arrojar array con numeros parse
*/


//validator.isValid(numberCard.value)



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