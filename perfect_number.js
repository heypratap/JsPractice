//Write a function that checks whether a number is a Perfect Number.

function isPerfect(num){
    
    let divisors = 0;
    if (num <= 0) return false
    for(let i = 1; i <num; i++){
        if(num%i === 0){
            divisors = divisors + i
        }
    }
    return num ===divisors
}
console.log(isPerfect(6))