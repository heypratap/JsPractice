//Write a function that returns the sum of all digits in a number.

function sumOfDigits(num) {
    let sum = 0;
    while(num>0){
        let lastDigit = num%10
        sum = sum + lastDigit
        num = Math.floor(num/10)
    }
    return sum
}

console.log(sumOfDigits(12345));