//Write a function that prints the first n numbers of the Fibonacci series.

function fibonacci(num){
let a = 0;
let b =1;
let next;
for(let i=0; i<num; i++){
    console.log(a)
 next = a+b;
    a = b;
    b =next

}


}
fibonacci(7)