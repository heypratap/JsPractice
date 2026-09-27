//Write a function that finds the LCM (Least Common Multiple) of two numbers.

function lcm(a,b){
    for(let i = 1; i <= a*b; i++){
        if(i%a ===0 && i%b === 0){
           return i
        }
    }
}
console.log(lcm(4,6))