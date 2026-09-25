//Write a function that returns the Nth Fibonacci number.
function fibonacciNth(n){
    let a = 0;
let b =1;

for(let i=0; i<n; i++){
 let next = a+b;
    a = b;
    b =next
}
return a

}

console.log(fibonacciNth(6))