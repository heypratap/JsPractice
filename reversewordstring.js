//Write a function that reverses the order of words in a sentence.

function reverseWords(str) {

    const sentence = str.split(" ").reverse()
    const reverseSentence = sentence.join(" ")
    return reverseSentence

}

console.log(reverseWords("I love JavaScript"));