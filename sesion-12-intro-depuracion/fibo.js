function fibo(num) {
    let numeros = []
    let a,b,c = 0
    
    for (let index = 0; index < num; index++) {
        if (index == 0) {
            b = 0    
            c = 1    
        }
        else  {
            a = numeros[index-1]
            c = a + b
            b = numeros[index-1]
        }
        numeros = [...numeros, c]
        
//        console.log(c)
    }
    return numeros
    
}


const fibonaci = fibo(6)
console.log(fibonaci)


//Recursión llamar la propia funcion

var fib = function(n) {
    if (n <= 1) return n;

    return fib(n-1) + fib(n-2);
}
console.log(fib(6))


//Solución BOOTCAMP

function Fibonacci(num) {
    if (num === 1) return [1]
    if (num === 2) return [1, 1]
    let list = [1, 1]
    for (let i = 2; i < num; i++) {
        list.push(list[i - 1] + list[i - 2])
    }
    return list
}

console.log(Fibonacci(6))