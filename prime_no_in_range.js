//Write a JavaScript function that prints all prime numbers between two given numbers.

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= num - 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function printPrime(start, end) {
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) console.log(i);
  }
}
printPrime(10, 100);
