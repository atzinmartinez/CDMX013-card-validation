//todo el algoritmo para la tarjeta va aqui 
const validator = { //objeto 

  isValid: function (numberCard) { //declaracion isvalid
    //console.log(numberCard);

    const reverse = numberCard.split("").reverse().map(Number)
    console.log(reverse);

    
    let ultima = 0;
    for (let i = 0; i < reverse.length; i++) { //ciclo
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
      console.log(numeroActual);

      
    }
    if (ultima%10==0){
      alert ("Valida")

    }else {
      alert ("No valida")
    }
  
  }
}

//validator.isValid(numberCard.value)

export default validator;