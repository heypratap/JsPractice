function gcd(a,b){
    let divisor = 1
    for(let i =1 ; i<= Math.min(a,b); i++){
        if(a%i===0 && b%i===0){
          divisor = i
        }
    }
    return divisor
}
console.log(gcd(2,18))