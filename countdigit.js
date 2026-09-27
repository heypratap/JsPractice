// Write a function that counts how many digits a number contains.

function countDigits(num){
    if(num === 0) return 1
    let count=0;
    while(num>0){
       num = Math.floor(num/10);
        count++
    }
    return count

}
console.log(countDigits(12345))