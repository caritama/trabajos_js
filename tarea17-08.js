/* Por equipos realizaran la resolución de los siguientes algoritmos:
Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively
Write a JavaScript function that checks whether a passed string is palindrome or not? 
Note: A palindrome is word, phrase, or sequence that reads  the same backward as forward */
function orderArray(array){
    var datos = array.length

    function comparar (a,b){
        return a-b
    }

    array.sort(comparar)
    return ('El 2do menor es '+array[1]+" y el segundo mayor es " + array[array.length-2])
}
console.log(orderArray([1,7,2,5,8,4,3,9]))

function palindroma(hola){
    var palabra = hola.replace(/ /g,"").toLowerCase()
    var tem = palabra.length-1
    for (var i = 0;i < palabra.length/2; i++) {
        if (palabra[i]!= palabra[tem]) {
            return "NO ES UNA PALABRA PALINDROMA"
        }
        tem--
    }
    
    return "SI ES UNA PALABRA PALINDROMA"
}
console.log(palindroma('anita lava la tina'))