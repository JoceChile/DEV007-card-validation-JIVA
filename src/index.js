import validator from './validator.js';

const tarjetaInput = document.getElementById("card-number");// tarjetaInput llama a mi id card-number que es el cuadrado donde se apuntan los numeros
const numerosDeTarjeta = document.getElementById("boton-enviar");// numerosDeTarjeta llama al boton de validar que su id es boton-enviar
numerosDeTarjeta.addEventListener("click", () => {
  //console.log(tarjetaInput.value);// cuando se escuche el click el boton hace que me den los numeros del tarjetaInput
  if (tarjetaInput.value === "") {
    alert("Estimad@ Client@, debe ingresar todos los datos")
    return 
  }
  const codigo = document.getElementById("cvv");
  const fecha = document.getElementById("expiracion")
  if (codigo.value === "") {
    alert("Estimad@ Client@, debe ingresar todos los datos")
    return 
  }
  if (fecha.value === "") {
    alert("Estimad@ Client@, debe ingresar todos los datos")
    return 
  }

  const resultado = validator.isValid(tarjetaInput.value);// le decimos que el numero a validar seran los numeros ingresados en el tarjetaInput
  
  const enmascarar = validator.maskify(tarjetaInput.value);//le decimos que el numero a enmascarar seran los numeros ingresados en el tarjetaInput Valido
  const maskify = enmascarar;
  document.getElementById("card-number").innerHTML;

  if (resultado === true) {
    alert("Tarjeta " + maskify + " Válida. Muchas gracias por su compra.")
  } else {
    alert("Tarjeta No Válida, por favor intente con otra tarjeta u otro medio de pago.")
  } 
   

}
);
const reload =document.getElementById("reload");
reload.addEventListener("click", () => {
  location.reload();
});// esta funcion es para utilizar otra tarjeta se borra toda la información
//console.log(validator);
