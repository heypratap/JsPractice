function reverseInteger(num) {
     if(num === 0) return num
    let reverse = 0
  while(num>0){
        let lastDigit = num%10
        reverse =( reverse*10) + lastDigit
          num = Math.floor(num / 10)
    }
    return reverse

}

console.log(reverseInteger(1234));