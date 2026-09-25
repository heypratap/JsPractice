//Write a function that calculates the factorial of a number.

function factorial(num){
    let result = 1;
    for(let i = num; i>=1; i--)
        result = result * i
    return result
}

console.log(factorial(5))