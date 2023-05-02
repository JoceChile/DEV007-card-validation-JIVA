const validator = {
  isValid: function(validarTarjeta) {
    //console.log(validarTarjeta);// aqui recibo los numeros ingresados
    const convertirStringArray = validarTarjeta.split("").reverse().join("");
    //console.log(convertirStringArray);// convierto el string en array y lo reverso
    let totalSumas = 0;
    for (let i = 0; i < convertirStringArray.length; i++) {// aqui estoy buscando las posiciones
      let numerosPares;
      let unDigito;
      if ((i + 1) % 2 === 0) {//posiciones array
        numerosPares = (2 * parseInt(convertirStringArray[i]));// multiplicar por dos los pares
        //console.log(numerosPares);// voy bien, se ven todos los pares multiplicados por dos en consola
        if (numerosPares >= 10) {
          unDigito = numerosPares - 9;
          //console.log(unDigito);// los pares mayores a diez se les resta nueve y quedan de un digito, los pares normales quedan igual
          totalSumas += unDigito;
        } else {
          totalSumas += numerosPares;// aqui acumulo los pares ya solo de un digito
        }
      }
      else {
        totalSumas += parseInt(convertirStringArray[i])
      }
      //console.log(totalSumas);//suma total array
    }
    if (totalSumas % 10 === 0) {//defino si es valida o no
      return true;
    } else {
      return false;
    }
  }, 
  
  maskify: function (tarjetaInput) {
    const ocultar= tarjetaInput.replace(/.(?=.{4})/g, "#");
    return ocultar
  }
 

};

export default validator;
