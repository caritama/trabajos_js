# Quiz - JavaScript Basics

### Nombre completo:
> Carlos Ritter Aranda Manchay

-----------

## Self-Evaluation

#### Auto evaluación de los temas vistos en clase. Responde  a las siguientes preguntas sin utilizar ningun recurso para solucionarlas. Tu conocimiento es muy importante para nosotros. 

#### Objetivo de la evaluación: conocer que tanto haz aprendido sobre JavaScript y ver que temas se necesitan para una asesoria.

Reglas:

1. No googlear
2. No buscar en ningun libro
3. Realizarlo de forma individual

---

##### 1. ¿Qué es un algoritmo?

> Set of instructions to computers to do something

##### 2. ¿Qué es un lenguaje de programación?

> Is a set of specific words to make instructions for computers to do something.

##### 3. Describe que es un tipo de dato:

> Es la asignacion de una propiedad o valor a un dato, tales como numericos, caracteres, etc

##### 4. ¿Cuáles son los tipos de dato que conoces?

> number, boolean, NaN, String


##### 6. ¿Qué es NaN?

> Not a Number, se presenta cuando el valor de una operación no se puede calcular o no representa un valor numérico

##### 7. ¿Cual es el uso de `typeof`?

> Es la sentencia para saber el tipo de dato que se esta utilizando

##### 8. ¿Cuál es la diferencia entre `==` y `===`?

>En el primer caso solo se compara el valor del dato, en el segundo se compara que los datos enviados coincidan plenamente

##### 9. ¿Qué es una variable?

> Es una caja que guarda datos

##### 10. ¿Qué es un statement?

> Son instruciones 

##### 11. Del siguiente statement `a = b * 2` identifica sus partes _(literals, variables, operators)._

> literals:2
variables: a b
Operators: = *

##### 12. ¿Qué es una expression?

> _your answer here_

##### 13. ¿Cuántas expressions puedes identificar del siguiente statement `a = b * 2;`?

> 4

##### 14. ¿Cuál es la diferencia entre lenguaje `interpreted` y `compiled`?

> Interpretado: Se necesita un traductor de codigo al momento de su ejecucion (Navegadores)
Compilado: necesita de um programa al momento de su ejecucion ()

##### 15. Es JavaScript `interpreted` o `compiled`? Justifica tu respuesta.

> Compiled: porque posee un compilador y ya no es necesario que el navegador lo traduzca

##### 16. ¿Cuales son los tipos de comentarios en JavaScript?

> Comentarios simples o lineales // y los comentarios de multiples lineas de codigo/**/

---------

## Sección Inténtalo tu mismo:

---

### Output Exercises.

Considera: `var a = 1;`

Escribe el código para:

##### 1 Imprimir `a` en consola:

> _`// console.log(a)`_

##### 2. mostrar `a` en una alerta:

> _`// alert (a)`_


### Input Exercises.

Pregunta al usuario su nombre con una función __prompt__ y que el mensaje diga: 
`"Porfavor, escribe tu nombre"` y guarda su nombre en una variable llamada `username`, después loguea el valor en consola

Solución:

```js
// your code here
```

### Sección: Operadores

---

##### 1. Completa la oración:

JavaScript has both u___ and b___ operators, and one special t___ operator

> _your answer here_

##### 2. Tipos de Operadores

Nombre los _tipos de operadores_ que conoces, y da un ejemplo básico de cada uno que menciones:

>Operadores aritmeticos: a+b a-b
OPeradores Logicos a==b a===b


##### 3. Describe el uso de los operadores aritméticos:

> Para realizar operaciones matematicas

##### 4. ¿Qué es coercion en JS?

> _your answer here_


##### 5. ¿Es esto un código válido en JS?

```js
var amount = 100;

{
  amount = amount * 2;
  console.log(amount)
}
```

> No es valido


### Estructuras de Control

##### 1. Describe que son y para que funcionan las estructuras de control:

>Son ciclos que permiten hacer operaciones durante la ejecucion de un programa

##### 2. Realiza una estructura de control simple utilizando una condicion, si la condición se cumple, retorna true, en caso contrario, retorna false.

```js
//var a=2;b=5
if(a<b){
  return true
}else{
  return false
}
```

##### 3. Escribe un bloque de código para validar si una variable `number` es menor que `10` para loguear `one digit`, de lo contrario, loguea `two digits`.

Solution:

```js
// 
if(number<10){
  console.log('One Digit')
}else{
  console.log('two digit')
}
```


### Ciclos

##### 1. Describe que es un ciclo y para que funcionan:

> Es una estructura de control

##### 2. Realiza un ciclo for iterando el siguiente arreglo: var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:

```js
// var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(i=0;i<myArray.lenght;i++){
  console.log(myArray[i])
}
```


##### 3. Escribe un bloque de código para loguear los números de `0-9` usando `while` y  `do-while`  loops.

**`while`** solution:

```js
var i=0
while(i<10){
  console.log(i);
  i+=1;
}
```

**`do-while`** solution:

```js
// var i=0
    do{console.log(i);
    i+=1;
    }while(i<10)

```

##### 4. ¿Cuales son las 3 clausulas de sintaxis para un `for` loop?

> _your answer here_

### Sección: Functions

---

##### 1. ¿Qué es una función?

> Estructura de codigo para calcular valores que puede ser reutilizado

##### 2 Escribe una función `sum` que reciba dos numberos como argumentos y que regrese la suma de ambos.

Solution:

```js
// your code here
function sum(a,b){
  suma=a+b;
  return suma
}
```

##### 3. ¿Qué es el scope en JavaScript?

> Es el alcance o visibilidad que tiene una variable dentro de una función

##### 4. Responde `true` o `false` para las siguientes preguntas:

Consider:

```js
function outer() {
  var a = 1;

  function inner() {
    var b = 2;
  }

  inner();
}

outer();
```

##### 5. ¿La función `inner` tiene acceso a al scope de la función `outer`?

> true

###### 6. ¿La función `outer` tiene acceso al scope de la función `inner`?

> false

## Section: Challenges

---

##### 1. Crea una funcion llamada `calculateAreaOfACircle` que reciba `radius` como parámetro. Usa una variable llamada `PI` igual a `3.14159`.

Solution:

```js
// crea la variable PI aqui
var PI=3.14159


// crea tu funcion aqui
function calculateAreaOfACircle(radius){
area=radius*radius*PI;
return area
}

```

##### 2. Escribe una función que revierta el siguiente array


```js
// your code here
function reverse (array){
    var reversed =[]
    for(i=array.length-1;i>=0; i--){
        reversed.push(array[i])
        array+=array.sort[i]
    }
    return reversed
}
```


##### 3. Escribe una funcion que compare dos arreglos y retorne true si son idénticos, retorna false en caso contrario.

```js
// your code here
function CompareArray(){
  myArrayA=[]
  myArrayB=[]
  cont=0
  for(i=0; i<myArrayA.lenght;i++){
    if(myArrayA[i]!=myArrayB[i]){
      cont++
    }
  }
  if(cont>0){
    return false
  }else{
    return true
  }
}
```

