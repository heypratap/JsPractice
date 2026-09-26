//Write a function that checks whether a number is an Armstrong number.

function isArmstrong(num){
let originalNumber = num;
let armstrong =0;
while(num>0 ){
let lastDigit = num%10;
armstrong = armstrong + Math.pow(lastDigit,3);
 num = Math.floor(num / 10)

}
return originalNumber === armstrong
}

console.log(isArmstrong(153))