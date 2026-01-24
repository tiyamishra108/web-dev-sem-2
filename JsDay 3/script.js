//--------------- SPLIT METHOD, FUNCTIONS, CALLBACKS, DATE OBJECTS------------------//

// split method
let sentence = "i am a comma seperated sentence";
let words = sentence.split(" ");
console.log(words);
// output: [ 'i', 'am', 'a', 'comma', 'seperated', 'sentence' ]

let sentence2 = "i am a comma seperated sentence";
let words2 = sentence2.split("a");
console.log(words2);
//output: [ 'i ', 'm ', ' ', ' comm', ' seper', 'ted sentence' ]

// find occurrence of 'r'
let str = "tu meri mai tera ,mai teri tu mera";
let count = str.split("r").length - 1;
console.log("Occurrence of 'r' is:", count);
// output: Occurrence of 'r' is: 4

//----------------------------------FUNCTIONS------------------------------------------//
// regular function
function demo() {
    console.log("Demo of regular function");
}
demo();
// output: Demo of regular function

// regular function with parameters
function sample(a, b) {
    return a + b;
}
console.log(sample(5, 10));
// output: 15

// arrow function
const add = (c, d) => c + d;
console.log(add(4, 6));
// output: 10

// map method
let arr = [1, 2, 3, 4, 5];
let res = arr.map(x => x + 2);
console.log(res);
// output: [ 3, 4, 5, 6, 7 ]

//callback function
// settimeout uses callback and timedelay as parameter
setTimeout(()=>{
alert("hello")
},5000)
// output: after 5 seconds alert box with "hello" will appear

setInterval(()=>{
console.log("sign up")
},1000)
// output: after every 1 second "sign up" will be printed in console

//date object
let date = new  Date();
console.log(date)
// output: current date and time will be printed