# JS Closures / Scoping exercises

1. What’s the result of executing this code and why.
  ```js
  function test() {
     console.log(a);
     console.log(foo());
     
     var a = 1;
     function foo() {
        return 2;
     }
  }
  
  test();
  ```

>Primero, la varible "a" no esta definida al momento de hacer el console.log, por lo que en la primera vista nos saldra indefinida
Segundo, no le hará caso a la variable por lo que se le dice que retorne 2 (HOISTING)


2. What is result?
  ```js
  var a = 1; 
    function someFunction(number) {
      function otherFunction(input) {
      return a;
    }
    a = 5;
    return otherFunction;
  }
  
  var firstResult = someFunction(9);
  var result = firstResult(2);
  ```
> Undefined
La funcion firstResult almacena la funcion someFunction(9), si hacemos console.log a result dara 5, porque toma el scope de someFunction

3. What is the result of the following code? Explain your answer.
  ```js
  var fullname = 'John Doe';
  var obj = {
     fullname: 'Colin Ihrig',
     prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
           return this.fullname;
        }
     }
  };
  
  console.log(obj.prop.getFullname());

  var test = obj.prop.getFullname;
  
  console.log(test());
  ```
> Aurelio De Rosa, imprime esto porque el console.log inicial esta en el contexto de la prop. porque eso es lo primero que encuentra en este contexto.
Undefined, aparace porque test no es una funcion
4. What will you see in the console for the following example?
  ```js
  var a = 1; 
  function b() { 
      a = 10; 
      return; 
      function a() {} 
  } 
  b(); 
  console.log(a);    
  ```

> 1