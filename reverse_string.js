
//Write a JavaScript function that takes a string and returns the reversed string.


function reverseString(str){
    let reverse = ""
    for(let i =  str.length-1 ; i >= 0; i--){
        reverse =  reverse+str[i]
    }
    return reverse

}
console.log(reverseString("hello")
)