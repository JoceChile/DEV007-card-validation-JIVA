# Proyecto - Tarjeta de crédito válida

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Consideraciones generales](#2-consideraciones-generales)
* [3. Consideraciones específicas](#3-consideraciones-específicas)
* [4. Consideraciones técnicas](#4-consideraciones-técnicas)
* [5. Desarrollo del proyecto](#5-desarrollo-del-proyecto)
* [6. Material utilizado](#6-material-utilizado)

***

## 1. Resumen del Proyecto

Como primer desafío dentro del Bootcamp Laboratoria DEV007, se debe 
construir una aplicación web, esta debe validar los números de una 
tarjeta (crédito/debito) bajo el método del Algoritmo de Luhn 
(https://es.wikipedia.org/wiki/Algoritmo_de_Luhn), también llamado 
algoritmo de módulo 10.

## 2. Consideraciones generales

El Algoritmo de Luhn es un método de suma de verificación, se utiliza
para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar 
(que solamente contiene dígitos [0-9]); a todos los números que ocupan
una posición par se les debe multiplicar por dos, si este número es 
mayor o igual a 10, debemos sumar los dígitos del resultado; el número
a verificar será válido si la suma de sus dígitos finales es un 
múltiplo de 10.

![gráfica de algoritmo de Luhn](https://user-images.githubusercontent.com/12631491/217016579-865679e0-0949-4afd-b13f-d2ebba7a0c54.png)

En este proyecto los requisitos mínimos son los siguientes:

* Trabajar en base a un boilerplate, la estructura básica de un proyecto 
  en distintas carpetas (a través módulos en JS).
* Conocer las herramientas de mantenimiento y mejora del código (linters
  y pruebas unitarias).
* Aprender sobre objetos, estructuras, métodos e iteración (bucles) en
  JavaScript
* Implementar control de versiones con git (y la plataforma github)

## 3. Consideraciones específicas

El proyecto tiene los siguientes requisitos, los cuales se deben cumplir 
para asegurar que la aplicación cubra los objetivos generales.

**1. Una interfaz que debe permitir a la usuaria:**

* Insertar un numero (texto) que se quiera validar. 
* Usar solo caracteres numéricos (dígitos) en la tarjeta a validar [0-9].  
* Ver si el resultado es válido o no.  
* Ocultar todos los dígitos del número de tarjeta a excepción de los 
  últimos 4 caracteres.  
* No debe permitir ingresar un campo vacío.  

**2. Pruebas unitarias de los métodos.**

Los métodos de `validator` (`isValid` y `maskify`) deben tener cobertura 
con pruebas unitarias.

**3. El código del proyecto debe ser subido a la repo e interfaz desplegada".**
  
**4. Un README que contenga una definición del producto.**
  
### 

## 4. Consideraciones técnicas

Se entrega al inicio del proyecto un boilerplate, que es la estructura
básica de este proyecto y sirve como punto de partida.

El boilerplate entregado contiene la siguiente estructura:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── validator.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── validator.spec.js
```

### Descripción de scripts / archivos

* `README.md`: explica la información necesaria para el uso de la aplicación
  web, así como una introducción a la aplicación, su funcionalidad y 
  decisiones de diseño que tomaron.
* `src/index.html`: este es el punto de entrada a la aplicación. Este archivo
  contiene el _markup_ (HTML) e incluye el CSS y JavaScript.
* `src/style.css`: este archivo contiene las reglas de estilo. 
* `src/validator.js`: se implementa el objeto `validator`, el cual debe 
  contener dos métodos:
  - `validator.isValid(creditCardNumber)`: `creditCardNumber` es un `string`
     con el número de tarjeta que se va a verificar. Esta función debe 
     retornar un `boolean` dependiendo si es válida de acuerdo al 
     [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).
  - `validator.maskify(creditCardNumber)`: `creditCardNumber` es un `string` 
    con el número de tarjeta y esta función debe retornar un `string` donde 
    todos menos los últimos cuatro caracteres sean reemplazados por un (`#`).
    Esta función deberá siempre mantener los últimos cuatro caracteres
    intactos, aún cuando el `string` sea de menor longitud.
* `src/index.js`: acá se debe escuchar eventos del DOM, invocar
  `validator.isValid()` y `validator.maskify()` según sea necesario y 
  actualizar el resultado en la UI (interfaz de usuario).
* `test/validator.spec.js`: este archivo contiene algunos tests de ejemplo.

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. 

***

## 5. Desarrollo del proyecto

**1. Pagina validación**

* Una vez realizada la elección de obra a asistir, indicando fecha y 
  ubicaciones, llegara a esta página de validación:
  
![inicio](imagenesreadme/card.jpg)
  
**2. Encabezado de página**

* Da bienvenida y nos indica para que sirve la web.
* Indica método de pago.  
* Invita a ingresar datos solicitados.  
* Solo informativa.

![encabezado](imagenesreadme/encabezado.jpg)

**3. Caja ingreso números de tarjeta**

* Insertar números de tarjeta a validar.
* Solo se pueden ingresar números (no espacios, no letras, no símbolos).
* Solo puede ingresar dieciséis números (como rango máximo y mínimo).

![numeros](imagenesreadme/numerostarjeta.jpg)

* Para realizar la validación el campo debe estar completo.

![ingresar](imagenesreadme/ingresaralldatos.jpg)

**4. Fecha de vencimiento de tarjeta**

* La misma tarjeta a validar entrega una fecha de vencimiento (Valid Thru). 
  Debe ingresar esa fecha (mes y año).

![ventarj](imagenesreadme/venctarjeta.jpg)

* Solo podrán ingresar fechas desde mayo 2023 a diciembre 2028.

![inicio](imagenesreadme/fechainicio.jpg) ![fin](imagenesreadme/fechafin.jpg)

* Para realizar la validación el campo debe estar completo.

**5. Código de Verificación**

* La parte trasera de su tarjeta entrega un digito de tres números, ese
  es su código (CVV), el cual debe ingresa en la caja CVV.
* Solo puede ingresar números.
* Solo puede ingresar tres números (como rango máximo y mínimo).
* Para realizar la validación el campo debe estar completo.

![cvv](imagenesreadme/cvv.jpg)

**6. Validación**

* Botón validar ejecuta el algoritmo.

![boton](imagenesreadme/validar.jpg)

* Tendremos dos mensajes disponibles:

  - `"Tarjeta " NUMERO DE TARJETA ENMASCARADO" Válida. Muchas gracias por 
    su compra."` 
  
  ![valida](imagenesreadme/tarjetavalida.jpg)
  
  - `"NUMERO DE TARJETA ENMASCARADO"`: es el numero ingresado por usted, se 
    entrega con visión solo de últimos cuatro dígitos para mayor seguridad
    de sus datos.
    
  ![maskify](imagenesreadme/maskify.jpg)
    
  - `"Tarjeta No Válida, por favor intente con otra tarjeta u otro medio 
    de pago."` 

  ![novalida](imagenesreadme/novalida.jpg)

**7. Validar otra tarjeta**

* Si el mensaje nos indica que la tarjeta no es VALIDA, puede probar con 
   otra tarjeta.
   Al hacer click en este botón se borran todos los datos ingresados, así
   podrá ingresar fácilmente los datos de la nueva tarjeta.

  ![reload](imagenesreadme/reload.jpg)

## 6. Material utilizado

* Canal de Slack [#project-card-validation](https://claseslaboratoria.slack.com/archives/C03LXJ10WJD)

* Video de Michelle que indica to do para llevar el algoritmo de Luhn
  
[![tips credit card](https://img.youtube.com/vi/f0zL6Ot9y_w/0.jpg)](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

[Link](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

* [strings](https://es.javascript.info/string), 
[arreglos](https://es.javascript.info/array),
[iterar arreglos](https://dev.to/duxtech/6-maneras-de-iterar-un-array-3fbm),
[objetos](https://es.javascript.info/object) y
[como definir métodos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects#definici%C3%B3n_de_m%C3%A9todos)
* [Metodologías Ágiles](https://www.youtube.com/watch?v=v3fLx7VHxGM)
* [Scrum en menos de 2 minutos](https://www.youtube.com/watch?v=TRcReyRYIMg)
* [Scrum en Detalle](https://www.youtube.com/watch?v=nOlwF3HRrAY&t=297s). No
  esperamos que hagas todo eso desde este proyecto. Iremos profundizando poco a
  poco a lo largo del -_bootcamp_.
* [Blog: cómo funciona el algoritmo de Luhn](http://www.quobit.mx/asi-funciona-el-algoritmo-de-luhn-para-generar-numeros-de-tarjetas-de-credito.html).

***
