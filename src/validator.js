//todo el algoritmo para la tarjeta va aqui 
const validator = { //objeto 

  isValid: function (numberCard) { //declaracion isvalid
    //console.log(numberCard);

    const reverse = numberCard.split("").reverse().map(Number)  //reversa>array>numero
    //console.log(reverse);

    
    let ultima = 0;
    for (let i = 0; i < reverse.length; i++) { //ciclo
      //console.log(contador)

      // posiciones: 0123 por aca va la i
      let numeroActual = parseInt(reverse[i]); //Convierte cadena y devuelve numero entero.
      let impares = (i % 2 !== 0); //pares e impares con true / false // operador desigualdad
      //console.log (impares);
      //console.log (numeroActual);

      if (impares) {
        let multiplicar = numeroActual * 2
        numeroActual = multiplicar;                    //numero multiplicado pares
        //console.log (multiplicar);
      }


      if (numeroActual > 9) {
        let sumarN = numeroActual - 9;                 //numero sumado (se resta- 9 y da lo mismo)
        numeroActual = sumarN;

      }
      ultima += numeroActual;                             //suma de todos los numeros
      //console.log(numeroActual);

      
    }
    if (ultima%10==0){
      
      return true
                                                          //si es residuo 0 pasa                    

    }else {
      
      return false
      
    }
  
  },                                       

 maskify:function (numberCard){
  let gato = ""                                            //function maskify
  
  for (let a=0; a<numberCard.length; a++){

    if (a<numberCard.length-4){
      gato = gato+"#";
    }else{
gato = gato + numberCard [a];
    }
    //console.log(gato)
  }
  return gato;
  
 }
 };

export default validator;


