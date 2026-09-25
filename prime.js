//Write a function that checks whether a number is prime.

function isPrime(num){
    if(num <= 1  )
        return "false";
    for(let i = 2; i <= num-1 ; i++){
        if( num%i===0   )
            return false
    }
    return true
}
console.log(isPrime(47
))