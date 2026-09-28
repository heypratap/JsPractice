//Write a function that counts the number of vowels and consonants in a string.

function countVowelsConsonants(str) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let consonantCount = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if(/[a-zA-Z]/.test(char)) consonantCount++;
  }
  return {
    vowels: vowelCount,
    consonants: consonantCount,
  };
}

console.log(countVowelsConsonants("hello"));
